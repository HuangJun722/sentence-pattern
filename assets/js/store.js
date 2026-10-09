/* 存储层 + 记忆排期。所有数据存在浏览器本地，可整体导出为 JSON。
   接口刻意保持简单：以后要换成云存储，只需替换 Store.load / Store.persist 两个函数。 */
(function () {
  "use strict";

  var KEY = "jumo.v1";
  var DAY = 86400000;

  function today() {
    var d = new Date();
    return new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
  }
  function daysFromToday(n) { return today() + n * DAY; }

  // ---------- 初始化 ----------
  function blank() {
    return {
      version: 1,
      topics: [],
      pool: [],
      settings: {
        dailyNew: 10,
        dailyReview: 80,
        rate: 0.9,
        autoSpeak: false,
        trainB: true,       // B 类（轻微改编）是否进入训练队列
        onlyA: false        // 严格模式：只训练 A 类原句
      },
      log: [],        // {date, type, count, ms}
      transfer: [],   // {date, ok, from, to, ms}
      lastBackup: 0
    };
  }

  function seedTopics() {
    var out = [];
    window.SEED.topics.forEach(function (t) {
      var topic = {
        id: t.id, name: t.name, nameEn: t.nameEn,
        lastPracticed: 0,
        questions: t.questions.map(function (q) {
          return {
            id: q.id, text: q.text,
            sentences: q.sentences.map(function (s) {
              return {
                id: s.id, tier: s.tier, en: s.en, zh: s.zh,
                chunks: s.chunks || [], source: s.source || "",
                srs: { ease: 2.5, interval: 0, due: 0, reps: 0, lapses: 0 },
                ret: 0,            // 提取流畅度 0~5
                seen: 0,           // 输出练习次数
                createdAt: Date.now()
              };
            })
          };
        })
      };
      out.push(topic);
    });
    return out;
  }

  var state = null;

  function load() {
    var raw = null;
    try { raw = localStorage.getItem(KEY); } catch (e) { raw = null; }
    if (!raw) {
      state = blank();
      state.topics = seedTopics();
      persist();
    } else {
      try { state = JSON.parse(raw); } catch (e) { state = blank(); state.topics = seedTopics(); }
    }
    if (!state.settings) state.settings = blank().settings;
    if (!state.pool) state.pool = [];
    if (!state.log) state.log = [];
    if (!state.transfer) state.transfer = [];
    return state;
  }

  function persist() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); }
    catch (e) { alert("保存失败：本地存储空间可能已满。请先到「数据」页导出备份。"); }
  }

  // ---------- 查询 ----------
  function allSentences() {
    var out = [];
    state.topics.forEach(function (t) {
      t.questions.forEach(function (q) {
        q.sentences.forEach(function (s) { out.push({ s: s, q: q, t: t }); });
      });
    });
    return out;
  }

  function findSentence(id) {
    var all = allSentences();
    for (var i = 0; i < all.length; i++) if (all[i].s.id === id) return all[i];
    return null;
  }

  function trainable(s) {
    if (s.tier === "C") return false;                 // C 类永不进训练队列
    if (s.tier === "A") return true;
    if (s.tier === "B") return state.settings.onlyA ? false : state.settings.trainB;
    return false;
  }

  // 今日复习队列：到期（或从未学过）的句子
  function reviewQueue() {
    var t = today();
    var review = [], fresh = [];
    allSentences().forEach(function (x) {
      if (!trainable(x.s)) return;
      if (x.s.srs.reps === 0 && x.s.srs.due === 0) fresh.push(x);
      else if (x.s.srs.due <= t) review.push(x);
    });
    review.sort(function (a, b) { return a.s.srs.due - b.s.srs.due; });
    var newLimit = state.settings.dailyNew;
    var revLimit = state.settings.dailyReview;
    return review.slice(0, revLimit).concat(fresh.slice(0, newLimit));
  }

  // 输出练习队列：优先取久未练习、且已见过至少一次的句子
  function outputQueue(n) {
    var all = allSentences().filter(function (x) { return trainable(x.s); });
    all.sort(function (a, b) {
      var pa = a.s.lastOutput || 0, pb = b.s.lastOutput || 0;
      return pa - pb;
    });
    return all.slice(0, n || 8);
  }

  // ---------- 排期（SM-2 简化版）----------
  // grade: 1 忘了 / 2 卡 / 3 顺 / 4 太简单
  function schedule(s, grade) {
    var srs = s.srs;
    if (grade < 3) {
      srs.reps = 0;
      srs.interval = 0;
      srs.lapses += 1;
      srs.ease = Math.max(1.3, srs.ease - 0.2);
      srs.due = today();                 // 当天再来一次
    } else {
      srs.reps += 1;
      if (srs.reps === 1) srs.interval = 1;
      else if (srs.reps === 2) srs.interval = 3;
      else srs.interval = Math.round(srs.interval * srs.ease);
      if (grade === 4) srs.interval = Math.round(srs.interval * 1.3);
      srs.ease = srs.ease + (0.1 - (4 - grade) * (0.08 + (4 - grade) * 0.02));
      srs.ease = Math.min(2.8, Math.max(1.3, srs.ease));
      srs.due = daysFromToday(Math.max(1, srs.interval));
    }
    srs.last = Date.now();
  }

  // 提取流畅度：只记“能不能说出来”，不动排期
  function bumpRetrieval(s, ok) {
    if (ok === "smooth") s.ret = Math.min(5, s.ret + 1);
    else if (ok === "hard") s.ret = Math.max(0, s.ret - 1);
    else s.ret = Math.max(0, s.ret - 2);
    s.seen = (s.seen || 0) + 1;
    s.lastOutput = Date.now();
  }

  // ---------- 记录 ----------
  function addLog(type, count, ms) {
    state.log.push({ date: Date.now(), type: type, count: count || 1, ms: ms || 0 });
    if (state.log.length > 3000) state.log = state.log.slice(-3000);
  }
  function addTransfer(ok, from, to, ms) {
    state.transfer.push({ date: Date.now(), ok: ok, from: from, to: to, ms: ms || 0 });
    if (state.transfer.length > 1000) state.transfer = state.transfer.slice(-1000);
  }

  function streak() {
    if (!state.log.length) return 0;
    var days = {};
    state.log.forEach(function (l) {
      var d = new Date(l.date);
      days[new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime()] = 1;
    });
    var n = 0, cur = today();
    if (!days[cur]) cur = today() - DAY;   // 今天还没练，从昨天算起
    while (days[cur]) { n++; cur -= DAY; }
    return n;
  }

  function todayCount() {
    var t = today(), n = 0;
    state.log.forEach(function (l) { if (l.date >= t) n += (l.count || 1); });
    return n;
  }

  // ---------- 备份 / 恢复 ----------
  function toJSON() {
    var copy = JSON.parse(JSON.stringify(state));
    delete copy.audio;
    return JSON.stringify(copy, null, 2);
  }

  function fromJSON(text) {
    var obj = JSON.parse(text);
    if (!obj || !obj.topics) throw new Error("文件格式不对：找不到句模数据");
    state = obj;
    if (!state.settings) state.settings = blank().settings;
    if (!state.pool) state.pool = [];
    if (!state.log) state.log = [];
    if (!state.transfer) state.transfer = [];
    persist();
  }

  function backupCode() {
    var json = JSON.stringify(state);
    var bytes = new TextEncoder().encode(json);
    var bin = "";
    for (var i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
    return btoa(bin);
  }

  function restoreCode(code) {
    var bin = atob(code.replace(/\s/g, ""));
    var bytes = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    var json = new TextDecoder().decode(bytes);
    fromJSON(json);
  }

  window.Store = {
    load: load, persist: persist, blank: blank,
    get state() { return state; },
    allSentences: allSentences, findSentence: findSentence,
    trainable: trainable, reviewQueue: reviewQueue, outputQueue: outputQueue,
    schedule: schedule, bumpRetrieval: bumpRetrieval,
    addLog: addLog, addTransfer: addTransfer,
    streak: streak, todayCount: todayCount,
    toJSON: toJSON, fromJSON: fromJSON,
    backupCode: backupCode, restoreCode: restoreCode,
    today: today, DAY: DAY
  };
})();

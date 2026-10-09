/* 句模系统 · 主程序 */
(function () {
  "use strict";

  var S = null;                 // Store.state
  var view = document.getElementById("view");
  var train = null;             // 训练浮层

  // ---------- 小工具 ----------
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
  function shuffle(a) { for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function sec(ms) { return (ms / 1000).toFixed(1) + "s"; }
  function toast(msg) {
    var d = document.createElement("div");
    d.className = "toast"; d.textContent = msg;
    document.body.appendChild(d);
    setTimeout(function () { d.remove(); }, 1800);
  }
  function save() { Store.persist(); refreshMeta(); }

  function refreshMeta() {
    $("#streak").textContent = Store.streak();
    $("#todayCount").textContent = Store.todayCount();
  }

  function dots(n) {
    var h = "";
    for (var i = 0; i < 5; i++) h += '<i class="' + (i < n ? "on" : "") + '"></i>';
    return '<span class="dots" title="提取流畅度 ' + n + '/5">' + h + "</span>";
  }
  function tierLabel(t) {
    return t === "A" ? "A 原句" : t === "B" ? "B 改编" : "C 仿写";
  }
  function tierNote(t) {
    return t === "A" ? "母语者原句，未改动"
      : t === "B" ? "有真实出处，为口语化做了轻微改编"
        : "AI 仿写，非真实出处，仅作结构练习";
  }

  // ---------- 路由 ----------
  var routes = {};

  function go(hash) { location.hash = hash; }

  function render() {
    var r = (location.hash || "#/today").replace("#/", "");
    var parts = r.split("/");
    var name = parts[0];
    if (!routes[name]) name = "today";
    $$("#nav a").forEach(function (a) { a.classList.toggle("on", a.dataset.r === name); });
    S = Store.state;
    view.innerHTML = routes[name](parts[1]);
    if (routes[r + "After"]) routes[r + "After"]();
    refreshMeta();
  }

  // ---------- 今日 ----------
  routes.today = function () {
    var due = Store.reviewQueue().length;
    var target = Math.max(10, due);
    var done = Store.todayCount();
    var pct = Math.min(100, Math.round(done / target * 100));
    var C = 2 * Math.PI * 34;

    var lastBk = S.lastBackup ? Math.floor((Date.now() - S.lastBackup) / 86400000) : -1;

    var h = "";
    h += '<div class="card"><div class="ring">';
    h += '<svg viewBox="0 0 84 84"><circle cx="42" cy="42" r="34" fill="none" stroke="#eef0f2" stroke-width="9"/>';
    h += '<circle cx="42" cy="42" r="34" fill="none" stroke="#2f6fed" stroke-width="9" stroke-linecap="round" stroke-dasharray="' + C + '" stroke-dashoffset="' + (C * (1 - pct / 100)) + '"/></svg>';
    h += '<div><div class="num">' + done + " / " + target + '</div><div class="muted">今日已练句数</div></div></div></div>';

    h += '<h2 class="section">今日训练 · 三段式</h2>';
    h += '<button class="btn primary wide" data-act="warmup">① 热身回顾 —— 最久没碰的句模</button>';
    h += '<button class="btn wide" data-act="output">② 输出练习 —— 计时口答，自评顺/卡/忘</button>';
    h += '<button class="btn wide" data-act="cross">③ 跨话题拼贴 —— 用别的句模答这题</button>';

    h += '<h2 class="section">待办</h2>';
    h += '<div class="card"><div class="stat"><span>今日到期复习</span><b>' + due + ' 句</b></div>';
    h += '<div class="stat"><span>可训练句子</span><b>' + Store.allSentences().filter(function (x) { return Store.trainable(x.s); }).length + ' 句</b></div>';
    h += '<div class="stat"><span>上次备份</span><b>' + (lastBk < 0 ? "从未备份" : lastBk + " 天前") + "</b></div></div>";
    if (lastBk < 0 || lastBk >= 7) {
      h += '<button class="btn wide" data-act="gobackup">去备份（数据只存在这台设备上）</button>';
    }
    return h;
  };

  document.addEventListener("click", function (e) {
    var b = e.target.closest ? e.target.closest("[data-act]") : null;
    if (!b) return;
    var act = b.dataset.act;
    if (act === "warmup") return sessionWarmup();
    if (act === "output") return sessionOutput();
    if (act === "cross") return openCross();
    if (act === "gobackup") return go("#/data");
  });

  // ---------- 训练浮层 ----------
  function openTrain(html) {
    closeTrain();
    train = document.createElement("div");
    train.className = "train";
    train.innerHTML = '<div class="inner">' + html + "</div>";
    document.body.appendChild(train);
  }
  function closeTrain() { if (train) { train.remove(); train = null; } }
  function updateTrain(html) {
    if (!train) openTrain(html);
    else train.innerHTML = '<div class="inner">' + html + "</div>";
  }

  function trainHead(title, i, total) {
    return '<div class="row" style="align-items:center;margin-bottom:8px">' +
      '<button class="btn sm ghost" data-t="exit">退出</button>' +
      '<div class="muted">' + title + "　" + (i + 1) + " / " + total + "</div>" +
      '<div class="spacer"></div><div class="timer" data-t="timer">0.0s</div></div>';
  }

  var timerId = null;
  function startTimer(t0) {
    stopTimer();
    timerId = setInterval(function () {
      var el = $('[data-t="timer"]', train);
      if (el) el.textContent = ((Date.now() - t0) / 1000).toFixed(1) + "s";
    }, 100);
  }
  function stopTimer() { if (timerId) { clearInterval(timerId); timerId = null; } }

  document.addEventListener("click", function (e) {
    var b = e.target.closest ? e.target.closest("[data-t]") : null;
    if (!b || !train) return;
    var t = b.dataset.t;
    if (t === "exit") { stopTimer(); closeTrain(); render(); }
  });

  function sentenceBlock(x, revealed) {
    var s = x.s;
    var h = '<div class="sent' + (s.tier === "C" ? " dim" : "") + '">';
    h += '<span class="badge ' + s.tier + '">' + tierLabel(s.tier) + "</span>" + dots(s.ret || 0);
    if (revealed) {
      h += '<div class="en">' + esc(s.en) + "</div>";
      h += '<div class="zh">' + esc(s.zh) + "</div>";
      if (s.chunks && s.chunks.length) h += '<div class="chunks">词火：' + s.chunks.map(esc).join(" ｜ ") + "</div>";
      h += '<div class="src">' + esc(s.source) + "</div>";
      h += '<div class="row" style="margin-top:10px">';
      h += '<button class="btn sm" data-say="' + s.id + '">发音</button>';
      h += '<button class="btn sm" data-rec="' + s.id + '">录音</button>';
      h += '<button class="btn sm" data-play="' + s.id + '">回放</button>';
      h += "</div>";
    }
    h += "</div>";
    return h;
  }

  // 录音/发音按钮（浮层与页面共用）
  document.addEventListener("click", function (e) {
    var el = e.target.closest ? e.target.closest("[data-say],[data-rec],[data-play]") : null;
    if (!el) return;
    if (el.dataset.say) {
      var x = Store.findSentence(el.dataset.say);
      if (x) Media.speak(x.s.en, S.settings.rate);
    }
    if (el.dataset.rec) {
      var id = el.dataset.rec;
      if (Media.isRecording()) {
        Media.stop().then(function () { toast("录音已保存"); });
        el.textContent = "录音";
      } else {
        Media.start(id).then(function () { el.textContent = "停止"; toast("开始录音"); });
      }
    }
    if (el.dataset.play) Media.play(el.dataset.play);
  });

  // ---------- ① 热身回顾 ----------
  function sessionWarmup() {
    var topics = S.topics.slice().sort(function (a, b) { return (a.lastPracticed || 0) - (b.lastPracticed || 0); });
    var topic = topics[0];
    var items = [];
    topic.questions.forEach(function (q) {
      q.sentences.forEach(function (s) { if (Store.trainable(s)) items.push({ s: s, q: q, t: topic }); });
    });
    if (!items.length) { toast("这个句模没有可训练的句子"); return; }
    shuffle(items);
    items = items.slice(0, 6);

    var i = 0, t0 = Date.now(), t0All = Date.now();
    startTimer(t0All);

    function step() {
      var x = items[i];
      var h = trainHead("热身回顾 · " + topic.name, i, items.length);
      h += '<div class="muted">问题</div><div class="prompt">' + esc(x.q.text) + "</div>";
      h += '<div class="muted">看中文提示，先把这句话说出来</div>';
      h += '<div class="card"><div class="zh" style="font-size:16px;color:var(--text)">' + esc(x.s.zh) + "</div></div>";
      h += '<div id="ans"></div>';
      h += '<div class="row" style="margin-top:12px"><button class="btn primary" data-w="show">看原文并朗读</button></div>';
      h += '<div id="grade"></div>';
      updateTrain(h);
      startTimer(t0 = Date.now());

      $('[data-w="show"]').onclick = function () {
        var box = $("#ans", train);
        box.innerHTML = sentenceBlock(x, true);
        if (S.settings.autoSpeak) Media.speak(x.s.en, S.settings.rate);
        $("#grade", train).innerHTML =
          '<div class="row" style="margin-top:12px"><button class="btn" data-g="smooth">顺</button>' +
          '<button class="btn" data-g="hard">卡</button><button class="btn" data-g="forget">忘</button></div>';
        $$("[data-g]", train).forEach(function (btn) {
          btn.onclick = function () {
            Store.bumpRetrieval(x.s, btn.dataset.g);
            Store.addLog("warmup", 1, Date.now() - t0);
            save();
            next();
          };
        });
      };
    }
    function next() {
      i++;
      if (i >= items.length) {
        topic.lastPracticed = Date.now();
        stopTimer();
        save();
        updateTrain('<div class="card"><h2>热身回顾完成</h2><p class="muted">' + topic.name +
          "　" + items.length + ' 句</p><button class="btn primary wide" data-t="exit">回到今日</button></div>');
        return;
      }
      step();
    }
    step();
  }

  // ---------- ② 输出练习 ----------
  function sessionOutput() {
    var items = Store.outputQueue(8);
    if (!items.length) { toast("没有可训练的句子"); return; }
    var i = 0, t0 = Date.now(), t0All = Date.now();
    startTimer(t0All);

    function step() {
      var x = items[i];
      var h = trainHead("输出练习 · " + x.t.name, i, items.length);
      h += '<div class="prompt">' + esc(x.q.text) + "</div>";
      h += '<div class="muted">先自己开口答，计时开始。答完再看参考句。</div>';
      h += '<div id="ans"></div>';
      h += '<div class="row" style="margin-top:12px"><button class="btn primary" data-o="show">看参考句</button></div>';
      h += '<div id="grade"></div>';
      updateTrain(h);
      startTimer(t0 = Date.now());

      $('[data-o="show"]').onclick = function () {
        $("#ans", train).innerHTML = sentenceBlock(x, true);
        if (S.settings.autoSpeak) Media.speak(x.s.en, S.settings.rate);
        $("#grade", train).innerHTML =
          '<div class="row" style="margin-top:12px"><button class="btn" data-g="smooth">顺</button>' +
          '<button class="btn" data-g="hard">卡</button><button class="btn" data-g="forget">忘</button></div>';
        $$("[data-g]", train).forEach(function (btn) {
          btn.onclick = function () {
            var g = btn.dataset.g;
            Store.bumpRetrieval(x.s, g);
            // 卡/忘只把句子推进今日复习队列，不动正式排期
            if (g !== "smooth") x.s.srs.due = Store.today();
            Store.addLog("output", 1, Date.now() - t0);
            save();
            next();
          };
        });
      };
    }
    function next() {
      i++;
      if (i >= items.length) {
        stopTimer();
        save();
        updateTrain('<div class="card"><h2>输出练习完成</h2><p class="muted">' + items.length +
          ' 句</p><button class="btn primary wide" data-t="exit">回到今日</button></div>');
        return;
      }
      step();
    }
    step();
  }

  // ---------- ③ 跨话题拼贴 ----------
  function openCross() {
    var pool = [];
    S.topics.forEach(function (t) {
      t.questions.forEach(function (q) { pool.push({ q: q, t: t }); });
    });
    if (pool.length < 2) { toast("至少需要两个句模"); return; }
    var target = pick(pool);
    var others = pool.filter(function (p) { return p.t.id !== target.t.id; });
    var mats = shuffle(others).slice(0, 2).map(function (p) {
      var cand = p.q.sentences.filter(function (s) { return Store.trainable(s); });
      return { t: p.t, q: p.q, s: cand.length ? pick(cand) : p.q.sentences[0] };
    });

    var t0 = Date.now();
    var h = trainHead("跨话题拼贴", 0, 1);
    h += '<div class="muted">请用英语回答下面这个问题</div>';
    h += '<div class="prompt">' + esc(target.q.text) + "</div>";
    h += '<div class="card"><div class="muted">素材提示（来自别的句模，可用可不用）</div>';
    mats.forEach(function (m) {
      h += '<div class="qtitle">' + esc(m.t.name) + "</div>";
      h += '<div class="sent"><span class="badge ' + m.s.tier + '">' + tierLabel(m.s.tier) + "</span>";
      h += '<div class="en">' + esc(m.s.en) + "</div>";
      h += '<div class="zh">' + esc(m.s.zh) + "</div>";
      h += '<div class="row" style="margin-top:8px"><button class="btn sm" data-say="' + m.s.id + '">发音</button></div>';
      h += "</div>";
    });
    h += "</div>";
    h += '<div class="row" style="margin-top:12px">';
    h += '<button class="btn primary" data-c="yes">借到了</button>';
    h += '<button class="btn" data-c="no">没借到</button>';
    h += "</div>";
    h += '<p class="muted" style="margin-top:10px">「借到了」= 你确实用上了别的句模里的观点或表达。这个比例就是迁移率。</p>';
    openTrain(h);
    startTimer(t0);

    $$("[data-c]", train).forEach(function (b) {
      b.onclick = function () {
        var ok = b.dataset.c === "yes";
        Store.addTransfer(ok, mats.map(function (m) { return m.t.name; }).join("+"), target.t.name, Date.now() - t0);
        Store.addLog("cross", 1, Date.now() - t0);
        stopTimer(); save();
        updateTrain('<div class="card"><h2>' + (ok ? "借到了" : "没借到") + "</h2>" +
          '<p class="muted">' + esc(target.t.name) + "　用时 " + sec(Date.now() - t0) + "</p>" +
          '<button class="btn wide" data-c="again">再来一题</button>' +
          '<button class="btn primary wide" data-t="exit">回到今日</button></div>');
        var ag = $('[data-c="again"]', train);
        if (ag) ag.onclick = openCross;
      };
    });
  }

  // ---------- 句模 ----------
  routes.topics = function () {
    var h = '<h2 class="section">句模（每个 = 1 个话题 + 6 问题 + 12 句）</h2>';
    S.topics.forEach(function (t) {
      var all = [], tr = [];
      t.questions.forEach(function (q) { q.sentences.forEach(function (s) { all.push(s); if (Store.trainable(s)) tr.push(s); }); });
      var avg = tr.length ? (tr.reduce(function (a, s) { return a + (s.ret || 0); }, 0) / tr.length) : 0;
      var pct = all.length ? Math.round(tr.length / all.length * 100) : 0;
      h += '<div class="card topic" data-topic="' + t.id + '">';
      h += '<div style="flex:1"><div class="name">' + esc(t.name) + '</div>';
      h += '<div class="sub">' + esc(t.nameEn) + "　可训练 " + tr.length + "/" + all.length + "　平均提取 " + avg.toFixed(1) + "/5</div>";
      h += '<div class="bar"><i style="width:' + pct + '%"></i></div></div>';
      h += "</div>";
    });
    h += '<button class="btn wide" data-newtopic="1">新建句模（新话题）</button>';
    return h;
  };
  routes.topicsAfter = function () {
    $$("[data-topic]").forEach(function (el) {
      el.onclick = function () { go("#/topic/" + el.dataset.topic); };
    });
    var nt = $("[data-newtopic]");
    if (nt) nt.onclick = function () {
      var name = prompt("话题名称（中文，例如：家庭与童年）");
      if (!name) return;
      var en = prompt("话题英文名（可留空）") || "";
      var id = "t_" + Date.now();
      var qs = [];
      for (var i = 1; i <= 6; i++) {
        qs.push({ id: id + "_q" + i, text: "问题 " + i + "（点右侧编辑改成你会被问到的问题）", sentences: [] });
      }
      S.topics.push({ id: id, name: name, nameEn: en, lastPracticed: 0, questions: qs });
      save(); go("#/topic/" + id);
    };
  };

  // ---------- 句模详情 ----------
  routes.topic = function () {
    var id = (location.hash || "").split("/")[2];
    var t = null;
    S.topics.forEach(function (x) { if (x.id === id) t = x; });
    if (!t) return '<div class="card">找不到这个句模</div>';
    var h = '<div class="card"><div class="row" style="align-items:center"><button class="btn sm ghost" data-back="1">返回</button>' +
      '<div class="spacer"></div><span class="muted">' + esc(t.nameEn) + "</span></div>";
    h += '<h2 style="margin:10px 0 4px">' + esc(t.name) + "</h2>";
    h += '<div class="muted">A 原句 = 母语者原句｜B 改编 = 真实出处做了口语化改动｜C 仿写 = AI 写，仅结构练习、不进训练队列</div></div>';

    t.questions.forEach(function (q) {
      h += '<div class="card">';
      h += '<div class="row" style="align-items:center"><b style="font-size:14px">' + esc(q.text) + "</b>" +
        '<div class="spacer"></div><button class="btn sm" data-qedit="' + q.id + '">改问题</button></div>';
      q.sentences.forEach(function (s) { h += sentenceBlock({ s: s, q: q, t: t }, true) + editForms(s, q); });
      h += '<div class="row" style="margin-top:8px">';
      h += '<button class="btn sm" data-add="' + q.id + '">加一句</button>';
      h += '<button class="btn sm" data-frompool="' + q.id + '">从句池嵌入</button>';
      h += "</div>";
      h += '<div id="form-' + q.id + '"></div>';
      h += "</div>";
    });
    h += '<button class="btn wide" data-deltopic="' + t.id + '">删除这个句模</button>';
    return h;
  };

  function editForms(s, q) {
    return '<div class="row" style="margin-top:8px">' +
      '<button class="btn sm" data-edit="' + s.id + '">编辑</button>' +
      '<button class="btn sm" data-del="' + s.id + '">删除</button>' +
      '<button class="btn sm" data-topool="' + s.id + '">移到句池</button></div>' +
      '<div id="edit-' + s.id + '"></div>';
  }

  routes.topicAfter = function () {
    var back = $("[data-back]");
    if (back) back.onclick = function () { go("#/topics"); };

    $$("[data-qedit]").forEach(function (b) {
      b.onclick = function () {
        var qid = b.dataset.qedit, q = findQ(qid);
        var v = prompt("修改问题", q.text);
        if (v) { q.text = v; save(); render(); }
      };
    });

    $$("[data-edit]").forEach(function (b) {
      b.onclick = function () {
        var box = document.getElementById("edit-" + b.dataset.edit);
        var x = Store.findSentence(b.dataset.edit);
        if (!x) return;
        if (box.innerHTML) { box.innerHTML = ""; return; }
        box.innerHTML =
          '<div style="margin-top:10px">' +
          "<label>英文长句</label><textarea data-f=\"en\">" + esc(x.s.en) + "</textarea>" +
          "<label>中文</label><textarea data-f=\"zh\">" + esc(x.s.zh) + "</textarea>" +
          "<label>词火（用 / 分隔）</label><input data-f=\"chunks\" value=\"" + esc((x.s.chunks || []).join(" / ")) + "\">" +
          "<label>出处</label><input data-f=\"source\" value=\"" + esc(x.s.source) + "\">" +
          "<label>层级</label><select data-f=\"tier\"><option value=\"A\">A 原句</option><option value=\"B\">B 改编</option><option value=\"C\">C 仿写</option></select>" +
          '<div class="row" style="margin-top:10px"><button class="btn primary sm" data-save="' + x.s.id + '">保存</button></div></div>';
        var sel = $('[data-f="tier"]', box); sel.value = x.s.tier;
        $('[data-save="' + x.s.id + '"]', box).onclick = function () {
          x.s.en = $('[data-f="en"]', box).value.trim();
          x.s.zh = $('[data-f="zh"]', box).value.trim();
          x.s.chunks = $('[data-f="chunks"]', box).value.split("/").map(function (s) { return s.trim(); }).filter(Boolean);
          x.s.source = $('[data-f="source"]', box).value.trim();
          x.s.tier = sel.value;
          save(); render(); toast("已保存");
        };
      };
    });

    $$("[data-del]").forEach(function (b) {
      b.onclick = function () {
        if (!confirm("删除这句？")) return;
        var x = Store.findSentence(b.dataset.del);
        if (!x) return;
        x.q.sentences = x.q.sentences.filter(function (s) { return s.id !== x.s.id; });
        save(); render();
      };
    });

    $$("[data-topool]").forEach(function (b) {
      b.onclick = function () {
        var x = Store.findSentence(b.dataset.topool);
        if (!x) return;
        S.pool.push({ id: x.s.id, tier: x.s.tier, en: x.s.en, zh: x.s.zh, chunks: x.s.chunks, source: x.s.source, tags: [x.t.name], at: Date.now() });
        x.q.sentences = x.q.sentences.filter(function (s) { return s.id !== x.s.id; });
        save(); render(); toast("已移到句池");
      };
    });

    $$("[data-add]").forEach(function (b) {
      b.onclick = function () { showNewForm(b.dataset.add); };
    });
    $$("[data-frompool]").forEach(function (b) {
      b.onclick = function () { showPoolPicker(b.dataset.frompool); };
    });

    var dt = $("[data-deltopic]");
    if (dt) dt.onclick = function () {
      if (!confirm("删除整个句模？")) return;
      S.topics = S.topics.filter(function (x) { return x.id !== dt.dataset.deltopic; });
      save(); go("#/topics");
    };
  };

  function findQ(qid) {
    var r = null;
    S.topics.forEach(function (t) { t.questions.forEach(function (q) { if (q.id === qid) r = q; }); });
    return r;
  }

  function newSentenceForm(prefix) {
    return '<div style="margin-top:10px">' +
      "<label>英文长句（必须自带一个完整观点）</label><textarea " + prefix + '="en"></textarea>' +
      "<label>中文</label><textarea " + prefix + '="zh"></textarea>' +
      "<label>词火（用 / 分隔，可留空）</label><input " + prefix + '="chunks">' +
      "<label>出处（片名 / 书名 / 自己写的就写“自撰”）</label><input " + prefix + '="source">' +
      "<label>层级</label><select " + prefix + '="tier"><option value="A">A 原句（真实出处，未改）</option><option value="B">B 改编（真实出处，口语化改动）</option><option value="C" selected>C 仿写（AI 或自撰）</option></select>' +
      "</div>";
  }
  function readForm(root, prefix) {
    return {
      en: $(prefix + '="en"', root).value.trim(),
      zh: $(prefix + '="zh"', root).value.trim(),
      chunks: $(prefix + '="chunks"', root).value.split("/").map(function (s) { return s.trim(); }).filter(Boolean),
      source: $(prefix + '="source"', root).value.trim(),
      tier: $(prefix + '="tier"', root).value
    };
  }

  function showNewForm(qid) {
    var box = document.getElementById("form-" + qid);
    box.innerHTML = newSentenceForm('data-n') +
      '<div class="row" style="margin-top:10px"><button class="btn primary sm" data-nsave="' + qid + '">保存</button>' +
      '<button class="btn sm" data-ncancel="' + qid + '">取消</button></div>';
    $('[data-ncancel="' + qid + '"]').onclick = function () { box.innerHTML = ""; };
    $('[data-nsave="' + qid + '"]').onclick = function () {
      var d = readForm(box, "data-n");
      if (!d.en) { toast("英文句子不能为空"); return; }
      var q = findQ(qid);
      q.sentences.push({
        id: qid + "_s" + Date.now(), tier: d.tier, en: d.en, zh: d.zh, chunks: d.chunks, source: d.source,
        srs: { ease: 2.5, interval: 0, due: 0, reps: 0, lapses: 0 }, ret: 0, seen: 0, createdAt: Date.now()
      });
      save(); render(); toast("已加入句模");
    };
  }

  function showPoolPicker(qid) {
    var box = document.getElementById("form-" + qid);
    if (!S.pool.length) { toast("句池是空的，先去「句池」摘录几句"); return; }
    var h = '<div style="margin-top:10px"><label>选一句嵌入这个问题下</label><select data-p="sel">';
    S.pool.forEach(function (p, i) { h += '<option value="' + i + '">' + esc(p.en.slice(0, 40)) + "…</option>"; });
    h += '</select><div class="row" style="margin-top:10px"><button class="btn primary sm" data-psave="' + qid + '">嵌入</button>' +
      '<button class="btn sm" data-pcancel="' + qid + '">取消</button></div></div>';
    box.innerHTML = h;
    $('[data-pcancel="' + qid + '"]').onclick = function () { box.innerHTML = ""; };
    $('[data-psave="' + qid + '"]').onclick = function () {
      var idx = parseInt($('[data-p="sel"]', box).value, 10);
      var p = S.pool[idx];
      var q = findQ(qid);
      q.sentences.push({
        id: qid + "_s" + Date.now(), tier: p.tier, en: p.en, zh: p.zh, chunks: p.chunks, source: p.source,
        srs: { ease: 2.5, interval: 0, due: 0, reps: 0, lapses: 0 }, ret: 0, seen: 0, createdAt: Date.now()
      });
      S.pool.splice(idx, 1);
      save(); render(); toast("已嵌入句模");
    };
  }

  // ---------- 句池 ----------
  routes.pool = function () {
    var h = '<div class="card"><h2 style="margin:0 0 6px">摘录</h2>';
    h += '<div class="muted">看到好句子就丢进来。摘录 → 筛选 → 嵌入句模，这整套动作本身就是记忆过程。</div>';
    h += '<button class="btn wide" style="margin-top:10px" data-batch="1">批量摘录（粘贴一大段英文，自动切句）</button>';
    h += '<div style="margin-top:12px"><div class="muted">或者手动录一句：</div></div>';
    h += newSentenceForm("data-p") + '<div class="row" style="margin-top:10px">' +
      '<button class="btn primary sm" data-ps="1">存入句池</button></div></div>';

    h += '<h2 class="section">句池（' + S.pool.length + " 句）</h2>";
    if (!S.pool.length) h += '<div class="card muted">还没有摘录。去书里、剧里、访谈里捞一句试试。</div>';
    S.pool.forEach(function (p, i) {
      h += '<div class="card"><span class="badge ' + p.tier + '">' + tierLabel(p.tier) + "</span>";
      h += '<div class="en">' + esc(p.en) + "</div>";
      h += '<div class="zh">' + esc(p.zh) + "</div>";
      if (p.chunks && p.chunks.length) h += '<div class="chunks">词火：' + p.chunks.map(esc).join(" ｜ ") + "</div>";
      if (p.source) h += '<div class="src">' + esc(p.source) + "</div>";
      h += '<div class="row" style="margin-top:10px"><button class="btn sm" data-say2="' + i + '">发音</button>' +
        '<button class="btn sm" data-ptotopic="' + i + '">嵌入到句模</button>' +
        '<button class="btn sm" data-pdel="' + i + '">删除</button></div></div>';
    });
    return h;
  };
  // 批量摘录：粘贴一大段 → 自动切句 → 勾选 → 入池
  function splitSentences(text) {
    var t = String(text).replace(/\s+/g, " ").trim();
    var out = [], start = 0;
    for (var i = 0; i < t.length; i++) {
      var c = t[i];
      if (c === "." || c === "!" || c === "?") {
        var nx = t[i + 1];
        if (nx === " " || nx === undefined) {
          var seg = t.slice(start, i + 1).trim();
          if (seg) out.push(seg);
          start = i + 1;
        }
      }
    }
    var last = t.slice(start).trim();
    if (last) out.push(last);
    return out;
  }

  function openBatch() {
    var h = '<div class="row" style="align-items:center;margin-bottom:8px">' +
      '<button class="btn sm ghost" data-t="exit">退出</button><div class="muted">批量摘录</div></div>';
    h += '<div class="muted">把剧本、书页、字幕里的一段英文粘进来，自动切成句子，勾选你要留下的。15~35 词的会默认勾上。</div>';
    h += '<label>粘贴英文</label><textarea id="btext" style="min-height:160px"></textarea>';
    h += '<div class="row" style="margin-top:10px"><button class="btn primary sm" data-b="split">切分</button></div>';
    h += '<div id="blist"></div>';
    openTrain(h);

    $('[data-b="split"]').onclick = function () {
      var cands = splitSentences(document.getElementById("btext").value).filter(function (s) {
        var w = (s.match(/\S+/g) || []).length;
        return w >= 10 && w <= 60;
      });
      var box = document.getElementById("blist");
      if (!cands.length) { box.innerHTML = '<div class="muted" style="margin-top:10px">没切出 10~60 词的句子。</div>'; return; }

      var lh = '<h2 class="section">候选 ' + cands.length + ' 句</h2>';
      lh += '<label>统一出处（片名 / 书名，之后可单句改）</label><input id="bsrc" placeholder="例如：《诺丁山》Notting Hill (1999)">';
      lh += '<label>层级</label><select id="btier"><option value="A">A 原句</option><option value="B" selected>B 改编</option><option value="C">C 仿写</option></select>';
      cands.forEach(function (s, i) {
        var w = (s.match(/\S+/g) || []).length;
        var on = (w >= 15 && w <= 35);
        lh += '<div class="card" style="padding:10px"><label style="display:flex;gap:8px;align-items:flex-start">' +
          '<input type="checkbox" data-bc="' + i + '" style="width:auto;margin-top:5px"' + (on ? " checked" : "") + ">" +
          '<span>' + esc(s) + "</span></label>";
        lh += '<div class="muted" style="margin-top:4px">' + w + " 词" + (on ? "　（在推荐区间内）" : "") + "</div></div>";
      });
      lh += '<button class="btn primary wide" data-b="save">存入句池</button>';
      box.innerHTML = lh;

      $('[data-b="save"]').onclick = function () {
        var src = document.getElementById("bsrc").value.trim();
        var tier = document.getElementById("btier").value;
        var n = 0;
        $$("[data-bc]").forEach(function (cb) {
          if (!cb.checked) return;
          var s = cands[parseInt(cb.dataset.bc, 10)];
          S.pool.push({ id: "p_" + Date.now() + "_" + n, tier: tier, en: s, zh: "", chunks: [], source: src, tags: [], at: Date.now() });
          n++;
        });
        if (!n) { toast("一句都没勾"); return; }
        stopTimer(); closeTrain(); save(); render(); toast("存入句池 " + n + " 句");
      };
    };
  }

  routes.poolAfter = function () {
    var bt = $("[data-batch]");
    if (bt) bt.onclick = openBatch;
    var ps = $("[data-ps]");
    if (ps) ps.onclick = function () {
      var d = readForm(view, "data-p");
      if (!d.en) { toast("英文句子不能为空"); return; }
      S.pool.push({ id: "p_" + Date.now(), tier: d.tier, en: d.en, zh: d.zh, chunks: d.chunks, source: d.source, tags: [], at: Date.now() });
      save(); render(); toast("已存入句池");
    };
    $$("[data-say2]").forEach(function (b) {
      b.onclick = function () { Media.speak(S.pool[parseInt(b.dataset.say2, 10)].en, S.settings.rate); };
    });
    $$("[data-pdel]").forEach(function (b) {
      b.onclick = function () { S.pool.splice(parseInt(b.dataset.pdel, 10), 1); save(); render(); };
    });
    $$("[data-ptotopic]").forEach(function (b) {
      b.onclick = function () {
        var idx = parseInt(b.dataset.ptotopic, 10);
        var p = S.pool[idx];
        var h = '<div class="inner"><div class="card"><h2>嵌入到</h2><label>选一个问题</label><select data-emb="sel">';
        S.topics.forEach(function (t) {
          t.questions.forEach(function (q) {
            h += '<option value="' + q.id + '">' + esc(t.name) + "｜" + esc(q.text.slice(0, 30)) + "</option>";
          });
        });
        h += '</select><div class="row" style="margin-top:12px"><button class="btn primary sm" data-embok="' + idx + '">嵌入</button>' +
          '<button class="btn sm" data-t="exit">取消</button></div></div></div>';
        openTrain(h);
        $('[data-embok="' + idx + '"]').onclick = function () {
          var qid = $('[data-emb="sel"]').value;
          var q = findQ(qid);
          q.sentences.push({
            id: qid + "_s" + Date.now(), tier: p.tier, en: p.en, zh: p.zh, chunks: p.chunks, source: p.source,
            srs: { ease: 2.5, interval: 0, due: 0, reps: 0, lapses: 0 }, ret: 0, seen: 0, createdAt: Date.now()
          });
          S.pool.splice(idx, 1);
          stopTimer(); closeTrain(); save(); render(); toast("已嵌入句模");
        };
      };
    });
  };

  // ---------- 复习（记忆维度） ----------
  routes.review = function () {
    var q = Store.reviewQueue();
    if (!q.length) return '<div class="card"><h2>今日复习已完成</h2><p class="muted">没有到期的句子。可以去「句模」里加句子，或明天再来。</p></div>';
    return '<div class="card"><h2 style="margin:0 0 4px">今日复习</h2><div class="muted">' + q.length +
      ' 句到期。看中文提示 → 口头说出英文 → 翻面对答案 → 四档自评。</div>' +
      '<button class="btn primary wide" style="margin-top:12px" data-startreview="1">开始</button></div>';
  };
  routes.reviewAfter = function () {
    var b = $("[data-startreview]");
    if (b) b.onclick = runReview;
  };

  function runReview() {
    var q = Store.reviewQueue();
    var i = 0, t0 = Date.now(), t0All = Date.now();
    startTimer(t0All);

    function step() {
      var x = q[i];
      var h = trainHead("复习 · " + x.t.name, i, q.length);
      h += '<div class="muted">这个话题是：' + esc(x.t.name) + "</div>";
      h += '<div class="prompt">' + esc(x.s.zh) + "</div>";
      h += '<div class="muted">把这句英文说出来</div>';
      h += '<div id="ans"></div>';
      h += '<div class="row" style="margin-top:12px"><button class="btn primary" data-r="show">翻面对答案</button></div>';
      h += '<div id="grade"></div>';
      updateTrain(h);
      startTimer(t0 = Date.now());

      $('[data-r="show"]').onclick = function () {
        $("#ans", train).innerHTML = sentenceBlock(x, true);
        if (S.settings.autoSpeak) Media.speak(x.s.en, S.settings.rate);
        $("#grade", train).innerHTML =
          '<div class="row" style="margin-top:12px">' +
          '<button class="btn" data-g="1">忘了</button><button class="btn" data-g="2">卡</button>' +
          '<button class="btn" data-g="3">顺</button><button class="btn" data-g="4">太简单</button></div>';
        $$("[data-g]", train).forEach(function (btn) {
          btn.onclick = function () {
            Store.schedule(x.s, parseInt(btn.dataset.g, 10));
            Store.addLog("review", 1, Date.now() - t0);
            save(); next();
          };
        });
      };
    }
    function next() {
      i++;
      if (i >= q.length) {
        stopTimer(); save();
        updateTrain('<div class="card"><h2>复习完成</h2><p class="muted">' + q.length + " 句　用时 " +
          sec(Date.now() - t0All) + '</p><button class="btn primary wide" data-t="exit">好</button></div>');
        return;
      }
      step();
    }
    step();
  }

  // ---------- 拼贴（独立入口） ----------
  routes.cross = function () {
    return '<div class="card"><h2 style="margin:0 0 4px">跨话题拼贴</h2>' +
      '<div class="muted">随机抽一个问题，再给你两个来自别的句模的句子当素材。用别人的观点答这题——这是这套系统里最值钱的动作。</div>' +
      '<button class="btn primary wide" style="margin-top:12px" data-startcross="1">抽一题</button></div>' +
      '<div class="card"><div class="muted">迁移率怎么算：每次拼贴后你点「借到了 / 没借到」，数据页会统计近 30 天的比例。</div></div>';
  };
  routes.crossAfter = function () {
    var b = $("[data-startcross]");
    if (b) b.onclick = openCross;
  };

  // ---------- 数据 ----------
  routes.data = function () {
    var all = Store.allSentences();
    var A = all.filter(function (x) { return x.s.tier === "A"; }).length;
    var B = all.filter(function (x) { return x.s.tier === "B"; }).length;
    var C = all.filter(function (x) { return x.s.tier === "C"; }).length;
    var tr = all.filter(function (x) { return Store.trainable(x.s); });
    var avgRet = tr.length ? (tr.reduce(function (a, x) { return a + (x.s.ret || 0); }, 0) / tr.length) : 0;

    var since = Date.now() - 30 * 86400000;
    var tf = S.transfer.filter(function (t) { return t.date >= since; });
    var rate = tf.length ? Math.round(tf.filter(function (t) { return t.ok; }).length / tf.length * 100) : 0;
    var avgMs = tf.length ? Math.round(tf.reduce(function (a, t) { return a + (t.ms || 0); }, 0) / tf.length / 1000) : 0;

    var out = S.log.filter(function (l) { return l.type === "output" && l.date >= since; });
    var outMs = out.length ? Math.round(out.reduce(function (a, l) { return a + (l.ms || 0); }, 0) / out.length / 1000) : 0;

    var h = '<h2 class="section">效果证明（近 30 天）</h2><div class="card">';
    h += '<div class="stat"><span>连续使用</span><b>' + Store.streak() + " 天</b></div>";
    h += '<div class="stat"><span>跨话题迁移率</span><b>' + rate + "%（" + tf.length + " 次拼贴）</b></div>";
    h += '<div class="stat"><span>拼贴平均用时</span><b>' + avgMs + "s</b></div>";
    h += '<div class="stat"><span>输出练习平均用时</span><b>' + outMs + "s（" + out.length + " 次）</b></div>";
    h += '<div class="stat"><span>平均提取流畅度</span><b>' + avgRet.toFixed(1) + " / 5</b></div>";
    h += "</div>";

    h += '<h2 class="section">内容资产</h2><div class="card">';
    h += '<div class="stat"><span>句模</span><b>' + S.topics.length + " 个</b></div>";
    h += '<div class="stat"><span>句子</span><b>' + all.length + " 句（A " + A + " / B " + B + " / C " + C + "）</b></div>";
    h += '<div class="stat"><span>可训练</span><b>' + tr.length + " 句</b></div>";
    h += '<div class="stat"><span>句池待处理</span><b>' + S.pool.length + " 句</b></div>";
    h += "</div>";

    h += '<h2 class="section">设置</h2><div class="card">';
    h += "<label>每日新句上限</label><input type=\"number\" data-set=\"dailyNew\" value=\"" + S.settings.dailyNew + '">';
    h += "<label>每日复习上限</label><input type=\"number\" data-set=\"dailyReview\" value=\"" + S.settings.dailyReview + '">';
    h += "<label>朗读语速（0.6 慢 ~ 1.0 正常）</label><input type=\"number\" step=\"0.1\" data-set=\"rate\" value=\"" + S.settings.rate + '">';
    h += '<label><input type="checkbox" data-set="trainB" style="width:auto" ' + (S.settings.trainB ? "checked" : "") + "> 训练 B 类（轻微改编，内核仍是母语者原句）</label>";
    h += '<label><input type="checkbox" data-set="onlyA" style="width:auto" ' + (S.settings.onlyA ? "checked" : "") + "> 严格模式：只训练 A 类原句</label>";
    h += '<label><input type="checkbox" data-set="autoSpeak" style="width:auto" ' + (S.settings.autoSpeak ? "checked" : "") + "> 翻面时自动朗读</label>";
    h += '<div class="muted" style="margin-top:8px">C 类（AI 仿写）永远不进训练队列，只在句模里可见，用来做结构练习。</div>';
    h += "</div>";

    h += '<h2 class="section">备份（数据只存在这台设备的浏览器里）</h2><div class="card">';
    h += '<button class="btn primary wide" data-export="1">导出 JSON 文件</button>';
    h += '<button class="btn wide" data-code="1">生成备份码</button>';
    h += '<div id="codebox"></div>';
    h += '<label>导入 JSON 文件</label><input type="file" accept="application/json,.json" data-import="1">';
    h += '<label>粘贴备份码恢复</label><textarea name="code" data-restore="1" placeholder="把另一台设备上生成的备份码粘进来"></textarea>';
    h += '<button class="btn wide" data-dorestore="1">用备份码恢复</button>';
    h += "</div>";

    h += '<div class="card"><button class="btn wide" data-wipe="1">清空全部数据</button>' +
      '<div class="muted" style="margin-top:6px">清空后无法找回，请先导出。</div></div>';
    return h;
  };
  routes.dataAfter = function () {
    $$("[data-set]").forEach(function (el) {
      el.onchange = function () {
        var k = el.dataset.set;
        S.settings[k] = (el.type === "checkbox") ? el.checked : parseFloat(el.value);
        save(); render();
      };
    });
    var ex = $("[data-export]");
    if (ex) ex.onclick = function () {
      var blob = new Blob([Store.toJSON()], { type: "application/json" });
      var a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "句模系统备份-" + new Date().toISOString().slice(0, 10) + ".json";
      a.click();
      S.lastBackup = Date.now(); save(); render(); toast("已导出");
    };
    var im = $("[data-import]");
    if (im) im.onchange = function () {
      var f = im.files[0]; if (!f) return;
      var r = new FileReader();
      r.onload = function () {
        try { Store.fromJSON(r.result); render(); toast("已导入"); }
        catch (e) { alert("导入失败：" + e.message); }
      };
      r.readAsText(f);
    };
    var cd = $("[data-code]");
    if (cd) cd.onclick = function () {
      var code = Store.backupCode();
      var kb = Math.round(code.length / 1024);
      $("#codebox").innerHTML = '<label>备份码（' + kb + " KB）" + (kb > 200 ? "　太大了，建议用文件导出" : "") +
        '</label><textarea name="code" readonly>' + esc(code) + "</textarea>";
    };
    var rs = $("[data-dorestore]");
    if (rs) rs.onclick = function () {
      var v = $('[data-restore="1"]').value.trim();
      if (!v) { toast("先把备份码粘进去"); return; }
      try { Store.restoreCode(v); render(); toast("已恢复"); }
      catch (e) { alert("恢复失败：" + e.message); }
    };
    var wp = $("[data-wipe]");
    if (wp) wp.onclick = function () {
      if (!confirm("确定清空全部数据？句模、句池、记录全部消失，无法找回。")) return;
      if (!confirm("再确认一次：你导出备份了吗？")) return;
      localStorage.removeItem("jumo.v1");
      location.reload();
    };
  };

  // ---------- 启动 ----------
  Store.load();
  window.addEventListener("hashchange", render);
  render();
})();

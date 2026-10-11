/* 发音（浏览器自带语音合成）+ 录音（存本地数据库，每句只留最新一条，上限 200 条） */
(function () {
  "use strict";

  var MAX_CLIPS = 200;
  var dbPromise = null;

  function openDB() {
    if (dbPromise) return dbPromise;
    dbPromise = new Promise(function (resolve, reject) {
      var req = indexedDB.open("jumo_audio", 1);
      req.onupgradeneeded = function () {
        var db = req.result;
        if (!db.objectStoreNames.contains("clips")) db.createObjectStore("clips");
      };
      req.onsuccess = function () { resolve(req.result); };
      req.onerror = function () { reject(req.error); };
    });
    return dbPromise;
  }

  function idbPut(key, value) {
    return openDB().then(function (db) {
      return new Promise(function (res, rej) {
        var tx = db.transaction("clips", "readwrite");
        tx.objectStore("clips").put(value, key);
        tx.oncomplete = function () { res(true); };
        tx.onerror = function () { rej(tx.error); };
      });
    });
  }

  function idbGet(key) {
    return openDB().then(function (db) {
      return new Promise(function (res) {
        var tx = db.transaction("clips", "readonly");
        var r = tx.objectStore("clips").get(key);
        r.onsuccess = function () { res(r.result || null); };
        r.onerror = function () { res(null); };
      });
    });
  }

  function idbKeys() {
    return openDB().then(function (db) {
      return new Promise(function (res) {
        var tx = db.transaction("clips", "readonly");
        var st = tx.objectStore("clips");
        var out = [];
        var cursorReq = st.openCursor();
        cursorReq.onsuccess = function (e) {
          var c = e.target.result;
          if (c) { out.push({ key: c.key, value: c.value }); c.continue(); }
          else res(out);
        };
        cursorReq.onerror = function () { res(out); };
      });
    });
  }

  // 超出上限时删掉最旧的
  function trim() {
    return idbKeys().then(function (rows) {
      if (rows.length <= MAX_CLIPS) return;
      rows.sort(function (a, b) { return (a.value.at || 0) - (b.value.at || 0); });
      var del = rows.slice(0, rows.length - MAX_CLIPS);
      return openDB().then(function (db) {
        return new Promise(function (res) {
          var tx = db.transaction("clips", "readwrite");
          var st = tx.objectStore("clips");
          del.forEach(function (r) { st.delete(r.key); });
          tx.oncomplete = function () { res(true); };
          tx.onerror = function () { res(false); };
        });
      });
    });
  }

  // ---------- 发音 ----------
  // 引擎一：预生成音频（assets/audio/{id}.mp3，神经语音，断网也能放，音质最好）
  // 引擎二：浏览器自带语音（按质量分级优选，可在设置里手动指定）
  var voices = [];
  function loadVoices() {
    if (!window.speechSynthesis) return;
    voices = window.speechSynthesis.getVoices() || [];
  }
  if (window.speechSynthesis) {
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }

  // 语音质量打分：神经/在线语音远好于 SAPI 桌面语音（后者就是「生硬」的元凶）
  function voiceScore(v) {
    var n = (v.name || "").toLowerCase();
    var l = (v.lang || "").toLowerCase();
    if (!/^en(-|_)/i.test(l)) return -1000;
    var s = 0;
    if (/natural|neural/.test(n)) s += 100;
    else if (/online/.test(n)) s += 80;
    if (/premium|enhanced/.test(n)) s += 70;
    if (/siri/.test(n)) s += 65;
    if (/google/.test(n)) s += 60;
    if (/aria|jenny|guy|sonia|libby|michelle|emma|brian|clara|ryan|andrew|ava/.test(n)) s += 55;
    if (/desktop/.test(n)) s -= 45;
    if (/espeak|zira|david|mark|hazel/.test(n)) s -= 25;
    if (/^en[-_]us/.test(l)) s += 12;
    else if (/^en[-_]gb/.test(l)) s += 8;
    else if (/^en[-_](au|nz|ca)/.test(l)) s += 6;
    else s += 3;
    return s;
  }

  function listVoices() {
    if (!voices.length) loadVoices();
    return voices
      .filter(function (v) { return /^en(-|_)/i.test(v.lang || ""); })
      .map(function (v) { return { v: v, score: voiceScore(v) }; })
      .sort(function (a, b) { return b.score - a.score; });
  }

  function chosenURI() {
    try { return (window.Store && Store.state && Store.state.settings.voiceURI) || ""; }
    catch (e) { return ""; }
  }

  function pickVoice() {
    var list = listVoices();
    if (!list.length) return null;
    var want = chosenURI();
    if (want) {
      for (var i = 0; i < list.length; i++) if (list[i].v.voiceURI === want) return list[i].v;
    }
    return list[0].v;
  }

  // 本机语音质量评级：good（神经/在线）/ fair（Google、增强版）/ poor（SAPI 桌面版）
  function voiceGrade() {
    var list = listVoices();
    if (!list.length) return "none";
    var s = list[0].score;
    if (s >= 80) return "good";
    if (s >= 55) return "fair";
    return "poor";
  }

  function clamp(n, lo, hi) { n = parseFloat(n); if (isNaN(n)) n = 1; return Math.max(lo, Math.min(hi, n)); }

  // ---------- 播放 ----------
  var player = null;

  function hasAudio(id) {
    return !!(id && window.AUDIO && window.AUDIO.indexOf(id) >= 0);
  }

  function stopAll() {
    if (player) { try { player.pause(); player.currentTime = 0; } catch (e) {} }
    if (window.speechSynthesis) window.speechSynthesis.cancel();
  }

  function speakLocal(text, rate) {
    if (!window.speechSynthesis) { alert("这个浏览器不支持朗读，换 Chrome / Edge / Safari 试试。"); return; }
    window.speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(text);
    var v = pickVoice();
    if (v) { u.voice = v; u.lang = v.lang; } else { u.lang = "en-US"; }
    u.rate = clamp(rate, 0.5, 1.5);
    u.pitch = 1;
    window.speechSynthesis.speak(u);
  }

  // target 可以是句子对象（{id,en}）或纯文本；rate 为语速
  function speak(target, rate) {
    var text = "", id = null;
    if (typeof target === "string") { text = target; }
    else if (target) { text = target.en || target.text || ""; id = target.id || null; }
    if (!text) return;
    stopAll();
    if (hasAudio(id)) {
      if (!player) player = new Audio();
      try {
        player.pause();
        player.src = "assets/audio/" + id + ".mp3";
        player.playbackRate = clamp(rate, 0.5, 1.5);
        var p = player.play();
        if (p && p.catch) p.catch(function () { speakLocal(text, rate); });
        return;
      } catch (e) { /* 落到本机语音 */ }
    }
    speakLocal(text, rate);
  }

  // 试听：固定短句，用来挑语音
  function preview(voiceURI) {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    var list = listVoices();
    var v = null;
    for (var i = 0; i < list.length; i++) if (list[i].v.voiceURI === voiceURI) v = list[i].v;
    if (!v) v = pickVoice();
    if (!v) { alert("这个浏览器没有可用的英语语音。"); return; }
    var u = new SpeechSynthesisUtterance("This is how I sound. Do you like it, or shall we try another one?");
    u.voice = v; u.lang = v.lang; u.rate = 1; u.pitch = 1;
    window.speechSynthesis.speak(u);
  }

  function voiceName() {
    var v = pickVoice();
    return v ? v.name : "（无）";
  }

  // ---------- 录音 ----------
  var rec = null, chunks = [], recFor = null;

  function supported() {
    return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder);
  }

  function start(sentId) {
    if (!supported()) { alert("这个浏览器不支持录音。"); return Promise.reject(); }
    return navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
      chunks = [];
      recFor = sentId;
      rec = new MediaRecorder(stream);
      rec.ondataavailable = function (e) { if (e.data.size) chunks.push(e.data); };
      rec.start();
    }).catch(function () { alert("麦克风没开。请在浏览器地址栏允许使用麦克风。"); });
  }

  function stop() {
    return new Promise(function (resolve) {
      if (!rec) { resolve(null); return; }
      rec.onstop = function () {
        var blob = new Blob(chunks, { type: rec.mimeType || "audio/webm" });
        rec.stream.getTracks().forEach(function (t) { t.stop(); });
        rec = null;
        var id = recFor;
        if (id && blob.size) {
          idbPut(id, { blob: blob, at: Date.now() }).then(trim).then(function () { resolve(id); });
        } else { resolve(null); }
      };
      rec.stop();
    });
  }

  function isRecording() { return !!rec; }

  function play(sentId) {
    return idbGet(sentId).then(function (row) {
      if (!row) { alert("这句还没有录音。"); return; }
      var url = URL.createObjectURL(row.blob);
      var a = new Audio(url);
      a.play();
      a.onended = function () { URL.revokeObjectURL(url); };
    });
  }

  function hasClip(sentId) {
    return idbGet(sentId).then(function (r) { return !!r; });
  }

  function clipCount() {
    return idbKeys().then(function (r) { return r.length; });
  }

  window.Media = {
    speak: speak, stopAll: stopAll, start: start, stop: stop, isRecording: isRecording,
    play: play, hasClip: hasClip, clipCount: clipCount, supported: supported,
    listVoices: listVoices, voiceGrade: voiceGrade, preview: preview,
    voiceName: voiceName, hasAudio: hasAudio
  };
})();

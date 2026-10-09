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
  var voices = [];
  function loadVoices() {
    if (!window.speechSynthesis) return;
    voices = window.speechSynthesis.getVoices() || [];
  }
  if (window.speechSynthesis) {
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }

  function pickVoice() {
    if (!voices.length) loadVoices();
    var en = voices.filter(function (v) { return /^en(-|_)?/i.test(v.lang); });
    if (!en.length) return null;
    var pref = en.filter(function (v) { return /en-US/i.test(v.lang); });
    return (pref[0] || en[0]);
  }

  function speak(text, rate) {
    if (!window.speechSynthesis) { alert("这个浏览器不支持朗读，换 Chrome / Edge / Safari 试试。"); return; }
    window.speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(text);
    var v = pickVoice();
    if (v) { u.voice = v; u.lang = v.lang; } else { u.lang = "en-US"; }
    u.rate = rate || 0.9;
    window.speechSynthesis.speak(u);
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
    speak: speak, start: start, stop: stop, isRecording: isRecording,
    play: play, hasClip: hasClip, clipCount: clipCount, supported: supported
  };
})();

/* Edu Flow Academy — moteur partagé des tests de français thématiques.
   Attend que la page ait défini avant son chargement :
   THEME_META (liste ordonnée {key,name,desc}), QDATA ({theme:{CE,CO,GR,EE,EO}}),
   AGE_MIN, AGE_MAX, TEST_TYPE_LABEL (texte pour l'archive). */

const SKILL_CODES = ['CE','CO','GR','EE','EO'];
const SKILL_NAMES = {
  CE: 'Compréhension écrite',
  CO: 'Compréhension orale',
  GR: 'Grammaire',
  EE: 'Expression écrite',
  EO: 'Expression orale'
};

// Sauvegarde 100% locale (aucune donnée envoyée à un serveur externe) :
// les rapports restent uniquement dans le navigateur de cet appareil.
function pushToEduFlowArchive(record){
  try{
    var key = 'french_theme_test_archive';
    var list = JSON.parse(localStorage.getItem(key) || '[]');
    list.push(record);
    localStorage.setItem(key, JSON.stringify(list));
  }catch(e){}
}

function shuffle(arr){
  for(let i=arr.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [arr[i],arr[j]] = [arr[j],arr[i]];
  }
  return arr;
}

function countTheme(k){
  return SKILL_CODES.reduce((s,c)=> s + (QDATA[k] && QDATA[k][c] ? QDATA[k][c].length : 0), 0);
}

let selectedThemeKeys = new Set();

function renderThemeGrid(){
  const grid = document.getElementById('themeGrid');
  grid.innerHTML = THEME_META.map(t => `
    <div class="theme-card" data-key="${t.key}">
      <div class="t-name"><span class="check-box"></span>${t.name}</div>
      <div class="t-desc">${t.desc}</div>
      <div class="t-count">${countTheme(t.key)} questions disponibles</div>
    </div>`).join('');
  grid.querySelectorAll('.theme-card').forEach(el=>{
    el.addEventListener('click', ()=>{
      const k = el.dataset.key;
      if(selectedThemeKeys.has(k)){ selectedThemeKeys.delete(k); el.classList.remove('selected'); }
      else { selectedThemeKeys.add(k); el.classList.add('selected'); }
      document.getElementById('errTheme').style.display = 'none';
    });
  });
}

document.addEventListener('DOMContentLoaded', ()=>{
  renderThemeGrid();
  const ageEl = document.getElementById('studentAge');
  ageEl.min = AGE_MIN; ageEl.max = AGE_MAX;
  document.getElementById('errAge').textContent = `Indique ton âge (entre ${AGE_MIN} et ${AGE_MAX} ans).`;
});

let student = {name:'', age:''};
let queue = [];
let currentIndex = 0;
let answers = {};       // id -> {selected, correct, skill, theme}
let recordings = {};    // EO id -> {url, duration, transcript, score, max}
let testStartTime = 0;

function buildQueue(themeKeys, qCountVal){
  let pool = [];
  themeKeys.forEach(th=>{
    SKILL_CODES.forEach(sk=>{
      (QDATA[th][sk] || []).forEach(q=>{
        pool.push({...q, skill: sk, skillName: SKILL_NAMES[sk], theme: th, themeName: themeNameOf(th)});
      });
    });
  });
  pool = shuffle(pool);
  const n = qCountVal === 'all' ? pool.length : Math.min(parseInt(qCountVal,10), pool.length);
  queue = pool.slice(0, n);
}

function themeNameOf(key){
  const t = THEME_META.find(t=>t.key===key);
  return t ? t.name : key;
}

document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('btnStart').addEventListener('click', ()=>{
    const nameEl = document.getElementById('studentName');
    const ageEl = document.getElementById('studentAge');
    const errName = document.getElementById('errName');
    const errAge = document.getElementById('errAge');
    const errTheme = document.getElementById('errTheme');
    let ok = true;

    if(selectedThemeKeys.size === 0){ errTheme.style.display='block'; ok=false; } else { errTheme.style.display='none'; }
    if(!nameEl.value.trim()){ errName.style.display='block'; ok=false; } else { errName.style.display='none'; }
    const ageVal = parseInt(ageEl.value,10);
    if(!ageVal || ageVal<AGE_MIN || ageVal>AGE_MAX){ errAge.style.display='block'; ok=false; } else { errAge.style.display='none'; }
    if(!ok) return;

    student.name = nameEl.value.trim();
    student.age = ageVal;
    student.themeKeys = Array.from(selectedThemeKeys);
    student.themesLabel = student.themeKeys.map(themeNameOf).join(', ');

    const qCountVal = document.getElementById('qCount').value;
    buildQueue(student.themeKeys, qCountVal);
    if(queue.length === 0){ errTheme.textContent = "Aucune question disponible pour ce choix."; errTheme.style.display='block'; return; }
    startTest();
  });
});

function startTest(){
  document.getElementById('screen-login').classList.remove('active');
  document.getElementById('screen-test').classList.add('active');
  currentIndex = 0; answers = {}; recordings = {};
  testStartTime = Date.now();
  window.onbeforeunload = function(){ return "Le test est en cours. Si tu quittes, ta progression sera perdue."; };
  renderQuestion();
}

// ---- Voix française la plus "humaine" disponible sur l'appareil ----
function pickHumanVoice(){
  const voices = window.speechSynthesis.getVoices();
  const frVoices = voices.filter(v=>v.lang && v.lang.toLowerCase().startsWith('fr'));
  if(frVoices.length === 0) return null;
  const priorityKeywords = ['neural','natural','naturelle','enhanced','améliorée','ameliore','premium','plus','wavenet','online','google','siri'];
  const warmKeywords = ['female','femme','homme','male'];
  const scoreVoice = (v)=>{
    const name = v.name.toLowerCase();
    let score = 0;
    priorityKeywords.forEach(k=>{ if(name.includes(k)) score += 3; });
    if(v.localService === false) score += 1;
    warmKeywords.forEach(k=>{ if(name.includes(k)) score += 1; });
    return score;
  };
  return frVoices.sort((a,b)=>scoreVoice(b)-scoreVoice(a))[0];
}

function speak(text){
  if(!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = 'fr-FR';
  utter.rate = 0.94;
  utter.pitch = 1.0;
  utter.volume = 1;
  const setVoice = ()=>{
    const best = pickHumanVoice();
    if(best) utter.voice = best;
    window.speechSynthesis.speak(utter);
  };
  const voicesNow = window.speechSynthesis.getVoices();
  if(voicesNow.length){ setVoice(); }
  else { window.speechSynthesis.onvoiceschanged = setVoice; }
}

if('speechSynthesis' in window){
  window.speechSynthesis.onvoiceschanged = ()=>{ window.speechSynthesis.getVoices(); };
}

// ---- Rendu des questions ----
function renderQuestion(){
  const item = queue[currentIndex];
  const container = document.getElementById('screen-test');
  const pct = Math.round((currentIndex/queue.length)*100);
  const isLast = currentIndex === queue.length-1;

  let bodyHtml = '';

  if(item.skill === 'CE'){
    bodyHtml += `<div class="q-passage">${item.passage}</div>`;
    bodyHtml += `<div class="q-text">${item.question}</div>`;
    bodyHtml += optionsHtml(item);
  } else if(item.skill === 'CO'){
    bodyHtml += renderAudioControl(item);
    bodyHtml += `<div class="q-text">${item.question}</div>`;
    bodyHtml += optionsHtml(item);
  } else if(item.skill === 'GR'){
    bodyHtml += `<div class="q-text">Complète la phrase :<br>« ${item.prompt} »</div>`;
    bodyHtml += optionsHtml(item);
  } else if(item.skill === 'EE'){
    bodyHtml += `<div class="q-text">${item.prompt}</div>`;
    bodyHtml += optionsHtml(item);
  } else if(item.skill === 'EO'){
    bodyHtml += `<div class="q-text">${item.prompt}</div>`;
    bodyHtml += `<div class="record-box">
        <button class="rec-btn" id="recBtn" onclick="toggleRecording('${item.id}')">🎙️</button>
        <div class="rec-status" id="recStatus">Appuie sur le micro pour commencer à parler 🎤</div>
        <div class="rec-playback" id="recPlayback"></div>
      </div>
      <div class="skip-note">Si le micro ne fonctionne pas, tu peux passer à la question suivante.</div>`;
  }

  container.innerHTML = `
    <div class="test-head no-print">
      <div style="display:flex;gap:8px;flex-wrap:wrap;">
        <span class="skill-chip">${item.skillName}</span>
        <span class="theme-chip">${item.themeName}</span>
      </div>
      <div class="stopwatch">Question ${currentIndex+1} / ${queue.length}</div>
    </div>
    <div class="progress-outer no-print"><div class="progress-inner" style="width:${pct}%"></div></div>
    <div class="card">
      <div class="q-index">Question ${currentIndex+1} / ${queue.length} — ${item.skillName}</div>
      ${bodyHtml}
      <div class="btn-row">
        <button class="btn-primary" id="btnNext" ${item.skill!=='EO' ? 'disabled' : ''}>${isLast ? 'Terminer le test' : 'Valider et continuer'}</button>
      </div>
    </div>
  `;

  if(item.skill !== 'EO'){
    container.querySelectorAll('.opt').forEach(el=>{
      el.addEventListener('click', ()=>{
        container.querySelectorAll('.opt').forEach(o=>o.classList.remove('selected'));
        el.classList.add('selected');
        document.getElementById('btnNext').disabled = false;
      });
    });
  }

  document.getElementById('btnNext').addEventListener('click', ()=>{
    commitAnswer(item);
    if(isLast){ finishTest(); }
    else { currentIndex++; renderQuestion(); }
  });
}

function optionsHtml(item){
  return `<div class="options">` + item.options.map((opt,idx)=>
    `<div class="opt" data-idx="${idx}"><span class="bullet"></span><span>${opt}</span></div>`
  ).join('') + `</div>`;
}

function renderAudioControl(item){
  return `<button class="audio-btn" id="playBtn" onclick="playCurrentAudio()">🔊 Écouter</button>
          <div class="hint-audio">Clique pour écouter, tu peux réécouter autant de fois que tu veux avant de répondre.</div>`;
}

function playCurrentAudio(){
  const item = queue[currentIndex];
  const btn = document.getElementById('playBtn');
  btn.classList.add('playing');
  speak(item.script);
  setTimeout(()=>btn.classList.remove('playing'), Math.max(1800, item.script.length*70));
}

function commitAnswer(item){
  if(item.skill === 'EO') return; // déjà enregistré via toggleRecording
  const chosenEl = document.querySelector('.opt.selected');
  const chosenIdx = chosenEl ? parseInt(chosenEl.dataset.idx,10) : null;
  const correct = chosenIdx !== null && chosenIdx === item.answer;
  answers[item.id] = { selected: chosenIdx, correct, skill: item.skill, theme: item.theme };
}

// ---- Expression orale : enregistrement + correction automatique heuristique ----
let mediaRecorder = null;
let recordedChunks = [];
let recordStart = 0;
let liveRecognition = null;
let liveTranscript = '';

function scoreOralResponse(transcript, duration, item){
  const words = transcript.trim().length ? transcript.trim().split(/\s+/) : [];
  const wordCount = words.length;

  let lengthPts = 0;
  if(wordCount >= 15) lengthPts = 2;
  else if(wordCount >= 7) lengthPts = 1.5;
  else if(wordCount >= 3) lengthPts = 0.5;

  const lowerT = transcript.toLowerCase();
  const kws = item.keywords || [];
  const hits = kws.filter(k=>lowerT.includes(k.toLowerCase())).length;
  const keywordPts = kws.length ? Math.min(2, (hits/kws.length)*2) : (wordCount>3 ? 1 : 0);

  const connectors = ['parce que','bien que','cependant','donc','alors','ensuite','puis','par contre','en revanche','en effet','tout d\'abord','enfin'];
  const connectorPts = connectors.some(c=>lowerT.includes(c)) ? 1 : 0;

  const total = Math.round((lengthPts + keywordPts + connectorPts) * 10) / 10;
  return { score: Math.min(5,total), max: 5, wordCount };
}

async function toggleRecording(itemId){
  const item = queue[currentIndex];
  const recBtn = document.getElementById('recBtn');
  const status = document.getElementById('recStatus');
  if(!mediaRecorder || mediaRecorder.state === 'inactive'){
    try{
      const stream = await navigator.mediaDevices.getUserMedia({audio:true});
      recordedChunks = [];
      mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.ondataavailable = e=>{ if(e.data.size>0) recordedChunks.push(e.data); };
      mediaRecorder.onstop = ()=>{
        const blob = new Blob(recordedChunks, {type:'audio/webm'});
        const url = URL.createObjectURL(blob);
        const duration = Math.round((Date.now()-recordStart)/1000);
        if(liveRecognition){ try{ liveRecognition.stop(); }catch(e){} }
        const finalize = ()=>{
          const result = scoreOralResponse(liveTranscript, duration, item);
          recordings[itemId] = {url, duration, transcript: liveTranscript, score: result.score, max: result.max};
          document.getElementById('recPlayback').innerHTML = `<audio controls src="${url}"></audio>`;
          const notePart = liveTranscript
            ? `Score automatique : ${result.score.toFixed(1)}/${result.max} (transcription : « ${liveTranscript} »)`
            : `Score automatique : ${result.score.toFixed(1)}/${result.max} (reconnaissance vocale indisponible sur ce navigateur — score basé sur la durée)`;
          status.textContent = 'Enregistrement terminé ('+duration+' s). '+notePart;
          document.getElementById('btnNext').disabled = false;
        };
        setTimeout(finalize, 400);
        stream.getTracks().forEach(t=>t.stop());
      };

      liveTranscript = '';
      const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
      if(SR){
        liveRecognition = new SR();
        liveRecognition.lang = 'fr-FR';
        liveRecognition.continuous = true;
        liveRecognition.interimResults = true;
        liveRecognition.onresult = (e)=>{
          let text = '';
          for(let i=0;i<e.results.length;i++){ text += e.results[i][0].transcript + ' '; }
          liveTranscript = text.trim();
        };
        liveRecognition.onerror = ()=>{};
        try{ liveRecognition.start(); }catch(e){}
      } else {
        liveRecognition = null;
      }

      mediaRecorder.start();
      recordStart = Date.now();
      recBtn.classList.add('recording');
      status.textContent = 'Enregistrement en cours… Clique à nouveau pour arrêter.';
    }catch(err){
      status.textContent = "Microphone indisponible. Tu peux continuer sans enregistrer.";
      document.getElementById('btnNext').disabled = false;
    }
  } else {
    mediaRecorder.stop();
    recBtn.classList.remove('recording');
  }
}

function finishTest(){
  window.onbeforeunload = null;
  window.speechSynthesis && window.speechSynthesis.cancel();
  document.getElementById('screen-test').classList.remove('active');
  document.getElementById('screen-results').classList.add('active');
  renderResults();
}

// ---- Score : agrégation par compétence et par thème ----
function scoreOf(item){
  if(item.skill === 'EO'){
    const r = recordings[item.id];
    return { earned: r ? r.score : 0, possible: 5, answered: !!r };
  }
  const a = answers[item.id];
  return { earned: (a && a.correct) ? 1 : 0, possible: 1, answered: !!a };
}

function aggregate(keyFn){
  const map = {};
  queue.forEach(it=>{
    const k = keyFn(it);
    if(!map[k]) map[k] = { earned:0, possible:0, answered:0, count:0 };
    const s = scoreOf(it);
    map[k].earned += s.earned;
    map[k].possible += s.possible;
    map[k].answered += s.answered ? 1 : 0;
    map[k].count++;
  });
  return map;
}

function renderResults(){
  const skillAgg = aggregate(it=>it.skill);
  const themeAgg = aggregate(it=>it.theme);

  let totalEarned = 0, totalPossible = 0;
  queue.forEach(it=>{ const s = scoreOf(it); totalEarned += s.earned; totalPossible += s.possible; });
  const globalPct = totalPossible ? Math.round(totalEarned/totalPossible*100) : 0;

  const skillRows = SKILL_CODES.filter(c=>skillAgg[c]).map(c=>{
    const a = skillAgg[c];
    const pct = a.possible ? Math.round(a.earned/a.possible*100) : 0;
    return `<div class="bar-row"><div class="lbl">${SKILL_NAMES[c]}</div><div class="bar-outer"><div class="bar-inner" style="width:${pct}%"></div></div><div class="bar-pct">${pct}%</div></div>`;
  }).join('');

  const themeRows = student.themeKeys.filter(k=>themeAgg[k]).map(k=>{
    const a = themeAgg[k];
    const pct = a.possible ? Math.round(a.earned/a.possible*100) : 0;
    return `<div class="bar-row"><div class="lbl">${themeNameOf(k)}</div><div class="bar-outer"><div class="bar-inner" style="width:${pct}%"></div></div><div class="bar-pct">${pct}%</div></div>`;
  }).join('');

  const wrongItems = queue.filter(it=> it.skill!=='EO' && answers[it.id] && !answers[it.id].correct);
  const reviewHtml = wrongItems.length ? wrongItems.map(it=>{
    const chosen = answers[it.id].selected;
    const qText = it.skill==='GR' ? it.prompt : (it.question || it.prompt);
    return `<div class="review-item">
      <div class="rq">${it.themeName} · ${it.skillName} — ${qText}</div>
      <div class="ra-wrong">Ta réponse : ${chosen!==null ? it.options[chosen] : '(aucune réponse)'}</div>
      <div class="ra-right">Bonne réponse : ${it.options[it.answer]}</div>
    </div>`;
  }).join('') : `<div style="font-size:0.85rem;color:#7A7B7D;">Aucune erreur à revoir sur les questions à choix — bravo !</div>`;

  const elapsed = Math.round((Date.now()-testStartTime)/1000);
  const mUsed = Math.floor(elapsed/60), sUsed = elapsed%60;
  const eo = skillAgg.EO || {answered:0,count:0};
  const dateStr = new Date().toLocaleDateString('fr-FR');

  document.getElementById('screen-results').innerHTML = `
    <div class="card">
      <div class="report-header">
        <div class="report-logo"><img src="media/logo.jpg" alt="Edu Flow Academy" onerror="this.style.display='none'"></div>
        <div>
          <div class="brand-name">Edu Flow Academy</div>
          <div class="brand-sub">Rapport de résultats — ${TEST_TYPE_LABEL}</div>
        </div>
      </div>

      <div class="score-grid" style="margin-top:20px;">
        <div class="score-card"><div class="num">${student.name}</div><div class="lbl">Élève</div></div>
        <div class="score-card"><div class="num">${student.age} ans</div><div class="lbl">Âge</div></div>
        <div class="score-card"><div class="num" style="font-size:0.95rem;">${student.themesLabel}</div><div class="lbl">Thèmes</div></div>
        <div class="score-card"><div class="num">${mUsed}m ${sUsed}s</div><div class="lbl">Temps utilisé</div></div>
        <div class="score-card"><div class="num">${totalEarned.toFixed(1)}/${totalPossible}</div><div class="lbl">Score total</div></div>
      </div>

      <div style="text-align:center;">
        <div style="font-size:0.85rem;color:#7A7B7D;">Score global</div>
        <div class="score-badge">${globalPct}%</div>
      </div>

      <h3 style="font-size:1rem;margin:26px 0 14px;">Détail par compétence</h3>
      ${skillRows}

      <h3 style="font-size:1rem;margin:26px 0 14px;">Détail par thème</h3>
      ${themeRows}

      <div class="note-box">Le score de la partie « expression orale » (${eo.answered}/${eo.count} réponses enregistrées) est une estimation automatique basée sur la transcription vocale (longueur de réponse, mots-clés du sujet, connecteurs logiques) — l'avis d'un enseignant reste recommandé pour la prononciation et la fluidité.</div>

      <h3 style="font-size:1rem;margin:26px 0 14px;">À revoir</h3>
      ${reviewHtml}

      <div class="btn-row no-print" style="margin-top:24px;">
        <button class="btn-ghost" onclick="location.reload()">🔄 Nouveau test</button>
        <button class="btn-ghost" onclick="downloadReport()">💾 Enregistrer le rapport</button>
        <button class="btn-primary" onclick="window.print()">🖨️ Imprimer / Enregistrer en PDF</button>
      </div>
    </div>
    <footer class="mini">Edu Flow Academy — Rapport généré automatiquement le ${dateStr}</footer>
  `;

  pushToEduFlowArchive({
    name: student.name, age: student.age, themesLabel: student.themesLabel,
    testType: TEST_TYPE_LABEL, scorePct: globalPct,
    skills: Object.fromEntries(SKILL_CODES.filter(c=>skillAgg[c]).map(c=>[SKILL_NAMES[c], skillAgg[c].possible ? Math.round(skillAgg[c].earned/skillAgg[c].possible*100) : 0])),
    date: new Date().toISOString()
  });
}

function downloadReport(){
  const reportHtml = document.querySelector('#screen-results .card').outerHTML;
  const doc = `<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8">
    <title>Rapport — ${student.name}</title>
    <style>
      body{font-family:Arial,sans-serif;background:#fff;color:#4A4B4D;padding:24px;max-width:820px;margin:0 auto;}
      .card{border:1px solid #DDE3E1;border-radius:14px;padding:24px;}
      .report-header{display:flex;align-items:center;gap:16px;margin-bottom:6px;}
      .report-logo{width:56px;height:56px;border-radius:14px;overflow:hidden;}
      .report-logo img{width:100%;height:100%;object-fit:cover;}
      .brand-name{font-weight:700;font-size:1.1rem;}
      .brand-sub{font-size:0.75rem;color:#2E8FBD;text-transform:uppercase;letter-spacing:.05em;}
      .score-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px;margin:18px 0;}
      .score-card{background:#F6F8F7;border-radius:10px;padding:12px;text-align:center;}
      .score-card .num{font-weight:700;font-size:1.3rem;color:#2E8FBD;}
      .score-card .lbl{font-size:0.72rem;color:#7A7B7D;text-transform:uppercase;}
      .score-badge{display:inline-block;font-weight:700;font-size:2rem;padding:8px 22px;border-radius:12px;color:#fff;background:#3FAEDD;margin:10px 0;}
      .bar-row{display:flex;align-items:center;gap:10px;margin-bottom:10px;}
      .bar-row .lbl{width:180px;font-size:0.82rem;font-weight:600;}
      .bar-outer{flex:1;height:10px;background:#E4E9E7;border-radius:999px;overflow:hidden;}
      .bar-inner{height:100%;background:#3FAEDD;}
      .bar-pct{width:40px;text-align:right;font-size:0.78rem;color:#7A7B7D;}
      .note-box{background:#FFF8EE;border:1px solid #F0DFB8;border-radius:10px;padding:12px;font-size:0.8rem;color:#8A6D2F;margin-top:10px;}
      .review-item{padding:10px 0;border-bottom:1px dashed #DDE3E1;font-size:0.85rem;}
      .ra-wrong{color:#E0654F;} .ra-right{color:#5FA850;}
      .no-print{display:none;}
    </style></head><body>${reportHtml}</body></html>`;
  const blob = new Blob([doc], {type:'text/html'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const safeName = (student.name || 'eleve').replace(/[^a-z0-9]+/gi,'-');
  a.href = url;
  a.download = `rapport-francais-${safeName}-${new Date().toISOString().slice(0,10)}.html`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(()=>URL.revokeObjectURL(url), 2000);
}

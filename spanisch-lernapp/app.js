const DATA=window.VERDANA_SPANISH_DATA||{lessons:[],dialogs:[],vocabulary:[]};
const lessons=DATA.lessons;
const dialogs=DATA.dialogs;
const vocab=DATA.vocabulary;
const cards=vocab.map((v,i)=>({id:i,c:v[2],f:v[0],b:v[1],example:v[3]}));
const decodeDeck=[
{es:'Hola, soy de Verdana AG.',literal:'Hallo, ich-bin von Verdana AG.',natural:'Hallo, ich bin von Verdana AG.'},
{es:'Podemos hablar de su proyecto?',literal:'Koennen-wir sprechen von Ihrem Projekt?',natural:'Koennen wir ueber Ihr Projekt sprechen?'},
{es:'Ofrecemos productos de alta calidad.',literal:'Wir-bieten-an Produkte von hoher Qualitaet.',natural:'Wir bieten hochwertige Produkte an.'},
{es:'Le enviaremos la oferta por correo electronico.',literal:'Ihnen werden-wir-senden das Angebot per E-Mail.',natural:'Wir senden Ihnen das Angebot per E-Mail.'},
{es:'La entrega esta prevista para la proxima semana.',literal:'Die Lieferung ist vorgesehen fuer die naechste Woche.',natural:'Die Lieferung ist fuer naechste Woche vorgesehen.'},
{es:'Puede confirmar la direccion de entrega?',literal:'Koennen-Sie bestaetigen die Adresse von Lieferung?',natural:'Koennen Sie die Lieferadresse bestaetigen?'}
];
let state=JSON.parse(localStorage.getItem('verdanaSpanishState')||'{"xp":0,"level":1,"streak":0,"progress":0,"seen":{},"leitner":{},"lastDay":""}');
const today=new Date().toISOString().slice(0,10);if(state.lastDay!==today){state.streak=(state.lastDay?state.streak+1:1);state.lastDay=today;save(false)}
const views=document.querySelectorAll('.view');
document.querySelectorAll('.tabs button').forEach(btn=>btn.onclick=()=>{document.querySelectorAll('.tabs button').forEach(b=>b.classList.remove('active'));btn.classList.add('active');views.forEach(v=>v.classList.remove('active-view'));document.getElementById(btn.dataset.view).classList.add('active-view')});
document.querySelector('[data-jump="birkenbihl"]').onclick=()=>document.querySelector('[data-view="birkenbihl"]').click();
function save(render=true){localStorage.setItem('verdanaSpanishState',JSON.stringify(state));if(render)renderStats()}
function addXP(v){state.xp+=v;state.progress=Math.min(100,Math.round(Object.keys(state.seen||{}).length/vocab.length*100));state.level=1+Math.floor(state.xp/100);save()}
function renderStats(){document.getElementById('xp').innerText=state.xp;document.getElementById('level').innerText=state.level;document.getElementById('streak').innerText=state.streak;document.getElementById('progressBar').style.width=state.progress+'%';document.getElementById('progressText').innerText=state.progress+' Prozent abgeschlossen · '+Object.keys(state.seen||{}).length+' von '+vocab.length+' Woertern gesehen'}
function markSeen(id){state.seen[id]=true;state.progress=Math.min(100,Math.round(Object.keys(state.seen).length/vocab.length*100))}
const lessonList=document.getElementById('lessonList');lessons.forEach((l,idx)=>{const related=vocab.slice(idx*16,idx*16+16);const el=document.createElement('article');el.className='card lesson-card';el.innerHTML='<h3>'+l.title+'</h3><p>'+l.content+'</p><p><strong>'+related.length+' Fokuswoerter:</strong> '+related.map(w=>w[1]).join(', ')+'</p><button>Lektion abschliessen</button>';el.querySelector('button').onclick=()=>{related.forEach(w=>markSeen(vocab.indexOf(w)));addXP(l.xp);alert('+'+l.xp+' XP')};lessonList.appendChild(el)});
let decodeIndex=0;function renderDecode(){const d=decodeDeck[decodeIndex];document.getElementById('decodeSentence').innerText=d.es;document.getElementById('decodeLiteral').innerText=d.literal;document.getElementById('decodeNatural').innerText=d.natural}renderDecode();
document.getElementById('nextDecode').onclick=()=>{decodeIndex=(decodeIndex+1)%decodeDeck.length;renderDecode()};
document.getElementById('completeDecode').onclick=()=>addXP(12);
document.getElementById('speakDecode').onclick=()=>{const d=decodeDeck[decodeIndex];if('speechSynthesis'in window){const u=new SpeechSynthesisUtterance(d.es);u.lang='es-ES';u.rate=.82;speechSynthesis.speak(u)}};
function dueCards(){return cards.slice().sort((a,b)=>(state.leitner[a.id]||0)-(state.leitner[b.id]||0))}
let cardIndex=0;function currentCard(){return dueCards()[cardIndex%dueCards().length]}
function renderCard(){const card=currentCard();document.getElementById('flashCategory').innerText=card.c+' · Box '+(state.leitner[card.id]||0);document.getElementById('flashFront').innerText=card.f;document.getElementById('flashBack').innerText=card.b+' · '+card.example;document.getElementById('flashBack').classList.add('hidden')}renderCard();
document.getElementById('showAnswer').onclick=()=>document.getElementById('flashBack').classList.remove('hidden');
document.getElementById('nextCard').onclick=()=>{cardIndex=(cardIndex+1)%cards.length;renderCard()};
document.getElementById('knownCard').onclick=()=>{const card=currentCard();state.leitner[card.id]=Math.min(5,(state.leitner[card.id]||0)+1);markSeen(card.id);addXP(5);cardIndex=(cardIndex+1)%cards.length;renderCard()};
function buildQuiz(){const correct=cards[Math.floor(Math.random()*cards.length)];const options=[correct.b];while(options.length<4){const o=cards[Math.floor(Math.random()*cards.length)].b;if(!options.includes(o))options.push(o)}return{q:'Was bedeutet: '+correct.f+'?',correct:correct.b,options:options.sort(()=>Math.random()-.5),id:correct.id}}
let currentQuiz;function renderQuiz(){currentQuiz=buildQuiz();document.getElementById('quizQuestion').innerText=currentQuiz.q;const wrap=document.getElementById('quizOptions');wrap.innerHTML='';document.getElementById('quizFeedback').innerText='';currentQuiz.options.forEach(ans=>{const b=document.createElement('button');b.innerText=ans;b.onclick=()=>{if(ans===currentQuiz.correct){document.getElementById('quizFeedback').innerText='Richtig · Abrufen staerkt das Gedaechtnis';state.leitner[currentQuiz.id]=Math.min(5,(state.leitner[currentQuiz.id]||0)+1);markSeen(currentQuiz.id);addXP(10)}else{document.getElementById('quizFeedback').innerText='Noch nicht. Richtig: '+currentQuiz.correct;state.leitner[currentQuiz.id]=Math.max(0,(state.leitner[currentQuiz.id]||0)-1)}setTimeout(renderQuiz,900)};wrap.appendChild(b)})}renderQuiz();
const dialogList=document.getElementById('dialogList');dialogs.forEach(d=>{const el=document.createElement('article');el.className='card';el.innerHTML='<h3>'+d.title+'</h3><p>'+d.text+'</p><button>Vorlesen</button>';el.querySelector('button').onclick=()=>{if('speechSynthesis'in window){const u=new SpeechSynthesisUtterance(d.text);u.lang='es-ES';u.rate=.84;speechSynthesis.speak(u)}};dialogList.appendChild(el)});
function renderTable(filter=''){const body=document.getElementById('vocabTable');body.innerHTML='';vocab.filter(v=>v.join(' ').toLowerCase().includes(filter.toLowerCase())).forEach((v)=>{const id=vocab.indexOf(v);const tr=document.createElement('tr');tr.innerHTML='<td>'+v[0]+'</td><td>'+v[1]+'</td><td>'+v[2]+'</td><td>'+v[3]+'</td>';tr.onclick=()=>{markSeen(id);addXP(1)};body.appendChild(tr)})}
renderTable();document.getElementById('searchInput').oninput=e=>renderTable(e.target.value);renderStats();

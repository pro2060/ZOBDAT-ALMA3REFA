const books = {
 money: {
  title:"سيكولوجية المال", author:"مورجان هاوسل", category:"مال وسلوك", cover:"cover-money",
  intro:"كتاب يشرح أن النجاح المالي لا يعتمد على الذكاء الحسابي وحده؛ بل على السلوك، والصبر، وطريقة فهم المخاطر والحرية.",
  summary:"الفكرة المركزية: التعامل مع المال سلوك إنساني قبل أن يكون مسألة رياضية. لكل شخص تجاربه وظروفه ومخاوفه، ولذلك قد يتخذ الناس قرارات مالية مختلفة دون أن يكون أحدهم غبياً بالضرورة.",
  ideas:[
   "القيمة الحقيقية للمال هي ما يمنحك إياه من استقلال وحرية في اختيار وقتك وطريقة عيشك.",
   "النجاح المالي يحتاج إلى هامش أمان؛ فالمستقبل لا يسير وفق توقعاتنا دائماً.",
   "معرفة معنى «الكفاية» تحميك من مطاردة لا تنتهي لما هو أكثر.",
   "القدرة على الاستمرار أهم من تحقيق أفضل نتيجة على الورق؛ تجنب الانهيار أولاً.",
   "الادخار يمنحك خيارات حتى عندما لا تعرف بعد ما الذي ستحتاج إليه."
  ],
  application:"حدّد ما تعنيه الكفاية في مرحلتك الحالية، ثم افصل بين المال الذي يخدم حرية الأسرة والمال الذي يتحول إلى هدف مستقل."
 },
 zagh: {
  title:"زغازيغ", author:"أحمد خالد توفيق", category:"قراءة ساخرة", cover:"cover-zagh",
  intro:"مساحة قراءة خفيفة تعتمد على المفارقة والسخرية وملاحظة تفاصيل الحياة اليومية.",
  summary:"جلسة استراحة معرفية: نقرأ للمتعة، ونلتقط المفارقات واللمحات الذكية دون تحويل كل صفحة إلى درس ثقيل أو تحليل أكاديمي.",
  ideas:[
   "السخرية أحياناً طريقة ذكية لرؤية التناقضات التي اعتدناها.",
   "ليس كل ما نقرأه مطلوباً منه أن يغير حياتنا؛ بعض الكتب وظيفتها أن تمنحنا متعة.",
   "الملاحظة الدقيقة للتفاصيل اليومية مادة خام للفكاهة والتفكير."
  ],
  application:"اختر فقرة أضحكتك، ثم دوّن ما الذي جعلها مضحكة: المبالغة، أم المفارقة، أم كشف حقيقة مألوفة؟"
 }
};
const $=s=>document.querySelector(s);
const state={saved:JSON.parse(localStorage.getItem('z_saved')||'[]'),notes:JSON.parse(localStorage.getItem('z_notes')||'[]')};
const arabic=n=>String(n).replace(/\d/g,d=>'٠١٢٣٤٥٦٧٨٩'[d]);
function updateCounts(){$('#savedCount').textContent=arabic(state.saved.length);$('#notesCount').textContent=arabic(state.notes.length)}
function switchTab(id){document.querySelectorAll('.tab').forEach(b=>b.classList.toggle('active',b.dataset.tab===id));document.querySelectorAll('.panel').forEach(p=>p.classList.toggle('active',p.id===id));$('#bookDetail').classList.add('hidden')}
function openBook(id){const b=books[id];const detail=$('#detailContent');detail.innerHTML=`
 <div class="detail-hero"><div class="cover ${b.cover}"><span class="cover-kicker">${id==='money'?'الكتاب الأول':'استراحة معرفية'}</span><b>${b.title}</b><small>${b.author}</small></div><div><span class="tag">${b.category}</span><h2>${b.title}</h2><p>${b.intro}</p><div class="audio-controls"><button id="listenBtn">▶ استمع إلى الملخص</button><button id="stopBtn">■ إيقاف الصوت</button></div><small class="muted">يستخدم التطبيق صوت القراءة المتاح على جهازك.</small></div></div>
 <div class="detail-section"><h3>الخلاصة</h3><p>${b.summary}</p></div>
 <div class="detail-section"><h3>أهم الأفكار</h3>${b.ideas.map((x,i)=>`<div class="idea"><span>${arabic(i+1)}. ${x}</span><button data-save="${id}:${i}">＋ احفظ الفكرة</button></div>`).join('')}</div>
 <div class="detail-section"><h3>من المعرفة إلى التطبيق</h3><p>${b.application}</p></div>`;
 $('#bookDetail').classList.remove('hidden');document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active'));document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));window.scrollTo({top:0,behavior:'smooth'});
 $('#listenBtn').onclick=()=>{if(!('speechSynthesis'in window)){alert('ميزة القراءة الصوتية غير مدعومة في هذا المتصفح.');return}speechSynthesis.cancel();let text=[b.title,b.intro,b.summary,...b.ideas,b.application].join('. ');let u=new SpeechSynthesisUtterance(text);u.lang='ar';u.rate=.9;speechSynthesis.speak(u)};
 $('#stopBtn').onclick=()=>speechSynthesis.cancel();
 detail.querySelectorAll('[data-save]').forEach(btn=>btn.onclick=()=>{let [book,index]=btn.dataset.save.split(':');let item={book:books[book].title,text:books[book].ideas[+index]};if(!state.saved.some(x=>x.text===item.text)){state.saved.push(item);persist();renderSaved();updateCounts();btn.textContent='✓ محفوظة'}else btn.textContent='✓ محفوظة'});
}
function persist(){localStorage.setItem('z_saved',JSON.stringify(state.saved));localStorage.setItem('z_notes',JSON.stringify(state.notes))}
function renderSaved(){$('#savedList').innerHTML=state.saved.length?state.saved.map(x=>`<div class="saved-item"><span class="tag">${x.book}</span><p>${x.text}</p></div>`).join(''):'<div class="empty-state">لم تحفظ أفكاراً بعد. افتح أي كتاب واحفظ الفكرة التي تستحق الرجوع إليها.</div>'}
function renderNotes(){$('#notesList').innerHTML=state.notes.map(n=>`<div class="note-item">${n.text}<small>${n.date}</small></div>`).join('')}
document.querySelectorAll('[data-tab]').forEach(b=>b.onclick=()=>switchTab(b.dataset.tab));
document.querySelectorAll('[data-go]').forEach(b=>b.onclick=()=>{switchTab(b.dataset.go);document.querySelector('.tabs').scrollIntoView({behavior:'smooth'})});
document.querySelectorAll('[data-book]').forEach(b=>b.onclick=()=>openBook(b.dataset.book));
$('#backBtn').onclick=()=>{switchTab('library');document.querySelector('.tabs').scrollIntoView({behavior:'smooth'})};
$('#saveNote').onclick=()=>{let text=$('#noteInput').value.trim();if(!text)return;state.notes.unshift({text,date:new Date().toLocaleDateString('ar-EG')});persist();$('#noteInput').value='';renderNotes();updateCounts()};
renderSaved();renderNotes();updateCounts();
let deferredPrompt;window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredPrompt=e;$('#installBtn').classList.remove('hidden')});
$('#installBtn').onclick=async()=>{if(!deferredPrompt)return;deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;$('#installBtn').classList.add('hidden')};
if('serviceWorker'in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));

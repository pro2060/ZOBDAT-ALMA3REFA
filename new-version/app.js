const categories=[
{name:"الكل",icon:"✦"},
{name:"التفكير واتخاذ القرار",icon:"◈"},
{name:"المال والأعمال",icon:"◇"},
{name:"تطوير الذات والإنتاجية",icon:"✳"},
{name:"الأدب والقراءة",icon:"❋"},
{name:"التاريخ والفلسفة والتصميم",icon:"⌘"}
];
const rawBooks=[
["thinking-fast-and-slow","التفكير، السريع والبطيء","دانيال كانيمان",1,"◉"],
["predictably-irrational","لا عقلانية متوقعة","دان أرييلي",1,"◌"],
["thinking-in-bets","التفكير في الرهانات","آني ديوك",1,"↗"],
["art-of-thinking-clearly","فن التفكير بوضوح","رولف دوبلي",1,"⌁"],
["nudge","الدفع اللطيف","ريتشارد ثالر وكاس سنستين",1,"➤"],
["righteous-mind","العقل الصالح","جوناثان هايدت",1,"◎"],
["influence","التأثير","روبرت سيالديني",1,"✣"],
["superforecasting","التنبؤ الفائق","فيليب تيتلوك ودان غاردنر",1,"◍"],
["factfulness","الحقيقة","هانس روسلينغ",1,"◐"],
["scout-mindset","عقلية الكشّاف","جوليا غالف",1,"⌖"],
["psychology-of-money","سيكولوجية المال","مورغان هاوسل",2,"◈"],
["richest-man-babylon","أغنى رجل في بابل","جورج كلاسون",2,"◉"],
["intelligent-investor","المستثمر الذكي","بنجامين غراهام",2,"▤"],
["rich-dad-poor-dad","الأب الغني والأب الفقير","روبرت كيوساكي",2,"◇"],
["millionaire-next-door","المليونير المجاور","توماس ستانلي وويليام دانكو",2,"⌂"],
["common-sense-investing","الدليل الصغير للاستثمار المنطقي","جون بوغل",2,"↗"],
["i-will-teach-you-rich","سأعلّمك كيف تصبح ثريًا","راميت سيثي",2,"✦"],
["one-up-wall-street","التفوّق على وول ستريت","بيتر لينش",2,"▥"],
["your-money-or-life","مالك أو حياتك","فيكي روبن وجو دومينغيز",2,"◷"],
["simple-path-wealth","الطريق البسيط إلى الثروة","جاي إل كولينز",2,"⌁"],
["deep-work","العمل العميق","كال نيوبورت",3,"◉"],
["atomic-habits","العادات الذرية","جيمس كلير",3,"✳"],
["seven-habits","العادات السبع للناس الأكثر فاعلية","ستيفن كوفي",3,"▦"],
["essentialism","الجوهرية","غريغ ماكيون",3,"◇"],
["getting-things-done","إنجاز الأمور","ديفيد ألين",3,"☑"],
["grit","المثابرة","أنجيلا داكوورث",3,"⌁"],
["mindset","العقلية","كارول دويك",3,"◐"],
["make-time","اصنع وقتًا","جيك ناب وجون زيراتسكي",3,"◷"],
["four-thousand-weeks","أربعة آلاف أسبوع","أوليفر بيركمان",3,"⌛"],
["power-of-habit","قوة العادة","تشارلز دويغ",3,"↻"],
["zaghazigh","زغازيغ","أحمد خالد توفيق",4,"☼"],
["alchemist","الخيميائي","باولو كويلو",4,"✧"],
["1984","١٩٨٤","جورج أورويل",4,"◉"],
["animal-farm","مزرعة الحيوان","جورج أورويل",4,"♧"],
["old-man-and-sea","العجوز والبحر","إرنست همنغواي",4,"≈"],
["little-prince","الأمير الصغير","أنطوان دو سانت إكزوبيري",4,"✦"],
["to-kill-mockingbird","أن تقتل طائرًا بريئًا","هاربر لي",4,"❋"],
["the-stranger","الغريب","ألبير كامو",4,"◐"],
["season-migration-north","موسم الهجرة إلى الشمال","الطيب صالح",4,"❧"],
["palace-walk","بين القصرين","نجيب محفوظ",4,"⌂"],
["design-everyday-things","تصميم الأشياء اليومية","دونالد نورمان",5,"▤"],
["mans-search-meaning","الإنسان يبحث عن المعنى","فيكتور فرانكل",5,"✧"],
["sapiens","العاقل","يوفال نوح هراري",5,"◉"],
["homo-deus","الإنسان الإله","يوفال نوح هراري",5,"⌘"],
["brief-history-time","تاريخ موجز للزمان","ستيفن هوكينغ",5,"◌"],
["meditations","التأملات","ماركوس أوريليوس",5,"◇"],
["republic","الجمهورية","أفلاطون",5,"▱"],
["guns-germs-steel","أسلحة وجراثيم وفولاذ","جاريد دايموند",5,"⌖"],
["lessons-history","دروس التاريخ","ويل ديورانت وأرييل ديورانت",5,"↻"],
["story-of-art","قصة الفن","إرنست غومبريتش",5,"✿"]
];
const categoryNames=categories.slice(1).map(c=>c.name);
const books=rawBooks.map((row,index)=>({id:row[0],title:row[1],author:row[2],category:categoryNames[row[3]-1],mark:row[4],hue:(index*37+22)%360,number:index+1}));
const summaries={
"thinking-fast-and-slow":{central:"يفصل دانيال كانيمان بين تفكير سريع حدسي وتفكير أبطأ تحليلي. كلاهما ضروري، لكن الحدس قد يوقعنا في انحيازات عندما نواجه مسائل معقدة أو عالية المخاطر.",ideas:["ما يسهل تذكره قد يبدو أكثر شيوعًا مما هو عليه.","المعلومة الأولى قد ترسي تقديراتنا اللاحقة.","تماسك القصة لا يعني أن أدلتها قوية."],action:"قبل قرار مهم، اكتب الحقائق والافتراضات، واطلب رأيًا مستقلًا قبل الالتزام."},
"psychology-of-money":{central:"المال سلوك إنساني قبل أن يكون معادلات؛ فالتجارب والمخاوف والأهداف الشخصية تشكل قراراتنا المالية.",ideas:["الاستمرارية والوقت يدعمان نمو المال.","الادخار والهامش الآمن يمنحان مرونة أمام المفاجآت.","قيمة المال الكبرى قد تكون حرية الوقت والاختيار."],action:"اكتب تعريفك الشخصي للكفاية، ثم اختر خطوة مالية صغيرة تحمي وقتك واستقرارك."},
"deep-work":{central:"العمل العميق هو التركيز المتصل على مهمة معرفية مهمة. حماية وقت التركيز ترفع جودة الناتج وتساعد على تطوير المهارات.",ideas:["التركيز مهارة يمكن تدريبها.","الانشغال لا يساوي التقدم؛ قِس قيمة الناتج.","اجمع المهام السطحية وقلل المشتتات."],action:"احمِ جلسة تركيز واحدة هذا الأسبوع لمهمة ذات قيمة، ثم دوّن ما قاطعك."},
"design-everyday-things":{central:"التصميم الجيد يجعل الاستخدام واضحًا وقابلًا للاكتشاف. إذا تكرر ارتباك الناس، فغالبًا توجد فرصة لتحسين التصميم بدل لوم المستخدم.",ideas:["الإشارات الواضحة تشرح ما يمكن فعله.","التغذية الراجعة تؤكد نتيجة الفعل.","اختبر التصميم مع شخص لم يشارك في صنعه."],action:"راقب شخصًا يستخدم منتجًا أو صفحة، وسجّل موضع التردد قبل اقتراح حل."},
"mans-search-meaning":{central:"يرى فيكتور فرانكل أن البحث عن المعنى مصدر مهم للاتجاه والمسؤولية. قد نجده في عمل نافع أو علاقة أو موقف مسؤول تجاه ظرف لا نستطيع تغييره.",ideas:["المعنى يتغير باختلاف الشخص والمرحلة.","المعاناة ليست فضيلة بحد ذاتها؛ غيّر ما يمكن تغييره.","المعنى لا يساوي السعادة، لكنه يساعد على توجيه الاختيارات."],action:"اسأل نفسك: ما المسؤولية أو العلاقة أو العمل الذي يمنح هذه المرحلة معنى؟"}
};
const grid=document.querySelector("#bookGrid"),filter=document.querySelector("#categoryFilters"),count=document.querySelector("#booksCount"),search=document.querySelector("#searchBooks");
let selectedCategory="الكل";
function cardMarkup(book){
return '<article class="book-card"><button class="book-cover cover-artwork" style="--hue:'+book.hue+'" data-book="'+book.id+'" aria-label="عرض '+book.title+'"><span class="cover-orbit"></span><span class="cover-mark">'+book.mark+'</span><span class="cover-label">'+book.category+'</span><b>'+book.title+'</b><small>'+book.author+'</small><span class="cover-num">'+String(book.number).padStart(2,"0")+'</span></button><div class="book-text"><span class="pill">'+book.category+'</span><h3>'+book.title+'</h3><p class="book-status">'+(summaries[book.id]?"ملخص وأفكار متاحة":"الملخص سيضاف لاحقًا")+'</p><button class="read-button" data-book="'+book.id+'">'+(summaries[book.id]?"اقرأ مقتطفًا من الملخص":"عرض بيانات الكتاب")+' <span>←</span></button></div></article>';
}
function bindBookButtons(){
grid.querySelectorAll("[data-book]").forEach(button=>button.addEventListener("click",()=>showDetail(button.dataset.book)));
}
function renderBooks(){
const term=search.value.trim().toLocaleLowerCase("ar");
const visible=books.filter(book=>(selectedCategory==="الكل"||book.category===selectedCategory)&&(!term||(book.title+" "+book.author+" "+book.category).toLocaleLowerCase("ar").includes(term)));
count.textContent=String(visible.length).padStart(2,"0");
grid.innerHTML=visible.length?visible.map(cardMarkup).join(""):'<div class="empty-books">لم نعثر على كتب في هذا البحث أو التصنيف.</div>';
bindBookButtons();
}
function renderFilters(){
filter.innerHTML=categories.map(category=>'<button class="category-chip '+(category.name===selectedCategory?"active":"")+'" data-category="'+category.name+'"><span>'+category.icon+'</span>'+category.name+'</button>').join("");
filter.querySelectorAll("[data-category]").forEach(button=>button.addEventListener("click",()=>{selectedCategory=button.dataset.category;renderFilters();renderBooks()}));
}
function showDetail(id){
const book=books.find(item=>item.id===id);if(!book)return;
const summary=summaries[id],box=document.querySelector("#detailContent");
let body=summary?'<section class="summary-panel"><span class="pill">مقتطف تحريري</span><h3>الفكرة المركزية</h3><p>'+summary.central+'</p><h3>أفكار رئيسية</h3><ul>'+summary.ideas.map(idea=>'<li>'+idea+'</li>').join("")+'</ul><h3>تطبيق عملي</h3><p>'+summary.action+'</p><small>خلاصة تفسيرية موجزة، وليست بديلًا عن قراءة الكتاب.</small></section>':'<section class="summary-panel coming-soon"><h3>المحتوى قيد الإعداد</h3><p>تتوفر حاليًا بيانات الكتاب وغلاف توضيحي. ستضاف الخلاصة والملف الصوتي بعد تجهيز محتوى موثوق.</p></section>';
box.innerHTML='<article class="book-detail-card"><div class="book-cover cover-artwork detail-cover" style="--hue:'+book.hue+'"><span class="cover-orbit"></span><span class="cover-mark">'+book.mark+'</span><span class="cover-label">'+book.category+'</span><b>'+book.title+'</b><small>'+book.author+'</small><span class="cover-num">'+String(book.number).padStart(2,"0")+'</span></div><div class="detail-book-meta"><span class="pill">'+book.category+'</span><h2>'+book.title+'</h2><p class="author-line">تأليف: '+book.author+'</p><p>هذه بطاقة الكتاب ضمن مكتبة زبدة المعرفة.</p>'+body+'</div></article>';
document.querySelector("#bookDetail").classList.remove("hidden");
document.querySelector("#catalogSection").classList.add("hidden");
document.querySelector("#categories").classList.add("hidden");
document.querySelector("#method").classList.add("hidden");
document.querySelector("#about").classList.add("hidden");
document.querySelector("#bookDetail").scrollIntoView({behavior:"smooth",block:"start"});
}
document.querySelector("#backBtn").addEventListener("click",()=>{document.querySelector("#bookDetail").classList.add("hidden");document.querySelector("#catalogSection").classList.remove("hidden");document.querySelector("#categories").classList.remove("hidden");document.querySelector("#method").classList.remove("hidden");document.querySelector("#about").classList.remove("hidden");document.querySelector("#catalogSection").scrollIntoView({behavior:"smooth"})});
search.addEventListener("input",renderBooks);
renderFilters();
renderBooks();

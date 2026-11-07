const catalog=[
{id:"money",title:"سيكولوجية المال",author:"مورجان هاوسل",category:"المال والأعمال",cover:"cover-money",art:"◎"},
{id:"zagh",title:"زغازيغ",author:"أحمد خالد توفيق",category:"الأدب والقراءة الخفيفة",cover:"cover-zagh",art:"☼"}
];
const categories=[{name:"الكل",icon:"✦"},{name:"المال والأعمال",icon:"◈"},{name:"الأدب والقراءة الخفيفة",icon:"❋"},{name:"تطوير الذات",icon:"✳"},{name:"التاريخ والفكر",icon:"⌘"}];
const grid=document.querySelector("#bookGrid"),filter=document.querySelector("#categoryFilters"),count=document.querySelector("#booksCount");
function renderBooks(category="الكل"){
 const books=category==="الكل"?catalog:catalog.filter(book=>book.category===category);
 count.textContent=String(books.length).padStart(2,"0");
 grid.innerHTML=books.length?books.map(book=>`<article class="book-card"><button class="book-cover ${book.cover}" data-book="${book.id}" aria-label="عرض ${book.title}"><span class="cover-label">${book.category}</span><span class="cover-art">${book.art}</span><b>${book.title}</b><small>${book.author}</small><span class="cover-num">✦</span></button><div class="book-text"><span class="pill">${book.category}</span><h3>${book.title}</h3><p class="book-status">الملخص والملف الصوتي قريباً</p><button class="read-button" data-book="${book.id}">عرض بيانات الكتاب <span>←</span></button></div></article>`).join(""):'<div class="empty-books">لا توجد كتب في هذا التصنيف حاليًا.</div>';
 grid.querySelectorAll("[data-book]").forEach(button=>button.addEventListener("click",()=>showDetail(button.dataset.book)));
}
function renderFilters(active="الكل"){
 filter.innerHTML=categories.map(category=>`<button class="category-chip ${category.name===active?"active":""}" data-category="${category.name}"><span>${category.icon}</span>${category.name}</button>`).join("");
 filter.querySelectorAll("[data-category]").forEach(button=>button.addEventListener("click",()=>{renderFilters(button.dataset.category);renderBooks(button.dataset.category)}));
}
function showDetail(id){
 const book=catalog.find(item=>item.id===id);if(!book)return;
 const box=document.querySelector("#detailContent");
 box.innerHTML=`<article class="book-detail-card"><div class="book-cover ${book.cover}"><span class="cover-label">${book.category}</span><span class="cover-art">${book.art}</span><b>${book.title}</b><small>${book.author}</small></div><div><span class="pill">${book.category}</span><h2>${book.title}</h2><p>نعمل على إعداد محتوى هذا الكتاب. ستضاف الخلاصة والملفات الصوتية لاحقًا.</p><div class="coming-soon">الخلاصة والملف الصوتي<br><strong>قريبًا</strong></div></div></article>`;
 document.querySelector("#bookDetail").classList.remove("hidden");
 document.querySelector("#catalogSection").classList.add("hidden");
 document.querySelector("#method").classList.add("hidden");
 document.querySelector("#about").classList.add("hidden");
 document.querySelector("#bookDetail").scrollIntoView({behavior:"smooth",block:"start"});
}
document.querySelector("#backBtn").addEventListener("click",()=>{document.querySelector("#bookDetail").classList.add("hidden");document.querySelector("#catalogSection").classList.remove("hidden");document.querySelector("#method").classList.remove("hidden");document.querySelector("#about").classList.remove("hidden");document.querySelector("#catalogSection").scrollIntoView({behavior:"smooth"})});
document.querySelector("#searchBooks").addEventListener("input",event=>{const term=event.target.value.trim();const results=catalog.filter(book=>(book.title+" "+book.author+" "+book.category).includes(term));grid.innerHTML=results.length?results.map(book=>`<article class="book-card"><button class="book-cover ${book.cover}" data-book="${book.id}" aria-label="عرض ${book.title}"><span class="cover-label">${book.category}</span><span class="cover-art">${book.art}</span><b>${book.title}</b><small>${book.author}</small><span class="cover-num">✦</span></button><div class="book-text"><span class="pill">${book.category}</span><h3>${book.title}</h3><p class="book-status">الملخص والملف الصوتي قريباً</p><button class="read-button" data-book="${book.id}">عرض بيانات الكتاب <span>←</span></button></div></article>`).join(""):'<div class="empty-books">لم نعثر على كتاب بهذا الاسم.</div>';grid.querySelectorAll("[data-book]").forEach(button=>button.addEventListener("click",()=>showDetail(button.dataset.book)))});
renderFilters();renderBooks();
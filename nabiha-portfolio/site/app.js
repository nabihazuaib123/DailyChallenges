(()=>{
const T=['Sign Up','Credit Card Checkout','Landing Page','Calculator','App Icon','User Profile','Settings','404 Page','Music Player','Social Share','Flash Message','E-Commerce Shop','Direct Messaging','Countdown Timer','On/Off Switch','Pop-Up / Overlay','Email Receipt','Analytics Chart','Leaderboard','Location Tracker','Home Dashboard','Search','Onboarding','Boarding Pass','TV App','Subscribe','Dropdown','Contact Us','Map','Pricing'];
const D=T.map((t,i)=>({n:i+1,t,v:i>=10,f:'assets/day-'+String(i+1).padStart(2,'0')+(i>=10?'.mp4':'.png')}));
let S={theme:'dark',accent:'#ea4c89',anim:true,cur:true};
try{Object.assign(S,JSON.parse(localStorage.getItem('pf')||'{}'))}catch(e){}
const save=()=>{try{localStorage.setItem('pf',JSON.stringify(S))}catch(e){}};
const R=document.documentElement,$=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
function apply(){const th=S.theme=='auto'?(matchMedia('(prefers-color-scheme:light)').matches?'light':'dark'):S.theme;R.dataset.theme=th;R.style.setProperty('--a',S.accent);R.classList.toggle('noanim',!S.anim);R.classList.toggle('nocur',!S.cur)}
apply();
const P=document.body.dataset.p,L=[['home','index.html','Home'],['work','work.html','My Work'],['profile','profile.html','Profile'],['contact','contact.html','Contact'],['settings','settings.html','Settings']];
document.body.insertAdjacentHTML('afterbegin','<i class="bl b1"></i><i class="bl b2"></i><div id="pg"></div><div id="cur"></div><nav>'+L.map(l=>'<a href="'+l[1]+'" class="'+(l[0]==P?'on':'')+'">'+l[2]+'</a>').join('')+'</nav>');
document.body.insertAdjacentHTML('beforeend','<footer>&copy; 2026 Nabiha Zuaib &middot; Jinnah University for Women &middot; Human Computer Interaction</footer><div id="md"><button class="x">&times;</button><button class="ar l">&lsaquo;</button><button class="ar r">&rsaquo;</button><div class="bx"></div></div>');
document.addEventListener('click',e=>{const a=e.target.closest('a[href$=".html"]');if(a&&!e.metaKey&&!e.ctrlKey){e.preventDefault();document.body.classList.add('out');setTimeout(()=>location.href=a.href,320)}});
addEventListener('pageshow',()=>document.body.classList.remove('out'));
// cursor + progress
const cu=$('#cur');let mx=0,my=0,cx=0,cy=0;
addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cu.classList.toggle('h',!!e.target.closest('a,button,.card,.chip,.sw,.cs'))});
(function lp(){cx+=(mx-cx)*.18;cy+=(my-cy)*.18;cu.style.left=cx+'px';cu.style.top=cy+'px';requestAnimationFrame(lp)})();
addEventListener('scroll',()=>{$('#pg').style.width=scrollY/(document.body.scrollHeight-innerHeight)*100+'%'});
// cards
const card=d=>'<article class="card rev" data-n="'+d.n+'"><span class="bd">'+(d.v?'Prototype':'Image')+'</span><div class="th">'+(d.v?'<video muted loop playsinline preload="none" poster="'+d.f.replace('.mp4','.jpg')+'" src="'+d.f+'"></video>':'<img loading="lazy" alt="'+d.t+'" src="'+d.f+'">')+'</div><div class="mt"><b>'+d.t+'</b><span>DAY '+String(d.n).padStart(2,'0')+'</span></div></article>';
let cur=0,list=D;
const md=$('#md'),bx=$('.bx',md);
function show(i){cur=(i+list.length)%list.length;const d=list[cur];bx.innerHTML=(d.v?'<video src="'+d.f+'" poster="'+d.f.replace('.mp4','.jpg')+'" autoplay loop controls playsinline></video>':'<img src="'+d.f+'" alt="'+d.t+'">')+'<p><b>Day '+d.n+'</b> &middot; '+d.t+'</p>';md.classList.add('on')}
const close=()=>{md.classList.remove('on');bx.innerHTML=''};
$('.x',md).onclick=close;$('.l',md).onclick=()=>show(cur-1);$('.r',md).onclick=()=>show(cur+1);md.onclick=e=>{if(e.target==md)close()};
addEventListener('keydown',e=>{if(!md.classList.contains('on'))return;if(e.key=='Escape')close();if(e.key=='ArrowLeft')show(cur-1);if(e.key=='ArrowRight')show(cur+1)});
function fill(el,arr){list=arr;el.innerHTML=arr.map(card).join('');$$('.card',el).forEach((c,i)=>{const v=$('video',c);
c.onmouseenter=()=>v&&v.play();c.onmouseleave=()=>{c.style.transform='';if(v)v.pause()};
c.onmousemove=e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;c.style.setProperty('--mx',x*100+'%');c.style.setProperty('--my',y*100+'%');if(S.anim)c.style.transform='perspective(800px) rotateY('+(x-.5)*12+'deg) rotateX('+(.5-y)*12+'deg) scale(1.03)'};
c.onclick=()=>show(i);c.style.transitionDelay=(i%4)*80+'ms';io.observe(c)})}
// reveal
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const t=e.target;t.classList.add('in');io.unobserve(t);
if(t.dataset.c){let n=+t.dataset.c,k=0;const s=setInterval(()=>{k+=Math.max(1,n/40|0);if(k>=n){k=n;clearInterval(s)}t.textContent=k},35)}
$$('.bar i',t).forEach(b=>b.style.width=b.dataset.w+'%')}),{threshold:.15});
// magnetic
$$('.btn').forEach(b=>{b.onmousemove=e=>{const r=b.getBoundingClientRect();b.style.transform='translate('+(e.clientX-r.left-r.width/2)*.25+'px,'+(e.clientY-r.top-r.height/2)*.35+'px)'};b.onmouseleave=()=>b.style.transform=''});
if(P=='home'){
 const R2=['UI/UX Designer','Dribbble Creator','Problem Solver'];let ri=0,ci=0,del=0;const ty=$('#ty');
 (function t(){const w=R2[ri];ty.textContent=w.slice(0,ci);if(!del&&ci==w.length){del=1;return setTimeout(t,1400)}if(del&&ci==0){del=0;ri=(ri+1)%R2.length}ci+=del?-1:1;setTimeout(t,del?40:90)})();
 fill($('#feat'),D.slice(-6).reverse());
}
if(P=='work'){const g=$('#all');fill(g,D);
 $$('.chip').forEach(c=>c.onclick=()=>{$$('.chip').forEach(x=>x.classList.remove('on'));c.classList.add('on');const k=c.dataset.k;fill(g,D.filter(d=>k=='all'||(k=='v')==d.v));$('#cnt').textContent=list.length})}
if(P=='contact'){$('#f').onsubmit=e=>{e.preventDefault();const n=$('#n').value,m=$('#m').value;location.href='mailto:nabihazuaib@gmail.com?subject='+encodeURIComponent('Portfolio message from '+n)+'&body='+encodeURIComponent(m+'\n\n'+$('#e').value);$('#f').style.display='none';$('.ok').classList.add('on')}}
if(P=='settings'){
 const mark=()=>{$$('[data-t]').forEach(b=>b.classList.toggle('on',b.dataset.t==S.theme));$$('.cs').forEach(b=>b.classList.toggle('on',b.dataset.a==S.accent));$('#sa').classList.toggle('on',S.anim);$('#sc').classList.toggle('on',S.cur)};
 $$('[data-t]').forEach(b=>b.onclick=()=>{S.theme=b.dataset.t;apply();save();mark()});
 $$('.cs').forEach(b=>{b.style.background=b.dataset.a;b.onclick=()=>{S.accent=b.dataset.a;apply();save();mark()}});
 $('#sa').onclick=()=>{S.anim=!S.anim;apply();save();mark()};$('#sc').onclick=()=>{S.cur=!S.cur;apply();save();mark()};
 $('#rs').onclick=()=>{S={theme:'dark',accent:'#ea4c89',anim:true,cur:true};apply();save();mark()};mark()}
$$('.rev,.st,.sk,.box,[data-c]').forEach((el,i)=>{if(!el.closest('.grid')){el.style.transitionDelay=(i%5)*70+'ms';io.observe(el)}});
})();

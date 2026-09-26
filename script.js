(function(){
'use strict';

/* =====================================================================
   EDIT YOUR CONTENT HERE
   Everything on the site (events, projects, publications, team, FAQ,
   contact details) is generated from the objects below.
   ===================================================================== */
var LOGO_FULL='assets/logo-full.webp';
var LOGO_MARK='assets/logo-mark.webp';

var SITE='Greenway Sci-Tech & Research Society';
var CFG={
  email:'greenwayscitech.research@gmail.com',
  phone:'+00 000 000 0000',
  address:'Science Wing, Room 000, Your Institution',
  hours:'Weekdays, 3:00 PM to 6:00 PM',
  social:{facebook:'https://www.facebook.com/p/Greenway-Sci-Tech-Research-Society-61593330395185/',instagram:'',linkedin:'',youtube:''}   /* paste full URLs here */
};

var WINGS=[
  {id:'chem',name:'Chemistry',icon:'flask',text:'Reactions, indicators and green chemistry experiments you can run safely at a bench.'},
  {id:'bio',name:'Biology',icon:'dna',text:'DNA, cells and ecosystems, from extraction labs to local field surveys.'},
  {id:'tech',name:'Physics & Technology',icon:'chip',text:'Forces, light, electronics and code, brought together to turn an idea into a working prototype.'},
  {id:'research',name:'Research',icon:'scope',text:'Learn to frame a question, collect data and write it up for others to read.'}
];

var EVENTS=[
  {id:'e1',title:'Intro to DNA Extraction',start:'2026-10-03T15:00',venue:'Biology Lab',type:'Workshop',wing:'bio',text:'Extract visible DNA from fruit and see how a real lab protocol is structured. No experience needed.'},
  {id:'e2',title:'Sensor Night: Build a Weather Node',start:'2026-10-17T17:00',venue:'Computer Lab',type:'Workshop',wing:'tech',text:'Wire up a temperature and humidity sensor and log your first readings.'},
  {id:'e3',title:'Annual Science Fair',start:'2026-11-14T09:00',venue:'Main Hall',type:'Exhibition',wing:'research',text:'Members and guests present projects, posters and live demonstrations.'},
  {id:'e4',title:'Green Chemistry Demo Day',start:'2026-11-28T14:00',venue:'Chemistry Lab',type:'Demonstration',wing:'chem',text:'Natural indicators, safe polymers and colour-change reactions up close.'},
  {id:'e5',title:'Microscope Skills Bootcamp',start:'2026-08-22T15:00',venue:'Research Lab',type:'Workshop',wing:'research',text:'Slide preparation, focusing and recording what you see.'},
  {id:'e6',title:'How to Write a Research Abstract',start:'2026-07-18T16:00',venue:'Seminar Room',type:'Seminar',wing:'research',text:'A practical session on turning results into a clear 250-word abstract.'},
  {id:'e7',title:'Orientation and Lab Safety',start:'2026-06-27T15:00',venue:'Main Hall',type:'Orientation',wing:'chem',text:'Meet the team, learn the safety rules and see what the term holds.'}
];

var PROJECTS=[
  {title:'Riverside Water Quality Kit',wings:['tech','chem'],status:'Ongoing',progress:65,team:5,tags:['Arduino','pH','Turbidity'],feat:true,text:'A low-cost sensor kit that measures pH, turbidity and temperature of local water sources and logs the readings to a shared sheet.'},
  {title:'Smartphone Microscope Lens',wings:['research'],status:'Ongoing',progress:40,team:3,tags:['Optics','3D printing'],text:'Turning a phone camera into a high-magnification microscope with a printed lens holder.'},
  {title:'Natural pH Indicators',wings:['chem'],status:'Completed',progress:100,team:4,tags:['Green chemistry'],text:'Comparing how common plant extracts change colour across the pH scale.'},
  {title:'Campus Flora Barcoding',wings:['bio'],status:'Recruiting',progress:15,team:2,tags:['DNA','Fieldwork'],text:'Collecting leaf samples and building a reference set for plants around the campus.'},
  {title:'Weather Station Network',wings:['tech'],status:'Ongoing',progress:80,team:6,tags:['IoT','Python'],text:'Several small stations reporting temperature, humidity and pressure to one dashboard.'},
  {title:'Yeast Fermentation Curves',wings:['bio','chem'],status:'Completed',progress:100,team:3,tags:['Data analysis'],text:'Measuring how sugar concentration changes the rate of yeast fermentation.'}
];

var PUBS=[
  {title:'Colour Response of Household Plant Extracts Across the pH Scale',authors:'Author Name, Author Name',venue:'Society Journal, Vol. 1',year:2026,type:'Journal',wing:'chem'},
  {title:'A Low-Cost Sensor Node for Monitoring Surface Water',authors:'Author Name, Author Name, Author Name',venue:'Student Research Conference',year:2026,type:'Conference',wing:'tech'},
  {title:'Smartphone Optics for Classroom Microscopy',authors:'Author Name',venue:'Annual Science Fair Poster Session',year:2026,type:'Poster',wing:'research'},
  {title:'Effect of Sugar Concentration on Yeast Fermentation Rate',authors:'Author Name, Author Name',venue:'Society Journal, Vol. 1',year:2026,type:'Journal',wing:'bio'},
  {title:'Barcoding Local Flora: A Pilot Study',authors:'Author Name, Author Name',venue:'Annual Science Fair Poster Session',year:2026,type:'Poster',wing:'bio'},
  {title:'Society Newsletter, Issue 1',authors:'Editorial Team',venue:'Greenway Sci-Tech & Research Society',year:2026,type:'Newsletter',wing:'research'}
];

var TEAM=[
  {role:'President',name:'Full Name'},{role:'Vice President',name:'Full Name'},{role:'General Secretary',name:'Full Name'},
  {role:'Head of Research',name:'Full Name'},{role:'Events Coordinator',name:'Full Name'},{role:'Technology and Media Lead',name:'Full Name'}
];

var FAQ=[
  {q:'Who can join?',a:'Anyone curious about science or technology. You do not need any experience to start.'},
  {q:'Is there a membership fee?',a:'Membership is free. Some workshops may ask for a small contribution towards materials.'},
  {q:'How often do you meet?',a:'We run a workshop, seminar or project session most weeks. Dates are listed on the Events page.'},
  {q:'Do I need my own equipment?',a:'No. Lab tools, kits and microscopes are provided at sessions.'},
  {q:'Can I start my own project?',a:'Yes. Pitch your idea to the executive panel and we will help you find a team.'}
];

/* =====================================================================
   Helpers
   ===================================================================== */
var $=function(s,r){return (r||document).querySelector(s)};
var $$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
var esc=function(s){return String(s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})};
var pad=function(n){return String(n).padStart(2,'0')};
var MON=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
var WM={};WINGS.forEach(function(w){WM[w.id]=w});

var IC={
  menu:'<line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>',
  close:'<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
  search:'<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
  clock:'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  pin:'<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
  mail:'<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>',
  phone:'<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
  users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  book:'<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
  chev:'<polyline points="6 9 12 15 18 9"/>',
  flask:'<path d="M9 3h6"/><path d="M10 3v6L4.5 19a2 2 0 0 0 1.8 3h11.4a2 2 0 0 0 1.8-3L14 9V3"/><path d="M7.5 15h9"/>',
  dna:'<path d="M7 3C7 8 17 8 17 12S7 16 7 21"/><path d="M17 3C17 8 7 8 7 12S17 16 17 21"/><path d="M9.2 5.6h5.6"/><path d="M7.5 12h9"/><path d="M9.2 18.4h5.6"/>',
  chip:'<rect x="5" y="5" width="14" height="14" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4"/>',
  scope:'<path d="M6 18h8"/><path d="M3 22h18"/><path d="M14 22a7 7 0 1 0 0-14h-1"/><path d="M9 14h2"/><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"/><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"/>',
  facebook:'<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
  instagram:'<rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>',
  linkedin:'<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
  youtube:'<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>'
};
function ic(n,s,sw){s=s||20;return '<svg width="'+s+'" height="'+s+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="'+(sw||1.8)+'" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">'+IC[n]+'</svg>'}

var toastTimer;
function toast(msg){var t=$('#toast');t.textContent=msg;t.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(function(){t.classList.remove('show')},3200)}
function copyText(text){
  return new Promise(function(res){
    function fallback(){try{var ta=document.createElement('textarea');ta.value=text;ta.style.position='fixed';ta.style.opacity='0';document.body.appendChild(ta);ta.select();var ok=document.execCommand('copy');document.body.removeChild(ta);res(!!ok)}catch(e){res(false)}}
    if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(text).then(function(){res(true)},fallback)}else fallback();
  });
}

/* =====================================================================
   Data prep
   ===================================================================== */
var NOW=Date.now();
EVENTS.forEach(function(e){e.d=new Date(e.start);e.up=e.d.getTime()>NOW});
function fmtTime(d){var h=d.getHours(),m=d.getMinutes(),ap=h>=12?'PM':'AM';h=h%12||12;return h+':'+pad(m)+' '+ap}
function upcoming(){return EVENTS.filter(function(e){return e.up}).sort(function(a,b){return a.d-b.d})}
function past(){return EVENTS.filter(function(e){return !e.up}).sort(function(a,b){return b.d-a.d})}

var state={evTab:'upcoming',evWing:'all',prWing:'all',pubType:'all',pubQ:''};

/* =====================================================================
   Renderers
   ===================================================================== */
function wingTile(w){
  return '<article class="wing glass c-'+w.id+'">'+
    '<div class="wing-art">'+ic(w.icon,92,1.4)+'</div>'+
    '<div class="wing-body"><h3>'+esc(w.name)+'</h3><p>'+esc(w.text)+'</p>'+
    '<button class="linkbtn" type="button" data-wing="'+w.id+'">Browse projects</button></div></article>';
}
function eventHTML(e){
  var isPast=!e.up;
  return '<article class="event glass c-'+e.wing+(isPast?' past':'')+'">'+
    '<time class="date" datetime="'+esc(e.start)+'"><b>'+pad(e.d.getDate())+'</b><span>'+MON[e.d.getMonth()]+' '+e.d.getFullYear()+'</span></time>'+
    '<div class="ev-body"><h3>'+esc(e.title)+'</h3><p>'+esc(e.text)+'</p>'+
    '<div class="meta"><span>'+ic('clock',16)+fmtTime(e.d)+'</span><span>'+ic('pin',16)+esc(e.venue)+'</span></div></div>'+
    '<div class="ev-side"><span class="badge">'+esc(e.type)+'</span>'+
    (isPast?'<span class="done">Completed</span>':'<button class="btn btn-ghost sm" type="button" data-register="'+e.id+'">Register interest</button>')+
    '</div></article>';
}
function projectHTML(p,forceNoFeat){
  var c1=p.wings[0];
  var sc='s-'+p.status.toLowerCase();
  var badges=p.wings.map(function(w){return '<span class="badge c-'+w+'">'+esc(WM[w].name)+'</span>'}).join('');
  var left=p.status==='Completed'?'Completed':p.progress+'% complete';
  return '<article class="project glass c-'+c1+((p.feat&&!forceNoFeat)?' feat':'')+'">'+
    '<div class="p-top"><span class="status '+sc+'">'+esc(p.status)+'</span><span class="p-wings">'+badges+'</span></div>'+
    '<h3>'+esc(p.title)+'</h3><p>'+esc(p.text)+'</p>'+
    '<div class="tags">'+p.tags.map(function(t){return '<span>'+esc(t)+'</span>'}).join('')+'</div>'+
    '<div class="p-foot"><div class="bar" role="img" aria-label="'+esc(left)+'"><i style="width:'+p.progress+'%"></i></div>'+
    '<div class="row"><span>'+esc(left)+'</span><span>'+p.team+' members</span></div></div></article>';
}
function pubHTML(p,i){
  return '<article class="pub c-'+p.wing+'">'+
    '<span class="badge">'+esc(p.type)+'</span>'+
    '<div><h3>'+esc(p.title)+'</h3><p class="authors">'+esc(p.authors)+'</p><p class="venue">'+esc(p.venue)+', '+p.year+'</p></div>'+
    '<div class="pub-actions"><button class="btn btn-ghost sm" type="button" data-soon="PDF link not added yet">Read PDF</button>'+
    '<button class="btn btn-ghost sm" type="button" data-cite="'+i+'">Copy citation</button></div></article>';
}
function chipsHTML(opts,key,cur){
  return opts.map(function(o){return '<button class="chip" type="button" data-key="'+key+'" data-val="'+o.id+'" aria-pressed="'+(o.id===cur)+'">'+esc(o.name)+'</button>'}).join('');
}
function emptyHTML(msg,reset){return '<div class="empty glass"><p>'+msg+'</p>'+(reset?'<button class="btn btn-ghost sm" type="button" data-reset="'+reset+'">Clear filters</button>':'')+'</div>'}

function renderEvents(){
  var list=state.evTab==='upcoming'?upcoming():state.evTab==='past'?past():upcoming().concat(past());
  if(state.evWing!=='all')list=list.filter(function(e){return e.wing===state.evWing});
  $('#eventList').innerHTML=list.length?list.map(eventHTML).join(''):emptyHTML('No events match these filters yet. Check back soon, or clear the filters to see everything.','events');
}
function renderProjects(){
  var list=PROJECTS.filter(function(p){return state.prWing==='all'||p.wings.indexOf(state.prWing)>-1});
  var el=$('#projectList');
  el.innerHTML=list.length?list.map(function(p){return projectHTML(p,list.length<3)}).join(''):emptyHTML('No projects in this area yet. Have an idea? Pitch it below.');
}
function renderPubs(){
  var q=state.pubQ.trim().toLowerCase();
  var idx=[];
  PUBS.forEach(function(p,i){
    if(state.pubType!=='all'&&p.type!==state.pubType)return;
    if(q&&(p.title+' '+p.authors+' '+p.venue).toLowerCase().indexOf(q)<0)return;
    idx.push(i);
  });
  $('#pubCount').textContent='Showing '+idx.length+' of '+PUBS.length+' publications';
  $('#pubList').innerHTML=idx.length?idx.map(function(i){return pubHTML(PUBS[i],i)}).join(''):'<div class="empty"><p>Nothing matches your search. Try a different word or clear the filter.</p><button class="btn btn-ghost sm" type="button" data-reset="pubs">Clear search</button></div>';
}
function renderChips(){
  $('#evTabs').innerHTML=chipsHTML([{id:'upcoming',name:'Upcoming'},{id:'past',name:'Past'},{id:'all',name:'All'}],'evTab',state.evTab);
  $('#evWings').innerHTML=chipsHTML([{id:'all',name:'All areas'}].concat(WINGS),'evWing',state.evWing);
  $('#prWings').innerHTML=chipsHTML([{id:'all',name:'All areas'}].concat(WINGS),'prWing',state.prWing);
  var types=['all'];PUBS.forEach(function(p){if(types.indexOf(p.type)<0)types.push(p.type)});
  $('#pubTypes').innerHTML=chipsHTML(types.map(function(t){return {id:t,name:t==='all'?'All types':t}}),'pubType',state.pubType);
}
function renderStatic(){
  $('#homeWings').innerHTML=WINGS.map(wingTile).join('');
  $('#homeEvents').innerHTML=upcoming().slice(0,3).map(eventHTML).join('')||emptyHTML('New events will be announced soon.');
  var feat=PROJECTS.filter(function(p){return p.status!=='Completed'}).slice(0,3);
  $('#homeProjects').innerHTML=feat.map(function(p){return projectHTML(p,true)}).join('');
  $('#team').innerHTML=TEAM.map(function(m){
    var ini=m.name.split(/\s+/).map(function(s){return s[0]}).join('').slice(0,2).toUpperCase();
    return '<article class="member glass"><div class="avatar"><span aria-hidden="true">'+esc(ini)+'</span></div><h3>'+esc(m.role)+'</h3><p>'+esc(m.name)+'</p></article>';
  }).join('');
  $('#faq').innerHTML=FAQ.map(function(f){return '<details class="glass"><summary>'+esc(f.q)+ic('chev',20)+'</summary><p>'+esc(f.a)+'</p></details>'}).join('');
  var picks=WINGS.map(function(w,i){return '<label class="pick c-'+w.id+'"><input type="radio" name="wing" value="'+esc(w.name)+'"'+(i===0?' required':'')+'><span>'+ic(w.icon,20)+esc(w.name)+'</span></label>'}).join('');
  picks+='<label class="pick"><input type="radio" name="wing" value="Not sure yet"><span>'+ic('search',20)+'Not sure yet</span></label>';
  $('#wingPicks').innerHTML=picks;
  var soc=['facebook','instagram','linkedin','youtube'].map(function(k){
    var u=CFG.social[k],name=k.charAt(0).toUpperCase()+k.slice(1);
    return u?'<a href="'+esc(u)+'" target="_blank" rel="noopener" aria-label="'+name+'">'+ic(k,20)+'</a>':'<button type="button" data-soon="Our '+name+' link is coming soon" aria-label="'+name+'">'+ic(k,20)+'</button>';
  }).join('');
  $('#socialContact').innerHTML=soc;$('#socialFoot').innerHTML=soc;
  var em=$('#cEmail');em.textContent=CFG.email;em.href='mailto:'+CFG.email;
  var fe=$('#fEmail');if(fe){fe.textContent=CFG.email;fe.href='mailto:'+CFG.email;}
  $('#cPhone').textContent=CFG.phone;$('#cAddress').textContent=CFG.address;$('#cHours').textContent=CFG.hours;
  $$('.addr').forEach(function(a){a.textContent=CFG.email});
  $('#year').textContent=new Date().getFullYear();
  $$('[data-ic]').forEach(function(el){el.innerHTML=ic(el.getAttribute('data-ic'),+el.getAttribute('data-s')||20)});
  $$('[data-logo]').forEach(function(im){im.src=im.getAttribute('data-logo')==='full'?LOGO_FULL:LOGO_MARK});
}

/* =====================================================================
   Countdown to next event
   ===================================================================== */
function tick(){
  var n=upcoming()[0],card=$('#nextCard');
  if(!n){$('#nextTitle').textContent='New events will be announced soon';$('#cd').style.display='none';return}
  $('#nextTitle').textContent=n.title;
  var s=Math.max(0,Math.floor((n.d.getTime()-Date.now())/1000));
  $('#cdD').textContent=pad(Math.floor(s/86400));$('#cdH').textContent=pad(Math.floor(s%86400/3600));
  $('#cdM').textContent=pad(Math.floor(s%3600/60));$('#cdS').textContent=pad(s%60);
}

/* =====================================================================
   Routing (works with the back button and without a server)
   ===================================================================== */
var PAGES={home:'Home',about:'About',events:'Events',projects:'Projects',publications:'Publications',contact:'Contact',join:'Join Us'};
var current=null;
function fromHash(){var h=(location.hash||'').replace(/^#\/?/,'');return PAGES[h]?h:'home'}
function closeMenu(){var m=$('#menu'),b=$('#burger');m.classList.remove('open');b.setAttribute('aria-expanded','false');b.setAttribute('aria-label','Open menu');b.innerHTML=ic('menu',22)}
function show(name){
  if(!PAGES[name])name='home';
  closeMenu();
  if(name===current){window.scrollTo(0,0);return}
  current=name;
  $$('.page').forEach(function(p){p.classList.toggle('active',p.id==='page-'+name)});
  $$('[data-link]').forEach(function(a){
    var on=a.getAttribute('data-link')===name;
    a.classList.toggle('active',on&&!a.classList.contains('btn'));
    if(a.closest('.links')||a.closest('.menu')){on?a.setAttribute('aria-current','page'):a.removeAttribute('aria-current')}
  });
  document.title=(name==='home'?'':PAGES[name]+' | ')+SITE;
  window.scrollTo(0,0);
}
function go(name){show(name);try{if(location.hash!=='#/'+name)location.hash='#/'+name}catch(e){}}
window.addEventListener('hashchange',function(){show(fromHash())});

/* =====================================================================
   Events (delegated)
   ===================================================================== */
document.addEventListener('click',function(ev){
  var t=ev.target;
  var link=t.closest('[data-link]');
  if(link){
    ev.preventDefault();
    var topic=link.getAttribute('data-topic');
    if(topic){$('#cTopic').value=topic}
    go(link.getAttribute('data-link'));return;
  }
  var chip=t.closest('.chip[data-key]');
  if(chip){state[chip.getAttribute('data-key')]=chip.getAttribute('data-val');renderChips();renderEvents();renderProjects();renderPubs();return}
  var wing=t.closest('[data-wing]');
  if(wing){state.prWing=wing.getAttribute('data-wing');renderChips();renderProjects();go('projects');return}
  var reg=t.closest('[data-register]');
  if(reg){
    var e=EVENTS.filter(function(x){return x.id===reg.getAttribute('data-register')})[0];
    if(e){$('#cTopic').value='Event registration';$('#cMsg').value='I would like to register my interest in "'+e.title+'" on '+e.d.getDate()+' '+MON[e.d.getMonth()]+' '+e.d.getFullYear()+'.';go('contact');setTimeout(function(){$('#cName').focus()},50)}
    return;
  }
  var cite=t.closest('[data-cite]');
  if(cite){
    var p=PUBS[+cite.getAttribute('data-cite')];
    copyText(p.authors+'. '+p.title+'. '+p.venue+', '+p.year+'.').then(function(ok){toast(ok?'Citation copied':'Copy was blocked. Select the details and copy them by hand.')});return;
  }
  var soon=t.closest('[data-soon]');
  if(soon){toast(soon.getAttribute('data-soon'));return}
  var rs=t.closest('[data-reset]');
  if(rs){
    if(rs.getAttribute('data-reset')==='events'){state.evTab='upcoming';state.evWing='all'}
    if(rs.getAttribute('data-reset')==='pubs'){state.pubType='all';state.pubQ='';$('#pubSearch').value=''}
    renderChips();renderEvents();renderPubs();return;
  }
});
$('#burger').addEventListener('click',function(){
  var m=$('#menu'),b=$('#burger'),open=!m.classList.contains('open');
  m.classList.toggle('open',open);b.setAttribute('aria-expanded',String(open));b.setAttribute('aria-label',open?'Close menu':'Open menu');b.innerHTML=ic(open?'close':'menu',22);
});
document.addEventListener('keydown',function(e){if(e.key==='Escape')closeMenu()});
$('#pubSearch').addEventListener('input',function(e){state.pubQ=e.target.value;renderPubs()});

/* Pointer glow inside glass blocks */
document.addEventListener('pointermove',function(e){
  var g=e.target.closest&&e.target.closest('.glass');
  if(g){var r=g.getBoundingClientRect();g.style.setProperty('--mx',(e.clientX-r.left)+'px');g.style.setProperty('--my',(e.clientY-r.top)+'px')}
},{passive:true});

/* =====================================================================
   Forms (sent through Web3Forms, so visitors stay on the site)
   Get the access key from https://web3forms.com and paste it below.
   ===================================================================== */
var WEB3FORMS_KEY='ab29b4fb-ea7b-4e7a-b621-2dfb35037e02';
function submitForm(form,panelId,subject){
  var panel=$(panelId),btn=form.querySelector('button[type="submit"]');
  if(btn&&btn.disabled)return;
  var label=btn?btn.textContent:'';
  var d=new FormData(form);
  d.append('access_key',WEB3FORMS_KEY);
  d.append('subject',subject);
  d.append('from_name',SITE);
  if(d.get('email'))d.append('replyto',d.get('email'));
  panel.hidden=true;
  if(btn){btn.disabled=true;btn.textContent='Sending…'}
  fetch('https://api.web3forms.com/submit',{method:'POST',body:d})
    .then(function(r){return r.json()})
    .then(function(res){
      if(res&&res.success){
        form.reset();
        panel.hidden=false;
        panel.scrollIntoView({behavior:'smooth',block:'nearest'});
        toast('Thank you. Your message has been sent.');
      }else{
        throw new Error((res&&res.message)||'Submission failed');
      }
    })
    .catch(function(){
      toast('Sorry, that did not send. Please email us at '+CFG.email+'.');
    })
    .then(function(){if(btn){btn.disabled=false;btn.textContent=label}});
}
$('#contactForm').addEventListener('submit',function(e){
  e.preventDefault();var f=e.target;if(!f.reportValidity())return;
  var d=new FormData(f);
  submitForm(f,'#sentContact','['+d.get('topic')+'] from '+d.get('name'));
});
$('#joinForm').addEventListener('submit',function(e){
  e.preventDefault();var f=e.target;if(!f.reportValidity())return;
  var d=new FormData(f);
  submitForm(f,'#sentJoin','Membership application: '+d.get('name'));
});

/* =====================================================================
   Living background: molecules, DNA, atoms, rings, bubbles, light beams
   ===================================================================== */
(function(){
  var cv=document.getElementById('bg');if(!cv)return;
  var ctx=cv.getContext('2d');if(!ctx)return;
  var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var PAL=['#7fe0cf','#8ea6ff','#b7a4ff','#6fd6a4','#6aa8ff'];
  var W=0,H=0,dpr=1,K=1,seedArea=0;
  var mouse={x:0,y:0,tx:0,ty:0,on:false};
  function R(a,b){return a+Math.random()*(b-a)}
  function P(a){return a[(Math.random()*a.length)|0]}
  function rgb(h){var n=parseInt(h.slice(1),16);return ((n>>16)&255)+','+((n>>8)&255)+','+(n&255)}
  var spr={};
  function sprite(c){
    if(spr[c])return spr[c];
    var s=64,cn=document.createElement('canvas');cn.width=cn.height=s;
    var g=cn.getContext('2d'),r=rgb(c),gr=g.createRadialGradient(s/2,s/2,0,s/2,s/2,s/2);
    gr.addColorStop(0,'rgba(255,255,255,.95)');gr.addColorStop(.16,'rgba('+r+',.95)');gr.addColorStop(.42,'rgba('+r+',.26)');gr.addColorStop(1,'rgba('+r+',0)');
    g.fillStyle=gr;g.fillRect(0,0,s,s);spr[c]=cn;return cn;
  }
  function glow(x,y,s,c,a){ctx.globalAlpha=a;ctx.drawImage(sprite(c),x-s/2,y-s/2,s,s)}
  var mols=[],helix=[],atoms=[],rings=[],bubbles=[],motes=[],glyphs=[],beams=[];
  var GL=['E = mc²','H₂O','ΔG','C₆H₁₂O₆','ATCG','∇·E = ρ/ε₀','λ','π','NaCl','ψ','CO₂','F = ma','pH 7','Σ','CRISPR','ħ'];

  function seed(){
    K=Math.max(.55,Math.min(1.5,W*H/1300000));seedArea=W*H;
    mols=[];helix=[];atoms=[];rings=[];bubbles=[];motes=[];glyphs=[];beams=[];
    var i,n;
    for(i=0,n=Math.round(9*K);i<n;i++){
      var na=(R(4,8))|0,at=[{x:0,y:0,r:R(5,8)}],bo=[];
      for(var j=1;j<na;j++){var p=(Math.random()*at.length)|0,a=R(0,6.283),d=R(38,62);at.push({x:at[p].x+Math.cos(a)*d,y:at[p].y+Math.sin(a)*d,r:R(3.5,7)});bo.push([p,j])}
      mols.push({x:R(0,W),y:R(0,H),vx:R(-8,8),vy:R(-6,6),rot:R(0,6.28),vr:R(-.09,.09),depth:R(.35,1),color:P(PAL),atoms:at,bonds:bo});
    }
    for(i=0,n=Math.max(2,Math.round(3*K));i<n;i++)
      helix.push({x:R(.05,.95)*W,y:R(0,H),len:R(380,600),amp:R(24,34),ph:R(0,6.28),sp:R(.4,.7),tilt:R(-.7,.7),vx:R(-5,5),vy:R(-6,6),depth:R(.6,1),c1:'#a9a0ff',c2:'#5fe0c4'});
    for(i=0,n=Math.max(2,Math.round(4*K));i<n;i++)
      atoms.push({x:R(0,W),y:R(0,H),r:R(48,84),rot:R(0,6.28),vr:R(-.12,.12),vx:R(-6,6),vy:R(-5,5),depth:R(.5,1),color:P(PAL),ph:R(0,6.28)});
    for(i=0,n=Math.round(6*K);i<n;i++)
      rings.push({x:R(0,W),y:R(0,H),r:R(22,38),n:1+((Math.random()*3)|0),rot:R(0,6.28),vr:R(-.1,.1),vx:R(-7,7),vy:R(-6,6),depth:R(.4,1),color:P(PAL)});
    for(i=0,n=Math.round(26*K);i<n;i++)
      bubbles.push({x:R(0,W),y:R(0,H),r:R(3,14),vy:R(12,34),ph:R(0,6.28)});
    for(i=0,n=Math.round(80*K);i<n;i++)
      motes.push({x:R(0,W),y:R(0,H),r:R(1.4,3.4),ph:R(0,6.28),vx:R(-4,4),vy:R(-6,2),color:P(PAL)});
    for(i=0,n=Math.round(10*K);i<n;i++)
      glyphs.push({x:R(0,W),y:R(0,H),t:P(GL),s:R(16,34),rot:R(-.4,.4),vx:R(-5,5),vy:R(-4,4),ph:R(0,6.28),rgb:rgb(P(PAL)),depth:R(.4,1)});
    var bc=['#6f8cff','#3fd6b3','#8ea6ff'];
    for(i=0;i<3;i++)beams.push({x:.2+i*.3,w:R(180,300),ang:R(-.55,-.25),ph:R(0,6.28),rgb:rgb(bc[i])});
  }
  function size(){
    W=window.innerWidth;H=window.innerHeight;dpr=Math.min(window.devicePixelRatio||1,1.5);
    cv.width=Math.round(W*dpr);cv.height=Math.round(H*dpr);cv.style.width=W+'px';cv.style.height=H+'px';
  }
  function wrap(o,m){m=m||260;if(o.x<-m)o.x=W+m;else if(o.x>W+m)o.x=-m;if(o.y<-m)o.y=H+m;else if(o.y>H+m)o.y=-m}

  function update(dt,t){
    if(!mouse.on){mouse.tx=W*(.5+.28*Math.sin(t*.09));mouse.ty=H*(.45+.22*Math.cos(t*.12))}
    var k=Math.min(1,dt*2.2);mouse.x+=(mouse.tx-mouse.x)*k;mouse.y+=(mouse.ty-mouse.y)*k;
    var i,o;
    for(i=0;i<mols.length;i++){o=mols[i];o.x+=o.vx*dt;o.y+=o.vy*dt;o.rot+=o.vr*dt;wrap(o)}
    for(i=0;i<helix.length;i++){o=helix[i];o.x+=o.vx*dt;o.y+=o.vy*dt;o.ph+=o.sp*dt;wrap(o,420)}
    for(i=0;i<atoms.length;i++){o=atoms[i];o.x+=o.vx*dt;o.y+=o.vy*dt;o.rot+=o.vr*dt;wrap(o)}
    for(i=0;i<rings.length;i++){o=rings[i];o.x+=o.vx*dt;o.y+=o.vy*dt;o.rot+=o.vr*dt;wrap(o)}
    for(i=0;i<glyphs.length;i++){o=glyphs[i];o.x+=o.vx*dt;o.y+=o.vy*dt;wrap(o,200)}
    for(i=0;i<motes.length;i++){o=motes[i];o.x+=o.vx*dt;o.y+=o.vy*dt;wrap(o,20)}
    for(i=0;i<bubbles.length;i++){o=bubbles[i];o.y-=o.vy*dt;o.x+=Math.sin(t*.8+o.ph)*7*dt;if(o.y<-30){o.y=H+30;o.x=R(0,W)}}
  }

  function draw(t){
    ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.globalCompositeOperation='source-over';ctx.globalAlpha=1;ctx.clearRect(0,0,W,H);
    ctx.globalCompositeOperation='lighter';
    var ox=(mouse.x-W/2),oy=(mouse.y-H/2),i,j,o;

    /* light beams */
    for(i=0;i<beams.length;i++){
      o=beams[i];var a=.035+.025*Math.sin(t*.35+o.ph),cx=o.x*W+Math.sin(t*.07+o.ph)*140;
      ctx.save();ctx.globalAlpha=1;ctx.translate(cx,-80);ctx.rotate(o.ang+Math.sin(t*.05+o.ph)*.06);
      var g=ctx.createLinearGradient(-o.w/2,0,o.w/2,0);
      g.addColorStop(0,'rgba('+o.rgb+',0)');g.addColorStop(.5,'rgba('+o.rgb+','+a+')');g.addColorStop(1,'rgba('+o.rgb+',0)');
      ctx.fillStyle=g;ctx.fillRect(-o.w/2,0,o.w,H*1.8);ctx.restore();
    }
    /* formulas */
    for(i=0;i<glyphs.length;i++){
      o=glyphs[i];ctx.save();ctx.globalAlpha=1;
      ctx.translate(o.x+ox*.03*o.depth,o.y+oy*.03*o.depth);ctx.rotate(o.rot);
      ctx.font='600 '+o.s+'px Oxanium, "Segoe UI", sans-serif';
      ctx.fillStyle='rgba('+o.rgb+','+(.09+.05*Math.sin(t*.4+o.ph))*o.depth+')';
      ctx.fillText(o.t,0,0);ctx.restore();
    }
    /* molecules */
    for(i=0;i<mols.length;i++){
      o=mols[i];var cr=Math.cos(o.rot),sr=Math.sin(o.rot),s=.6+o.depth*.75,px=o.x+ox*.045*o.depth,py=o.y+oy*.045*o.depth,am=.35+.65*o.depth;
      var pts=[];
      for(j=0;j<o.atoms.length;j++){var at=o.atoms[j];pts.push({x:px+(at.x*cr-at.y*sr)*s,y:py+(at.x*sr+at.y*cr)*s,r:at.r*s})}
      ctx.globalAlpha=1;ctx.lineWidth=1.5*s;ctx.strokeStyle='rgba('+rgb(o.color)+','+(.4*am)+')';
      ctx.beginPath();
      for(j=0;j<o.bonds.length;j++){var b=o.bonds[j];ctx.moveTo(pts[b[0]].x,pts[b[0]].y);ctx.lineTo(pts[b[1]].x,pts[b[1]].y)}
      ctx.stroke();
      for(j=0;j<pts.length;j++)glow(pts[j].x,pts[j].y,pts[j].r*6.5,o.color,.75*am);
    }
    /* DNA helices */
    for(i=0;i<helix.length;i++){
      o=helix[i];var n=Math.round(o.len/13),ct=Math.cos(o.tilt),st=Math.sin(o.tilt),sc=.7+o.depth*.4,hx=o.x+ox*.05*o.depth,hy=o.y+oy*.05*o.depth;
      var prev1=null,prev2=null;
      for(j=0;j<=n;j++){
        var tt=j/n,yy=(tt-.5)*o.len*sc,ang=o.ph+j*.56,fade=Math.pow(Math.sin(Math.PI*tt),.7);
        var xa=Math.cos(ang)*o.amp*sc,za=Math.sin(ang);
        var A={x:hx+xa*ct-yy*st,y:hy+xa*st+yy*ct,z:za},B={x:hx-xa*ct-yy*st,y:hy-xa*st+yy*ct,z:-za};
        ctx.globalAlpha=1;ctx.lineWidth=1.3;
        if(prev1){
          ctx.strokeStyle='rgba(169,160,255,'+(.3*fade)+')';ctx.beginPath();ctx.moveTo(prev1.x,prev1.y);ctx.lineTo(A.x,A.y);ctx.stroke();
          ctx.strokeStyle='rgba(95,224,196,'+(.3*fade)+')';ctx.beginPath();ctx.moveTo(prev2.x,prev2.y);ctx.lineTo(B.x,B.y);ctx.stroke();
        }
        if(j%2===0){ctx.strokeStyle='rgba(255,255,255,'+(.13*fade)+')';ctx.beginPath();ctx.moveTo(A.x,A.y);ctx.lineTo(B.x,B.y);ctx.stroke()}
        glow(A.x,A.y,(9+5*A.z)*sc,o.c1,(.55+.35*A.z)*fade);
        glow(B.x,B.y,(9+5*B.z)*sc,o.c2,(.55+.35*B.z)*fade);
        prev1=A;prev2=B;
      }
    }
    /* atoms */
    for(i=0;i<atoms.length;i++){
      o=atoms[i];var ax=o.x+ox*.04*o.depth,ay=o.y+oy*.04*o.depth,rr=o.r*(.7+o.depth*.5);
      glow(ax,ay,rr*.7,o.color,.9);
      for(j=0;j<3;j++){
        var rot=o.rot+j*Math.PI/3;
        ctx.globalAlpha=1;ctx.lineWidth=1.1;ctx.strokeStyle='rgba('+rgb(o.color)+',.3)';
        ctx.beginPath();ctx.ellipse(ax,ay,rr,rr*.36,rot,0,6.2832);ctx.stroke();
        var th=t*(.9+j*.35)+o.ph+j*2,ex=rr*Math.cos(th),ey=rr*.36*Math.sin(th);
        glow(ax+ex*Math.cos(rot)-ey*Math.sin(rot),ay+ex*Math.sin(rot)+ey*Math.cos(rot),14,'#ffffff',.85);
      }
    }
    /* benzene-style rings */
    for(i=0;i<rings.length;i++){
      o=rings[i];var rc=Math.cos(o.rot),rs=Math.sin(o.rot),sr2=o.r*(.7+o.depth*.6),rx=o.x+ox*.05*o.depth,ry=o.y+oy*.05*o.depth;
      ctx.globalAlpha=1;ctx.lineWidth=1.4;ctx.strokeStyle='rgba('+rgb(o.color)+','+(.22+.3*o.depth)+')';
      for(var h=0;h<o.n;h++){
        var off=h*Math.sqrt(3)*sr2,cx0=rx+off*rc,cy0=ry+off*rs;
        ctx.beginPath();
        for(var v=0;v<6;v++){var av=o.rot+Math.PI/6+v*Math.PI/3,vx=cx0+Math.cos(av)*sr2,vy=cy0+Math.sin(av)*sr2;v?ctx.lineTo(vx,vy):ctx.moveTo(vx,vy)}
        ctx.closePath();ctx.stroke();
        ctx.beginPath();
        for(var w=0;w<3;w++){var a1=o.rot+Math.PI/6+w*2*Math.PI/3+.35,a2=a1+Math.PI/3-.7,ri=sr2*.72;ctx.moveTo(cx0+Math.cos(a1)*ri,cy0+Math.sin(a1)*ri);ctx.lineTo(cx0+Math.cos(a2)*ri,cy0+Math.sin(a2)*ri)}
        ctx.stroke();
        for(var q=0;q<6;q++){var aq=o.rot+Math.PI/6+q*Math.PI/3;glow(cx0+Math.cos(aq)*sr2,cy0+Math.sin(aq)*sr2,9,o.color,.6)}
      }
    }
    /* bubbles */
    ctx.globalAlpha=1;ctx.lineWidth=1;
    for(i=0;i<bubbles.length;i++){
      o=bubbles[i];ctx.strokeStyle='rgba(200,230,255,.16)';ctx.beginPath();ctx.arc(o.x,o.y,o.r,0,6.2832);ctx.stroke();
      ctx.fillStyle='rgba(255,255,255,.12)';ctx.beginPath();ctx.arc(o.x-o.r*.35,o.y-o.r*.35,Math.max(1,o.r*.16),0,6.2832);ctx.fill();
    }
    /* dust and sparks */
    for(i=0;i<motes.length;i++){
      o=motes[i];glow(o.x,o.y,o.r*8,o.color,.15+.55*(.5+.5*Math.sin(t*1.4+o.ph)));
    }
    /* cursor light */
    ctx.globalAlpha=1;
    var cg=ctx.createRadialGradient(mouse.x,mouse.y,0,mouse.x,mouse.y,300);
    cg.addColorStop(0,'rgba(140,170,255,.12)');cg.addColorStop(.5,'rgba(90,200,220,.04)');cg.addColorStop(1,'rgba(90,200,220,0)');
    ctx.fillStyle=cg;ctx.fillRect(mouse.x-300,mouse.y-300,600,600);
    ctx.globalCompositeOperation='source-over';ctx.globalAlpha=1;
  }

  size();mouse.x=mouse.tx=W*.6;mouse.y=mouse.ty=H*.4;seed();
  window.addEventListener('pointermove',function(e){mouse.tx=e.clientX;mouse.ty=e.clientY;mouse.on=true},{passive:true});
  document.documentElement.addEventListener('mouseleave',function(){mouse.on=false});
  window.addEventListener('resize',function(){
    size();
    if(Math.abs(W*H-seedArea)/seedArea>.35)seed();
    if(reduce)draw(4);
  });
  if(reduce){draw(4);return}
  var last=performance.now(),T=0;
  function frame(now){
    var dt=Math.min(.05,(now-last)/1000);last=now;T+=dt;
    update(dt,T);draw(T);requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();

/* =====================================================================
   Start
   ===================================================================== */
renderStatic();renderChips();renderEvents();renderProjects();renderPubs();
tick();setInterval(tick,1000);
show(fromHash());
})();

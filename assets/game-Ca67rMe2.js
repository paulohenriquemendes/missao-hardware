import{r as oc,w as Nu,m as et,e as Fu,a as mn,i as Ou,d as qs,j as Bu,c as ii,f as bl,k as zu,n as ku,g as Hu,S as Vu,h as Gu,O as El,l as cc,o as ji,q as Tl,t as Xr,u as Ei,v as ri,M as Ro,x as Al,y as wl,z as Cl,A as Wu,B as Hn,C as er,p as yn,D as Xu,E as Po,b as qu,F as $u,G as Yu}from"./challenges-Mhv4Y8zr.js";function ju({wardrobe:i,onOpen:e}){const t=document.createElement("dialog");t.id="visualDialog",t.setAttribute("aria-labelledby","visualTitle"),t.innerHTML='<button id="closeVisual" class="close" aria-label="Fechar meu visual">×</button><h1 id="visualTitle">Meu visual</h1><div class="visual-tabs" role="tablist" aria-label="Personalizar personagem"><button id="appearanceTab" role="tab" aria-controls="visualAppearance">Aparência</button><button id="celebrationButton" role="tab" aria-controls="visualCelebrations">Comemorações</button></div><section id="visualAppearance" role="tabpanel" aria-labelledby="appearanceTab"></section><section id="visualCelebrations" role="tabpanel" aria-labelledby="celebrationButton" hidden></section>',document.body.append(t);const n=document.querySelector(".appearance-details");n.open=!0,n.querySelector("summary").hidden=!0,n.querySelector("#hairStyle").closest("label").hidden=!0,t.querySelector("#visualAppearance").append(n);const r=[...t.querySelectorAll("[role=tab]")];let s;function a(o){r.forEach((l,c)=>{l.setAttribute("aria-selected",String(c===o)),l.tabIndex=c===o?0:-1,document.getElementById(l.getAttribute("aria-controls")).hidden=c!==o}),o===1&&s?.render()}return r.forEach((o,l)=>{o.onclick=()=>a(l),o.onkeydown=c=>{let u;if(c.key==="ArrowRight")u=(l+1)%2;else if(c.key==="ArrowLeft")u=(l+1)%2;else if(c.key==="Home")u=0;else if(c.key==="End")u=1;else return;c.preventDefault(),a(u),r[u].focus()}}),t.querySelector("#closeVisual").onclick=()=>t.close(),{celebrationHost:t.querySelector("#visualCelebrations"),attach(o){s=o},open(){e(),t.showModal(),i.open(),a(0)},close(){t.close()}}}function Ju(){const i=n=>document.querySelector(n),e=document.createElement("dialog");e.id="settingsDialog",e.setAttribute("aria-labelledby","settingsTitle"),e.innerHTML='<button class="close" aria-label="Fechar ajustes">×</button><h1 id="settingsTitle">Ajustes</h1><p>Escolha os gráficos, confira o carregamento ou reveja como jogar.</p><div class="settings-actions"></div>',document.body.append(e),e.querySelector(".close").onclick=()=>e.close();for(const n of["graphicsQuality","offlineHelp","tutorialButton"]){const r=i("#"+n);e.querySelector(".settings-actions").append(r),n!=="graphicsQuality"&&r.addEventListener("click",()=>e.close(),!0)}const t=document.createElement("button");t.id="settingsButton",t.textContent="Ajustes",i(".stats").append(t),t.onclick=()=>e.showModal(),i("#classroom").append(i("#reputationButton")),i("#reputationButton").addEventListener("click",()=>i("#classroom").close(),!0)}const fe=(i,e,t,n,r,s="")=>`<rect x="${i}" y="${e}" width="${t}" height="${n}" rx="4" fill="${r}" ${s}/>`,rr=(i,e,t,n=11)=>Array.from({length:t},(r,s)=>fe(i+s*n,e,5,12,"#e8bd58")).join(""),Ku=fe(24,65,312,74,"#21774e")+Array.from({length:8},(i,e)=>fe(36+e*37,77,26,40,"#192d35")).join("")+rr(30,139,28,11)+fe(172,135,10,20,"#eff5f2")+'<path d="M28 70H331M28 133H331" stroke="#78cda2" stroke-width="2"/>',Zu=fe(112,35,136,136,"#47545a")+rr(104,25,14,11)+rr(104,171,14,11)+fe(124,47,112,112,"#c8d4d5")+fe(141,64,78,78,"#91a6aa")+'<path d="m127 52 17 0-17 17Z" fill="#e8bd58"/>',Qu=fe(44,24,272,155,"#287758")+Array.from({length:12},(i,e)=>fe(104+e*13,43,6,12,"#c5ced1")+fe(104+e*13,148,6,12,"#c5ced1")).join("")+fe(101,58,162,88,"#202d35")+fe(119,74,126,56,"#3a4b53")+'<path d="M65 45v115h27m190-115v115h-9" fill="none" stroke="#b3a75b" stroke-width="3"/>',ed=fe(73,25,214,151,"#3b4d59")+fe(88,42,185,100,"#ccd9d8")+fe(108,63,145,12,"#718984")+fe(108,86,97,8,"#8fa5a0")+fe(91,176,55,10,"#171f26")+fe(152,176,101,10,"#171f26")+rr(95,175,5,9)+rr(157,175,9,10),td=fe(82,21,197,159,"#364a55")+'<circle cx="180" cy="100" r="61" fill="#162b34" stroke="#879c9d" stroke-width="4"/>'+Array.from({length:8},(i,e)=>`<path d="M180 100q-45-45 0-55q30 5 0 55Z" fill="#72878d" transform="rotate(${e*45} 180 100)"/>`).join("")+'<circle cx="180" cy="100" r="18" fill="#334b55"/><path d="M275 145q38 0 38 36m-38-25q25 0 25 25" fill="none" stroke="#d69f42" stroke-width="7"/>',Ua=fe(22,14,316,174,"#24734f")+fe(54,38,84,84,"#b5c4bf")+fe(65,49,62,62,"#72878d")+fe(160,29,15,117,"#1c343c")+fe(185,29,15,117,"#d4c89e")+fe(235,55,60,52,"#2a3943")+fe(52,151,151,13,"#e8ddba")+fe(52,171,151,9,"#223c41")+fe(256,144,29,17,"#e7a04a")+fe(294,144,29,17,"#e7a04a")+fe(218,17,40,18,"#1c343c")+fe(313,46,14,88,"#d1d9cf")+fe(137,32,22,15,"#d1d9cf")+fe(217,175,31,12,"#1c343c")+'<path d="M49 18v109h98m66 47v-56h104" fill="none" stroke="#86b16e" stroke-width="2"/>',nd=fe(80,32,200,120,"#394c53")+Array.from({length:8},(i,e)=>fe(100+e%4*41,51+Math.floor(e/4)*47,29,29,"#142830")).join("")+'<path d="M95 163h170" stroke="#d9af47" stroke-width="12"/>',id=fe(30,52,300,88,"#40545d")+Array.from({length:24},(i,e)=>fe(44+e%12*23,66+Math.floor(e/12)*30,15,18,"#142830")).join("")+'<path d="M128 47h104v-9H128Z" fill="#879c9d"/><path d="M65 153h230" stroke="#d9af47" stroke-width="12"/>',rd='<g transform="translate(-5 8) scale(.65)">'+Ua+"</g>"+fe(260,35,85,108,"#354b56")+'<text x="302" y="88" fill="#e7f3ed" text-anchor="middle" font-size="20">SSD</text><path d="M310 140v40h-88" stroke="#24363d" stroke-width="10" fill="none"/><path d="M282 141v22h-49v-48h-24" fill="none" stroke="#ed8b23" stroke-width="6"/>'+fe(201,108,18,13,"#20343d")+'<circle cx="57" cy="61" r="22" fill="#314d54" stroke="#b7c8c7" stroke-width="3"/><circle cx="57" cy="61" r="7" fill="#8da6a7"/>',sd='<circle cx="180" cy="95" r="64" fill="#354e56"/>'+Array.from({length:5},(i,e)=>`<path d="M180 95q-60-42-20-57q38-10 20 57" fill="#97b0b0" transform="rotate(${e*72} 180 95)"/>`).join("")+'<path d="M238 125q51 9 55 52h31" stroke="#e5be4e" stroke-width="5" fill="none"/>'+fe(314,165,25,18,"#eef3e8"),ad={keyboard:fe(32,56,296,100,"#344c55")+Array.from({length:30},(i,e)=>fe(43+e%10*28,69+Math.floor(e/10)*24,20,17,"#d1ded8")).join("")+fe(105,145,150,9,"#a2beb4"),mouse:'<path d="M133 135V83a47 47 0 0 1 94 0v52a47 47 0 0 1-94 0" fill="#344c55"/><path d="M180 37V11m-46 83h92m-46-57v57" stroke="#a5bdb3" stroke-width="4"/><rect x="173" y="53" width="14" height="24" rx="6" fill="#e3b95e"/>',audio:fe(70,26,80,153,"#344c55")+fe(210,26,80,153,"#344c55")+'<circle cx="110" cy="125" r="25" fill="#8aaba0"/><circle cx="250" cy="125" r="25" fill="#8aaba0"/><circle cx="110" cy="57" r="13" fill="#172e35"/><circle cx="250" cy="57" r="13" fill="#172e35"/>',microphone:fe(154,25,52,95,"#344c55")+'<path d="M139 78v24a41 41 0 0 0 82 0V78m-41 65v36m-35 0h70" fill="none" stroke="#8aaba0" stroke-width="9"/>',camera:fe(85,56,190,88,"#344c55")+'<circle cx="180" cy="99" r="32" fill="#0e2934" stroke="#8fb5ac" stroke-width="7"/><circle cx="247" cy="74" r="5" fill="#7dd995"/>'+fe(157,145,46,29,"#799b92"),printer:fe(85,72,190,100,"#344c55")+fe(111,21,138,83,"#e4ede5")+fe(103,118,155,32,"#122c32")+fe(115,135,132,55,"#d3dfd3")+'<path d="M133 159h93m-93 13h73" stroke="#829d93" stroke-width="3"/>',case:fe(106,16,149,177,"#344c55")+fe(121,32,116,23,"#1a3038")+fe(121,62,116,18,"#1a3038")+'<circle cx="224" cy="99" r="8" fill="#72cda3"/><path d="M127 132h104m-104 12h104m-104 12h104m-104 12h104" stroke="#8aaba0" stroke-width="4"/>',gpu:fe(38,52,287,108,"#2c704e")+'<circle cx="118" cy="106" r="39" fill="#263f46" stroke="#a2b8af" stroke-width="5"/><circle cx="232" cy="106" r="39" fill="#263f46" stroke="#a2b8af" stroke-width="5"/>'+rr(72,160,20,11)+fe(20,38,16,141,"#a9bbb5"),heatsink:fe(84,145,192,25,"#708e92")+Array.from({length:13},(i,e)=>fe(88+e*14,40,7,105,"#b1c8c8")).join(""),network:fe(123,43,114,121,"#a2bbb5")+fe(139,56,82,42,"#283f48")+Array.from({length:8},(i,e)=>fe(142+e*10,62,5,30,"#d6ab4d")).join("")+'<path d="M180 164v32" stroke="#d89d45" stroke-width="18"/>'};function vi(i){return`<svg class="hardware-art" viewBox="0 0 360 205" role="img" aria-label="Ilustração técnica do componente desta etapa"><rect width="360" height="205" rx="12" fill="#eff5f2"/>${{...ad,ram:Ku,cpu:Zu,chipset:Qu,ssd:ed,psu:td,board:Ua,inside:rd,eps:nd,fan:sd,sata:'<path d="M85 150q100-130 171-60" stroke="#df7b2f" stroke-width="16" fill="none"/>'+fe(55,133,65,30,"#253e48")+fe(251,67,54,30,"#253e48")+'<path d="M68 142h34v12m160-77h31v11" fill="none" stroke="#e9c36e" stroke-width="4"/>',atx:id,monitor:fe(58,21,244,143,"#30464f")+fe(70,33,220,119,"#112b36")+fe(168,164,24,20,"#46616b")+fe(123,184,114,8,"#46616b")+'<text x="180" y="89" fill="#e0ede8" text-anchor="middle" font-size="20">DisplayPort</text>',tester:fe(63,24,234,151,"#344f59")+fe(83,44,194,104,"#b7dbc1")+'<text x="100" y="76" fill="#163d2b" font-size="20">12,1 V · 5,0 V</text><text x="100" y="109" fill="#163d2b" font-size="20">3,3 V · PG OK</text><circle cx="322" cy="95" r="25" fill="#334b55"/><g class="tester-fan" fill="#8fa8a2"><path d="M322 95q-25-28 0-18q18 8 0 18Z"/><path d="M322 95q28-25 18 0q-8 18-18 0Z"/><path d="M322 95q25 28 0 18q-18-8 0-18Z"/><path d="M322 95q-28 25-18 0q8-18 18 0Z"/></g>'}[i]||Ua}</svg>`}let li=null,Rr=null;function Mi(){Rr?.abort(),Rr=null}async function od(i,e=()=>{}){Mi();const t=new AbortController;Rr=t;const n=globalThis.AudioContext||globalThis.webkitAudioContext;if(!n)throw new Error("Áudio indisponível neste navegador. Use a transcrição do padrão.");if(li??=new n,await li.resume(),t.signal.aborted)return;const r=[];let a=li.currentTime+.06;for(const l of i){const c=li.createOscillator(),u=li.createGain();c.type="sine",c.frequency.value=660,u.gain.setValueAtTime(0,a),u.gain.linearRampToValueAtTime(.055,a+.015),u.gain.setValueAtTime(.055,a+l-.025),u.gain.linearRampToValueAtTime(0,a+l),c.connect(u),u.connect(li.destination),c.start(a),c.stop(a+l+.02),c.onended=()=>{c.disconnect(),u.disconnect()},r.push(c),a+=l+.18}e(!0);const o=setTimeout(()=>{Rr===t&&(Rr=null,e(!1))},(a-li.currentTime)*1e3);t.signal.addEventListener("abort",()=>{clearTimeout(o);for(const l of r)try{l.stop()}catch{}e(!1)},{once:!0})}typeof document<"u"&&document.addEventListener("visibilitychange",()=>{document.hidden&&Mi()});function cd({getSession:i,onOpen:e,onComplete:t,notify:n}){const r=document.createElement("dialog");r.id="workshopDialog",r.className="hardware-workshop",r.setAttribute("aria-labelledby","workshopTitle"),r.innerHTML='<button class="close" id="closeWorkshop" aria-label="Fechar bancada prática">×</button><span class="eyebrow">BANCADA PRÁTICA</span><h1 id="workshopTitle">Aprenda com as mãos</h1><div id="workshopBody"></div><p id="workshopFeedback" role="status" aria-live="polite"></p>',document.body.append(r);const s=r.querySelector("#workshopBody"),a=r.querySelector("#workshopFeedback"),o=document.createElement("button");o.id="workshopButton",o.textContent="Bancada prática",document.querySelector(".stats").append(o);let l=-1,c=!1,u="",d="",f=!1,h=()=>{};const g=A=>i()?.workshops?.find(x=>x.lesson===A)||{step:0,errors:0},v=(A,x,_="")=>{const b=document.createElement(A);return b.textContent=x,_&&(b.className=_),b};function m(A,x,_=s){const b=v("button",A);return b.type="button",b.disabled=c,b.onclick=x,_.append(b),b}function p(){h(),h=()=>{},Mi(),s.replaceChildren(),a.textContent=u,r.querySelector("#closeWorkshop").disabled=c;const A=i();if(l<0){r.querySelector("#workshopTitle").textContent="Aprenda com as mãos",s.append(v("p","Arraste com o mouse ou com o dedo. Se preferir, selecione a peça e toque no encaixe; o teclado também funciona. As conclusões são registradas para o professor e pagas uma vez por rodada."));const U=v("div","","workshop-catalog");for(const N of Nu){const F=g(N.id),D=m("",()=>{l=N.id,u="",p()},U);D.dataset.lesson=N.id,D.append(v("small",N.tag),v("strong",N.title),v("span",N.description),v("span",F.completed_at?"✓ Concluído · "+et(F.reward):"Até "+et(N.reward)+" · "+(F.step?"Continuar da etapa "+(F.step+1):"Começar")))}s.append(U);return}const x=Fu(l,A?.room.round),_=g(l);if(r.querySelector("#workshopTitle").textContent=l===7?"Diagnóstico surpresa · rodada "+A.room.round:x.title,m("← Todas as atividades",()=>{l=-1,u="",p()}),_.completed_at){s.append(v("h2","✓ Atividade concluída"),v("p","Sua conclusão e "+et(_.reward)+" já foram registrados nesta rodada. A atividade fica disponível novamente quando o professor iniciar uma nova rodada."));return}const b=x.steps[_.step||0];if(s.append(v("p","Atividade extra em uma bancada didática. Estes resultados pertencem a este cenário; as evidências dos 100 PCs e 4 notebooks continuam na ficha de cada computador.","workshop-context")),s.append(v("p",`Etapa ${(_.step||0)+1} de ${x.steps.length} · ${_.errors} erro(s) · desconto de R$ 5 por erro, mínimo de R$ 20.`,"workshop-meta")),s.append(v("h2",b.title)),b.text&&s.append(v("p",b.text)),l===3&&s.append(v("p","Somente simulação: não reproduza o jumper em uma fonte real por conta própria. Na prática, siga a orientação do professor/técnico e o procedimento do fabricante. Nunca abra a fonte.","workshop-safety")),b.kind==="place"){E(b);return}if(b.kind==="wipe"){S();return}if(b.kind==="pins"){C();return}if(b.kind==="hotspot"){R(b);return}if(b.picture){const U=v("div");U.innerHTML=vi(b.picture),s.append(U)}if(b.kind==="audio"){const U=v("details");U.open=!0,U.append(v("summary","Manual fictício MH-EDU v1")),U.append(v("p","3 curtos → investigar RAM · 1 longo + 2 curtos → investigar vídeo · 6 curtos → verificar CPU_FAN. Estes códigos não são universais.")),s.append(U);const N=v("div","","workshop-audio"),F=v("span","Som desligado. Toque para ouvir.");m("▶ Ouvir os bipes",async()=>{try{await od(b.pattern,D=>{F.textContent=D?"Reproduzindo…":"Padrão finalizado. Você pode ouvir novamente."})}catch(D){F.textContent=D.message}},N).dataset.playBeeps="true",m("■ Parar",Mi,N),m("Mostrar transcrição",()=>{F.textContent=b.pattern.map(D=>D>.3?"longo":"curto").join(" · ")},N),N.append(F),s.append(N)}const I=v("div","","workshop-choices");b.options.forEach((U,N)=>{const F=m(U,()=>{T(N)},I);F.dataset.workshopChoice=N}),s.append(I)}async function T(A){if(c)return;const x=i(),_=l;if(!x?.connected){n("Reconecte para registrar esta atividade.");return}c=!0,s.querySelectorAll("button").forEach(b=>b.disabled=!0),r.querySelector("#closeWorkshop").disabled=!0,Mi();try{const b=await x.workshopAction(_,A);u=b.feedback,b.completed&&(u+=" +"+et(b.reward)+". Conclusão registrada para o professor.",f=!0)}catch(b){u=b.message}finally{c=!1,r.open&&p()}}function E(A){s.append(v("p","Arraste a peça até o encaixe. Alternativa: selecione a peça e depois escolha o encaixe.","workshop-instruction"));const x=v("div","","workshop-placement"),_=m("",()=>{U=!0,_.classList.add("selected"),_.setAttribute("aria-pressed","true"),N&&(N=!1)},x);_.className="workshop-part",_.dataset.dragPart=A.part,_.setAttribute("aria-label","Selecionar peça para encaixar"),_.setAttribute("aria-pressed","false"),_.innerHTML=vi(A.part)+"<span>Selecionar / arrastar</span>";const b=v("div","","workshop-targets"),I=v("div","","workshop-board");I.innerHTML=vi("board"),b.append(I);let U=!1,N=!1,F=null,D=null;function q(){F?.remove(),F=null,D=null}h=q,A.options.forEach((z,K)=>{const te=m(z,()=>{U?T(K):a.textContent="Selecione a peça antes de escolher o encaixe."},b);te.dataset.drop=K;const ce=m(String(K+1),()=>{U?T(K):a.textContent="Selecione a peça para encaixar."},I);ce.dataset.drop=K,ce.setAttribute("aria-label",z);const Ne=/DIMM/.test(z)?[49,43]:/Soquete/.test(z)?[27,40]:/SATA/.test(z)?[83,75]:/PCIe/.test(z)?[36,80]:/CPU_FAN/.test(z)?[40,20]:/ATX/.test(z)?[89,44]:/EPS/.test(z)?[66,14]:[64,90];ce.style.left=Ne[0]+"%",ce.style.top=Ne[1]+"%"}),_.onpointerdown=z=>{c||(z.preventDefault(),U=!0,N=!1,D={x:z.clientX,y:z.clientY},_.classList.add("selected"),_.setAttribute("aria-pressed","true"),_.setPointerCapture(z.pointerId))},_.onpointermove=z=>{D&&(Math.hypot(z.clientX-D.x,z.clientY-D.y)<8&&!N||(N=!0,F||(F=v("div","","workshop-drag-ghost"),F.innerHTML=vi(A.part),document.body.append(F)),F.style.left=z.clientX+"px",F.style.top=z.clientY+"px"))},_.onpointerup=z=>{const K=N?document.elementFromPoint(z.clientX,z.clientY)?.closest("[data-drop]"):null;q(),K&&b.contains(K)&&T(Number(K.dataset.drop))},_.onpointercancel=_.onlostpointercapture=q,x.append(b),s.append(x)}function S(A){const x=v("div","","workshop-wipe");x.innerHTML=vi("ram");let _=new Set,b=!1;const I=[],U=m("Concluir limpeza simulada",()=>{T(0)});U.disabled=!0,U.dataset.wipeDone="true";function N(F){c||(_.add(F),I[F].classList.add("clean"),I[F].setAttribute("aria-pressed","true"),I[F].textContent="✓",U.disabled=_.size!==4,a.textContent=_.size+" de 4 áreas limpas. Segure a peça pelas bordas.")}for(let F=0;F<4;F++){const D=m(String(F+1),()=>N(F),x);D.dataset.wipeZone=F,D.setAttribute("aria-label","Limpar área "+(F+1)+" dos contatos"),D.setAttribute("aria-pressed","false"),D.style.left=8+F*23+"%",I.push(D)}x.onpointerdown=F=>{b=!0,x.setPointerCapture(F.pointerId);const D=F.target.closest("[data-wipe-zone]");D&&N(Number(D.dataset.wipeZone))},x.onpointermove=F=>{b&&I.forEach((D,q)=>{const z=D.getBoundingClientRect();F.clientX>=z.left-8&&F.clientX<=z.right+8&&F.clientY>=z.top-12&&F.clientY<=z.bottom+12&&N(q)})},x.onpointerup=x.onpointercancel=x.onlostpointercapture=()=>b=!1,s.insertBefore(x,U)}function C(){const A=v("div","","workshop-pin-scroll"),x=v("div","","workshop-connector"),_=new Set;A.setAttribute("role","region"),A.setAttribute("aria-label","Conector ATX: deslize horizontalmente para ver todos os pinos"),A.tabIndex=0;const b={16:["PS_ON","#267942"],3:["COM","#26343a"],5:["COM","#26343a"],7:["COM","#26343a"],15:["COM","#26343a"],17:["COM","#26343a"],18:["COM","#26343a"],19:["COM","#26343a"],24:["COM","#26343a"]},I=new Map,U=document.createElementNS("http://www.w3.org/2000/svg","svg");U.classList.add("workshop-jumper"),U.setAttribute("aria-hidden","true");function N(){if(U.replaceChildren(),_.size!==2)return;const[D,q]=[..._].map(lt=>I.get(lt)),z=D.offsetLeft+D.offsetWidth/2,K=D.offsetTop+8,te=q.offsetLeft+q.offsetWidth/2,ce=q.offsetTop+8,Ne=Math.max(3,Math.min(K,ce)-22);U.setAttribute("viewBox",`0 0 ${x.scrollWidth} ${x.scrollHeight}`);const st=document.createElementNS("http://www.w3.org/2000/svg","path");st.setAttribute("d",`M${z},${K} V${Ne} H${te} V${ce}`),U.append(st)}const F=m("Conectar jumper virtual",()=>{const D=[..._];if(D.length!==2){a.textContent="Escolha exatamente dois pinos.";return}T(D.includes(16)&&D.some(q=>q!==16&&b[q]?.[0]==="COM")?0:1)});F.dataset.connectJumper="true";for(const D of[...Array.from({length:12},(q,z)=>z+13),...Array.from({length:12},(q,z)=>z+1)]){const[q,z]=b[D]||(D===20?["NC","#6d7b80"]:D===8?["PWR_OK","#667e87"]:D===9?["5VSB","#754993"]:D===14?["−12V","#3567a2"]:[1,2,12,13].includes(D)?["3,3V","#b25e1f"]:[10,11].includes(D)?["12V","#927423"]:["5V","#a23c37"]),K=m(D+`
`+q,()=>{_.has(D)?_.delete(D):_.size<2&&_.add(D),K.setAttribute("aria-pressed",String(_.has(D))),N()},x);I.set(D,K),K.dataset.pin=D,K.style.background=z,K.setAttribute("aria-label",`Pino ${D} ${q}`),K.setAttribute("aria-pressed","false")}x.append(U),A.append(x),s.insertBefore(v("p","TRAVA ACIMA · vista do lado de encaixe"),F),s.insertBefore(A,F)}function R(A){const x=v("div","","workshop-hotspots");x.innerHTML=vi("inside");const _=[[59,55],[86,68],[16,30],[31,31]];A.options.forEach((b,I)=>{const U=m(String.fromCharCode(65+I),()=>{T(I)},x);U.dataset.hotspot=I,U.style.left=_[I][0]+"%",U.style.top=_[I][1]+"%",U.setAttribute("aria-label","Inspecionar área "+String.fromCharCode(65+I))}),s.append(x),s.append(v("p","A: dados do disco · B: alimentação · C: refrigeração · D: memória. As letras também permitem responder pelo teclado."))}function P(A=-1){if(!i()?.connected){n("Entre na turma para usar a bancada prática.");return}e(),l=A,u="",d="",p(),r.open||r.showModal()}return r.querySelector("#closeWorkshop").onclick=()=>{c||r.close()},r.addEventListener("cancel",A=>{c&&A.preventDefault()}),r.addEventListener("close",()=>{h(),Mi(),l=-1,f&&(f=!1,t())}),o.onclick=()=>P(),{open:P,close(){f=!1,r.close(),h(),Mi()},sync(){const A=JSON.stringify([i()?.room.round,i()?.workshops]);A!==d&&(d=A,r.open&&!c&&p())},related(A,x){if(oc[x]===void 0)return;const _=v("button","🛠 Abrir prática interativa relacionada","related-workshop");_.type="button",_.onclick=()=>{document.querySelector("#panel").close(),P(oc[x])},A.append(_)},get state(){return{active:l,busy:c,rows:structuredClone(i()?.workshops||[])}}}}const $s=[{name:"Aprendiz",min:0},{name:"Assistente",min:5},{name:"Técnico iniciante",min:15},{name:"Técnico",min:35},{name:"Especialista",min:65},{name:"Mestre da bancada",min:85}];function Do(i=0,e=0,t=0){const n=Math.max(0,i)+Math.max(0,e)+Math.max(0,t),r=$s.findLastIndex(o=>n>=o.min),s=$s[r],a=$s[r+1];return{name:s.name,total:n,next:a?.name||null,remaining:a?a.min-n:0,fraction:a?(n-s.min)/(a.min-s.min):1}}function ld({getSession:i,getProgress:e,onOpen:t,notify:n}){const r=document.createElement("dialog");r.id="reputationDialog",r.setAttribute("aria-labelledby","reputationTitle"),r.innerHTML='<button class="close" aria-label="Fechar reputação">×</button><span class="eyebrow">SUA EVOLUÇÃO</span><h1 id="reputationTitle">Reputação do técnico</h1><div id="reputationContent"></div>',document.body.append(r);const s=document.createElement("button");s.id="reputationButton",s.textContent="Minha reputação",document.querySelector(".stats").append(s),r.querySelector(".close").onclick=()=>r.close();function a(){const o=i(),l=e(),c=Do(l.filter(m=>m.validated).length,o?.bonusSolved||0,o?.workshopSolved||0),u=r.querySelector("#reputationContent");u.replaceChildren();const d=document.createElement("section");d.className="reputation-card";const f=document.createElement("h2"),h=document.createElement("p"),g=document.createElement("progress");f.textContent=c.name,h.textContent=c.total+" conclusões nesta rodada. "+(c.next?"Faltam "+c.remaining+" para "+c.next+".":"Nível máximo alcançado!"),g.max=1,g.value=c.fraction,g.setAttribute("aria-label","Progresso para o próximo título"),d.append(f,h,g),u.append(d);const v=document.createElement("p");v.textContent="A reputação valoriza desafios e práticas concluídos, incluindo os clientes. Gastar dinheiro em visuais ou ter um incidente não remove suas conquistas. Ela recomeça em uma nova rodada.",u.append(v);for(const[m,p]of[[0,"Reconhecedor de peças"],[1,"Montador"],[2,"Cuidador da RAM"],[4,"Ouvido de técnico"],[7,"Investigador"]]){const T=document.createElement("p");T.textContent=(o?.workshops?.some(E=>E.lesson===m&&E.completed_at)?"✓ ":"○ ")+p,u.append(T)}}return s.onclick=()=>{if(!i()?.connected){n("Entre na turma para acompanhar sua evolução.");return}t(),a(),r.showModal()},{sync(){r.open&&a()},close(){r.close()}}}const Lo="180",ud=0,lc=1,dd=2,Rl=1,Pl=2,Bn=3,si=0,$t=1,zn=2,ei=0,tr=1,uc=2,dc=3,hc=4,hd=5,Si=100,fd=101,pd=102,md=103,gd=104,vd=200,_d=201,xd=202,Md=203,Na=204,Fa=205,Sd=206,yd=207,bd=208,Ed=209,Td=210,Ad=211,wd=212,Cd=213,Rd=214,Oa=0,Ba=1,za=2,sr=3,ka=4,Ha=5,Va=6,Ga=7,Dl=0,Pd=1,Dd=2,ti=0,Ld=1,Id=2,Ud=3,Ll=4,Nd=5,Fd=6,Od=7,Il=300,ar=301,or=302,Wa=303,Xa=304,Bs=306,qa=1e3,Ti=1001,$a=1002,nn=1003,Bd=1004,Zr=1005,ln=1006,Ys=1007,Ai=1008,Cn=1009,Ul=1010,Nl=1011,Or=1012,Io=1013,wi=1014,Tn=1015,qr=1016,Uo=1017,No=1018,Br=1020,Fl=35902,Ol=35899,Bl=1021,zl=1022,Mn=1023,zr=1026,kr=1027,Fo=1028,Oo=1029,kl=1030,Bo=1031,zo=1033,bs=33776,Es=33777,Ts=33778,As=33779,Ya=35840,ja=35841,Ja=35842,Ka=35843,Za=36196,Qa=37492,eo=37496,to=37808,no=37809,io=37810,ro=37811,so=37812,ao=37813,oo=37814,co=37815,lo=37816,uo=37817,ho=37818,fo=37819,po=37820,mo=37821,go=36492,vo=36494,_o=36495,xo=36283,Mo=36284,So=36285,yo=36286,zd=3200,kd=3201,Hl=0,Hd=1,Zn="",Gt="srgb",cr="srgb-linear",Ps="linear",ot="srgb",Ii=7680,fc=519,Vd=512,Gd=513,Wd=514,Vl=515,Xd=516,qd=517,$d=518,Yd=519,pc=35044,mc="300 es",An=2e3,Ds=2001;class hr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let gc=1234567;const Pr=Math.PI/180,Hr=180/Math.PI;function fr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(It[i&255]+It[i>>8&255]+It[i>>16&255]+It[i>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[t&63|128]+It[t>>8&255]+"-"+It[t>>16&255]+It[t>>24&255]+It[n&255]+It[n>>8&255]+It[n>>16&255]+It[n>>24&255]).toLowerCase()}function We(i,e,t){return Math.max(e,Math.min(t,i))}function ko(i,e){return(i%e+e)%e}function jd(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Jd(i,e,t){return i!==e?(t-i)/(e-i):0}function Dr(i,e,t){return(1-t)*i+t*e}function Kd(i,e,t,n){return Dr(i,e,1-Math.exp(-t*n))}function Zd(i,e=1){return e-Math.abs(ko(i,e*2)-e)}function Qd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function eh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function th(i,e){return i+Math.floor(Math.random()*(e-i+1))}function nh(i,e){return i+Math.random()*(e-i)}function ih(i){return i*(.5-Math.random())}function rh(i){i!==void 0&&(gc=i);let e=gc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function sh(i){return i*Pr}function ah(i){return i*Hr}function oh(i){return(i&i-1)===0&&i!==0}function ch(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function lh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function uh(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),u=a((e+n)/2),d=s((e-n)/2),f=a((e-n)/2),h=s((n-e)/2),g=a((n-e)/2);switch(r){case"XYX":i.set(o*u,l*d,l*f,o*c);break;case"YZY":i.set(l*f,o*u,l*d,o*c);break;case"ZXZ":i.set(l*d,l*f,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*h,o*c);break;case"YXY":i.set(l*h,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*h,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ji(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function zt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const vc={DEG2RAD:Pr,RAD2DEG:Hr,generateUUID:fr,clamp:We,euclideanModulo:ko,mapLinear:jd,inverseLerp:Jd,lerp:Dr,damp:Kd,pingpong:Zd,smoothstep:Qd,smootherstep:eh,randInt:th,randFloat:nh,randFloatSpread:ih,seededRandom:rh,degToRad:sh,radToDeg:ah,isPowerOfTwo:oh,ceilPowerOfTwo:ch,floorPowerOfTwo:lh,setQuaternionFromProperEuler:uh,normalize:zt,denormalize:Ji};class Pe{constructor(e=0,t=0){Pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $r{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],d=n[r+3];const f=s[a+0],h=s[a+1],g=s[a+2],v=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=h,e[t+2]=g,e[t+3]=v;return}if(d!==v||l!==f||c!==h||u!==g){let m=1-o;const p=l*f+c*h+u*g+d*v,T=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const C=Math.sqrt(E),R=Math.atan2(C,p*T);m=Math.sin(m*R)/C,o=Math.sin(o*R)/C}const S=o*T;if(l=l*m+f*S,c=c*m+h*S,u=u*m+g*S,d=d*m+v*S,m===1-o){const C=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=C,c*=C,u*=C,d*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],d=s[a],f=s[a+1],h=s[a+2],g=s[a+3];return e[t]=o*g+u*d+l*h-c*f,e[t+1]=l*g+u*f+c*d-o*h,e[t+2]=c*g+u*h+o*f-l*d,e[t+3]=u*g-o*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),d=o(s/2),f=l(n/2),h=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=f*u*d+c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d-f*h*g;break;case"YXZ":this._x=f*u*d+c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d+f*h*g;break;case"ZXY":this._x=f*u*d-c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d-f*h*g;break;case"ZYX":this._x=f*u*d-c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d+f*h*g;break;case"YZX":this._x=f*u*d+c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d-f*h*g;break;case"XZY":this._x=f*u*d-c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d+f*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=n+o+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(a-r)*h}else if(n>o&&n>d){const h=2*Math.sqrt(1+n-o-d);this._w=(u-l)/h,this._x=.25*h,this._y=(r+a)/h,this._z=(s+c)/h}else if(o>d){const h=2*Math.sqrt(1+o-n-d);this._w=(s-c)/h,this._x=(r+a)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+d-n-o);this._w=(a-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const h=1-t;return this._w=h*a+t*this._w,this._x=h*n+t*this._x,this._y=h*r+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,n=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_c.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_c.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),u=2*(o*t-s*r),d=2*(s*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-s*d,this.z=r+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return js.copy(this).projectOnVector(e),this.sub(js)}reflect(e){return this.sub(js.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const js=new B,_c=new $r;class He{constructor(e,t,n,r,s,a,o,l,c){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],f=n[2],h=n[5],g=n[8],v=r[0],m=r[3],p=r[6],T=r[1],E=r[4],S=r[7],C=r[2],R=r[5],P=r[8];return s[0]=a*v+o*T+l*C,s[3]=a*m+o*E+l*R,s[6]=a*p+o*S+l*P,s[1]=c*v+u*T+d*C,s[4]=c*m+u*E+d*R,s[7]=c*p+u*S+d*P,s[2]=f*v+h*T+g*C,s[5]=f*m+h*E+g*R,s[8]=f*p+h*S+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,f=o*l-u*s,h=c*s-a*l,g=t*d+n*f+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=d*v,e[1]=(r*c-u*n)*v,e[2]=(o*n-r*a)*v,e[3]=f*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-o*t)*v,e[6]=h*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Js.makeScale(e,t)),this}rotate(e){return this.premultiply(Js.makeRotation(-e)),this}translate(e,t){return this.premultiply(Js.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Js=new He;function Gl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ls(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function dh(){const i=Ls("canvas");return i.style.display="block",i}const xc={};function Vr(i){i in xc||(xc[i]=!0,console.warn(i))}function hh(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Mc=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sc=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fh(){const i={enabled:!0,workingColorSpace:cr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ot&&(r.r=Vn(r.r),r.g=Vn(r.g),r.b=Vn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ot&&(r.r=nr(r.r),r.g=nr(r.g),r.b=nr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Zn?Ps:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Vr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Vr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[cr]:{primaries:e,whitePoint:n,transfer:Ps,toXYZ:Mc,fromXYZ:Sc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Gt},outputColorSpaceConfig:{drawingBufferColorSpace:Gt}},[Gt]:{primaries:e,whitePoint:n,transfer:ot,toXYZ:Mc,fromXYZ:Sc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Gt}}}),i}const nt=fh();function Vn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function nr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ui;class ph{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ui===void 0&&(Ui=Ls("canvas")),Ui.width=e.width,Ui.height=e.height;const r=Ui.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ui}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ls("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Vn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Vn(t[n]/255)*255):t[n]=Vn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let mh=0;class Ho{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mh++}),this.uuid=fr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ks(r[a].image)):s.push(Ks(r[a]))}else s=Ks(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ks(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ph.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gh=0;const Zs=new B;class Ot extends hr{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,n=Ti,r=Ti,s=ln,a=Ai,o=Mn,l=Cn,c=Ot.DEFAULT_ANISOTROPY,u=Zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gh++}),this.uuid=fr(),this.name="",this.source=new Ho(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Zs).x}get height(){return this.source.getSize(Zs).y}get depth(){return this.source.getSize(Zs).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Il)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qa:e.x=e.x-Math.floor(e.x);break;case Ti:e.x=e.x<0?0:1;break;case $a:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qa:e.y=e.y-Math.floor(e.y);break;case Ti:e.y=e.y<0?0:1;break;case $a:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=Il;Ot.DEFAULT_ANISOTROPY=1;class xt{constructor(e=0,t=0,n=0,r=1){xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,S=(h+1)/2,C=(p+1)/2,R=(u+f)/4,P=(d+v)/4,A=(g+m)/4;return E>S&&E>C?E<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(E),r=R/n,s=P/n):S>C?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=R/r,s=A/r):C<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),n=P/s,r=A/s),this.set(n,r,s,t),this}let T=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(f-u)*(f-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(d-v)/T,this.z=(f-u)/T,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vh extends hr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);const r={width:e,height:t,depth:n.depth},s=new Ot(r);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:ln,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ho(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ci extends vh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Wl extends Ot{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class _h extends Ot{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Di{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,hn):hn.fromBufferAttribute(s,a),hn.applyMatrix4(e.matrixWorld),this.expandByPoint(hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qr.copy(n.boundingBox)),Qr.applyMatrix4(e.matrixWorld),this.union(Qr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hn),hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xr),es.subVectors(this.max,xr),Ni.subVectors(e.a,xr),Fi.subVectors(e.b,xr),Oi.subVectors(e.c,xr),Xn.subVectors(Fi,Ni),qn.subVectors(Oi,Fi),ui.subVectors(Ni,Oi);let t=[0,-Xn.z,Xn.y,0,-qn.z,qn.y,0,-ui.z,ui.y,Xn.z,0,-Xn.x,qn.z,0,-qn.x,ui.z,0,-ui.x,-Xn.y,Xn.x,0,-qn.y,qn.x,0,-ui.y,ui.x,0];return!Qs(t,Ni,Fi,Oi,es)||(t=[1,0,0,0,1,0,0,0,1],!Qs(t,Ni,Fi,Oi,es))?!1:(ts.crossVectors(Xn,qn),t=[ts.x,ts.y,ts.z],Qs(t,Ni,Fi,Oi,es))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ln=[new B,new B,new B,new B,new B,new B,new B,new B],hn=new B,Qr=new Di,Ni=new B,Fi=new B,Oi=new B,Xn=new B,qn=new B,ui=new B,xr=new B,es=new B,ts=new B,di=new B;function Qs(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){di.fromArray(i,s);const o=r.x*Math.abs(di.x)+r.y*Math.abs(di.y)+r.z*Math.abs(di.z),l=e.dot(di),c=t.dot(di),u=n.dot(di);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const xh=new Di,Mr=new B,ea=new B;class Yr{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):xh.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Mr.subVectors(e,this.center);const t=Mr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Mr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ea.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Mr.copy(e.center).add(ea)),this.expandByPoint(Mr.copy(e.center).sub(ea))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const In=new B,ta=new B,ns=new B,$n=new B,na=new B,is=new B,ia=new B;class Mh{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,In)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=In.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(In.copy(this.origin).addScaledVector(this.direction,t),In.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ta.copy(e).add(t).multiplyScalar(.5),ns.copy(t).sub(e).normalize(),$n.copy(this.origin).sub(ta);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ns),o=$n.dot(this.direction),l=-$n.dot(ns),c=$n.lengthSq(),u=Math.abs(1-a*a);let d,f,h,g;if(u>0)if(d=a*l-o,f=a*o-l,g=s*u,d>=0)if(f>=-g)if(f<=g){const v=1/u;d*=v,f*=v,h=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=s,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-s,-l),s),h=f*(f+2*l)+c):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(ta).addScaledVector(ns,f),h}intersectSphere(e,t){In.subVectors(e.center,this.origin);const n=In.dot(this.direction),r=In.dot(In)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,In)!==null}intersectTriangle(e,t,n,r,s){na.subVectors(t,e),is.subVectors(n,e),ia.crossVectors(na,is);let a=this.direction.dot(ia),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;$n.subVectors(this.origin,e);const l=o*this.direction.dot(is.crossVectors($n,is));if(l<0)return null;const c=o*this.direction.dot(na.cross($n));if(c<0||l+c>a)return null;const u=-o*$n.dot(ia);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ft{constructor(e,t,n,r,s,a,o,l,c,u,d,f,h,g,v,m){ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,u,d,f,h,g,v,m)}set(e,t,n,r,s,a,o,l,c,u,d,f,h,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ft().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Bi.setFromMatrixColumn(e,0).length(),s=1/Bi.setFromMatrixColumn(e,1).length(),a=1/Bi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=a*u,h=a*d,g=o*u,v=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=h+g*c,t[5]=f-v*c,t[9]=-o*l,t[2]=v-f*c,t[6]=g+h*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,h=l*d,g=c*u,v=c*d;t[0]=f+v*o,t[4]=g*o-h,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=h*o-g,t[6]=v+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,h=l*d,g=c*u,v=c*d;t[0]=f-v*o,t[4]=-a*d,t[8]=g+h*o,t[1]=h+g*o,t[5]=a*u,t[9]=v-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,h=a*d,g=o*u,v=o*d;t[0]=l*u,t[4]=g*c-h,t[8]=f*c+v,t[1]=l*d,t[5]=v*c+f,t[9]=h*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,h=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=v-f*d,t[8]=g*d+h,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=h*d+g,t[10]=f-v*d}else if(e.order==="XZY"){const f=a*l,h=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+v,t[5]=a*u,t[9]=h*d-g,t[2]=g*d-h,t[6]=o*u,t[10]=v*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Sh,e,yh)}lookAt(e,t,n){const r=this.elements;return Jt.subVectors(e,t),Jt.lengthSq()===0&&(Jt.z=1),Jt.normalize(),Yn.crossVectors(n,Jt),Yn.lengthSq()===0&&(Math.abs(n.z)===1?Jt.x+=1e-4:Jt.z+=1e-4,Jt.normalize(),Yn.crossVectors(n,Jt)),Yn.normalize(),rs.crossVectors(Jt,Yn),r[0]=Yn.x,r[4]=rs.x,r[8]=Jt.x,r[1]=Yn.y,r[5]=rs.y,r[9]=Jt.y,r[2]=Yn.z,r[6]=rs.z,r[10]=Jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],f=n[9],h=n[13],g=n[2],v=n[6],m=n[10],p=n[14],T=n[3],E=n[7],S=n[11],C=n[15],R=r[0],P=r[4],A=r[8],x=r[12],_=r[1],b=r[5],I=r[9],U=r[13],N=r[2],F=r[6],D=r[10],q=r[14],z=r[3],K=r[7],te=r[11],ce=r[15];return s[0]=a*R+o*_+l*N+c*z,s[4]=a*P+o*b+l*F+c*K,s[8]=a*A+o*I+l*D+c*te,s[12]=a*x+o*U+l*q+c*ce,s[1]=u*R+d*_+f*N+h*z,s[5]=u*P+d*b+f*F+h*K,s[9]=u*A+d*I+f*D+h*te,s[13]=u*x+d*U+f*q+h*ce,s[2]=g*R+v*_+m*N+p*z,s[6]=g*P+v*b+m*F+p*K,s[10]=g*A+v*I+m*D+p*te,s[14]=g*x+v*U+m*q+p*ce,s[3]=T*R+E*_+S*N+C*z,s[7]=T*P+E*b+S*F+C*K,s[11]=T*A+E*I+S*D+C*te,s[15]=T*x+E*U+S*q+C*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+s*l*d-r*c*d-s*o*f+n*c*f+r*o*h-n*l*h)+v*(+t*l*h-t*c*f+s*a*f-r*a*h+r*c*u-s*l*u)+m*(+t*c*d-t*o*h-s*a*d+n*a*h+s*o*u-n*c*u)+p*(-r*o*u-t*l*d+t*o*f+r*a*d-n*a*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],g=e[12],v=e[13],m=e[14],p=e[15],T=d*m*c-v*f*c+v*l*h-o*m*h-d*l*p+o*f*p,E=g*f*c-u*m*c-g*l*h+a*m*h+u*l*p-a*f*p,S=u*v*c-g*d*c+g*o*h-a*v*h-u*o*p+a*d*p,C=g*d*l-u*v*l-g*o*f+a*v*f+u*o*m-a*d*m,R=t*T+n*E+r*S+s*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/R;return e[0]=T*P,e[1]=(v*f*s-d*m*s-v*r*h+n*m*h+d*r*p-n*f*p)*P,e[2]=(o*m*s-v*l*s+v*r*c-n*m*c-o*r*p+n*l*p)*P,e[3]=(d*l*s-o*f*s-d*r*c+n*f*c+o*r*h-n*l*h)*P,e[4]=E*P,e[5]=(u*m*s-g*f*s+g*r*h-t*m*h-u*r*p+t*f*p)*P,e[6]=(g*l*s-a*m*s-g*r*c+t*m*c+a*r*p-t*l*p)*P,e[7]=(a*f*s-u*l*s+u*r*c-t*f*c-a*r*h+t*l*h)*P,e[8]=S*P,e[9]=(g*d*s-u*v*s-g*n*h+t*v*h+u*n*p-t*d*p)*P,e[10]=(a*v*s-g*o*s+g*n*c-t*v*c-a*n*p+t*o*p)*P,e[11]=(u*o*s-a*d*s-u*n*c+t*d*c+a*n*h-t*o*h)*P,e[12]=C*P,e[13]=(u*v*r-g*d*r+g*n*f-t*v*f-u*n*m+t*d*m)*P,e[14]=(g*o*r-a*v*r-g*n*l+t*v*l+a*n*m-t*o*m)*P,e[15]=(a*d*r-u*o*r+u*n*l-t*d*l-a*n*f+t*o*f)*P,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,d=o+o,f=s*c,h=s*u,g=s*d,v=a*u,m=a*d,p=o*d,T=l*c,E=l*u,S=l*d,C=n.x,R=n.y,P=n.z;return r[0]=(1-(v+p))*C,r[1]=(h+S)*C,r[2]=(g-E)*C,r[3]=0,r[4]=(h-S)*R,r[5]=(1-(f+p))*R,r[6]=(m+T)*R,r[7]=0,r[8]=(g+E)*P,r[9]=(m-T)*P,r[10]=(1-(f+v))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Bi.set(r[0],r[1],r[2]).length();const a=Bi.set(r[4],r[5],r[6]).length(),o=Bi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],fn.copy(this);const c=1/s,u=1/a,d=1/o;return fn.elements[0]*=c,fn.elements[1]*=c,fn.elements[2]*=c,fn.elements[4]*=u,fn.elements[5]*=u,fn.elements[6]*=u,fn.elements[8]*=d,fn.elements[9]*=d,fn.elements[10]*=d,t.setFromRotationMatrix(fn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=An,l=!1){const c=this.elements,u=2*s/(t-e),d=2*s/(n-r),f=(t+e)/(t-e),h=(n+r)/(n-r);let g,v;if(l)g=s/(a-s),v=a*s/(a-s);else if(o===An)g=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===Ds)g=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=An,l=!1){const c=this.elements,u=2/(t-e),d=2/(n-r),f=-(t+e)/(t-e),h=-(n+r)/(n-r);let g,v;if(l)g=1/(a-s),v=a/(a-s);else if(o===An)g=-2/(a-s),v=-(a+s)/(a-s);else if(o===Ds)g=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Bi=new B,fn=new ft,Sh=new B(0,0,0),yh=new B(1,1,1),Yn=new B,rs=new B,Jt=new B,yc=new ft,bc=new $r;class Rn{constructor(e=0,t=0,n=0,r=Rn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(We(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-We(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return yc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bc.setFromEuler(this),this.setFromQuaternion(bc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Rn.DEFAULT_ORDER="XYZ";class Xl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bh=0;const Ec=new B,zi=new $r,Un=new ft,ss=new B,Sr=new B,Eh=new B,Th=new $r,Tc=new B(1,0,0),Ac=new B(0,1,0),wc=new B(0,0,1),Cc={type:"added"},Ah={type:"removed"},ki={type:"childadded",child:null},ra={type:"childremoved",child:null};class Dt extends hr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bh++}),this.uuid=fr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dt.DEFAULT_UP.clone();const e=new B,t=new Rn,n=new $r,r=new B(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ft},normalMatrix:{value:new He}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=Dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zi.setFromAxisAngle(e,t),this.quaternion.multiply(zi),this}rotateOnWorldAxis(e,t){return zi.setFromAxisAngle(e,t),this.quaternion.premultiply(zi),this}rotateX(e){return this.rotateOnAxis(Tc,e)}rotateY(e){return this.rotateOnAxis(Ac,e)}rotateZ(e){return this.rotateOnAxis(wc,e)}translateOnAxis(e,t){return Ec.copy(e).applyQuaternion(this.quaternion),this.position.add(Ec.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Tc,e)}translateY(e){return this.translateOnAxis(Ac,e)}translateZ(e){return this.translateOnAxis(wc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ss.copy(e):ss.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(Sr,ss,this.up):Un.lookAt(ss,Sr,this.up),this.quaternion.setFromRotationMatrix(Un),r&&(Un.extractRotation(r.matrixWorld),zi.setFromRotationMatrix(Un),this.quaternion.premultiply(zi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Cc),ki.child=e,this.dispatchEvent(ki),ki.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ah),ra.child=e,this.dispatchEvent(ra),ra.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Un.multiply(e.parent.matrixWorld)),e.applyMatrix4(Un),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Cc),ki.child=e,this.dispatchEvent(ki),ki.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,e,Eh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,Th,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),f=a(e.skeletons),h=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),h.length>0&&(n.animations=h),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Dt.DEFAULT_UP=new B(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pn=new B,Nn=new B,sa=new B,Fn=new B,Hi=new B,Vi=new B,Rc=new B,aa=new B,oa=new B,ca=new B,la=new xt,ua=new xt,da=new xt;class vn{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),pn.subVectors(e,t),r.cross(pn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){pn.subVectors(r,t),Nn.subVectors(n,t),sa.subVectors(e,t);const a=pn.dot(pn),o=pn.dot(Nn),l=pn.dot(sa),c=Nn.dot(Nn),u=Nn.dot(sa),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const f=1/d,h=(c*l-o*u)*f,g=(a*u-o*l)*f;return s.set(1-h-g,g,h)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,Fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Fn.x),l.addScaledVector(a,Fn.y),l.addScaledVector(o,Fn.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return la.setScalar(0),ua.setScalar(0),da.setScalar(0),la.fromBufferAttribute(e,t),ua.fromBufferAttribute(e,n),da.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(la,s.x),a.addScaledVector(ua,s.y),a.addScaledVector(da,s.z),a}static isFrontFacing(e,t,n,r){return pn.subVectors(n,t),Nn.subVectors(e,t),pn.cross(Nn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pn.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),pn.cross(Nn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return vn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Hi.subVectors(r,n),Vi.subVectors(s,n),aa.subVectors(e,n);const l=Hi.dot(aa),c=Vi.dot(aa);if(l<=0&&c<=0)return t.copy(n);oa.subVectors(e,r);const u=Hi.dot(oa),d=Vi.dot(oa);if(u>=0&&d<=u)return t.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Hi,a);ca.subVectors(e,s);const h=Hi.dot(ca),g=Vi.dot(ca);if(g>=0&&h<=g)return t.copy(s);const v=h*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Vi,o);const m=u*g-h*d;if(m<=0&&d-u>=0&&h-g>=0)return Rc.subVectors(s,r),o=(d-u)/(d-u+(h-g)),t.copy(r).addScaledVector(Rc,o);const p=1/(m+v+f);return a=v*p,o=f*p,t.copy(n).addScaledVector(Hi,a).addScaledVector(Vi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ql={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jn={h:0,s:0,l:0},as={h:0,s:0,l:0};function ha(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Qe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,nt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=nt.workingColorSpace){if(e=ko(e,1),t=We(t,0,1),n=We(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=ha(a,s,e+1/3),this.g=ha(a,s,e),this.b=ha(a,s,e-1/3)}return nt.colorSpaceToWorking(this,r),this}setStyle(e,t=Gt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){const n=ql[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vn(e.r),this.g=Vn(e.g),this.b=Vn(e.b),this}copyLinearToSRGB(e){return this.r=nr(e.r),this.g=nr(e.g),this.b=nr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return nt.workingToColorSpace(Ut.copy(this),e),Math.round(We(Ut.r*255,0,255))*65536+Math.round(We(Ut.g*255,0,255))*256+Math.round(We(Ut.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace(Ut.copy(this),t);const n=Ut.r,r=Ut.g,s=Ut.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace(Ut.copy(this),t),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=Gt){nt.workingToColorSpace(Ut.copy(this),e);const t=Ut.r,n=Ut.g,r=Ut.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(jn),this.setHSL(jn.h+e,jn.s+t,jn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(jn),e.getHSL(as);const n=Dr(jn.h,as.h,t),r=Dr(jn.s,as.s,t),s=Dr(jn.l,as.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ut=new Qe;Qe.NAMES=ql;let wh=0;class jr extends hr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wh++}),this.uuid=fr(),this.name="",this.type="Material",this.blending=tr,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Na,this.blendDst=Fa,this.blendEquation=Si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ii,this.stencilZFail=Ii,this.stencilZPass=Ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==tr&&(n.blending=this.blending),this.side!==si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Na&&(n.blendSrc=this.blendSrc),this.blendDst!==Fa&&(n.blendDst=this.blendDst),this.blendEquation!==Si&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==sr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ii&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ii&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ii&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ni extends jr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=Dl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new B,os=new Pe;let Ch=0;class un{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ch++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=pc,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)os.fromBufferAttribute(this,t),os.applyMatrix3(e),this.setXY(t,os.x,os.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ji(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=zt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ji(t,this.array)),t}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ji(t,this.array)),t}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ji(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ji(t,this.array)),t}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array),r=zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array),r=zt(r,this.array),s=zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pc&&(e.usage=this.usage),e}}class $l extends un{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Yl extends un{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Et extends un{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Rh=0;const on=new ft,fa=new Dt,Gi=new B,Kt=new Di,yr=new Di,Ct=new B;class dn extends hr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rh++}),this.uuid=fr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gl(e)?Yl:$l)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new He().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return on.makeRotationFromQuaternion(e),this.applyMatrix4(on),this}rotateX(e){return on.makeRotationX(e),this.applyMatrix4(on),this}rotateY(e){return on.makeRotationY(e),this.applyMatrix4(on),this}rotateZ(e){return on.makeRotationZ(e),this.applyMatrix4(on),this}translate(e,t,n){return on.makeTranslation(e,t,n),this.applyMatrix4(on),this}scale(e,t,n){return on.makeScale(e,t,n),this.applyMatrix4(on),this}lookAt(e){return fa.lookAt(e),fa.updateMatrix(),this.applyMatrix4(fa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gi).negate(),this.translate(Gi.x,Gi.y,Gi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Et(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Di);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Kt.setFromBufferAttribute(s),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,Kt.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,Kt.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(Kt.min),this.boundingBox.expandByPoint(Kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const n=this.boundingSphere.center;if(Kt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];yr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ct.addVectors(Kt.min,yr.min),Kt.expandByPoint(Ct),Ct.addVectors(Kt.max,yr.max),Kt.expandByPoint(Ct)):(Kt.expandByPoint(yr.min),Kt.expandByPoint(yr.max))}Kt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Ct.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Ct));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ct.fromBufferAttribute(o,c),l&&(Gi.fromBufferAttribute(e,c),Ct.add(Gi)),r=Math.max(r,n.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new un(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let A=0;A<n.count;A++)o[A]=new B,l[A]=new B;const c=new B,u=new B,d=new B,f=new Pe,h=new Pe,g=new Pe,v=new B,m=new B;function p(A,x,_){c.fromBufferAttribute(n,A),u.fromBufferAttribute(n,x),d.fromBufferAttribute(n,_),f.fromBufferAttribute(s,A),h.fromBufferAttribute(s,x),g.fromBufferAttribute(s,_),u.sub(c),d.sub(c),h.sub(f),g.sub(f);const b=1/(h.x*g.y-g.x*h.y);isFinite(b)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(d,-h.y).multiplyScalar(b),m.copy(d).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(b),o[A].add(v),o[x].add(v),o[_].add(v),l[A].add(m),l[x].add(m),l[_].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let A=0,x=T.length;A<x;++A){const _=T[A],b=_.start,I=_.count;for(let U=b,N=b+I;U<N;U+=3)p(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const E=new B,S=new B,C=new B,R=new B;function P(A){C.fromBufferAttribute(r,A),R.copy(C);const x=o[A];E.copy(x),E.sub(C.multiplyScalar(C.dot(x))).normalize(),S.crossVectors(R,x);const b=S.dot(l[A])<0?-1:1;a.setXYZW(A,E.x,E.y,E.z,b)}for(let A=0,x=T.length;A<x;++A){const _=T[A],b=_.start,I=_.count;for(let U=b,N=b+I;U<N;U+=3)P(e.getX(U+0)),P(e.getX(U+1)),P(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new un(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,h=n.count;f<h;f++)n.setXYZ(f,0,0,0);const r=new B,s=new B,a=new B,o=new B,l=new B,c=new B,u=new B,d=new B;if(e)for(let f=0,h=e.count;f<h;f+=3){const g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,h=t.count;f<h;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(l.length*u);let h=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?h=l[v]*o.data.stride+o.offset:h=l[v]*u;for(let p=0;p<u;p++)f[g++]=c[h++]}return new un(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new dn,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const f=c[u],h=e(f,n);l.push(h)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pc=new ft,hi=new Mh,cs=new Yr,Dc=new B,ls=new B,us=new B,ds=new B,pa=new B,hs=new B,Lc=new B,fs=new B;class $e extends Dt{constructor(e=new dn,t=new ni){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){hs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(pa.fromBufferAttribute(d,e),a?hs.addScaledVector(pa,u):hs.addScaledVector(pa.sub(t),u))}t.add(hs)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),cs.copy(n.boundingSphere),cs.applyMatrix4(s),hi.copy(e.ray).recast(e.near),!(cs.containsPoint(hi.origin)===!1&&(hi.intersectSphere(cs,Dc)===null||hi.origin.distanceToSquared(Dc)>(e.far-e.near)**2))&&(Pc.copy(s).invert(),hi.copy(e.ray).applyMatrix4(Pc),!(n.boundingBox!==null&&hi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,hi)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=a[m.materialIndex],T=Math.max(m.start,h.start),E=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let S=T,C=E;S<C;S+=3){const R=o.getX(S),P=o.getX(S+1),A=o.getX(S+2);r=ps(this,p,e,n,c,u,d,R,P,A),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,h.start),v=Math.min(o.count,h.start+h.count);for(let m=g,p=v;m<p;m+=3){const T=o.getX(m),E=o.getX(m+1),S=o.getX(m+2);r=ps(this,a,e,n,c,u,d,T,E,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=a[m.materialIndex],T=Math.max(m.start,h.start),E=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let S=T,C=E;S<C;S+=3){const R=S,P=S+1,A=S+2;r=ps(this,p,e,n,c,u,d,R,P,A),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,h.start),v=Math.min(l.count,h.start+h.count);for(let m=g,p=v;m<p;m+=3){const T=m,E=m+1,S=m+2;r=ps(this,a,e,n,c,u,d,T,E,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Ph(i,e,t,n,r,s,a,o){let l;if(e.side===$t?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===si,o),l===null)return null;fs.copy(o),fs.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(fs);return c<t.near||c>t.far?null:{distance:c,point:fs.clone(),object:i}}function ps(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,ls),i.getVertexPosition(l,us),i.getVertexPosition(c,ds);const u=Ph(i,e,t,n,ls,us,ds,Lc);if(u){const d=new B;vn.getBarycoord(Lc,ls,us,ds,d),r&&(u.uv=vn.getInterpolatedAttribute(r,o,l,c,d,new Pe)),s&&(u.uv1=vn.getInterpolatedAttribute(s,o,l,c,d,new Pe)),a&&(u.normal=vn.getInterpolatedAttribute(a,o,l,c,d,new B),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new B,materialIndex:0};vn.getNormal(ls,us,ds,f.normal),u.face=f,u.barycoord=d}return u}class qe extends dn{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let f=0,h=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Et(c,3)),this.setAttribute("normal",new Et(u,3)),this.setAttribute("uv",new Et(d,2));function g(v,m,p,T,E,S,C,R,P,A,x){const _=S/P,b=C/A,I=S/2,U=C/2,N=R/2,F=P+1,D=A+1;let q=0,z=0;const K=new B;for(let te=0;te<D;te++){const ce=te*b-U;for(let Ne=0;Ne<F;Ne++){const st=Ne*_-I;K[v]=st*T,K[m]=ce*E,K[p]=N,c.push(K.x,K.y,K.z),K[v]=0,K[m]=0,K[p]=R>0?1:-1,u.push(K.x,K.y,K.z),d.push(Ne/P),d.push(1-te/A),q+=1}}for(let te=0;te<A;te++)for(let ce=0;ce<P;ce++){const Ne=f+ce+F*te,st=f+ce+F*(te+1),lt=f+(ce+1)+F*(te+1),it=f+(ce+1)+F*te;l.push(Ne,st,it),l.push(st,lt,it),z+=6}o.addGroup(h,z,x),h+=z,f+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qe(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function lr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function kt(i){const e={};for(let t=0;t<i.length;t++){const n=lr(i[t]);for(const r in n)e[r]=n[r]}return e}function Dh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function jl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const Lh={clone:lr,merge:kt};var Ih=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Uh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ai extends jr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ih,this.fragmentShader=Uh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=lr(e.uniforms),this.uniformsGroups=Dh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Jl extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=An,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Jn=new B,Ic=new Pe,Uc=new Pe;class Qt extends Jl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Hr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Pr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hr*2*Math.atan(Math.tan(Pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Jn.x,Jn.y).multiplyScalar(-e/Jn.z),Jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Jn.x,Jn.y).multiplyScalar(-e/Jn.z)}getViewSize(e,t){return this.getViewBounds(e,Ic,Uc),t.subVectors(Uc,Ic)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Pr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Wi=-90,Xi=1;class Nh extends Dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Qt(Wi,Xi,e,t);r.layers=this.layers,this.add(r);const s=new Qt(Wi,Xi,e,t);s.layers=this.layers,this.add(s);const a=new Qt(Wi,Xi,e,t);a.layers=this.layers,this.add(a);const o=new Qt(Wi,Xi,e,t);o.layers=this.layers,this.add(o);const l=new Qt(Wi,Xi,e,t);l.layers=this.layers,this.add(l);const c=new Qt(Wi,Xi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===An)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ds)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Kl extends Ot{constructor(e=[],t=ar,n,r,s,a,o,l,c,u){super(e,t,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Fh extends Ci{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Kl(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new qe(5,5,5),s=new ai({name:"CubemapFromEquirect",uniforms:lr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$t,blending:ei});s.uniforms.tEquirect.value=t;const a=new $e(r,s),o=t.minFilter;return t.minFilter===Ai&&(t.minFilter=ln),new Nh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}class Xt extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Oh={type:"move"};class ma{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,g=.005;c.inputState.pinching&&f>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Oh)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Xt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Vo{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Qe(e),this.near=t,this.far=n}clone(){return new Vo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Zl extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rn,this.environmentIntensity=1,this.environmentRotation=new Rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Bh extends Ot{constructor(e=null,t=1,n=1,r,s,a,o,l,c=nn,u=nn,d,f){super(null,a,o,l,c,u,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nc extends un{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const qi=new ft,Fc=new ft,ms=[],Oc=new Di,zh=new ft,br=new $e,Er=new Yr;class Ql extends $e{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Nc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,zh)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Di),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,qi),Oc.copy(e.boundingBox).applyMatrix4(qi),this.boundingBox.union(Oc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Yr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,qi),Er.copy(e.boundingSphere).applyMatrix4(qi),this.boundingSphere.union(Er)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(br.geometry=this.geometry,br.material=this.material,br.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Er.copy(this.boundingSphere),Er.applyMatrix4(n),e.ray.intersectsSphere(Er)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,qi),Fc.multiplyMatrices(n,qi),br.matrixWorld=Fc,br.raycast(e,ms);for(let a=0,o=ms.length;a<o;a++){const l=ms[a];l.instanceId=s,l.object=this,t.push(l)}ms.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Nc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Bh(new Float32Array(r*this.count),r,this.count,Fo,Tn));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ga=new B,kh=new B,Hh=new He;class _i{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ga.subVectors(n,t).cross(kh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ga),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Hh.getNormalMatrix(e),r=this.coplanarPoint(ga).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fi=new Yr,Vh=new Pe(.5,.5),gs=new B;class Go{constructor(e=new _i,t=new _i,n=new _i,r=new _i,s=new _i,a=new _i){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=An,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],d=s[5],f=s[6],h=s[7],g=s[8],v=s[9],m=s[10],p=s[11],T=s[12],E=s[13],S=s[14],C=s[15];if(r[0].setComponents(c-a,h-u,p-g,C-T).normalize(),r[1].setComponents(c+a,h+u,p+g,C+T).normalize(),r[2].setComponents(c+o,h+d,p+v,C+E).normalize(),r[3].setComponents(c-o,h-d,p-v,C-E).normalize(),n)r[4].setComponents(l,f,m,S).normalize(),r[5].setComponents(c-l,h-f,p-m,C-S).normalize();else if(r[4].setComponents(c-l,h-f,p-m,C-S).normalize(),t===An)r[5].setComponents(c+l,h+f,p+m,C+S).normalize();else if(t===Ds)r[5].setComponents(l,f,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fi)}intersectsSprite(e){fi.center.set(0,0,0);const t=Vh.distanceTo(e.center);return fi.radius=.7071067811865476+t,fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(gs.x=r.normal.x>0?e.max.x:e.min.x,gs.y=r.normal.y>0?e.max.y:e.min.y,gs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(gs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class eu extends Ot{constructor(e,t,n,r,s,a,o,l,c){super(e,t,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class tu extends Ot{constructor(e,t,n=wi,r,s,a,o=nn,l=nn,c,u=zr,d=1){if(u!==zr&&u!==kr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ho(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class nu extends Ot{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ri extends dn{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],d=[],f=[],h=[];let g=0;const v=[],m=n/2;let p=0;T(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new Et(d,3)),this.setAttribute("normal",new Et(f,3)),this.setAttribute("uv",new Et(h,2));function T(){const S=new B,C=new B;let R=0;const P=(t-e)/n;for(let A=0;A<=s;A++){const x=[],_=A/s,b=_*(t-e)+e;for(let I=0;I<=r;I++){const U=I/r,N=U*l+o,F=Math.sin(N),D=Math.cos(N);C.x=b*F,C.y=-_*n+m,C.z=b*D,d.push(C.x,C.y,C.z),S.set(F,P,D).normalize(),f.push(S.x,S.y,S.z),h.push(U,1-_),x.push(g++)}v.push(x)}for(let A=0;A<r;A++)for(let x=0;x<s;x++){const _=v[x][A],b=v[x+1][A],I=v[x+1][A+1],U=v[x][A+1];(e>0||x!==0)&&(u.push(_,b,U),R+=3),(t>0||x!==s-1)&&(u.push(b,I,U),R+=3)}c.addGroup(p,R,0),p+=R}function E(S){const C=g,R=new Pe,P=new B;let A=0;const x=S===!0?e:t,_=S===!0?1:-1;for(let I=1;I<=r;I++)d.push(0,m*_,0),f.push(0,_,0),h.push(.5,.5),g++;const b=g;for(let I=0;I<=r;I++){const N=I/r*l+o,F=Math.cos(N),D=Math.sin(N);P.x=x*D,P.y=m*_,P.z=x*F,d.push(P.x,P.y,P.z),f.push(0,_,0),R.x=F*.5+.5,R.y=D*.5*_+.5,h.push(R.x,R.y),g++}for(let I=0;I<r;I++){const U=C+I,N=b+I;S===!0?u.push(N,N+1,U):u.push(N+1,N,U),A+=3}c.addGroup(p,A,S===!0?1:2),p+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ri(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Gr extends Ri{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Gr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Pn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let r=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===a)return r/(s-1);const u=n[r],f=n[r+1]-u,h=(a-u)/f;return(r+h)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new Pe:new B);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new B,r=[],s=[],a=[],o=new B,l=new ft;for(let h=0;h<=e;h++){const g=h/e;r[h]=this.getTangentAt(g,new B)}s[0]=new B,a[0]=new B;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),d=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let h=1;h<=e;h++){if(s[h]=s[h-1].clone(),a[h]=a[h-1].clone(),o.crossVectors(r[h-1],r[h]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(We(r[h-1].dot(r[h]),-1,1));s[h].applyMatrix4(l.makeRotationAxis(o,g))}a[h].crossVectors(r[h],s[h])}if(t===!0){let h=Math.acos(We(s[0].dot(s[e]),-1,1));h/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(h=-h);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],h*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class iu extends Pn{constructor(e=0,t=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Pe){const n=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,h=c-this.aY;l=f*u-h*d+this.aX,c=f*d+h*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Gh extends iu{constructor(e,t,n,r,s,a){super(e,t,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Wo(){let i=0,e=0,t=0,n=0;function r(s,a,o,l){i=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,d){let f=(a-s)/c-(o-s)/(c+u)+(o-a)/u,h=(o-a)/u-(l-a)/(u+d)+(l-o)/d;f*=u,h*=u,r(a,o,f,h)},calc:function(s){const a=s*s,o=a*s;return i+e*s+t*a+n*o}}}const vs=new B,va=new Wo,_a=new Wo,xa=new Wo;class ru extends Pn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new B){const n=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=r[(o-1)%s]:(vs.subVectors(r[0],r[1]).add(r[0]),c=vs);const d=r[o%s],f=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(vs.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=vs),this.curveType==="centripetal"||this.curveType==="chordal"){const h=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),h),v=Math.pow(d.distanceToSquared(f),h),m=Math.pow(f.distanceToSquared(u),h);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),va.initNonuniformCatmullRom(c.x,d.x,f.x,u.x,g,v,m),_a.initNonuniformCatmullRom(c.y,d.y,f.y,u.y,g,v,m),xa.initNonuniformCatmullRom(c.z,d.z,f.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(va.initCatmullRom(c.x,d.x,f.x,u.x,this.tension),_a.initCatmullRom(c.y,d.y,f.y,u.y,this.tension),xa.initCatmullRom(c.z,d.z,f.z,u.z,this.tension));return n.set(va.calc(l),_a.calc(l),xa.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new B().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Bc(i,e,t,n,r){const s=(n-e)*.5,a=(r-t)*.5,o=i*i,l=i*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*i+t}function Wh(i,e){const t=1-i;return t*t*e}function Xh(i,e){return 2*(1-i)*i*e}function qh(i,e){return i*i*e}function Lr(i,e,t,n){return Wh(i,e)+Xh(i,t)+qh(i,n)}function $h(i,e){const t=1-i;return t*t*t*e}function Yh(i,e){const t=1-i;return 3*t*t*i*e}function jh(i,e){return 3*(1-i)*i*i*e}function Jh(i,e){return i*i*i*e}function Ir(i,e,t,n,r){return $h(i,e)+Yh(i,t)+jh(i,n)+Jh(i,r)}class Kh extends Pn{constructor(e=new Pe,t=new Pe,n=new Pe,r=new Pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new Pe){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Ir(e,r.x,s.x,a.x,o.x),Ir(e,r.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Zh extends Pn{constructor(e=new B,t=new B,n=new B,r=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new B){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Ir(e,r.x,s.x,a.x,o.x),Ir(e,r.y,s.y,a.y,o.y),Ir(e,r.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Qh extends Pn{constructor(e=new Pe,t=new Pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Pe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class su extends Pn{constructor(e=new B,t=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new B){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new B){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ef extends Pn{constructor(e=new Pe,t=new Pe,n=new Pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Pe){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Lr(e,r.x,s.x,a.x),Lr(e,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class au extends Pn{constructor(e=new B,t=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new B){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Lr(e,r.x,s.x,a.x),Lr(e,r.y,s.y,a.y),Lr(e,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class tf extends Pn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Pe){const n=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],u=r[a>r.length-2?r.length-1:a+1],d=r[a>r.length-3?r.length-1:a+2];return n.set(Bc(o,l.x,c.x,u.x,d.x),Bc(o,l.y,c.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new Pe().fromArray(r))}return this}}var bo=Object.freeze({__proto__:null,ArcCurve:Gh,CatmullRomCurve3:ru,CubicBezierCurve:Kh,CubicBezierCurve3:Zh,EllipseCurve:iu,LineCurve:Qh,LineCurve3:su,QuadraticBezierCurve:ef,QuadraticBezierCurve3:au,SplineCurve:tf});class nf extends Pn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new bo[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new bo[r.type]().fromJSON(r))}return this}}class Wn extends dn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,d=e/o,f=t/l,h=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const T=p*f-a;for(let E=0;E<c;E++){const S=E*d-s;g.push(S,-T,0),v.push(0,0,1),m.push(E/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<o;T++){const E=T+c*p,S=T+c*(p+1),C=T+1+c*(p+1),R=T+1+c*p;h.push(E,S,R),h.push(S,C,R)}this.setIndex(h),this.setAttribute("position",new Et(g,3)),this.setAttribute("normal",new Et(v,3)),this.setAttribute("uv",new Et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wn(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ur extends dn{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new B,f=new B,h=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const T=[],E=p/n;let S=0;p===0&&a===0?S=.5/t:p===n&&l===Math.PI&&(S=-.5/t);for(let C=0;C<=t;C++){const R=C/t;d.x=-e*Math.cos(r+R*s)*Math.sin(a+E*o),d.y=e*Math.cos(a+E*o),d.z=e*Math.sin(r+R*s)*Math.sin(a+E*o),g.push(d.x,d.y,d.z),f.copy(d).normalize(),v.push(f.x,f.y,f.z),m.push(R+S,1-E),T.push(c++)}u.push(T)}for(let p=0;p<n;p++)for(let T=0;T<t;T++){const E=u[p][T+1],S=u[p][T],C=u[p+1][T],R=u[p+1][T+1];(p!==0||a>0)&&h.push(E,S,R),(p!==n-1||l<Math.PI)&&h.push(S,C,R)}this.setIndex(h),this.setAttribute("position",new Et(g,3)),this.setAttribute("normal",new Et(v,3)),this.setAttribute("uv",new Et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ur(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class pr extends dn{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const a=[],o=[],l=[],c=[],u=new B,d=new B,f=new B;for(let h=0;h<=n;h++)for(let g=0;g<=r;g++){const v=g/r*s,m=h/n*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(v),d.y=(e+t*Math.cos(m))*Math.sin(v),d.z=t*Math.sin(m),o.push(d.x,d.y,d.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),f.subVectors(d,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/r),c.push(h/n)}for(let h=1;h<=n;h++)for(let g=1;g<=r;g++){const v=(r+1)*h+g-1,m=(r+1)*(h-1)+g-1,p=(r+1)*(h-1)+g,T=(r+1)*h+g;a.push(v,m,T),a.push(m,p,T)}this.setIndex(a),this.setAttribute("position",new Et(o,3)),this.setAttribute("normal",new Et(l,3)),this.setAttribute("uv",new Et(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Is extends dn{constructor(e=new au(new B(-1,-1,0),new B(-1,1,0),new B(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};const a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new B,l=new B,c=new Pe;let u=new B;const d=[],f=[],h=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new Et(d,3)),this.setAttribute("normal",new Et(f,3)),this.setAttribute("uv",new Et(h,2));function v(){for(let E=0;E<t;E++)m(E);m(s===!1?t:0),T(),p()}function m(E){u=e.getPointAt(E/t,u);const S=a.normals[E],C=a.binormals[E];for(let R=0;R<=r;R++){const P=R/r*Math.PI*2,A=Math.sin(P),x=-Math.cos(P);l.x=x*S.x+A*C.x,l.y=x*S.y+A*C.y,l.z=x*S.z+A*C.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,d.push(o.x,o.y,o.z)}}function p(){for(let E=1;E<=t;E++)for(let S=1;S<=r;S++){const C=(r+1)*(E-1)+(S-1),R=(r+1)*E+(S-1),P=(r+1)*E+S,A=(r+1)*(E-1)+S;g.push(C,R,A),g.push(R,P,A)}}function T(){for(let E=0;E<=t;E++)for(let S=0;S<=r;S++)c.x=E/t,c.y=S/r,h.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Is(new bo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Sn extends jr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hl,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class rf extends jr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sf extends jr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ou extends Dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class cu extends ou{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ma=new ft,zc=new B,kc=new B;class af{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pe(512,512),this.mapType=Cn,this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Go,this._frameExtents=new Pe(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;zc.setFromMatrixPosition(e.matrixWorld),t.position.copy(zc),kc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(kc),t.updateMatrixWorld(),Ma.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ma,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ma)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class lu extends Jl{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class of extends af{constructor(){super(new lu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class uu extends ou{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new of}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class cf extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class lf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Hc(i,e,t,n){const r=uf(n);switch(t){case Bl:return i*e;case Fo:return i*e/r.components*r.byteLength;case Oo:return i*e/r.components*r.byteLength;case kl:return i*e*2/r.components*r.byteLength;case Bo:return i*e*2/r.components*r.byteLength;case zl:return i*e*3/r.components*r.byteLength;case Mn:return i*e*4/r.components*r.byteLength;case zo:return i*e*4/r.components*r.byteLength;case bs:case Es:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ts:case As:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ja:case Ka:return Math.max(i,16)*Math.max(e,8)/4;case Ya:case Ja:return Math.max(i,8)*Math.max(e,8)/2;case Za:case Qa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case eo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case to:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case no:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case io:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ro:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case so:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ao:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case oo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case co:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case lo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case uo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ho:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case fo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case po:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case mo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case go:case vo:case _o:return Math.ceil(i/4)*Math.ceil(e/4)*16;case xo:case Mo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case So:case yo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function uf(i){switch(i){case Cn:case Ul:return{byteLength:1,components:1};case Or:case Nl:case qr:return{byteLength:2,components:1};case Uo:case No:return{byteLength:2,components:4};case wi:case Io:case Tn:return{byteLength:4,components:1};case Fl:case Ol:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lo);function du(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function df(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),o.onUploadCallback();let h;if(c instanceof Float32Array)h=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=i.SHORT;else if(c instanceof Uint32Array)h=i.UNSIGNED_INT;else if(c instanceof Int32Array)h=i.INT;else if(c instanceof Int8Array)h=i.BYTE;else if(c instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((h,g)=>h.start-g.start);let f=0;for(let h=1;h<d.length;h++){const g=d[f],v=d[h];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,d[f]=v)}d.length=f+1;for(let h=0,g=d.length;h<g;h++){const v=d[h];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var hf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ff=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,pf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_f=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,xf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Sf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ef=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Tf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Af=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Df=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,If=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Uf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Nf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ff=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Of=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Bf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Xf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$f=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ep=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,np=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ip=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,rp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,sp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ap=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,op=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,up=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,dp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_p=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Sp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ep=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ap=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Cp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Pp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Dp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ip=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Up=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Np=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Op=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Hp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$p=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Yp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Jp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Kp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Qp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,em=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,tm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,im=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,am=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,um=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,_m=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,xm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Mm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ym=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Em=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Tm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Am=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Pm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Lm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Im=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Um=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Fm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Om=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,km=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Gm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:hf,alphahash_pars_fragment:ff,alphamap_fragment:pf,alphamap_pars_fragment:mf,alphatest_fragment:gf,alphatest_pars_fragment:vf,aomap_fragment:_f,aomap_pars_fragment:xf,batching_pars_vertex:Mf,batching_vertex:Sf,begin_vertex:yf,beginnormal_vertex:bf,bsdfs:Ef,iridescence_fragment:Tf,bumpmap_pars_fragment:Af,clipping_planes_fragment:wf,clipping_planes_pars_fragment:Cf,clipping_planes_pars_vertex:Rf,clipping_planes_vertex:Pf,color_fragment:Df,color_pars_fragment:Lf,color_pars_vertex:If,color_vertex:Uf,common:Nf,cube_uv_reflection_fragment:Ff,defaultnormal_vertex:Of,displacementmap_pars_vertex:Bf,displacementmap_vertex:zf,emissivemap_fragment:kf,emissivemap_pars_fragment:Hf,colorspace_fragment:Vf,colorspace_pars_fragment:Gf,envmap_fragment:Wf,envmap_common_pars_fragment:Xf,envmap_pars_fragment:qf,envmap_pars_vertex:$f,envmap_physical_pars_fragment:rp,envmap_vertex:Yf,fog_vertex:jf,fog_pars_vertex:Jf,fog_fragment:Kf,fog_pars_fragment:Zf,gradientmap_pars_fragment:Qf,lightmap_pars_fragment:ep,lights_lambert_fragment:tp,lights_lambert_pars_fragment:np,lights_pars_begin:ip,lights_toon_fragment:sp,lights_toon_pars_fragment:ap,lights_phong_fragment:op,lights_phong_pars_fragment:cp,lights_physical_fragment:lp,lights_physical_pars_fragment:up,lights_fragment_begin:dp,lights_fragment_maps:hp,lights_fragment_end:fp,logdepthbuf_fragment:pp,logdepthbuf_pars_fragment:mp,logdepthbuf_pars_vertex:gp,logdepthbuf_vertex:vp,map_fragment:_p,map_pars_fragment:xp,map_particle_fragment:Mp,map_particle_pars_fragment:Sp,metalnessmap_fragment:yp,metalnessmap_pars_fragment:bp,morphinstance_vertex:Ep,morphcolor_vertex:Tp,morphnormal_vertex:Ap,morphtarget_pars_vertex:wp,morphtarget_vertex:Cp,normal_fragment_begin:Rp,normal_fragment_maps:Pp,normal_pars_fragment:Dp,normal_pars_vertex:Lp,normal_vertex:Ip,normalmap_pars_fragment:Up,clearcoat_normal_fragment_begin:Np,clearcoat_normal_fragment_maps:Fp,clearcoat_pars_fragment:Op,iridescence_pars_fragment:Bp,opaque_fragment:zp,packing:kp,premultiplied_alpha_fragment:Hp,project_vertex:Vp,dithering_fragment:Gp,dithering_pars_fragment:Wp,roughnessmap_fragment:Xp,roughnessmap_pars_fragment:qp,shadowmap_pars_fragment:$p,shadowmap_pars_vertex:Yp,shadowmap_vertex:jp,shadowmask_pars_fragment:Jp,skinbase_vertex:Kp,skinning_pars_vertex:Zp,skinning_vertex:Qp,skinnormal_vertex:em,specularmap_fragment:tm,specularmap_pars_fragment:nm,tonemapping_fragment:im,tonemapping_pars_fragment:rm,transmission_fragment:sm,transmission_pars_fragment:am,uv_pars_fragment:om,uv_pars_vertex:cm,uv_vertex:lm,worldpos_vertex:um,background_vert:dm,background_frag:hm,backgroundCube_vert:fm,backgroundCube_frag:pm,cube_vert:mm,cube_frag:gm,depth_vert:vm,depth_frag:_m,distanceRGBA_vert:xm,distanceRGBA_frag:Mm,equirect_vert:Sm,equirect_frag:ym,linedashed_vert:bm,linedashed_frag:Em,meshbasic_vert:Tm,meshbasic_frag:Am,meshlambert_vert:wm,meshlambert_frag:Cm,meshmatcap_vert:Rm,meshmatcap_frag:Pm,meshnormal_vert:Dm,meshnormal_frag:Lm,meshphong_vert:Im,meshphong_frag:Um,meshphysical_vert:Nm,meshphysical_frag:Fm,meshtoon_vert:Om,meshtoon_frag:Bm,points_vert:zm,points_frag:km,shadow_vert:Hm,shadow_frag:Vm,sprite_vert:Gm,sprite_frag:Wm},le={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},En={basic:{uniforms:kt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:kt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:kt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:kt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:kt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:kt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:kt([le.points,le.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:kt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:kt([le.common,le.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:kt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:kt([le.sprite,le.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:kt([le.common,le.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:kt([le.lights,le.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};En.physical={uniforms:kt([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const _s={r:0,b:0,g:0},pi=new Rn,Xm=new ft;function qm(i,e,t,n,r,s,a){const o=new Qe(0);let l=s===!0?0:1,c,u,d=null,f=0,h=null;function g(E){let S=E.isScene===!0?E.background:null;return S&&S.isTexture&&(S=(E.backgroundBlurriness>0?t:e).get(S)),S}function v(E){let S=!1;const C=g(E);C===null?p(o,l):C&&C.isColor&&(p(C,1),S=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,S){const C=g(S);C&&(C.isCubeTexture||C.mapping===Bs)?(u===void 0&&(u=new $e(new qe(1,1,1),new ai({name:"BackgroundCubeMaterial",uniforms:lr(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,P,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),pi.copy(S.backgroundRotation),pi.x*=-1,pi.y*=-1,pi.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Xm.makeRotationFromEuler(pi)),u.material.toneMapped=nt.getTransfer(C.colorSpace)!==ot,(d!==C||f!==C.version||h!==i.toneMapping)&&(u.material.needsUpdate=!0,d=C,f=C.version,h=i.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new $e(new Wn(2,2),new ai({name:"BackgroundMaterial",uniforms:lr(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=nt.getTransfer(C.colorSpace)!==ot,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(d!==C||f!==C.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,d=C,f=C.version,h=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,S){E.getRGB(_s,jl(i)),n.buffers.color.setClear(_s.r,_s.g,_s.b,S,a)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,S=1){o.set(E),l=S,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(o,l)},render:v,addToRenderList:m,dispose:T}}function $m(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,a=!1;function o(_,b,I,U,N){let F=!1;const D=d(U,I,b);s!==D&&(s=D,c(s.object)),F=h(_,U,I,N),F&&g(_,U,I,N),N!==null&&e.update(N,i.ELEMENT_ARRAY_BUFFER),(F||a)&&(a=!1,S(_,b,I,U),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return i.createVertexArray()}function c(_){return i.bindVertexArray(_)}function u(_){return i.deleteVertexArray(_)}function d(_,b,I){const U=I.wireframe===!0;let N=n[_.id];N===void 0&&(N={},n[_.id]=N);let F=N[b.id];F===void 0&&(F={},N[b.id]=F);let D=F[U];return D===void 0&&(D=f(l()),F[U]=D),D}function f(_){const b=[],I=[],U=[];for(let N=0;N<t;N++)b[N]=0,I[N]=0,U[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:I,attributeDivisors:U,object:_,attributes:{},index:null}}function h(_,b,I,U){const N=s.attributes,F=b.attributes;let D=0;const q=I.getAttributes();for(const z in q)if(q[z].location>=0){const te=N[z];let ce=F[z];if(ce===void 0&&(z==="instanceMatrix"&&_.instanceMatrix&&(ce=_.instanceMatrix),z==="instanceColor"&&_.instanceColor&&(ce=_.instanceColor)),te===void 0||te.attribute!==ce||ce&&te.data!==ce.data)return!0;D++}return s.attributesNum!==D||s.index!==U}function g(_,b,I,U){const N={},F=b.attributes;let D=0;const q=I.getAttributes();for(const z in q)if(q[z].location>=0){let te=F[z];te===void 0&&(z==="instanceMatrix"&&_.instanceMatrix&&(te=_.instanceMatrix),z==="instanceColor"&&_.instanceColor&&(te=_.instanceColor));const ce={};ce.attribute=te,te&&te.data&&(ce.data=te.data),N[z]=ce,D++}s.attributes=N,s.attributesNum=D,s.index=U}function v(){const _=s.newAttributes;for(let b=0,I=_.length;b<I;b++)_[b]=0}function m(_){p(_,0)}function p(_,b){const I=s.newAttributes,U=s.enabledAttributes,N=s.attributeDivisors;I[_]=1,U[_]===0&&(i.enableVertexAttribArray(_),U[_]=1),N[_]!==b&&(i.vertexAttribDivisor(_,b),N[_]=b)}function T(){const _=s.newAttributes,b=s.enabledAttributes;for(let I=0,U=b.length;I<U;I++)b[I]!==_[I]&&(i.disableVertexAttribArray(I),b[I]=0)}function E(_,b,I,U,N,F,D){D===!0?i.vertexAttribIPointer(_,b,I,N,F):i.vertexAttribPointer(_,b,I,U,N,F)}function S(_,b,I,U){v();const N=U.attributes,F=I.getAttributes(),D=b.defaultAttributeValues;for(const q in F){const z=F[q];if(z.location>=0){let K=N[q];if(K===void 0&&(q==="instanceMatrix"&&_.instanceMatrix&&(K=_.instanceMatrix),q==="instanceColor"&&_.instanceColor&&(K=_.instanceColor)),K!==void 0){const te=K.normalized,ce=K.itemSize,Ne=e.get(K);if(Ne===void 0)continue;const st=Ne.buffer,lt=Ne.type,it=Ne.bytesPerElement,J=lt===i.INT||lt===i.UNSIGNED_INT||K.gpuType===Io;if(K.isInterleavedBufferAttribute){const ee=K.data,ge=ee.stride,Fe=K.offset;if(ee.isInstancedInterleavedBuffer){for(let Ae=0;Ae<z.locationSize;Ae++)p(z.location+Ae,ee.meshPerAttribute);_.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Ae=0;Ae<z.locationSize;Ae++)m(z.location+Ae);i.bindBuffer(i.ARRAY_BUFFER,st);for(let Ae=0;Ae<z.locationSize;Ae++)E(z.location+Ae,ce/z.locationSize,lt,te,ge*it,(Fe+ce/z.locationSize*Ae)*it,J)}else{if(K.isInstancedBufferAttribute){for(let ee=0;ee<z.locationSize;ee++)p(z.location+ee,K.meshPerAttribute);_.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ee=0;ee<z.locationSize;ee++)m(z.location+ee);i.bindBuffer(i.ARRAY_BUFFER,st);for(let ee=0;ee<z.locationSize;ee++)E(z.location+ee,ce/z.locationSize,lt,te,ce*it,ce/z.locationSize*ee*it,J)}}else if(D!==void 0){const te=D[q];if(te!==void 0)switch(te.length){case 2:i.vertexAttrib2fv(z.location,te);break;case 3:i.vertexAttrib3fv(z.location,te);break;case 4:i.vertexAttrib4fv(z.location,te);break;default:i.vertexAttrib1fv(z.location,te)}}}}T()}function C(){A();for(const _ in n){const b=n[_];for(const I in b){const U=b[I];for(const N in U)u(U[N].object),delete U[N];delete b[I]}delete n[_]}}function R(_){if(n[_.id]===void 0)return;const b=n[_.id];for(const I in b){const U=b[I];for(const N in U)u(U[N].object),delete U[N];delete b[I]}delete n[_.id]}function P(_){for(const b in n){const I=n[b];if(I[_.id]===void 0)continue;const U=I[_.id];for(const N in U)u(U[N].object),delete U[N];delete I[_.id]}}function A(){x(),a=!0,s!==r&&(s=r,c(s.object))}function x(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:A,resetDefaultState:x,dispose:C,releaseStatesOfGeometry:R,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:m,disableUnusedAttributes:T}}function Ym(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function o(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let h=0;for(let g=0;g<d;g++)h+=u[g];t.update(h,n,1)}function l(c,u,d,f){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<c.length;g++)a(c[g],u[g],f[g]);else{h.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v]*f[v];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function jm(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(P){return!(P!==Mn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const A=P===qr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Cn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Tn&&!A)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:E,maxFragmentUniforms:S,vertexTextures:C,maxSamples:R}}function Jm(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new _i,o=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||n!==0||r;return r=f,n=d.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const T=s?0:n,E=T*4;let S=p.clippingState||null;l.value=S,S=u(g,f,E,h);for(let C=0;C!==E;++C)S[C]=t[C];p.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,h,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=h+v*4,T=f.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,S=h;E!==v;++E,S+=4)a.copy(d[E]).applyMatrix4(T,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Km(i){let e=new WeakMap;function t(a,o){return o===Wa?a.mapping=ar:o===Xa&&(a.mapping=or),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Wa||o===Xa)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Fh(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Zi=4,Vc=[.125,.215,.35,.446,.526,.582],yi=20,Sa=new lu,Gc=new Qe;let ya=null,ba=0,Ea=0,Ta=!1;const xi=(1+Math.sqrt(5))/2,$i=1/xi,Wc=[new B(-xi,$i,0),new B(xi,$i,0),new B(-$i,0,xi),new B($i,0,xi),new B(0,xi,-$i),new B(0,xi,$i),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],Zm=new B;class Xc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=Zm}=s;ya=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),Ea=this._renderer.getActiveMipmapLevel(),Ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$c(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ya,ba,Ea),this._renderer.xr.enabled=Ta,e.scissorTest=!1,xs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ar||e.mapping===or?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ya=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),Ea=this._renderer.getActiveMipmapLevel(),Ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:qr,format:Mn,colorSpace:cr,depthBuffer:!1},r=qc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qc(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qm(s)),this._blurMaterial=eg(s,e,t)}return r}_compileMaterial(e){const t=new $e(this._lodPlanes[0],e);this._renderer.compile(t,Sa)}_sceneToCubeUV(e,t,n,r,s){const l=new Qt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(Gc),d.toneMapping=ti,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null));const v=new ni({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1}),m=new $e(new qe,v);let p=!1;const T=e.background;T?T.isColor&&(v.color.copy(T),e.background=null,p=!0):(v.color.copy(Gc),p=!0);for(let E=0;E<6;E++){const S=E%3;S===0?(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[E],s.y,s.z)):S===1?(l.up.set(0,0,c[E]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[E],s.z)):(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[E]));const C=this._cubeSize;xs(r,S*C,E>2?C:0,C,C),d.setRenderTarget(r),p&&d.render(m,l),d.render(e,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=T}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===ar||e.mapping===or;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$c());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new $e(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;xs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Sa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Wc[(r-s-1)%Wc.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new $e(this._lodPlanes[r],c),f=c.uniforms,h=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*yi-1),v=s/g,m=isFinite(s)?1+Math.floor(u*v):yi;m>yi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${yi}`);const p=[];let T=0;for(let P=0;P<yi;++P){const A=P/v,x=Math.exp(-A*A/2);p.push(x),P===0?T+=x:P<m&&(T+=2*x)}for(let P=0;P<p.length;P++)p[P]=p[P]/T;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-n;const S=this._sizeLods[r],C=3*S*(r>E-Zi?r-E+Zi:0),R=4*(this._cubeSize-S);xs(t,C,R,3*S,2*S),l.setRenderTarget(t),l.render(d,Sa)}}function Qm(i){const e=[],t=[],n=[];let r=i;const s=i-Zi+1+Vc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-Zi?l=Vc[a-i+Zi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,g=6,v=3,m=2,p=1,T=new Float32Array(v*g*h),E=new Float32Array(m*g*h),S=new Float32Array(p*g*h);for(let R=0;R<h;R++){const P=R%3*2/3-1,A=R>2?0:-1,x=[P,A,0,P+2/3,A,0,P+2/3,A+1,0,P,A,0,P+2/3,A+1,0,P,A+1,0];T.set(x,v*g*R),E.set(f,m*g*R);const _=[R,R,R,R,R,R];S.set(_,p*g*R)}const C=new dn;C.setAttribute("position",new un(T,v)),C.setAttribute("uv",new un(E,m)),C.setAttribute("faceIndex",new un(S,p)),e.push(C),r>Zi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function qc(i,e,t){const n=new Ci(i,e,t);return n.texture.mapping=Bs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xs(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function eg(i,e,t){const n=new Float32Array(yi),r=new B(0,1,0);return new ai({name:"SphericalGaussianBlur",defines:{n:yi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function $c(){return new ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Yc(){return new ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Xo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function tg(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Wa||l===Xa,u=l===ar||l===or;if(c||u){let d=e.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Xc(i)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const h=o.image;return c&&h&&h.height>0||u&&h&&r(h)?(t===null&&(t=new Xc(i)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function ng(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Vr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function ig(i,e,t,n){const r={},s=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete r[f.id];const h=s.get(f);h&&(e.remove(h),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const h in f)e.update(f[h],i.ARRAY_BUFFER)}function c(d){const f=[],h=d.index,g=d.attributes.position;let v=0;if(h!==null){const T=h.array;v=h.version;for(let E=0,S=T.length;E<S;E+=3){const C=T[E+0],R=T[E+1],P=T[E+2];f.push(C,R,R,P,P,C)}}else if(g!==void 0){const T=g.array;v=g.version;for(let E=0,S=T.length/3-1;E<S;E+=3){const C=E+0,R=E+1,P=E+2;f.push(C,R,R,P,P,C)}}else return;const m=new(Gl(f)?Yl:$l)(f,1);m.version=v;const p=s.get(d);p&&e.remove(p),s.set(d,m)}function u(d){const f=s.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function rg(i,e,t){let n;function r(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,h){i.drawElements(n,h,s,f*a),t.update(h,n,1)}function c(f,h,g){g!==0&&(i.drawElementsInstanced(n,h,s,f*a,g),t.update(h,n,g))}function u(f,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];t.update(m,n,1)}function d(f,h,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/a,h[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,h,0,s,f,0,v,0,g);let p=0;for(let T=0;T<g;T++)p+=h[T]*v[T];t.update(p,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function sg(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function ag(i,e,t){const n=new WeakMap,r=new xt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==d){let x=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",x)};f!==void 0&&f.texture.dispose();const h=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let E=0;h===!0&&(E=1),g===!0&&(E=2),v===!0&&(E=3);let S=o.attributes.position.count*E,C=1;S>e.maxTextureSize&&(C=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const R=new Float32Array(S*C*4*d),P=new Wl(R,S,C,d);P.type=Tn,P.needsUpdate=!0;const A=E*4;for(let _=0;_<d;_++){const b=m[_],I=p[_],U=T[_],N=S*C*4*_;for(let F=0;F<b.count;F++){const D=F*A;h===!0&&(r.fromBufferAttribute(b,F),R[N+D+0]=r.x,R[N+D+1]=r.y,R[N+D+2]=r.z,R[N+D+3]=0),g===!0&&(r.fromBufferAttribute(I,F),R[N+D+4]=r.x,R[N+D+5]=r.y,R[N+D+6]=r.z,R[N+D+7]=0),v===!0&&(r.fromBufferAttribute(U,F),R[N+D+8]=r.x,R[N+D+9]=r.y,R[N+D+10]=r.z,R[N+D+11]=U.itemSize===4?r.w:1)}}f={count:d,texture:P,size:new Pe(S,C)},n.set(o,f),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let h=0;for(let v=0;v<c.length;v++)h+=c[v];const g=o.morphTargetsRelative?1:1-h;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function og(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const hu=new Ot,jc=new tu(1,1),fu=new Wl,pu=new _h,mu=new Kl,Jc=[],Kc=[],Zc=new Float32Array(16),Qc=new Float32Array(9),el=new Float32Array(4);function mr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Jc[r];if(s===void 0&&(s=new Float32Array(r),Jc[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Tt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function At(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function zs(i,e){let t=Kc[e];t===void 0&&(t=new Int32Array(e),Kc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function cg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function lg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2fv(this.addr,e),At(t,e)}}function ug(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;i.uniform3fv(this.addr,e),At(t,e)}}function dg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4fv(this.addr,e),At(t,e)}}function hg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;el.set(n),i.uniformMatrix2fv(this.addr,!1,el),At(t,n)}}function fg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;Qc.set(n),i.uniformMatrix3fv(this.addr,!1,Qc),At(t,n)}}function pg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;Zc.set(n),i.uniformMatrix4fv(this.addr,!1,Zc),At(t,n)}}function mg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function gg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2iv(this.addr,e),At(t,e)}}function vg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;i.uniform3iv(this.addr,e),At(t,e)}}function _g(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4iv(this.addr,e),At(t,e)}}function xg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Mg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2uiv(this.addr,e),At(t,e)}}function Sg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;i.uniform3uiv(this.addr,e),At(t,e)}}function yg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4uiv(this.addr,e),At(t,e)}}function bg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(jc.compareFunction=Vl,s=jc):s=hu,t.setTexture2D(e||s,r)}function Eg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||pu,r)}function Tg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||mu,r)}function Ag(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||fu,r)}function wg(i){switch(i){case 5126:return cg;case 35664:return lg;case 35665:return ug;case 35666:return dg;case 35674:return hg;case 35675:return fg;case 35676:return pg;case 5124:case 35670:return mg;case 35667:case 35671:return gg;case 35668:case 35672:return vg;case 35669:case 35673:return _g;case 5125:return xg;case 36294:return Mg;case 36295:return Sg;case 36296:return yg;case 35678:case 36198:case 36298:case 36306:case 35682:return bg;case 35679:case 36299:case 36307:return Eg;case 35680:case 36300:case 36308:case 36293:return Tg;case 36289:case 36303:case 36311:case 36292:return Ag}}function Cg(i,e){i.uniform1fv(this.addr,e)}function Rg(i,e){const t=mr(e,this.size,2);i.uniform2fv(this.addr,t)}function Pg(i,e){const t=mr(e,this.size,3);i.uniform3fv(this.addr,t)}function Dg(i,e){const t=mr(e,this.size,4);i.uniform4fv(this.addr,t)}function Lg(i,e){const t=mr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ig(i,e){const t=mr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Ug(i,e){const t=mr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Ng(i,e){i.uniform1iv(this.addr,e)}function Fg(i,e){i.uniform2iv(this.addr,e)}function Og(i,e){i.uniform3iv(this.addr,e)}function Bg(i,e){i.uniform4iv(this.addr,e)}function zg(i,e){i.uniform1uiv(this.addr,e)}function kg(i,e){i.uniform2uiv(this.addr,e)}function Hg(i,e){i.uniform3uiv(this.addr,e)}function Vg(i,e){i.uniform4uiv(this.addr,e)}function Gg(i,e,t){const n=this.cache,r=e.length,s=zs(t,r);Tt(n,s)||(i.uniform1iv(this.addr,s),At(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||hu,s[a])}function Wg(i,e,t){const n=this.cache,r=e.length,s=zs(t,r);Tt(n,s)||(i.uniform1iv(this.addr,s),At(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||pu,s[a])}function Xg(i,e,t){const n=this.cache,r=e.length,s=zs(t,r);Tt(n,s)||(i.uniform1iv(this.addr,s),At(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||mu,s[a])}function qg(i,e,t){const n=this.cache,r=e.length,s=zs(t,r);Tt(n,s)||(i.uniform1iv(this.addr,s),At(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||fu,s[a])}function $g(i){switch(i){case 5126:return Cg;case 35664:return Rg;case 35665:return Pg;case 35666:return Dg;case 35674:return Lg;case 35675:return Ig;case 35676:return Ug;case 5124:case 35670:return Ng;case 35667:case 35671:return Fg;case 35668:case 35672:return Og;case 35669:case 35673:return Bg;case 5125:return zg;case 36294:return kg;case 36295:return Hg;case 36296:return Vg;case 35678:case 36198:case 36298:case 36306:case 35682:return Gg;case 35679:case 36299:case 36307:return Wg;case 35680:case 36300:case 36308:case 36293:return Xg;case 36289:case 36303:case 36311:case 36292:return qg}}class Yg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=wg(t.type)}}class jg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$g(t.type)}}class Jg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Aa=/(\w+)(\])?(\[|\.)?/g;function tl(i,e){i.seq.push(e),i.map[e.id]=e}function Kg(i,e,t){const n=i.name,r=n.length;for(Aa.lastIndex=0;;){const s=Aa.exec(n),a=Aa.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){tl(t,c===void 0?new Yg(o,i,e):new jg(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new Jg(o),tl(t,d)),t=d}}}class ws{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Kg(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function nl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Zg=37297;let Qg=0;function e0(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const il=new He;function t0(i){nt._getMatrix(il,nt.workingColorSpace,i);const e=`mat3( ${il.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(i)){case Ps:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function rl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+e0(i.getShaderSource(e),o)}else return s}function n0(i,e){const t=t0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function i0(i,e){let t;switch(e){case Ld:t="Linear";break;case Id:t="Reinhard";break;case Ud:t="Cineon";break;case Ll:t="ACESFilmic";break;case Fd:t="AgX";break;case Od:t="Neutral";break;case Nd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ms=new B;function r0(){nt.getLuminanceCoefficients(Ms);const i=Ms.x.toFixed(4),e=Ms.y.toFixed(4),t=Ms.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function s0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wr).join(`
`)}function a0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function o0(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function wr(i){return i!==""}function sl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function al(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const c0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Eo(i){return i.replace(c0,u0)}const l0=new Map;function u0(i,e){let t=Ge[e];if(t===void 0){const n=l0.get(e);if(n!==void 0)t=Ge[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Eo(t)}const d0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ol(i){return i.replace(d0,h0)}function h0(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function cl(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function f0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Rl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Pl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Bn&&(e="SHADOWMAP_TYPE_VSM"),e}function p0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ar:case or:e="ENVMAP_TYPE_CUBE";break;case Bs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function m0(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===or&&(e="ENVMAP_MODE_REFRACTION"),e}function g0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Dl:e="ENVMAP_BLENDING_MULTIPLY";break;case Pd:e="ENVMAP_BLENDING_MIX";break;case Dd:e="ENVMAP_BLENDING_ADD";break}return e}function v0(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function _0(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=f0(t),c=p0(t),u=m0(t),d=g0(t),f=v0(t),h=s0(t),g=a0(s),v=r.createProgram();let m,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(wr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(wr).join(`
`),p.length>0&&(p+=`
`)):(m=[cl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wr).join(`
`),p=[cl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ti?"#define TONE_MAPPING":"",t.toneMapping!==ti?Ge.tonemapping_pars_fragment:"",t.toneMapping!==ti?i0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,n0("linearToOutputTexel",t.outputColorSpace),r0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wr).join(`
`)),a=Eo(a),a=sl(a,t),a=al(a,t),o=Eo(o),o=sl(o,t),o=al(o,t),a=ol(a),o=ol(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===mc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===mc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=T+m+a,S=T+p+o,C=nl(r,r.VERTEX_SHADER,E),R=nl(r,r.FRAGMENT_SHADER,S);r.attachShader(v,C),r.attachShader(v,R),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function P(b){if(i.debug.checkShaderErrors){const I=r.getProgramInfoLog(v)||"",U=r.getShaderInfoLog(C)||"",N=r.getShaderInfoLog(R)||"",F=I.trim(),D=U.trim(),q=N.trim();let z=!0,K=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,C,R);else{const te=rl(r,C,"vertex"),ce=rl(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+F+`
`+te+`
`+ce)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(D===""||q==="")&&(K=!1);K&&(b.diagnostics={runnable:z,programLog:F,vertexShader:{log:D,prefix:m},fragmentShader:{log:q,prefix:p}})}r.deleteShader(C),r.deleteShader(R),A=new ws(r,v),x=o0(r,v)}let A;this.getUniforms=function(){return A===void 0&&P(this),A};let x;this.getAttributes=function(){return x===void 0&&P(this),x};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(v,Zg)),_},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Qg++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=R,this}let x0=0;class M0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new S0(e),t.set(e,n)),n}}class S0{constructor(e){this.id=x0++,this.code=e,this.usedTimes=0}}function y0(i,e,t,n,r,s,a){const o=new Xl,l=new M0,c=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let h=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,_,b,I,U){const N=I.fog,F=U.geometry,D=x.isMeshStandardMaterial?I.environment:null,q=(x.isMeshStandardMaterial?t:e).get(x.envMap||D),z=q&&q.mapping===Bs?q.image.height:null,K=g[x.type];x.precision!==null&&(h=r.getMaxPrecision(x.precision),h!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const te=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ce=te!==void 0?te.length:0;let Ne=0;F.morphAttributes.position!==void 0&&(Ne=1),F.morphAttributes.normal!==void 0&&(Ne=2),F.morphAttributes.color!==void 0&&(Ne=3);let st,lt,it,J;if(K){const rt=En[K];st=rt.vertexShader,lt=rt.fragmentShader}else st=x.vertexShader,lt=x.fragmentShader,l.update(x),it=l.getVertexShaderID(x),J=l.getFragmentShaderID(x);const ee=i.getRenderTarget(),ge=i.state.buffers.depth.getReversed(),Fe=U.isInstancedMesh===!0,Ae=U.isBatchedMesh===!0,je=!!x.map,Lt=!!x.matcap,L=!!q,pt=!!x.aoMap,ze=!!x.lightMap,Ie=!!x.bumpMap,xe=!!x.normalMap,mt=!!x.displacementMap,Me=!!x.emissiveMap,Ve=!!x.metalnessMap,wt=!!x.roughnessMap,Mt=x.anisotropy>0,w=x.clearcoat>0,M=x.dispersion>0,V=x.iridescence>0,Y=x.sheen>0,Q=x.transmission>0,$=Mt&&!!x.anisotropyMap,Te=w&&!!x.clearcoatMap,ae=w&&!!x.clearcoatNormalMap,Se=w&&!!x.clearcoatRoughnessMap,be=V&&!!x.iridescenceMap,re=V&&!!x.iridescenceThicknessMap,he=Y&&!!x.sheenColorMap,Le=Y&&!!x.sheenRoughnessMap,Ee=!!x.specularMap,ue=!!x.specularColorMap,ke=!!x.specularIntensityMap,O=Q&&!!x.transmissionMap,se=Q&&!!x.thicknessMap,oe=!!x.gradientMap,me=!!x.alphaMap,ne=x.alphaTest>0,Z=!!x.alphaHash,_e=!!x.extensions;let Oe=ti;x.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Oe=i.toneMapping);const ut={shaderID:K,shaderType:x.type,shaderName:x.name,vertexShader:st,fragmentShader:lt,defines:x.defines,customVertexShaderID:it,customFragmentShaderID:J,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:Ae,batchingColor:Ae&&U._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&U.instanceColor!==null,instancingMorph:Fe&&U.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ee===null?i.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:cr,alphaToCoverage:!!x.alphaToCoverage,map:je,matcap:Lt,envMap:L,envMapMode:L&&q.mapping,envMapCubeUVHeight:z,aoMap:pt,lightMap:ze,bumpMap:Ie,normalMap:xe,displacementMap:f&&mt,emissiveMap:Me,normalMapObjectSpace:xe&&x.normalMapType===Hd,normalMapTangentSpace:xe&&x.normalMapType===Hl,metalnessMap:Ve,roughnessMap:wt,anisotropy:Mt,anisotropyMap:$,clearcoat:w,clearcoatMap:Te,clearcoatNormalMap:ae,clearcoatRoughnessMap:Se,dispersion:M,iridescence:V,iridescenceMap:be,iridescenceThicknessMap:re,sheen:Y,sheenColorMap:he,sheenRoughnessMap:Le,specularMap:Ee,specularColorMap:ue,specularIntensityMap:ke,transmission:Q,transmissionMap:O,thicknessMap:se,gradientMap:oe,opaque:x.transparent===!1&&x.blending===tr&&x.alphaToCoverage===!1,alphaMap:me,alphaTest:ne,alphaHash:Z,combine:x.combine,mapUv:je&&v(x.map.channel),aoMapUv:pt&&v(x.aoMap.channel),lightMapUv:ze&&v(x.lightMap.channel),bumpMapUv:Ie&&v(x.bumpMap.channel),normalMapUv:xe&&v(x.normalMap.channel),displacementMapUv:mt&&v(x.displacementMap.channel),emissiveMapUv:Me&&v(x.emissiveMap.channel),metalnessMapUv:Ve&&v(x.metalnessMap.channel),roughnessMapUv:wt&&v(x.roughnessMap.channel),anisotropyMapUv:$&&v(x.anisotropyMap.channel),clearcoatMapUv:Te&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:ae&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:re&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:he&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:Le&&v(x.sheenRoughnessMap.channel),specularMapUv:Ee&&v(x.specularMap.channel),specularColorMapUv:ue&&v(x.specularColorMap.channel),specularIntensityMapUv:ke&&v(x.specularIntensityMap.channel),transmissionMapUv:O&&v(x.transmissionMap.channel),thicknessMapUv:se&&v(x.thicknessMap.channel),alphaMapUv:me&&v(x.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(xe||Mt),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!F.attributes.uv&&(je||me),fog:!!N,useFog:x.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ge,skinning:U.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:Ne,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&b.length>0,shadowMapType:i.shadowMap.type,toneMapping:Oe,decodeVideoTexture:je&&x.map.isVideoTexture===!0&&nt.getTransfer(x.map.colorSpace)===ot,decodeVideoTextureEmissive:Me&&x.emissiveMap.isVideoTexture===!0&&nt.getTransfer(x.emissiveMap.colorSpace)===ot,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===zn,flipSided:x.side===$t,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:_e&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&x.extensions.multiDraw===!0||Ae)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ut.vertexUv1s=c.has(1),ut.vertexUv2s=c.has(2),ut.vertexUv3s=c.has(3),c.clear(),ut}function p(x){const _=[];if(x.shaderID?_.push(x.shaderID):(_.push(x.customVertexShaderID),_.push(x.customFragmentShaderID)),x.defines!==void 0)for(const b in x.defines)_.push(b),_.push(x.defines[b]);return x.isRawShaderMaterial===!1&&(T(_,x),E(_,x),_.push(i.outputColorSpace)),_.push(x.customProgramCacheKey),_.join()}function T(x,_){x.push(_.precision),x.push(_.outputColorSpace),x.push(_.envMapMode),x.push(_.envMapCubeUVHeight),x.push(_.mapUv),x.push(_.alphaMapUv),x.push(_.lightMapUv),x.push(_.aoMapUv),x.push(_.bumpMapUv),x.push(_.normalMapUv),x.push(_.displacementMapUv),x.push(_.emissiveMapUv),x.push(_.metalnessMapUv),x.push(_.roughnessMapUv),x.push(_.anisotropyMapUv),x.push(_.clearcoatMapUv),x.push(_.clearcoatNormalMapUv),x.push(_.clearcoatRoughnessMapUv),x.push(_.iridescenceMapUv),x.push(_.iridescenceThicknessMapUv),x.push(_.sheenColorMapUv),x.push(_.sheenRoughnessMapUv),x.push(_.specularMapUv),x.push(_.specularColorMapUv),x.push(_.specularIntensityMapUv),x.push(_.transmissionMapUv),x.push(_.thicknessMapUv),x.push(_.combine),x.push(_.fogExp2),x.push(_.sizeAttenuation),x.push(_.morphTargetsCount),x.push(_.morphAttributeCount),x.push(_.numDirLights),x.push(_.numPointLights),x.push(_.numSpotLights),x.push(_.numSpotLightMaps),x.push(_.numHemiLights),x.push(_.numRectAreaLights),x.push(_.numDirLightShadows),x.push(_.numPointLightShadows),x.push(_.numSpotLightShadows),x.push(_.numSpotLightShadowsWithMaps),x.push(_.numLightProbes),x.push(_.shadowMapType),x.push(_.toneMapping),x.push(_.numClippingPlanes),x.push(_.numClipIntersection),x.push(_.depthPacking)}function E(x,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),_.gradientMap&&o.enable(22),x.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reversedDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),x.push(o.mask)}function S(x){const _=g[x.type];let b;if(_){const I=En[_];b=Lh.clone(I.uniforms)}else b=x.uniforms;return b}function C(x,_){let b;for(let I=0,U=u.length;I<U;I++){const N=u[I];if(N.cacheKey===_){b=N,++b.usedTimes;break}}return b===void 0&&(b=new _0(i,_,x,s),u.push(b)),b}function R(x){if(--x.usedTimes===0){const _=u.indexOf(x);u[_]=u[u.length-1],u.pop(),x.destroy()}}function P(x){l.remove(x)}function A(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:C,releaseProgram:R,releaseShaderCache:P,programs:u,dispose:A}}function b0(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function E0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ll(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ul(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(d,f,h,g,v,m){let p=i[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:h,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},i[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=h,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=v,p.group=m),e++,p}function o(d,f,h,g,v,m){const p=a(d,f,h,g,v,m);h.transmission>0?n.push(p):h.transparent===!0?r.push(p):t.push(p)}function l(d,f,h,g,v,m){const p=a(d,f,h,g,v,m);h.transmission>0?n.unshift(p):h.transparent===!0?r.unshift(p):t.unshift(p)}function c(d,f){t.length>1&&t.sort(d||E0),n.length>1&&n.sort(f||ll),r.length>1&&r.sort(f||ll)}function u(){for(let d=e,f=i.length;d<f;d++){const h=i[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function T0(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new ul,i.set(n,[a])):r>=s.length?(a=new ul,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function A0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new Qe};break;case"SpotLight":t={position:new B,direction:new B,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new B,halfWidth:new B,halfHeight:new B};break}return i[e.id]=t,t}}}function w0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let C0=0;function R0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function P0(i){const e=new A0,t=w0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);const r=new B,s=new ft,a=new ft;function o(c){let u=0,d=0,f=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let h=0,g=0,v=0,m=0,p=0,T=0,E=0,S=0,C=0,R=0,P=0;c.sort(R0);for(let x=0,_=c.length;x<_;x++){const b=c[x],I=b.color,U=b.intensity,N=b.distance,F=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)u+=I.r*U,d+=I.g*U,f+=I.b*U;else if(b.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(b.sh.coefficients[D],U);P++}else if(b.isDirectionalLight){const D=e.get(b);if(D.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const q=b.shadow,z=t.get(b);z.shadowIntensity=q.intensity,z.shadowBias=q.bias,z.shadowNormalBias=q.normalBias,z.shadowRadius=q.radius,z.shadowMapSize=q.mapSize,n.directionalShadow[h]=z,n.directionalShadowMap[h]=F,n.directionalShadowMatrix[h]=b.shadow.matrix,T++}n.directional[h]=D,h++}else if(b.isSpotLight){const D=e.get(b);D.position.setFromMatrixPosition(b.matrixWorld),D.color.copy(I).multiplyScalar(U),D.distance=N,D.coneCos=Math.cos(b.angle),D.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),D.decay=b.decay,n.spot[v]=D;const q=b.shadow;if(b.map&&(n.spotLightMap[C]=b.map,C++,q.updateMatrices(b),b.castShadow&&R++),n.spotLightMatrix[v]=q.matrix,b.castShadow){const z=t.get(b);z.shadowIntensity=q.intensity,z.shadowBias=q.bias,z.shadowNormalBias=q.normalBias,z.shadowRadius=q.radius,z.shadowMapSize=q.mapSize,n.spotShadow[v]=z,n.spotShadowMap[v]=F,S++}v++}else if(b.isRectAreaLight){const D=e.get(b);D.color.copy(I).multiplyScalar(U),D.halfWidth.set(b.width*.5,0,0),D.halfHeight.set(0,b.height*.5,0),n.rectArea[m]=D,m++}else if(b.isPointLight){const D=e.get(b);if(D.color.copy(b.color).multiplyScalar(b.intensity),D.distance=b.distance,D.decay=b.decay,b.castShadow){const q=b.shadow,z=t.get(b);z.shadowIntensity=q.intensity,z.shadowBias=q.bias,z.shadowNormalBias=q.normalBias,z.shadowRadius=q.radius,z.shadowMapSize=q.mapSize,z.shadowCameraNear=q.camera.near,z.shadowCameraFar=q.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=F,n.pointShadowMatrix[g]=b.shadow.matrix,E++}n.point[g]=D,g++}else if(b.isHemisphereLight){const D=e.get(b);D.skyColor.copy(b.color).multiplyScalar(U),D.groundColor.copy(b.groundColor).multiplyScalar(U),n.hemi[p]=D,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=le.LTC_FLOAT_1,n.rectAreaLTC2=le.LTC_FLOAT_2):(n.rectAreaLTC1=le.LTC_HALF_1,n.rectAreaLTC2=le.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;const A=n.hash;(A.directionalLength!==h||A.pointLength!==g||A.spotLength!==v||A.rectAreaLength!==m||A.hemiLength!==p||A.numDirectionalShadows!==T||A.numPointShadows!==E||A.numSpotShadows!==S||A.numSpotMaps!==C||A.numLightProbes!==P)&&(n.directional.length=h,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=S+C-R,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=P,A.directionalLength=h,A.pointLength=g,A.spotLength=v,A.rectAreaLength=m,A.hemiLength=p,A.numDirectionalShadows=T,A.numPointShadows=E,A.numSpotShadows=S,A.numSpotMaps=C,A.numLightProbes=P,n.version=C0++)}function l(c,u){let d=0,f=0,h=0,g=0,v=0;const m=u.matrixWorldInverse;for(let p=0,T=c.length;p<T;p++){const E=c[p];if(E.isDirectionalLight){const S=n.directional[d];S.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),d++}else if(E.isSpotLight){const S=n.spot[h];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),h++}else if(E.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(E.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){const S=n.hemi[v];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:n}}function dl(i){const e=new P0(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function D0(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new dl(i),e.set(r,[o])):s>=a.length?(o=new dl(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const L0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,I0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function U0(i,e,t){let n=new Go;const r=new Pe,s=new Pe,a=new xt,o=new rf({depthPacking:kd}),l=new sf,c={},u=t.maxTextureSize,d={[si]:$t,[$t]:si,[zn]:zn},f=new ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:L0,fragmentShader:I0}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const g=new dn;g.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new $e(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rl;let p=this.type;this.render=function(R,P,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const x=i.getRenderTarget(),_=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),I=i.state;I.setBlending(ei),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const U=p!==Bn&&this.type===Bn,N=p===Bn&&this.type!==Bn;for(let F=0,D=R.length;F<D;F++){const q=R[F],z=q.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const K=z.getFrameExtents();if(r.multiply(K),s.copy(z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/K.x),r.x=s.x*K.x,z.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/K.y),r.y=s.y*K.y,z.mapSize.y=s.y)),z.map===null||U===!0||N===!0){const ce=this.type!==Bn?{minFilter:nn,magFilter:nn}:{};z.map!==null&&z.map.dispose(),z.map=new Ci(r.x,r.y,ce),z.map.texture.name=q.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();const te=z.getViewportCount();for(let ce=0;ce<te;ce++){const Ne=z.getViewport(ce);a.set(s.x*Ne.x,s.y*Ne.y,s.x*Ne.z,s.y*Ne.w),I.viewport(a),z.updateMatrices(q,ce),n=z.getFrustum(),S(P,A,z.camera,q,this.type)}z.isPointLightShadow!==!0&&this.type===Bn&&T(z,A),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(x,_,b)};function T(R,P){const A=e.update(v);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,h.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ci(r.x,r.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(P,null,A,f,v,null),h.uniforms.shadow_pass.value=R.mapPass.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(P,null,A,h,v,null)}function E(R,P,A,x){let _=null;const b=A.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(b!==void 0)_=b;else if(_=A.isPointLight===!0?l:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const I=_.uuid,U=P.uuid;let N=c[I];N===void 0&&(N={},c[I]=N);let F=N[U];F===void 0&&(F=_.clone(),N[U]=F,P.addEventListener("dispose",C)),_=F}if(_.visible=P.visible,_.wireframe=P.wireframe,x===Bn?_.side=P.shadowSide!==null?P.shadowSide:P.side:_.side=P.shadowSide!==null?P.shadowSide:d[P.side],_.alphaMap=P.alphaMap,_.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,_.map=P.map,_.clipShadows=P.clipShadows,_.clippingPlanes=P.clippingPlanes,_.clipIntersection=P.clipIntersection,_.displacementMap=P.displacementMap,_.displacementScale=P.displacementScale,_.displacementBias=P.displacementBias,_.wireframeLinewidth=P.wireframeLinewidth,_.linewidth=P.linewidth,A.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const I=i.properties.get(_);I.light=A}return _}function S(R,P,A,x,_){if(R.visible===!1)return;if(R.layers.test(P.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&_===Bn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,R.matrixWorld);const U=e.update(R),N=R.material;if(Array.isArray(N)){const F=U.groups;for(let D=0,q=F.length;D<q;D++){const z=F[D],K=N[z.materialIndex];if(K&&K.visible){const te=E(R,K,x,_);R.onBeforeShadow(i,R,P,A,U,te,z),i.renderBufferDirect(A,null,U,te,R,z),R.onAfterShadow(i,R,P,A,U,te,z)}}}else if(N.visible){const F=E(R,N,x,_);R.onBeforeShadow(i,R,P,A,U,F,null),i.renderBufferDirect(A,null,U,F,R,null),R.onAfterShadow(i,R,P,A,U,F,null)}}const I=R.children;for(let U=0,N=I.length;U<N;U++)S(I[U],P,A,x,_)}function C(R){R.target.removeEventListener("dispose",C);for(const A in c){const x=c[A],_=R.target.uuid;_ in x&&(x[_].dispose(),delete x[_])}}}const N0={[Oa]:Ba,[za]:Va,[ka]:Ga,[sr]:Ha,[Ba]:Oa,[Va]:za,[Ga]:ka,[Ha]:sr};function F0(i,e){function t(){let O=!1;const se=new xt;let oe=null;const me=new xt(0,0,0,0);return{setMask:function(ne){oe!==ne&&!O&&(i.colorMask(ne,ne,ne,ne),oe=ne)},setLocked:function(ne){O=ne},setClear:function(ne,Z,_e,Oe,ut){ut===!0&&(ne*=Oe,Z*=Oe,_e*=Oe),se.set(ne,Z,_e,Oe),me.equals(se)===!1&&(i.clearColor(ne,Z,_e,Oe),me.copy(se))},reset:function(){O=!1,oe=null,me.set(-1,0,0,0)}}}function n(){let O=!1,se=!1,oe=null,me=null,ne=null;return{setReversed:function(Z){if(se!==Z){const _e=e.get("EXT_clip_control");Z?_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.ZERO_TO_ONE_EXT):_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.NEGATIVE_ONE_TO_ONE_EXT),se=Z;const Oe=ne;ne=null,this.setClear(Oe)}},getReversed:function(){return se},setTest:function(Z){Z?ee(i.DEPTH_TEST):ge(i.DEPTH_TEST)},setMask:function(Z){oe!==Z&&!O&&(i.depthMask(Z),oe=Z)},setFunc:function(Z){if(se&&(Z=N0[Z]),me!==Z){switch(Z){case Oa:i.depthFunc(i.NEVER);break;case Ba:i.depthFunc(i.ALWAYS);break;case za:i.depthFunc(i.LESS);break;case sr:i.depthFunc(i.LEQUAL);break;case ka:i.depthFunc(i.EQUAL);break;case Ha:i.depthFunc(i.GEQUAL);break;case Va:i.depthFunc(i.GREATER);break;case Ga:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}me=Z}},setLocked:function(Z){O=Z},setClear:function(Z){ne!==Z&&(se&&(Z=1-Z),i.clearDepth(Z),ne=Z)},reset:function(){O=!1,oe=null,me=null,ne=null,se=!1}}}function r(){let O=!1,se=null,oe=null,me=null,ne=null,Z=null,_e=null,Oe=null,ut=null;return{setTest:function(rt){O||(rt?ee(i.STENCIL_TEST):ge(i.STENCIL_TEST))},setMask:function(rt){se!==rt&&!O&&(i.stencilMask(rt),se=rt)},setFunc:function(rt,Dn,bn){(oe!==rt||me!==Dn||ne!==bn)&&(i.stencilFunc(rt,Dn,bn),oe=rt,me=Dn,ne=bn)},setOp:function(rt,Dn,bn){(Z!==rt||_e!==Dn||Oe!==bn)&&(i.stencilOp(rt,Dn,bn),Z=rt,_e=Dn,Oe=bn)},setLocked:function(rt){O=rt},setClear:function(rt){ut!==rt&&(i.clearStencil(rt),ut=rt)},reset:function(){O=!1,se=null,oe=null,me=null,ne=null,Z=null,_e=null,Oe=null,ut=null}}}const s=new t,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,h=[],g=null,v=!1,m=null,p=null,T=null,E=null,S=null,C=null,R=null,P=new Qe(0,0,0),A=0,x=!1,_=null,b=null,I=null,U=null,N=null;const F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,q=0;const z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(z)[1]),D=q>=1):z.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),D=q>=2);let K=null,te={};const ce=i.getParameter(i.SCISSOR_BOX),Ne=i.getParameter(i.VIEWPORT),st=new xt().fromArray(ce),lt=new xt().fromArray(Ne);function it(O,se,oe,me){const ne=new Uint8Array(4),Z=i.createTexture();i.bindTexture(O,Z),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let _e=0;_e<oe;_e++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(se,0,i.RGBA,1,1,me,0,i.RGBA,i.UNSIGNED_BYTE,ne):i.texImage2D(se+_e,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ne);return Z}const J={};J[i.TEXTURE_2D]=it(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=it(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=it(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=it(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(i.DEPTH_TEST),a.setFunc(sr),Ie(!1),xe(lc),ee(i.CULL_FACE),pt(ei);function ee(O){u[O]!==!0&&(i.enable(O),u[O]=!0)}function ge(O){u[O]!==!1&&(i.disable(O),u[O]=!1)}function Fe(O,se){return d[O]!==se?(i.bindFramebuffer(O,se),d[O]=se,O===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=se),O===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=se),!0):!1}function Ae(O,se){let oe=h,me=!1;if(O){oe=f.get(se),oe===void 0&&(oe=[],f.set(se,oe));const ne=O.textures;if(oe.length!==ne.length||oe[0]!==i.COLOR_ATTACHMENT0){for(let Z=0,_e=ne.length;Z<_e;Z++)oe[Z]=i.COLOR_ATTACHMENT0+Z;oe.length=ne.length,me=!0}}else oe[0]!==i.BACK&&(oe[0]=i.BACK,me=!0);me&&i.drawBuffers(oe)}function je(O){return g!==O?(i.useProgram(O),g=O,!0):!1}const Lt={[Si]:i.FUNC_ADD,[fd]:i.FUNC_SUBTRACT,[pd]:i.FUNC_REVERSE_SUBTRACT};Lt[md]=i.MIN,Lt[gd]=i.MAX;const L={[vd]:i.ZERO,[_d]:i.ONE,[xd]:i.SRC_COLOR,[Na]:i.SRC_ALPHA,[Td]:i.SRC_ALPHA_SATURATE,[bd]:i.DST_COLOR,[Sd]:i.DST_ALPHA,[Md]:i.ONE_MINUS_SRC_COLOR,[Fa]:i.ONE_MINUS_SRC_ALPHA,[Ed]:i.ONE_MINUS_DST_COLOR,[yd]:i.ONE_MINUS_DST_ALPHA,[Ad]:i.CONSTANT_COLOR,[wd]:i.ONE_MINUS_CONSTANT_COLOR,[Cd]:i.CONSTANT_ALPHA,[Rd]:i.ONE_MINUS_CONSTANT_ALPHA};function pt(O,se,oe,me,ne,Z,_e,Oe,ut,rt){if(O===ei){v===!0&&(ge(i.BLEND),v=!1);return}if(v===!1&&(ee(i.BLEND),v=!0),O!==hd){if(O!==m||rt!==x){if((p!==Si||S!==Si)&&(i.blendEquation(i.FUNC_ADD),p=Si,S=Si),rt)switch(O){case tr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case uc:i.blendFunc(i.ONE,i.ONE);break;case dc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case tr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case uc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case dc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}T=null,E=null,C=null,R=null,P.set(0,0,0),A=0,m=O,x=rt}return}ne=ne||se,Z=Z||oe,_e=_e||me,(se!==p||ne!==S)&&(i.blendEquationSeparate(Lt[se],Lt[ne]),p=se,S=ne),(oe!==T||me!==E||Z!==C||_e!==R)&&(i.blendFuncSeparate(L[oe],L[me],L[Z],L[_e]),T=oe,E=me,C=Z,R=_e),(Oe.equals(P)===!1||ut!==A)&&(i.blendColor(Oe.r,Oe.g,Oe.b,ut),P.copy(Oe),A=ut),m=O,x=!1}function ze(O,se){O.side===zn?ge(i.CULL_FACE):ee(i.CULL_FACE);let oe=O.side===$t;se&&(oe=!oe),Ie(oe),O.blending===tr&&O.transparent===!1?pt(ei):pt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),s.setMask(O.colorWrite);const me=O.stencilWrite;o.setTest(me),me&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Me(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ee(i.SAMPLE_ALPHA_TO_COVERAGE):ge(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(O){_!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),_=O)}function xe(O){O!==ud?(ee(i.CULL_FACE),O!==b&&(O===lc?i.cullFace(i.BACK):O===dd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ge(i.CULL_FACE),b=O}function mt(O){O!==I&&(D&&i.lineWidth(O),I=O)}function Me(O,se,oe){O?(ee(i.POLYGON_OFFSET_FILL),(U!==se||N!==oe)&&(i.polygonOffset(se,oe),U=se,N=oe)):ge(i.POLYGON_OFFSET_FILL)}function Ve(O){O?ee(i.SCISSOR_TEST):ge(i.SCISSOR_TEST)}function wt(O){O===void 0&&(O=i.TEXTURE0+F-1),K!==O&&(i.activeTexture(O),K=O)}function Mt(O,se,oe){oe===void 0&&(K===null?oe=i.TEXTURE0+F-1:oe=K);let me=te[oe];me===void 0&&(me={type:void 0,texture:void 0},te[oe]=me),(me.type!==O||me.texture!==se)&&(K!==oe&&(i.activeTexture(oe),K=oe),i.bindTexture(O,se||J[O]),me.type=O,me.texture=se)}function w(){const O=te[K];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function M(){try{i.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function V(){try{i.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Y(){try{i.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Q(){try{i.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function $(){try{i.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Te(){try{i.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ae(){try{i.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Se(){try{i.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function be(){try{i.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function re(){try{i.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function he(O){st.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),st.copy(O))}function Le(O){lt.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),lt.copy(O))}function Ee(O,se){let oe=c.get(se);oe===void 0&&(oe=new WeakMap,c.set(se,oe));let me=oe.get(O);me===void 0&&(me=i.getUniformBlockIndex(se,O.name),oe.set(O,me))}function ue(O,se){const me=c.get(se).get(O);l.get(se)!==me&&(i.uniformBlockBinding(se,me,O.__bindingPointIndex),l.set(se,me))}function ke(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},K=null,te={},d={},f=new WeakMap,h=[],g=null,v=!1,m=null,p=null,T=null,E=null,S=null,C=null,R=null,P=new Qe(0,0,0),A=0,x=!1,_=null,b=null,I=null,U=null,N=null,st.set(0,0,i.canvas.width,i.canvas.height),lt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ee,disable:ge,bindFramebuffer:Fe,drawBuffers:Ae,useProgram:je,setBlending:pt,setMaterial:ze,setFlipSided:Ie,setCullFace:xe,setLineWidth:mt,setPolygonOffset:Me,setScissorTest:Ve,activeTexture:wt,bindTexture:Mt,unbindTexture:w,compressedTexImage2D:M,compressedTexImage3D:V,texImage2D:be,texImage3D:re,updateUBOMapping:Ee,uniformBlockBinding:ue,texStorage2D:ae,texStorage3D:Se,texSubImage2D:Y,texSubImage3D:Q,compressedTexSubImage2D:$,compressedTexSubImage3D:Te,scissor:he,viewport:Le,reset:ke}}function O0(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Pe,u=new WeakMap;let d;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,M){return h?new OffscreenCanvas(w,M):Ls("canvas")}function v(w,M,V){let Y=1;const Q=Mt(w);if((Q.width>V||Q.height>V)&&(Y=V/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const $=Math.floor(Y*Q.width),Te=Math.floor(Y*Q.height);d===void 0&&(d=g($,Te));const ae=M?g($,Te):d;return ae.width=$,ae.height=Te,ae.getContext("2d").drawImage(w,0,0,$,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+$+"x"+Te+")."),ae}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){i.generateMipmap(w)}function T(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(w,M,V,Y,Q=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let $=M;if(M===i.RED&&(V===i.FLOAT&&($=i.R32F),V===i.HALF_FLOAT&&($=i.R16F),V===i.UNSIGNED_BYTE&&($=i.R8)),M===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&($=i.R8UI),V===i.UNSIGNED_SHORT&&($=i.R16UI),V===i.UNSIGNED_INT&&($=i.R32UI),V===i.BYTE&&($=i.R8I),V===i.SHORT&&($=i.R16I),V===i.INT&&($=i.R32I)),M===i.RG&&(V===i.FLOAT&&($=i.RG32F),V===i.HALF_FLOAT&&($=i.RG16F),V===i.UNSIGNED_BYTE&&($=i.RG8)),M===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&($=i.RG8UI),V===i.UNSIGNED_SHORT&&($=i.RG16UI),V===i.UNSIGNED_INT&&($=i.RG32UI),V===i.BYTE&&($=i.RG8I),V===i.SHORT&&($=i.RG16I),V===i.INT&&($=i.RG32I)),M===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&($=i.RGB8UI),V===i.UNSIGNED_SHORT&&($=i.RGB16UI),V===i.UNSIGNED_INT&&($=i.RGB32UI),V===i.BYTE&&($=i.RGB8I),V===i.SHORT&&($=i.RGB16I),V===i.INT&&($=i.RGB32I)),M===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&($=i.RGBA8UI),V===i.UNSIGNED_SHORT&&($=i.RGBA16UI),V===i.UNSIGNED_INT&&($=i.RGBA32UI),V===i.BYTE&&($=i.RGBA8I),V===i.SHORT&&($=i.RGBA16I),V===i.INT&&($=i.RGBA32I)),M===i.RGB&&(V===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),M===i.RGBA){const Te=Q?Ps:nt.getTransfer(Y);V===i.FLOAT&&($=i.RGBA32F),V===i.HALF_FLOAT&&($=i.RGBA16F),V===i.UNSIGNED_BYTE&&($=Te===ot?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function S(w,M){let V;return w?M===null||M===wi||M===Br?V=i.DEPTH24_STENCIL8:M===Tn?V=i.DEPTH32F_STENCIL8:M===Or&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===wi||M===Br?V=i.DEPTH_COMPONENT24:M===Tn?V=i.DEPTH_COMPONENT32F:M===Or&&(V=i.DEPTH_COMPONENT16),V}function C(w,M){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==nn&&w.minFilter!==ln?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function R(w){const M=w.target;M.removeEventListener("dispose",R),A(M),M.isVideoTexture&&u.delete(M)}function P(w){const M=w.target;M.removeEventListener("dispose",P),_(M)}function A(w){const M=n.get(w);if(M.__webglInit===void 0)return;const V=w.source,Y=f.get(V);if(Y){const Q=Y[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&x(w),Object.keys(Y).length===0&&f.delete(V)}n.remove(w)}function x(w){const M=n.get(w);i.deleteTexture(M.__webglTexture);const V=w.source,Y=f.get(V);delete Y[M.__cacheKey],a.memory.textures--}function _(w){const M=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(M.__webglFramebuffer[Y]))for(let Q=0;Q<M.__webglFramebuffer[Y].length;Q++)i.deleteFramebuffer(M.__webglFramebuffer[Y][Q]);else i.deleteFramebuffer(M.__webglFramebuffer[Y]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[Y])}else{if(Array.isArray(M.__webglFramebuffer))for(let Y=0;Y<M.__webglFramebuffer.length;Y++)i.deleteFramebuffer(M.__webglFramebuffer[Y]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Y=0;Y<M.__webglColorRenderbuffer.length;Y++)M.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[Y]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const V=w.textures;for(let Y=0,Q=V.length;Y<Q;Y++){const $=n.get(V[Y]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(V[Y])}n.remove(w)}let b=0;function I(){b=0}function U(){const w=b;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),b+=1,w}function N(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function F(w,M){const V=n.get(w);if(w.isVideoTexture&&Ve(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&V.__version!==w.version){const Y=w.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(V,w,M);return}}else w.isExternalTexture&&(V.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+M)}function D(w,M){const V=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&V.__version!==w.version){J(V,w,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+M)}function q(w,M){const V=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&V.__version!==w.version){J(V,w,M);return}t.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+M)}function z(w,M){const V=n.get(w);if(w.version>0&&V.__version!==w.version){ee(V,w,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+M)}const K={[qa]:i.REPEAT,[Ti]:i.CLAMP_TO_EDGE,[$a]:i.MIRRORED_REPEAT},te={[nn]:i.NEAREST,[Bd]:i.NEAREST_MIPMAP_NEAREST,[Zr]:i.NEAREST_MIPMAP_LINEAR,[ln]:i.LINEAR,[Ys]:i.LINEAR_MIPMAP_NEAREST,[Ai]:i.LINEAR_MIPMAP_LINEAR},ce={[Vd]:i.NEVER,[Yd]:i.ALWAYS,[Gd]:i.LESS,[Vl]:i.LEQUAL,[Wd]:i.EQUAL,[$d]:i.GEQUAL,[Xd]:i.GREATER,[qd]:i.NOTEQUAL};function Ne(w,M){if(M.type===Tn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===ln||M.magFilter===Ys||M.magFilter===Zr||M.magFilter===Ai||M.minFilter===ln||M.minFilter===Ys||M.minFilter===Zr||M.minFilter===Ai)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,K[M.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,K[M.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,K[M.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,te[M.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,te[M.minFilter]),M.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,ce[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===nn||M.minFilter!==Zr&&M.minFilter!==Ai||M.type===Tn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function st(w,M){let V=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",R));const Y=M.source;let Q=f.get(Y);Q===void 0&&(Q={},f.set(Y,Q));const $=N(M);if($!==w.__cacheKey){Q[$]===void 0&&(Q[$]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),Q[$].usedTimes++;const Te=Q[w.__cacheKey];Te!==void 0&&(Q[w.__cacheKey].usedTimes--,Te.usedTimes===0&&x(M)),w.__cacheKey=$,w.__webglTexture=Q[$].texture}return V}function lt(w,M,V){return Math.floor(Math.floor(w/V)/M)}function it(w,M,V,Y){const $=w.updateRanges;if($.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,V,Y,M.data);else{$.sort((re,he)=>re.start-he.start);let Te=0;for(let re=1;re<$.length;re++){const he=$[Te],Le=$[re],Ee=he.start+he.count,ue=lt(Le.start,M.width,4),ke=lt(he.start,M.width,4);Le.start<=Ee+1&&ue===ke&&lt(Le.start+Le.count-1,M.width,4)===ue?he.count=Math.max(he.count,Le.start+Le.count-he.start):(++Te,$[Te]=Le)}$.length=Te+1;const ae=i.getParameter(i.UNPACK_ROW_LENGTH),Se=i.getParameter(i.UNPACK_SKIP_PIXELS),be=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let re=0,he=$.length;re<he;re++){const Le=$[re],Ee=Math.floor(Le.start/4),ue=Math.ceil(Le.count/4),ke=Ee%M.width,O=Math.floor(Ee/M.width),se=ue,oe=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,ke),i.pixelStorei(i.UNPACK_SKIP_ROWS,O),t.texSubImage2D(i.TEXTURE_2D,0,ke,O,se,oe,V,Y,M.data)}w.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ae),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Se),i.pixelStorei(i.UNPACK_SKIP_ROWS,be)}}function J(w,M,V){let Y=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Y=i.TEXTURE_3D);const Q=st(w,M),$=M.source;t.bindTexture(Y,w.__webglTexture,i.TEXTURE0+V);const Te=n.get($);if($.version!==Te.__version||Q===!0){t.activeTexture(i.TEXTURE0+V);const ae=nt.getPrimaries(nt.workingColorSpace),Se=M.colorSpace===Zn?null:nt.getPrimaries(M.colorSpace),be=M.colorSpace===Zn||ae===Se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let re=v(M.image,!1,r.maxTextureSize);re=wt(M,re);const he=s.convert(M.format,M.colorSpace),Le=s.convert(M.type);let Ee=E(M.internalFormat,he,Le,M.colorSpace,M.isVideoTexture);Ne(Y,M);let ue;const ke=M.mipmaps,O=M.isVideoTexture!==!0,se=Te.__version===void 0||Q===!0,oe=$.dataReady,me=C(M,re);if(M.isDepthTexture)Ee=S(M.format===kr,M.type),se&&(O?t.texStorage2D(i.TEXTURE_2D,1,Ee,re.width,re.height):t.texImage2D(i.TEXTURE_2D,0,Ee,re.width,re.height,0,he,Le,null));else if(M.isDataTexture)if(ke.length>0){O&&se&&t.texStorage2D(i.TEXTURE_2D,me,Ee,ke[0].width,ke[0].height);for(let ne=0,Z=ke.length;ne<Z;ne++)ue=ke[ne],O?oe&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,ue.width,ue.height,he,Le,ue.data):t.texImage2D(i.TEXTURE_2D,ne,Ee,ue.width,ue.height,0,he,Le,ue.data);M.generateMipmaps=!1}else O?(se&&t.texStorage2D(i.TEXTURE_2D,me,Ee,re.width,re.height),oe&&it(M,re,he,Le)):t.texImage2D(i.TEXTURE_2D,0,Ee,re.width,re.height,0,he,Le,re.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){O&&se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,Ee,ke[0].width,ke[0].height,re.depth);for(let ne=0,Z=ke.length;ne<Z;ne++)if(ue=ke[ne],M.format!==Mn)if(he!==null)if(O){if(oe)if(M.layerUpdates.size>0){const _e=Hc(ue.width,ue.height,M.format,M.type);for(const Oe of M.layerUpdates){const ut=ue.data.subarray(Oe*_e/ue.data.BYTES_PER_ELEMENT,(Oe+1)*_e/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,Oe,ue.width,ue.height,1,he,ut)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,ue.width,ue.height,re.depth,he,ue.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,Ee,ue.width,ue.height,re.depth,0,ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?oe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,ue.width,ue.height,re.depth,he,Le,ue.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,Ee,ue.width,ue.height,re.depth,0,he,Le,ue.data)}else{O&&se&&t.texStorage2D(i.TEXTURE_2D,me,Ee,ke[0].width,ke[0].height);for(let ne=0,Z=ke.length;ne<Z;ne++)ue=ke[ne],M.format!==Mn?he!==null?O?oe&&t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,ue.width,ue.height,he,ue.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,Ee,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?oe&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,ue.width,ue.height,he,Le,ue.data):t.texImage2D(i.TEXTURE_2D,ne,Ee,ue.width,ue.height,0,he,Le,ue.data)}else if(M.isDataArrayTexture)if(O){if(se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,Ee,re.width,re.height,re.depth),oe)if(M.layerUpdates.size>0){const ne=Hc(re.width,re.height,M.format,M.type);for(const Z of M.layerUpdates){const _e=re.data.subarray(Z*ne/re.data.BYTES_PER_ELEMENT,(Z+1)*ne/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,re.width,re.height,1,he,Le,_e)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,he,Le,re.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ee,re.width,re.height,re.depth,0,he,Le,re.data);else if(M.isData3DTexture)O?(se&&t.texStorage3D(i.TEXTURE_3D,me,Ee,re.width,re.height,re.depth),oe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,he,Le,re.data)):t.texImage3D(i.TEXTURE_3D,0,Ee,re.width,re.height,re.depth,0,he,Le,re.data);else if(M.isFramebufferTexture){if(se)if(O)t.texStorage2D(i.TEXTURE_2D,me,Ee,re.width,re.height);else{let ne=re.width,Z=re.height;for(let _e=0;_e<me;_e++)t.texImage2D(i.TEXTURE_2D,_e,Ee,ne,Z,0,he,Le,null),ne>>=1,Z>>=1}}else if(ke.length>0){if(O&&se){const ne=Mt(ke[0]);t.texStorage2D(i.TEXTURE_2D,me,Ee,ne.width,ne.height)}for(let ne=0,Z=ke.length;ne<Z;ne++)ue=ke[ne],O?oe&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,he,Le,ue):t.texImage2D(i.TEXTURE_2D,ne,Ee,he,Le,ue);M.generateMipmaps=!1}else if(O){if(se){const ne=Mt(re);t.texStorage2D(i.TEXTURE_2D,me,Ee,ne.width,ne.height)}oe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,he,Le,re)}else t.texImage2D(i.TEXTURE_2D,0,Ee,he,Le,re);m(M)&&p(Y),Te.__version=$.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function ee(w,M,V){if(M.image.length!==6)return;const Y=st(w,M),Q=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+V);const $=n.get(Q);if(Q.version!==$.__version||Y===!0){t.activeTexture(i.TEXTURE0+V);const Te=nt.getPrimaries(nt.workingColorSpace),ae=M.colorSpace===Zn?null:nt.getPrimaries(M.colorSpace),Se=M.colorSpace===Zn||Te===ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const be=M.isCompressedTexture||M.image[0].isCompressedTexture,re=M.image[0]&&M.image[0].isDataTexture,he=[];for(let Z=0;Z<6;Z++)!be&&!re?he[Z]=v(M.image[Z],!0,r.maxCubemapSize):he[Z]=re?M.image[Z].image:M.image[Z],he[Z]=wt(M,he[Z]);const Le=he[0],Ee=s.convert(M.format,M.colorSpace),ue=s.convert(M.type),ke=E(M.internalFormat,Ee,ue,M.colorSpace),O=M.isVideoTexture!==!0,se=$.__version===void 0||Y===!0,oe=Q.dataReady;let me=C(M,Le);Ne(i.TEXTURE_CUBE_MAP,M);let ne;if(be){O&&se&&t.texStorage2D(i.TEXTURE_CUBE_MAP,me,ke,Le.width,Le.height);for(let Z=0;Z<6;Z++){ne=he[Z].mipmaps;for(let _e=0;_e<ne.length;_e++){const Oe=ne[_e];M.format!==Mn?Ee!==null?O?oe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e,0,0,Oe.width,Oe.height,Ee,Oe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e,ke,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e,0,0,Oe.width,Oe.height,Ee,ue,Oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e,ke,Oe.width,Oe.height,0,Ee,ue,Oe.data)}}}else{if(ne=M.mipmaps,O&&se){ne.length>0&&me++;const Z=Mt(he[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,me,ke,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(re){O?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,he[Z].width,he[Z].height,Ee,ue,he[Z].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,ke,he[Z].width,he[Z].height,0,Ee,ue,he[Z].data);for(let _e=0;_e<ne.length;_e++){const ut=ne[_e].image[Z].image;O?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e+1,0,0,ut.width,ut.height,Ee,ue,ut.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e+1,ke,ut.width,ut.height,0,Ee,ue,ut.data)}}else{O?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ee,ue,he[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,ke,Ee,ue,he[Z]);for(let _e=0;_e<ne.length;_e++){const Oe=ne[_e];O?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e+1,0,0,Ee,ue,Oe.image[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e+1,ke,Ee,ue,Oe.image[Z])}}}m(M)&&p(i.TEXTURE_CUBE_MAP),$.__version=Q.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function ge(w,M,V,Y,Q,$){const Te=s.convert(V.format,V.colorSpace),ae=s.convert(V.type),Se=E(V.internalFormat,Te,ae,V.colorSpace),be=n.get(M),re=n.get(V);if(re.__renderTarget=M,!be.__hasExternalTextures){const he=Math.max(1,M.width>>$),Le=Math.max(1,M.height>>$);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,$,Se,he,Le,M.depth,0,Te,ae,null):t.texImage2D(Q,$,Se,he,Le,0,Te,ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),Me(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,Q,re.__webglTexture,0,mt(M)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,Q,re.__webglTexture,$),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Fe(w,M,V){if(i.bindRenderbuffer(i.RENDERBUFFER,w),M.depthBuffer){const Y=M.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,$=S(M.stencilBuffer,Q),Te=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=mt(M);Me(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae,$,M.width,M.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,$,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,$,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Te,i.RENDERBUFFER,w)}else{const Y=M.textures;for(let Q=0;Q<Y.length;Q++){const $=Y[Q],Te=s.convert($.format,$.colorSpace),ae=s.convert($.type),Se=E($.internalFormat,Te,ae,$.colorSpace),be=mt(M);V&&Me(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,be,Se,M.width,M.height):Me(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,be,Se,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Se,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ae(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(M.depthTexture);Y.__renderTarget=M,(!Y.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),F(M.depthTexture,0);const Q=Y.__webglTexture,$=mt(M);if(M.depthTexture.format===zr)Me(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(M.depthTexture.format===kr)Me(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function je(w){const M=n.get(w),V=w.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==w.depthTexture){const Y=w.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Y){const Q=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Y.removeEventListener("dispose",Q)};Y.addEventListener("dispose",Q),M.__depthDisposeCallback=Q}M.__boundDepthTexture=Y}if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");const Y=w.texture.mipmaps;Y&&Y.length>0?Ae(M.__webglFramebuffer[0],w):Ae(M.__webglFramebuffer,w)}else if(V){M.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[Y]),M.__webglDepthbuffer[Y]===void 0)M.__webglDepthbuffer[Y]=i.createRenderbuffer(),Fe(M.__webglDepthbuffer[Y],w,!1);else{const Q=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=M.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,$)}}else{const Y=w.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),Fe(M.__webglDepthbuffer,w,!1);else{const Q=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,$)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Lt(w,M,V){const Y=n.get(w);M!==void 0&&ge(Y.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&je(w)}function L(w){const M=w.texture,V=n.get(w),Y=n.get(M);w.addEventListener("dispose",P);const Q=w.textures,$=w.isWebGLCubeRenderTarget===!0,Te=Q.length>1;if(Te||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=M.version,a.memory.textures++),$){V.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer[ae]=[];for(let Se=0;Se<M.mipmaps.length;Se++)V.__webglFramebuffer[ae][Se]=i.createFramebuffer()}else V.__webglFramebuffer[ae]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer=[];for(let ae=0;ae<M.mipmaps.length;ae++)V.__webglFramebuffer[ae]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(Te)for(let ae=0,Se=Q.length;ae<Se;ae++){const be=n.get(Q[ae]);be.__webglTexture===void 0&&(be.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&Me(w)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ae=0;ae<Q.length;ae++){const Se=Q[ae];V.__webglColorRenderbuffer[ae]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[ae]);const be=s.convert(Se.format,Se.colorSpace),re=s.convert(Se.type),he=E(Se.internalFormat,be,re,Se.colorSpace,w.isXRRenderTarget===!0),Le=mt(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,he,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,V.__webglColorRenderbuffer[ae])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),Fe(V.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Ne(i.TEXTURE_CUBE_MAP,M);for(let ae=0;ae<6;ae++)if(M.mipmaps&&M.mipmaps.length>0)for(let Se=0;Se<M.mipmaps.length;Se++)ge(V.__webglFramebuffer[ae][Se],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Se);else ge(V.__webglFramebuffer[ae],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(M)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let ae=0,Se=Q.length;ae<Se;ae++){const be=Q[ae],re=n.get(be);let he=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(he=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,re.__webglTexture),Ne(he,be),ge(V.__webglFramebuffer,w,be,i.COLOR_ATTACHMENT0+ae,he,0),m(be)&&p(he)}t.unbindTexture()}else{let ae=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ae=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ae,Y.__webglTexture),Ne(ae,M),M.mipmaps&&M.mipmaps.length>0)for(let Se=0;Se<M.mipmaps.length;Se++)ge(V.__webglFramebuffer[Se],w,M,i.COLOR_ATTACHMENT0,ae,Se);else ge(V.__webglFramebuffer,w,M,i.COLOR_ATTACHMENT0,ae,0);m(M)&&p(ae),t.unbindTexture()}w.depthBuffer&&je(w)}function pt(w){const M=w.textures;for(let V=0,Y=M.length;V<Y;V++){const Q=M[V];if(m(Q)){const $=T(w),Te=n.get(Q).__webglTexture;t.bindTexture($,Te),p($),t.unbindTexture()}}}const ze=[],Ie=[];function xe(w){if(w.samples>0){if(Me(w)===!1){const M=w.textures,V=w.width,Y=w.height;let Q=i.COLOR_BUFFER_BIT;const $=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=n.get(w),ae=M.length>1;if(ae)for(let be=0;be<M.length;be++)t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);const Se=w.texture.mipmaps;Se&&Se.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let be=0;be<M.length;be++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),ae){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Te.__webglColorRenderbuffer[be]);const re=n.get(M[be]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,re,0)}i.blitFramebuffer(0,0,V,Y,0,0,V,Y,Q,i.NEAREST),l===!0&&(ze.length=0,Ie.length=0,ze.push(i.COLOR_ATTACHMENT0+be),w.depthBuffer&&w.resolveDepthBuffer===!1&&(ze.push($),Ie.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ie)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ze))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ae)for(let be=0;be<M.length;be++){t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,Te.__webglColorRenderbuffer[be]);const re=n.get(M[be]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,re,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const M=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function mt(w){return Math.min(r.maxSamples,w.samples)}function Me(w){const M=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ve(w){const M=a.render.frame;u.get(w)!==M&&(u.set(w,M),w.update())}function wt(w,M){const V=w.colorSpace,Y=w.format,Q=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||V!==cr&&V!==Zn&&(nt.getTransfer(V)===ot?(Y!==Mn||Q!==Cn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),M}function Mt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=I,this.setTexture2D=F,this.setTexture2DArray=D,this.setTexture3D=q,this.setTextureCube=z,this.rebindTextures=Lt,this.setupRenderTarget=L,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Me}function B0(i,e){function t(n,r=Zn){let s;const a=nt.getTransfer(r);if(n===Cn)return i.UNSIGNED_BYTE;if(n===Uo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===No)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Fl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ol)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ul)return i.BYTE;if(n===Nl)return i.SHORT;if(n===Or)return i.UNSIGNED_SHORT;if(n===Io)return i.INT;if(n===wi)return i.UNSIGNED_INT;if(n===Tn)return i.FLOAT;if(n===qr)return i.HALF_FLOAT;if(n===Bl)return i.ALPHA;if(n===zl)return i.RGB;if(n===Mn)return i.RGBA;if(n===zr)return i.DEPTH_COMPONENT;if(n===kr)return i.DEPTH_STENCIL;if(n===Fo)return i.RED;if(n===Oo)return i.RED_INTEGER;if(n===kl)return i.RG;if(n===Bo)return i.RG_INTEGER;if(n===zo)return i.RGBA_INTEGER;if(n===bs||n===Es||n===Ts||n===As)if(a===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===bs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Es)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ts)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===As)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===bs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Es)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ts)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===As)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ya||n===ja||n===Ja||n===Ka)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ya)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ja)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ja)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ka)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Za||n===Qa||n===eo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Za||n===Qa)return a===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===eo)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===to||n===no||n===io||n===ro||n===so||n===ao||n===oo||n===co||n===lo||n===uo||n===ho||n===fo||n===po||n===mo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===to)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===no)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===io)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ro)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===so)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ao)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===oo)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===co)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===lo)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===uo)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ho)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===fo)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===po)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===mo)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===go||n===vo||n===_o)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===go)return a===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===vo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_o)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xo||n===Mo||n===So||n===yo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===xo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Mo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===So)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Br?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const z0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,k0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class H0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new nu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ai({vertexShader:z0,fragmentShader:k0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $e(new Wn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class V0 extends hr{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,g=null;const v=typeof XRWebGLBinding<"u",m=new H0,p={},T=t.getContextAttributes();let E=null,S=null;const C=[],R=[],P=new Pe;let A=null;const x=new Qt;x.viewport=new xt;const _=new Qt;_.viewport=new xt;const b=[x,_],I=new cf;let U=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ee=C[J];return ee===void 0&&(ee=new ma,C[J]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(J){let ee=C[J];return ee===void 0&&(ee=new ma,C[J]=ee),ee.getGripSpace()},this.getHand=function(J){let ee=C[J];return ee===void 0&&(ee=new ma,C[J]=ee),ee.getHandSpace()};function F(J){const ee=R.indexOf(J.inputSource);if(ee===-1)return;const ge=C[ee];ge!==void 0&&(ge.update(J.inputSource,J.frame,c||a),ge.dispatchEvent({type:J.type,data:J.inputSource}))}function D(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",D),r.removeEventListener("inputsourceschange",q);for(let J=0;J<C.length;J++){const ee=R[J];ee!==null&&(R[J]=null,C[J].disconnect(ee))}U=null,N=null,m.reset();for(const J in p)delete p[J];e.setRenderTarget(E),h=null,f=null,d=null,r=null,S=null,it.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(E=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",D),r.addEventListener("inputsourceschange",q),T.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(P),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,Fe=null,Ae=null;T.depth&&(Ae=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=T.stencil?kr:zr,Fe=T.stencil?Br:wi);const je={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(je),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Ci(f.textureWidth,f.textureHeight,{format:Mn,type:Cn,depthTexture:new tu(f.textureWidth,f.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ge={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,ge),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),S=new Ci(h.framebufferWidth,h.framebufferHeight,{format:Mn,type:Cn,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),it.setContext(r),it.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function q(J){for(let ee=0;ee<J.removed.length;ee++){const ge=J.removed[ee],Fe=R.indexOf(ge);Fe>=0&&(R[Fe]=null,C[Fe].disconnect(ge))}for(let ee=0;ee<J.added.length;ee++){const ge=J.added[ee];let Fe=R.indexOf(ge);if(Fe===-1){for(let je=0;je<C.length;je++)if(je>=R.length){R.push(ge),Fe=je;break}else if(R[je]===null){R[je]=ge,Fe=je;break}if(Fe===-1)break}const Ae=C[Fe];Ae&&Ae.connect(ge)}}const z=new B,K=new B;function te(J,ee,ge){z.setFromMatrixPosition(ee.matrixWorld),K.setFromMatrixPosition(ge.matrixWorld);const Fe=z.distanceTo(K),Ae=ee.projectionMatrix.elements,je=ge.projectionMatrix.elements,Lt=Ae[14]/(Ae[10]-1),L=Ae[14]/(Ae[10]+1),pt=(Ae[9]+1)/Ae[5],ze=(Ae[9]-1)/Ae[5],Ie=(Ae[8]-1)/Ae[0],xe=(je[8]+1)/je[0],mt=Lt*Ie,Me=Lt*xe,Ve=Fe/(-Ie+xe),wt=Ve*-Ie;if(ee.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(wt),J.translateZ(Ve),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ae[10]===-1)J.projectionMatrix.copy(ee.projectionMatrix),J.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const Mt=Lt+Ve,w=L+Ve,M=mt-wt,V=Me+(Fe-wt),Y=pt*L/w*Mt,Q=ze*L/w*Mt;J.projectionMatrix.makePerspective(M,V,Y,Q,Mt,w),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ce(J,ee){ee===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ee.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let ee=J.near,ge=J.far;m.texture!==null&&(m.depthNear>0&&(ee=m.depthNear),m.depthFar>0&&(ge=m.depthFar)),I.near=_.near=x.near=ee,I.far=_.far=x.far=ge,(U!==I.near||N!==I.far)&&(r.updateRenderState({depthNear:I.near,depthFar:I.far}),U=I.near,N=I.far),I.layers.mask=J.layers.mask|6,x.layers.mask=I.layers.mask&3,_.layers.mask=I.layers.mask&5;const Fe=J.parent,Ae=I.cameras;ce(I,Fe);for(let je=0;je<Ae.length;je++)ce(Ae[je],Fe);Ae.length===2?te(I,x,_):I.projectionMatrix.copy(x.projectionMatrix),Ne(J,I,Fe)};function Ne(J,ee,ge){ge===null?J.matrix.copy(ee.matrixWorld):(J.matrix.copy(ge.matrixWorld),J.matrix.invert(),J.matrix.multiply(ee.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ee.projectionMatrix),J.projectionMatrixInverse.copy(ee.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Hr*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(J){l=J,f!==null&&(f.fixedFoveation=J),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(J){return p[J]};let st=null;function lt(J,ee){if(u=ee.getViewerPose(c||a),g=ee,u!==null){const ge=u.views;h!==null&&(e.setRenderTargetFramebuffer(S,h.framebuffer),e.setRenderTarget(S));let Fe=!1;ge.length!==I.cameras.length&&(I.cameras.length=0,Fe=!0);for(let L=0;L<ge.length;L++){const pt=ge[L];let ze=null;if(h!==null)ze=h.getViewport(pt);else{const xe=d.getViewSubImage(f,pt);ze=xe.viewport,L===0&&(e.setRenderTargetTextures(S,xe.colorTexture,xe.depthStencilTexture),e.setRenderTarget(S))}let Ie=b[L];Ie===void 0&&(Ie=new Qt,Ie.layers.enable(L),Ie.viewport=new xt,b[L]=Ie),Ie.matrix.fromArray(pt.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(pt.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(ze.x,ze.y,ze.width,ze.height),L===0&&(I.matrix.copy(Ie.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Fe===!0&&I.cameras.push(Ie)}const Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){d=n.getBinding();const L=d.getDepthInformation(ge[0]);L&&L.isValid&&L.texture&&m.init(L,r.renderState)}if(Ae&&Ae.includes("camera-access")&&v){e.state.unbindTexture(),d=n.getBinding();for(let L=0;L<ge.length;L++){const pt=ge[L].camera;if(pt){let ze=p[pt];ze||(ze=new nu,p[pt]=ze);const Ie=d.getCameraImage(pt);ze.sourceTexture=Ie}}}}for(let ge=0;ge<C.length;ge++){const Fe=R[ge],Ae=C[ge];Fe!==null&&Ae!==void 0&&Ae.update(Fe,ee,c||a)}st&&st(J,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),g=null}const it=new du;it.setAnimationLoop(lt),this.setAnimationLoop=function(J){st=J},this.dispose=function(){}}}const mi=new Rn,G0=new ft;function W0(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,jl(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,T,E,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,T,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===$t&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===$t&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=e.get(p),E=T.envMap,S=T.envMapRotation;E&&(m.envMap.value=E,mi.copy(S),mi.x*=-1,mi.y*=-1,mi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),m.envMapRotation.value.setFromMatrix4(G0.makeRotationFromEuler(mi)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,T,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=E*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===$t&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const T=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function X0(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,E){const S=E.program;n.uniformBlockBinding(T,S)}function c(T,E){let S=r[T.id];S===void 0&&(g(T),S=u(T),r[T.id]=S,T.addEventListener("dispose",m));const C=E.program;n.updateUBOMapping(T,C);const R=e.render.frame;s[T.id]!==R&&(f(T),s[T.id]=R)}function u(T){const E=d();T.__bindingPointIndex=E;const S=i.createBuffer(),C=T.__size,R=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,C,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,S),S}function d(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const E=r[T.id],S=T.uniforms,C=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let R=0,P=S.length;R<P;R++){const A=Array.isArray(S[R])?S[R]:[S[R]];for(let x=0,_=A.length;x<_;x++){const b=A[x];if(h(b,R,x,C)===!0){const I=b.__offset,U=Array.isArray(b.value)?b.value:[b.value];let N=0;for(let F=0;F<U.length;F++){const D=U[F],q=v(D);typeof D=="number"||typeof D=="boolean"?(b.__data[0]=D,i.bufferSubData(i.UNIFORM_BUFFER,I+N,b.__data)):D.isMatrix3?(b.__data[0]=D.elements[0],b.__data[1]=D.elements[1],b.__data[2]=D.elements[2],b.__data[3]=0,b.__data[4]=D.elements[3],b.__data[5]=D.elements[4],b.__data[6]=D.elements[5],b.__data[7]=0,b.__data[8]=D.elements[6],b.__data[9]=D.elements[7],b.__data[10]=D.elements[8],b.__data[11]=0):(D.toArray(b.__data,N),N+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(T,E,S,C){const R=T.value,P=E+"_"+S;if(C[P]===void 0)return typeof R=="number"||typeof R=="boolean"?C[P]=R:C[P]=R.clone(),!0;{const A=C[P];if(typeof R=="number"||typeof R=="boolean"){if(A!==R)return C[P]=R,!0}else if(A.equals(R)===!1)return A.copy(R),!0}return!1}function g(T){const E=T.uniforms;let S=0;const C=16;for(let P=0,A=E.length;P<A;P++){const x=Array.isArray(E[P])?E[P]:[E[P]];for(let _=0,b=x.length;_<b;_++){const I=x[_],U=Array.isArray(I.value)?I.value:[I.value];for(let N=0,F=U.length;N<F;N++){const D=U[N],q=v(D),z=S%C,K=z%q.boundary,te=z+K;S+=K,te!==0&&C-te<q.storage&&(S+=C-te),I.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=S,S+=q.storage}}}const R=S%C;return R>0&&(S+=C-R),T.__size=S,T.__cache={},this}function v(T){const E={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(E.boundary=4,E.storage=4):T.isVector2?(E.boundary=8,E.storage=8):T.isVector3||T.isColor?(E.boundary=16,E.storage=12):T.isVector4?(E.boundary=16,E.storage=16):T.isMatrix3?(E.boundary=48,E.storage=48):T.isMatrix4?(E.boundary=64,E.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),E}function m(T){const E=T.target;E.removeEventListener("dispose",m);const S=a.indexOf(E.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function p(){for(const T in r)i.deleteBuffer(r[T]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}class gu{constructor(e={}){const{canvas:t=dh(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const T=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let C=!1;this._outputColorSpace=Gt;let R=0,P=0,A=null,x=-1,_=null;const b=new xt,I=new xt;let U=null;const N=new Qe(0);let F=0,D=t.width,q=t.height,z=1,K=null,te=null;const ce=new xt(0,0,D,q),Ne=new xt(0,0,D,q);let st=!1;const lt=new Go;let it=!1,J=!1;const ee=new ft,ge=new B,Fe=new xt,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let je=!1;function Lt(){return A===null?z:1}let L=n;function pt(y,k){return t.getContext(y,k)}try{const y={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Lo}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",me,!1),t.addEventListener("webglcontextcreationerror",ne,!1),L===null){const k="webgl2";if(L=pt(k,y),L===null)throw pt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let ze,Ie,xe,mt,Me,Ve,wt,Mt,w,M,V,Y,Q,$,Te,ae,Se,be,re,he,Le,Ee,ue,ke;function O(){ze=new ng(L),ze.init(),Ee=new B0(L,ze),Ie=new jm(L,ze,e,Ee),xe=new F0(L,ze),Ie.reversedDepthBuffer&&f&&xe.buffers.depth.setReversed(!0),mt=new sg(L),Me=new b0,Ve=new O0(L,ze,xe,Me,Ie,Ee,mt),wt=new Km(S),Mt=new tg(S),w=new df(L),ue=new $m(L,w),M=new ig(L,w,mt,ue),V=new og(L,M,w,mt),re=new ag(L,Ie,Ve),ae=new Jm(Me),Y=new y0(S,wt,Mt,ze,Ie,ue,ae),Q=new W0(S,Me),$=new T0,Te=new D0(ze),be=new qm(S,wt,Mt,xe,V,h,l),Se=new U0(S,V,Ie),ke=new X0(L,mt,Ie,xe),he=new Ym(L,ze,mt),Le=new rg(L,ze,mt),mt.programs=Y.programs,S.capabilities=Ie,S.extensions=ze,S.properties=Me,S.renderLists=$,S.shadowMap=Se,S.state=xe,S.info=mt}O();const se=new V0(S,L);this.xr=se,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const y=ze.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=ze.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(y){y!==void 0&&(z=y,this.setSize(D,q,!1))},this.getSize=function(y){return y.set(D,q)},this.setSize=function(y,k,G=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=y,q=k,t.width=Math.floor(y*z),t.height=Math.floor(k*z),G===!0&&(t.style.width=y+"px",t.style.height=k+"px"),this.setViewport(0,0,y,k)},this.getDrawingBufferSize=function(y){return y.set(D*z,q*z).floor()},this.setDrawingBufferSize=function(y,k,G){D=y,q=k,z=G,t.width=Math.floor(y*G),t.height=Math.floor(k*G),this.setViewport(0,0,y,k)},this.getCurrentViewport=function(y){return y.copy(b)},this.getViewport=function(y){return y.copy(ce)},this.setViewport=function(y,k,G,X){y.isVector4?ce.set(y.x,y.y,y.z,y.w):ce.set(y,k,G,X),xe.viewport(b.copy(ce).multiplyScalar(z).round())},this.getScissor=function(y){return y.copy(Ne)},this.setScissor=function(y,k,G,X){y.isVector4?Ne.set(y.x,y.y,y.z,y.w):Ne.set(y,k,G,X),xe.scissor(I.copy(Ne).multiplyScalar(z).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(y){xe.setScissorTest(st=y)},this.setOpaqueSort=function(y){K=y},this.setTransparentSort=function(y){te=y},this.getClearColor=function(y){return y.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor(...arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha(...arguments)},this.clear=function(y=!0,k=!0,G=!0){let X=0;if(y){let H=!1;if(A!==null){const ie=A.texture.format;H=ie===zo||ie===Bo||ie===Oo}if(H){const ie=A.texture.type,de=ie===Cn||ie===wi||ie===Or||ie===Br||ie===Uo||ie===No,ve=be.getClearColor(),pe=be.getClearAlpha(),De=ve.r,Ue=ve.g,we=ve.b;de?(g[0]=De,g[1]=Ue,g[2]=we,g[3]=pe,L.clearBufferuiv(L.COLOR,0,g)):(v[0]=De,v[1]=Ue,v[2]=we,v[3]=pe,L.clearBufferiv(L.COLOR,0,v))}else X|=L.COLOR_BUFFER_BIT}k&&(X|=L.DEPTH_BUFFER_BIT),G&&(X|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",me,!1),t.removeEventListener("webglcontextcreationerror",ne,!1),be.dispose(),$.dispose(),Te.dispose(),Me.dispose(),wt.dispose(),Mt.dispose(),V.dispose(),ue.dispose(),ke.dispose(),Y.dispose(),se.dispose(),se.removeEventListener("sessionstart",bn),se.removeEventListener("sessionend",tc),oi.stop()};function oe(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const y=mt.autoReset,k=Se.enabled,G=Se.autoUpdate,X=Se.needsUpdate,H=Se.type;O(),mt.autoReset=y,Se.enabled=k,Se.autoUpdate=G,Se.needsUpdate=X,Se.type=H}function ne(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Z(y){const k=y.target;k.removeEventListener("dispose",Z),_e(k)}function _e(y){Oe(y),Me.remove(y)}function Oe(y){const k=Me.get(y).programs;k!==void 0&&(k.forEach(function(G){Y.releaseProgram(G)}),y.isShaderMaterial&&Y.releaseShaderCache(y))}this.renderBufferDirect=function(y,k,G,X,H,ie){k===null&&(k=Ae);const de=H.isMesh&&H.matrixWorld.determinant()<0,ve=Ru(y,k,G,X,H);xe.setMaterial(X,de);let pe=G.index,De=1;if(X.wireframe===!0){if(pe=M.getWireframeAttribute(G),pe===void 0)return;De=2}const Ue=G.drawRange,we=G.attributes.position;let Xe=Ue.start*De,at=(Ue.start+Ue.count)*De;ie!==null&&(Xe=Math.max(Xe,ie.start*De),at=Math.min(at,(ie.start+ie.count)*De)),pe!==null?(Xe=Math.max(Xe,0),at=Math.min(at,pe.count)):we!=null&&(Xe=Math.max(Xe,0),at=Math.min(at,we.count));const _t=at-Xe;if(_t<0||_t===1/0)return;ue.setup(H,X,ve,G,pe);let dt,ct=he;if(pe!==null&&(dt=w.get(pe),ct=Le,ct.setIndex(dt)),H.isMesh)X.wireframe===!0?(xe.setLineWidth(X.wireframeLinewidth*Lt()),ct.setMode(L.LINES)):ct.setMode(L.TRIANGLES);else if(H.isLine){let Ce=X.linewidth;Ce===void 0&&(Ce=1),xe.setLineWidth(Ce*Lt()),H.isLineSegments?ct.setMode(L.LINES):H.isLineLoop?ct.setMode(L.LINE_LOOP):ct.setMode(L.LINE_STRIP)}else H.isPoints?ct.setMode(L.POINTS):H.isSprite&&ct.setMode(L.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Vr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ct.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(ze.get("WEBGL_multi_draw"))ct.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Ce=H._multiDrawStarts,gt=H._multiDrawCounts,tt=H._multiDrawCount,Yt=pe?w.get(pe).bytesPerElement:1,Li=Me.get(X).currentProgram.getUniforms();for(let jt=0;jt<tt;jt++)Li.setValue(L,"_gl_DrawID",jt),ct.render(Ce[jt]/Yt,gt[jt])}else if(H.isInstancedMesh)ct.renderInstances(Xe,_t,H.count);else if(G.isInstancedBufferGeometry){const Ce=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,gt=Math.min(G.instanceCount,Ce);ct.renderInstances(Xe,_t,gt)}else ct.render(Xe,_t)};function ut(y,k,G){y.transparent===!0&&y.side===zn&&y.forceSinglePass===!1?(y.side=$t,y.needsUpdate=!0,Kr(y,k,G),y.side=si,y.needsUpdate=!0,Kr(y,k,G),y.side=zn):Kr(y,k,G)}this.compile=function(y,k,G=null){G===null&&(G=y),p=Te.get(G),p.init(k),E.push(p),G.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),y!==G&&y.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();const X=new Set;return y.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ie=H.material;if(ie)if(Array.isArray(ie))for(let de=0;de<ie.length;de++){const ve=ie[de];ut(ve,G,H),X.add(ve)}else ut(ie,G,H),X.add(ie)}),p=E.pop(),X},this.compileAsync=function(y,k,G=null){const X=this.compile(y,k,G);return new Promise(H=>{function ie(){if(X.forEach(function(de){Me.get(de).currentProgram.isReady()&&X.delete(de)}),X.size===0){H(y);return}setTimeout(ie,10)}ze.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let rt=null;function Dn(y){rt&&rt(y)}function bn(){oi.stop()}function tc(){oi.start()}const oi=new du;oi.setAnimationLoop(Dn),typeof self<"u"&&oi.setContext(self),this.setAnimationLoop=function(y){rt=y,se.setAnimationLoop(y),y===null?oi.stop():oi.start()},se.addEventListener("sessionstart",bn),se.addEventListener("sessionend",tc),this.render=function(y,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(k),k=se.getCamera()),y.isScene===!0&&y.onBeforeRender(S,y,k,A),p=Te.get(y,E.length),p.init(k),E.push(p),ee.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),lt.setFromProjectionMatrix(ee,An,k.reversedDepth),J=this.localClippingEnabled,it=ae.init(this.clippingPlanes,J),m=$.get(y,T.length),m.init(),T.push(m),se.enabled===!0&&se.isPresenting===!0){const ie=S.xr.getDepthSensingMesh();ie!==null&&Ws(ie,k,-1/0,S.sortObjects)}Ws(y,k,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(K,te),je=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,je&&be.addToRenderList(m,y),this.info.render.frame++,it===!0&&ae.beginShadows();const G=p.state.shadowsArray;Se.render(G,y,k),it===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,H=m.transmissive;if(p.setupLights(),k.isArrayCamera){const ie=k.cameras;if(H.length>0)for(let de=0,ve=ie.length;de<ve;de++){const pe=ie[de];ic(X,H,y,pe)}je&&be.render(y);for(let de=0,ve=ie.length;de<ve;de++){const pe=ie[de];nc(m,y,pe,pe.viewport)}}else H.length>0&&ic(X,H,y,k),je&&be.render(y),nc(m,y,k);A!==null&&P===0&&(Ve.updateMultisampleRenderTarget(A),Ve.updateRenderTargetMipmap(A)),y.isScene===!0&&y.onAfterRender(S,y,k),ue.resetDefaultState(),x=-1,_=null,E.pop(),E.length>0?(p=E[E.length-1],it===!0&&ae.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function Ws(y,k,G,X){if(y.visible===!1)return;if(y.layers.test(k.layers)){if(y.isGroup)G=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(k);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||lt.intersectsSprite(y)){X&&Fe.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ee);const de=V.update(y),ve=y.material;ve.visible&&m.push(y,de,ve,G,Fe.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||lt.intersectsObject(y))){const de=V.update(y),ve=y.material;if(X&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Fe.copy(y.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Fe.copy(de.boundingSphere.center)),Fe.applyMatrix4(y.matrixWorld).applyMatrix4(ee)),Array.isArray(ve)){const pe=de.groups;for(let De=0,Ue=pe.length;De<Ue;De++){const we=pe[De],Xe=ve[we.materialIndex];Xe&&Xe.visible&&m.push(y,de,Xe,G,Fe.z,we)}}else ve.visible&&m.push(y,de,ve,G,Fe.z,null)}}const ie=y.children;for(let de=0,ve=ie.length;de<ve;de++)Ws(ie[de],k,G,X)}function nc(y,k,G,X){const H=y.opaque,ie=y.transmissive,de=y.transparent;p.setupLightsView(G),it===!0&&ae.setGlobalState(S.clippingPlanes,G),X&&xe.viewport(b.copy(X)),H.length>0&&Jr(H,k,G),ie.length>0&&Jr(ie,k,G),de.length>0&&Jr(de,k,G),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function ic(y,k,G,X){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new Ci(1,1,{generateMipmaps:!0,type:ze.has("EXT_color_buffer_half_float")||ze.has("EXT_color_buffer_float")?qr:Cn,minFilter:Ai,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const ie=p.state.transmissionRenderTarget[X.id],de=X.viewport||b;ie.setSize(de.z*S.transmissionResolutionScale,de.w*S.transmissionResolutionScale);const ve=S.getRenderTarget(),pe=S.getActiveCubeFace(),De=S.getActiveMipmapLevel();S.setRenderTarget(ie),S.getClearColor(N),F=S.getClearAlpha(),F<1&&S.setClearColor(16777215,.5),S.clear(),je&&be.render(G);const Ue=S.toneMapping;S.toneMapping=ti;const we=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),it===!0&&ae.setGlobalState(S.clippingPlanes,X),Jr(y,G,X),Ve.updateMultisampleRenderTarget(ie),Ve.updateRenderTargetMipmap(ie),ze.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let at=0,_t=k.length;at<_t;at++){const dt=k[at],ct=dt.object,Ce=dt.geometry,gt=dt.material,tt=dt.group;if(gt.side===zn&&ct.layers.test(X.layers)){const Yt=gt.side;gt.side=$t,gt.needsUpdate=!0,rc(ct,G,X,Ce,gt,tt),gt.side=Yt,gt.needsUpdate=!0,Xe=!0}}Xe===!0&&(Ve.updateMultisampleRenderTarget(ie),Ve.updateRenderTargetMipmap(ie))}S.setRenderTarget(ve,pe,De),S.setClearColor(N,F),we!==void 0&&(X.viewport=we),S.toneMapping=Ue}function Jr(y,k,G){const X=k.isScene===!0?k.overrideMaterial:null;for(let H=0,ie=y.length;H<ie;H++){const de=y[H],ve=de.object,pe=de.geometry,De=de.group;let Ue=de.material;Ue.allowOverride===!0&&X!==null&&(Ue=X),ve.layers.test(G.layers)&&rc(ve,k,G,pe,Ue,De)}}function rc(y,k,G,X,H,ie){y.onBeforeRender(S,k,G,X,H,ie),y.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),H.onBeforeRender(S,k,G,X,y,ie),H.transparent===!0&&H.side===zn&&H.forceSinglePass===!1?(H.side=$t,H.needsUpdate=!0,S.renderBufferDirect(G,k,X,H,y,ie),H.side=si,H.needsUpdate=!0,S.renderBufferDirect(G,k,X,H,y,ie),H.side=zn):S.renderBufferDirect(G,k,X,H,y,ie),y.onAfterRender(S,k,G,X,H,ie)}function Kr(y,k,G){k.isScene!==!0&&(k=Ae);const X=Me.get(y),H=p.state.lights,ie=p.state.shadowsArray,de=H.state.version,ve=Y.getParameters(y,H.state,ie,k,G),pe=Y.getProgramCacheKey(ve);let De=X.programs;X.environment=y.isMeshStandardMaterial?k.environment:null,X.fog=k.fog,X.envMap=(y.isMeshStandardMaterial?Mt:wt).get(y.envMap||X.environment),X.envMapRotation=X.environment!==null&&y.envMap===null?k.environmentRotation:y.envMapRotation,De===void 0&&(y.addEventListener("dispose",Z),De=new Map,X.programs=De);let Ue=De.get(pe);if(Ue!==void 0){if(X.currentProgram===Ue&&X.lightsStateVersion===de)return ac(y,ve),Ue}else ve.uniforms=Y.getUniforms(y),y.onBeforeCompile(ve,S),Ue=Y.acquireProgram(ve,pe),De.set(pe,Ue),X.uniforms=ve.uniforms;const we=X.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(we.clippingPlanes=ae.uniform),ac(y,ve),X.needsLights=Du(y),X.lightsStateVersion=de,X.needsLights&&(we.ambientLightColor.value=H.state.ambient,we.lightProbe.value=H.state.probe,we.directionalLights.value=H.state.directional,we.directionalLightShadows.value=H.state.directionalShadow,we.spotLights.value=H.state.spot,we.spotLightShadows.value=H.state.spotShadow,we.rectAreaLights.value=H.state.rectArea,we.ltc_1.value=H.state.rectAreaLTC1,we.ltc_2.value=H.state.rectAreaLTC2,we.pointLights.value=H.state.point,we.pointLightShadows.value=H.state.pointShadow,we.hemisphereLights.value=H.state.hemi,we.directionalShadowMap.value=H.state.directionalShadowMap,we.directionalShadowMatrix.value=H.state.directionalShadowMatrix,we.spotShadowMap.value=H.state.spotShadowMap,we.spotLightMatrix.value=H.state.spotLightMatrix,we.spotLightMap.value=H.state.spotLightMap,we.pointShadowMap.value=H.state.pointShadowMap,we.pointShadowMatrix.value=H.state.pointShadowMatrix),X.currentProgram=Ue,X.uniformsList=null,Ue}function sc(y){if(y.uniformsList===null){const k=y.currentProgram.getUniforms();y.uniformsList=ws.seqWithValue(k.seq,y.uniforms)}return y.uniformsList}function ac(y,k){const G=Me.get(y);G.outputColorSpace=k.outputColorSpace,G.batching=k.batching,G.batchingColor=k.batchingColor,G.instancing=k.instancing,G.instancingColor=k.instancingColor,G.instancingMorph=k.instancingMorph,G.skinning=k.skinning,G.morphTargets=k.morphTargets,G.morphNormals=k.morphNormals,G.morphColors=k.morphColors,G.morphTargetsCount=k.morphTargetsCount,G.numClippingPlanes=k.numClippingPlanes,G.numIntersection=k.numClipIntersection,G.vertexAlphas=k.vertexAlphas,G.vertexTangents=k.vertexTangents,G.toneMapping=k.toneMapping}function Ru(y,k,G,X,H){k.isScene!==!0&&(k=Ae),Ve.resetTextureUnits();const ie=k.fog,de=X.isMeshStandardMaterial?k.environment:null,ve=A===null?S.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:cr,pe=(X.isMeshStandardMaterial?Mt:wt).get(X.envMap||de),De=X.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ue=!!G.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),we=!!G.morphAttributes.position,Xe=!!G.morphAttributes.normal,at=!!G.morphAttributes.color;let _t=ti;X.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(_t=S.toneMapping);const dt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ct=dt!==void 0?dt.length:0,Ce=Me.get(X),gt=p.state.lights;if(it===!0&&(J===!0||y!==_)){const Bt=y===_&&X.id===x;ae.setState(X,y,Bt)}let tt=!1;X.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==gt.state.version||Ce.outputColorSpace!==ve||H.isBatchedMesh&&Ce.batching===!1||!H.isBatchedMesh&&Ce.batching===!0||H.isBatchedMesh&&Ce.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ce.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ce.instancing===!1||!H.isInstancedMesh&&Ce.instancing===!0||H.isSkinnedMesh&&Ce.skinning===!1||!H.isSkinnedMesh&&Ce.skinning===!0||H.isInstancedMesh&&Ce.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ce.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ce.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ce.instancingMorph===!1&&H.morphTexture!==null||Ce.envMap!==pe||X.fog===!0&&Ce.fog!==ie||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==ae.numPlanes||Ce.numIntersection!==ae.numIntersection)||Ce.vertexAlphas!==De||Ce.vertexTangents!==Ue||Ce.morphTargets!==we||Ce.morphNormals!==Xe||Ce.morphColors!==at||Ce.toneMapping!==_t||Ce.morphTargetsCount!==ct)&&(tt=!0):(tt=!0,Ce.__version=X.version);let Yt=Ce.currentProgram;tt===!0&&(Yt=Kr(X,k,H));let Li=!1,jt=!1,_r=!1;const vt=Yt.getUniforms(),sn=Ce.uniforms;if(xe.useProgram(Yt.program)&&(Li=!0,jt=!0,_r=!0),X.id!==x&&(x=X.id,jt=!0),Li||_!==y){xe.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),vt.setValue(L,"projectionMatrix",y.projectionMatrix),vt.setValue(L,"viewMatrix",y.matrixWorldInverse);const qt=vt.map.cameraPosition;qt!==void 0&&qt.setValue(L,ge.setFromMatrixPosition(y.matrixWorld)),Ie.logarithmicDepthBuffer&&vt.setValue(L,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&vt.setValue(L,"isOrthographic",y.isOrthographicCamera===!0),_!==y&&(_=y,jt=!0,_r=!0)}if(H.isSkinnedMesh){vt.setOptional(L,H,"bindMatrix"),vt.setOptional(L,H,"bindMatrixInverse");const Bt=H.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),vt.setValue(L,"boneTexture",Bt.boneTexture,Ve))}H.isBatchedMesh&&(vt.setOptional(L,H,"batchingTexture"),vt.setValue(L,"batchingTexture",H._matricesTexture,Ve),vt.setOptional(L,H,"batchingIdTexture"),vt.setValue(L,"batchingIdTexture",H._indirectTexture,Ve),vt.setOptional(L,H,"batchingColorTexture"),H._colorsTexture!==null&&vt.setValue(L,"batchingColorTexture",H._colorsTexture,Ve));const an=G.morphAttributes;if((an.position!==void 0||an.normal!==void 0||an.color!==void 0)&&re.update(H,G,Yt),(jt||Ce.receiveShadow!==H.receiveShadow)&&(Ce.receiveShadow=H.receiveShadow,vt.setValue(L,"receiveShadow",H.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(sn.envMap.value=pe,sn.flipEnvMap.value=pe.isCubeTexture&&pe.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&k.environment!==null&&(sn.envMapIntensity.value=k.environmentIntensity),jt&&(vt.setValue(L,"toneMappingExposure",S.toneMappingExposure),Ce.needsLights&&Pu(sn,_r),ie&&X.fog===!0&&Q.refreshFogUniforms(sn,ie),Q.refreshMaterialUniforms(sn,X,z,q,p.state.transmissionRenderTarget[y.id]),ws.upload(L,sc(Ce),sn,Ve)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(ws.upload(L,sc(Ce),sn,Ve),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&vt.setValue(L,"center",H.center),vt.setValue(L,"modelViewMatrix",H.modelViewMatrix),vt.setValue(L,"normalMatrix",H.normalMatrix),vt.setValue(L,"modelMatrix",H.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Bt=X.uniformsGroups;for(let qt=0,Xs=Bt.length;qt<Xs;qt++){const ci=Bt[qt];ke.update(ci,Yt),ke.bind(ci,Yt)}}return Yt}function Pu(y,k){y.ambientLightColor.needsUpdate=k,y.lightProbe.needsUpdate=k,y.directionalLights.needsUpdate=k,y.directionalLightShadows.needsUpdate=k,y.pointLights.needsUpdate=k,y.pointLightShadows.needsUpdate=k,y.spotLights.needsUpdate=k,y.spotLightShadows.needsUpdate=k,y.rectAreaLights.needsUpdate=k,y.hemisphereLights.needsUpdate=k}function Du(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(y,k,G){const X=Me.get(y);X.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),Me.get(y.texture).__webglTexture=k,Me.get(y.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:G,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,k){const G=Me.get(y);G.__webglFramebuffer=k,G.__useDefaultFramebuffer=k===void 0};const Lu=L.createFramebuffer();this.setRenderTarget=function(y,k=0,G=0){A=y,R=k,P=G;let X=!0,H=null,ie=!1,de=!1;if(y){const pe=Me.get(y);if(pe.__useDefaultFramebuffer!==void 0)xe.bindFramebuffer(L.FRAMEBUFFER,null),X=!1;else if(pe.__webglFramebuffer===void 0)Ve.setupRenderTarget(y);else if(pe.__hasExternalTextures)Ve.rebindTextures(y,Me.get(y.texture).__webglTexture,Me.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const we=y.depthTexture;if(pe.__boundDepthTexture!==we){if(we!==null&&Me.has(we)&&(y.width!==we.image.width||y.height!==we.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ve.setupDepthRenderbuffer(y)}}const De=y.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(de=!0);const Ue=Me.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ue[k])?H=Ue[k][G]:H=Ue[k],ie=!0):y.samples>0&&Ve.useMultisampledRTT(y)===!1?H=Me.get(y).__webglMultisampledFramebuffer:Array.isArray(Ue)?H=Ue[G]:H=Ue,b.copy(y.viewport),I.copy(y.scissor),U=y.scissorTest}else b.copy(ce).multiplyScalar(z).floor(),I.copy(Ne).multiplyScalar(z).floor(),U=st;if(G!==0&&(H=Lu),xe.bindFramebuffer(L.FRAMEBUFFER,H)&&X&&xe.drawBuffers(y,H),xe.viewport(b),xe.scissor(I),xe.setScissorTest(U),ie){const pe=Me.get(y.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+k,pe.__webglTexture,G)}else if(de){const pe=k;for(let De=0;De<y.textures.length;De++){const Ue=Me.get(y.textures[De]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+De,Ue.__webglTexture,G,pe)}}else if(y!==null&&G!==0){const pe=Me.get(y.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,pe.__webglTexture,G)}x=-1},this.readRenderTargetPixels=function(y,k,G,X,H,ie,de,ve=0){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=Me.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&de!==void 0&&(pe=pe[de]),pe){xe.bindFramebuffer(L.FRAMEBUFFER,pe);try{const De=y.textures[ve],Ue=De.format,we=De.type;if(!Ie.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ie.textureTypeReadable(we)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=y.width-X&&G>=0&&G<=y.height-H&&(y.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ve),L.readPixels(k,G,X,H,Ee.convert(Ue),Ee.convert(we),ie))}finally{const De=A!==null?Me.get(A).__webglFramebuffer:null;xe.bindFramebuffer(L.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(y,k,G,X,H,ie,de,ve=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=Me.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&de!==void 0&&(pe=pe[de]),pe)if(k>=0&&k<=y.width-X&&G>=0&&G<=y.height-H){xe.bindFramebuffer(L.FRAMEBUFFER,pe);const De=y.textures[ve],Ue=De.format,we=De.type;if(!Ie.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ie.textureTypeReadable(we))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xe=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Xe),L.bufferData(L.PIXEL_PACK_BUFFER,ie.byteLength,L.STREAM_READ),y.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ve),L.readPixels(k,G,X,H,Ee.convert(Ue),Ee.convert(we),0);const at=A!==null?Me.get(A).__webglFramebuffer:null;xe.bindFramebuffer(L.FRAMEBUFFER,at);const _t=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await hh(L,_t,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Xe),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ie),L.deleteBuffer(Xe),L.deleteSync(_t),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,k=null,G=0){const X=Math.pow(2,-G),H=Math.floor(y.image.width*X),ie=Math.floor(y.image.height*X),de=k!==null?k.x:0,ve=k!==null?k.y:0;Ve.setTexture2D(y,0),L.copyTexSubImage2D(L.TEXTURE_2D,G,0,0,de,ve,H,ie),xe.unbindTexture()};const Iu=L.createFramebuffer(),Uu=L.createFramebuffer();this.copyTextureToTexture=function(y,k,G=null,X=null,H=0,ie=null){ie===null&&(H!==0?(Vr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ie=H,H=0):ie=0);let de,ve,pe,De,Ue,we,Xe,at,_t;const dt=y.isCompressedTexture?y.mipmaps[ie]:y.image;if(G!==null)de=G.max.x-G.min.x,ve=G.max.y-G.min.y,pe=G.isBox3?G.max.z-G.min.z:1,De=G.min.x,Ue=G.min.y,we=G.isBox3?G.min.z:0;else{const an=Math.pow(2,-H);de=Math.floor(dt.width*an),ve=Math.floor(dt.height*an),y.isDataArrayTexture?pe=dt.depth:y.isData3DTexture?pe=Math.floor(dt.depth*an):pe=1,De=0,Ue=0,we=0}X!==null?(Xe=X.x,at=X.y,_t=X.z):(Xe=0,at=0,_t=0);const ct=Ee.convert(k.format),Ce=Ee.convert(k.type);let gt;k.isData3DTexture?(Ve.setTexture3D(k,0),gt=L.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(Ve.setTexture2DArray(k,0),gt=L.TEXTURE_2D_ARRAY):(Ve.setTexture2D(k,0),gt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,k.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,k.unpackAlignment);const tt=L.getParameter(L.UNPACK_ROW_LENGTH),Yt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Li=L.getParameter(L.UNPACK_SKIP_PIXELS),jt=L.getParameter(L.UNPACK_SKIP_ROWS),_r=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,dt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,dt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,De),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ue),L.pixelStorei(L.UNPACK_SKIP_IMAGES,we);const vt=y.isDataArrayTexture||y.isData3DTexture,sn=k.isDataArrayTexture||k.isData3DTexture;if(y.isDepthTexture){const an=Me.get(y),Bt=Me.get(k),qt=Me.get(an.__renderTarget),Xs=Me.get(Bt.__renderTarget);xe.bindFramebuffer(L.READ_FRAMEBUFFER,qt.__webglFramebuffer),xe.bindFramebuffer(L.DRAW_FRAMEBUFFER,Xs.__webglFramebuffer);for(let ci=0;ci<pe;ci++)vt&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Me.get(y).__webglTexture,H,we+ci),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Me.get(k).__webglTexture,ie,_t+ci)),L.blitFramebuffer(De,Ue,de,ve,Xe,at,de,ve,L.DEPTH_BUFFER_BIT,L.NEAREST);xe.bindFramebuffer(L.READ_FRAMEBUFFER,null),xe.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(H!==0||y.isRenderTargetTexture||Me.has(y)){const an=Me.get(y),Bt=Me.get(k);xe.bindFramebuffer(L.READ_FRAMEBUFFER,Iu),xe.bindFramebuffer(L.DRAW_FRAMEBUFFER,Uu);for(let qt=0;qt<pe;qt++)vt?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,an.__webglTexture,H,we+qt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,an.__webglTexture,H),sn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Bt.__webglTexture,ie,_t+qt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Bt.__webglTexture,ie),H!==0?L.blitFramebuffer(De,Ue,de,ve,Xe,at,de,ve,L.COLOR_BUFFER_BIT,L.NEAREST):sn?L.copyTexSubImage3D(gt,ie,Xe,at,_t+qt,De,Ue,de,ve):L.copyTexSubImage2D(gt,ie,Xe,at,De,Ue,de,ve);xe.bindFramebuffer(L.READ_FRAMEBUFFER,null),xe.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else sn?y.isDataTexture||y.isData3DTexture?L.texSubImage3D(gt,ie,Xe,at,_t,de,ve,pe,ct,Ce,dt.data):k.isCompressedArrayTexture?L.compressedTexSubImage3D(gt,ie,Xe,at,_t,de,ve,pe,ct,dt.data):L.texSubImage3D(gt,ie,Xe,at,_t,de,ve,pe,ct,Ce,dt):y.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ie,Xe,at,de,ve,ct,Ce,dt.data):y.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ie,Xe,at,dt.width,dt.height,ct,dt.data):L.texSubImage2D(L.TEXTURE_2D,ie,Xe,at,de,ve,ct,Ce,dt);L.pixelStorei(L.UNPACK_ROW_LENGTH,tt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Yt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Li),L.pixelStorei(L.UNPACK_SKIP_ROWS,jt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,_r),ie===0&&k.generateMipmaps&&L.generateMipmap(gt),xe.unbindTexture()},this.initRenderTarget=function(y){Me.get(y).__webglFramebuffer===void 0&&Ve.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Ve.setTextureCube(y,0):y.isData3DTexture?Ve.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Ve.setTexture2DArray(y,0):Ve.setTexture2D(y,0),xe.unbindTexture()},this.resetState=function(){R=0,P=0,A=null,xe.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}}const Cs=["Curto","Cacheado","Comprido","Coque","Moicano","Afro","Tranças","Topete","Careca","Mullet rock","Topete rockabilly","Espigado punk","Franja alternativa","Metal · Headbanger"],To=[0,0,0,0,100,240,480,720,0,1200,1400,1800,2100,2600],qo=[{key:"jacket",name:"Casaco aberto",points:600},{key:"gloves",name:"Luvas esportivas",points:960},{key:"tattoo",name:"Tatuagem de circuito",points:2400},{key:"tattooBolt",name:"Tatuagem de raio",points:3e3},{key:"tattooStar",name:"Tatuagem de estrela",points:3600},{key:"beard",name:"Barba",points:400},{key:"nails",name:"Unhas coloridas",points:200},{key:"strong",name:"Porte atlético",points:1600},{key:"sandals",name:"Chinelo · dedo avermelhado",points:800,solved:20},{key:"bracelets",name:"Pulseiras de rock",points:150},{key:"phone",name:"Celular",points:1e3},{key:"tablet",name:"Tablet",points:1800},{key:"bluePants",name:"Calça azul",points:300},{key:"greenSkirt",name:"Saia verde",points:300}],vu=[["tattoo","tattooBolt","tattooStar"],["gloves","nails"],["phone","tablet"],["bluePants","greenSkirt"]];function q0(i,e,t){const n={...i};for(const r of vu)if(r.includes(e))for(const s of r)n[s]=!1;return{...n,[e]:t}}function Us(i,e=0,t=0){const n={...i,style:e>=(To[i.style]??1/0)?i.style:0,...Object.fromEntries(qo.map(r=>[r.key,!!i[r.key]&&e>=r.points&&t>=(r.solved||0)]))};for(const r of vu){let s=!1;for(const a of r)s&&(n[a]=!1),s||=n[a]}return n}const Ns=["#171717","#613b22","#d4a84b","#a34324","#294b78","#70499b","#808080","#d4d7d9","#3f704b","#a13f69"];function Qn(i){return{style:Number.isInteger(i?.style)&&i.style>=0&&i.style<Cs.length?i.style:0,color:Ns.includes(i?.color)?i.color:Ns[1],...Object.fromEntries(qo.map(e=>[e.key,i?.[e.key]===!0]))}}function _u(i){const e=new Xt;e.name="studentHair",i.add(e);const t=new Sn({color:Ns[1],roughness:.9}),n=(s,a,o,l,c)=>{const u=new $e(a,t);u.position.set(o,l,c),u.userData.hairStyle=s,u.castShadow=!0,e.add(u)};n(0,new qe(.43,.14,.42),0,1.96,0),n(0,new qe(.43,.2,.09),0,1.82,.17);for(let s=-1;s<=1;s++)for(let a=-1;a<=1;a++)n(1,new Ur(.125,10,8),s*.15,2.01+(s===0&&a===0?.04:0),a*.15);n(1,new qe(.43,.13,.1),0,1.86,.17),n(2,new qe(.45,.16,.44),0,1.96,0),n(2,new qe(.46,.62,.16),0,1.62,.19);for(const s of[-1,1])n(2,new qe(.1,.4,.25),s*.21,1.75,.06);n(3,new qe(.42,.14,.41),0,1.96,0),n(3,new Ur(.17,12,10),0,2.11,.16),n(3,new qe(.43,.2,.09),0,1.82,.17),n(4,new qe(.13,.34,.45),0,2.04,0);for(let s=-1;s<=1;s++)for(let a=-1;a<=1;a++)n(5,new Ur(.19,10,8),s*.17,2.08,a*.17);n(6,new qe(.43,.13,.42),0,1.96,0);for(const s of[-1,1])n(6,new Ri(.07,.055,.65,10),s*.24,1.68,.18);const r=new qe(.43,.26,.3);n(7,r,0,2.02,-.07),n(7,new qe(.43,.15,.2),0,1.93,.13),n(9,new qe(.42,.19,.43),0,2,0);for(let s=-1;s<=1;s++)n(9,new qe(.13,.62,.16),s*.13,1.66,.23);n(10,new qe(.43,.17,.4),0,1.96,0),n(10,new qe(.42,.2,.25),0,2.08,-.08),n(10,new qe(.36,.15,.2),0,2.18,-.14),n(11,new qe(.42,.1,.4),0,1.96,0);for(let s=0;s<5;s++)n(11,new Gr(.08,.32,5),(s-2)*.09,2.15,s%2?-.09:.08);n(12,new qe(.43,.16,.44),0,1.98,0);for(let s=0;s<4;s++)n(12,new qe(.12,.18+s*.04,.07),-.16+s*.09,1.89-s*.025,-.22);n(12,new qe(.1,.45,.3),.23,1.75,.07),n(13,new qe(.46,.16,.44),0,1.99,.01),n(13,new qe(.49,1,.16),0,1.47,.23);for(const s of[-1,1])n(13,new qe(.12,.92,.29),s*.25,1.5,.08),n(13,new qe(.09,.78,.07),s*.2,1.52,-.22);return i._hairMaterial=t,ur(i,{style:0,color:Ns[1]}),e}function ur(i,e){const t=Qn(e),n=i.getObjectByName("studentHair");if(n){i._hairMaterial??=new Sn({roughness:.9}),i._hairMaterial.color.set(t.color);for(const r of n.children)r.material=i._hairMaterial,r.visible=r.userData.hairStyle===t.style;i.traverse(r=>{r.userData.cosmetic&&(r.visible=!!t[r.userData.cosmetic]),r.userData.cosmetic==="bracelets"&&r.scale.set(t.strong?1.2:1,1,t.strong?1.2:1),r.userData.uniformPants&&(r.visible=!t.greenSkirt&&!t.bluePants),r.userData.uniformShoe&&(r.visible=!t.sandals),["tattoo","tattooBolt","tattooStar","nails","bracelets"].includes(r.userData.cosmetic)&&(r.userData.baseZ??=r.position.z,r.position.z=r.userData.baseZ+(t.strong?Math.sign(r.userData.baseZ)*.035:0))}),i.userData.appearance=t}}function $0(i,e,t=[]){const n=(s,a,o,l,c,u,d,f,h)=>{const g=new $e(new qe(o,l,c),new Sn({color:h,roughness:.8}));return g.position.set(u,d,f),g.userData.cosmetic=a,g.visible=!1,s.add(g),g};n(i,"beard",.34,.15,.035,0,1.58,-.211,"#613b22");const r=new $e(new Ri(.31,.48,.55,10),new Sn({color:"#008241",roughness:.8}));r.position.set(0,.57,0),r.userData.cosmetic="greenSkirt",r.visible=!1,i.add(r),n(i,"jacket",.62,.61,.08,0,1.13,.2,"#075b38");for(const s of[-1,1])n(i,"jacket",.14,.61,.08,s*.25,1.13,-.2,"#075b38"),n(i,"jacket",.025,.6,.09,s*.17,1.13,-.205,"#ed8b23");for(const s of e){n(s,"bracelets",.205,.045,.215,0,-.5,0,"#1e262b"),n(s,"bracelets",.21,.025,.22,0,-.54,0,"#ed8b23"),s===e[0]&&(n(s,"phone",.18,.32,.045,0,-.61,-.14,"#17252b"),n(s,"phone",.145,.25,.01,0,-.6,-.167,"#71d1bc"),n(s,"tablet",.36,.46,.045,0,-.6,-.15,"#17252b"),n(s,"tablet",.31,.38,.01,0,-.59,-.177,"#71d1bc")),n(s,"strong",.25,.27,.26,0,-.14,0,"#ffffff"),n(s,"strong",.23,.23,.24,0,-.48,0,"#c48c68");for(const a of[-.055,0,.055])for(const o of[-.095,.095])n(s,"nails",.035,.05,.012,a,-.59,o,"#c02d78");for(const a of[-.101,.101]){for(const[o,l,c]of[[0,-.4,-.55],[.025,-.46,-.55]]){const u=n(s,"tattooBolt",.028,.09,.008,o,l,a,"#152a31");u.rotation.z=c}for(const o of[0,Math.PI/4]){const l=n(s,"tattooStar",.09,.025,.008,0,-.43,a,"#152a31");l.rotation.z=o}}n(s,"gloves",.2,.17,.21,0,-.59,0,"#253e48"),n(s,"gloves",.205,.035,.215,0,-.51,0,"#ed8b23");for(const a of[-.096,.096])n(s,"tattoo",.025,.12,.008,-.035,-.43,a,"#153c35"),n(s,"tattoo",.09,.018,.008,0,-.4,a,"#153c35"),n(s,"tattoo",.025,.07,.008,.035,-.43,a,"#153c35")}for(const s of t){n(s,"bluePants",.235,.62,.275,0,-.3,0,"#245c97"),n(s,"greenSkirt",.17,.44,.2,0,-.4,0,"#c48c68"),n(s,"sandals",.26,.045,.42,0,-.75,-.05,"#102e3b"),n(s,"sandals",.22,.09,.35,0,-.69,-.065,"#c48c68");for(const a of[-1,1]){const o=n(s,"sandals",.025,.035,.2,a*.04,-.63,-.08,"#217a5b");o.rotation.y=a*.45}s===t[0]&&n(s,"sandals",.07,.07,.055,-.065,-.675,-.24,"#cd4d4b")}}function Y0({scene:i,label:e,getSession:t,getPosition:n,onOpen:r,onPaid:s,notify:a}){const o=[],l=new qe(1,1,1),c=new Map;function u(A,x,_,b,I,U,N,F){c.has(I)||c.set(I,new Sn({color:I,roughness:.8}));const D=new $e(l,c.get(I));return D.scale.set(x,_,b),D.position.set(U,N,F),A.add(D),D}mn.forEach((A,x)=>{const _=new Xt,b=[];_.visible=!1,i.add(_),u(_,.57,.66,.32,A.color,0,1.14,0),u(_,.4,.43,.39,"#c48c68",0,1.72,0);for(const N of[-.1,.1])u(_,.045,.045,.02,"#20252b",N,1.77,-.2);_u(_),ur(_,{style:A.hair,color:x===2?"#808080":"#613b22"});for(const N of[-1,1]){const F=new Xt;F.position.set(N*.17,.8,0),_.add(F),u(F,.23,.62,.27,A.pants,0,-.3,0),u(F,.25,.16,.4,"#20252b",0,-.69,-.05);const D=new Xt;D.position.set(N*.39,1.41,0),_.add(D),u(D,.2,.3,.23,A.color,0,-.13,0),u(D,.17,.36,.18,"#c48c68",0,-.43,0),b.push({leg:F,arm:D,side:N})}u(_,.52,.36,.06,"#bbc9d3",.42,.83,-.16),u(_,.1,.04,.012,"#43546b",.42,.83,-.198);const I=new $e(new Wn(2.5,.45),e(A.name+" · CLIENTE",512,96,"#fff","#69419b"));I.position.set(0,2.35,0),_.add(I);const U=new $e(new pr(.48,.035,6,20),new ni({color:"#c5a4f1"}));U.rotation.x=-Math.PI/2,U.position.y=.04,_.add(U),o.push({id:x,group:_,tag:I,ring:U,limbs:b,lastX:null,text:""})});const d=document.createElement("dialog");d.id="customerDialog",d.setAttribute("aria-labelledby","customerTitle"),d.innerHTML='<button id="closeCustomer" class="close" aria-label="Fechar atendimento">×</button><span class="eyebrow">CHAMADO EXTRA · NOTEBOOK</span><h1 id="customerTitle"></h1><div id="customerContent"></div><p id="customerFeedback" role="status" aria-live="polite"></p>',document.body.append(d);const f=document.createElement("dialog");f.id="customerList",f.setAttribute("aria-labelledby","customerListTitle"),f.innerHTML='<button class="close" aria-label="Fechar clientes">×</button><h1 id="customerListTitle">Clientes pelo laboratório</h1><p>Procure as etiquetas roxas no corredor da entrada. Aproxime-se e toque em Atender. O primeiro colega que assumir fica com o chamado por até 2 minutos, renovados enquanto atende. Fechar libera a reserva. Cada cliente paga uma vez por rodada.</p><div id="customerListRows"></div>',document.body.append(f),f.querySelector(".close").onclick=()=>f.close();const h=document.createElement("button");h.id="customersButton",h.textContent="Clientes extras",document.querySelector(".stats").append(h),h.onclick=()=>{r(),S(),f.showModal()};let g=-1,v=!1,m=-1,p="",T=-1;const E=A=>t()?.customers?.find(x=>x.id===A);function S(){const A=f.querySelector("#customerListRows");A.replaceChildren();for(const[x,_]of mn.entries()){const b=E(x),I=document.createElement("article");I.className="customer-summary clue";const U=document.createElement("h3"),N=document.createElement("p");U.textContent=_.name+" · "+_.role,N.textContent=_.title+" · até "+et(_.reward)+" · "+(b?.status==="done"?"✓ Atendido por "+b.completed_name:b?.status==="reserved"?"Em atendimento: "+b.owner_name:"Caminhando no corredor da entrada"),I.append(U,N),A.append(I)}}function C(){if(g<0)return;const A=mn[g],x=E(g),_=x?.progress;document.querySelector("#customerTitle").textContent=A.name+" · "+A.title;const b=document.querySelector("#customerContent");b.replaceChildren();const I=document.createElement("p"),U=document.createElement("p");if(I.textContent="“"+A.quote+"”",U.className="clue",U.textContent=A.symptom,b.append(I),T>=0){const D=document.createElement("p");D.className="clue customer-reply",D.textContent=A.name+" responde: "+qs[g][T][1],b.append(D)}b.append(U);const N=document.createElement("p");if(N.textContent="Pagamento: "+et(Bu(g,_?.errors||0))+" · desconto de R$ 5 por erro, mínimo de R$ 120.",b.append(N),x?.status==="done"||x?.owner_id!==t()?.userId){const D=document.createElement("p");D.textContent=x?.status==="done"?"✓ Atendimento concluído por "+x.completed_name+".":"A reserva terminou. Feche esta janela e aproxime-se novamente.",b.append(D);return}function F(D,q,z=null,K=!1){const te=document.createElement("button");te.textContent=D,te.dataset.customerAction=q,z!==null&&(te.dataset.choice=z),te.disabled=v||K,te.onclick=()=>{R(q,z)},b.append(te)}if(_?.diagnosed)if(_.repaired)F("Validar solução e receber pagamento","validate");else{const D=document.createElement("h3");D.textContent="✓ Diagnóstico: "+A.options[A.answer]+". Escolha a solução.",b.append(D),A.repairs.forEach((q,z)=>F(q,"repair",z))}else{const D=document.createElement("details"),q=document.createElement("summary");q.textContent="Converse com "+A.name+" para obter pistas",D.open=T>=0,D.append(q),qs[g].forEach(([te],ce)=>F(te,"question",ce)),b.append(D);for(const te of[...b.querySelectorAll("[data-customer-action=question]")])D.append(te);const z=document.createElement("h3");z.textContent="1. Investigue as evidências",b.append(z),A.tests.forEach((te,ce)=>{if(F((_?.tests.includes(ce)?"✓ ":"＋ ")+te[0],"test",ce,_?.tests.includes(ce)),_?.tests.includes(ce)){const Ne=document.createElement("p");Ne.className="clue",Ne.textContent=te[1],b.append(Ne)}});const K=document.createElement("h3");K.textContent="2. Qual é a causa?",b.append(K),A.options.forEach((te,ce)=>F(te,"diagnosis",ce,_?.tests.length!==2))}document.querySelector("#customerFeedback").textContent=p,document.querySelector("#closeCustomer").disabled=v}async function R(A,x){if(v)return;const _=g,b=t();v=!0,C();try{const I=await b.customerAction(_,A,x);A==="question"&&(T=x),p=A==="question"?qs[_][x][1]:I.feedback||"Etapa registrada.",A==="validate"&&I.job?.status==="done"&&(d.close(),I.paid>0&&(a(P(_)+" atendido! +"+et(I.paid)+"."),s()))}catch(I){p=I.message,await b.refresh().catch(()=>{})}finally{v=!1,d.open&&C()}}function P(A){return mn[A].name}return d.addEventListener("cancel",A=>{v&&A.preventDefault()}),document.querySelector("#closeCustomer").onclick=()=>{v||d.close()},d.addEventListener("close",()=>{const A=g;g=-1,p="",T=-1,A>=0&&t()?.releaseCustomer(A)}),{get near(){return m},get prompt(){return m>=0?"Atender "+mn[m].name+" · até "+et(mn[m].reward):""},get positions(){return o.filter(A=>A.group.visible).map(A=>A.group.position)},get state(){return{active:g,near:m,busy:v,actors:o.filter(A=>A.group.visible).map(A=>({id:A.id,name:mn[A.id].name,x:A.group.position.x,z:A.group.position.z,status:E(A.id)?.status,label:A.text}))}},sync(){d.open&&!v&&C(),f.open&&S()},close(){g=-1,p="",T=-1,d.close(),f.close()},async open(){if(v||m<0)return;const A=m,x=t();if(x?.connected){v=!0,r();try{await x.customerAction(A,"claim",null,n()),g=A,T=-1,p="Reserva confirmada. Investigue antes de escolher a solução.",v=!1,C(),d.showModal()}catch(_){a(_.message)}finally{v=!1}}},update(A,x,_){m=-1;let b=1.8;const I=t(),U=(Date.now()+(I?.serverOffset||0))/1e3;for(const N of o){const F=E(N.id);if(N.group.visible=!!_&&!!F,!N.group.visible)continue;const D=F.status==="reserved"&&Date.parse(F.lease_until)>Date.now()+(I?.serverOffset||0),q=D?{x:F.x,z:F.z}:Ou(N.id,U),z=q.x-(N.lastX??q.x);N.group.position.set(q.x,0,q.z),Math.abs(z)>1e-4&&(N.group.rotation.y=z>0?-Math.PI/2:Math.PI/2),N.lastX=q.x;for(const ce of N.limbs)ce.arm.rotation.x=D?0:Math.sin(U*8)*.35*ce.side,ce.leg.rotation.x=D?0:-Math.sin(U*8)*.45*ce.side;const K=mn[N.id].name+(F.status==="done"?" · ✓ "+F.completed_name:D?" · "+F.owner_name:" · CLIENTE");K!==N.text&&(N.tag.material.map.dispose(),N.tag.material.dispose(),N.tag.material=e(K,1024,128,"#fff",F.status==="done"?"#246e44":"#69419b"),N.text=K),N.tag.quaternion.copy(N.group.quaternion).invert().multiply(x.quaternion),N.ring.material.color.set(F.status==="done"?"#74db9b":"#c5a4f1");const te=Math.hypot(q.x-n().x,q.z-n().z);F.status!=="done"&&(!D||F.owner_id===I.userId)&&te<b&&(m=N.id,b=te)}}}}const xu=[{id:0,name:"Pulo de vitória",price:0},{id:1,name:"Saltinho para trás",price:200},{id:2,name:"Dancinha do técnico",price:350},{id:3,name:"Mortal de comemoração",price:600}];function Mu({rig:i,limbs:e,reducedMotion:t=()=>!1}){let n=!1,r=0,s=0;function a(){i.position.set(0,0,0),i.rotation.set(0,0,0),n=!1}return{start(o=0){n||(s=xu[o]?.id??0,r=0,n=!0)},update(o){if(!n)return;r=Math.min(1,r+Math.max(0,Math.min(o,.05))/1.65);const l=Math.sin(r*Math.PI),c=t();if(i.position.set(0,c?0:Math.abs(Math.sin(r*Math.PI*(s===0?3:2)))*.3,0),i.rotation.set(0,0,0),!c&&s===1&&(i.position.z=l*.25,i.rotation.x=-l*.2),!c&&s===2&&(i.rotation.z=Math.sin(r*Math.PI*8)*.15,i.position.x=Math.sin(r*Math.PI*6)*.12),!c&&s===3){const u=r*2*Math.PI;i.rotation.x=-u,i.position.y=1+l*.55-Math.cos(u),i.position.z=Math.sin(u)}for(const{arm:u,leg:d,side:f}of e)u.rotation.x=c?-.45:-1.6*l+(s===2?Math.sin(r*20)*f*.6:0),d.rotation.x=c?0:s===2?Math.sin(r*20)*f*.2:0;if(r===1){for(const{arm:u,leg:d}of e)u.rotation.x=0,d.rotation.x=0;a()}},reset:a,get active(){return n},get state(){return{active:n,style:s,time:r}}}}function j0({getSession:i,getWallet:e,preview:t,notify:n,host:r,onPreview:s}){const a=u=>document.querySelector(u),o=document.createElement("section");o.id="celebrationShop",o.setAttribute("aria-labelledby","celebrationShopTitle"),o.innerHTML='<span class="eyebrow">SEU JEITO DE COMEMORAR</span><h1 id="celebrationShopTitle">Comemorações</h1><p>O pulo de vitória é gratuito. Os outros estilos são comprados uma única vez por rodada, usando somente dinheiro da carteira.</p><p id="celebrationBalance"></p><div id="celebrationCards" class="wardrobe-grid"></div><p id="celebrationStatus" role="status"></p><button id="tryCelebration">Experimentar a comemoração atual</button>',r.append(o);let l=!1;function c(){const u=i(),d=u?.celebrations||{selected:0,owned:[0]};a("#celebrationBalance").textContent="Carteira: "+e().toLocaleString("pt-BR",{style:"currency",currency:"BRL"});const f=a("#celebrationCards");f.replaceChildren();for(const h of xu){const g=d.owned.includes(h.id),v=d.selected===h.id,m=document.createElement("button");m.className="celebration-card",m.dataset.celebration=h.id,m.disabled=l||!g&&e()<h.price,m.setAttribute("aria-pressed",String(v)),m.innerHTML='<svg viewBox="0 0 120 100" role="img" aria-label="'+h.name+'"><g class="celebration-figure celebration-preview-'+h.id+'"><circle cx="60" cy="27" r="10"/><path d="M60 38v28m0-18-22-13m22 13 22-13M60 66l-17 23m17-23 17 23"/></g></svg>';const p=document.createElement("strong"),T=document.createElement("span");p.textContent=h.name,T.textContent=v?"Em uso":g?"Usar este estilo":"Comprar por R$ "+h.price,m.append(p,T),m.onclick=async()=>{if(!u?.connected){n("Reconecte à turma para escolher sua comemoração.");return}if(!l){l=!0,c();try{await u.setCelebration(h.id,!g),a("#celebrationStatus").textContent=g?"Comemoração selecionada.":"Compra registrada. O estilo está disponível nesta rodada."}catch(E){a("#celebrationStatus").textContent=E.message}finally{l=!1,c()}}},f.append(m)}}return a("#tryCelebration").onclick=()=>{s(),t(i()?.celebrations?.selected||0)},{dialog:o,render:c}}const dr=.86;function hl(i,e,t,n,r=.016){let s=!1,o=Math.min(Math.max(r,0),.05)*2.6;for(const l of[...e].sort((c,u)=>c.id.localeCompare(u.id))){if(o<=0)break;if(l.id===t||!Number.isFinite(l.x)||!Number.isFinite(l.z))continue;let c=i.x-l.x,u=i.z-l.z,d=Math.hypot(c,u);if(d>=dr)continue;d<1e-4&&(c=t.localeCompare(l.id)<0?-1:1,u=0,d=1);const f=dr-Math.hypot(i.x-l.x,i.z-l.z),h=Math.min(f+.002,o),g=c/d,v=u/d;for(const[m,p]of[[g,v],[-v,g],[v,-g]]){const T={x:i.x+m*h,z:i.z+p*h};if(!n(T.x,T.z)&&Math.hypot(T.x-l.x,T.z-l.z)>Math.hypot(i.x-l.x,i.z-l.z)){i.x=T.x,i.z=T.z,o-=h,s=!0;break}}}return s}function Su(i,e,t,n,r){for(const[s,a]of[[e,0],[0,t]]){const o=i.x+s,l=i.z+a;!r(o,l)&&n.every(c=>Math.hypot(o-c.x,l-c.z)>=dr-.06||Math.hypot(o-c.x,l-c.z)>Math.hypot(i.x-c.x,i.z-c.z))&&(i.x=o,i.z=l)}}function J0(i,e,t){for(let n=0;n<30;n++)for(let r=-n;r<=n;r++)for(const s of[0,...Array.from({length:n*2+1},(a,o)=>o-n).filter(a=>a!==0)]){if(Math.max(Math.abs(r),Math.abs(s))!==n)continue;const a={x:i.x+r*1.05,z:i.z+s*1.05};if(!t(a.x,a.z)&&e.every(o=>Math.hypot(a.x-o.x,a.z-o.z)>dr+.1))return a}return{...i}}const ks=[0,28].flatMap((i,e)=>[{x:i+3.9,z:10.5,kind:"electric",name:"fio com faíscas elétricas"},{x:i-3.9,z:-10.5,kind:"fire",name:"foco de fogo simulado"},{x:i+8.6,z:-6.8,kind:"parts",name:"peças pequenas espalhadas"},{x:i-8.6,z:6.8,kind:"tool",name:"chave de fenda fora do lugar"}].map((t,n)=>({...t,id:e*4+n,radius:[0,1].includes(n)?.65:.46})));function $o(i,e){return ks.find(t=>Math.hypot(t.x-i,t.z-e)<=t.radius)||null}function K0(i,{label:e}={}){const t=[],n=[],r=matchMedia("(prefers-reduced-motion: reduce)"),s=new Sn({color:"#e8ad32",roughness:.9}),a=new Sn({color:"#243034",roughness:.8}),o=new Sn({color:"#a6b7ba",roughness:.55}),l=new Ri(.8,.8,.015,24),c=new Ri(.58,.58,.015,20),u=new qe(.06,.06,.5),d=new qe(.13,.1,.22),f=new pr(.08,.025,5,8);for(const g of ks){const v=new Xt;v.position.set(g.x,.02,g.z),i.add(v);const m=new $e(["electric","fire"].includes(g.kind)?l:c,s);if(v.add(m),g.kind==="electric"){const T=new ru([new B(-.66,.06,-.2),new B(-.15,.1,.12),new B(.17,.07,-.1),new B(.66,.06,.2)]);v.add(new $e(new Is(T,12,.055,6,!1),new Sn({color:"#bd421f",roughness:.75})));const E=new ni({color:"#91ecff",transparent:!0,opacity:.85,toneMapped:!1});for(let S=0;S<3;S++){const C=(S-1)*.53,R=[new B(C,.08,0),new B(C+.12,.5,-.02),new B(C-.06,.75,.02),new B(C+.1,1.35,.03)],P=new nf;for(let x=1;x<R.length;x++)P.add(new su(R[x-1],R[x]));const A=new $e(new Is(P,12,.025,5,!1),E);v.add(A),t.push({mesh:A,kind:"electric",phase:S*1.8+g.id})}}else if(g.kind==="fire"){const T=new ni({color:"#ed6f21",transparent:!0,opacity:.88,toneMapped:!1}),E=new ni({color:"#ffc459",toneMapped:!1});for(let C=0;C<3;C++){const R=new $e(new Gr(.25,1.4,7),T);R.position.set((C-1)*.4,.72,C%2*.12-.06),v.add(R),t.push({mesh:R,kind:"fire",phase:C*1.5+g.id})}const S=new $e(new Gr(.22,.9,7),E);S.position.y=.47,v.add(S),t.push({mesh:S,kind:"fire",phase:g.id+.8})}else if(g.kind==="parts")for(let T=0;T<3;T++){const E=new $e(f,o);E.rotation.x=Math.PI/2,E.position.set((T-1)*.2,.06,T%2*.2-.1),v.add(E)}else{const T=new $e(u,o);T.position.y=.08,T.rotation.y=.6,v.add(T);const E=new $e(d,a);E.position.set(-.14,.1,-.2),E.rotation.y=.6,v.add(E)}if(e&&["electric","fire"].includes(g.kind)){const T=new $e(new Wn(1.9,.42),e(g.kind==="fire"?"PERIGO: FOGO":"RISCO ELÉTRICO",512,128,"#ffffff",g.kind==="fire"?"#a53c16":"#164c79"));T.position.set(g.x,2.15,g.z),T.userData.hazardId=g.id,i.add(T),n.push(T)}const p=new $e(new qe(.07,.02,.24),a);p.position.set(0,.025,.35),v.add(p)}let h=0;return{update(g,v){if(v)for(const m of n)m.quaternion.copy(v.quaternion);h=r.matches?0:g;for(const{mesh:m,kind:p,phase:T}of t){const E=r.matches?0:Math.sin(g*2.8+T);p==="fire"?(m.scale.set(1-E*.08,1+E*.18,1+E*.08),m.rotation.z=E*.08):(m.scale.y=1+E*.2,m.rotation.y=E*.2,m.material.opacity=r.matches?.85:.72+Math.sin(g*2)*.14)}},get state(){return{labels:n.length,animatedObjects:t.length,phase:h,reduced:r.matches}}}}function Z0(i){let e=null,t=!1,n=-1/0;return{update(r,s,a=!0){const o=a?$o(r,s):null,l=o?.id??null;l!==e&&(e=l,!(!o||t||performance.now()-n<8e3)&&(n=performance.now(),t=!0,Promise.resolve(i(o)).finally(()=>{t=!1})))},reset(){e=null,n=-1/0}}}function fl(i,e,t,n,r){const s=c=>{if(!c||$o(c.x,c.z)||Math.hypot(c.x-e.x,c.z-e.z)<e.radius+.3)return!1;const u=Math.ceil(Math.hypot(c.x-i.x,c.z-i.z)/.06);let d=i;for(let f=1;f<=u;f++){const h={x:i.x+(c.x-i.x)*f/u,z:i.z+(c.z-i.z)*f/u};if(n(h.x,h.z)||t.some(g=>Math.hypot(h.x-g.x,h.z-g.z)<dr-.03&&Math.hypot(h.x-g.x,h.z-g.z)<=Math.hypot(d.x-g.x,d.z-g.z)))return!1;d=h}return!0},a=i.x-e.x,o=i.z-e.z,l=Math.hypot(a,o)>.001?Math.atan2(o,a):Math.atan2((r?.z??e.z+1)-e.z,(r?.x??e.x)-e.x);for(const c of[1.12,1.35,1.6])for(const u of[0,.4,-.4,.8,-.8,1.2,-1.2,1.6,-1.6,2,-2,2.5,-2.5,Math.PI]){const d={x:e.x+Math.cos(l+u)*c,z:e.z+Math.sin(l+u)*c};if(s(d))return d}return s(r)?{...r}:null}function Q0({position:i,getPeers:e,blocked:t,onReact:n,reducedMotion:r=()=>!1}){let s=!1,a=0,o=null,l=null,c={x:i.x,z:i.z},u=null;function d(h){s||(u=h,l={x:i.x,z:i.z},o=fl(i,u,e(),t,c),a=0,s=!0,n())}function f(h){if(!s){ks.every(m=>Math.hypot(m.x-i.x,m.z-i.z)>m.radius+.35)&&(c={x:i.x,z:i.z});return}if(!o&&(o=fl(i,u,e(),t,c),l={x:i.x,z:i.z},!o))return;a=Math.min(1,a+Math.max(0,Math.min(h,.05))/(r()?.28:.48));const g=1-(1-a)**2,v={x:l.x+(o.x-l.x)*g,z:l.z+(o.z-l.z)*g};if(t(v.x,v.z)||e().some(m=>Math.hypot(v.x-m.x,v.z-m.z)<dr-.03&&Math.hypot(v.x-m.x,v.z-m.z)<=Math.hypot(i.x-m.x,i.z-m.z))){o=null,a=0,i.y=0;return}i.x=v.x,i.z=v.z,i.y=r()?0:Math.sin(a*Math.PI)*.3,a===1&&(i.y=0,s=!1,c={x:i.x,z:i.z},n())}return{start:d,update:f,reset(){s=!1,i.y=0,c={x:i.x,z:i.z}},get active(){return s},get state(){return{active:s,height:i.y,target:o?{...o}:null}}}}const Ss=[["Caminhe até um computador","No celular, arraste o controle MOVER. No computador, use W A S D ou as setas. Aproxime-se de um círculo no chão e desvie das áreas amarelas de perigo.","#touch"],["Inspecione o computador","Use Abrir PC no celular ou pressione E no teclado para abrir a ficha.","#interact"],["Consulte as duas evidências","Leia o relato e use os dois botões de teste. Os resultados ficam no Caderno de evidências.","[data-test]:not(:disabled)"],["Escolha o diagnóstico","Compare os dois resultados antes de escolher uma hipótese. Se errar, leia a orientação e tente novamente.","[data-diagnosis]:not(:disabled)"],["Escolha a solução","Agora selecione o procedimento que trata a causa confirmada. A atividade é uma simulação.","[data-repair]"],["Valide o reparo","Use Verificar solução e concluir. A recompensa e a conclusão serão registradas na turma.",'[data-action="validate"]'],["Responda ao conceito","A pergunta final ajuda a entender o motivo do reparo. Ela não desconta dinheiro ao errar.","[data-challenge]"],["Envie sua participação","Abra Minha participação para avisar o professor. Seu nome completo e a turma já estão registrados.","#notesButton"],["Confirme o envio ao professor","Clique em Enviar minha participação ao professor. Você pode continuar resolvendo outros computadores depois.","#submitParticipation"]];function ev({getState:i,notify:e}){const t=T=>document.querySelector(T),n=document.createElement("section");n.id="guidedTutorial",n.hidden=!0,n.setAttribute("aria-label","Tutorial guiado"),document.body.append(n);const r=document.createElement("button");r.id="tutorialButton",r.textContent="Tutorial guiado",t(".stats").append(r);let s=!1,a=0,o=-1,l="",c=!1,u=0,d="",f=null;const h=()=>{f?.classList.remove("tutorial-highlight"),f=null};function g(T){try{localStorage.setItem(l,T)}catch{}}function v(T){g(T),s=!1,n.hidden=!0,h()}function m(T=!1){const E=i();if(!E.connected){e("Entre na turma para iniciar o tutorial.");return}l="hardware.tutorial.v1."+E.userId;let S="";try{S=localStorage.getItem(l)||""}catch{}!T&&["completed","skipped"].includes(S)||(s=!0,a=0,o=-1,c=!1,d="",u=0,p(!0))}function p(T=!1){if(!s)return;const E=performance.now();if(!T&&E-u<250)return;u=E;const S=i();if(!S.connected||!S.started){n.hidden=!0,h();return}a===0&&S.near>=0&&(a=1),a===1&&S.panelOpen&&(o=S.current,a=2),a>=2&&a<=6&&S.panelOpen&&S.current!==o&&(o=S.current,a=2);const C=S.progress[o];if(a===2&&C?.tests.length===2&&(a=3),a===3&&C?.diagnosed&&(a=4),a===4&&C?.repaired&&(a=5),a===5&&C?.validated&&(a=6),a===6&&C?.challenge&&(a=7),a===7&&S.notesOpen&&(a=8),a===8&&c){v("completed"),e("Tutorial concluído! Sua participação foi enviada ao professor.");return}const R=S.welcomeOpen||S.otherDialog||S.notesOpen&&a<7;if(n.hidden=R,R){h();return}const P=S.notesOpen?t("#notesDialog"):S.panelOpen?t("#panel"):document.body;n.classList.toggle("tutorial-inline",P!==document.body),n.parentElement!==P&&(P.id==="panel"?P.insertBefore(n,t("#caseContent")):P.id==="notesDialog"?P.insertBefore(n,t("#notesForm")):P.append(n));const A=a>=2&&a<=6&&!S.panelOpen,x=a+":"+P.id+":"+A;if(x!==d){d=x,n.replaceChildren();const b=document.createElement("small"),I=document.createElement("strong"),U=document.createElement("p"),N=document.createElement("div"),F=document.createElement("button");if(b.textContent="PRIMEIROS PASSOS · "+(a+1)+" / "+Ss.length,I.textContent=A?"Reabra a ficha para continuar":Ss[a][0],U.textContent=A?"Volte ao computador que estava investigando e use Inspecionar. Seu progresso continua salvo.":Ss[a][1],F.type="button",F.textContent="Agora não",F.onclick=()=>v("skipped"),N.append(F),a===7){const D=document.createElement("button");D.type="button",D.className="primary",D.textContent="Abrir Minha participação",D.onclick=()=>{for(const q of["panel","classroom","teamDialog"])t("#"+q).close();t("#notesButton").click()},N.prepend(D)}n.append(b,I,U,N)}const _=t(A?"#interact":Ss[a][2]);_!==f&&(h(),f=_,f?.classList.add("tutorial-highlight"))}return r.onclick=()=>m(!0),addEventListener("hardware:participation-submitted",()=>{s&&(c=!0,p(!0))}),{start:m,update:p,get state(){return{active:s,step:a,target:o}}}}function tv(i,e,t,n,r){const s=ii[i],a=bl[i];if(!s||!Number.isInteger(t))return null;const o=e==="challenge";if(!["diagnosis","repair","challenge"].includes(e)||(r?.[o?"challengeErrors":"errors"]||0)<=(n?.[o?"challengeErrors":"errors"]||0))return null;const l=o?a.options:e==="repair"?s.repairs:s.options;if(!l[t])return null;const c=s.tests[1];return{title:"Vamos analisar essa escolha",chosen:l[t],reason:o?a.hint:e==="repair"?`A solução precisa tratar o diagnóstico que você já confirmou: ${s.options[s.answer]}. A opção escolhida ainda não resolveu esse problema.`:"Essa hipótese ainda não reúne as evidências necessárias para explicar o caso. Compare sua escolha com o resultado abaixo.",evidence:o?null:{title:c[0],result:c[1]},reflection:o?"Releia o enunciado e confira qual relação ou unidade precisa ser respeitada.":e==="repair"?"Qual procedimento atende a esse resultado? Escolha uma ação que trate a causa confirmada, preservando os dados e a segurança.":"O que esse teste confirmou ou descartou? Sua hipótese explica esse resultado e também o outro teste?",followup:!o&&r.errors>=3?"Dica adicional: altere uma variável de cada vez e escolha a hipótese que explica os dois testes.":null,penalty:o?"Você pode tentar novamente sem desconto na recompensa.":"O erro foi registrado. A regra continua: desconto de R$ 5, com recompensa mínima de R$ 20."}}function nv(i,e,t=""){if(i.replaceChildren(),i.classList.toggle("educational-feedback",!!e),!e){i.textContent=t;return}const n=(r,s)=>{const a=document.createElement(r);return a.textContent=s,i.append(a),a};if(n("strong",e.title),n("p","Sua escolha: “"+e.chosen+"”."),n("p",e.reason),e.evidence){n("p","Resultado de “"+e.evidence.title+"”: "+e.evidence.result);const r=n("button","Rever evidências na ficha");r.type="button",r.onclick=()=>{const s=document.querySelector("#caseContent .evidence-book");s&&(s.open=!0,s.scrollIntoView({block:"center",behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth"}))}}n("p",e.reflection),e.followup&&n("p",e.followup),n("small",e.penalty),i.scrollIntoView({block:"nearest"})}function iv(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},a={},o=i[0].morphTargetsRelative,l=new dn;let c=0;for(let u=0;u<i.length;++u){const d=i[u];let f=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const h in d.attributes){if(!n.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+h+'" attribute exists among all geometries, or in none of them.'),null;s[h]===void 0&&(s[h]=[]),s[h].push(d.attributes[h]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const h in d.morphAttributes){if(!r.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[h]===void 0&&(a[h]=[]),a[h].push(d.morphAttributes[h])}if(e){let h;if(t)h=d.index.count;else if(d.attributes.position!==void 0)h=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,h,u),c+=h}}if(t){let u=0;const d=[];for(let f=0;f<i.length;++f){const h=i[f].index;for(let g=0;g<h.count;++g)d.push(h.getX(g)+u);u+=i[f].attributes.position.count}l.setIndex(d)}for(const u in s){const d=pl(s[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(const u in a){const d=a[u][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<d;++f){const h=[];for(let v=0;v<a[u].length;++v)h.push(a[u][v][f]);const g=pl(h);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function pl(i){let e,t,n,r=-1,s=0;for(let c=0;c<i.length;++c){const u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}const a=new e(s),o=new un(a,t,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const d=l/t;for(let f=0,h=u.count;f<h;f++)for(let g=0;g<t;g++){const v=u.getComponent(f,g);o.setComponent(f+d,g,v)}}else a.set(u.array,l);l+=u.count*t}return r!==void 0&&(o.gpuType=r),o}const Yo=[["power","Botão pressionado","Sem luz • sem giro","O botão é pressionado, mas o gabinete não apresenta atividade."],["post","Ventoinha girando","Tela sem imagem • DRAM aceso","A ventoinha gira enquanto a tela permanece escura e o indicador DRAM fica aceso."],["heat","Tarefa prolongada","Desligamento","Durante uma tarefa, a atividade aumenta e o computador desliga."],["disk","Abrindo arquivo…","Espera • falha","A abertura de um arquivo demora e termina em falha."],["clock","Após retirar da tomada","Data volta ao padrão","O relógio muda para uma data padrão depois da interrupção da alimentação."],["network","PC → rede por cabo","Sem conexão","O computador tenta enviar dados pela rede, mas a conexão não se estabelece."],["glitch","Aplicativo em execução","Imagem com pontos","A tela apresenta pontos coloridos e interrupções na imagem."],["boot","Ligando o computador","Tentativa de boot pela rede","A sequência de partida chega à tentativa de inicialização pela rede."],["disk","Sistema iniciado","Disco de dados não aparece","O sistema abre, mas a segunda unidade não aparece na lista."],["keyboard","Digitando: A B C D","Na tela: A _ C _","Algumas teclas são pressionadas sem que seus caracteres apareçam na tela."],["usb","USB frontal","Dispositivo não reconhecido","Um dispositivo é conectado à porta frontal sem aparecer na tela."],["network","Link ativo","Configuração de rede inválida","Há sinal de link, mas o computador não consegue usar a rede."],["network","Acesso pelo endereço IP","Nome não encontrado","Uma tentativa por IP funciona; a tentativa pelo nome falha."],["conflict","PC A: mesmo IP de B","PC B: mesmo IP de A","Dois computadores tentam usar o mesmo endereço e a comunicação fica intermitente."],["storage","Atualização em andamento","Pouco espaço","A barra de armazenamento está quase cheia e a atualização não termina."],["audio","Áudio em reprodução","Caixas sem som","O aplicativo reproduz áudio, mas as caixas não mostram atividade."],["slow","Aplicativo gráfico","Imagem lenta • resolução baixa","A janela gráfica avança aos poucos, com uma imagem de baixa resolução."],["post","Após adicionar memória","POST não termina","A partida para antes de chegar ao sistema após a expansão de memória."],["fan","Sistema funcionando","Gabinete vibra","A ventoinha gira e o gabinete apresenta vibração repetitiva."],["startup","Entrando no sistema","Muitos aplicativos abrindo","Várias janelas aparecem durante o início e a máquina demora a ficar disponível."],["power","Botão frontal pressionado","Computador não inicia","O botão frontal é pressionado sem iniciar a sequência de partida."],["monitor","Computador ligado","Monitor: sem sinal","O gabinete apresenta atividade, mas o monitor permanece sem sinal."],["dim","Sistema funcionando","Imagem muito fraca","Uma imagem permanece na tela, porém com luminosidade muito baixa."],["glitch","Tela do firmware","Linhas e blocos","Blocos e linhas surgem antes da entrada no sistema operacional."],["fanStop","Ligando o computador","Aviso: CPU FAN","A ventoinha da CPU não gira e um aviso aparece durante a partida."],["post","Após a limpeza","Acende, mas não inicia","O gabinete acende, mas a sequência de partida não chega ao sistema."],["slots","Teste em dois slots","Partida diferente em cada slot","A partida funciona em um slot e falha ao usar o outro."],["restart","Após ajuste de memória","Erros • reinício","A atividade é interrompida por erros e a sequência de partida recomeça."],["memory","Abrindo aplicativos","Máquina lenta","Mais janelas são abertas e a resposta dos aplicativos fica lenta."],["boot","SSD aparece no firmware","Gerenciador de boot ausente","A unidade aparece na lista, mas a opção do gerenciador de inicialização está ausente."],["usb","Unidade USB conectada","Não aparece no explorador","A unidade é conectada, mas o explorador não apresenta o volume."],["usbReset","Vários acessórios no hub","Conecta → desconecta","Novos acessórios são conectados e o hub perde a conexão repetidamente."],["mouse","Mouse sobre superfície brilhante","Ponteiro salta","O mouse se move de forma contínua sobre a mesa, mas o ponteiro salta entre posições."],["network","Comunicação local funciona","Outra rede não responde","A comunicação entre computadores locais funciona, mas a tentativa para outra rede falha."],["wifi","Procurando redes Wi-Fi","Lista de redes vazia","O computador procura redes sem fio, mas a lista permanece vazia."],["network","Testes de rede respondem","Navegador não abre sites","Os testes de conectividade respondem, mas a navegação apresenta falha."],["microphone","Teste do sistema: atividade","Aplicativo: sem entrada","O medidor do sistema registra o microfone, mas o aplicativo não recebe sinal."],["post","Placa acende","POST não inicia","A placa apresenta luz, mas a partida não avança para o POST."],["heat","Após trocar o dissipador","Temperatura sobe rápido","Mesmo com a ventoinha girando, o indicador de temperatura sobe rapidamente."],["printer","Enviando trabalhos","Fila parada","Os trabalhos entram na fila, mas nenhuma folha é impressa."],["bits","Um bit","Painel afirma: dez estados","O painel do exercício associa um único bit a dez estados."],["bits","Um byte","Cadastro afirma: quatro bits","O cadastro agrupa apenas quatro posições como se fossem um byte."],["bits","1010₂","Visor mostra: 16₁₀","O visor recebe 1010 em binário e mostra a conversão descrita no relato."],["bits","13₁₀","Exercício mostra: 1011₂","O exercício exibe a conversão de treze para a sequência indicada no relato."],["bits","Bit mais à esquerda","Peso anotado: 64","O destaque percorre oito posições e para no bit da esquerda com o peso anotado."],["bits","Quatro bits","Formulário afirma: 4 combinações","Quatro posições são destacadas e o formulário apresenta a contagem do relato."],["overflow","Registro de 8 bits sem sinal","Tentativa: 256","Um valor é colocado em um registro de oito posições, e o painel acusa que não cabe."],["overflow","255 + 1","Resultado em apenas 8 bits","A operação chega ao limite do espaço reservado para o resultado."],["hex","A₁₆","Manual mostra: 11₁₀","O manual exibe a equivalência numérica descrita no relato."],["hex","FF₁₆","Relatório mostra: 256₁₀","O relatório exibe a interpretação de FF descrita no relato."],["units","Etiqueta: 1 kB","Inventário: 1024 bytes","Uma etiqueta é copiada para o inventário com a conversão descrita no relato."],["units","Exercício: 2 KiB","Anotação: 2000 bytes","O exercício liga a capacidade em KiB à anotação indicada no relato."],["units","Tabela: 1 MiB","Anotação: 1000000 bytes","A tabela apresenta a conversão de MiB descrita no relato."],["transfer","Anúncio: 80 Mb/s","Registro: 80 MB/s","Uma taxa é copiada para o plano da aula com a mudança de letra descrita no relato."],["units","Inventário: 1 GiB","Anotação: 1000000000 bytes","O inventário apresenta a conversão de GiB descrita no relato."],["transfer","100 MB a 20 MB/s","Roteiro prevê: 10 segundos","Um arquivo avança em direção ao destino; o roteiro mostra a previsão de tempo a conferir."],["pixel","Pixel RGB: 24 bits","Anotação: 24 bytes","As três cores de um pixel aparecem junto ao tamanho anotado no exercício."],["pixel","Imagem: 10 × 10 pixels","Orçamento: 100 bytes","Uma grade de pixels é preenchida enquanto aparece o tamanho estimado no relato."],["text","Caractere: é • UTF-8","Hipótese: sempre 1 byte","Um caractere acentuado é colocado ao lado da hipótese de tamanho a conferir."],["text","HARDWARE","Ficha informa: 64 bytes","As letras da palavra são destacadas ao lado da estimativa registrada na ficha."],["volatile","Dado guardado só na RAM","Desligamento total","Um dado aparece na RAM e desaparece quando a alimentação é desligada."],["ssd","Arquivo no SSD","Descrição: precisa de energia","Um arquivo e a alimentação são destacados para examinar a afirmação do relato."],["cpu","Instrução do programa","Diagrama atribui execução à RAM","Uma instrução percorre o desenho até o componente indicado pelo diagrama do exercício."],["clockRate","Clock: 3 GHz","Quadro: 3 milhões de ciclos/s","Pulsos de relógio ilustram o sinal; a anotação do quadro é apresentada para análise."],["cores","CPU: 4 núcleos • 8 threads","Relatório: 8 núcleos físicos","Quatro blocos de núcleo e oito tarefas aparecem ao lado da interpretação do relatório."],["cache","Cache no desenho","Disco externo lento e grande","O cartaz representa o cache como uma unidade externa, como descrito no relato."],["bus","Barramento: 8 bits","Descrição: 8 bytes por envio","Oito linhas carregam sinais enquanto aparece a descrição de capacidade a conferir."],["address","Endereço com 10 bits","Exercício: só 10 posições","Um endereço muda e destaca posições no desenho de memória junto à contagem do relato."],["bits","Palavra de 32 bits","Roteiro: 32 bytes","Grupos de posições são destacados ao lado da interpretação descrita no roteiro."],["cycle","Roteiro do ciclo básico","Executar → buscar → decodificar","O fluxo segue a ordem descrita no cartaz, que deve ser analisada pelo aluno."],["and","Condição: A e B iguais a 1","Controle usa OR","As duas entradas mudam; o bloco mostra a operação que foi usada no controle."],["or","Condição: ao menos um 1","Indicador usa AND","As entradas mudam e o bloco mostra a operação descrita no relato."],["xor","Condição: entradas diferentes","Também liga com ambas em 1","O par 1 e 1 é destacado e o detector acende, reproduzindo o comportamento relatado."],["not","NOT de 00001111","Largura fixa: oito bits","Oito posições são destacadas para acompanhar a inversão solicitada pelo exercício."],["parity","Dados: 1011","Paridade par anotada: 0","Os bits de dados e o bit adicional são destacados para conferir a paridade."],["mirror","Arquivo em discos espelhados","Excluir → esperando cópia antiga","O arquivo é excluído e desaparece das duas unidades do espelho."],["compress","Texto precisa voltar igual","Método escolhido: com perdas","Um texto passa pela compactação e retorna com caracteres faltando."],["output","Monitor sem toque","Inventário: entrada","Uma imagem chega à tela junto à classificação anotada no inventário."],["driver","Definição no cartaz","Driver = peça que alimenta CPU","O cartaz liga a palavra driver à definição física descrita no relato."],["firmware","Roteiro de inicialização","Sistema → firmware","O fluxo segue a sequência anotada no roteiro, para o aluno conferir."]].map(([i,e,t,n],r)=>Object.freeze({id:r,kind:i,label:e,status:t,description:n}));Yo.push(...zu.map(Object.freeze),...ku.map(Object.freeze));const Cr=i=>String(i).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Be=(i,e,t,n="")=>`<text x="${i}" y="${e}" class="${n}">${Cr(t)}</text>`,Je=(i,e,t,n,r="")=>`<rect x="${i}" y="${e}" width="${t}" height="${n}" rx="8" class="${r}"/>`,gi=(i="",e="")=>`<g class="${e}">${Je(88,15,284,132,"sa-monitor")}${Je(99,26,262,108,"sa-screen")}${i}<path d="M215 147v12h-30m30 0h60" class="sa-wire"/></g>`,ml=(i=410,e=72,t="")=>`<g transform="translate(${i} ${e})"><circle r="24" class="sa-device"/><g class="sa-fan ${t}"><path d="M0 0C-30-30 22-32 0 0C30-30 32 22 0 0C30 30-22 32 0 0C-30 30-32-22 0 0"/></g><circle r="4" class="sa-dot"/></g>`,wa=(i,e,t="")=>`<g class="${t}">${Je(i,e,44,48,"sa-file")}<path d="M${i+9} ${e+16}h26m-26 9h26m-26 9h18" class="sa-wire"/></g>`;function rv(i){if(i.kind.startsWith("notebook-")){const n=`${Je(100,16,270,133,"sa-monitor")}${Je(111,27,248,109,"sa-screen")}<path d="M100 149 65 179H407L370 149Z" class="sa-device"/><path d="M199 169h80" class="sa-wire"/>`,r=i.kind.slice(9);return n+(r==="touchpad"?'<path d="M219 58v39l12-12 10 18 9-5-10-18h18Z" class="sa-device"/><path d="m211 159 17 15m0-15-17 15" class="sa-break"/>':r==="heat"?'<path d="M140 173q-12-12 0-24m98 24q-12-12 0-24m88 24q-12-12 0-24" class="sa-wire sa-temperature"/>'+Be(237,88,"↓ desempenho","sa-center"):r==="battery"?Je(165,59,130,44,"sa-device")+Je(171,65,18,32,"sa-bit sa-disappear")+Be(237,124,"Autonomia curta","sa-center"):'<rect x="111" y="27" width="248" height="109" class="sa-screen sa-disappear"/>'+Be(237,90,"Imagem intermitente","sa-center"))}if(i.kind==="recognition")return'<g transform="translate(60 0)">'+vi(i.picture).replace(/^<svg[^>]*>/,"").replace(/<\/svg>$/,"")+"</g>";const e=i.kind;if(e==="mouse")return gi('<path d="M140 60l0 23 7-7 7 13 6-4-7-12 10-1z" class="sa-cursor"/>')+'<rect x="390" y="30" width="62" height="120" rx="16" class="sa-shiny"/><g class="sa-mouse"><rect x="404" y="55" width="32" height="49" rx="16" class="sa-device"/><path d="M420 55v18" class="sa-wire"/></g>';if(e==="keyboard")return gi(Be(230,86,"A _ C _","sa-center sa-reveal"))+`<g transform="translate(100 164)">${Je(0,0,260,32,"sa-device")}${["A","B","C","D"].map((n,r)=>`<g class="sa-key" style="--i:${r}">${Je(r*62+8,4,52,23)}${Be(r*62+34,21,n,"sa-center")}</g>`).join("")}</g>`;if(["network","conflict","wifi"].includes(e))return`${Je(40,55,128,80,"sa-device")}${Be(104,103,e==="conflict"?"PC A":"PC","sa-center")}<path d="M168 95h140" class="sa-link"/><circle cx="238" cy="95" r="9" class="sa-packet"/>${Je(308,55,128,80,"sa-device")}${Be(372,103,e==="conflict"?"PC B":e==="wifi"?"Wi-Fi":"REDE","sa-center")}<path d="M226 82l24 26m0-26-24 26" class="sa-break sa-reveal"/>`;if(["usb","usbReset"].includes(e))return gi(Be(230,87,"Dispositivos: —","sa-center"))+`<g class="sa-connect">${Je(403,54,37,62,"sa-device")}<path d="M410 54V40h23v14m-12 62v40H372" class="sa-wire"/></g><circle cx="422" cy="84" r="5" class="sa-dot sa-reveal"/>`;if(["fan","fanStop","heat"].includes(e))return gi(`<g class="sa-${e==="heat"?"shutdown":"reveal"}">${Be(230,76,e==="heat"?"Tarefa em execução":e==="fanStop"?"CPU FAN":"Sistema ativo","sa-center")}</g>${e==="heat"?'<rect x="130" y="99" width="200" height="12" rx="6" class="sa-track"/><rect x="130" y="99" width="200" height="12" rx="6" class="sa-temperature"/>':""}`)+`<g class="${e==="fan"?"sa-vibrate":""}">${ml(416,80,e==="fanStop"?"sa-still":"")}</g>`;if(["audio","microphone"].includes(e))return gi(`<g>${Array.from({length:9},(n,r)=>`<rect x="${145+r*19}" y="64" width="9" height="40" rx="3" class="sa-meter" style="--i:${r}"/>`).join("")}</g>`)+`${Je(400,50,47,90,"sa-device")}${Be(423,100,e==="audio"?"♪":"MIC","sa-center")}<path d="M372 95h23" class="sa-link"/><path d="M390 80l12 25m0-25-12 25" class="sa-break"/>`;if(e==="printer")return`${gi(Be(230,70,"Fila: 01 → 02 → 03","sa-center")+Be(230,103,"Aguardando…","sa-center"))}<g>${Je(397,70,66,60,"sa-device")}${Je(410,37,40,51,"sa-file")}<path d="M409 110h40" class="sa-wire"/></g>`;if(["glitch","dim","slow","monitor","power","post","restart","boot","startup","storage","disk","clock","slots","memory"].includes(e)){let n="";return e==="glitch"?n=`<g class="sa-artifacts">${Array.from({length:10},(r,s)=>`<rect x="${113+s*37%230}" y="${35+s*19%85}" width="${12+s*3}" height="7" class="sa-artifact"/>`).join("")}</g>`:e==="dim"?n=`<g opacity=".13">${Je(125,45,205,65,"sa-file")}${Be(230,85,"Área de trabalho","sa-center")}</g>`:e==="power"||e==="monitor"||e==="post"?n=Be(230,87,e==="monitor"?"SEM SINAL":e==="post"?"POST…":"—","sa-center"):e==="clock"?n=`<g class="sa-before">${Be(230,85,"Data configurada","sa-center")}</g><g class="sa-after">${Be(230,85,"Data padrão • aviso","sa-center")}</g>`:e==="slots"?n=`${Je(126,48,208,20,"sa-device")}${Je(126,88,208,20,"sa-device")}<circle cx="319" cy="58" r="5" class="sa-dot"/><circle cx="319" cy="98" r="5" class="sa-break sa-reveal"/>`:e==="startup"||e==="memory"?n=Array.from({length:4},(r,s)=>`<g class="sa-window" style="--i:${s}">${Je(118+s*28,38+s*16,125,43,"sa-file")}${Be(180+s*28,65+s*16,"Aplicativo "+(s+1),"sa-center")}</g>`).join(""):e==="storage"?n=Be(230,65,"Espaço utilizado","sa-center")+'<rect x="120" y="86" width="220" height="18" rx="5" class="sa-track"/><rect x="120" y="86" width="212" height="18" rx="5" class="sa-temperature"/>':e==="restart"?n=`<g class="sa-before">${Be(230,85,"Aplicativo → erro","sa-center")}</g><g class="sa-after">${Be(230,85,"Iniciando novamente…","sa-center")}</g>`:e==="boot"?n=Be(230,69,"Firmware → tentativa de boot","sa-center")+Be(230,104,"Sistema não iniciou","sa-center sa-reveal"):n=Be(230,65,e==="disk"?"Abrindo unidade / arquivo…":"Aplicativo gráfico","sa-center")+'<rect x="130" y="91" width="200" height="12" rx="6" class="sa-track"/><rect x="130" y="91" width="200" height="12" rx="6" class="sa-progress"/>',gi(n)+(e==="post"?ml()+Be(415,129,i.id===1?"DRAM":"Atividade","sa-center sa-small"):e==="power"?'<circle cx="420" cy="82" r="22" class="sa-device sa-press"/><path d="M420 67v16m-9-11a15 15 0 1 0 18 0" class="sa-wire"/>':"")}if(["and","or","xor","not","parity"].includes(e)){const n=e==="not"?"00001111":e==="parity"?"1011 | 0":"A: 1   B: 1",r=e==="and"?"OR":e==="or"?"AND":e==="xor"?"Detector":e==="not"?"NOT":"Paridade";return`${Be(100,100,n,"sa-center")}<path d="M170 95h35m100 0h70" class="sa-link"/>${Je(205,56,100,78,"sa-device")}${Be(255,101,r,"sa-center")}<circle cx="404" cy="95" r="24" class="sa-lamp ${e==="xor"?"sa-reveal":""}"/>`}if(e==="hex")return`${Je(35,48,170,95,"sa-device")}${Be(120,103,i.id===48?"A":"FF","sa-center")}<path d="M215 95h50" class="sa-link"/>${Je(275,48,170,95,"sa-device")}${Be(360,103,i.id===48?"11":"256","sa-center")}`;if(["bits","overflow","address","bus"].includes(e)){const n=i.id===40?1:[41,42,43,45].includes(i.id)?4:i.id===68?32:e==="address"?10:8,r=Math.min(n,16),s=Math.min(44,420/r),a=(480-r*s)/2,o=i.id===42?"1010":i.id===43?"1011":i.id===47?"11111111":null;return`${Array.from({length:n},(l,c)=>{const u=a+c%r*s,d=46+Math.floor(c/r)*48;return`<g class="sa-bit" style="--i:${c%8}">${Je(u,d,s-5,38,"sa-device")}${Be(u+(s-5)/2,d+25,o?.[c]||String(c%2),"sa-center")}${e==="bus"?`<path d="M${u+17} 88v45" class="sa-link"/>`:""}</g>`}).join("")}${Be(240,165,e==="overflow"?"Espaço reservado • limite excedido":e==="address"?"Posições endereçadas":"Posições do exercício","sa-center")}`}if(["units","transfer","text","pixel"].includes(e)){const n=e==="pixel"?Array.from({length:30},(r,s)=>`<rect x="${55+s%10*14}" y="${57+Math.floor(s/10)*18}" width="12" height="16" fill="${["#e7a369","#56bba0","#78aede"][s%3]}" class="sa-bit" style="--i:${s%8}"/>`).join(""):Be(125,103,e==="text"?i.label.includes("HARDWARE")?"HARDWARE":"é":"DADOS","sa-center");return`${Je(25,40,200,104,"sa-device")}${n}<path d="M232 94h43" class="sa-link"/><circle cx="248" cy="94" r="7" class="sa-packet"/>${Je(285,40,170,104,"sa-device")}${Be(370,88,"Anotação","sa-center")}${Be(370,115,"a conferir","sa-center")}`}if(e==="cores")return`${Array.from({length:4},(n,r)=>`${Je(45+r*102,42,82,61,"sa-device sa-node")}${Be(86+r*102,79,"C"+(r+1),"sa-center")}`).join("")}${Array.from({length:8},(n,r)=>`<circle cx="${58+r*52}" cy="138" r="11" class="sa-dot sa-bit" style="--i:${r}"/>`).join("")}${Be(240,182,"4 núcleos • 8 threads","sa-center")}`;if(e==="clockRate")return`${Je(25,42,430,104,"sa-device")}<path d="M45 118h30V68h40v50h40V68h40v50h40V68h40v50h40V68h40v50h40V68h40" class="sa-wire sa-link"/>${Be(240,182,"Pulsos ilustrativos • sem escala de tempo","sa-center")}`;if(e==="compress")return`${Je(30,50,170,95,"sa-device")}${Be(115,105,"TEXTO","sa-center")}<path d="M210 95h60" class="sa-link"/>${Je(280,50,170,95,"sa-device")}${Be(365,105,"T_X_O","sa-center sa-reveal")}`;if(e==="ssd")return`${Je(40,40,150,110,"sa-device")}${wa(93,68)}${Be(115,177,"Arquivo no SSD","sa-center")}${Je(290,40,150,110,"sa-device")}<path d="M370 60l-22 35h24l-12 35 30-46h-26z" class="sa-dot sa-reveal"/>${Be(365,177,"Precisa de energia?","sa-center")}`;if(["cycle","firmware","driver","cpu","cache","cores","clockRate","output"].includes(e))return(e==="cycle"?["Executar","Buscar","Decodificar"]:e==="firmware"?["Sistema","Firmware","…"]:e==="cpu"?["Instrução","RAM","Execução?"]:e==="driver"?["Driver","Alimentação","CPU"]:e==="cache"?["CPU","Cabo","Cache externo?"]:e==="cores"?["Núcleos: 4","Threads: 8","Relatório?"]:e==="output"?["Imagem","→","Monitor"]:["Clock","Pulsos","3 GHz"]).map((r,s)=>`${Je(18+s*156,50,135,85,"sa-device sa-node")}${Be(85+s*156,100,r,"sa-center")}${s<2?`<path d="M${155+s*156} 93h16" class="sa-link"/>`:""}`).join("");const t=["volatile","mirror","compress"].includes(e);return`${Je(40,40,150,110,"sa-device")}${Je(290,40,150,110,"sa-device")}${Be(115,177,e==="volatile"?"RAM":e==="mirror"?"Disco A":e==="ssd"?"SSD":"Original","sa-center")}${Be(365,177,e==="volatile"?"Após desligar":e==="mirror"?"Disco B":e==="ssd"?"Alimentação":"Restaurado","sa-center")}${wa(93,68,t?"sa-disappear":"")}${wa(343,68,t?"sa-disappear":"")}<path d="M198 95h83" class="sa-link"/>`}function sv(i){const e=Yo[i];if(!e)throw new RangeError("Desafio sem ilustração: "+i);return`<figure class="symptom-animation sa-playing" data-scene="${i}"><div class="sa-heading"><strong>Veja o sintoma</strong><div><button type="button" data-motion="pause" aria-pressed="false">Pausar</button><button type="button" data-motion="replay">Rever</button></div></div><div class="sa-label">${Cr(e.label)}</div><svg viewBox="0 0 480 210" role="img" aria-label="${Cr(e.description)}">${rv(e)}</svg><div class="sa-status">${Cr(e.status)}</div><figcaption>${Cr(e.description)} <span>Ilustração do relato antes do reparo. Investigue as evidências para descobrir a causa.</span></figcaption></figure>`}function av(i){let e=document.querySelector("#symptomAnimation");if(e||(e=document.createElement("section"),e.id="symptomAnimation",document.querySelector("#symptom").after(e)),e.dataset.caseId===String(i))return;e.dataset.caseId=String(i),e.innerHTML=sv(i);const t=e.firstElementChild,n=t.querySelector('[data-motion="pause"]'),r=matchMedia("(prefers-reduced-motion: reduce)");function s(a){t.classList.toggle("sa-paused",a),n.setAttribute("aria-pressed",String(a)),n.textContent=a?"Reproduzir":"Pausar"}s(r.matches),t.addEventListener("click",a=>{const o=a.target.closest("[data-motion]")?.dataset.motion;o==="pause"&&s(!t.classList.contains("sa-paused")),o==="replay"&&(t.classList.remove("sa-playing"),t.offsetWidth,t.classList.add("sa-playing"),s(!1))})}function ov(i){const r=Math.ceil((i.length+1)/8),s=document.createElement("canvas");s.width=1024,s.height=r*80;const a=s.getContext("2d");function o(d,f,h=2){const g=d.split(" ");let v="",m=0;for(const p of g){const T=v?v+" "+p:p;if(a.measureText(T).width>112&&v){if(a.fillText(v,8,f+m*9),v=p,++m>=h)return}else v=T}m<h&&a.fillText(v,8,f+m*9)}i.forEach((d,f)=>{const{kind:h,status:g}=Yo[f];if(a.save(),a.translate(f%8*128,Math.floor(f/8)*80),a.fillStyle="#102a25",a.fillRect(0,0,128,80),a.fillStyle="#e4a953",a.fillRect(0,0,4,80),a.font="bold 8px sans-serif",a.fillStyle="#d9eee5",o(d.title,11,2),a.strokeStyle="#efb35f",a.fillStyle="#efb35f",a.lineWidth=2,h==="mouse")a.beginPath(),a.moveTo(27,40),a.lineTo(49,52),a.lineTo(37,29),a.lineTo(77,42),a.lineTo(101,28),a.stroke(),a.fillRect(98,27,5,5);else if(["glitch","dim","monitor","power","post"].includes(h))if(a.fillStyle=h==="dim"?"#254138":"#0a1714",a.fillRect(20,26,88,29),h==="glitch")for(let v=0;v<10;v++)a.fillStyle=v%2?"#cd8cbe":"#78d4ab",a.fillRect(22+v*17%76,28+v*7%24,13,3);else h!=="dim"&&(a.fillStyle="#dfab62",a.font="bold 12px monospace",a.fillText(h==="power"?"⏻":h==="monitor"?"—":h==="post"?"POST…":"",45,46));else["network","conflict","wifi","usb","usbReset"].includes(h)?(a.strokeRect(20,30,22,18),a.strokeRect(87,30,22,18),a.beginPath(),a.moveTo(42,39),a.lineTo(87,39),a.moveTo(60,32),a.lineTo(70,46),a.moveTo(70,32),a.lineTo(60,46),a.stroke()):["heat","fan","fanStop"].includes(h)?(a.strokeRect(30,30,68,14),a.fillRect(33,33,h==="heat"?61:20,8),a.font="10px monospace",a.fillText(h==="heat"?"↑ °C":h==="fanStop"?"FAN !":"FAN ~",47,56)):h.startsWith("notebook-")?(a.strokeRect(23,25,82,32),a.beginPath(),a.moveTo(23,57),a.lineTo(14,63),a.lineTo(114,63),a.lineTo(105,57),a.stroke(),a.font="10px monospace",a.fillText(h==="notebook-touchpad"?"PAD ×":h==="notebook-heat"?"↑ °C":h==="notebook-battery"?"BAT ↓":"VÍDEO ~",40,45)):f>=40?(a.font="bold 15px monospace",a.fillText(["and","or","xor","not","parity"].includes(h)?"A · B → ?":h==="pixel"?"RGB · ?":h==="text"?"Aa · ?":"01 · ?",25,46)):(a.strokeRect(22,28,84,25),a.fillRect(27,44,h==="storage"?72:25,4),a.font="bold 12px monospace",a.fillText(h==="keyboard"?"A _ C _":h==="audio"?"♪ ×":h==="microphone"?"MIC ×":h==="clock"?"RTC ?":"!",h==="keyboard"?34:49,40));a.font="7px sans-serif",a.fillStyle="#e7eee9",o(g,66),a.restore()}),a.fillStyle="#3cce75",a.fillRect(i.length%8*128,Math.floor(i.length/8)*80,128,80);const l=new eu(s);l.colorSpace=Gt,l.generateMipmaps=!1,l.minFilter=ln,l.magFilter=ln;const c=new ni({map:l,toneMapped:!1});function u(d){const f=d%8,h=Math.floor(d/8);return[0,1,1,1,0,0,1,0].map((g,v)=>v%2?1-(h+((1-g)*78+1)/80)/r:(f+(g*126+1)/128)/8)}return{material:c,geometry(d){const f=new Wn(.84,.52);return f.attributes.uv.array.set(u(d)),f},count:i.length,batch(d,f){d.updateMatrixWorld(!0);const h=f.map(p=>p.geometry.clone().applyMatrix4(p.matrixWorld)),g=iv(h),v=new $e(g,c),m=new Map;return h.forEach(p=>p.dispose()),f.forEach((p,T)=>{m.set(p,{id:T,done:!1}),p.removeFromParent()}),d.add(v),{paint(p,T){p.material=T;const E=m.get(p),S=T!==c;S!==E.done&&(E.done=S,g.attributes.uv.array.set(u(S?i.length:E.id),E.id*8),g.attributes.uv.needsUpdate=!0)}}}}}function cv(i,e=new Set){i.updateMatrixWorld(!0);const t=new Map;i.traverse(s=>{if(!s.isMesh||s.geometry.type!=="BoxGeometry"||s.material.map||e.has(s))return;const a=s.geometry.uuid+":"+s.material.uuid;t.has(a)||t.set(a,[]),t.get(a).push(s)});let n=0,r=0;for(const s of t.values()){if(s.length<3)continue;const a=s[0],o=new Ql(a.geometry,a.material,s.length);o.castShadow=a.castShadow,o.receiveShadow=a.receiveShadow,s.forEach((l,c)=>{o.setMatrixAt(c,l.matrixWorld),l.removeFromParent()}),o.instanceMatrix.needsUpdate=!0,o.computeBoundingSphere(),i.add(o),n+=s.length,r++}return{instances:n,batches:r}}function lv(i,e){i.updateMatrixWorld(!0);const t=new Map,n=new Map;for(const r of e){const s=r.geometry.type+JSON.stringify(r.geometry.parameters)+(r.geometry.type==="TorusGeometry"?":"+Math.floor(r.matrixWorld.elements[12]/12)+":"+Math.floor(r.matrixWorld.elements[14]/12):"");t.has(s)||t.set(s,[]),t.get(s).push(r)}for(const r of t.values()){const s=r[0],a=s.material.clone();a.color.set(16777215);const o=new Ql(s.geometry,a,r.length);o.castShadow=s.castShadow,o.receiveShadow=s.receiveShadow,r.forEach((l,c)=>{o.setMatrixAt(c,l.matrixWorld),o.setColorAt(c,l.material.color),n.set(l,{batch:o,index:c,color:l.material.color.getHex()}),l.removeFromParent()}),o.computeBoundingSphere(),i.add(o)}return{instances:e.length,batches:t.size,paint(r,s){r.material=s;const a=n.get(r),o=s.color.getHex();a.color!==o&&(a.color=o,a.batch.setColorAt(a.index,s.color),a.batch.instanceColor.needsUpdate=!0)}}}const Ca="hardware.studentRegistration.v1";function uv(){const i=document.querySelector("#registrationName"),e=document.querySelector("#nickname");let t={};try{t=JSON.parse(localStorage.getItem(Ca)||"{}")||{}}catch{}i.value=typeof t.fullName=="string"?t.fullName.slice(0,120):"";function n(){const r=i.value.trim().replace(/\s+/g," ");if(i.setCustomValidity(r.length<5||!/^\S+\s+\S+/.test(r)||/[<>\x00-\x1f]/.test(r)?"Informe seu nome completo, com nome e sobrenome.":""),!i.reportValidity())return null;const s=(e.value.trim()||r.split(" ")[0]).slice(0,24);if(s.length<2||/[<>\x00-\x1f]/.test(s))return e.setCustomValidity("Escolha um apelido de 2 a 24 caracteres."),e.reportValidity(),null;const a={...t,fullName:r};t=a;try{localStorage.setItem(Ca,JSON.stringify(a))}catch{}return{...a,nickname:s}}for(const r of[i,e])r.addEventListener("input",()=>r.setCustomValidity(""));return{read:n,rememberRoom(r){t={...t,roomId:r.id,className:r.title};try{localStorage.setItem(Ca,JSON.stringify(t))}catch{}},get saved(){const r=new URL(location.href).searchParams.get("sala");return{...t,className:r&&r!==t.roomId?"":t.className}}}}function dv({getSession:i,isBusy:e,hasInvite:t,onOpen:n}){const r=document.createElement("section");r.id="offlineInfo",r.className="offline-info",r.innerHTML='<h2>Carregamento mais leve</h2><p id="offlineStatus" role="status">Preparando os arquivos do Missão Hardware…</p><p>Abra o convite antes da aula e aguarde a preparação dos arquivos. Os desenhos e animações ficam neste navegador para reduzir os downloads. Para entrar na turma, resolver desafios e enviar a participação, mantenha a conexão. Se ela cair, aguarde a reconexão ou use Reconectar em Minha turma.</p><button id="prepareOffline" type="button">Verificar arquivos / tentar novamente</button>',document.querySelector(".join-team").after(r);const s=document.createElement("button");s.id="offlineHelp",s.textContent="Carregamento",document.querySelector(".stats").append(s),s.onclick=()=>{n(),document.querySelector("#welcome").showModal(),r.scrollIntoView({block:"start"})};const a=document.createElement("div");a.id="offlineBanner",a.hidden=!0,a.setAttribute("role","status"),a.innerHTML="<span></span>",document.body.append(a);let o=null,l=!1;const c=r.querySelector("#offlineStatus");function u(){const g=i(),v=g&&!g.connected;a.hidden=navigator.onLine&&!v,a.querySelector("span").textContent=g?"Turma sem conexão · respostas pausadas até reconectar.":"Sem conexão · reconecte para entrar na sua turma.",document.querySelector("#joinTeam").disabled=!navigator.onLine||e()||!t()}async function d(g){if(!(await new Promise((m,p)=>{const T=new MessageChannel,E=setTimeout(()=>p(new Error("Não foi possível verificar os arquivos.")),5e3);T.port1.onmessage=S=>{clearTimeout(E),T.port1.close(),m(S.data)},g.postMessage({type:"OFFLINE_STATUS"},[T.port2])})).ready)throw new Error("Os arquivos ainda não estão completos.");c.textContent="✓ Arquivos preparados neste navegador. A participação na turma requer conexão.",r.dataset.ready="true"}function f(g){if(!g)return;const v=()=>{g.state==="activated"?d(g).catch(m=>{c.textContent=m.message+" Conecte à internet e tente novamente.",r.dataset.ready="false"}):g.state==="redundant"&&(c.textContent=r.dataset.ready==="true"?"✓ A versão anterior permanece preparada. A atualização não foi concluída.":"Não foi possível preparar esta atualização. Conecte à internet e tente novamente.")};g.addEventListener("statechange",v),v()}async function h(){if(!l){l=!0;try{if(!("serviceWorker"in navigator)||!window.isSecureContext)throw new Error("Este navegador não permite preparar o uso offline neste endereço.");o=await navigator.serviceWorker.register(new URL("./sw.js",document.baseURI),{scope:new URL(".",document.baseURI).pathname,updateViaCache:"none"}),o.addEventListener("updatefound",()=>f(o.installing)),o.active&&await d(o.active),f(o.installing||o.waiting),navigator.onLine&&await o.update()}catch(g){c.textContent=r.dataset.ready==="true"?"✓ Arquivos preparados. Não foi possível verificar atualizações agora.":g.message+" Se já tiver preparado o jogo, tente abrir o link salvo."}finally{l=!1}}}return r.querySelector("#prepareOffline").onclick=()=>{h()},addEventListener("online",()=>{u(),h()}),addEventListener("offline",u),navigator.serviceWorker?.addEventListener("controllerchange",()=>{navigator.serviceWorker.controller&&d(navigator.serviceWorker.controller).catch(()=>{})}),u(),h(),{update:u}}function hv(i,e){const t=[40,41,42,43,44,45,46,47,48,49].includes(e);if(!t&&e!==55)return;const n=document.createElement("details");n.className="practice-widget",n.innerHTML=`<summary>Experimentar: ${t?"painel de bits":"tempo de cópia"}</summary><p>Área de experimentação livre, sem recompensa. Depois, responda à ficha do computador.</p>`;const r=document.createElement("output");if(r.setAttribute("aria-live","polite"),t){const s=[40,41,44,46,47,49].includes(e)?8:4,a=Array(s).fill(0),o=document.createElement("div");o.className="bit-controls";const l=()=>{const c=a.reduce((u,d,f)=>u+d*2**(s-f-1),0);r.textContent=`${a.join("")}₂ = ${c} em decimal = ${c.toString(16).toUpperCase()} em hexadecimal`};a.forEach((c,u)=>{const d=2**(s-u-1),f=document.createElement("label"),h=document.createElement("input");h.type="checkbox",h.setAttribute("aria-label",`Bit de peso ${d}`);const g=document.createElement("span");g.textContent="0";const v=document.createElement("small");v.textContent=`Peso ${d}`,h.onchange=()=>{a[u]=Number(h.checked),g.textContent=String(a[u]),l()},f.append(h,g,v),o.append(f)}),n.append(o),l()}else{const s=document.createElement("div");s.className="copy-controls",s.innerHTML='<label>Tamanho (MB)<input name="size" type="number" min="1" max="1000000" value="100" inputmode="decimal"></label><label>Taxa (MB/s)<input name="rate" type="number" min="0.1" step="0.1" max="1000000" value="20" inputmode="decimal"></label>';const a=()=>{const o=s.querySelector("[name=size]"),l=s.querySelector("[name=rate]");r.textContent=o.checkValidity()&&l.checkValidity()&&o.value&&l.value?`Tempo ideal: ${(Number(o.value)/Number(l.value)).toLocaleString("pt-BR",{maximumFractionDigits:2})} s (sem overhead).`:"Informe tamanho e taxa positivos, dentro dos limites indicados."};s.addEventListener("input",a),n.append(s),a()}n.append(r),i.append(n)}function fv({keys:i,isModal:e,turnCamera:t,resetCamera:n,setQuality:r}){const s=matchMedia("(pointer: coarse), (max-width: 760px)"),a=document.querySelector("#touch"),o=document.querySelector(".stats"),l={x:0,z:0,pointer:null,menuOpen:!1,mobile:s.matches},c=document.createElement("div");for(c.className="direction-pad";a.firstChild;)c.append(a.firstChild);a.append(c),c.querySelectorAll("button").forEach(b=>{b.setAttribute("aria-label",{w:"Andar para frente",s:"Andar para trás",a:"Andar para a esquerda",d:"Andar para a direita"}[b.dataset.key])});const u=document.createElement("div");u.id="joystick",u.setAttribute("role","group"),u.setAttribute("aria-label","Controle de movimento: arraste em qualquer direção"),u.innerHTML='<span class="stick-hint" aria-hidden="true">MOVER</span><span class="stick-knob" aria-hidden="true"></span>',a.prepend(u);const d=document.createElement("button");d.id="controlMode",d.textContent="Usar setas",d.setAttribute("aria-label","Alternar controle virtual e setas"),a.append(d);let f=!1;try{f=localStorage.getItem("hardware.touchArrows")==="true"}catch{}function h(){a.classList.toggle("use-arrows",f),d.textContent=f?"Usar controle":"Usar setas"}h();function g(){l.x=l.z=0,l.pointer=null,i.clear(),u.querySelector(".stick-knob").style.transform="translate(0px,0px)",a.classList.remove("active")}d.onclick=()=>{g(),f=!f,h();try{localStorage.setItem("hardware.touchArrows",String(f))}catch{}};function v(b){if(l.pointer!==b.pointerId)return;const I=u.getBoundingClientRect(),U=b.clientX-I.left-I.width/2,N=b.clientY-I.top-I.height/2,F=Math.hypot(U,N),D=43,q=Math.min(1,D/Math.max(F,1)),z=U*q,K=N*q;l.x=F<9?0:z/D,l.z=F<9?0:K/D,u.querySelector(".stick-knob").style.transform=`translate(${z}px,${K}px)`}u.onpointerdown=b=>{e()||l.pointer!==null||(b.preventDefault(),l.pointer=b.pointerId,u.setPointerCapture(b.pointerId),a.classList.add("active"),v(b))},u.onpointermove=v,u.onpointerup=u.onpointercancel=u.onlostpointercapture=g;const m=document.createElement("button");m.id="mobileMenuButton",m.textContent="Menu ☰",m.setAttribute("aria-expanded","false"),o.append(m);function p(){l.menuOpen=!1,document.body.classList.remove("mobile-menu-open"),o.classList.remove("mobile-expanded"),m.setAttribute("aria-expanded","false"),m.textContent="Menu ☰",g()}m.onclick=()=>{const b=!l.menuOpen;g(),l.menuOpen=b,document.body.classList.toggle("mobile-menu-open",b),o.classList.toggle("mobile-expanded",b),m.setAttribute("aria-expanded",String(b)),m.textContent=b?"Fechar menu ×":"Menu ☰"},o.addEventListener("click",b=>{b.target.closest("button")&&b.target.closest("button")!==m&&p()},!0);const T=document.createElement("button");T.id="graphicsQuality",o.append(T);let E=!0;try{const b=localStorage.getItem("hardware.lightGraphics");b!==null&&(E=b==="true")}catch{}function S(){r(E),T.textContent=E?"Gráficos: leves":"Gráficos: completos",T.setAttribute("aria-pressed",String(E))}T.onclick=()=>{E=!E,S();try{localStorage.setItem("hardware.lightGraphics",String(E))}catch{}},S();const C=document.createElement("button");C.id="resetCamera",C.textContent="↺ Câmera",C.setAttribute("aria-label","Centralizar câmera"),C.onclick=()=>{n(),g()},C.onpointerup=b=>{b.pointerType==="touch"&&(b.preventDefault(),n(),g())},document.body.append(C);const R=document.createElement("p");R.className="mobile-instructions",R.textContent="No celular: arraste o controle para caminhar. Arraste o cenário à direita para girar a câmera. Perto de um computador, toque em Abrir PC. Use Menu para ver desafios, turma e seu visual.",document.querySelector("#welcome .join-team").before(R);let P=null,A=0;const x=document.querySelector("#world");x.onpointerdown=b=>{e()||P!==null||b.pointerType==="touch"&&b.clientX<innerWidth*.43||(P=b.pointerId,A=b.clientX,x.setPointerCapture(b.pointerId))},x.onpointermove=b=>{P!==b.pointerId||e()||(t(Math.max(-60,Math.min(60,b.clientX-A))*.006),A=b.clientX)},x.onpointerup=x.onpointercancel=x.onlostpointercapture=()=>{P=null};function _(){l.mobile=s.matches,document.body.classList.toggle("mobile-game",l.mobile),p()}return s.addEventListener("change",_),_(),new MutationObserver(()=>{const b=!!document.querySelector("dialog[open]");document.body.classList.toggle("game-dialog-open",b),b&&(g(),P=null)}).observe(document.body,{subtree:!0,attributes:!0,attributeFilter:["open"]}),addEventListener("blur",()=>{g(),P=null}),document.addEventListener("visibilitychange",()=>{g(),P=null}),addEventListener("resize",()=>{g(),P=null}),{get x(){return l.x},get z(){return l.z},get mobile(){return l.mobile},get menuOpen(){return l.menuOpen},reset:g}}function pv({player:i,getSession:e,getScore:t,getSolved:n,notify:r}){const s=S=>document.querySelector(S);let a=Qn(i.userData.appearance),o,l,c,u;const d=new Map;let f,h=0,g=0;const v="data:image/svg+xml,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="144" height="170"><circle cx="72" cy="48" r="19" fill="#a4b9ad"/><path d="M40 155V90q32-35 64 0v65" fill="#a4b9ad"/></svg>'),m=document.createElement("div");m.id="wardrobeCatalog",document.querySelector(".avatar-fields").before(m);const p=s("#hairStyle");for(let S=4;S<Cs.length;S++){const C=document.createElement("option");C.value=S,C.textContent=Cs[S],p.append(C)}function T(S,C=!1){const R=Qn(S),P=JSON.stringify([R,C]);if(d.has(P))return d.get(P);if(!o){o=new gu({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),o.setSize(144,170),o.setPixelRatio(1),l=new Zl,l.add(new cu(16777215,6719607,3));const _=new uu(16777215,3);_.position.set(-2,4,-4),l.add(_),c=i.clone(!0),c.position.set(0,0,0),c.rotation.set(0,0,0),c.traverse(b=>{b.userData.avatarLimb&&b.rotation.set(0,0,0)}),l.add(c),u=new Qt(34,144/170,.1,30)}const A=c.getObjectByName("celebrationRig");A&&(A.position.set(0,0,0),A.rotation.set(0,0,0)),ur(c,R),u.position.set(2.1,1.8,-4),u.lookAt(0,1.1,0),C==="feet"?(u.position.set(.8,.5,-1.4),u.lookAt(0,.16,-.05)):C==="face"?(u.position.set(.65,1.8,-1.4),u.lookAt(0,1.7,0)):C&&(u.position.set(1.25,1.3,-1.9),u.lookAt(.12,1.03,0)),o.render(l,u);const x=o.domElement.toDataURL();return d.size>=48&&d.delete(d.keys().next().value),d.set(P,x),x}function E(){f?.disconnect(),cancelAnimationFrame(h);const S=++g,C=[];function R(){if(S!==g)return;const x=C.shift();x&&(x.img.src=T(x.next,x.detail),x.img.dataset.preview="ready"),C.length&&(h=requestAnimationFrame(R))}f=new IntersectionObserver(x=>{for(const _ of x)_.isIntersecting&&(f.unobserve(_.target),C.push(_.target._preview));C.length&&(cancelAnimationFrame(h),h=requestAnimationFrame(R))},{root:m.closest("dialog"),rootMargin:"100px"});const P=t();m.replaceChildren();const A=document.createElement("p");A.className="wardrobe-score",A.textContent=et(P)+" conquistados em desafios · "+n()+" desafios concluídos. Escolha seu visual e salve. Conquistas liberam novas opções. ",m.append(A);for(const[x,_]of[["Cabelos",Cs.map((b,I)=>({name:b,key:"style",value:I,points:To[I]}))],["Acessórios sobre o fardamento",qo.map(b=>({...b,value:!0}))]]){const b=document.createElement("h3");b.textContent=x;const I=document.createElement("div");I.className="wardrobe-grid",m.append(b,I);for(const U of _){const N=a[U.key]===U.value,F=P<U.points||n()<(U.solved||0),D=document.createElement("button");D.type="button",D.className="wardrobe-card",D.disabled=F,D.setAttribute("aria-pressed",String(N)),D.dataset.item=U.key==="style"?"hair-"+U.value:U.key;const q=q0(a,U.key,U.value),z=document.createElement("img");z.src=v,z.dataset.preview="pending",z._preview={img:z,next:q,detail:U.key==="sandals"?"feet":U.key==="beard"?"face":["gloves","tattoo","tattooBolt","tattooStar","nails","bracelets","phone","tablet"].includes(U.key)},f.observe(z),z.alt=U.name+" no personagem com fardamento",z.width=144,z.height=170;const K=document.createElement("strong");K.textContent=U.name;const te=document.createElement("span");te.textContent=F?"Requer "+et(U.points)+(U.solved?" e "+U.solved+" desafios":""):N?"Selecionado":U.points?et(U.points)+" · liberado":"Livre",D.append(z,K,te),D.onclick=()=>{a={...q,[U.key]:U.key==="style"?U.value:!N},p.value=a.style,E()},I.append(D)}}for(const x of p.options)x.disabled=P<(To[Number(x.value)]||0);p.value=a.style,s("#hairColor").value=a.color}return p.onchange=()=>{a.style=Number(p.value),E()},s("#hairColor").onchange=()=>{a.color=s("#hairColor").value,E()},s("#saveAppearance").onclick=async()=>{const S=e();if(!S?.connected){r("Reconecte à turma para salvar seu visual.");return}const C=s("#saveAppearance");C.disabled=!0;try{const R=await S.setAppearance(a);ur(i,R),a=Qn(R),E(),r("Visual salvo. Seu valor acumulado foi mantido.")}catch(R){r(R.message)}finally{C.disabled=!1}},{open(){a=Qn(Us(e()?.appearance||i.userData.appearance,t(),n())),E()}}}function mv({getSession:i,getIdentity:e,onOpen:t}){const n=v=>document.querySelector(v);let r="",s=null,a=0,o=!1,l="";const c=document.createElement("button");c.id="notesButton",c.textContent="Minha participação",n(".stats").append(c);function u(){try{localStorage.setItem(r,JSON.stringify({body:n("#noteBody").value,request:s})),n("#noteDraftStatus").textContent=n("#noteBody").value.length+" / 2000 · Rascunho salvo neste navegador"}catch{n("#noteDraftStatus").textContent="Rascunho apenas nesta página: armazenamento indisponível."}}async function d(v,m){const{data:p,error:T}=await v.client.rpc("lab_student_identity",{p_room:v.room.id,p_operation:m,p_name:l||null,p_class:null});if(T)throw T;return p}function f(){return l.trim().length>=5&&/^\S+\s+\S+/.test(l)?!0:(n("#noteStatus").textContent="Não foi possível recuperar sua identificação. Reconecte à turma para recuperar o registro feito na entrada.",!1)}function h(){n("#participationIdentity").textContent=l?"Registro da atividade: "+l:"Recuperando a identificação registrada na entrada…"}function g(v){o=v;for(const m of["sendNote","submitParticipation","noteBody"])n("#"+m).disabled=v}c.onclick=async()=>{t();const v=++a,m=i();l=e()?.fullName||"",r="hardware.notes."+(m?.room?.id||"none")+"."+(m?.userId||"none"),s=null;try{const p=JSON.parse(localStorage.getItem(r)||"{}");n("#noteBody").value=p.body||"",s=p.request||null}catch{n("#noteBody").value=""}if(h(),n("#noteStatus").textContent=m?.connected?"Destino: professor · "+m.room.title:"Reconecte à turma para enviar. O rascunho permanece neste navegador.",n("#sendNote").disabled=n("#submitParticipation").disabled=!m?.connected,n("#participationSummary").textContent="",u(),n("#notesDialog").showModal(),m?.connected)try{const p=await d(m,"get");if(v!==a||i()!==m)return;l=p.full_name||l,h(),n("#participationSummary").textContent=p.submitted_at?"Participação enviada em "+new Date(p.submitted_at).toLocaleString("pt-BR")+". Seus resultados continuam atualizados.":"Seus resultados já estão vinculados à identificação da entrada. Envie sua participação quando desejar."}catch(p){n("#noteStatus").textContent=p.message}},n("#closeNotes").onclick=()=>{o||n("#notesDialog").close()},n("#notesDialog").addEventListener("cancel",v=>{o&&v.preventDefault()}),n("#noteBody").oninput=()=>{s=null,u()},n("#submitParticipation").onclick=async()=>{const v=i();if(!(o||!v?.connected||!f())){g(!0);try{const m=await d(v,"submit");n("#participationSummary").textContent="Participação enviada em "+new Date(m.submitted_at).toLocaleString("pt-BR"),n("#noteStatus").textContent="Seus resultados estão identificados para o professor. Você pode continuar praticando.",dispatchEvent(new Event("hardware:participation-submitted"))}catch(m){n("#noteStatus").textContent=m.message}finally{g(!1)}}},n("#notesForm").onsubmit=async v=>{v.preventDefault();const m=i();if(o||!f())return;if(!m?.connected){n("#noteStatus").textContent="Reconecte à turma para enviar. Seu rascunho foi mantido.";return}const p=n("#noteBody").value.trim();if(p.length<5){n("#noteStatus").textContent="Escreva pelo menos 5 caracteres.";return}s??=crypto.randomUUID(),u(),g(!0),n("#noteStatus").textContent="Enviando…";try{await d(m,"save");const{data:T,error:E}=await m.client.rpc("lab_notes",{p_operation:"send",p_room:m.room.id,p_body:p,p_request:s});if(E)throw E;if(!T.sent)throw new Error("Não foi possível confirmar o envio. Tente novamente.");n("#noteBody").value="",s=null,u(),n("#noteStatus").textContent="Enviado ao professor! Obrigado por ajudar a melhorar o laboratório."}catch(T){n("#noteStatus").textContent=T.message+" Seu rascunho foi mantido."}finally{g(!1)}}}function jo(i){return/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(i||"")}function gl(i){return String(i||"").replace(/[<>\x00-\x1f]/g,"").trim().slice(0,24)}function vl(i){return i&&Number.isFinite(i.x)&&i.x>=cc.minX&&i.x<=cc.maxX&&Number.isFinite(i.z)&&Math.abs(i.z)<=20&&Number.isFinite(i.angle)&&Math.abs(i.angle)<100}class gv{constructor(e){this.cb=e,this.client=Hu(Gu,Vu,{auth:{storageKey:"hardware-coop.auth",persistSession:!0,autoRefreshToken:!0,detectSessionInUrl:!1}}),this.rows=new Map,this.scores=[],this.expenses=0,this.bonus=0,this.customers=[],this.workshops=[],this.workshopSolved=0,this.workshopBonus=0,this.celebrations={selected:0,owned:[0]},this.activeCustomer=-1,this.refreshSerial=0,this.peers=new Map,this.connected=!1,this.activePc=-1,this.closed=!1,this.lastSend=0,this.lastPose=null,this.instance=crypto.randomUUID()}status(e){this.cb.status(e,this.connected)}async enter(e,t=El,n=null,r=null){this.status("Conectando à sala…");let{data:{session:s},error:a}=await this.client.auth.getSession();if(a)throw a;if(!s){const c=await this.client.auth.signInAnonymously();if(c.error)throw new Error(c.error.code==="anonymous_provider_disabled"?"A entrada de alunos ainda não foi ativada no servidor.":c.error.message);s=c.data.session}this.userId=s.user.id;const o=await this.client.rpc("lab_join",{p_room:t,p_name:gl(e),p_title:n});if(o.error)throw o.error;if(this.room=o.data,r){const c=await this.client.rpc("lab_student_identity",{p_room:this.room.id,p_operation:"save",p_name:r.fullName,p_class:this.room.title});if(c.error)throw c.error}const l=await this.client.rpc("lab_wardrobe",{p_room:this.room.id});if(l.error)throw l.error;return this.appearance=l.data,await this.client.realtime.setAuth(s.access_token),await this.connect(),this.timer=setInterval(async()=>{if(!(!this.connected||this.closed))try{if(this.activePc>=0&&await this.action(this.activePc,"renew"),this.activeCustomer>=0)try{await this.customerAction(this.activeCustomer,"renew")}catch{this.activeCustomer=-1}await this.refresh()}catch(c){this.status(c.message||"Falha ao sincronizar. Tentando novamente…")}},2e4),this.room}async connect(){if(this.connected=!1,this.channel){const t=this.channel;this.channel=null,await this.client.removeChannel(t)}this.channel=this.client.channel("lab:"+this.room.id,{config:{private:!0,presence:{key:this.instance},broadcast:{self:!1}}});const e=this.channel;this.channel.on("presence",{event:"sync"},()=>this.syncPeers()).on("broadcast",{event:"pose"},({payload:t})=>{if(t?.instance===this.instance||!vl(t))return;const n=this.peers.get(t.instance);n&&(Object.assign(n,t,{name:n.name,userId:n.userId,instance:n.instance}),this.cb.peers([...this.peers.values()]))}).on("broadcast",{event:"celebrate"},({payload:t})=>{this.peers.has(t?.instance)&&Number.isInteger(t.style)&&t.style>=0&&t.style<=3&&this.cb.celebrate?.(t.instance,t.style)}).on("broadcast",{event:"wallet"},()=>this.scheduleRefresh()).on("broadcast",{event:"contact"},({payload:t})=>{const n=this.peers.get(t?.instance),r=performance.now();t?.target===this.instance&&n&&r-(this.lastContactReceived||0)>220&&(this.lastContactReceived=r,this.cb.push?.(n))}).on("postgres_changes",{event:"UPDATE",schema:"public",table:"lab_rooms",filter:"id=eq."+this.room.id},()=>{this.refresh().catch(()=>this.status("Não foi possível atualizar a rodada. Reconecte."))}).on("postgres_changes",{event:"*",schema:"public",table:"lab_attempts",filter:"room_id=eq."+this.room.id},({new:t})=>this.accept(t)).on("postgres_changes",{event:"INSERT",schema:"public",table:"lab_completions",filter:"room_id=eq."+this.room.id},()=>this.scheduleRefresh()),await new Promise((t,n)=>{const r=setTimeout(()=>n(new Error("Não foi possível conectar à sala. Tente novamente.")),2e4);this.channel.subscribe(async s=>{if(!(this.closed||this.channel!==e))if(this.connected=s==="SUBSCRIBED",this.connected)try{await this.refresh(),await this.channel.track({instance:this.instance,userId:this.userId,name:this.room.nickname,appearance:this.appearance,pc:this.activePc,...this.lastPose||{x:3.9,z:18.4,angle:0}}),this.ready=!0,this.status("Online · seu progresso e suas recompensas estão salvos"),clearTimeout(r),t()}catch(a){this.connected=!1,this.status("Sem sincronização. Reconectando…"),clearTimeout(r),n(a)}else this.status("Conexão interrompida · aguardando reconexão")})})}disconnect(){this.connected=!1,this.status("Sem internet · respostas pausadas até reconectar");const e=this.channel;this.channel=null,this.offlineCleanup=e?this.client.removeChannel(e):Promise.resolve(),this.peers.clear(),this.cb.peers([])}async reconnect(){if(!(this.closed||this.reconnecting)){this.reconnecting=!0,this.status("Reconectando à sala…");try{await this.offlineCleanup,await this.connect()}catch{this.status("Não foi possível reconectar. Use Reconectar no painel Equipe.")}finally{this.reconnecting=!1}}}scheduleRefresh(){clearTimeout(this.refreshTimer),this.refreshTimer=setTimeout(()=>{this.closed||this.refresh().catch(()=>this.status("Não foi possível atualizar o placar. Use Reconectar."))},250)}earnedFor(e){const t=this.scores.find(n=>n.user_id===e);return t?.earned??t?.score??0}async incident(e,t=crypto.randomUUID()){if(!this.connected)throw new Error("Aguarde a reconexão.");const n={p_room:this.room.id,p_round:this.room.round,p_hazard:e,p_request:t};let r=await this.client.rpc("lab_incident",n);if(r.error&&(!r.status||r.status>=500)&&(r=await this.client.rpc("lab_incident",n)),r.error)throw r.error;return this.expenses=r.data.expenses,await this.refresh(),this.connected&&this.channel.send({type:"broadcast",event:"wallet",payload:{}}),r.data}scoreFor(e){return this.scores.find(t=>t.user_id===e)?.score||0}async refresh(){const e=++this.refreshSerial,{data:t,error:n}=await this.client.rpc("lab_snapshot",{p_room:this.room.id});if(n)throw n;if(!(this.closed||e!==this.refreshSerial||t.room.round<this.room.round)){t.room.round!==this.room.round&&(this.room.round=t.room.round,this.rows.clear(),this.scores=[],this.activePc=-1,this.activeCustomer=-1,this.cb.round?.(t.room.round),this.track()),this.room.competition_mode=t.room.competition_mode||"ranking",this.expenses=Number(t.expenses)||0,this.bonus=Number(t.bonus)||0,this.bonusSolved=Number(t.bonus_solved)||0,this.workshops=t.workshops||[],this.workshopSolved=Number(t.workshop_solved)||0,this.workshopBonus=Number(t.workshop_bonus)||0,this.customers=t.customers||[],this.celebrations=t.celebrations||{selected:0,owned:[0]},Number.isFinite(Number(t.server_time))&&(this.serverOffset=Number(t.server_time)*1e3-Date.now()),this.scores=t.scores;for(const r of t.tasks){const s=this.rows.get(r.pc);this.rows.set(r.pc,s&&s.revision>r.revision?{...r,progress:s.progress,revision:s.revision}:r)}this.cb.tasks([...this.rows.values()]),this.cb.customers?.()}}accept(e){if(e.user_id!==this.userId||e.round!==this.room?.round||e.room_id!==this.room?.id||!Number.isInteger(e.pc)||e.pc<0||e.pc>103)return;const t=this.rows.get(e.pc);t&&t.revision>=e.revision||(this.rows.set(e.pc,{...t,...e}),this.cb.tasks([...this.rows.values()]))}syncPeers(){const e=new Map;for(const t of Object.values(this.channel.presenceState()))for(const n of t){if(n.instance===this.instance||typeof n.instance!="string")continue;const r=this.peers.get(n.instance);e.set(n.instance,{...n,...r?{x:r.x,z:r.z,angle:r.angle}:{},name:gl(n.name)})}this.peers=e,this.cb.peers([...e.values()])}pose(e){if(!this.connected||!vl(e))return;const t=performance.now(),n=!this.lastPose||Math.hypot(e.x-this.lastPose.x,e.z-this.lastPose.z)>.02||Math.abs(e.angle-this.lastPose.angle)>.05,r=this.peers.size+1,s=Math.max(120,r*r/100*1e3);t-this.lastSend<(n?s:Math.max(1e4,s))||(this.lastSend=t,this.lastPose={...e},this.channel.send({type:"broadcast",event:"pose",payload:{...e,appearance:this.appearance,instance:this.instance}}))}push(e){if(!this.connected||!this.peers.has(e))return;const t=performance.now(),n=Math.max(260,(this.peers.size+1)**2/100*1e3);t-(this.lastPush||0)<n||(this.lastPush=t,this.channel.send({type:"broadcast",event:"contact",payload:{instance:this.instance,target:e}}))}async action(e,t,n=null,r=crypto.randomUUID()){if(!this.connected)throw new Error("Aguarde a reconexão antes de responder.");const s={p_room:this.room.id,p_round:this.room.round,p_pc:e,p_kind:t,p_choice:n,p_request:r};let a=await this.client.rpc("lab_action_v3",s);if(a.error&&(!a.status||a.status>=500)&&(a=await this.client.rpc("lab_action_v3",s)),a.error)throw a.error;if(a.data.task.round!==this.room.round)throw new Error("A rodada mudou. Abra o computador novamente.");return this.accept(a.data.task),t==="validate"&&await this.refresh(),a.data}celebrate(e){this.connected&&this.channel.send({type:"broadcast",event:"celebrate",payload:{instance:this.instance,style:e}})}async setCelebration(e,t=!1){if(!this.connected)throw new Error("Aguarde a reconexão.");const{data:n,error:r}=await this.client.rpc("lab_celebration",{p_room:this.room.id,p_style:e,p_buy:t});if(r)throw r;return this.celebrations=n,await this.refresh(),this.connected&&this.channel.send({type:"broadcast",event:"wallet",payload:{}}),n}async customerAction(e,t,n=null,r=null,s=crypto.randomUUID()){if(!this.connected)throw new Error("Aguarde a reconexão para atender clientes.");const a={p_room:this.room.id,p_round:this.room.round,p_customer:e,p_kind:t,p_choice:n,p_request:s,p_x:r?.x??null,p_z:r?.z??null};let o=await this.client.rpc("lab_customer_action",a);if(o.error&&(!o.status||o.status>=500)&&(o=await this.client.rpc("lab_customer_action",a)),o.error)throw o.error;return t==="claim"&&(this.activeCustomer=e),(t==="release"||t==="validate")&&(this.activeCustomer=-1),await this.refresh(),!["renew","test","diagnosis","repair"].includes(t)&&this.connected&&this.channel.send({type:"broadcast",event:"wallet",payload:{}}),o.data}async releaseCustomer(e=this.activeCustomer){if(this.activeCustomer===e&&(this.activeCustomer=-1),e>=0&&this.connected)try{await this.customerAction(e,"release")}catch{}}async workshopAction(e,t,n=crypto.randomUUID()){if(!this.connected)throw new Error("Reconecte para registrar a prática.");const r={p_room:this.room.id,p_round:this.room.round,p_lesson:e,p_step:this.workshops.find(a=>a.lesson===e)?.step||0,p_choice:t,p_request:n};let s=await this.client.rpc("lab_workshop_action",r);if(s.error&&(!s.status||s.status>=500)&&(s=await this.client.rpc("lab_workshop_action",r)),s.error)throw s.error;if(await this.refresh(),s.data.round!==this.room.round)throw new Error("A rodada mudou. Reabra a atividade.");return s.data.completed&&this.connected&&this.channel.send({type:"broadcast",event:"wallet",payload:{}}),s.data}async setAppearance(e){const t=Qn(e),{data:n,error:r}=await this.client.rpc("lab_wardrobe",{p_room:this.room.id,p_appearance:t});if(r)throw r;return this.appearance=n,this.connected&&await this.channel.track({instance:this.instance,userId:this.userId,name:this.room.nickname,appearance:this.appearance,pc:this.activePc,...this.lastPose||{x:3.9,z:18.4,angle:0}}),n}async claim(e){await this.action(e,"claim"),this.activePc=e,await this.track()}async track(){this.connected&&await this.channel.send({type:"broadcast",event:"pose",payload:{instance:this.instance,pc:this.activePc,...this.lastPose||{x:3.9,z:18.4,angle:0}}}),this.connected&&performance.now()-(this.lastTrack||0)>7e3&&(this.lastTrack=performance.now(),await this.channel.track({instance:this.instance,userId:this.userId,name:this.room.nickname,appearance:this.appearance,pc:this.activePc,...this.lastPose||{x:3.9,z:18.4,angle:0}}))}async release(){const e=this.activePc;if(this.activePc=-1,e>=0&&this.connected)try{await this.action(e,"release")}catch{}await this.track()}async leave(){this.closed=!0,clearInterval(this.timer),clearTimeout(this.refreshTimer),await this.release(),await this.releaseCustomer(),this.connected=!1,this.channel&&await this.client.removeChannel(this.channel),this.client.auth.stopAutoRefresh(),this.peers.clear(),this.cb.peers([])}}function vv(i){const e=i.validated?4:i.repaired?3:i.diagnosed?2:i.tests.length===2?1:0;return`<ol class="case-steps" aria-label="Etapas do atendimento">${["Investigar","Diagnosticar","Reparar","Validar","Conceito"].map((t,n)=>`<li ${n===e?'aria-current="step"':""} class="${n<e?"complete":""}"><span>${n<e?"✓":String(n+1).padStart(2,"0")}</span>${t}</li>`).join("")}</ol>`}function _l(i,e){return e.tests.length?`<details class="evidence-book" ${e.diagnosed?"":"open"}><summary>Caderno de evidências · ${e.tests.length} de 2 testes</summary>${e.tests.map(t=>`<div class="clue"><strong>Teste ${t+1} · ${i.tests[t][0]}</strong>${i.tests[t][1]}</div>`).join("")}</details>`:""}const _v={POST:"Autoteste executado ao ligar o computador, antes da inicialização do sistema operacional.",RAM:"Memória de trabalho usada pelos programas; seu conteúdo normalmente é perdido ao desligar.",CPU:"Processador: executa instruções e precisa de alimentação e refrigeração adequadas.",SSD:"Armazenamento em memória flash, usado para guardar sistema e arquivos.",SMART:"Informações de monitoramento do armazenamento. Seus indicadores ajudam na investigação, mas não substituem backup.",CMOS:"Termo tradicionalmente usado para a área de configurações da placa. O armazenamento dessas configurações varia conforme a plataforma.",RTC:"Relógio de tempo real, que mantém data e hora mesmo sem o sistema operacional em execução.",DNS:"Serviço que resolve nomes em endereços para localizar recursos na rede.",DHCP:"Protocolo que pode fornecer automaticamente endereço IP e outros parâmetros de rede.",SATA:"Interface usada para conectar dispositivos de armazenamento.",GPU:"Processador gráfico, responsável pelo processamento de imagens.",UEFI:"Firmware que inicializa o hardware e participa do processo de inicialização do sistema."};function xv(i){const e=JSON.stringify(i),t=Object.entries(_v).filter(([n])=>new RegExp("\\b"+n+"\\b","i").test(e));return t.length?`<details class="glossary"><summary>Entenda os termos deste caso</summary><dl>${t.map(([n,r])=>`<dt>${n}</dt><dd>${r}</dd>`).join("")}</dl></details>`:""}function Jo(i){return i.zone==="notebook"?"Bancada de notebooks":i.zone==="wall"?i.bench.replace("Fundamentos · ",""):"Bancada "+i.bench+" · Lado "+(i.side<0?"A":"B")}const Wr=uv(),j=i=>document.querySelector(i);let Ye=ji(),yt=-1,Ht=-1,tn=!1,gn=0,ys=0,Wt=!1,Rs="",Nt=null,W=null,en=!1,_n=[],Fs="";const ht=new Map,Tr=new Set,Ze=new Set,Rt=new Zl;Rt.background=new Qe("#142d25");Rt.fog=new Vo("#142d25",250,600);const Ft=new gu({canvas:j("#world"),antialias:!0});Ft.setPixelRatio(Math.min(devicePixelRatio,1));Ft.setSize(innerWidth,innerHeight);Ft.shadowMap.enabled=!1;Ft.shadowMap.type=Pl;Ft.outputColorSpace=Gt;Ft.toneMapping=Ll;Ft.toneMappingExposure=1.3;const Vt=new Qt(48,innerWidth/innerHeight,.1,600);Rt.add(new cu(13169919,3227708,2.4));const gr=new uu(16770747,3);gr.position.set(-7,13,5);gr.castShadow=!0;gr.shadow.mapSize.set(2048,2048);Object.assign(gr.shadow.camera,{left:-36,right:60,top:40,bottom:-40});gr.shadow.bias=-.001;Rt.add(gr);const Ra=new Map,Pa=new Map,Pt=i=>(Ra.has(i)||Ra.set(i,new Sn({color:i,roughness:.7})),Ra.get(i)),Ke={floor:Pt("#667b83"),wall:Pt("#456559"),wood:Pt("#c9d4d8"),dark:Pt("#243640"),metal:Pt("#53636b"),mint:Pt("#008241"),orange:Pt("#ed8b23"),screen:new Sn({color:"#63cdbb",emissive:"#1e7b71",emissiveIntensity:.55})};function ye(i,e,t,n,r,s,a,o=Rt){const l=[i,e,t].join(":");Pa.has(l)||Pa.set(l,new qe(i,e,t));const c=new $e(Pa.get(l),typeof n=="string"?Pt(n):n);return c.position.set(r,s,a),c.castShadow=!0,c.receiveShadow=!0,o.add(c),c}function rn(i,e=512,t=128,n="#bbefe4",r="#203943"){const s=document.createElement("canvas");s.width=e,s.height=t;const a=s.getContext("2d");a.fillStyle=r,a.fillRect(0,0,e,t),a.fillStyle=n,a.font=`600 ${Math.floor(t*.43)}px Segoe UI`,a.textAlign="center",a.textBaseline="middle",a.fillText(i,e/2,t/2,e-20);const o=new eu(s);return o.colorSpace=Gt,new ni({map:o})}ye(82.5,.25,40,Ke.floor,28,-.14,0);for(let i=-13;i<=69;i++)ye(.018,.008,40,"#788c93",i,.003,0);for(let i=-20;i<=20;i++)ye(82,.008,.018,"#788c93",28,.004,i);ye(82.5,4.5,.25,Ke.wall,28,2.1,-20);ye(.25,4.5,40,Ke.wall,-13.25,2.1,0);ye(.25,.4,40,Ke.wall,69.25,.2,0);ye(82.5,.4,.25,Ke.wall,28,.2,20);ye(9,1,.06,rn("LABORATÓRIO DE HARDWARE",1024,128),0,3.6,-19.84);ye(7,1.7,.1,"#e4eeeb",0,1.9,-19.8);ye(6.5,.8,.03,rn("LABORATÓRIO DE HARDWARE",1024,128,"#23454c","#e4eeeb"),0,2,-19.72);for(const i of[-15,-7,1,9,16])ye(.06,1.6,3.2,"#a2cfda",-13.08,2.4,i),ye(.1,1.6,.06,Ke.dark,-13.04,2.4,i),ye(.1,.06,3.2,Ke.dark,-13.04,2.4,i);for(const i of[-5.8,5.8,22.2,33.8,50.2,60.4])ye(.07,.012,36,Ke.mint,i,.01,0);for(const i of[0,28])for(const e of[-1,1]){ye(2.6,.16,34.2,Ke.wood,i+e*11.5,1.1,0);for(const t of[-16,-8,0,8,16])for(const n of[10.6,12.4])ye(.1,1,.1,Ke.dark,i+e*n,.5,t)}for(const i of[28,56])ye(10,1,.06,rn("LABORATÓRIO DE HARDWARE",1024,128),i,3.6,-19.84);const Gn=[],xl=Pt("#3cb769"),Mv=Pt("#84dc9f"),Sv=Pt("#7fea9c"),Ml=Pt("#2a7050");for(const i of Tl){ye(i.width,.16,i.depth,Ke.wood,i.x,1.1,i.z);for(const e of[-i.width/2+.25,i.width/2-.25])for(const t of[-i.depth/2+.35,i.depth/2-.35])ye(.1,1,.1,Ke.dark,i.x+e,.5,i.z+t);ye(.14,.28,i.depth-.6,Ke.dark,i.x,1.3,i.z),ye(i.device==="notebook"?2.5:1,.3,.02,rn(i.device==="notebook"?"NOTEBOOKS":"BANCADA "+i.id,512,80),i.x,.85,i.z+i.depth/2+.02),i.device==="notebook"&&ye(2.7,.65,.04,rn("BANCADA DE NOTEBOOKS",1024,128,"#fff","#7b531c"),i.x,3.25,i.z)}const Ki=ov(ii);for(const[i,e]of Xr.entries()){const t=new Xt;t.position.set(e.x,0,e.z),t.rotation.y=e.facing*Math.PI/2,Rt.add(t);let n,r,s,a;if(e.device==="notebook"){s=ye(1.04,.06,.74,Ke.metal,0,1.22,.03,t),a=ye(.98,.035,.025,Ke.dark,0,1.21,.41,t),n=ye(1.04,.65,.045,Ke.dark,0,1.57,-.31,t),r=new $e(Ki.geometry(i),Ki.material),r.position.set(0,1.57,-.281),t.add(r),ye(.85,.015,.32,"#26383e",0,1.258,-.04,t);for(let u=0;u<3;u++)for(let d=0;d<9;d++)ye(.06,.007,.065,"#a1afb2",-.35+d*.087,1.272,-.14+u*.1,t);ye(.25,.01,.11,"#6d8993",0,1.261,.245,t),ye(.84,.05,.055,Ke.metal,0,1.24,-.29,t),t.userData.equipment="notebook"}else{n=ye(.95,.65,.12,Ke.dark,-.25,1.65,-.3,t),r=new $e(Ki.geometry(i),Ki.material),r.position.set(-.25,1.66,-.22),t.add(r),ye(.08,.3,.08,Ke.metal,-.25,1.28,-.3,t),ye(.5,.04,.3,Ke.dark,-.25,1.19,-.3,t),ye(.75,.04,.28,Ke.dark,-.25,1.21,.3,t),ye(.13,.06,.2,Ke.mint,.32,1.23,.32,t),s=ye(.38,.78,.6,Ke.dark,.8,1.55,-.13,t),a=ye(.28,.6,.02,Ke.metal,.8,1.55,.18,t),ye(.05,.05,.03,Ke.mint,.85,1.8,.2,t);for(let u=0;u<4;u++)ye(.2,.02,.02,"#1c2d38",.8,1.4+u*.07,.2,t)}ye(.55,.22,.02,rn((e.device==="notebook"?"NOTE ":"PC ")+String(e.id).padStart(2,"0"),256,80),-.25,.88,.77,t);const o=new Xt;o.position.set(e.chairX,0,e.z),o.rotation.y=e.facing*Math.PI/2,Rt.add(o),ye(.7,.13,.7,Ml,0,.65,0,o),ye(.7,.7,.1,Ml,0,1.03,.36,o),ye(.08,.58,.08,Ke.metal,0,.3,0,o),ye(.8,.06,.08,Ke.dark,0,.08,0,o),ye(.08,.06,.8,Ke.dark,0,.08,0,o);const l=new $e(new pr(.32,.025,4,20),Ke.mint);l.rotation.x=-Math.PI/2,l.position.set(e.useX,.03,e.z),Rt.add(l);const c=new $e(new Wn(.7,.3),rn((e.device==="notebook"?"NOTE ":"PC ")+String(e.id).padStart(2,"0"),256,96));c.position.set(e.x,2.55,e.z),Rt.add(c),Gn.push({ring:l,marker:c,screen:r,tower:s,towerFront:a,monitorFrame:n,pendingLabel:c.material,faultMaterial:Ki.material,doneLabel:rn("✓ "+String(e.id).padStart(2,"0")+" REVISADO",512,128,"#103b20","#a4f1b7")})}const yu=K0(Rt,{label:rn}),yv=cv(Rt,new Set(Gn.flatMap(i=>[i.screen,i.tower,i.towerFront,i.monitorFrame]))),bv=Ki.batch(Rt,Gn.map(i=>i.screen)),Qi=lv(Rt,Gn.flatMap(i=>[i.ring,i.tower,i.towerFront,i.monitorFrame])),Re=new Xt;Re.position.set(Ei.x,0,Ei.z);Rt.add(Re);const cn={shirt:Pt("#ffffff"),green:Pt("#008241"),trim:Pt("#ed8b23"),shoes:Pt("#111413"),hair:Pt("#2c211b")};ye(.57,.66,.32,cn.shirt,0,1.14,0,Re);ye(.59,.15,.35,cn.green,0,.83,0,Re);const Ko=new $e(new pr(.18,.035,8,24),cn.green);Ko.rotation.x=Math.PI/2;Ko.position.set(0,1.48,0);Re.add(Ko);for(const i of[-1,1]){const e=ye(.13,.13,.035,cn.green,i*.09,1.42,-.18,Re);e.rotation.z=i*.3,ye(.035,.55,.34,cn.trim,i*.28,1.16,0,Re)}ye(.1,.12,.025,cn.green,.15,1.27,-.18,Re);const Ev=ye(.4,.43,.39,"#c48c68",0,1.72,0,Re);_u(Re);for(const i of[-.11,.11])ye(.05,.05,.02,"#17252b",i,1.77,-.2,Re);const Pi=[];for(const i of[-1,1]){const e=new Xt;e.name="arm"+i,e.userData.avatarLimb=!0,e.position.set(i*.39,1.41,0),Re.add(e),ye(.2,.31,.23,cn.shirt,0,-.13,0,e),ye(.205,.045,.235,cn.trim,0,-.28,0,e),ye(.205,.06,.235,cn.green,0,-.33,0,e),ye(.17,.26,.18,"#c48c68",0,-.49,0,e);const t=new Xt;t.name="leg"+i,t.userData.avatarLimb=!0,t.position.set(i*.17,.8,0),Re.add(t),ye(.23,.62,.27,cn.green,0,-.3,0,t).userData.uniformPants=!0,ye(.018,.59,.035,cn.trim,i*.12,-.3,0,t).userData.uniformPants=!0,ye(.25,.16,.4,cn.shoes,0,-.69,-.05,t).userData.uniformShoe=!0,Pi.push({arm:e,leg:t,side:i})}$0(Re,Pi.map(i=>i.arm),Pi.map(i=>i.leg));const Hs=new Xt;Hs.name="celebrationRig";for(const i of[...Re.children])Hs.add(i);Re.add(Hs);const Tv=pv({player:Re,getSession:()=>W,getScore:()=>ri(Ye)+(W?.bonus||0),getSolved:()=>Ye.filter(i=>i.validated).length,notify:i=>bt(i)});function vr(){return Math.max(0,ri(Ye)+(W?.bonus||0)-(W?.expenses||0))}function bt(i,e=!1){j("#toast").classList.toggle("incident-alert",e),j("#toast").textContent=i,j("#toast").style.display="block",clearTimeout(bt.timer),bt.timer=setTimeout(()=>j("#toast").style.display="none",e?7e3:3500)}function Ao(i){return W&&!!_n.find(e=>e.pc===i)?.shared_solved||Ye[i].validated}function wo(i){return _n.find(e=>e.pc===i)?.solvers||[]}let Sl="";function bi(){W&&(j("#save").textContent=Fs);const i=Ye.filter(t=>t.validated).length;j("#progress").textContent=`${i} / 104 desafios${W?" seus":""}`,j("#score").textContent=et(vr()),j("#score").title="Carteira: recompensas obtidas menos custos de incidentes e compras. Desafios e desbloqueios conquistados são preservados.";const e=wl.map(t=>{const n=ii[t];return`<div class="job ${Ye[t].validated?"done":""}"><span class="num">${Ye[t].validated?"✓":yn(t)}</span><div>${n.title}<small>${Ye[t].validated?"✓ Você resolveu":W&&Ao(t)?"Já resolvido na turma · sua vez!":Jo(Xr[t])}</small></div></div>`}).join("");if(e!==Sl&&(j("#joblist").innerHTML=e,Sl=e),Gn.forEach((t,n)=>{const r=Ao(n);Qi.paint(t.ring,r?Sv:Ke.mint),bv.paint(t.screen,r?Ke.screen:t.faultMaterial),Qi.paint(t.tower,r?xl:Ke.dark),Qi.paint(t.towerFront,r?Mv:Ke.metal),Qi.paint(t.monitorFrame,r?xl:Ke.dark),t.marker.material=r?t.doneLabel:t.pendingLabel,t.marker.scale.x=r?1.6:1}),W){for(const t of ht.values())t.sourceAppearance&&Co(t.group,Hn(W.room)==="ranking"?Us(t.sourceAppearance,W.earnedFor(t.userId),W.scores.find(n=>n.user_id===t.userId)?.solved||0):t.sourceAppearance);Co(Re,Us(Qn(W.appearance),ri(Ye)+(W?.bonus||0),Ye.filter(t=>t.validated).length)),ec(),Fr()}}function Os(){const i=ii[yt],e=Ye[yt];j("#caseTag").textContent=`${Jo(Xr[yt]).toUpperCase()} / ${i.device==="notebook"?"NOTEBOOK":"PC"} ${yn(yt)}`,j("#caseTitle").textContent=i.title,j("#symptom").textContent=i.symptom,av(yt);let t="";if(e.validated?(t=`<h3 class="result">✓ Reparo validado e entregue</h3><p>${i.explain}</p><div class="clue">${i.validation}</div><h3>+${et($u(yt,e.errors))} nesta bancada</h3>`,Ye.every(n=>n.validated)&&(t+=`<div class="clue"><b>Turno concluído! ${et(ri(Ye))} / ${et(Ro)}</b><br>Cem computadores e quatro notebooks revisados. ${ri(Ye)>=4e3?"Excelente investigação, técnico!":"Bom trabalho! Você pode repetir o turno para aprimorar o diagnóstico."}</div>`)):e.repaired?t=`<h3 class="result">Reparo aplicado</h3><p>${i.explain}</p><button class="primary" data-action="validate">Verificar solução e concluir →</button>`:e.diagnosed?t=`<h3 class="result">✓ Diagnóstico confirmado: ${i.options[i.answer]}</h3><p class="hint">${i.device==="notebook"?"Atividade simulada: siga o manual do notebook. Abertura do equipamento e intervenção em bateria ou tela devem ficar com o professor ou a assistência responsável.":i.category?"Confira as unidades e as definições para corrigir a informação.":"Procedimento simulado: desligue e desconecte a alimentação antes de trabalhar nos componentes. Não abra a fonte."}</p><h3>Selecione a solução</h3><div class="options">${i.repairs.map((n,r)=>`<button data-repair="${r}">${n}</button>`).join("")}</div>`:t=`<h3>01 / Reúna evidências <small>(${e.tests.length}/2)</small></h3><div class="tests">${i.tests.map((n,r)=>`<button data-test="${r}" ${e.tests.includes(r)?"disabled":""}>${e.tests.includes(r)?"✓":"＋"} ${n[0]}</button>`).join("")}</div>${_l(i,e)}<h3>02 / Qual é o diagnóstico?</h3><p class="hint">${e.tests.length<2?"Complete os dois testes para liberar o diagnóstico.":"Use as evidências. Um erro prático reduz R$ 5 da recompensa, até o mínimo de R$ 20."}</p><div class="options">${i.options.map((n,r)=>`<button data-diagnosis="${r}" ${e.tests.length<2?"disabled":""}>${n}</button>`).join("")}</div>`,e.validated){const n=bl[yt];t+=`<section class="challenge"><span class="eyebrow">DESAFIO DE CONCEITO / ${n.topic}</span><h3>${n.question}</h3>${e.challenge?`<div class="clue"><b>✓ Conceito concluído</b><br>${n.explanation}</div>`:`<p class="hint">Sem desconto na recompensa. Leia, responda e discuta em aula.</p><div class="options">${n.options.map((r,s)=>`<button data-challenge="${s}">${r}</button>`).join("")}</div>`}</section>`}if(j("#caseContent").innerHTML=`<p class="clue">Recompensa: até <b>${et(Yu(yt))}</b> · desconto de R$ 5 por erro prático, mínimo de R$ 20.</p>`+vv(e)+(e.diagnosed?_l(i,e):"")+t+xv(i)+'<section id="feedback" class="error" role="status" aria-live="polite"></section>',hv(j("#caseContent"),yt),Nr.related(j("#caseContent"),yt),W){const n=document.createElement("section");n.className="clue completion-list";const r=document.createElement("b");r.textContent=wo(yt).length?"Já resolveram este computador":"Seja o primeiro a resolver este computador",n.append(r);const s=document.createElement("ul");for(const o of wo(yt)){const l=document.createElement("li");l.textContent=o.name+(Hn(W.room)!=="ranking"?"":o.score===null?" · registro anterior":` · ${et(o.score)} neste PC`),s.append(l)}n.append(s);const a=document.createElement("p");a.textContent=e.validated?"Sua conclusão e suas recompensas já estão registradas.":"Sua ficha é individual. Você pode resolver mesmo que outros alunos já tenham concluído.",n.append(a),j("#caseContent").prepend(n)}}async function bu(){if(Nt)return;if(Zt.near>=0&&tn&&W?.connected&&!Vs()&&!Wt&&!kn.active&&!xn.active){Ze.clear(),await Zt.open();return}if(Ht<0||!tn||!W?.connected||kn.active||xn.active||Wt||j("#welcome").open||j("#classroom").open||j("#panel").open||en)return;const i=Ht;if(Ze.clear(),W){en=!0;try{await W.claim(i)}catch(e){bt(e.message);return}finally{en=!1}}yt=i,Os(),j("#panel").showModal()}j("#caseContent").addEventListener("click",async i=>{const e=i.target.closest("button");if(!(!e||e.disabled||en||!W?.connected)&&W){const t=["test","diagnosis","repair","challenge"].find(s=>e.dataset[s]!==void 0)||e.dataset.action;if(!t)return;const n={errors:Ye[yt].errors,challengeErrors:Ye[yt].challengeErrors,challenge:Ye[yt].challenge},r=e.dataset[t]!==void 0?Number(e.dataset[t]):null;en=!0,j("#caseContent").setAttribute("aria-busy","true"),j("#caseContent").querySelectorAll("button").forEach(s=>s.disabled=!0);try{const s=await W.action(yt,t,r);Os(),nv(j("#feedback"),tv(yt,t,r,n,s.task.progress),s.feedback),t==="validate"&&bt("Você resolveu! Recompensa adicionada ao seu placar."),t==="challenge"&&!n.challenge&&s.task.progress.challenge&&(j("#panel").close(),Gs())}catch(s){Os(),j("#feedback").textContent=s.message}finally{en=!1,j("#caseContent").setAttribute("aria-busy","false")}return}});document.querySelectorAll("[data-reading-size]").forEach(i=>i.onclick=()=>{const e=!j("#panel").classList.contains("large-text");document.querySelectorAll("dialog").forEach(t=>t.classList.toggle("large-text",e)),document.querySelectorAll("[data-reading-size]").forEach(t=>{t.textContent=e?"A− Texto padrão":"A+ Ampliar texto",t.setAttribute("aria-pressed",String(e))})});j("#close").onclick=()=>j("#panel").close();j("#interact").onclick=bu;j("#welcome").addEventListener("cancel",i=>{tn||i.preventDefault()});function Vs(){return wn.menuOpen||!!document.querySelector("dialog[open]")}addEventListener("keydown",i=>{if(Vs())return;const e=i.key.toLowerCase();if(["arrowup","arrowdown","arrowleft","arrowright","w","a","s","d","q","r","e"].includes(e)){if(i.preventDefault(),e==="e"){i.repeat||bu();return}Ze.add(e)}});addEventListener("keyup",i=>Ze.delete(i.key.toLowerCase()));addEventListener("blur",()=>{Ze.clear()});document.addEventListener("visibilitychange",()=>Ze.clear());document.querySelectorAll("dialog").forEach(i=>i.addEventListener("cancel",()=>Ze.clear()));const wn=fv({keys:Ze,isModal:()=>Vs(),turnCamera:i=>{gn-=i},resetCamera:()=>{gn=0,Nt=null,Wt=!1,j("#mapButton").textContent="Ver laboratório",j("#mapButton").setAttribute("aria-pressed","false")},setQuality:i=>{Ft.setPixelRatio(Math.min(devicePixelRatio,i?1:1.7)),Ft.shadowMap.enabled=!i,Ft.shadowMap.needsUpdate=!0}});document.querySelectorAll("[data-key]").forEach(i=>{i.onpointerdown=e=>{e.preventDefault(),i.setPointerCapture(e.pointerId),Ze.add(i.dataset.key)},i.onpointerup=i.onpointercancel=i.onlostpointercapture=()=>Ze.delete(i.dataset.key)});const On={prompt:j("#prompt"),promptText:j("#prompt span"),interact:j("#interact"),follow:j("#followBanner"),followText:j("#followBanner span")};let Da=0,Eu=0,Tu=0;const Ar=new lf,Yi=new B,Kn=new B;Vt.position.set(0,6,14);function Au(){if(requestAnimationFrame(Au),document.hidden){Ar.getDelta(),Da=0;return}const i=performance.now(),e=Vs();if(i-Da<(e&&!xn.active?250:wn.mobile?32:16))return;Da=i,Tu++,Qo.update(),yu.update(Ar.elapsedTime,Vt);const t=Math.min(Ar.getDelta(),.05);Zt.update(t,Vt,tn);let n=!1;if(tn&&!e&&!Wt&&!kn.active&&!xn.active){Ze.has("q")&&(gn+=t*1.6),Ze.has("r")&&(gn-=t*1.6);let r=wn.x+Number(Ze.has("d")||Ze.has("arrowright"))-Number(Ze.has("a")||Ze.has("arrowleft")),s=wn.z+Number(Ze.has("s")||Ze.has("arrowdown"))-Number(Ze.has("w")||Ze.has("arrowup"));if(r||s){Nt=null;const a=Math.max(1,Math.hypot(r,s));r/=a,s/=a;const o=(r*Math.cos(gn)+s*Math.sin(gn))*t*3.4,l=(-r*Math.sin(gn)+s*Math.cos(gn))*t*3.4;if(Su(Re.position,o,l,[...[...ht.values()].map(c=>c.group.position),...Zt.positions],er),W?.connected)for(const[c,u]of ht){const d=u.group.position.x-Re.position.x,f=u.group.position.z-Re.position.z;Math.hypot(d,f)<1.08&&o*d+l*f>0&&W.push(c)}Re.rotation.y=Math.atan2(-o,-l),ys+=t*10,n=!0}}if(xn.active||Pi.forEach(({arm:r,leg:s,side:a})=>{r.rotation.x=n?Math.sin(ys)*.55*a:0,s.rotation.x=n?-Math.sin(ys)*.65*a:0}),Ev.position.y=1.72+(n?Math.abs(Math.sin(ys))*.025:0),W?.connected&&(hl(Re.position,[...ht.entries()].map(([r,s])=>({id:r,x:s.target.x,z:s.target.z})),W.instance,er,t),hl(Re.position,Zt.positions.map((r,s)=>({id:"npc-"+s,x:r.x,z:r.z})),W.instance,er,t)),tn&&!e&&!Wt){const r=$o(Re.position.x,Re.position.z);r&&!kn.active&&kn.start(r),Cu.update(Re.position.x,Re.position.z,!!W?.connected)}if(kn.update(t),xn.update(t),Yi.set(Re.position.x,1.1,Re.position.z),Wt?(Kn.set(28,Math.max(75,48/(Math.tan(Vt.fov*Math.PI/360)*Vt.aspect)),20),Yi.set(28,0,0)):(Kn.set(Re.position.x+Math.sin(gn)*8,6.8,Re.position.z+Math.cos(gn)*8),Kn.x=vc.clamp(Kn.x,-12.7,68.7),Kn.z=vc.clamp(Kn.z,-19.2,27.5)),Nt&&ht.has(Nt)){const r=ht.get(Nt);Yi.copy(r.group.position).y=1.1,Kn.set(Yi.x+5,6.8,Yi.z+7)}if(Vt.position.lerp(Kn,1-Math.exp(-6*t)),Vt.lookAt(Yi),Ht=Xu(Re.position.x,Re.position.z),Gn.forEach(r=>{r.marker.visible=Wt||r.marker.position.distanceToSquared(Re.position)<324,r.marker.visible&&r.marker.quaternion.copy(Vt.quaternion)}),On.follow.hidden=!Nt,Nt){const r=ht.get(Nt);r?On.followText.textContent="Observando "+r.name+Po(W?.room,W?.scoreFor(r.userId)||0,et)+(r.pc>=0?" · PC "+yn(r.pc):""):Nt=null}if(On.prompt.hidden=!!Nt||Ht<0&&Zt.near<0||!tn||e||Wt||xn.active,Ht>=0){const r=(Ye[Ht].validated?"Revisar ":"Abrir ")+(ii[Ht].device==="notebook"?"notebook ":"PC ")+yn(Ht);On.interact.dataset.mobileLabel!==r&&(On.interact.dataset.mobileLabel=r)}if(Ht>=0){const r=`${Ye[Ht].validated?"Revisar":"Inspecionar"} ${ii[Ht].device==="notebook"?"notebook":"PC"} ${yn(Ht)} · ${Jo(Xr[Ht])}`;On.promptText.textContent!==r&&(On.promptText.textContent=r)}if(Zt.near>=0&&(On.interact.dataset.mobileLabel="Atender "+mn[Zt.near].name,On.promptText.textContent=Zt.prompt),W){W.pose({x:Re.position.x,z:Re.position.z,angle:Re.rotation.y});for(const r of ht.values()){const s=r.group.position.distanceTo(r.target);if(r.group.position.lerp(r.target,1-Math.exp(-8*t)),r.group.rotation.y=r.angle,r.tag.quaternion.copy(r.group.quaternion).invert().multiply(Vt.quaternion),!r.celebration.active)for(const a of r.limbs)a.arm.rotation.x=s>.03?Math.sin(Ar.elapsedTime*10)*.5*a.side:0,a.leg.rotation.x=s>.03?-Math.sin(Ar.elapsedTime*10)*.6*a.side:0;r.celebration.update(t)}}Ft.render(Rt,Vt),Eu++}function wu(){const i=Al(Ye);j("#classContent").innerHTML=i.map(e=>`<div class="clue"><b>${e.value===e.total?"✓ ":""}${e.name} · ${e.value}/${e.total}</b><p>${e.description}</p><progress value="${e.value}" max="${e.total}" aria-label="${e.name}"></progress></div>`).join("")+`<p>Atendimentos extras: <b>${W?.bonusSolved||0} clientes</b>. Bancada prática: <b>${W?.workshopSolved||0}/8 atividades</b>. Recompensas extras totais: <b>${et(W?.bonus||0)}</b>.</p><p>Recompensas obtidas em desafios: <b>${et(ri(Ye))} / ${et(Ro)}</b>. Desafios conceituais não alteram esse valor. Saldo em reais para usar no jogo.</p><p>Custos de incidentes e compras: <b>${et(W?.expenses||0)}</b> · Carteira atual: <b>${et(vr())}</b>. Incidentes não apagam respostas, conclusões ou desbloqueios conquistados.</p><p class="hint">Converse com um colega: qual evidência descartou cada hipótese? Qual teste confirmou o reparo? ${W?"Este resumo mostra somente suas respostas e suas recompensas nesta rodada.":"Este resumo é local e não é enviado ao professor automaticamente."}</p>`}j("#mapButton").onclick=()=>{Ze.clear(),Wt=!Wt,j("#mapButton").textContent=Wt?"Voltar ao aluno":"Ver laboratório",j("#mapButton").setAttribute("aria-pressed",String(Wt))};j("#classroomButton").onclick=()=>{Ze.clear(),wu(),j("#classroom").showModal()};j("#closeClass").onclick=()=>j("#classroom").close();j("#downloadReport").onclick=()=>{const i=["MISSÃO HARDWARE — REGISTRO DE PRÁTICA","Data: "+new Date().toLocaleString("pt-BR"),"Aluno: "+(Wr.saved.fullName||"Não informado"),"Turma: "+(Wr.saved.className||"Não identificada"),...jo(new URL(location.href).searchParams.get("sala"))?["Convite da turma: "+location.origin+location.pathname+"?sala="+new URL(location.href).searchParams.get("sala")]:[],W?"Sala: "+W.room.title:"Entre na sua turma","Recompensas obtidas: "+et(ri(Ye))+" / "+et(Ro),"Custos de incidentes e compras: "+et(W?.expenses||0),"Carteira atual: "+et(vr()),"Clientes atendidos: "+(W?.bonusSolved||0)+" | Bancada prática: "+(W?.workshopSolved||0)+"/8 | Recompensas extras: "+et(W?.bonus||0),...Al(Ye).map(n=>n.name+": "+n.value+"/"+n.total),"",...wl.map(n=>{const r=ii[n],s=Ye[n];return[Cl(n)+". "+r.title,"Testes: "+s.tests.length+"/2; diagnóstico: "+(s.diagnosed?"confirmado":"pendente")+"; reparo: "+(s.repaired?"aplicado":"pendente")+"; validação: "+(s.validated?"concluída":"pendente"),"Resolvido por: "+(wo(n).map(a=>a.name).join(", ")||"—"),"Tentativas incorretas na prática: "+s.errors,"Desafio conceitual: "+(s.challenge?"concluído":"pendente")+"; tentativas incorretas: "+s.challengeErrors].join(`
`)}),"",W?"Registro individual na sala para discussão em aula; não é uma avaliação supervisionada.":"Registro local para discussão em aula; não é uma avaliação supervisionada."].join(`
`),e=URL.createObjectURL(new Blob([i],{type:"text/plain;charset=utf-8"})),t=document.createElement("a");t.href=e,t.download="missao-hardware-relatorio.txt",t.click(),setTimeout(()=>URL.revokeObjectURL(e),1e3)};wv();mv({getSession:()=>W,getIdentity:()=>Wr.saved,onOpen:()=>Ze.clear()});const La=dv({getSession:()=>W,isBusy:()=>en,hasInvite:()=>jo(new URL(location.href).searchParams.get("sala")),onOpen:()=>Ze.clear()}),Zo=matchMedia("(prefers-reduced-motion: reduce)"),xn=Mu({rig:Hs,limbs:Pi,reducedMotion:()=>Zo.matches});function Gs(i=W?.celebrations?.selected||0){!tn||kn.active||(Ze.clear(),wn.reset(),xn.start(i),W?.celebrate(i))}const ir=ju({wardrobe:Tv,onOpen:()=>{Ze.clear(),wn.reset()}}),Av=j0({host:ir.celebrationHost,onPreview:()=>ir.close(),getSession:()=>W,getWallet:vr,preview:Gs,notify:bt});ir.attach(Av);const Nr=cd({getSession:()=>W,onOpen:()=>{Ze.clear(),wn.reset()},onComplete:()=>Gs(),notify:bt}),Ia=ld({getSession:()=>W,getProgress:()=>Ye,onOpen:()=>{Ze.clear(),wn.reset()},notify:bt}),Zt=Y0({scene:Rt,label:rn,getSession:()=>W,getPosition:()=>Re.position,onOpen:()=>{Ze.clear(),wn.reset()},onPaid:()=>Gs(),notify:bt}),kn=Q0({position:Re.position,getPeers:()=>[...ht.values()].map(i=>i.group.position),blocked:er,onReact:()=>{Ze.clear(),wn.reset()},reducedMotion:()=>Zo.matches}),Cu=Z0(async i=>{const e=W;if(e?.connected)try{const t=await e.incident(i.id);if(W!==e||(bi(),t.cooldown||t.duplicate))return;bt("Incidente simulado: "+i.name+". "+(t.cost?"−"+et(t.cost)+" da carteira para consulta médica no jogo.":"Carteira sem saldo; nenhum desconto aplicado.")+" Observe o piso e desvie das áreas amarelas.",!0)}catch(t){bt("Não foi possível confirmar o incidente: "+t.message,!0)}}),Qo=ev({notify:bt,getState:()=>({connected:!!W?.connected,userId:W?.userId,started:tn,near:Ht,current:yt,progress:Ye,panelOpen:j("#panel").open,notesOpen:j("#notesDialog").open,welcomeOpen:j("#welcome").open,otherDialog:!!document.querySelector("dialog[open]:not(#panel):not(#welcome):not(#notesDialog)")})});Ju();addEventListener("resize",()=>{Vt.aspect=innerWidth/innerHeight,Vt.updateProjectionMatrix(),Ft.setSize(innerWidth,innerHeight)});bi();j("#welcome").showModal();Au();window.oficina={get state(){return{workshop:Nr.state,celebration:xn.state,customers:Zt.state,celebrations:W?.celebrations,hazardRecovery:kn.state,hazardAnimations:yu.state,wallet:vr(),expenses:W?.expenses||0,hazards:ks,tutorial:Qo.state,busy:en,performance:{framesRendered:Eu,framesUpdated:Tu,drawCalls:Ft.info.render.calls,geometries:Ft.info.memory.geometries,textures:Ft.info.memory.textures,light:!Ft.shadowMap.enabled,batching:yv,computerBatching:{instances:Qi.instances,batches:Qi.batches}},appearance:Re.userData.appearance,focusedPeer:Nt,online:W?{competitionMode:Hn(W.room),room:W.room?.id,round:W.room?.round,connected:W.connected,peers:[...ht.values()].map(i=>({name:i.name,celebration:i.celebration.state,x:i.group.position.x,z:i.group.position.z,appearance:i.group.userData.appearance,pc:i.pc,score:W.scoreFor(i.userId),label:i.tagText})),scores:structuredClone(W.scores),rows:structuredClone(_n)}:null,position:{x:Re.position.x,y:Re.position.y,z:Re.position.z},camera:{x:Vt.position.x,y:Vt.position.y,z:Vt.position.z},angle:gn,near:Ht,overview:Wt,faultScreens:Gn.map((i,e)=>({caseId:e,pc:Cl(e),faultVisible:i.screen.material===i.faultMaterial})),computerColors:Gn.map(i=>i.tower.material.color.getHexString()),stations:Xr.map(i=>({...i})),benchCount:Tl.length,moving:Pi[0].leg.rotation.x,progress:structuredClone(Ye),score:ri(Ye)}}};function Fr(){if(j("#newTeam").hidden=!!W,j("#leaveTeam").hidden=!W,j("#reconnectTeam").hidden=!W,j(".invite-details").hidden=!W,j("#teamSummary").textContent=W?`${W.room?.title||"Sala"} · Rodada ${W.room?.round||1} · ${ht.size+1} online · Você: ${Ye.filter(c=>c.validated).length}/104`:"Entre na sua turma",!W){Rs="",j("#teamMembers").replaceChildren(),j("#teamActivity").replaceChildren(),j("#teamRanking").replaceChildren(),j("#roomLink").value="",j("#teamStatus").textContent="Use o convite enviado pelo professor para entrar na sua turma.";return}const i=JSON.stringify([W.room?.nickname,Hn(W.room),Fs,[...ht].map(([c,u])=>[c,u.name,u.pc]),W.scores,W.customers,_n.map(c=>[c.pc,c.revision,c.solvers])]);if(i===Rs)return;Rs=i,j("#teamStatus").textContent=Fs;const e=j("#teamMembers");e.replaceChildren();const t=document.createElement("li");t.textContent=(W.room?.nickname||"Você")+" (você)"+(Hn(W.room)==="hidden"?"":" · "+et(vr())),e.append(t);for(const[c,u]of ht){const d=document.createElement("li"),f=document.createElement("span");f.textContent=u.name+Po(W.room,W.scoreFor(u.userId),et)+(u.pc>=0?" · PC "+yn(u.pc):" · Explorando"),d.append(f);const h=document.createElement("button");h.textContent="Localizar",h.setAttribute("aria-label","Localizar "+u.name),h.onclick=()=>{Nt=c,Wt=!1,Ze.clear(),j("#teamDialog").close(),bt("Acompanhando "+u.name+". Use Voltar ao meu aluno ou caminhe para voltar.")},d.append(h),e.append(d)}const n=Hn(W.room);j("#competitionNotice").textContent=n==="ranking"?"Placar completo ativado pelo professor.":n==="individual"?"O professor escolheu exibir somente a sua evolução, sem classificação entre colegas.":"O professor desativou o placar. Sua carteira e seus resultados continuam registrados.",j("#teamRanking").hidden=j("#teamRankingTitle").hidden=n==="hidden",j("#teamRankingTitle").textContent=n==="individual"?"Sua evolução":"Placar da rodada";const r=j("#teamRanking");r.replaceChildren();const s=new Map(W.scores.map(c=>[c.user_id,c]));W.userId&&!s.has(W.userId)&&s.set(W.userId,{user_id:W.userId,name:W.room?.nickname,score:0,solved:0});for(const c of ht.values())s.has(c.userId)||s.set(c.userId,{user_id:c.userId,name:c.name,score:0,solved:0});let a=0,o=null;[...s.values()].filter(c=>n==="ranking"||c.user_id===W.userId).sort((c,u)=>u.score-c.score||c.name.localeCompare(u.name)).forEach((c,u)=>{c.score!==o&&(a=u+1),o=c.score;const d=document.createElement("li");d.textContent=`${n==="ranking"?a+"º · ":""}${c.name}${c.user_id===W.userId?" (você)":""} · ${et(c.score)} · ${c.solved}/104${c.extra_solved?" · "+c.extra_solved+" clientes":""}${c.workshop_solved?" · "+c.workshop_solved+" práticas":""} · ${Do(c.solved,c.extra_solved,c.workshop_solved).name}`,r.append(d)});const l=j("#teamActivity");l.replaceChildren();for(const c of W.customers||[])if(c.status==="done"){const u=document.createElement("li");u.textContent="Cliente "+mn[c.id].name+" · ✓ Atendido por "+c.completed_name,l.append(u)}for(const c of[..._n].sort(qu)){if(!c.solvers?.length)continue;const u=document.createElement("li");u.textContent=`PC ${yn(c.pc)} · ✓ Já resolveram: ${c.solvers.map(d=>d.name).join(", ")}`,l.append(u)}}function Co(i,e){JSON.stringify(i.userData.appearance)!==JSON.stringify(e)&&ur(i,e)}function yl(i){const e=[...ht.values()].map(n=>[n.userId,n.name,n.pc].join("|")).join(";"),t=new Set(i.map(n=>n.instance));for(const[n,r]of ht)t.has(n)||(Rt.remove(r.group),r.group._hairMaterial?.dispose(),r.tag.material.map.dispose(),r.tag.material.dispose(),r.tag.geometry.dispose(),ht.delete(n));for(const n of i){let r=ht.get(n.instance);if(!r){const s=Re.clone(!0),a=new $e(new Wn(1.8,.4),rn(n.name,512,128,"#ffffff","#006b36"));a.position.set(0,2.4,0),s.add(a),Rt.add(s),r={group:s,tag:a,name:n.name,target:new B,angle:0,limbs:Pi.map(o=>({side:o.side,arm:s.getObjectByName(o.arm.name),leg:s.getObjectByName(o.leg.name)}))},r.celebration=Mu({rig:s.getObjectByName("celebrationRig"),limbs:r.limbs,reducedMotion:()=>Zo.matches}),r.celebration.reset(),ht.set(n.instance,r),s.position.set(n.x??Ei.x,0,n.z??Ei.z)}r.name=n.name,r.userId=n.userId,r.pc=Number.isInteger(n.pc)&&n.pc>=0&&n.pc<104?n.pc:-1,r.sourceAppearance=Qn(n.appearance),Co(r.group,Hn(W?.room)==="ranking"?Us(r.sourceAppearance,W?.earnedFor(n.userId)||0,W?.scores.find(s=>s.user_id===n.userId)?.solved||0):r.sourceAppearance),r.target.set(Number.isFinite(n.x)?n.x:Ei.x,0,Number.isFinite(n.z)?n.z:Ei.z),r.angle=Number.isFinite(n.angle)?n.angle:0}e!==[...ht.values()].map(n=>[n.userId,n.name,n.pc].join("|")).join(";")&&(ec(),Fr())}function wv(){let i=new URL(location.href).searchParams.get("sala");j("#roomHint").textContent=i?"Este convite leva à turma do seu professor. Informe seu nome e sobrenome para o registro; a turma já está definida neste convite. Escolha um apelido para encontrar seus colegas.":"Para entrar com colegas, abra o link da turma enviado pelo professor. Peça ao professor o link da sua turma.";try{j("#nickname").value=localStorage.getItem("hardware.nickname")||""}catch{}const e=document.createElement("button");e.id="teamButton",e.textContent="Minha turma",j(".stats").append(e),e.onclick=()=>{Ze.clear(),Fr(),j("#teamDialog").showModal()};const t=document.createElement("button");t.id="wardrobeButton",t.textContent="Meu visual",j(".stats").append(t),t.onclick=()=>ir.open(),j("#returnToMe").onclick=()=>{Nt=null},j("#followMe").onclick=()=>{Nt=null,Wt=!1,j("#teamDialog").close()},j("#reconnectTeam").onclick=()=>{W&&W.reconnect()},j("#closeTeam").onclick=()=>j("#teamDialog").close(),j("#copyRoom").onclick=async()=>{if(!W?.room)return;const r=new URL(location.href);r.searchParams.set("sala",W.room.id),j("#roomLink").value=r.href;try{await navigator.clipboard.writeText(r.href),bt("Link da sala copiado!")}catch{j("#roomLink").select(),bt("Selecione e copie o link da sala.")}};const n=async r=>{if(!navigator.onLine){j("#joinError").textContent="Sem conexão. Reconecte para entrar na turma.";return}if(en)return;i=new URL(location.href).searchParams.get("sala");const s=Wr.read();if(!s)return;const a=s.nickname;if(!jo(i)){j("#joinError").textContent="Abra o convite enviado pelo professor para entrar em uma turma. Peça ao professor o link da sua turma.";return}W&&(await W.leave(),W=null),tn=!1,Ye=ji(),_n=[],Tr.clear(),en=!0,j("#joinError").textContent="Conectando…",j("#joinTeam").disabled=!0;const o=new gv({status:l=>{W===o&&(La.update(),Fs=l,j("#teamStatus").textContent=l,j("#save").textContent=l)},celebrate:(l,c)=>ht.get(l)?.celebration.start(c),customers:()=>{if(W===o)if(Zt.sync(),Nr.sync(),Ia.sync(),W.ready)for(const l of W.customers)l.status==="done"&&!Tr.has(l.id)&&(Tr.add(l.id),bt(l.completed_name+" atendeu "+mn[l.id].name+(Hn(W.room)==="ranking"||l.completed_user===W.userId?" e recebeu "+et(l.reward)+".":".")));else for(const l of W.customers)l.status==="done"&&Tr.add(l.id)},round:l=>{W===o&&(Zt.close(),Nr.close(),Ia.close(),ir.close(),xn.reset(),Tr.clear(),Ye=ji(),_n=[],Rs="",j("#panel").open&&j("#panel").close(),bi(),bt("O professor iniciou a rodada "+l+". Os 100 desafios estão disponíveis."))},tasks:l=>{if(W!==o)return;if(W?.ready){let u=!1;for(const d of l){const f=_n.find(g=>g.pc===d.pc),h=d.solvers?.find(g=>!f?.solvers?.some(v=>v.user_id===g.user_id&&v.name===g.name));h&&!u&&(bt(h.name+" resolveu "+(ii[d.pc].device==="notebook"?"o notebook ":"o PC ")+yn(d.pc)+". Você também pode resolver!"),u=!0)}}_n=l;const c=ji();l.forEach(u=>c[u.pc]=u.progress),Ye=Wu(JSON.stringify(c)),bi(),j("#panel").open&&!en&&Os(),j("#classroom").open&&wu()},push:l=>{if(W!==o)return;const c=Re.position.x-l.x,u=Re.position.z-l.z,d=Math.hypot(c,u);d>.001&&d<1.3&&Su(Re.position,c/d*.12,u/d*.12,[...ht.entries()].filter(([f])=>f!==l.instance).map(([,f])=>f.group.position),er)},peers:l=>{W===o&&yl(l)}});W=o;try{const l=await o.enter(a,i||El,null,s);if(W!==o)return;Wr.rememberRoom(l);const c=J0(Ei,[...ht.values()].map(d=>d.target),er);Re.position.set(c.x,0,c.z);try{localStorage.setItem("hardware.nickname",a)}catch{}const u=new URL(location.href);u.searchParams.set("sala",l.id),history.replaceState(null,"",u),j("#roomLink").value=u.href,j("#teamNickname").value=a,ur(Re,o.appearance),j("#hairStyle").value=String(o.appearance.style),j("#hairColor").value=o.appearance.color,j("#welcome").close(),j("#teamDialog").close(),tn=!0,Ze.clear(),bi(),bt("Você entrou em "+l.title+". Veja seus colegas em Minha turma."),Cu.reset(),kn.reset(),Qo.start()}catch(l){if(o.leave().catch(()=>{}),W!==o)return;W=null,Ye=ji(),tn=!1,j("#joinError").textContent=l.message||"Não foi possível entrar. Tente novamente.",bi()}finally{(W===o||!W)&&(en=!1,La.update())}};j("#joinTeam").onclick=()=>n(),j("#newTeam").onclick=()=>{j("#teamDialog").close(),j("#welcome").showModal(),j("#joinError").textContent="Confira sua identificação e o apelido para entrar. Para trocar de turma, abra o convite enviado pelo professor."},j("#leaveTeam").onclick=async()=>{if(!W||en)return;const r=W;Zt.close(),Nr.close(),Ia.close(),ir.close(),xn.reset(),W=null,tn=!1,Ye=ji(),_n=[],Nt=null,yl([]),Ze.clear();for(const s of["panel","teamDialog","classroom","notesDialog"])j("#"+s).close();j("#welcome").showModal(),bi(),Fr(),La.update(),await r.leave()},j("#panel").addEventListener("close",()=>{W&&W.release()}),addEventListener("offline",()=>{W&&W.disconnect()}),addEventListener("online",()=>{W&&W.reconnect()}),setInterval(()=>{W&&(ec(),Fr())},1e3),j("#teamStatus").textContent="Use o convite enviado pelo professor para entrar na sua turma."}function ec(){if(W){for(const i of _n){const e=Gn[i.pc],t=i.solvers?.length||0,n=[...ht.values()].filter(o=>o.pc===i.pc).map(o=>o.name);W.activePc===i.pc&&n.push(W.room.nickname);const r=Ao(i.pc),s=r?"✓ PC "+yn(i.pc)+" · "+t+(t===1?" aluno":" alunos"):n.length?"PC "+yn(i.pc)+" · "+n.join(", "):"",a=String(r)+s;s&&e.busyText!==a&&(e.busyLabel&&(e.busyLabel.map.dispose(),e.busyLabel.dispose()),e.busyLabel=rn(s,1024,128,r?"#103b20":"#573400",r?"#a4f1b7":"#ffdd91"),e.busyText=a),e.marker.material=s?e.busyLabel:e.pendingLabel,e.marker.scale.x=s?3.8:1}for(const i of ht.values()){const e=i.name+(Hn(W.room)==="ranking"?" · "+Do(W.scores.find(t=>t.user_id===i.userId)?.solved||0,W.scores.find(t=>t.user_id===i.userId)?.extra_solved||0,W.scores.find(t=>t.user_id===i.userId)?.workshop_solved||0).name:"")+Po(W.room,W.scoreFor(i.userId),et)+(i.pc>=0?" · PC "+yn(i.pc):"");i.tagText!==e&&(i.tag.material.map.dispose(),i.tag.material.dispose(),i.tag.material=rn(e,1024,128,"#ffffff",i.pc>=0?"#a35d08":"#006b36"),i.tagText=e,i.tag.scale.x=i.pc>=0?2:1.65)}}}

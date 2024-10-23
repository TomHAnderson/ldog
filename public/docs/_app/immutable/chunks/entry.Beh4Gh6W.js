import{M as it}from"./scheduler.6x_t8-M_.js";import{w as pe}from"./index.DPdU9_CZ.js";import{a as st,H as ne,S as ge,R as je,b as U}from"./control.BzLJ1hZo.js";new URL("sveltekit-internal://");function ct(e,n){return e==="/"||n==="ignore"?e:n==="never"?e.endsWith("/")?e.slice(0,-1):e:n==="always"&&!e.endsWith("/")?e+"/":e}function lt(e){return e.split("%25").map(decodeURI).join("%25")}function ft(e){for(const n in e)e[n]=decodeURIComponent(e[n]);return e}function ce({href:e}){return e.split("#")[0]}const ut=["href","pathname","search","toString","toJSON"];function dt(e,n,t){const r=new URL(e);Object.defineProperty(r,"searchParams",{value:new Proxy(r.searchParams,{get(a,o){if(o==="get"||o==="getAll"||o==="has")return i=>(t(i),a[o](i));n();const s=Reflect.get(a,o);return typeof s=="function"?s.bind(a):s}}),enumerable:!0,configurable:!0});for(const a of ut)Object.defineProperty(r,a,{get(){return n(),e[a]},enumerable:!0,configurable:!0});return r}const ht="/__data.json",pt=".html__data.json";function gt(e){return e.endsWith(".html")?e.replace(/\.html$/,pt):e.replace(/\/$/,"")+ht}function mt(...e){let n=5381;for(const t of e)if(typeof t=="string"){let r=t.length;for(;r;)n=n*33^t.charCodeAt(--r)}else if(ArrayBuffer.isView(t)){const r=new Uint8Array(t.buffer,t.byteOffset,t.byteLength);let a=r.length;for(;a;)n=n*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(n>>>0).toString(36)}function yt(e){const n=atob(e),t=new Uint8Array(n.length);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t.buffer}const De=window.fetch;window.fetch=(e,n)=>((e instanceof Request?e.method:(n==null?void 0:n.method)||"GET")!=="GET"&&B.delete(me(e)),De(e,n));const B=new Map;function _t(e,n){const t=me(e,n),r=document.querySelector(t);if(r!=null&&r.textContent){let{body:a,...o}=JSON.parse(r.textContent);const s=r.getAttribute("data-ttl");return s&&B.set(t,{body:a,init:o,ttl:1e3*Number(s)}),r.getAttribute("data-b64")!==null&&(a=yt(a)),Promise.resolve(new Response(a,o))}return window.fetch(e,n)}function wt(e,n,t){if(B.size>0){const r=me(e,t),a=B.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(t==null?void 0:t.cache))return new Response(a.body,a.init);B.delete(r)}}return window.fetch(n,t)}function me(e,n){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(n!=null&&n.headers||n!=null&&n.body){const a=[];n.headers&&a.push([...new Headers(n.headers)].join(",")),n.body&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&a.push(n.body),r+=`[data-hash="${mt(...a)}"]`}return r}const vt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function bt(e){const n=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${kt(e).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return n.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(o)return n.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const s=r.split(/\[(.+?)\](?!\])/);return"/"+s.map((c,f)=>{if(f%2){if(c.startsWith("x+"))return le(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return le(String.fromCharCode(...c.slice(2).split("-").map(l=>parseInt(l,16))));const d=vt.exec(c),[,h,g,u,m]=d;return n.push({name:u,matcher:m,optional:!!h,rest:!!g,chained:g?f===1&&s[0]==="":!1}),g?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return le(c)}).join("")}).join("")}/?$`),params:n}}function At(e){return!/^\([^)]+\)$/.test(e)}function kt(e){return e.slice(1).split("/").filter(At)}function Et(e,n,t){const r={},a=e.slice(1),o=a.filter(i=>i!==void 0);let s=0;for(let i=0;i<n.length;i+=1){const c=n[i];let f=a[i-s];if(c.chained&&c.rest&&s&&(f=a.slice(i-s,i+1).filter(d=>d).join("/"),s=0),f===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||t[c.matcher](f)){r[c.name]=f;const d=n[i+1],h=a[i+1];d&&!d.rest&&d.optional&&h&&c.chained&&(s=0),!d&&!h&&Object.keys(r).length===o.length&&(s=0);continue}if(c.optional&&c.chained){s++;continue}return}if(!s)return r}function le(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function St({nodes:e,server_loads:n,dictionary:t,matchers:r}){const a=new Set(n);return Object.entries(t).map(([i,[c,f,d]])=>{const{pattern:h,params:g}=bt(i),u={id:i,exec:m=>{const l=h.exec(m);if(l)return Et(l,g,r)},errors:[1,...d||[]].map(m=>e[m]),layouts:[0,...f||[]].map(s),leaf:o(c)};return u.errors.length=u.layouts.length=Math.max(u.errors.length,u.layouts.length),u});function o(i){const c=i<0;return c&&(i=~i),[c,e[i]]}function s(i){return i===void 0?i:[a.has(i),e[i]]}}function $e(e,n=JSON.parse){try{return n(sessionStorage[e])}catch{}}function Ie(e,n,t=JSON.stringify){const r=t(n);try{sessionStorage[e]=r}catch{}}const Rt="1729665425128",Fe="sveltekit:snapshot",Ve="sveltekit:scroll",Be="sveltekit:states",It="sveltekit:pageurl",j="sveltekit:history",M="sveltekit:navigation",W={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},K=location.origin;function Ge(e){if(e instanceof URL)return e;let n=document.baseURI;if(!n){const t=document.getElementsByTagName("base");n=t.length?t[0].href:document.URL}return new URL(e,n)}function ye(){return{x:pageXOffset,y:pageYOffset}}function N(e,n){return e.getAttribute(`data-sveltekit-${n}`)}const Le={...W,"":W.hover};function Me(e){let n=e.assignedSlot??e.parentNode;return(n==null?void 0:n.nodeType)===11&&(n=n.host),n}function qe(e,n){for(;e&&e!==n;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=Me(e)}}function ue(e,n){let t;try{t=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const r=e instanceof SVGAElement?e.target.baseVal:e.target,a=!t||!!r||re(t,n)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),o=(t==null?void 0:t.origin)===K&&e.hasAttribute("download");return{url:t,external:a,target:r,download:o}}function z(e){let n=null,t=null,r=null,a=null,o=null,s=null,i=e;for(;i&&i!==document.documentElement;)r===null&&(r=N(i,"preload-code")),a===null&&(a=N(i,"preload-data")),n===null&&(n=N(i,"keepfocus")),t===null&&(t=N(i,"noscroll")),o===null&&(o=N(i,"reload")),s===null&&(s=N(i,"replacestate")),i=Me(i);function c(f){switch(f){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Le[r??"off"],preload_data:Le[a??"off"],keepfocus:c(n),noscroll:c(t),reload:c(o),replace_state:c(s)}}function Ue(e){const n=pe(e);let t=!0;function r(){t=!0,n.update(s=>s)}function a(s){t=!1,n.set(s)}function o(s){let i;return n.subscribe(c=>{(i===void 0||t&&c!==i)&&s(i=c)})}return{notify:r,set:a,subscribe:o}}function Lt(){const{set:e,subscribe:n}=pe(!1);let t;async function r(){clearTimeout(t);try{const a=await fetch(`${st}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const s=(await a.json()).version!==Rt;return s&&(e(!0),clearTimeout(t)),s}catch{return!1}}return{subscribe:n,check:r}}function re(e,n){return e.origin!==K||!e.pathname.startsWith(n)}function Pe(e){const n=Pt(e),t=new ArrayBuffer(n.length),r=new DataView(t);for(let a=0;a<t.byteLength;a++)r.setUint8(a,n.charCodeAt(a));return t}const Ut="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function Pt(e){e.length%4===0&&(e=e.replace(/==?$/,""));let n="",t=0,r=0;for(let a=0;a<e.length;a++)t<<=6,t|=Ut.indexOf(e[a]),r+=6,r===24&&(n+=String.fromCharCode((t&16711680)>>16),n+=String.fromCharCode((t&65280)>>8),n+=String.fromCharCode(t&255),t=r=0);return r===12?(t>>=4,n+=String.fromCharCode(t)):r===18&&(t>>=2,n+=String.fromCharCode((t&65280)>>8),n+=String.fromCharCode(t&255)),n}const Tt=-1,xt=-2,Ct=-3,Nt=-4,Ot=-5,jt=-6;function Dt(e,n){if(typeof e=="number")return a(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const t=e,r=Array(t.length);function a(o,s=!1){if(o===Tt)return;if(o===Ct)return NaN;if(o===Nt)return 1/0;if(o===Ot)return-1/0;if(o===jt)return-0;if(s)throw new Error("Invalid input");if(o in r)return r[o];const i=t[o];if(!i||typeof i!="object")r[o]=i;else if(Array.isArray(i))if(typeof i[0]=="string"){const c=i[0],f=n==null?void 0:n[c];if(f)return r[o]=f(a(i[1]));switch(c){case"Date":r[o]=new Date(i[1]);break;case"Set":const d=new Set;r[o]=d;for(let u=1;u<i.length;u+=1)d.add(a(i[u]));break;case"Map":const h=new Map;r[o]=h;for(let u=1;u<i.length;u+=2)h.set(a(i[u]),a(i[u+1]));break;case"RegExp":r[o]=new RegExp(i[1],i[2]);break;case"Object":r[o]=Object(i[1]);break;case"BigInt":r[o]=BigInt(i[1]);break;case"null":const g=Object.create(null);r[o]=g;for(let u=1;u<i.length;u+=2)g[i[u]]=a(i[u+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const u=globalThis[c],m=i[1],l=Pe(m),y=new u(l);r[o]=y;break}case"ArrayBuffer":{const u=i[1],m=Pe(u);r[o]=m;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(i.length);r[o]=c;for(let f=0;f<i.length;f+=1){const d=i[f];d!==xt&&(c[f]=a(d))}}else{const c={};r[o]=c;for(const f in i){const d=i[f];c[f]=a(d)}}return r[o]}return a(0)}const He=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...He];const $t=new Set([...He]);[...$t];function Ft(e){return e.filter(n=>n!=null)}const Vt="x-sveltekit-invalidated",Bt="x-sveltekit-trailing-slash";function J(e){return e instanceof ne||e instanceof ge?e.status:500}function Gt(e){return e instanceof ge?e.text:"Internal Error"}const C=$e(Ve)??{},q=$e(Fe)??{},T={url:Ue({}),page:Ue({}),navigating:pe(null),updated:Lt()};function _e(e){C[e]=ye()}function Mt(e,n){let t=e+1;for(;C[t];)delete C[t],t+=1;for(t=n+1;q[t];)delete q[t],t+=1}function $(e){return location.href=e.href,new Promise(()=>{})}function Te(){}let ae,de,X,P,he,F;const Ke=[],Z=[];let R=null;const Ye=[],qt=[];let O=[],_={branch:[],error:null,url:null},we=!1,Q=!1,xe=!0,H=!1,V=!1,We=!1,ve=!1,be,E,L,I,ee;const G=new Set;async function rn(e,n,t){var a,o;document.URL!==location.href&&(location.href=location.href),F=e,ae=St(e),P=document.documentElement,he=n,de=e.nodes[0],X=e.nodes[1],de(),X(),E=(a=history.state)==null?void 0:a[j],L=(o=history.state)==null?void 0:o[M],E||(E=L=Date.now(),history.replaceState({...history.state,[j]:E,[M]:L},""));const r=C[E];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),t?await Zt(he,t):Jt(location.href,{replaceState:!0}),Xt()}function Ht(){Ke.length=0,ve=!1}function ze(e){Z.some(n=>n==null?void 0:n.snapshot)&&(q[e]=Z.map(n=>{var t;return(t=n==null?void 0:n.snapshot)==null?void 0:t.capture()}))}function Je(e){var n;(n=q[e])==null||n.forEach((t,r)=>{var a,o;(o=(a=Z[r])==null?void 0:a.snapshot)==null||o.restore(t)})}function Ce(){_e(E),Ie(Ve,C),ze(L),Ie(Fe,q)}async function Xe(e,n,t,r){return Y({type:"goto",url:Ge(e),keepfocus:n.keepFocus,noscroll:n.noScroll,replace_state:n.replaceState,state:n.state,redirect_count:t,nav_token:r,accept:()=>{n.invalidateAll&&(ve=!0)}})}async function Kt(e){if(e.id!==(R==null?void 0:R.id)){const n={};G.add(n),R={id:e.id,token:n,promise:Qe({...e,preload:n}).then(t=>(G.delete(n),t.type==="loaded"&&t.state.error&&(R=null),t))}}return R.promise}async function fe(e){const n=ae.find(t=>t.exec(et(e)));n&&await Promise.all([...n.layouts,n.leaf].map(t=>t==null?void 0:t[1]()))}function Ze(e,n,t){var o;_=e.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),I=e.props.page,be=new F.root({target:n,props:{...e.props,stores:T,components:Z},hydrate:t}),Je(L);const a={from:null,to:{params:_.params,route:{id:((o=_.route)==null?void 0:o.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};O.forEach(s=>s(a)),Q=!0}function te({url:e,params:n,branch:t,status:r,error:a,route:o,form:s}){let i="never";if(U&&(e.pathname===U||e.pathname===U+"/"))i="always";else for(const u of t)(u==null?void 0:u.slash)!==void 0&&(i=u.slash);e.pathname=ct(e.pathname,i),e.search=e.search;const c={type:"loaded",state:{url:e,params:n,branch:t,error:a,route:o},props:{constructors:Ft(t).map(u=>u.node.component),page:I}};s!==void 0&&(c.props.form=s);let f={},d=!I,h=0;for(let u=0;u<Math.max(t.length,_.branch.length);u+=1){const m=t[u],l=_.branch[u];(m==null?void 0:m.data)!==(l==null?void 0:l.data)&&(d=!0),m&&(f={...f,...m.data},d&&(c.props[`data_${h}`]=f),h+=1)}return(!_.url||e.href!==_.url.href||_.error!==a||s!==void 0&&s!==I.form||d)&&(c.props.page={error:a,params:n,route:{id:(o==null?void 0:o.id)??null},state:{},status:r,url:new URL(e),form:s??null,data:d?f:I.data}),c}async function Ae({loader:e,parent:n,url:t,params:r,route:a,server_data_node:o}){var d,h,g;let s=null,i=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},f=await e();if((d=f.universal)!=null&&d.load){let u=function(...l){for(const y of l){const{href:b}=new URL(y,t);c.dependencies.add(b)}};const m={route:new Proxy(a,{get:(l,y)=>(i&&(c.route=!0),l[y])}),params:new Proxy(r,{get:(l,y)=>(i&&c.params.add(y),l[y])}),data:(o==null?void 0:o.data)??null,url:dt(t,()=>{i&&(c.url=!0)},l=>{i&&c.search_params.add(l)}),async fetch(l,y){let b;l instanceof Request?(b=l.url,y={body:l.method==="GET"||l.method==="HEAD"?void 0:await l.blob(),cache:l.cache,credentials:l.credentials,headers:l.headers,integrity:l.integrity,keepalive:l.keepalive,method:l.method,mode:l.mode,redirect:l.redirect,referrer:l.referrer,referrerPolicy:l.referrerPolicy,signal:l.signal,...y}):b=l;const S=new URL(b,t);return i&&u(S.href),S.origin===t.origin&&(b=S.href.slice(t.origin.length)),Q?wt(b,S.href,y):_t(b,y)},setHeaders:()=>{},depends:u,parent(){return i&&(c.parent=!0),n()},untrack(l){i=!1;try{return l()}finally{i=!0}}};s=await f.universal.load.call(null,m)??null}return{node:f,loader:e,server:o,universal:(h=f.universal)!=null&&h.load?{type:"data",data:s,uses:c}:null,data:s??(o==null?void 0:o.data)??null,slash:((g=f.universal)==null?void 0:g.trailingSlash)??(o==null?void 0:o.slash)}}function Ne(e,n,t,r,a,o){if(ve)return!0;if(!a)return!1;if(a.parent&&e||a.route&&n||a.url&&t)return!0;for(const s of a.search_params)if(r.has(s))return!0;for(const s of a.params)if(o[s]!==_.params[s])return!0;for(const s of a.dependencies)if(Ke.some(i=>i(new URL(s))))return!0;return!1}function ke(e,n){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?n??null:null}function Yt(e,n){if(!e)return new Set(n.searchParams.keys());const t=new Set([...e.searchParams.keys(),...n.searchParams.keys()]);for(const r of t){const a=e.searchParams.getAll(r),o=n.searchParams.getAll(r);a.every(s=>o.includes(s))&&o.every(s=>a.includes(s))&&t.delete(r)}return t}function Oe({error:e,url:n,route:t,params:r}){return{type:"loaded",state:{error:e,url:n,route:t,params:r,branch:[]},props:{page:I,constructors:[]}}}async function Qe({id:e,invalidating:n,url:t,params:r,route:a,preload:o}){if((R==null?void 0:R.id)===e)return G.delete(R.token),R.promise;const{errors:s,layouts:i,leaf:c}=a,f=[...i,c];s.forEach(p=>p==null?void 0:p().catch(()=>{})),f.forEach(p=>p==null?void 0:p[1]().catch(()=>{}));let d=null;const h=_.url?e!==_.url.pathname+_.url.search:!1,g=_.route?a.id!==_.route.id:!1,u=Yt(_.url,t);let m=!1;const l=f.map((p,v)=>{var x;const A=_.branch[v],k=!!(p!=null&&p[0])&&((A==null?void 0:A.loader)!==p[1]||Ne(m,g,h,u,(x=A.server)==null?void 0:x.uses,r));return k&&(m=!0),k});if(l.some(Boolean)){try{d=await rt(t,l)}catch(p){const v=await D(p,{url:t,params:r,route:{id:e}});return G.has(o)?Oe({error:v,url:t,params:r,route:a}):oe({status:J(p),error:v,url:t,route:a})}if(d.type==="redirect")return d}const y=d==null?void 0:d.nodes;let b=!1;const S=f.map(async(p,v)=>{var ie;if(!p)return;const A=_.branch[v],k=y==null?void 0:y[v];if((!k||k.type==="skip")&&p[1]===(A==null?void 0:A.loader)&&!Ne(b,g,h,u,(ie=A.universal)==null?void 0:ie.uses,r))return A;if(b=!0,(k==null?void 0:k.type)==="error")throw k;return Ae({loader:p[1],url:t,params:r,route:a,parent:async()=>{var Re;const Se={};for(let se=0;se<v;se+=1)Object.assign(Se,(Re=await S[se])==null?void 0:Re.data);return Se},server_data_node:ke(k===void 0&&p[0]?{type:"skip"}:k??null,p[0]?A==null?void 0:A.server:void 0)})});for(const p of S)p.catch(()=>{});const w=[];for(let p=0;p<f.length;p+=1)if(f[p])try{w.push(await S[p])}catch(v){if(v instanceof je)return{type:"redirect",location:v.location};if(G.has(o))return Oe({error:await D(v,{params:r,url:t,route:{id:a.id}}),url:t,params:r,route:a});let A=J(v),k;if(y!=null&&y.includes(v))A=v.status??A,k=v.error;else if(v instanceof ne)k=v.body;else{if(await T.updated.check())return await $(t);k=await D(v,{params:r,url:t,route:{id:a.id}})}const x=await Wt(p,w,s);return x?te({url:t,params:r,branch:w.slice(0,x.idx).concat(x.node),status:A,error:k,route:a}):await nt(t,{id:a.id},k,A)}else w.push(void 0);return te({url:t,params:r,branch:w,status:200,error:null,route:a,form:n?void 0:null})}async function Wt(e,n,t){for(;e--;)if(t[e]){let r=e;for(;!n[r];)r-=1;try{return{idx:r+1,node:{node:await t[e](),loader:t[e],data:{},server:null,universal:null}}}catch{continue}}}async function oe({status:e,error:n,url:t,route:r}){const a={};let o=null;if(F.server_loads[0]===0)try{const f=await rt(t,[!0]);if(f.type!=="data"||f.nodes[0]&&f.nodes[0].type!=="data")throw 0;o=f.nodes[0]??null}catch{(t.origin!==K||t.pathname!==location.pathname||we)&&await $(t)}const i=await Ae({loader:de,url:t,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:ke(o)}),c={node:await X(),loader:X,universal:null,server:null,data:null};return te({url:t,params:a,branch:[i,c],status:e,error:n,route:null})}function Ee(e,n){if(!e||re(e,U))return;let t;try{t=F.hooks.reroute({url:new URL(e)})??e.pathname}catch{return}const r=et(t);for(const a of ae){const o=a.exec(r);if(o)return{id:e.pathname+e.search,invalidating:n,route:a,params:ft(o),url:e}}}function et(e){return lt(e.slice(U.length)||"/")}function tt({url:e,type:n,intent:t,delta:r}){let a=!1;const o=ot(_,t,e,n);r!==void 0&&(o.navigation.delta=r);const s={...o.navigation,cancel:()=>{a=!0,o.reject(new Error("navigation cancelled"))}};return H||Ye.forEach(i=>i(s)),a?null:o}async function Y({type:e,url:n,popped:t,keepfocus:r,noscroll:a,replace_state:o,state:s={},redirect_count:i=0,nav_token:c={},accept:f=Te,block:d=Te}){const h=Ee(n,!1),g=tt({url:n,type:e,delta:t==null?void 0:t.delta,intent:h});if(!g){d();return}const u=E,m=L;f(),H=!0,Q&&T.navigating.set(g.navigation),ee=c;let l=h&&await Qe(h);if(!l){if(re(n,U))return await $(n);l=await nt(n,{id:null},await D(new ge(404,"Not Found",`Not found: ${n.pathname}`),{url:n,params:{},route:{id:null}}),404)}if(n=(h==null?void 0:h.url)||n,ee!==c)return g.reject(new Error("navigation aborted")),!1;if(l.type==="redirect")if(i>=20)l=await oe({status:500,error:await D(new Error("Redirect loop"),{url:n,params:{},route:{id:null}}),url:n,route:{id:null}});else return Xe(new URL(l.location,n).href,{},i+1,c),!1;else l.props.page.status>=400&&await T.updated.check()&&await $(n);if(Ht(),_e(u),ze(m),l.props.page.url.pathname!==n.pathname&&(n.pathname=l.props.page.url.pathname),s=t?t.state:s,!t){const w=o?0:1,p={[j]:E+=w,[M]:L+=w,[Be]:s};(o?history.replaceState:history.pushState).call(history,p,"",n),o||Mt(E,L)}if(R=null,l.props.page.state=s,Q){_=l.state,l.props.page&&(l.props.page.url=n);const w=(await Promise.all(qt.map(p=>p(g.navigation)))).filter(p=>typeof p=="function");if(w.length>0){let p=function(){O=O.filter(v=>!w.includes(v))};w.push(p),O.push(...w)}be.$set(l.props),We=!0}else Ze(l,he,!1);const{activeElement:y}=document;await it();const b=t?t.scroll:a?ye():null;if(xe){const w=n.hash&&document.getElementById(decodeURIComponent(n.hash.slice(1)));b?scrollTo(b.x,b.y):w?w.scrollIntoView():scrollTo(0,0)}const S=document.activeElement!==y&&document.activeElement!==document.body;!r&&!S&&Qt(),xe=!0,l.props.page&&(I=l.props.page),H=!1,e==="popstate"&&Je(L),g.fulfil(void 0),O.forEach(w=>w(g.navigation)),T.navigating.set(null)}async function nt(e,n,t,r){return e.origin===K&&e.pathname===location.pathname&&!we?await oe({status:r,error:t,url:e,route:n}):await $(e)}function zt(){let e;P.addEventListener("mousemove",o=>{const s=o.target;clearTimeout(e),e=setTimeout(()=>{r(s,2)},20)});function n(o){r(o.composedPath()[0],1)}P.addEventListener("mousedown",n),P.addEventListener("touchstart",n,{passive:!0});const t=new IntersectionObserver(o=>{for(const s of o)s.isIntersecting&&(fe(s.target.href),t.unobserve(s.target))},{threshold:0});function r(o,s){const i=qe(o,P);if(!i)return;const{url:c,external:f,download:d}=ue(i,U);if(f||d)return;const h=z(i);if(!h.reload)if(s<=h.preload_data){const g=Ee(c,!1);g&&Kt(g)}else s<=h.preload_code&&fe(c.pathname)}function a(){t.disconnect();for(const o of P.querySelectorAll("a")){const{url:s,external:i,download:c}=ue(o,U);if(i||c)continue;const f=z(o);f.reload||(f.preload_code===W.viewport&&t.observe(o),f.preload_code===W.eager&&fe(s.pathname))}}O.push(a),a()}function D(e,n){if(e instanceof ne)return e.body;const t=J(e),r=Gt(e);return F.hooks.handleError({error:e,event:n,status:t,message:r})??{message:r}}function Jt(e,n={}){return e=Ge(e),e.origin!==K?Promise.reject(new Error("goto: invalid URL")):Xe(e,n,0)}function Xt(){var n;history.scrollRestoration="manual",addEventListener("beforeunload",t=>{let r=!1;if(Ce(),!H){const a=ot(_,void 0,null,"leave"),o={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};Ye.forEach(s=>s(o))}r?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Ce()}),(n=navigator.connection)!=null&&n.saveData||zt(),P.addEventListener("click",async t=>{var g;if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const r=qe(t.composedPath()[0],P);if(!r)return;const{url:a,external:o,target:s,download:i}=ue(r,U);if(!a)return;if(s==="_parent"||s==="_top"){if(window.parent!==window)return}else if(s&&s!=="_self")return;const c=z(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||i)return;if(o||c.reload){tt({url:a,type:"link"})?H=!0:t.preventDefault();return}const[d,h]=a.href.split("#");if(h!==void 0&&d===ce(location)){const[,u]=_.url.href.split("#");if(u===h){t.preventDefault(),h===""||h==="top"&&r.ownerDocument.getElementById("top")===null?window.scrollTo({top:0}):(g=r.ownerDocument.getElementById(h))==null||g.scrollIntoView();return}if(V=!0,_e(E),e(a),!c.replace_state)return;V=!1}t.preventDefault(),await new Promise(u=>{requestAnimationFrame(()=>{setTimeout(u,0)}),setTimeout(u,100)}),Y({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),P.addEventListener("submit",t=>{if(t.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(t.target),a=t.submitter;if(((a==null?void 0:a.formMethod)||r.method)!=="get")return;const s=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(re(s,U))return;const i=t.target,c=z(i);if(c.reload)return;t.preventDefault(),t.stopPropagation();const f=new FormData(i),d=a==null?void 0:a.getAttribute("name");d&&f.append(d,(a==null?void 0:a.getAttribute("value"))??""),s.search=new URLSearchParams(f).toString(),Y({type:"form",url:s,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??s.href===location.href})}),addEventListener("popstate",async t=>{var r;if((r=t.state)!=null&&r[j]){const a=t.state[j];if(ee={},a===E)return;const o=C[a],s=t.state[Be]??{},i=new URL(t.state[It]??location.href),c=t.state[M],f=ce(location)===ce(_.url);if(c===L&&(We||f)){e(i),C[E]=ye(),o&&scrollTo(o.x,o.y),s!==I.state&&(I={...I,state:s},be.$set({page:I})),E=a;return}const h=a-E;await Y({type:"popstate",url:i,popped:{state:s,scroll:o,delta:h},accept:()=>{E=a,L=c},block:()=>{history.go(-h)},nav_token:ee})}else if(!V){const a=new URL(location.href);e(a)}}),addEventListener("hashchange",()=>{V&&(V=!1,history.replaceState({...history.state,[j]:++E,[M]:L},"",location.href))});for(const t of document.querySelectorAll("link"))t.rel==="icon"&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&T.navigating.set(null)});function e(t){_.url=t,T.page.set({...I,url:t}),T.page.notify()}}async function Zt(e,{status:n=200,error:t,node_ids:r,params:a,route:o,data:s,form:i}){we=!0;const c=new URL(location.href);({params:a={},route:o={id:null}}=Ee(c,!1)||{});let f;try{const d=r.map(async(u,m)=>{const l=s[m];return l!=null&&l.uses&&(l.uses=at(l.uses)),Ae({loader:F.nodes[u],url:c,params:a,route:o,parent:async()=>{const y={};for(let b=0;b<m;b+=1)Object.assign(y,(await d[b]).data);return y},server_data_node:ke(l)})}),h=await Promise.all(d),g=ae.find(({id:u})=>u===o.id);if(g){const u=g.layouts;for(let m=0;m<u.length;m++)u[m]||h.splice(m,0,void 0)}f=te({url:c,params:a,branch:h,status:n,error:t,form:i,route:g??null})}catch(d){if(d instanceof je){await $(new URL(d.location,location.href));return}f=await oe({status:J(d),error:await D(d,{url:c,params:a,route:o}),url:c,route:o})}f.props.page&&(f.props.page.state={}),Ze(f,e,!0)}async function rt(e,n){var a;const t=new URL(e);t.pathname=gt(e.pathname),e.pathname.endsWith("/")&&t.searchParams.append(Bt,"1"),t.searchParams.append(Vt,n.map(o=>o?"1":"0").join(""));const r=await De(t.href);if(!r.ok){let o;throw(a=r.headers.get("content-type"))!=null&&a.includes("application/json")?o=await r.json():r.status===404?o="Not Found":r.status===500&&(o="Internal Error"),new ne(r.status,o)}return new Promise(async o=>{var h;const s=new Map,i=r.body.getReader(),c=new TextDecoder;function f(g){return Dt(g,{Promise:u=>new Promise((m,l)=>{s.set(u,{fulfil:m,reject:l})})})}let d="";for(;;){const{done:g,value:u}=await i.read();if(g&&!d)break;for(d+=!u&&d?`
`:c.decode(u,{stream:!0});;){const m=d.indexOf(`
`);if(m===-1)break;const l=JSON.parse(d.slice(0,m));if(d=d.slice(m+1),l.type==="redirect")return o(l);if(l.type==="data")(h=l.nodes)==null||h.forEach(y=>{(y==null?void 0:y.type)==="data"&&(y.uses=at(y.uses),y.data=f(y.data))}),o(l);else if(l.type==="chunk"){const{id:y,data:b,error:S}=l,w=s.get(y);s.delete(y),S?w.reject(f(S)):w.fulfil(f(b))}}}})}function at(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url),search_params:new Set((e==null?void 0:e.search_params)??[])}}function Qt(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const n=document.body,t=n.getAttribute("tabindex");n.tabIndex=-1,n.focus({preventScroll:!0,focusVisible:!1}),t!==null?n.setAttribute("tabindex",t):n.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let o=0;o<r.rangeCount;o+=1)a.push(r.getRangeAt(o));setTimeout(()=>{if(r.rangeCount===a.length){for(let o=0;o<r.rangeCount;o+=1){const s=a[o],i=r.getRangeAt(o);if(s.commonAncestorContainer!==i.commonAncestorContainer||s.startContainer!==i.startContainer||s.endContainer!==i.endContainer||s.startOffset!==i.startOffset||s.endOffset!==i.endOffset)return}r.removeAllRanges()}})}}}function ot(e,n,t,r){var c,f;let a,o;const s=new Promise((d,h)=>{a=d,o=h});return s.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:((c=e.route)==null?void 0:c.id)??null},url:e.url},to:t&&{params:(n==null?void 0:n.params)??null,route:{id:((f=n==null?void 0:n.route)==null?void 0:f.id)??null},url:t},willUnload:!n,type:r,complete:s},fulfil:a,reject:o}}export{rn as a,T as s};

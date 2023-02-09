(()=>{"use strict";var t={d:(e,n)=>{for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};t.r(e),t.d(e,{Slide:()=>ot,Theme:()=>i,default:()=>ft});const n={get:t=>!!localStorage&&localStorage.getItem(t),set:(t,e)=>!!localStorage&&(localStorage.setItem(t,e),!0),has:t=>!!localStorage&&null!==localStorage.getItem(t),remove:t=>!!localStorage&&(localStorage.removeItem(t),!0),getOrUndefined(t,e=[null,!1]){if(localStorage&&!1!==this.has(t)&&!1===e.includes(this.get(t)))return localStorage.getItem(t)}};class i{addAttributes(t){document.querySelector(t.attachTo).setAttribute("data-bs-toggle",t.type),document.querySelector(t.attachTo).setAttribute("data-bs-placement",t.direction),document.querySelector(t.attachTo).setAttribute("data-bs-title",t.title),document.querySelector(t.attachTo).setAttribute("data-bs-id",t.id),document.querySelector(t.attachTo).setAttribute("data-bs-index",t.order)}addElement(t){let e=document.createElement("tour-slide");e.setAttribute("data-title",t.title),e.setAttribute("data-content",t.content),e.setAttribute("id","tour-slide-"+t.id),e.setAttribute("data-slide-id",t.id),e.setAttribute("data-index",t.order),e.setAttribute("data-type",t.type),e.style.display="none";let n=document.querySelector(t.attachTo);n&&n.parentNode.append(e)}}function r(t){return t.split("-")[1]}function o(t){return"y"===t?"height":"width"}function s(t){return t.split("-")[0]}function l(t){return["top","bottom"].includes(s(t))?"x":"y"}function a(t,e,n){let{reference:i,floating:a}=t;const c=i.x+i.width/2-a.width/2,d=i.y+i.height/2-a.height/2,u=l(e),h=o(u),f=i[h]/2-a[h]/2,p="x"===u;let g;switch(s(e)){case"top":g={x:c,y:i.y-a.height};break;case"bottom":g={x:c,y:i.y+i.height};break;case"right":g={x:i.x+i.width,y:d};break;case"left":g={x:i.x-a.width,y:d};break;default:g={x:i.x,y:i.y}}switch(r(e)){case"start":g[u]-=f*(n&&p?-1:1);break;case"end":g[u]+=f*(n&&p?-1:1)}return g}const c=async(t,e,n)=>{const{placement:i="bottom",strategy:r="absolute",middleware:o=[],platform:s}=n,l=o.filter(Boolean),c=await(null==s.isRTL?void 0:s.isRTL(e));let d=await s.getElementRects({reference:t,floating:e,strategy:r}),{x:u,y:h}=a(d,i,c),f=i,p={},g=0;for(let n=0;n<l.length;n++){const{name:o,fn:m}=l[n],{x:b,y,data:x,reset:v}=await m({x:u,y:h,initialPlacement:i,placement:f,strategy:r,middlewareData:p,rects:d,platform:s,elements:{reference:t,floating:e}});u=null!=b?b:u,h=null!=y?y:h,p={...p,[o]:{...p[o],...x}},v&&g<=50&&(g++,"object"==typeof v&&(v.placement&&(f=v.placement),v.rects&&(d=!0===v.rects?await s.getElementRects({reference:t,floating:e,strategy:r}):v.rects),({x:u,y:h}=a(d,f,c))),n=-1)}return{x:u,y:h,placement:f,strategy:r,middlewareData:p}};function d(t){return"number"!=typeof t?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(t):{top:t,right:t,bottom:t,left:t}}function u(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}async function h(t,e){var n;void 0===e&&(e={});const{x:i,y:r,platform:o,rects:s,elements:l,strategy:a}=t,{boundary:c="clippingAncestors",rootBoundary:h="viewport",elementContext:f="floating",altBoundary:p=!1,padding:g=0}=e,m=d(g),b=l[p?"floating"===f?"reference":"floating":f],y=u(await o.getClippingRect({element:null==(n=await(null==o.isElement?void 0:o.isElement(b)))||n?b:b.contextElement||await(null==o.getDocumentElement?void 0:o.getDocumentElement(l.floating)),boundary:c,rootBoundary:h,strategy:a})),x="floating"===f?{...s.floating,x:i,y:r}:s.reference,v=await(null==o.getOffsetParent?void 0:o.getOffsetParent(l.floating)),w=await(null==o.isElement?void 0:o.isElement(v))&&await(null==o.getScale?void 0:o.getScale(v))||{x:1,y:1},T=u(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({rect:x,offsetParent:v,strategy:a}):x);return{top:(y.top-T.top+m.top)/w.y,bottom:(T.bottom-y.bottom+m.bottom)/w.y,left:(y.left-T.left+m.left)/w.x,right:(T.right-y.right+m.right)/w.x}}const f=Math.min,p=Math.max;function g(t,e,n){return p(t,f(e,n))}const m=t=>({name:"arrow",options:t,async fn(e){const{element:n,padding:i=0}=t||{},{x:s,y:a,placement:c,rects:u,platform:h}=e;if(null==n)return{};const f=d(i),p={x:s,y:a},m=l(c),b=o(m),y=await h.getDimensions(n),x="y"===m?"top":"left",v="y"===m?"bottom":"right",w=u.reference[b]+u.reference[m]-p[m]-u.floating[b],T=p[m]-u.reference[m],S=await(null==h.getOffsetParent?void 0:h.getOffsetParent(n));let E=S?"y"===m?S.clientHeight||0:S.clientWidth||0:0;0===E&&(E=u.floating[b]);const A=w/2-T/2,R=f[x],O=E-y[b]-f[v],C=E/2-y[b]/2+A,_=g(R,C,O),k=null!=r(c)&&C!=_&&u.reference[b]/2-(C<R?f[x]:f[v])-y[b]/2<0;return{[m]:p[m]-(k?C<R?R-C:O-C:0),data:{[m]:_,centerOffset:C-_}}}}),b=(["top","right","bottom","left"].reduce(((t,e)=>t.concat(e,e+"-start",e+"-end")),[]),{left:"right",right:"left",bottom:"top",top:"bottom"});function y(t){return t.replace(/left|right|bottom|top/g,(t=>b[t]))}function x(t,e,n){void 0===n&&(n=!1);const i=r(t),s=l(t),a=o(s);let c="x"===s?i===(n?"end":"start")?"right":"left":"start"===i?"bottom":"top";return e.reference[a]>e.floating[a]&&(c=y(c)),{main:c,cross:y(c)}}const v={start:"end",end:"start"};function w(t){return t.replace(/start|end/g,(t=>v[t]))}const T=function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var n;const{placement:i,middlewareData:o,rects:l,initialPlacement:a,platform:c,elements:d}=e,{mainAxis:u=!0,crossAxis:f=!0,fallbackPlacements:p,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:b=!0,...v}=t,T=s(i),S=s(a)===a,E=await(null==c.isRTL?void 0:c.isRTL(d.floating)),A=p||(S||!b?[y(a)]:function(t){const e=y(t);return[w(t),e,w(e)]}(a));p||"none"===m||A.push(...function(t,e,n,i){const o=r(t);let l=function(t,e,n){const i=["left","right"],r=["right","left"],o=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return n?e?r:i:e?i:r;case"left":case"right":return e?o:s;default:return[]}}(s(t),"start"===n,i);return o&&(l=l.map((t=>t+"-"+o)),e&&(l=l.concat(l.map(w)))),l}(a,b,m,E));const R=[a,...A],O=await h(e,v),C=[];let _=(null==(n=o.flip)?void 0:n.overflows)||[];if(u&&C.push(O[T]),f){const{main:t,cross:e}=x(i,l,E);C.push(O[t],O[e])}if(_=[..._,{placement:i,overflows:C}],!C.every((t=>t<=0))){var k,L;const t=((null==(k=o.flip)?void 0:k.index)||0)+1,e=R[t];if(e)return{data:{index:t,overflows:_},reset:{placement:e}};let n=null==(L=_.find((t=>t.overflows[0]<=0)))?void 0:L.placement;if(!n)switch(g){case"bestFit":{var I;const t=null==(I=_.map((t=>[t.placement,t.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)])).sort(((t,e)=>t[1]-e[1]))[0])?void 0:I[0];t&&(n=t);break}case"initialPlacement":n=a}if(i!==n)return{reset:{placement:n}}}return{}}}},S=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){const{x:n,y:i}=e,o=await async function(t,e){const{placement:n,platform:i,elements:o}=t,a=await(null==i.isRTL?void 0:i.isRTL(o.floating)),c=s(n),d=r(n),u="x"===l(n),h=["left","top"].includes(c)?-1:1,f=a&&u?-1:1,p="function"==typeof e?e(t):e;let{mainAxis:g,crossAxis:m,alignmentAxis:b}="number"==typeof p?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...p};return d&&"number"==typeof b&&(m="end"===d?-1*b:b),u?{x:m*f,y:g*h}:{x:g*h,y:m*f}}(e,t);return{x:n+o.x,y:i+o.y,data:o}}}};const E=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:i,placement:r}=e,{mainAxis:o=!0,crossAxis:a=!1,limiter:c={fn:t=>{let{x:e,y:n}=t;return{x:e,y:n}}},...d}=t,u={x:n,y:i},f=await h(e,d),p=l(s(r)),m=function(t){return"x"===t?"y":"x"}(p);let b=u[p],y=u[m];if(o){const t="y"===p?"bottom":"right";b=g(b+f["y"===p?"top":"left"],b,b-f[t])}if(a){const t="y"===m?"bottom":"right";y=g(y+f["y"===m?"top":"left"],y,y-f[t])}const x=c.fn({...e,[p]:b,[m]:y});return{...x,data:{x:x.x-n,y:x.y-i}}}}};function A(t){var e;return(null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function R(t){return A(t).getComputedStyle(t)}const O=Math.min,C=Math.max,_=Math.round;function k(t){const e=R(t);let n=parseFloat(e.width),i=parseFloat(e.height);const r=t.offsetWidth,o=t.offsetHeight,s=_(n)!==r||_(i)!==o;return s&&(n=r,i=o),{width:n,height:i,fallback:s}}function L(t){return U(t)?(t.nodeName||"").toLowerCase():""}let I;function N(){if(I)return I;const t=navigator.userAgentData;return t&&Array.isArray(t.brands)?(I=t.brands.map((t=>t.brand+"/"+t.version)).join(" "),I):navigator.userAgent}function P(t){return t instanceof A(t).HTMLElement}function B(t){return t instanceof A(t).Element}function U(t){return t instanceof A(t).Node}function K(t){return"undefined"!=typeof ShadowRoot&&(t instanceof A(t).ShadowRoot||t instanceof ShadowRoot)}function G(t){const{overflow:e,overflowX:n,overflowY:i,display:r}=R(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+n)&&!["inline","contents"].includes(r)}function D(t){return["table","td","th"].includes(L(t))}function H(t){const e=/firefox/i.test(N()),n=R(t),i=n.backdropFilter||n.WebkitBackdropFilter;return"none"!==n.transform||"none"!==n.perspective||!!i&&"none"!==i||e&&"filter"===n.willChange||e&&!!n.filter&&"none"!==n.filter||["transform","perspective"].some((t=>n.willChange.includes(t)))||["paint","layout","strict","content"].some((t=>{const e=n.contain;return null!=e&&e.includes(t)}))}function M(){return!/^((?!chrome|android).)*safari/i.test(N())}function F(t){return["html","body","#document"].includes(L(t))}function Y(t){return B(t)?t:t.contextElement}const j={x:1,y:1};function W(t){const e=Y(t);if(!P(e))return j;const n=e.getBoundingClientRect(),{width:i,height:r,fallback:o}=k(e);let s=(o?_(n.width):n.width)/i,l=(o?_(n.height):n.height)/r;return s&&Number.isFinite(s)||(s=1),l&&Number.isFinite(l)||(l=1),{x:s,y:l}}function q(t,e,n,i){var r,o;void 0===e&&(e=!1),void 0===n&&(n=!1);const s=t.getBoundingClientRect(),l=Y(t);let a=j;e&&(i?B(i)&&(a=W(i)):a=W(t));const c=l?A(l):window,d=!M()&&n;let u=(s.left+(d&&(null==(r=c.visualViewport)?void 0:r.offsetLeft)||0))/a.x,h=(s.top+(d&&(null==(o=c.visualViewport)?void 0:o.offsetTop)||0))/a.y,f=s.width/a.x,p=s.height/a.y;if(l){const t=A(l),e=i&&B(i)?A(i):i;let n=t.frameElement;for(;n&&i&&e!==t;){const t=W(n),e=n.getBoundingClientRect(),i=getComputedStyle(n);e.x+=(n.clientLeft+parseFloat(i.paddingLeft))*t.x,e.y+=(n.clientTop+parseFloat(i.paddingTop))*t.y,u*=t.x,h*=t.y,f*=t.x,p*=t.y,u+=e.x,h+=e.y,n=A(n).frameElement}}return{width:f,height:p,top:h,right:u+f,bottom:h+p,left:u,x:u,y:h}}function J(t){return((U(t)?t.ownerDocument:t.document)||window.document).documentElement}function V(t){return B(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function $(t){return q(J(t)).left+V(t).scrollLeft}function z(t){if("html"===L(t))return t;const e=t.assignedSlot||t.parentNode||K(t)&&t.host||J(t);return K(e)?e.host:e}function X(t){const e=z(t);return F(e)?e.ownerDocument.body:P(e)&&G(e)?e:X(e)}function Q(t,e){var n;void 0===e&&(e=[]);const i=X(t),r=i===(null==(n=t.ownerDocument)?void 0:n.body),o=A(i);return r?e.concat(o,o.visualViewport||[],G(i)?i:[]):e.concat(i,Q(i))}function Z(t,e,n){return"viewport"===e?u(function(t,e){const n=A(t),i=J(t),r=n.visualViewport;let o=i.clientWidth,s=i.clientHeight,l=0,a=0;if(r){o=r.width,s=r.height;const t=M();(t||!t&&"fixed"===e)&&(l=r.offsetLeft,a=r.offsetTop)}return{width:o,height:s,x:l,y:a}}(t,n)):B(e)?u(function(t,e){const n=q(t,!0,"fixed"===e),i=n.top+t.clientTop,r=n.left+t.clientLeft,o=P(t)?W(t):{x:1,y:1};return{width:t.clientWidth*o.x,height:t.clientHeight*o.y,x:r*o.x,y:i*o.y}}(e,n)):u(function(t){const e=J(t),n=V(t),i=t.ownerDocument.body,r=C(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),o=C(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let s=-n.scrollLeft+$(t);const l=-n.scrollTop;return"rtl"===R(i).direction&&(s+=C(e.clientWidth,i.clientWidth)-r),{width:r,height:o,x:s,y:l}}(J(t)))}function tt(t){return P(t)&&"fixed"!==R(t).position?t.offsetParent:null}function et(t){const e=A(t);let n=tt(t);for(;n&&D(n)&&"static"===R(n).position;)n=tt(n);return n&&("html"===L(n)||"body"===L(n)&&"static"===R(n).position&&!H(n))?e:n||function(t){let e=z(t);for(;P(e)&&!F(e);){if(H(e))return e;e=z(e)}return null}(t)||e}function nt(t,e,n){const i=P(e),r=J(e),o=q(t,!0,"fixed"===n,e);let s={scrollLeft:0,scrollTop:0};const l={x:0,y:0};if(i||!i&&"fixed"!==n)if(("body"!==L(e)||G(r))&&(s=V(e)),P(e)){const t=q(e,!0);l.x=t.x+e.clientLeft,l.y=t.y+e.clientTop}else r&&(l.x=$(r));return{x:o.left+s.scrollLeft-l.x,y:o.top+s.scrollTop-l.y,width:o.width,height:o.height}}const it={getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:i,strategy:r}=t;const o="clippingAncestors"===n?function(t,e){const n=e.get(t);if(n)return n;let i=Q(t).filter((t=>B(t)&&"body"!==L(t))),r=null;const o="fixed"===R(t).position;let s=o?z(t):t;for(;B(s)&&!F(s);){const t=R(s),e=H(s);(o?e||r:e||"static"!==t.position||!r||!["absolute","fixed"].includes(r.position))?r=t:i=i.filter((t=>t!==s)),s=z(s)}return e.set(t,i),i}(e,this._c):[].concat(n),s=[...o,i],l=s[0],a=s.reduce(((t,n)=>{const i=Z(e,n,r);return t.top=C(i.top,t.top),t.right=O(i.right,t.right),t.bottom=O(i.bottom,t.bottom),t.left=C(i.left,t.left),t}),Z(e,l,r));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:n,strategy:i}=t;const r=P(n),o=J(n);if(n===o)return e;let s={scrollLeft:0,scrollTop:0},l={x:1,y:1};const a={x:0,y:0};if((r||!r&&"fixed"!==i)&&(("body"!==L(n)||G(o))&&(s=V(n)),P(n))){const t=q(n);l=W(n),a.x=t.x+n.clientLeft,a.y=t.y+n.clientTop}return{width:e.width*l.x,height:e.height*l.y,x:e.x*l.x-s.scrollLeft*l.x+a.x,y:e.y*l.y-s.scrollTop*l.y+a.y}},isElement:B,getDimensions:function(t){return P(t)?k(t):t.getBoundingClientRect()},getOffsetParent:et,getDocumentElement:J,getScale:W,async getElementRects(t){let{reference:e,floating:n,strategy:i}=t;const r=this.getOffsetParent||et,o=this.getDimensions;return{reference:nt(e,await r(n),i),floating:{x:0,y:0,...await o(n)}}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>"rtl"===R(t).direction};class rt extends i{constructor(t){super(),this.visibleItem=void 0}bindToUi(t){console.log(t),t?.forEach(((t,e)=>{this.addElement(t)}))}show(t){let e=document.querySelector(t.attachTo),n=this.visibleItem=document.querySelector("#tour-slide-"+t.id),i=document.querySelector("#arrow-tour-slide-"+t.id);n.style.display="block",((t,e,n)=>{const i=new Map,r={platform:it,...n},o={...r.platform,_c:i};return c(t,e,{...r,platform:o})})(e,n,{placement:"bottom",middleware:[S(6),T(),E({padding:5}),m({element:i})]}).then((({x:t,y:e,placement:r,middlewareData:o})=>{Object.assign(n.style,{left:`${t}px`,top:`${e}px`});const{x:s,y:l}=o.arrow,a={top:"bottom",right:"left",bottom:"top",left:"right"}[r.split("-")[0]];Object.assign(i.style,{left:null!=s?`${s}px`:"",top:null!=l?`${l}px`:"",right:"",bottom:"",[a]:"-4px"})}))}hide(t){this.visibleItem&&(this.visibleItem.style.display="none")}}class ot{constructor({id:t,title:e,content:n,attachTo:i,type:r,direction:o,url:s,order:l}){this.id=t,this.title=e,this.content=n,this.attachTo=i,this.type=r,this.direction=o,this.url=s,this.order=l}}class st{static STORAGE_TOUR_INFO_KEY="current_active_tour_info";static STORAGE_TOUR_TRACKING_KEY="current_active_tour_tracking_info";static EventTarget=new EventTarget;static theme;static themeClass=rt;static slideClass=ot;static settings={ENABLE_ARROW_KEYS:!0,SHOW_INFO_BOX:!0};constructor({id:t,slug:e,title:i,description:r,status:o,slides:s}){this.data={},this.currentSlide={},this.tracking={currentSlideIndex:0,cancelled:!1,completed:!1,startedAt:Date.now(),endAt:null,cancelledAt:null,theme:"floatingUI"},this.data.id=t,this.data.slug=e,this.data.title=i,this.data.description=r,this.data.status=o,this.data.slides=s.sort(this.sorting),n.has(st.STORAGE_TOUR_TRACKING_KEY)&&(this.tracking=JSON.parse(n.get(st.STORAGE_TOUR_TRACKING_KEY))),this.url=new URL(window.location.href),this.pageSlides=this.filterAndSort(s),this.dispatch("created",this.data)}start(){let t=this.data.slides[this.tracking.currentSlideIndex];return st.theme=new st.themeClass(this),st.theme.bindToUi(this.pageSlides.map((t=>new st.slideClass(t)))),this.dispatch("started",this.data),this.showOrRedirectTo(t)}static setTheme(t){st.themeClass=t}static setSlide(t){st.slideClass=t}next(){if(this.hasNext()){st.theme.hide(this.currentSlide),this.tracking.currentSlideIndex++,this.saveChanges();let t=this.current();return this.dispatch("nextSlide",t),this.showOrRedirectTo(t)}}previous(){if(this.hasPrevious()){st.theme.hide(this.currentSlide),this.tracking.currentSlideIndex--,this.saveChanges();let t=this.current();return this.dispatch("previousSlide",t),this.showOrRedirectTo(t)}}current(){if(this.data.slides.indexOf(this.tracking.currentSlideIndex))return this.currentSlide=new st.slideClass(this.data.slides[this.tracking.currentSlideIndex]);throw new Error("Out of index")}complete(){return this.tracking.completed=!0,this.tracking.endAt=Date.now(),st.theme.hide(this.current()),this.saveChanges(),this.dispatch("completed",this),this.deleteRecords(),!0}cancel(){return this.tracking.cancelled=!0,this.tracking.cancelledAt=Date.now(),st.theme.hide(this.current()),this.saveChanges(),this.dispatch("canceled",this),this.deleteRecords(),!0}showOrRedirectTo(t){this.saveChanges(),[this.url.pathname,this.url.href].includes(t.url)?st.theme.show(t):window.location.href=t.url}saveChanges(){n.set(st.STORAGE_TOUR_INFO_KEY,JSON.stringify(this.data)),n.set(st.STORAGE_TOUR_TRACKING_KEY,JSON.stringify(this.tracking))}deleteRecords(){n.remove(st.STORAGE_TOUR_INFO_KEY),n.remove(st.STORAGE_TOUR_TRACKING_KEY)}filterAndSort(t){return t?.filter((t=>[this.url.pathname,this.url.href].includes(t.url))).sort(this.sorting)}sorting(t,e){return t.order===e.order?0:t.order<e.order?-1:1}static isOnTour(){return n.has(st.STORAGE_TOUR_INFO_KEY)}hasNext(){return this.tracking.currentSlideIndex<this.data.slides.length-1}hasPrevious(){return this.tracking.currentSlideIndex>0}static resume(){let t=JSON.parse(n.get(st.STORAGE_TOUR_INFO_KEY)),e=new st(t);return e.start(),e}dispatch(t,e){st.EventTarget.dispatchEvent(new CustomEvent(t,{detail:e}))}}class lt extends HTMLElement{constructor(){super(),this.apiEndpoint=this.getAttribute("api"),this.addEventListener("click",(t=>{this.fetch()}))}fetch(){fetch(this.apiEndpoint,{headers:{"Content-Type":"application/json"}}).then((t=>t.json())).then((t=>{globalThis.webtour=new st(t),webtour.start()}))}static get observedAttributes(){return["api"]}attributeChangedCallback(t,e,n){}}class at extends HTMLElement{constructor(){super(),this.tour={},this.tracking={},"show"!==this.getAttribute("visibility")&&(this.style.display="none"),st.EventTarget.addEventListener("completed",(t=>{this.setAttribute("visibility","hide")})),st.EventTarget.addEventListener("canceled",(t=>{this.setAttribute("visibility","hide")}))}connectedCallback(){n.has(st.STORAGE_TOUR_INFO_KEY)&&(this.updateUi(),this.style.display="block",this.setAttribute("visibility","show"))}static get observedAttributes(){return["currentIndex","tour-id","visibility"]}attributeChangedCallback(t,e,n){"visibility"===t&&e!==n&&(this.style.display="show"===n?"block":"none")}disconnectedCallback(){}updateUi(){this.tour=JSON.parse(n.get(st.STORAGE_TOUR_INFO_KEY)),this.tracking=JSON.parse(n.get(st.STORAGE_TOUR_TRACKING_KEY));let t=0===this.innerHTML.trim().length?'<div class="card bottom-0 left-0" id="tourInfoBox" style="width: 18rem;">\n                <div class="card-body">\n                    <h5 class="card-title">{{title}}</h5>\n                    <p class="card-text">{{description}}</p>\n                    <div class="d-flex justify-content-between">\n                        <tour-button role="previous" class="btn btn-outline-warning btn-sm tourPreviousSlideBtn"\n                                     id="previousSlideBtn">Previous\n                        </tour-button>\n                        <tour-counter></tour-counter>\n                        <tour-button role="next" class="btn btn-outline-primary btn-sm tourNextSlideBtn"\n                                     id="nextSlideBtn">Next\n                        </tour-button>\n                    </div>\n\n                </div>\n                <div class="card-footer text-muted">\n                    <div class="d-flex justify-content-between">\n                        <tour-button role="cancel" class="btn  btn-outline-warning btn-sm tourCancelBtn"\n                                     id="tourCancelBtn">Cancel\n                        </tour-button>\n                        <tour-button role="complete" class="btn btn-outline-primary btn-sm tourCompleteBtn"\n                                     id="tourCompleteBtn">\n                            Complete\n                        </tour-button>\n                    </div>\n                </div>\n            </div>':this.innerHTML;this.innerHTML=this.render(t,{...this.tour,currentIndex:parseInt(this.tracking.currentSlideIndex)+parseInt(1),totalSlide:this.tour.slides.length})}render(t,e){return t.replace(/{{(.*?)}}/g,(t=>e[t.split(/{{|}}/).filter(Boolean)[0].trim()]))}}class ct extends HTMLElement{constructor(){super(),this.role=this.getAttribute("role"),this.attachCallback(this.role)}static get observedAttributes(){return["role"]}attributeChangedCallback(t,e,n){}attachCallback(t){"previous"===t&&this.addEventListener("click",(()=>{void 0!==typeof webtour&&webtour.hasPrevious()&&webtour.previous()})),"next"===t&&this.addEventListener("click",(()=>{void 0!==typeof webtour&&webtour.hasNext()&&webtour.next()})),"complete"===t&&this.addEventListener("click",(()=>{void 0!==typeof webtour&&webtour.complete()})),"cancel"===t&&this.addEventListener("click",(()=>{void 0!==typeof webtour&&webtour.cancel()}))}}class dt extends HTMLElement{constructor(){super()}static get observeAttributes(){return["id","data-slide-id","data-title","data-content"]}connectedCallback(){this.updateUi()}attributeChangedCallback(t,e,n){}render(t,e){return t.replace(/{{(.*?)}}/g,(t=>e[t.split(/{{|}}/).filter(Boolean)[0].trim()]))}updateUi(){let t=this.getAttribute("id"),e=this.getAttribute("data-slide-id"),n=this.getAttribute("data-title"),i=this.getAttribute("data-content");this.innerHTML=this.render('\n<style>\n    .tourSlideElement{\n        width: max-content;\n  position: absolute;\n  z-index: 999;\n\n  background: #eeeeee;\n  color: #555555;\n  font-weight: bold;\n  padding: 10px;\n  border-radius: 10px;\n  font-size: 90%;\n    }\n    #arrow-{{id}}{\n  position: absolute;\n  background: #999999;\n  width: 8px;\n  height: 8px;\n  z-index: 900;\n  transform: rotate(45deg);\n}\n.tourSlideElement header {\nborder-bottom:1px solid #dddddd;\npadding:5px;\n}\n</style>\n<div class="tourSlideElement" role="tooltip">\n                            <div id="arrow-{{id}}"></div>\n\n                            <header>\n                                <h5>{{title}}</h5>\n                            </header>\n                            <p>{{content}}</p>\n                            <div class="d-flex justify-content-between">\n                                 <tour-button role="previous"  class="btn btn-outline-primary tourPreviousSlideBtn" >Previous</tour-button>\n                                 <tour-button role="next"  class="btn btn-outline-primary tourNextSlideBtn" >Next</tour-button>\n                            </div>\n                        </div>',{id:t,slideId:e,title:n,content:i})}}class ut extends HTMLElement{constructor(){super(),this.updateCounter(),st.EventTarget.addEventListener("nextSlide",(t=>{this.updateCounter()})),st.EventTarget.addEventListener("previousSlide",(t=>{this.updateCounter()}))}static get observedAttributes(){return["currentIndex"]}attributeChangedCallback(t,e,n){"currentIndex"===t&&this.updateCounter()}connectedCallback(){this.updateCounter()}updateCounter(){let t=JSON.parse(n.get(st.STORAGE_TOUR_INFO_KEY)),e=JSON.parse(n.get(st.STORAGE_TOUR_TRACKING_KEY)),i=parseInt(e?.currentSlideIndex)+parseInt(1),r=t.slides.length;this.innerHTML=`<span><b>${i}</b>/<b>${r}</b></span>`}}class ht extends st{static getInstance(){}}document.addEventListener("keyup",(t=>{void 0!==typeof webtour&&("ArrowRight"===t.key&&webtour.hasNext()?webtour.next():"ArrowLeft"===t.key&&webtour.hasPrevious()&&webtour.previous())})),document.addEventListener("DOMContentLoaded",(t=>{ht.isOnTour()&&(globalThis.webtour=ht.resume())})),customElements.define("tour-info",at),customElements.define("tour-start",lt),customElements.define("tour-button",ct),customElements.define("tour-slide",dt),customElements.define("tour-counter",ut);const ft=ht;module.exports=e})();
import{g as rr,R as q,r as u,j as v,a as Ze}from"./index-6L0r4tIt.js";function Yr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Yr(Object(n),!0).forEach(function(r){G(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Yr(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function nn(e){"@babel/helpers - typeof";return nn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},nn(e)}function Bo(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Wo(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function zo(e,t,n){return t&&Wo(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function G(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ar(e,t){return Uo(e)||Ko(e,t)||Ua(e,t)||Vo()}function $t(e){return Ho(e)||Yo(e)||Ua(e)||Xo()}function Ho(e){if(Array.isArray(e))return Mn(e)}function Uo(e){if(Array.isArray(e))return e}function Yo(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ko(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Ua(e,t){if(e){if(typeof e=="string")return Mn(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Mn(e,t)}}function Mn(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Xo(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Vo(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Kr=function(){},ir={},Ya={},Ka=null,Xa={mark:Kr,measure:Kr};try{typeof window<"u"&&(ir=window),typeof document<"u"&&(Ya=document),typeof MutationObserver<"u"&&(Ka=MutationObserver),typeof performance<"u"&&(Xa=performance)}catch{}var Go=ir.navigator||{},Xr=Go.userAgent,Vr=Xr===void 0?"":Xr,Te=ir,B=Ya,Gr=Ka,Wt=Xa;Te.document;var Oe=!!B.documentElement&&!!B.head&&typeof B.addEventListener=="function"&&typeof B.createElement=="function",Va=~Vr.indexOf("MSIE")||~Vr.indexOf("Trident/"),zt,Ht,Ut,Yt,Kt,xe="___FONT_AWESOME___",Dn=16,Ga="fa",qa="svg-inline--fa",We="data-fa-i2svg",Ln="data-fa-pseudo-element",qo="data-fa-pseudo-element-pending",or="data-prefix",sr="data-icon",qr="fontawesome-i2svg",Qo="async",Zo=["HTML","HEAD","STYLE","SCRIPT"],Qa=function(){try{return!0}catch{return!1}}(),F="classic",U="sharp",lr=[F,U];function It(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[F]}})}var Ot=It((zt={},G(zt,F,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),G(zt,U,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),zt)),Ct=It((Ht={},G(Ht,F,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),G(Ht,U,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Ht)),At=It((Ut={},G(Ut,F,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),G(Ut,U,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Ut)),Jo=It((Yt={},G(Yt,F,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),G(Yt,U,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Yt)),es=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Za="fa-layers-text",ts=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,ns=It((Kt={},G(Kt,F,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),G(Kt,U,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Kt)),Ja=[1,2,3,4,5,6,7,8,9,10],rs=Ja.concat([11,12,13,14,15,16,17,18,19,20]),as=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Le={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},St=new Set;Object.keys(Ct[F]).map(St.add.bind(St));Object.keys(Ct[U]).map(St.add.bind(St));var is=[].concat(lr,$t(St),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Le.GROUP,Le.SWAP_OPACITY,Le.PRIMARY,Le.SECONDARY]).concat(Ja.map(function(e){return"".concat(e,"x")})).concat(rs.map(function(e){return"w-".concat(e)})),yt=Te.FontAwesomeConfig||{};function os(e){var t=B.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function ss(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(B&&typeof B.querySelector=="function"){var ls=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];ls.forEach(function(e){var t=ar(e,2),n=t[0],r=t[1],a=ss(os(n));a!=null&&(yt[r]=a)})}var ei={styleDefault:"solid",familyDefault:"classic",cssPrefix:Ga,replacementClass:qa,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};yt.familyPrefix&&(yt.cssPrefix=yt.familyPrefix);var rt=C(C({},ei),yt);rt.autoReplaceSvg||(rt.observeMutations=!1);var S={};Object.keys(ei).forEach(function(e){Object.defineProperty(S,e,{enumerable:!0,set:function(n){rt[e]=n,xt.forEach(function(r){return r(S)})},get:function(){return rt[e]}})});Object.defineProperty(S,"familyPrefix",{enumerable:!0,set:function(t){rt.cssPrefix=t,xt.forEach(function(n){return n(S)})},get:function(){return rt.cssPrefix}});Te.FontAwesomeConfig=S;var xt=[];function cs(e){return xt.push(e),function(){xt.splice(xt.indexOf(e),1)}}var Ae=Dn,pe={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function fs(e){if(!(!e||!Oe)){var t=B.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=B.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return B.head.insertBefore(t,r),e}}var us="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Nt(){for(var e=12,t="";e-- >0;)t+=us[Math.random()*62|0];return t}function lt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function cr(e){return e.classList?lt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function ti(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ds(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(ti(e[n]),'" ')},"").trim()}function un(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function fr(e){return e.size!==pe.size||e.x!==pe.x||e.y!==pe.y||e.rotate!==pe.rotate||e.flipX||e.flipY}function ps(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function ms(e){var t=e.transform,n=e.width,r=n===void 0?Dn:n,a=e.height,i=a===void 0?Dn:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Va?l+="translate(".concat(t.x/Ae-r/2,"em, ").concat(t.y/Ae-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Ae,"em), calc(-50% + ").concat(t.y/Ae,"em)) "):l+="translate(".concat(t.x/Ae,"em, ").concat(t.y/Ae,"em) "),l+="scale(".concat(t.size/Ae*(t.flipX?-1:1),", ").concat(t.size/Ae*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var vs=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function ni(){var e=Ga,t=qa,n=S.cssPrefix,r=S.replacementClass,a=vs;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Qr=!1;function kn(){S.autoAddCss&&!Qr&&(fs(ni()),Qr=!0)}var hs={mixout:function(){return{dom:{css:ni,insertCss:kn}}},hooks:function(){return{beforeDOMElementCreation:function(){kn()},beforeI2svg:function(){kn()}}}},we=Te||{};we[xe]||(we[xe]={});we[xe].styles||(we[xe].styles={});we[xe].hooks||(we[xe].hooks={});we[xe].shims||(we[xe].shims=[]);var fe=we[xe],ri=[],gs=function e(){B.removeEventListener("DOMContentLoaded",e),rn=1,ri.map(function(t){return t()})},rn=!1;Oe&&(rn=(B.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(B.readyState),rn||B.addEventListener("DOMContentLoaded",gs));function bs(e){Oe&&(rn?setTimeout(e,0):ri.push(e))}function Mt(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?ti(e):"<".concat(t," ").concat(ds(r),">").concat(i.map(Mt).join(""),"</").concat(t,">")}function Zr(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var En=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=n,l,c,f;for(r===void 0?(l=1,f=t[i[0]]):(l=0,f=r);l<o;l++)c=i[l],f=s(f,t[c],c,t);return f};function ys(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function _n(e){var t=ys(e);return t.length===1?t[0].toString(16):null}function xs(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Jr(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Fn(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Jr(t);typeof fe.hooks.addPack=="function"&&!a?fe.hooks.addPack(e,Jr(t)):fe.styles[e]=C(C({},fe.styles[e]||{}),i),e==="fas"&&Fn("fa",t)}var Xt,Vt,Gt,Je=fe.styles,ws=fe.shims,ks=(Xt={},G(Xt,F,Object.values(At[F])),G(Xt,U,Object.values(At[U])),Xt),ur=null,ai={},ii={},oi={},si={},li={},Es=(Vt={},G(Vt,F,Object.keys(Ot[F])),G(Vt,U,Object.keys(Ot[U])),Vt);function Os(e){return~is.indexOf(e)}function Cs(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Os(a)?a:null}var ci=function(){var t=function(i){return En(Je,function(o,s,l){return o[l]=En(s,i,{}),o},{})};ai=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),ii=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),li=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Je||S.autoFetchSvg,r=En(ws,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});oi=r.names,si=r.unicodes,ur=dn(S.styleDefault,{family:S.familyDefault})};cs(function(e){ur=dn(e.styleDefault,{family:S.familyDefault})});ci();function dr(e,t){return(ai[e]||{})[t]}function As(e,t){return(ii[e]||{})[t]}function _e(e,t){return(li[e]||{})[t]}function fi(e){return oi[e]||{prefix:null,iconName:null}}function Ss(e){var t=si[e],n=dr("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function je(){return ur}var pr=function(){return{prefix:null,iconName:null,rest:[]}};function dn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?F:n,a=Ot[r][e],i=Ct[r][e]||Ct[r][a],o=e in fe.styles?e:null;return i||o||null}var ea=(Gt={},G(Gt,F,Object.keys(At[F])),G(Gt,U,Object.keys(At[U])),Gt);function pn(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},G(t,F,"".concat(S.cssPrefix,"-").concat(F)),G(t,U,"".concat(S.cssPrefix,"-").concat(U)),t),o=null,s=F;(e.includes(i[F])||e.some(function(c){return ea[F].includes(c)}))&&(s=F),(e.includes(i[U])||e.some(function(c){return ea[U].includes(c)}))&&(s=U);var l=e.reduce(function(c,f){var d=Cs(S.cssPrefix,f);if(Je[f]?(f=ks[s].includes(f)?Jo[s][f]:f,o=f,c.prefix=f):Es[s].indexOf(f)>-1?(o=f,c.prefix=dn(f,{family:s})):d?c.iconName=d:f!==S.replacementClass&&f!==i[F]&&f!==i[U]&&c.rest.push(f),!a&&c.prefix&&c.iconName){var p=o==="fa"?fi(c.iconName):{},m=_e(c.prefix,c.iconName);p.prefix&&(o=null),c.iconName=p.iconName||m||c.iconName,c.prefix=p.prefix||c.prefix,c.prefix==="far"&&!Je.far&&Je.fas&&!S.autoFetchSvg&&(c.prefix="fas")}return c},pr());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===U&&(Je.fass||S.autoFetchSvg)&&(l.prefix="fass",l.iconName=_e(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=je()||"fas"),l}var Ns=function(){function e(){Bo(this,e),this.definitions={}}return zo(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=C(C({},n.definitions[s]||{}),o[s]),Fn(s,o[s]);var l=At[F][s];l&&Fn(l,o[s]),ci()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,f=c[2];n[s]||(n[s]={}),f.length>0&&f.forEach(function(d){typeof d=="string"&&(n[s][d]=c)}),n[s][l]=c}),n}}]),e}(),ta=[],et={},nt={},Ts=Object.keys(nt);function js(e,t){var n=t.mixoutsTo;return ta=e,et={},Object.keys(nt).forEach(function(r){Ts.indexOf(r)===-1&&delete nt[r]}),ta.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),nn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){et[o]||(et[o]=[]),et[o].push(i[o])})}r.provides&&r.provides(nt)}),n}function Bn(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=et[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function ze(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=et[e]||[];a.forEach(function(i){i.apply(null,n)})}function ke(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return nt[e]?nt[e].apply(null,t):void 0}function Wn(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||je();if(t)return t=_e(n,t)||t,Zr(ui.definitions,n,t)||Zr(fe.styles,n,t)}var ui=new Ns,Rs=function(){S.autoReplaceSvg=!1,S.observeMutations=!1,ze("noAuto")},Ps={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Oe?(ze("beforeI2svg",t),ke("pseudoElements2svg",t),ke("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;S.autoReplaceSvg===!1&&(S.autoReplaceSvg=!0),S.observeMutations=!0,bs(function(){Is({autoReplaceSvgRoot:n}),ze("watch",t)})}},$s={icon:function(t){if(t===null)return null;if(nn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:_e(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=dn(t[0]);return{prefix:r,iconName:_e(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(S.cssPrefix,"-"))>-1||t.match(es))){var a=pn(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||je(),iconName:_e(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=je();return{prefix:i,iconName:_e(i,t)||t}}}},ne={noAuto:Rs,config:S,dom:Ps,parse:$s,library:ui,findIconDefinition:Wn,toHtml:Mt},Is=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?B:n;(Object.keys(fe.styles).length>0||S.autoFetchSvg)&&Oe&&S.autoReplaceSvg&&ne.dom.i2svg({node:r})};function mn(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Mt(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Oe){var r=B.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Ms(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(fr(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=un(C(C({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Ds(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(S.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:C(C({},a),{},{id:o}),children:r}]}]}function mr(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,f=e.titleId,d=e.extra,p=e.watchable,m=p===void 0?!1:p,h=r.found?r:n,b=h.width,g=h.height,O=a==="fak",w=[S.replacementClass,i?"".concat(S.cssPrefix,"-").concat(i):""].filter(function(j){return d.classes.indexOf(j)===-1}).filter(function(j){return j!==""||!!j}).concat(d.classes).join(" "),y={children:[],attributes:C(C({},d.attributes),{},{"data-prefix":a,"data-icon":i,class:w,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(b," ").concat(g)})},x=O&&!~d.classes.indexOf("fa-fw")?{width:"".concat(b/g*16*.0625,"em")}:{};m&&(y.attributes[We]=""),l&&(y.children.push({tag:"title",attributes:{id:y.attributes["aria-labelledby"]||"title-".concat(f||Nt())},children:[l]}),delete y.attributes.title);var k=C(C({},y),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:C(C({},x),d.styles)}),E=r.found&&n.found?ke("generateAbstractMask",k)||{children:[],attributes:{}}:ke("generateAbstractIcon",k)||{children:[],attributes:{}},A=E.children,N=E.attributes;return k.children=A,k.attributes=N,s?Ds(k):Ms(k)}function na(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=C(C(C({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[We]="");var f=C({},o.styles);fr(a)&&(f.transform=ms({transform:a,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);var d=un(f);d.length>0&&(c.style=d);var p=[];return p.push({tag:"span",attributes:c,children:[t]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function Ls(e){var t=e.content,n=e.title,r=e.extra,a=C(C(C({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=un(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var On=fe.styles;function zn(e){var t=e[0],n=e[1],r=e.slice(4),a=ar(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(S.cssPrefix,"-").concat(Le.GROUP)},children:[{tag:"path",attributes:{class:"".concat(S.cssPrefix,"-").concat(Le.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(S.cssPrefix,"-").concat(Le.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var _s={found:!1,width:512,height:512};function Fs(e,t){!Qa&&!S.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Hn(e,t){var n=t;return t==="fa"&&S.styleDefault!==null&&(t=je()),new Promise(function(r,a){if(ke("missingIconAbstract"),n==="fa"){var i=fi(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&On[t]&&On[t][e]){var o=On[t][e];return r(zn(o))}Fs(e,t),r(C(C({},_s),{},{icon:S.showMissingIcons&&e?ke("missingIconAbstract")||{}:{}}))})}var ra=function(){},Un=S.measurePerformance&&Wt&&Wt.mark&&Wt.measure?Wt:{mark:ra,measure:ra},ht='FA "6.5.2"',Bs=function(t){return Un.mark("".concat(ht," ").concat(t," begins")),function(){return di(t)}},di=function(t){Un.mark("".concat(ht," ").concat(t," ends")),Un.measure("".concat(ht," ").concat(t),"".concat(ht," ").concat(t," begins"),"".concat(ht," ").concat(t," ends"))},vr={begin:Bs,end:di},Jt=function(){};function aa(e){var t=e.getAttribute?e.getAttribute(We):null;return typeof t=="string"}function Ws(e){var t=e.getAttribute?e.getAttribute(or):null,n=e.getAttribute?e.getAttribute(sr):null;return t&&n}function zs(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(S.replacementClass)}function Hs(){if(S.autoReplaceSvg===!0)return en.replace;var e=en[S.autoReplaceSvg];return e||en.replace}function Us(e){return B.createElementNS("http://www.w3.org/2000/svg",e)}function Ys(e){return B.createElement(e)}function pi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Us:Ys:n;if(typeof e=="string")return B.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(pi(o,{ceFn:r}))}),a}function Ks(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var en={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(pi(a),n)}),n.getAttribute(We)===null&&S.keepOriginalSource){var r=B.createComment(Ks(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~cr(n).indexOf(S.replacementClass))return en.replace(t);var a=new RegExp("".concat(S.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===S.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Mt(s)}).join(`
`);n.setAttribute(We,""),n.innerHTML=o}};function ia(e){e()}function mi(e,t){var n=typeof t=="function"?t:Jt;if(e.length===0)n();else{var r=ia;S.mutateApproach===Qo&&(r=Te.requestAnimationFrame||ia),r(function(){var a=Hs(),i=vr.begin("mutate");e.map(a),i(),n()})}}var hr=!1;function vi(){hr=!0}function Yn(){hr=!1}var an=null;function oa(e){if(Gr&&S.observeMutations){var t=e.treeCallback,n=t===void 0?Jt:t,r=e.nodeCallback,a=r===void 0?Jt:r,i=e.pseudoElementsCallback,o=i===void 0?Jt:i,s=e.observeMutationsRoot,l=s===void 0?B:s;an=new Gr(function(c){if(!hr){var f=je();lt(c).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!aa(d.addedNodes[0])&&(S.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&S.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&aa(d.target)&&~as.indexOf(d.attributeName))if(d.attributeName==="class"&&Ws(d.target)){var p=pn(cr(d.target)),m=p.prefix,h=p.iconName;d.target.setAttribute(or,m||f),h&&d.target.setAttribute(sr,h)}else zs(d.target)&&a(d.target)})}}),Oe&&an.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Xs(){an&&an.disconnect()}function Vs(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Gs(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=pn(cr(e));return a.prefix||(a.prefix=je()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=As(a.prefix,e.innerText)||dr(a.prefix,_n(e.innerText))),!a.iconName&&S.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function qs(e){var t=lt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return S.autoA11y&&(n?t["aria-labelledby"]="".concat(S.replacementClass,"-title-").concat(r||Nt()):(t["aria-hidden"]="true",t.focusable="false")),t}function Qs(){return{iconName:null,title:null,titleId:null,prefix:null,transform:pe,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function sa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Gs(e),r=n.iconName,a=n.prefix,i=n.rest,o=qs(e),s=Bn("parseNodeAttributes",{},e),l=t.styleParser?Vs(e):[];return C({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:pe,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Zs=fe.styles;function hi(e){var t=S.autoReplaceSvg==="nest"?sa(e,{styleParser:!1}):sa(e);return~t.extra.classes.indexOf(Za)?ke("generateLayersText",e,t):ke("generateSvgReplacementMutation",e,t)}var Re=new Set;lr.map(function(e){Re.add("fa-".concat(e))});Object.keys(Ot[F]).map(Re.add.bind(Re));Object.keys(Ot[U]).map(Re.add.bind(Re));Re=$t(Re);function la(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Oe)return Promise.resolve();var n=B.documentElement.classList,r=function(d){return n.add("".concat(qr,"-").concat(d))},a=function(d){return n.remove("".concat(qr,"-").concat(d))},i=S.autoFetchSvg?Re:lr.map(function(f){return"fa-".concat(f)}).concat(Object.keys(Zs));i.includes("fa")||i.push("fa");var o=[".".concat(Za,":not([").concat(We,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(We,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=lt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=vr.begin("onTree"),c=s.reduce(function(f,d){try{var p=hi(d);p&&f.push(p)}catch(m){Qa||m.name==="MissingIcon"&&console.error(m)}return f},[]);return new Promise(function(f,d){Promise.all(c).then(function(p){mi(p,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),f()})}).catch(function(p){l(),d(p)})})}function Js(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;hi(e).then(function(n){n&&mi([n],t)})}function el(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Wn(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Wn(a||{})),e(r,C(C({},n),{},{mask:a}))}}var tl=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?pe:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,f=c===void 0?null:c,d=n.title,p=d===void 0?null:d,m=n.titleId,h=m===void 0?null:m,b=n.classes,g=b===void 0?[]:b,O=n.attributes,w=O===void 0?{}:O,y=n.styles,x=y===void 0?{}:y;if(t){var k=t.prefix,E=t.iconName,A=t.icon;return mn(C({type:"icon"},t),function(){return ze("beforeDOMElementCreation",{iconDefinition:t,params:n}),S.autoA11y&&(p?w["aria-labelledby"]="".concat(S.replacementClass,"-title-").concat(h||Nt()):(w["aria-hidden"]="true",w.focusable="false")),mr({icons:{main:zn(A),mask:l?zn(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:k,iconName:E,transform:C(C({},pe),a),symbol:o,title:p,maskId:f,titleId:h,extra:{attributes:w,styles:x,classes:g}})})}},nl={mixout:function(){return{icon:el(tl)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=la,n.nodeCallback=Js,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?B:r,i=n.callback,o=i===void 0?function(){}:i;return la(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,f=r.mask,d=r.maskId,p=r.extra;return new Promise(function(m,h){Promise.all([Hn(a,s),f.iconName?Hn(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(b){var g=ar(b,2),O=g[0],w=g[1];m([n,mr({icons:{main:O,mask:w},prefix:s,iconName:a,transform:l,symbol:c,maskId:d,title:i,titleId:o,extra:p,watchable:!0})])}).catch(h)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=un(s);l.length>0&&(a.style=l);var c;return fr(o)&&(c=ke("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},rl={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return mn({type:"layer"},function(){ze("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(S.cssPrefix,"-layers")].concat($t(i)).join(" ")},children:o}]})}}}},al={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,f=r.styles,d=f===void 0?{}:f;return mn({type:"counter",content:n},function(){return ze("beforeDOMElementCreation",{content:n,params:r}),Ls({content:n.toString(),title:i,extra:{attributes:c,styles:d,classes:["".concat(S.cssPrefix,"-layers-counter")].concat($t(s))}})})}}}},il={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?pe:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,f=r.attributes,d=f===void 0?{}:f,p=r.styles,m=p===void 0?{}:p;return mn({type:"text",content:n},function(){return ze("beforeDOMElementCreation",{content:n,params:r}),na({content:n,transform:C(C({},pe),i),title:s,extra:{attributes:d,styles:m,classes:["".concat(S.cssPrefix,"-layers-text")].concat($t(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Va){var c=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();s=f.width/c,l=f.height/c}return S.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,na({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},ol=new RegExp('"',"ug"),ca=[1105920,1112319];function sl(e){var t=e.replace(ol,""),n=xs(t,0),r=n>=ca[0]&&n<=ca[1],a=t.length===2?t[0]===t[1]:!1;return{value:_n(a?t[0]:t),isSecondary:r||a}}function fa(e,t){var n="".concat(qo).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=lt(e.children),o=i.filter(function(A){return A.getAttribute(Ln)===t})[0],s=Te.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(ts),c=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&f!=="none"&&f!==""){var d=s.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?U:F,m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Ct[p][l[2].toLowerCase()]:ns[p][c],h=sl(d),b=h.value,g=h.isSecondary,O=l[0].startsWith("FontAwesome"),w=dr(m,b),y=w;if(O){var x=Ss(b);x.iconName&&x.prefix&&(w=x.iconName,m=x.prefix)}if(w&&!g&&(!o||o.getAttribute(or)!==m||o.getAttribute(sr)!==y)){e.setAttribute(n,y),o&&e.removeChild(o);var k=Qs(),E=k.extra;E.attributes[Ln]=t,Hn(w,m).then(function(A){var N=mr(C(C({},k),{},{icons:{main:A,mask:pr()},prefix:m,iconName:y,extra:E,watchable:!0})),j=B.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(j,e.firstChild):e.appendChild(j),j.outerHTML=N.map(function(M){return Mt(M)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function ll(e){return Promise.all([fa(e,"::before"),fa(e,"::after")])}function cl(e){return e.parentNode!==document.head&&!~Zo.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Ln)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function ua(e){if(Oe)return new Promise(function(t,n){var r=lt(e.querySelectorAll("*")).filter(cl).map(ll),a=vr.begin("searchPseudoElements");vi(),Promise.all(r).then(function(){a(),Yn(),t()}).catch(function(){a(),Yn(),n()})})}var fl={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=ua,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?B:r;S.searchPseudoElements&&ua(a)}}},da=!1,ul={mixout:function(){return{dom:{unwatch:function(){vi(),da=!0}}}},hooks:function(){return{bootstrap:function(){oa(Bn("mutationObserverCallbacks",{}))},noAuto:function(){Xs()},watch:function(n){var r=n.observeMutationsRoot;da?Yn():oa(Bn("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},pa=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},dl={mixout:function(){return{parse:{transform:function(n){return pa(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=pa(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(l," ").concat(c," ").concat(f)},p={transform:"translate(".concat(o/2*-1," -256)")},m={outer:s,inner:d,path:p};return{tag:"g",attributes:C({},m.outer),children:[{tag:"g",attributes:C({},m.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:C(C({},r.icon.attributes),m.path)}]}]}}}},Cn={x:0,y:0,width:"100%",height:"100%"};function ma(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function pl(e){return e.tag==="g"?e.children:[e]}var ml={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?pn(a.split(" ").map(function(o){return o.trim()})):pr();return i.prefix||(i.prefix=je()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,f=i.icon,d=o.width,p=o.icon,m=ps({transform:l,containerWidth:d,iconWidth:c}),h={tag:"rect",attributes:C(C({},Cn),{},{fill:"white"})},b=f.children?{children:f.children.map(ma)}:{},g={tag:"g",attributes:C({},m.inner),children:[ma(C({tag:f.tag,attributes:C(C({},f.attributes),m.path)},b))]},O={tag:"g",attributes:C({},m.outer),children:[g]},w="mask-".concat(s||Nt()),y="clip-".concat(s||Nt()),x={tag:"mask",attributes:C(C({},Cn),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[h,O]},k={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:pl(p)},x]};return r.push(k,{tag:"rect",attributes:C({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(w,")")},Cn)}),{children:r,attributes:a}}}},vl={provides:function(t){var n=!1;Te.matchMedia&&(n=Te.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:C(C({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=C(C({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:C(C({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:C(C({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:C(C({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:C(C({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:C(C({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:C(C({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:C(C({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},hl={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},gl=[hs,nl,rl,al,il,fl,ul,dl,ml,vl,hl];js(gl,{mixoutsTo:ne});ne.noAuto;ne.config;ne.library;ne.dom;var Kn=ne.parse;ne.findIconDefinition;ne.toHtml;var bl=ne.icon;ne.layer;ne.text;ne.counter;var gi={exports:{}},yl="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",xl=yl,wl=xl;function bi(){}function yi(){}yi.resetWarningCache=bi;var kl=function(){function e(r,a,i,o,s,l){if(l!==wl){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:yi,resetWarningCache:bi};return n.PropTypes=n,n};gi.exports=kl();var El=gi.exports;const R=rr(El);function va(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function de(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?va(Object(n),!0).forEach(function(r){tt(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):va(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function on(e){"@babel/helpers - typeof";return on=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},on(e)}function tt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ol(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Cl(e,t){if(e==null)return{};var n=Ol(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Xn(e){return Al(e)||Sl(e)||Nl(e)||Tl()}function Al(e){if(Array.isArray(e))return Vn(e)}function Sl(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Nl(e,t){if(e){if(typeof e=="string")return Vn(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Vn(e,t)}}function Vn(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Tl(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function jl(e){var t,n=e.beat,r=e.fade,a=e.beatFade,i=e.bounce,o=e.shake,s=e.flash,l=e.spin,c=e.spinPulse,f=e.spinReverse,d=e.pulse,p=e.fixedWidth,m=e.inverse,h=e.border,b=e.listItem,g=e.flip,O=e.size,w=e.rotation,y=e.pull,x=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":f,"fa-spin-pulse":c,"fa-pulse":d,"fa-fw":p,"fa-inverse":m,"fa-border":h,"fa-li":b,"fa-flip":g===!0,"fa-flip-horizontal":g==="horizontal"||g==="both","fa-flip-vertical":g==="vertical"||g==="both"},tt(t,"fa-".concat(O),typeof O<"u"&&O!==null),tt(t,"fa-rotate-".concat(w),typeof w<"u"&&w!==null&&w!==0),tt(t,"fa-pull-".concat(y),typeof y<"u"&&y!==null),tt(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(x).map(function(k){return x[k]?k:null}).filter(function(k){return k})}function Rl(e){return e=e-0,e===e}function xi(e){return Rl(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Pl=["style"];function $l(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Il(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=xi(n.slice(0,r)),i=n.slice(r+1).trim();return a.startsWith("webkit")?t[$l(a)]=i:t[a]=i,t},{})}function wi(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return wi(e,l)}),a=Object.keys(t.attributes||{}).reduce(function(l,c){var f=t.attributes[c];switch(c){case"class":l.attrs.className=f,delete t.attributes.class;break;case"style":l.attrs.style=Il(f);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?l.attrs[c.toLowerCase()]=f:l.attrs[xi(c)]=f}return l},{attrs:{}}),i=n.style,o=i===void 0?{}:i,s=Cl(n,Pl);return a.attrs.style=de(de({},a.attrs.style),o),e.apply(void 0,[t.tag,de(de({},a.attrs),s)].concat(Xn(r)))}var ki=!1;try{ki=!0}catch{}function Ml(){if(!ki&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function ha(e){if(e&&on(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Kn.icon)return Kn.icon(e);if(e===null)return null;if(e&&on(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function An(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?tt({},e,t):{}}var ga={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},gr=q.forwardRef(function(e,t){var n=de(de({},ga),e),r=n.icon,a=n.mask,i=n.symbol,o=n.className,s=n.title,l=n.titleId,c=n.maskId,f=ha(r),d=An("classes",[].concat(Xn(jl(n)),Xn((o||"").split(" ")))),p=An("transform",typeof n.transform=="string"?Kn.transform(n.transform):n.transform),m=An("mask",ha(a)),h=bl(f,de(de(de(de({},d),p),m),{},{symbol:i,title:s,titleId:l,maskId:c}));if(!h)return Ml("Could not find icon",f),null;var b=h.abstract,g={ref:t};return Object.keys(n).forEach(function(O){ga.hasOwnProperty(O)||(g[O]=n[O])}),Dl(b[0],g)});gr.displayName="FontAwesomeIcon";gr.propTypes={beat:R.bool,border:R.bool,beatFade:R.bool,bounce:R.bool,className:R.string,fade:R.bool,flash:R.bool,mask:R.oneOfType([R.object,R.array,R.string]),maskId:R.string,fixedWidth:R.bool,inverse:R.bool,flip:R.oneOf([!0,!1,"horizontal","vertical","both"]),icon:R.oneOfType([R.object,R.array,R.string]),listItem:R.bool,pull:R.oneOf(["right","left"]),pulse:R.bool,rotation:R.oneOf([0,90,180,270]),shake:R.bool,size:R.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:R.bool,spinPulse:R.bool,spinReverse:R.bool,symbol:R.oneOfType([R.bool,R.string]),title:R.string,titleId:R.string,transform:R.oneOfType([R.string,R.object]),swapOpacity:R.bool};var Dl=wi.bind(null,q.createElement),Ll={prefix:"fas",iconName:"arrow-right",icon:[448,512,[8594],"f061","M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]};function Gn(){return Gn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Gn.apply(null,arguments)}function qn(e,t){return qn=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},qn(e,t)}function _l(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,qn(e,t)}function gt(e,t,n){this.k=e,this.x=t,this.y=n}gt.prototype={constructor:gt,scale:function(e){return e===1?this:new gt(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new gt(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};gt.prototype;var Ei={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var i="",o=0;o<arguments.length;o++){var s=arguments[o];s&&(i=a(i,r(s)))}return i}function r(i){if(typeof i=="string"||typeof i=="number")return i;if(typeof i!="object")return"";if(Array.isArray(i))return n.apply(null,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var o="";for(var s in i)t.call(i,s)&&i[s]&&(o=a(o,s));return o}function a(i,o){return o?i?i+" "+o:i+o:i}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(Ei);var Fl=Ei.exports;const I=rr(Fl);var ba={exports:{}},Qn={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;function n(r){function a(o,s,l,c,f,d){var p=c||"<<anonymous>>",m=d||l;if(s[l]==null)return o?new Error("Required "+f+" `"+m+"` was not specified "+("in `"+p+"`.")):null;for(var h=arguments.length,b=Array(h>6?h-6:0),g=6;g<h;g++)b[g-6]=arguments[g];return r.apply(void 0,[s,l,p,f,m].concat(b))}var i=a.bind(null,!1);return i.isRequired=a.bind(null,!0),i}e.exports=t.default})(Qn,Qn.exports);var Bl=Qn.exports;(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var n=Bl,r=a(n);function a(o){return o&&o.__esModule?o:{default:o}}function i(){for(var o=arguments.length,s=Array(o),l=0;l<o;l++)s[l]=arguments[l];function c(){for(var f=arguments.length,d=Array(f),p=0;p<f;p++)d[p]=arguments[p];var m=null;return s.forEach(function(h){if(m==null){var b=h.apply(void 0,d);b!=null&&(m=b)}}),m}return(0,r.default)(c)}e.exports=t.default})(ba,ba.exports);function Oi(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function ya(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function Wl(e){var t=zl(e,"string");return typeof t=="symbol"?t:String(t)}function zl(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function Hl(e,t,n){var r=u.useRef(e!==void 0),a=u.useState(t),i=a[0],o=a[1],s=e!==void 0,l=r.current;return r.current=s,!s&&l&&i!==t&&o(t),[s?e:i,u.useCallback(function(c){for(var f=arguments.length,d=new Array(f>1?f-1:0),p=1;p<f;p++)d[p-1]=arguments[p];n&&n.apply(void 0,[c].concat(d)),o(c)},[n])]}function br(e,t){return Object.keys(t).reduce(function(n,r){var a,i=n,o=i[ya(r)],s=i[r],l=Oi(i,[ya(r),r].map(Wl)),c=t[r],f=Hl(s,o,e[c]),d=f[0],p=f[1];return Gn({},l,(a={},a[r]=d,a[c]=p,a))},e)}var Ul=Function.prototype.bind.call(Function.prototype.call,[].slice);function ge(e,t){return Ul(e.querySelectorAll(t))}function Ci(){const[,e]=u.useReducer(t=>!t,!1);return e}const xa=e=>!e||typeof e=="function"?e:t=>{e.current=t};function Yl(e,t){const n=xa(e),r=xa(t);return a=>{n&&n(a),r&&r(a)}}function Ye(e,t){return u.useMemo(()=>Yl(e,t),[e,t])}const vn=u.createContext(null);vn.displayName="NavContext";const Kl=u.createContext(null),Tt=(e,t=null)=>e!=null?String(e):t||null,He=Kl,Ai=u.createContext(null),Xl="data-rr-ui-",Vl="rrUi";function ct(e){return`${Xl}${e}`}function Gl(e){return`${Vl}${e}`}function ql(e){const t=u.useRef(e);return u.useEffect(()=>{t.current=e},[e]),t}function V(e){const t=ql(e);return u.useCallback(function(...n){return t.current&&t.current(...n)},[t])}const Ql=["as","disabled"];function Zl(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Jl(e){return!e||e.trim()==="#"}function yr({tagName:e,disabled:t,href:n,target:r,rel:a,role:i,onClick:o,tabIndex:s=0,type:l}){e||(n!=null||r!=null||a!=null?e="a":e="button");const c={tagName:e};if(e==="button")return[{type:l||"button",disabled:t},c];const f=p=>{if((t||e==="a"&&Jl(n))&&p.preventDefault(),t){p.stopPropagation();return}o==null||o(p)},d=p=>{p.key===" "&&(p.preventDefault(),f(p))};return e==="a"&&(n||(n="#"),t&&(n=void 0)),[{role:i??"button",disabled:void 0,tabIndex:t?void 0:s,href:n,target:e==="a"?r:void 0,"aria-disabled":t||void 0,rel:e==="a"?a:void 0,onClick:f,onKeyDown:d},c]}const xr=u.forwardRef((e,t)=>{let{as:n,disabled:r}=e,a=Zl(e,Ql);const[i,{tagName:o}]=yr(Object.assign({tagName:n,disabled:r},a));return v.jsx(o,Object.assign({},a,i,{ref:t}))});xr.displayName="Button";const ec=["as","active","eventKey"];function tc(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Si({key:e,onClick:t,active:n,id:r,role:a,disabled:i}){const o=u.useContext(He),s=u.useContext(vn),l=u.useContext(Ai);let c=n;const f={role:a};if(s){!a&&s.role==="tablist"&&(f.role="tab");const d=s.getControllerId(e??null),p=s.getControlledId(e??null);f[ct("event-key")]=e,f.id=d||r,c=n==null&&e!=null?s.activeKey===e:n,(c||!(l!=null&&l.unmountOnExit)&&!(l!=null&&l.mountOnEnter))&&(f["aria-controls"]=p)}return f.role==="tab"&&(f["aria-selected"]=c,c||(f.tabIndex=-1),i&&(f.tabIndex=-1,f["aria-disabled"]=!0)),f.onClick=V(d=>{i||(t==null||t(d),e!=null&&o&&!d.isPropagationStopped()&&o(e,d))}),[f,{isActive:c}]}const Ni=u.forwardRef((e,t)=>{let{as:n=xr,active:r,eventKey:a}=e,i=tc(e,ec);const[o,s]=Si(Object.assign({key:Tt(a,i.href),active:r},i));return o[ct("active")]=s.isActive,v.jsx(n,Object.assign({},i,o,{ref:t}))});Ni.displayName="NavItem";const nc=Ni,rc=["as","onSelect","activeKey","role","onKeyDown"];function ac(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}const wa=()=>{},ka=ct("event-key"),Ti=u.forwardRef((e,t)=>{let{as:n="div",onSelect:r,activeKey:a,role:i,onKeyDown:o}=e,s=ac(e,rc);const l=Ci(),c=u.useRef(!1),f=u.useContext(He),d=u.useContext(Ai);let p,m;d&&(i=i||"tablist",a=d.activeKey,p=d.getControlledId,m=d.getControllerId);const h=u.useRef(null),b=y=>{const x=h.current;if(!x)return null;const k=ge(x,`[${ka}]:not([aria-disabled=true])`),E=x.querySelector("[aria-selected=true]");if(!E||E!==document.activeElement)return null;const A=k.indexOf(E);if(A===-1)return null;let N=A+y;return N>=k.length&&(N=0),N<0&&(N=k.length-1),k[N]},g=(y,x)=>{y!=null&&(r==null||r(y,x),f==null||f(y,x))},O=y=>{if(o==null||o(y),!d)return;let x;switch(y.key){case"ArrowLeft":case"ArrowUp":x=b(-1);break;case"ArrowRight":case"ArrowDown":x=b(1);break;default:return}x&&(y.preventDefault(),g(x.dataset[Gl("EventKey")]||null,y),c.current=!0,l())};u.useEffect(()=>{if(h.current&&c.current){const y=h.current.querySelector(`[${ka}][aria-selected=true]`);y==null||y.focus()}c.current=!1});const w=Ye(t,h);return v.jsx(He.Provider,{value:g,children:v.jsx(vn.Provider,{value:{role:i,activeKey:Tt(a),getControlledId:p||wa,getControllerId:m||wa},children:v.jsx(n,Object.assign({},s,{onKeyDown:O,ref:w,role:i}))})})});Ti.displayName="Nav";const ic=Object.assign(Ti,{Item:nc}),oc=["xxl","xl","lg","md","sm","xs"],sc="xs",ji=u.createContext({prefixes:{},breakpoints:oc,minBreakpoint:sc});function D(e,t){const{prefixes:n}=u.useContext(ji);return e||n[t]||t}function lc(){const{dir:e}=u.useContext(ji);return e==="rtl"}const $e=u.createContext(null);$e.displayName="NavbarContext";const wr=u.createContext(null);wr.displayName="CardHeaderContext";const Ri=u.forwardRef(({className:e,bsPrefix:t,as:n="div",...r},a)=>(t=D(t,"nav-item"),v.jsx(n,{ref:a,className:I(e,t),...r})));Ri.displayName="NavItem";function cc(){return u.useState(null)}function fc(e,t,n,r=!1){const a=V(n);u.useEffect(()=>{const i=typeof e=="function"?e():e;return i.addEventListener(t,a,r),()=>i.removeEventListener(t,a,r)},[e])}function Pi(){const e=u.useRef(!0),t=u.useRef(()=>e.current);return u.useEffect(()=>(e.current=!0,()=>{e.current=!1}),[]),t.current}function $i(e){const t=u.useRef(null);return u.useEffect(()=>{t.current=e}),t.current}const uc=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",dc=typeof document<"u",sn=dc||uc?u.useLayoutEffect:u.useEffect,pc=["onKeyDown"];function mc(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function vc(e){return!e||e.trim()==="#"}const kr=u.forwardRef((e,t)=>{let{onKeyDown:n}=e,r=mc(e,pc);const[a]=yr(Object.assign({tagName:"a"},r)),i=V(o=>{a.onKeyDown(o),n==null||n(o)});return vc(r.href)||r.role==="button"?v.jsx("a",Object.assign({ref:t},r,a,{onKeyDown:i})):v.jsx("a",Object.assign({ref:t},r,{onKeyDown:n}))});kr.displayName="Anchor";const Er=u.forwardRef(({bsPrefix:e,className:t,as:n=kr,active:r,eventKey:a,disabled:i=!1,...o},s)=>{e=D(e,"nav-link");const[l,c]=Si({key:Tt(a,o.href),active:r,disabled:i,...o});return v.jsx(n,{...o,...l,ref:s,disabled:i,className:I(t,e,i&&"disabled",c.isActive&&"active")})});Er.displayName="NavLink";const Ii=u.forwardRef((e,t)=>{const{as:n="div",bsPrefix:r,variant:a,fill:i=!1,justify:o=!1,navbar:s,navbarScroll:l,className:c,activeKey:f,...d}=br(e,{activeKey:"onSelect"}),p=D(r,"nav");let m,h,b=!1;const g=u.useContext($e),O=u.useContext(wr);return g?(m=g.bsPrefix,b=s??!0):O&&({cardHeaderBsPrefix:h}=O),v.jsx(ic,{as:n,ref:t,activeKey:f,className:I(c,{[p]:!b,[`${m}-nav`]:b,[`${m}-nav-scroll`]:b&&l,[`${h}-${a}`]:!!h,[`${p}-${a}`]:!!a,[`${p}-fill`]:i,[`${p}-justified`]:o}),...d})});Ii.displayName="Nav";const Sn=Object.assign(Ii,{Item:Ri,Link:Er}),hn=!!(typeof window<"u"&&window.document&&window.document.createElement);var Zn=!1,Jn=!1;try{var Nn={get passive(){return Zn=!0},get once(){return Jn=Zn=!0}};hn&&(window.addEventListener("test",Nn,Nn),window.removeEventListener("test",Nn,!0))}catch{}function Mi(e,t,n,r){if(r&&typeof r!="boolean"&&!Jn){var a=r.once,i=r.capture,o=n;!Jn&&a&&(o=n.__once||function s(l){this.removeEventListener(t,s,i),n.call(this,l)},n.__once=o),e.addEventListener(t,o,Zn?r:i)}e.addEventListener(t,n,r)}function hc(e,t,n){const r=u.useRef(e!==void 0),[a,i]=u.useState(t),o=e!==void 0,s=r.current;return r.current=o,!o&&s&&a!==t&&i(t),[o?e:a,u.useCallback((...l)=>{const[c,...f]=l;let d=n==null?void 0:n(c,...f);return i(c),d},[n])]}const gn=u.createContext(null);var Ea=Object.prototype.hasOwnProperty;function Oa(e,t,n){for(n of e.keys())if(wt(n,t))return n}function wt(e,t){var n,r,a;if(e===t)return!0;if(e&&t&&(n=e.constructor)===t.constructor){if(n===Date)return e.getTime()===t.getTime();if(n===RegExp)return e.toString()===t.toString();if(n===Array){if((r=e.length)===t.length)for(;r--&&wt(e[r],t[r]););return r===-1}if(n===Set){if(e.size!==t.size)return!1;for(r of e)if(a=r,a&&typeof a=="object"&&(a=Oa(t,a),!a)||!t.has(a))return!1;return!0}if(n===Map){if(e.size!==t.size)return!1;for(r of e)if(a=r[0],a&&typeof a=="object"&&(a=Oa(t,a),!a)||!wt(r[1],t.get(a)))return!1;return!0}if(n===ArrayBuffer)e=new Uint8Array(e),t=new Uint8Array(t);else if(n===DataView){if((r=e.byteLength)===t.byteLength)for(;r--&&e.getInt8(r)===t.getInt8(r););return r===-1}if(ArrayBuffer.isView(e)){if((r=e.byteLength)===t.byteLength)for(;r--&&e[r]===t[r];);return r===-1}if(!n||typeof e=="object"){r=0;for(n in e)if(Ea.call(e,n)&&++r&&!Ea.call(t,n)||!(n in t)||!wt(e[n],t[n]))return!1;return Object.keys(t).length===r}}return e!==e&&t!==t}function gc(e){const t=Pi();return[e[0],u.useCallback(n=>{if(t())return e[1](n)},[t,e[1]])]}var J="top",ie="bottom",oe="right",ee="left",Or="auto",Dt=[J,ie,oe,ee],at="start",jt="end",bc="clippingParents",Di="viewport",pt="popper",yc="reference",Ca=Dt.reduce(function(e,t){return e.concat([t+"-"+at,t+"-"+jt])},[]),Li=[].concat(Dt,[Or]).reduce(function(e,t){return e.concat([t,t+"-"+at,t+"-"+jt])},[]),xc="beforeRead",wc="read",kc="afterRead",Ec="beforeMain",Oc="main",Cc="afterMain",Ac="beforeWrite",Sc="write",Nc="afterWrite",Tc=[xc,wc,kc,Ec,Oc,Cc,Ac,Sc,Nc];function me(e){return e.split("-")[0]}function te(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function Ue(e){var t=te(e).Element;return e instanceof t||e instanceof Element}function ve(e){var t=te(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function Cr(e){if(typeof ShadowRoot>"u")return!1;var t=te(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}var Be=Math.max,ln=Math.min,it=Math.round;function er(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function _i(){return!/^((?!chrome|android).)*safari/i.test(er())}function ot(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);var r=e.getBoundingClientRect(),a=1,i=1;t&&ve(e)&&(a=e.offsetWidth>0&&it(r.width)/e.offsetWidth||1,i=e.offsetHeight>0&&it(r.height)/e.offsetHeight||1);var o=Ue(e)?te(e):window,s=o.visualViewport,l=!_i()&&n,c=(r.left+(l&&s?s.offsetLeft:0))/a,f=(r.top+(l&&s?s.offsetTop:0))/i,d=r.width/a,p=r.height/i;return{width:d,height:p,top:f,right:c+d,bottom:f+p,left:c,x:c,y:f}}function Ar(e){var t=ot(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function Fi(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&Cr(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function Pe(e){return e?(e.nodeName||"").toLowerCase():null}function Ee(e){return te(e).getComputedStyle(e)}function jc(e){return["table","td","th"].indexOf(Pe(e))>=0}function Ie(e){return((Ue(e)?e.ownerDocument:e.document)||window.document).documentElement}function bn(e){return Pe(e)==="html"?e:e.assignedSlot||e.parentNode||(Cr(e)?e.host:null)||Ie(e)}function Aa(e){return!ve(e)||Ee(e).position==="fixed"?null:e.offsetParent}function Rc(e){var t=/firefox/i.test(er()),n=/Trident/i.test(er());if(n&&ve(e)){var r=Ee(e);if(r.position==="fixed")return null}var a=bn(e);for(Cr(a)&&(a=a.host);ve(a)&&["html","body"].indexOf(Pe(a))<0;){var i=Ee(a);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||t&&i.willChange==="filter"||t&&i.filter&&i.filter!=="none")return a;a=a.parentNode}return null}function Lt(e){for(var t=te(e),n=Aa(e);n&&jc(n)&&Ee(n).position==="static";)n=Aa(n);return n&&(Pe(n)==="html"||Pe(n)==="body"&&Ee(n).position==="static")?t:n||Rc(e)||t}function Sr(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function kt(e,t,n){return Be(e,ln(t,n))}function Pc(e,t,n){var r=kt(e,t,n);return r>n?n:r}function Bi(){return{top:0,right:0,bottom:0,left:0}}function Wi(e){return Object.assign({},Bi(),e)}function zi(e,t){return t.reduce(function(n,r){return n[r]=e,n},{})}var $c=function(t,n){return t=typeof t=="function"?t(Object.assign({},n.rects,{placement:n.placement})):t,Wi(typeof t!="number"?t:zi(t,Dt))};function Ic(e){var t,n=e.state,r=e.name,a=e.options,i=n.elements.arrow,o=n.modifiersData.popperOffsets,s=me(n.placement),l=Sr(s),c=[ee,oe].indexOf(s)>=0,f=c?"height":"width";if(!(!i||!o)){var d=$c(a.padding,n),p=Ar(i),m=l==="y"?J:ee,h=l==="y"?ie:oe,b=n.rects.reference[f]+n.rects.reference[l]-o[l]-n.rects.popper[f],g=o[l]-n.rects.reference[l],O=Lt(i),w=O?l==="y"?O.clientHeight||0:O.clientWidth||0:0,y=b/2-g/2,x=d[m],k=w-p[f]-d[h],E=w/2-p[f]/2+y,A=kt(x,E,k),N=l;n.modifiersData[r]=(t={},t[N]=A,t.centerOffset=A-E,t)}}function Mc(e){var t=e.state,n=e.options,r=n.element,a=r===void 0?"[data-popper-arrow]":r;a!=null&&(typeof a=="string"&&(a=t.elements.popper.querySelector(a),!a)||Fi(t.elements.popper,a)&&(t.elements.arrow=a))}const Dc={name:"arrow",enabled:!0,phase:"main",fn:Ic,effect:Mc,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function st(e){return e.split("-")[1]}var Lc={top:"auto",right:"auto",bottom:"auto",left:"auto"};function _c(e,t){var n=e.x,r=e.y,a=t.devicePixelRatio||1;return{x:it(n*a)/a||0,y:it(r*a)/a||0}}function Sa(e){var t,n=e.popper,r=e.popperRect,a=e.placement,i=e.variation,o=e.offsets,s=e.position,l=e.gpuAcceleration,c=e.adaptive,f=e.roundOffsets,d=e.isFixed,p=o.x,m=p===void 0?0:p,h=o.y,b=h===void 0?0:h,g=typeof f=="function"?f({x:m,y:b}):{x:m,y:b};m=g.x,b=g.y;var O=o.hasOwnProperty("x"),w=o.hasOwnProperty("y"),y=ee,x=J,k=window;if(c){var E=Lt(n),A="clientHeight",N="clientWidth";if(E===te(n)&&(E=Ie(n),Ee(E).position!=="static"&&s==="absolute"&&(A="scrollHeight",N="scrollWidth")),E=E,a===J||(a===ee||a===oe)&&i===jt){x=ie;var j=d&&E===k&&k.visualViewport?k.visualViewport.height:E[A];b-=j-r.height,b*=l?1:-1}if(a===ee||(a===J||a===ie)&&i===jt){y=oe;var M=d&&E===k&&k.visualViewport?k.visualViewport.width:E[N];m-=M-r.width,m*=l?1:-1}}var T=Object.assign({position:s},c&&Lc),P=f===!0?_c({x:m,y:b},te(n)):{x:m,y:b};if(m=P.x,b=P.y,l){var $;return Object.assign({},T,($={},$[x]=w?"0":"",$[y]=O?"0":"",$.transform=(k.devicePixelRatio||1)<=1?"translate("+m+"px, "+b+"px)":"translate3d("+m+"px, "+b+"px, 0)",$))}return Object.assign({},T,(t={},t[x]=w?b+"px":"",t[y]=O?m+"px":"",t.transform="",t))}function Fc(e){var t=e.state,n=e.options,r=n.gpuAcceleration,a=r===void 0?!0:r,i=n.adaptive,o=i===void 0?!0:i,s=n.roundOffsets,l=s===void 0?!0:s,c={placement:me(t.placement),variation:st(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:a,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Sa(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:o,roundOffsets:l})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Sa(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const Bc={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Fc,data:{}};var qt={passive:!0};function Wc(e){var t=e.state,n=e.instance,r=e.options,a=r.scroll,i=a===void 0?!0:a,o=r.resize,s=o===void 0?!0:o,l=te(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&c.forEach(function(f){f.addEventListener("scroll",n.update,qt)}),s&&l.addEventListener("resize",n.update,qt),function(){i&&c.forEach(function(f){f.removeEventListener("scroll",n.update,qt)}),s&&l.removeEventListener("resize",n.update,qt)}}const zc={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Wc,data:{}};var Hc={left:"right",right:"left",bottom:"top",top:"bottom"};function tn(e){return e.replace(/left|right|bottom|top/g,function(t){return Hc[t]})}var Uc={start:"end",end:"start"};function Na(e){return e.replace(/start|end/g,function(t){return Uc[t]})}function Nr(e){var t=te(e),n=t.pageXOffset,r=t.pageYOffset;return{scrollLeft:n,scrollTop:r}}function Tr(e){return ot(Ie(e)).left+Nr(e).scrollLeft}function Yc(e,t){var n=te(e),r=Ie(e),a=n.visualViewport,i=r.clientWidth,o=r.clientHeight,s=0,l=0;if(a){i=a.width,o=a.height;var c=_i();(c||!c&&t==="fixed")&&(s=a.offsetLeft,l=a.offsetTop)}return{width:i,height:o,x:s+Tr(e),y:l}}function Kc(e){var t,n=Ie(e),r=Nr(e),a=(t=e.ownerDocument)==null?void 0:t.body,i=Be(n.scrollWidth,n.clientWidth,a?a.scrollWidth:0,a?a.clientWidth:0),o=Be(n.scrollHeight,n.clientHeight,a?a.scrollHeight:0,a?a.clientHeight:0),s=-r.scrollLeft+Tr(e),l=-r.scrollTop;return Ee(a||n).direction==="rtl"&&(s+=Be(n.clientWidth,a?a.clientWidth:0)-i),{width:i,height:o,x:s,y:l}}function jr(e){var t=Ee(e),n=t.overflow,r=t.overflowX,a=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+a+r)}function Hi(e){return["html","body","#document"].indexOf(Pe(e))>=0?e.ownerDocument.body:ve(e)&&jr(e)?e:Hi(bn(e))}function Et(e,t){var n;t===void 0&&(t=[]);var r=Hi(e),a=r===((n=e.ownerDocument)==null?void 0:n.body),i=te(r),o=a?[i].concat(i.visualViewport||[],jr(r)?r:[]):r,s=t.concat(o);return a?s:s.concat(Et(bn(o)))}function tr(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Xc(e,t){var n=ot(e,!1,t==="fixed");return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}function Ta(e,t,n){return t===Di?tr(Yc(e,n)):Ue(t)?Xc(t,n):tr(Kc(Ie(e)))}function Vc(e){var t=Et(bn(e)),n=["absolute","fixed"].indexOf(Ee(e).position)>=0,r=n&&ve(e)?Lt(e):e;return Ue(r)?t.filter(function(a){return Ue(a)&&Fi(a,r)&&Pe(a)!=="body"}):[]}function Gc(e,t,n,r){var a=t==="clippingParents"?Vc(e):[].concat(t),i=[].concat(a,[n]),o=i[0],s=i.reduce(function(l,c){var f=Ta(e,c,r);return l.top=Be(f.top,l.top),l.right=ln(f.right,l.right),l.bottom=ln(f.bottom,l.bottom),l.left=Be(f.left,l.left),l},Ta(e,o,r));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function Ui(e){var t=e.reference,n=e.element,r=e.placement,a=r?me(r):null,i=r?st(r):null,o=t.x+t.width/2-n.width/2,s=t.y+t.height/2-n.height/2,l;switch(a){case J:l={x:o,y:t.y-n.height};break;case ie:l={x:o,y:t.y+t.height};break;case oe:l={x:t.x+t.width,y:s};break;case ee:l={x:t.x-n.width,y:s};break;default:l={x:t.x,y:t.y}}var c=a?Sr(a):null;if(c!=null){var f=c==="y"?"height":"width";switch(i){case at:l[c]=l[c]-(t[f]/2-n[f]/2);break;case jt:l[c]=l[c]+(t[f]/2-n[f]/2);break}}return l}function Rt(e,t){t===void 0&&(t={});var n=t,r=n.placement,a=r===void 0?e.placement:r,i=n.strategy,o=i===void 0?e.strategy:i,s=n.boundary,l=s===void 0?bc:s,c=n.rootBoundary,f=c===void 0?Di:c,d=n.elementContext,p=d===void 0?pt:d,m=n.altBoundary,h=m===void 0?!1:m,b=n.padding,g=b===void 0?0:b,O=Wi(typeof g!="number"?g:zi(g,Dt)),w=p===pt?yc:pt,y=e.rects.popper,x=e.elements[h?w:p],k=Gc(Ue(x)?x:x.contextElement||Ie(e.elements.popper),l,f,o),E=ot(e.elements.reference),A=Ui({reference:E,element:y,strategy:"absolute",placement:a}),N=tr(Object.assign({},y,A)),j=p===pt?N:E,M={top:k.top-j.top+O.top,bottom:j.bottom-k.bottom+O.bottom,left:k.left-j.left+O.left,right:j.right-k.right+O.right},T=e.modifiersData.offset;if(p===pt&&T){var P=T[a];Object.keys(M).forEach(function($){var W=[oe,ie].indexOf($)>=0?1:-1,K=[J,ie].indexOf($)>=0?"y":"x";M[$]+=P[K]*W})}return M}function qc(e,t){t===void 0&&(t={});var n=t,r=n.placement,a=n.boundary,i=n.rootBoundary,o=n.padding,s=n.flipVariations,l=n.allowedAutoPlacements,c=l===void 0?Li:l,f=st(r),d=f?s?Ca:Ca.filter(function(h){return st(h)===f}):Dt,p=d.filter(function(h){return c.indexOf(h)>=0});p.length===0&&(p=d);var m=p.reduce(function(h,b){return h[b]=Rt(e,{placement:b,boundary:a,rootBoundary:i,padding:o})[me(b)],h},{});return Object.keys(m).sort(function(h,b){return m[h]-m[b]})}function Qc(e){if(me(e)===Or)return[];var t=tn(e);return[Na(e),t,Na(t)]}function Zc(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var a=n.mainAxis,i=a===void 0?!0:a,o=n.altAxis,s=o===void 0?!0:o,l=n.fallbackPlacements,c=n.padding,f=n.boundary,d=n.rootBoundary,p=n.altBoundary,m=n.flipVariations,h=m===void 0?!0:m,b=n.allowedAutoPlacements,g=t.options.placement,O=me(g),w=O===g,y=l||(w||!h?[tn(g)]:Qc(g)),x=[g].concat(y).reduce(function(ae,z){return ae.concat(me(z)===Or?qc(t,{placement:z,boundary:f,rootBoundary:d,padding:c,flipVariations:h,allowedAutoPlacements:b}):z)},[]),k=t.rects.reference,E=t.rects.popper,A=new Map,N=!0,j=x[0],M=0;M<x.length;M++){var T=x[M],P=me(T),$=st(T)===at,W=[J,ie].indexOf(P)>=0,K=W?"width":"height",L=Rt(t,{placement:T,boundary:f,rootBoundary:d,altBoundary:p,padding:c}),Y=W?$?oe:ee:$?ie:J;k[K]>E[K]&&(Y=tn(Y));var _=tn(Y),Q=[];if(i&&Q.push(L[P]<=0),s&&Q.push(L[Y]<=0,L[_]<=0),Q.every(function(ae){return ae})){j=T,N=!1;break}A.set(T,Q)}if(N)for(var X=h?3:1,re=function(z){var le=x.find(function(Ke){var he=A.get(Ke);if(he)return he.slice(0,z).every(function(Me){return Me})});if(le)return j=le,"break"},ue=X;ue>0;ue--){var se=re(ue);if(se==="break")break}t.placement!==j&&(t.modifiersData[r]._skip=!0,t.placement=j,t.reset=!0)}}const Jc={name:"flip",enabled:!0,phase:"main",fn:Zc,requiresIfExists:["offset"],data:{_skip:!1}};function ja(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function Ra(e){return[J,oe,ie,ee].some(function(t){return e[t]>=0})}function ef(e){var t=e.state,n=e.name,r=t.rects.reference,a=t.rects.popper,i=t.modifiersData.preventOverflow,o=Rt(t,{elementContext:"reference"}),s=Rt(t,{altBoundary:!0}),l=ja(o,r),c=ja(s,a,i),f=Ra(l),d=Ra(c);t.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:f,hasPopperEscaped:d},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":d})}const tf={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:ef};function nf(e,t,n){var r=me(e),a=[ee,J].indexOf(r)>=0?-1:1,i=typeof n=="function"?n(Object.assign({},t,{placement:e})):n,o=i[0],s=i[1];return o=o||0,s=(s||0)*a,[ee,oe].indexOf(r)>=0?{x:s,y:o}:{x:o,y:s}}function rf(e){var t=e.state,n=e.options,r=e.name,a=n.offset,i=a===void 0?[0,0]:a,o=Li.reduce(function(f,d){return f[d]=nf(d,t.rects,i),f},{}),s=o[t.placement],l=s.x,c=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=c),t.modifiersData[r]=o}const af={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:rf};function of(e){var t=e.state,n=e.name;t.modifiersData[n]=Ui({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const sf={name:"popperOffsets",enabled:!0,phase:"read",fn:of,data:{}};function lf(e){return e==="x"?"y":"x"}function cf(e){var t=e.state,n=e.options,r=e.name,a=n.mainAxis,i=a===void 0?!0:a,o=n.altAxis,s=o===void 0?!1:o,l=n.boundary,c=n.rootBoundary,f=n.altBoundary,d=n.padding,p=n.tether,m=p===void 0?!0:p,h=n.tetherOffset,b=h===void 0?0:h,g=Rt(t,{boundary:l,rootBoundary:c,padding:d,altBoundary:f}),O=me(t.placement),w=st(t.placement),y=!w,x=Sr(O),k=lf(x),E=t.modifiersData.popperOffsets,A=t.rects.reference,N=t.rects.popper,j=typeof b=="function"?b(Object.assign({},t.rects,{placement:t.placement})):b,M=typeof j=="number"?{mainAxis:j,altAxis:j}:Object.assign({mainAxis:0,altAxis:0},j),T=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,P={x:0,y:0};if(E){if(i){var $,W=x==="y"?J:ee,K=x==="y"?ie:oe,L=x==="y"?"height":"width",Y=E[x],_=Y+g[W],Q=Y-g[K],X=m?-N[L]/2:0,re=w===at?A[L]:N[L],ue=w===at?-N[L]:-A[L],se=t.elements.arrow,ae=m&&se?Ar(se):{width:0,height:0},z=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Bi(),le=z[W],Ke=z[K],he=kt(0,A[L],ae[L]),Me=y?A[L]/2-X-he-le-M.mainAxis:re-he-le-M.mainAxis,ft=y?-A[L]/2+X+he+Ke+M.mainAxis:ue+he+Ke+M.mainAxis,ut=t.elements.arrow&&Lt(t.elements.arrow),Ft=ut?x==="y"?ut.clientTop||0:ut.clientLeft||0:0,Xe=($=T==null?void 0:T[x])!=null?$:0,Ve=Y+Me-Xe-Ft,H=Y+ft-Xe,dt=kt(m?ln(_,Ve):_,Y,m?Be(Q,H):Q);E[x]=dt,P[x]=dt-Y}if(s){var Ge,_o=x==="x"?J:ee,Fo=x==="x"?ie:oe,De=E[k],Bt=k==="y"?"height":"width",Fr=De+g[_o],Br=De-g[Fo],wn=[J,ee].indexOf(O)!==-1,Wr=(Ge=T==null?void 0:T[k])!=null?Ge:0,zr=wn?Fr:De-A[Bt]-N[Bt]-Wr+M.altAxis,Hr=wn?De+A[Bt]+N[Bt]-Wr-M.altAxis:Br,Ur=m&&wn?Pc(zr,De,Hr):kt(m?zr:Fr,De,m?Hr:Br);E[k]=Ur,P[k]=Ur-De}t.modifiersData[r]=P}}const ff={name:"preventOverflow",enabled:!0,phase:"main",fn:cf,requiresIfExists:["offset"]};function uf(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function df(e){return e===te(e)||!ve(e)?Nr(e):uf(e)}function pf(e){var t=e.getBoundingClientRect(),n=it(t.width)/e.offsetWidth||1,r=it(t.height)/e.offsetHeight||1;return n!==1||r!==1}function mf(e,t,n){n===void 0&&(n=!1);var r=ve(t),a=ve(t)&&pf(t),i=Ie(t),o=ot(e,a,n),s={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(r||!r&&!n)&&((Pe(t)!=="body"||jr(i))&&(s=df(t)),ve(t)?(l=ot(t,!0),l.x+=t.clientLeft,l.y+=t.clientTop):i&&(l.x=Tr(i))),{x:o.left+s.scrollLeft-l.x,y:o.top+s.scrollTop-l.y,width:o.width,height:o.height}}function vf(e){var t=new Map,n=new Set,r=[];e.forEach(function(i){t.set(i.name,i)});function a(i){n.add(i.name);var o=[].concat(i.requires||[],i.requiresIfExists||[]);o.forEach(function(s){if(!n.has(s)){var l=t.get(s);l&&a(l)}}),r.push(i)}return e.forEach(function(i){n.has(i.name)||a(i)}),r}function hf(e){var t=vf(e);return Tc.reduce(function(n,r){return n.concat(t.filter(function(a){return a.phase===r}))},[])}function gf(e){var t;return function(){return t||(t=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})})),t}}function bf(e){var t=e.reduce(function(n,r){var a=n[r.name];return n[r.name]=a?Object.assign({},a,r,{options:Object.assign({},a.options,r.options),data:Object.assign({},a.data,r.data)}):r,n},{});return Object.keys(t).map(function(n){return t[n]})}var Pa={placement:"bottom",modifiers:[],strategy:"absolute"};function $a(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function yf(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,r=n===void 0?[]:n,a=t.defaultOptions,i=a===void 0?Pa:a;return function(s,l,c){c===void 0&&(c=i);var f={placement:"bottom",orderedModifiers:[],options:Object.assign({},Pa,i),modifiersData:{},elements:{reference:s,popper:l},attributes:{},styles:{}},d=[],p=!1,m={state:f,setOptions:function(O){var w=typeof O=="function"?O(f.options):O;b(),f.options=Object.assign({},i,f.options,w),f.scrollParents={reference:Ue(s)?Et(s):s.contextElement?Et(s.contextElement):[],popper:Et(l)};var y=hf(bf([].concat(r,f.options.modifiers)));return f.orderedModifiers=y.filter(function(x){return x.enabled}),h(),m.update()},forceUpdate:function(){if(!p){var O=f.elements,w=O.reference,y=O.popper;if($a(w,y)){f.rects={reference:mf(w,Lt(y),f.options.strategy==="fixed"),popper:Ar(y)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach(function(M){return f.modifiersData[M.name]=Object.assign({},M.data)});for(var x=0;x<f.orderedModifiers.length;x++){if(f.reset===!0){f.reset=!1,x=-1;continue}var k=f.orderedModifiers[x],E=k.fn,A=k.options,N=A===void 0?{}:A,j=k.name;typeof E=="function"&&(f=E({state:f,options:N,name:j,instance:m})||f)}}}},update:gf(function(){return new Promise(function(g){m.forceUpdate(),g(f)})}),destroy:function(){b(),p=!0}};if(!$a(s,l))return m;m.setOptions(c).then(function(g){!p&&c.onFirstUpdate&&c.onFirstUpdate(g)});function h(){f.orderedModifiers.forEach(function(g){var O=g.name,w=g.options,y=w===void 0?{}:w,x=g.effect;if(typeof x=="function"){var k=x({state:f,name:O,instance:m,options:y}),E=function(){};d.push(k||E)}})}function b(){d.forEach(function(g){return g()}),d=[]}return m}}const xf=yf({defaultModifiers:[tf,sf,Bc,zc,af,Jc,ff,Dc]}),wf=["enabled","placement","strategy","modifiers"];function kf(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}const Ef={name:"applyStyles",enabled:!1,phase:"afterWrite",fn:()=>{}},Of={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:({state:e})=>()=>{const{reference:t,popper:n}=e.elements;if("removeAttribute"in t){const r=(t.getAttribute("aria-describedby")||"").split(",").filter(a=>a.trim()!==n.id);r.length?t.setAttribute("aria-describedby",r.join(",")):t.removeAttribute("aria-describedby")}},fn:({state:e})=>{var t;const{popper:n,reference:r}=e.elements,a=(t=n.getAttribute("role"))==null?void 0:t.toLowerCase();if(n.id&&a==="tooltip"&&"setAttribute"in r){const i=r.getAttribute("aria-describedby");if(i&&i.split(",").indexOf(n.id)!==-1)return;r.setAttribute("aria-describedby",i?`${i},${n.id}`:n.id)}}},Cf=[];function Af(e,t,n={}){let{enabled:r=!0,placement:a="bottom",strategy:i="absolute",modifiers:o=Cf}=n,s=kf(n,wf);const l=u.useRef(o),c=u.useRef(),f=u.useCallback(()=>{var g;(g=c.current)==null||g.update()},[]),d=u.useCallback(()=>{var g;(g=c.current)==null||g.forceUpdate()},[]),[p,m]=gc(u.useState({placement:a,update:f,forceUpdate:d,attributes:{},styles:{popper:{},arrow:{}}})),h=u.useMemo(()=>({name:"updateStateModifier",enabled:!0,phase:"write",requires:["computeStyles"],fn:({state:g})=>{const O={},w={};Object.keys(g.elements).forEach(y=>{O[y]=g.styles[y],w[y]=g.attributes[y]}),m({state:g,styles:O,attributes:w,update:f,forceUpdate:d,placement:g.placement})}}),[f,d,m]),b=u.useMemo(()=>(wt(l.current,o)||(l.current=o),l.current),[o]);return u.useEffect(()=>{!c.current||!r||c.current.setOptions({placement:a,strategy:i,modifiers:[...b,h,Ef]})},[i,a,h,r,b]),u.useEffect(()=>{if(!(!r||e==null||t==null))return c.current=xf(e,t,Object.assign({},s,{placement:a,strategy:i,modifiers:[...b,Of,h]})),()=>{c.current!=null&&(c.current.destroy(),c.current=void 0,m(g=>Object.assign({},g,{attributes:{},styles:{popper:{}}})))}},[r,e,t]),p}function cn(e,t){if(e.contains)return e.contains(t);if(e.compareDocumentPosition)return e===t||!!(e.compareDocumentPosition(t)&16)}function Sf(e,t,n,r){var a=r&&typeof r!="boolean"?r.capture:r;e.removeEventListener(t,n,a),n.__once&&e.removeEventListener(t,n.__once,a)}function Ne(e,t,n,r){return Mi(e,t,n,r),function(){Sf(e,t,n,r)}}function yn(e){return e&&e.ownerDocument||document}var Nf=function(){},Tf=Nf;const jf=rr(Tf),Ia=()=>{};function Rf(e){return e.button===0}function Pf(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}const Tn=e=>e&&("current"in e?e.current:e),Ma={click:"mousedown",mouseup:"mousedown",pointerup:"pointerdown"};function $f(e,t=Ia,{disabled:n,clickTrigger:r="click"}={}){const a=u.useRef(!1),i=u.useRef(!1),o=u.useCallback(c=>{const f=Tn(e);jf(!!f,"ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node"),a.current=!f||Pf(c)||!Rf(c)||!!cn(f,c.target)||i.current,i.current=!1},[e]),s=V(c=>{const f=Tn(e);f&&cn(f,c.target)&&(i.current=!0)}),l=V(c=>{a.current||t(c)});u.useEffect(()=>{var c,f;if(n||e==null)return;const d=yn(Tn(e)),p=d.defaultView||window;let m=(c=p.event)!=null?c:(f=p.parent)==null?void 0:f.event,h=null;Ma[r]&&(h=Ne(d,Ma[r],s,!0));const b=Ne(d,r,o,!0),g=Ne(d,r,w=>{if(w===m){m=void 0;return}l(w)});let O=[];return"ontouchstart"in d.documentElement&&(O=[].slice.call(d.body.children).map(w=>Ne(w,"mousemove",Ia))),()=>{h==null||h(),b(),g(),O.forEach(w=>w())}},[e,n,r,o,s,l])}function If(e){const t={};return Array.isArray(e)?(e==null||e.forEach(n=>{t[n.name]=n}),t):e||t}function Mf(e={}){return Array.isArray(e)?e:Object.keys(e).map(t=>(e[t].name=t,e[t]))}function Df({enabled:e,enableEvents:t,placement:n,flip:r,offset:a,fixed:i,containerPadding:o,arrowElement:s,popperConfig:l={}}){var c,f,d,p,m;const h=If(l.modifiers);return Object.assign({},l,{placement:n,enabled:e,strategy:i?"fixed":l.strategy,modifiers:Mf(Object.assign({},h,{eventListeners:{enabled:t,options:(c=h.eventListeners)==null?void 0:c.options},preventOverflow:Object.assign({},h.preventOverflow,{options:o?Object.assign({padding:o},(f=h.preventOverflow)==null?void 0:f.options):(d=h.preventOverflow)==null?void 0:d.options}),offset:{options:Object.assign({offset:a},(p=h.offset)==null?void 0:p.options)},arrow:Object.assign({},h.arrow,{enabled:!!s,options:Object.assign({},(m=h.arrow)==null?void 0:m.options,{element:s})}),flip:Object.assign({enabled:!!r},h.flip)}))})}const Lf=["children","usePopper"];function _f(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}const Ff=()=>{};function Yi(e={}){const t=u.useContext(gn),[n,r]=cc(),a=u.useRef(!1),{flip:i,offset:o,rootCloseEvent:s,fixed:l=!1,placement:c,popperConfig:f={},enableEventListeners:d=!0,usePopper:p=!!t}=e,m=(t==null?void 0:t.show)==null?!!e.show:t.show;m&&!a.current&&(a.current=!0);const h=E=>{t==null||t.toggle(!1,E)},{placement:b,setMenu:g,menuElement:O,toggleElement:w}=t||{},y=Af(w,O,Df({placement:c||b||"bottom-start",enabled:p,enableEvents:d??m,offset:o,flip:i,fixed:l,arrowElement:n,popperConfig:f})),x=Object.assign({ref:g||Ff,"aria-labelledby":w==null?void 0:w.id},y.attributes.popper,{style:y.styles.popper}),k={show:m,placement:b,hasShown:a.current,toggle:t==null?void 0:t.toggle,popper:p?y:null,arrowProps:p?Object.assign({ref:r},y.attributes.arrow,{style:y.styles.arrow}):{}};return $f(O,h,{clickTrigger:s,disabled:!m}),[x,k]}function Ki(e){let{children:t,usePopper:n=!0}=e,r=_f(e,Lf);const[a,i]=Yi(Object.assign({},r,{usePopper:n}));return v.jsx(v.Fragment,{children:t(a,i)})}Ki.displayName="DropdownMenu";const fn={prefix:String(Math.round(Math.random()*1e10)),current:0},Xi=q.createContext(fn),Bf=q.createContext(!1);let Wf=!!(typeof window<"u"&&window.document&&window.document.createElement),jn=new WeakMap;function zf(e=!1){let t=u.useContext(Xi),n=u.useRef(null);if(n.current===null&&!e){var r,a;let i=(a=q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)===null||a===void 0||(r=a.ReactCurrentOwner)===null||r===void 0?void 0:r.current;if(i){let o=jn.get(i);o==null?jn.set(i,{id:t.current,state:i.memoizedState}):i.memoizedState!==o.state&&(t.current=o.id,jn.delete(i))}n.current=++t.current}return n.current}function Hf(e){let t=u.useContext(Xi);t===fn&&!Wf&&console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");let n=zf(!!e),r=`react-aria${t.prefix}`;return e||`${r}-${n}`}function Uf(e){let t=q.useId(),[n]=u.useState(Gf()),r=n?"react-aria":`react-aria${fn.prefix}`;return e||`${r}-${t}`}const Yf=typeof q.useId=="function"?Uf:Hf;function Kf(){return!1}function Xf(){return!0}function Vf(e){return()=>{}}function Gf(){return typeof q.useSyncExternalStore=="function"?q.useSyncExternalStore(Vf,Kf,Xf):u.useContext(Bf)}const Vi=e=>{var t;return((t=e.getAttribute("role"))==null?void 0:t.toLowerCase())==="menu"},Da=()=>{};function Gi(){const e=Yf(),{show:t=!1,toggle:n=Da,setToggle:r,menuElement:a}=u.useContext(gn)||{},i=u.useCallback(s=>{n(!t,s)},[t,n]),o={id:e,ref:r||Da,onClick:i,"aria-expanded":!!t};return a&&Vi(a)&&(o["aria-haspopup"]=!0),[o,{show:t,toggle:n}]}function qi({children:e}){const[t,n]=Gi();return v.jsx(v.Fragment,{children:e(t,n)})}qi.displayName="DropdownToggle";const qf=["eventKey","disabled","onClick","active","as"];function Qf(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Qi({key:e,href:t,active:n,disabled:r,onClick:a}){const i=u.useContext(He),o=u.useContext(vn),{activeKey:s}=o||{},l=Tt(e,t),c=n==null&&e!=null?Tt(s)===l:n;return[{onClick:V(d=>{r||(a==null||a(d),i&&!d.isPropagationStopped()&&i(l,d))}),"aria-disabled":r||void 0,"aria-selected":c,[ct("dropdown-item")]:""},{isActive:c}]}const Zi=u.forwardRef((e,t)=>{let{eventKey:n,disabled:r,onClick:a,active:i,as:o=xr}=e,s=Qf(e,qf);const[l]=Qi({key:n,href:s.href,disabled:r,onClick:a,active:i});return v.jsx(o,Object.assign({},s,{ref:t},l))});Zi.displayName="DropdownItem";const Ji=u.createContext(hn?window:void 0);Ji.Provider;function xn(){return u.useContext(Ji)}function La(){const e=Ci(),t=u.useRef(null),n=u.useCallback(r=>{t.current=r,e()},[e]);return[t,n]}function _t({defaultShow:e,show:t,onSelect:n,onToggle:r,itemSelector:a=`* [${ct("dropdown-item")}]`,focusFirstItemOnShow:i,placement:o="bottom-start",children:s}){const l=xn(),[c,f]=hc(t,e,r),[d,p]=La(),m=d.current,[h,b]=La(),g=h.current,O=$i(c),w=u.useRef(null),y=u.useRef(!1),x=u.useContext(He),k=u.useCallback((T,P,$=P==null?void 0:P.type)=>{f(T,{originalEvent:P,source:$})},[f]),E=V((T,P)=>{n==null||n(T,P),k(!1,P,"select"),P.isPropagationStopped()||x==null||x(T,P)}),A=u.useMemo(()=>({toggle:k,placement:o,show:c,menuElement:m,toggleElement:g,setMenu:p,setToggle:b}),[k,o,c,m,g,p,b]);m&&O&&!c&&(y.current=m.contains(m.ownerDocument.activeElement));const N=V(()=>{g&&g.focus&&g.focus()}),j=V(()=>{const T=w.current;let P=i;if(P==null&&(P=d.current&&Vi(d.current)?"keyboard":!1),P===!1||P==="keyboard"&&!/^key.+$/.test(T))return;const $=ge(d.current,a)[0];$&&$.focus&&$.focus()});u.useEffect(()=>{c?j():y.current&&(y.current=!1,N())},[c,y,N,j]),u.useEffect(()=>{w.current=null});const M=(T,P)=>{if(!d.current)return null;const $=ge(d.current,a);let W=$.indexOf(T)+P;return W=Math.max(0,Math.min(W,$.length)),$[W]};return fc(u.useCallback(()=>l.document,[l]),"keydown",T=>{var P,$;const{key:W}=T,K=T.target,L=(P=d.current)==null?void 0:P.contains(K),Y=($=h.current)==null?void 0:$.contains(K);if(/input|textarea/i.test(K.tagName)&&(W===" "||W!=="Escape"&&L||W==="Escape"&&K.type==="search")||!L&&!Y||W==="Tab"&&(!d.current||!c))return;w.current=T.type;const Q={originalEvent:T,source:T.type};switch(W){case"ArrowUp":{const X=M(K,-1);X&&X.focus&&X.focus(),T.preventDefault();return}case"ArrowDown":if(T.preventDefault(),!c)f(!0,Q);else{const X=M(K,1);X&&X.focus&&X.focus()}return;case"Tab":Mi(K.ownerDocument,"keyup",X=>{var re;(X.key==="Tab"&&!X.target||!((re=d.current)!=null&&re.contains(X.target)))&&f(!1,Q)},{once:!0});break;case"Escape":W==="Escape"&&(T.preventDefault(),T.stopPropagation()),f(!1,Q);break}}),v.jsx(He.Provider,{value:E,children:v.jsx(gn.Provider,{value:A,children:s})})}_t.displayName="Dropdown";_t.Menu=Ki;_t.Toggle=qi;_t.Item=Zi;const Rr=u.createContext({});Rr.displayName="DropdownContext";const eo=u.forwardRef(({className:e,bsPrefix:t,as:n="hr",role:r="separator",...a},i)=>(t=D(t,"dropdown-divider"),v.jsx(n,{ref:i,className:I(e,t),role:r,...a})));eo.displayName="DropdownDivider";const to=u.forwardRef(({className:e,bsPrefix:t,as:n="div",role:r="heading",...a},i)=>(t=D(t,"dropdown-header"),v.jsx(n,{ref:i,className:I(e,t),role:r,...a})));to.displayName="DropdownHeader";const no=u.forwardRef(({bsPrefix:e,className:t,eventKey:n,disabled:r=!1,onClick:a,active:i,as:o=kr,...s},l)=>{const c=D(e,"dropdown-item"),[f,d]=Qi({key:n,href:s.href,disabled:r,onClick:a,active:i});return v.jsx(o,{...s,...f,ref:l,className:I(t,c,d.isActive&&"active",r&&"disabled")})});no.displayName="DropdownItem";const ro=u.forwardRef(({className:e,bsPrefix:t,as:n="span",...r},a)=>(t=D(t,"dropdown-item-text"),v.jsx(n,{ref:a,className:I(e,t),...r})));ro.displayName="DropdownItemText";const Pr=u.createContext(null);Pr.displayName="InputGroupContext";function ao(e,t){return e}function io(e,t,n){const r=n?"top-end":"top-start",a=n?"top-start":"top-end",i=n?"bottom-end":"bottom-start",o=n?"bottom-start":"bottom-end",s=n?"right-start":"left-start",l=n?"right-end":"left-end",c=n?"left-start":"right-start",f=n?"left-end":"right-end";let d=e?o:i;return t==="up"?d=e?a:r:t==="end"?d=e?f:c:t==="start"?d=e?l:s:t==="down-centered"?d="bottom":t==="up-centered"&&(d="top"),d}const oo=u.forwardRef(({bsPrefix:e,className:t,align:n,rootCloseEvent:r,flip:a=!0,show:i,renderOnMount:o,as:s="div",popperConfig:l,variant:c,...f},d)=>{let p=!1;const m=u.useContext($e),h=D(e,"dropdown-menu"),{align:b,drop:g,isRTL:O}=u.useContext(Rr);n=n||b;const w=u.useContext(Pr),y=[];if(n)if(typeof n=="object"){const T=Object.keys(n);if(T.length){const P=T[0],$=n[P];p=$==="start",y.push(`${h}-${P}-${$}`)}}else n==="end"&&(p=!0);const x=io(p,g,O),[k,{hasShown:E,popper:A,show:N,toggle:j}]=Yi({flip:a,rootCloseEvent:r,show:i,usePopper:!m&&y.length===0,offset:[0,2],popperConfig:l,placement:x});if(k.ref=Ye(ao(d),k.ref),sn(()=>{N&&(A==null||A.update())},[N]),!E&&!o&&!w)return null;typeof s!="string"&&(k.show=N,k.close=()=>j==null?void 0:j(!1),k.align=n);let M=f.style;return A!=null&&A.placement&&(M={...f.style,...k.style},f["x-placement"]=A.placement),v.jsx(s,{...f,...k,style:M,...(y.length||m)&&{"data-bs-popper":"static"},className:I(t,h,N&&"show",p&&`${h}-end`,c&&`${h}-${c}`,...y)})});oo.displayName="DropdownMenu";const so=u.forwardRef(({as:e,bsPrefix:t,variant:n="primary",size:r,active:a=!1,disabled:i=!1,className:o,...s},l)=>{const c=D(t,"btn"),[f,{tagName:d}]=yr({tagName:e,disabled:i,...s}),p=d;return v.jsx(p,{...f,...s,ref:l,disabled:i,className:I(o,c,a&&"active",n&&`${c}-${n}`,r&&`${c}-${r}`,s.href&&i&&"disabled")})});so.displayName="Button";const lo=u.forwardRef(({bsPrefix:e,split:t,className:n,childBsPrefix:r,as:a=so,...i},o)=>{const s=D(e,"dropdown-toggle"),l=u.useContext(gn);r!==void 0&&(i.bsPrefix=r);const[c]=Gi();return c.ref=Ye(c.ref,ao(o)),v.jsx(a,{className:I(n,s,t&&`${s}-split`,(l==null?void 0:l.show)&&"show"),...c,...i})});lo.displayName="DropdownToggle";const co=u.forwardRef((e,t)=>{const{bsPrefix:n,drop:r="down",show:a,className:i,align:o="start",onSelect:s,onToggle:l,focusFirstItemOnShow:c,as:f="div",navbar:d,autoClose:p=!0,...m}=br(e,{show:"onToggle"}),h=u.useContext(Pr),b=D(n,"dropdown"),g=lc(),O=A=>p===!1?A==="click":p==="inside"?A!=="rootClose":p==="outside"?A!=="select":!0,w=V((A,N)=>{var j,M;!((j=N.originalEvent)==null||(M=j.target)==null)&&M.classList.contains("dropdown-toggle")&&N.source==="mousedown"||(N.originalEvent.currentTarget===document&&(N.source!=="keydown"||N.originalEvent.key==="Escape")&&(N.source="rootClose"),O(N.source)&&(l==null||l(A,N)))}),x=io(o==="end",r,g),k=u.useMemo(()=>({align:o,drop:r,isRTL:g}),[o,r,g]),E={down:b,"down-centered":`${b}-center`,up:"dropup","up-centered":"dropup-center dropup",end:"dropend",start:"dropstart"};return v.jsx(Rr.Provider,{value:k,children:v.jsx(_t,{placement:x,show:a,onSelect:s,onToggle:w,focusFirstItemOnShow:c,itemSelector:`.${b}-item:not(.disabled):not(:disabled)`,children:h?m.children:v.jsx(f,{...m,ref:t,className:I(i,a&&"show",E[r])})})})});co.displayName="Dropdown";const Fe=Object.assign(co,{Toggle:lo,Menu:oo,Item:no,ItemText:ro,Divider:eo,Header:to}),fo=u.forwardRef(({id:e,title:t,children:n,bsPrefix:r,className:a,rootCloseEvent:i,menuRole:o,disabled:s,active:l,renderMenuOnMount:c,menuVariant:f,...d},p)=>{const m=D(void 0,"nav-item");return v.jsxs(Fe,{ref:p,...d,className:I(a,m),children:[v.jsx(Fe.Toggle,{id:e,eventKey:null,active:l,disabled:s,childBsPrefix:r,as:Er,children:t}),v.jsx(Fe.Menu,{role:o,renderOnMount:c,rootCloseEvent:i,variant:f,children:n})]})});fo.displayName="NavDropdown";const Z=Object.assign(fo,{Item:Fe.Item,ItemText:Fe.ItemText,Divider:Fe.Divider,Header:Fe.Header}),uo=u.forwardRef(({bsPrefix:e,className:t,as:n,...r},a)=>{e=D(e,"navbar-brand");const i=n||(r.href?"a":"span");return v.jsx(i,{...r,ref:a,className:I(t,e)})});uo.displayName="NavbarBrand";function Zf(e){var t=yn(e);return t&&t.defaultView||window}function Jf(e,t){return Zf(e).getComputedStyle(e,t)}var eu=/([A-Z])/g;function tu(e){return e.replace(eu,"-$1").toLowerCase()}var nu=/^ms-/;function Qt(e){return tu(e).replace(nu,"-ms-")}var ru=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function au(e){return!!(e&&ru.test(e))}function ye(e,t){var n="",r="";if(typeof t=="string")return e.style.getPropertyValue(Qt(t))||Jf(e).getPropertyValue(Qt(t));Object.keys(t).forEach(function(a){var i=t[a];!i&&i!==0?e.style.removeProperty(Qt(a)):au(a)?r+=a+"("+i+") ":n+=Qt(a)+": "+i+";"}),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n}const _a={disabled:!1},po=q.createContext(null);var iu=function(t){return t.scrollTop},bt="unmounted",Se="exited",ce="entering",be="entered",Pt="exiting",Ce=function(e){_l(t,e);function t(r,a){var i;i=e.call(this,r,a)||this;var o=a,s=o&&!o.isMounting?r.enter:r.appear,l;return i.appearStatus=null,r.in?s?(l=Se,i.appearStatus=ce):l=be:r.unmountOnExit||r.mountOnEnter?l=bt:l=Se,i.state={status:l},i.nextCallback=null,i}t.getDerivedStateFromProps=function(a,i){var o=a.in;return o&&i.status===bt?{status:Se}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(a){var i=null;if(a!==this.props){var o=this.state.status;this.props.in?o!==ce&&o!==be&&(i=ce):(o===ce||o===be)&&(i=Pt)}this.updateStatus(!1,i)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var a=this.props.timeout,i,o,s;return i=o=s=a,a!=null&&typeof a!="number"&&(i=a.exit,o=a.enter,s=a.appear!==void 0?a.appear:o),{exit:i,enter:o,appear:s}},n.updateStatus=function(a,i){if(a===void 0&&(a=!1),i!==null)if(this.cancelNextCallback(),i===ce){if(this.props.unmountOnExit||this.props.mountOnEnter){var o=this.props.nodeRef?this.props.nodeRef.current:Ze.findDOMNode(this);o&&iu(o)}this.performEnter(a)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Se&&this.setState({status:bt})},n.performEnter=function(a){var i=this,o=this.props.enter,s=this.context?this.context.isMounting:a,l=this.props.nodeRef?[s]:[Ze.findDOMNode(this),s],c=l[0],f=l[1],d=this.getTimeouts(),p=s?d.appear:d.enter;if(!a&&!o||_a.disabled){this.safeSetState({status:be},function(){i.props.onEntered(c)});return}this.props.onEnter(c,f),this.safeSetState({status:ce},function(){i.props.onEntering(c,f),i.onTransitionEnd(p,function(){i.safeSetState({status:be},function(){i.props.onEntered(c,f)})})})},n.performExit=function(){var a=this,i=this.props.exit,o=this.getTimeouts(),s=this.props.nodeRef?void 0:Ze.findDOMNode(this);if(!i||_a.disabled){this.safeSetState({status:Se},function(){a.props.onExited(s)});return}this.props.onExit(s),this.safeSetState({status:Pt},function(){a.props.onExiting(s),a.onTransitionEnd(o.exit,function(){a.safeSetState({status:Se},function(){a.props.onExited(s)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(a,i){i=this.setNextCallback(i),this.setState(a,i)},n.setNextCallback=function(a){var i=this,o=!0;return this.nextCallback=function(s){o&&(o=!1,i.nextCallback=null,a(s))},this.nextCallback.cancel=function(){o=!1},this.nextCallback},n.onTransitionEnd=function(a,i){this.setNextCallback(i);var o=this.props.nodeRef?this.props.nodeRef.current:Ze.findDOMNode(this),s=a==null&&!this.props.addEndListener;if(!o||s){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[o,this.nextCallback],c=l[0],f=l[1];this.props.addEndListener(c,f)}a!=null&&setTimeout(this.nextCallback,a)},n.render=function(){var a=this.state.status;if(a===bt)return null;var i=this.props,o=i.children;i.in,i.mountOnEnter,i.unmountOnExit,i.appear,i.enter,i.exit,i.timeout,i.addEndListener,i.onEnter,i.onEntering,i.onEntered,i.onExit,i.onExiting,i.onExited,i.nodeRef;var s=Oi(i,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return q.createElement(po.Provider,{value:null},typeof o=="function"?o(a,s):q.cloneElement(q.Children.only(o),s))},t}(q.Component);Ce.contextType=po;Ce.propTypes={};function qe(){}Ce.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:qe,onEntering:qe,onEntered:qe,onExit:qe,onExiting:qe,onExited:qe};Ce.UNMOUNTED=bt;Ce.EXITED=Se;Ce.ENTERING=ce;Ce.ENTERED=be;Ce.EXITING=Pt;function ou(e,t,n,r){if(r===void 0&&(r=!0),e){var a=document.createEvent("HTMLEvents");a.initEvent(t,n,r),e.dispatchEvent(a)}}function su(e){var t=ye(e,"transitionDuration")||"",n=t.indexOf("ms")===-1?1e3:1;return parseFloat(t)*n}function lu(e,t,n){n===void 0&&(n=5);var r=!1,a=setTimeout(function(){r||ou(e,"transitionend",!0)},t+n),i=Ne(e,"transitionend",function(){r=!0},{once:!0});return function(){clearTimeout(a),i()}}function cu(e,t,n,r){n==null&&(n=su(e)||0);var a=lu(e,n,r),i=Ne(e,"transitionend",t);return function(){a(),i()}}function Fa(e,t){const n=ye(e,t)||"",r=n.indexOf("ms")===-1?1e3:1;return parseFloat(n)*r}function $r(e,t){const n=Fa(e,"transitionDuration"),r=Fa(e,"transitionDelay"),a=cu(e,i=>{i.target===e&&(a(),t(i))},n+r)}function mt(...e){return e.filter(t=>t!=null).reduce((t,n)=>{if(typeof n!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return t===null?n:function(...a){t.apply(this,a),n.apply(this,a)}},null)}function mo(e){e.offsetHeight}function fu(e){return e&&"setState"in e?Ze.findDOMNode(e):e??null}const Ir=q.forwardRef(({onEnter:e,onEntering:t,onEntered:n,onExit:r,onExiting:a,onExited:i,addEndListener:o,children:s,childRef:l,...c},f)=>{const d=u.useRef(null),p=Ye(d,l),m=E=>{p(fu(E))},h=E=>A=>{E&&d.current&&E(d.current,A)},b=u.useCallback(h(e),[e]),g=u.useCallback(h(t),[t]),O=u.useCallback(h(n),[n]),w=u.useCallback(h(r),[r]),y=u.useCallback(h(a),[a]),x=u.useCallback(h(i),[i]),k=u.useCallback(h(o),[o]);return v.jsx(Ce,{ref:f,...c,onEnter:b,onEntered:O,onEntering:g,onExit:w,onExited:x,onExiting:y,addEndListener:k,nodeRef:d,children:typeof s=="function"?(E,A)=>s(E,{...A,ref:m}):q.cloneElement(s,{ref:m})})}),uu={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function du(e,t){const n=`offset${e[0].toUpperCase()}${e.slice(1)}`,r=t[n],a=uu[e];return r+parseInt(ye(t,a[0]),10)+parseInt(ye(t,a[1]),10)}const pu={[Se]:"collapse",[Pt]:"collapsing",[ce]:"collapsing",[be]:"collapse show"},mu=q.forwardRef(({onEnter:e,onEntering:t,onEntered:n,onExit:r,onExiting:a,className:i,children:o,dimension:s="height",in:l=!1,timeout:c=300,mountOnEnter:f=!1,unmountOnExit:d=!1,appear:p=!1,getDimensionValue:m=du,...h},b)=>{const g=typeof s=="function"?s():s,O=u.useMemo(()=>mt(E=>{E.style[g]="0"},e),[g,e]),w=u.useMemo(()=>mt(E=>{const A=`scroll${g[0].toUpperCase()}${g.slice(1)}`;E.style[g]=`${E[A]}px`},t),[g,t]),y=u.useMemo(()=>mt(E=>{E.style[g]=null},n),[g,n]),x=u.useMemo(()=>mt(E=>{E.style[g]=`${m(g,E)}px`,mo(E)},r),[r,m,g]),k=u.useMemo(()=>mt(E=>{E.style[g]=null},a),[g,a]);return v.jsx(Ir,{ref:b,addEndListener:$r,...h,"aria-expanded":h.role?l:null,onEnter:O,onEntering:w,onEntered:y,onExit:x,onExiting:k,childRef:o.ref,in:l,timeout:c,mountOnEnter:f,unmountOnExit:d,appear:p,children:(E,A)=>q.cloneElement(o,{...A,className:I(i,o.props.className,pu[E],g==="width"&&"collapse-horizontal")})})}),vo=u.forwardRef(({children:e,bsPrefix:t,...n},r)=>{t=D(t,"navbar-collapse");const a=u.useContext($e);return v.jsx(mu,{in:!!(a&&a.expanded),...n,children:v.jsx("div",{ref:r,className:t,children:e})})});vo.displayName="NavbarCollapse";const ho=u.forwardRef(({bsPrefix:e,className:t,children:n,label:r="Toggle navigation",as:a="button",onClick:i,...o},s)=>{e=D(e,"navbar-toggler");const{onToggle:l,expanded:c}=u.useContext($e)||{},f=V(d=>{i&&i(d),l&&l()});return a==="button"&&(o.type="button"),v.jsx(a,{...o,ref:s,onClick:f,"aria-label":r,className:I(t,e,!c&&"collapsed"),children:n||v.jsx("span",{className:`${e}-icon`})})});ho.displayName="NavbarToggle";const nr=new WeakMap,Ba=(e,t)=>{if(!e||!t)return;const n=nr.get(t)||new Map;nr.set(t,n);let r=n.get(e);return r||(r=t.matchMedia(e),r.refCount=0,n.set(r.media,r)),r};function vu(e,t=typeof window>"u"?void 0:window){const n=Ba(e,t),[r,a]=u.useState(()=>n?n.matches:!1);return sn(()=>{let i=Ba(e,t);if(!i)return a(!1);let o=nr.get(t);const s=()=>{a(i.matches)};return i.refCount++,i.addListener(s),s(),()=>{i.removeListener(s),i.refCount--,i.refCount<=0&&(o==null||o.delete(i.media)),i=void 0}},[e]),r}function hu(e){const t=Object.keys(e);function n(s,l){return s===l?l:s?`${s} and ${l}`:l}function r(s){return t[Math.min(t.indexOf(s)+1,t.length-1)]}function a(s){const l=r(s);let c=e[l];return typeof c=="number"?c=`${c-.2}px`:c=`calc(${c} - 0.2px)`,`(max-width: ${c})`}function i(s){let l=e[s];return typeof l=="number"&&(l=`${l}px`),`(min-width: ${l})`}function o(s,l,c){let f;typeof s=="object"?(f=s,c=l,l=!0):(l=l||!0,f={[s]:l});let d=u.useMemo(()=>Object.entries(f).reduce((p,[m,h])=>((h==="up"||h===!0)&&(p=n(p,i(m))),(h==="down"||h===!0)&&(p=n(p,a(m))),p),""),[JSON.stringify(f)]);return vu(d,c)}return o}const gu=hu({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400});function Rn(e){e===void 0&&(e=yn());try{var t=e.activeElement;return!t||!t.nodeName?null:t}catch{return e.body}}function bu(e){const t=u.useRef(e);return t.current=e,t}function yu(e){const t=bu(e);u.useEffect(()=>()=>t.current(),[])}function xu(e=document){const t=e.defaultView;return Math.abs(t.innerWidth-e.documentElement.clientWidth)}const Wa=ct("modal-open");class Mr{constructor({ownerDocument:t,handleContainerOverflow:n=!0,isRTL:r=!1}={}){this.handleContainerOverflow=n,this.isRTL=r,this.modals=[],this.ownerDocument=t}getScrollbarWidth(){return xu(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(t){}removeModalAttributes(t){}setContainerStyle(t){const n={overflow:"hidden"},r=this.isRTL?"paddingLeft":"paddingRight",a=this.getElement();t.style={overflow:a.style.overflow,[r]:a.style[r]},t.scrollBarWidth&&(n[r]=`${parseInt(ye(a,r)||"0",10)+t.scrollBarWidth}px`),a.setAttribute(Wa,""),ye(a,n)}reset(){[...this.modals].forEach(t=>this.remove(t))}removeContainerStyle(t){const n=this.getElement();n.removeAttribute(Wa),Object.assign(n.style,t.style)}add(t){let n=this.modals.indexOf(t);return n!==-1||(n=this.modals.length,this.modals.push(t),this.setModalAttributes(t),n!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),n}remove(t){const n=this.modals.indexOf(t);n!==-1&&(this.modals.splice(n,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(t))}isTopModal(t){return!!this.modals.length&&this.modals[this.modals.length-1]===t}}const Pn=(e,t)=>hn?e==null?(t||yn()).body:(typeof e=="function"&&(e=e()),e&&"current"in e&&(e=e.current),e&&("nodeType"in e||e.getBoundingClientRect)?e:null):null;function wu(e,t){const n=xn(),[r,a]=u.useState(()=>Pn(e,n==null?void 0:n.document));if(!r){const i=Pn(e);i&&a(i)}return u.useEffect(()=>{},[t,r]),u.useEffect(()=>{const i=Pn(e);i!==r&&a(i)},[e,r]),r}function ku({children:e,in:t,onExited:n,mountOnEnter:r,unmountOnExit:a}){const i=u.useRef(null),o=u.useRef(t),s=V(n);u.useEffect(()=>{t?o.current=!0:s(i.current)},[t,s]);const l=Ye(i,e.ref),c=u.cloneElement(e,{ref:l});return t?c:a||!o.current&&r?null:c}function Eu(e){return e.code==="Escape"||e.keyCode===27}function Ou(){const e=u.version.split(".");return{major:+e[0],minor:+e[1],patch:+e[2]}}const Cu=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function Au(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Su(e){let{onEnter:t,onEntering:n,onEntered:r,onExit:a,onExiting:i,onExited:o,addEndListener:s,children:l}=e,c=Au(e,Cu);const{major:f}=Ou(),d=f>=19?l.props.ref:l.ref,p=u.useRef(null),m=Ye(p,typeof l=="function"?null:d),h=E=>A=>{E&&p.current&&E(p.current,A)},b=u.useCallback(h(t),[t]),g=u.useCallback(h(n),[n]),O=u.useCallback(h(r),[r]),w=u.useCallback(h(a),[a]),y=u.useCallback(h(i),[i]),x=u.useCallback(h(o),[o]),k=u.useCallback(h(s),[s]);return Object.assign({},c,{nodeRef:p},t&&{onEnter:b},n&&{onEntering:g},r&&{onEntered:O},a&&{onExit:w},i&&{onExiting:y},o&&{onExited:x},s&&{addEndListener:k},{children:typeof l=="function"?(E,A)=>l(E,Object.assign({},A,{ref:m})):u.cloneElement(l,{ref:m})})}const Nu=["component"];function Tu(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}const ju=u.forwardRef((e,t)=>{let{component:n}=e,r=Tu(e,Nu);const a=Su(r);return v.jsx(n,Object.assign({ref:t},a))});function Ru({in:e,onTransition:t}){const n=u.useRef(null),r=u.useRef(!0),a=V(t);return sn(()=>{if(!n.current)return;let i=!1;return a({in:e,element:n.current,initial:r.current,isStale:()=>i}),()=>{i=!0}},[e,a]),sn(()=>(r.current=!1,()=>{r.current=!0}),[]),n}function Pu({children:e,in:t,onExited:n,onEntered:r,transition:a}){const[i,o]=u.useState(!t);t&&i&&o(!1);const s=Ru({in:!!t,onTransition:c=>{const f=()=>{c.isStale()||(c.in?r==null||r(c.element,c.initial):(o(!0),n==null||n(c.element)))};Promise.resolve(a(c)).then(f,d=>{throw c.in||o(!0),d})}}),l=Ye(s,e.ref);return i&&!t?null:u.cloneElement(e,{ref:l})}function za(e,t,n){return e?v.jsx(ju,Object.assign({},n,{component:e})):t?v.jsx(Pu,Object.assign({},n,{transition:t})):v.jsx(ku,Object.assign({},n))}const $u=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function Iu(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}let $n;function Mu(e){return $n||($n=new Mr({ownerDocument:e==null?void 0:e.document})),$n}function Du(e){const t=xn(),n=e||Mu(t),r=u.useRef({dialog:null,backdrop:null});return Object.assign(r.current,{add:()=>n.add(r.current),remove:()=>n.remove(r.current),isTopModal:()=>n.isTopModal(r.current),setDialogRef:u.useCallback(a=>{r.current.dialog=a},[]),setBackdropRef:u.useCallback(a=>{r.current.backdrop=a},[])})}const go=u.forwardRef((e,t)=>{let{show:n=!1,role:r="dialog",className:a,style:i,children:o,backdrop:s=!0,keyboard:l=!0,onBackdropClick:c,onEscapeKeyDown:f,transition:d,runTransition:p,backdropTransition:m,runBackdropTransition:h,autoFocus:b=!0,enforceFocus:g=!0,restoreFocus:O=!0,restoreFocusOptions:w,renderDialog:y,renderBackdrop:x=H=>v.jsx("div",Object.assign({},H)),manager:k,container:E,onShow:A,onHide:N=()=>{},onExit:j,onExited:M,onExiting:T,onEnter:P,onEntering:$,onEntered:W}=e,K=Iu(e,$u);const L=xn(),Y=wu(E),_=Du(k),Q=Pi(),X=$i(n),[re,ue]=u.useState(!n),se=u.useRef(null);u.useImperativeHandle(t,()=>_,[_]),hn&&!X&&n&&(se.current=Rn(L==null?void 0:L.document)),n&&re&&ue(!1);const ae=V(()=>{if(_.add(),ft.current=Ne(document,"keydown",he),Me.current=Ne(document,"focus",()=>setTimeout(le),!0),A&&A(),b){var H,dt;const Ge=Rn((H=(dt=_.dialog)==null?void 0:dt.ownerDocument)!=null?H:L==null?void 0:L.document);_.dialog&&Ge&&!cn(_.dialog,Ge)&&(se.current=Ge,_.dialog.focus())}}),z=V(()=>{if(_.remove(),ft.current==null||ft.current(),Me.current==null||Me.current(),O){var H;(H=se.current)==null||H.focus==null||H.focus(w),se.current=null}});u.useEffect(()=>{!n||!Y||ae()},[n,Y,ae]),u.useEffect(()=>{re&&z()},[re,z]),yu(()=>{z()});const le=V(()=>{if(!g||!Q()||!_.isTopModal())return;const H=Rn(L==null?void 0:L.document);_.dialog&&H&&!cn(_.dialog,H)&&_.dialog.focus()}),Ke=V(H=>{H.target===H.currentTarget&&(c==null||c(H),s===!0&&N())}),he=V(H=>{l&&Eu(H)&&_.isTopModal()&&(f==null||f(H),H.defaultPrevented||N())}),Me=u.useRef(),ft=u.useRef(),ut=(...H)=>{ue(!0),M==null||M(...H)};if(!Y)return null;const Ft=Object.assign({role:r,ref:_.setDialogRef,"aria-modal":r==="dialog"?!0:void 0},K,{style:i,className:a,tabIndex:-1});let Xe=y?y(Ft):v.jsx("div",Object.assign({},Ft,{children:u.cloneElement(o,{role:"document"})}));Xe=za(d,p,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!n,onExit:j,onExiting:T,onExited:ut,onEnter:P,onEntering:$,onEntered:W,children:Xe});let Ve=null;return s&&(Ve=x({ref:_.setBackdropRef,onClick:Ke}),Ve=za(m,h,{in:!!n,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:Ve})),v.jsx(v.Fragment,{children:Ze.createPortal(v.jsxs(v.Fragment,{children:[Ve,Xe]}),Y)})});go.displayName="Modal";const Lu=Object.assign(go,{Manager:Mr}),_u={[ce]:"show",[be]:"show"},bo=u.forwardRef(({className:e,children:t,transitionClasses:n={},onEnter:r,...a},i)=>{const o={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...a},s=u.useCallback((l,c)=>{mo(l),r==null||r(l,c)},[r]);return v.jsx(Ir,{ref:i,addEndListener:$r,...o,onEnter:s,childRef:t.ref,children:(l,c)=>u.cloneElement(t,{...c,className:I("fade",e,t.props.className,_u[l],n[l])})})});bo.displayName="Fade";const yo=u.forwardRef(({className:e,bsPrefix:t,as:n="div",...r},a)=>(t=D(t,"offcanvas-body"),v.jsx(n,{ref:a,className:I(e,t),...r})));yo.displayName="OffcanvasBody";const Fu={[ce]:"show",[be]:"show"},xo=u.forwardRef(({bsPrefix:e,className:t,children:n,in:r=!1,mountOnEnter:a=!1,unmountOnExit:i=!1,appear:o=!1,...s},l)=>(e=D(e,"offcanvas"),v.jsx(Ir,{ref:l,addEndListener:$r,in:r,mountOnEnter:a,unmountOnExit:i,appear:o,...s,childRef:n.ref,children:(c,f)=>u.cloneElement(n,{...f,className:I(t,n.props.className,(c===ce||c===Pt)&&`${e}-toggling`,Fu[c])})})));xo.displayName="OffcanvasToggling";const wo=u.createContext({onHide(){}}),Bu={"aria-label":R.string,onClick:R.func,variant:R.oneOf(["white"])},Dr=u.forwardRef(({className:e,variant:t,"aria-label":n="Close",...r},a)=>v.jsx("button",{ref:a,type:"button",className:I("btn-close",t&&`btn-close-${t}`,e),"aria-label":n,...r}));Dr.displayName="CloseButton";Dr.propTypes=Bu;const Wu=u.forwardRef(({closeLabel:e="Close",closeVariant:t,closeButton:n=!1,onHide:r,children:a,...i},o)=>{const s=u.useContext(wo),l=V(()=>{s==null||s.onHide(),r==null||r()});return v.jsxs("div",{ref:o,...i,children:[a,n&&v.jsx(Dr,{"aria-label":e,variant:t,onClick:l})]})}),ko=u.forwardRef(({bsPrefix:e,className:t,closeLabel:n="Close",closeButton:r=!1,...a},i)=>(e=D(e,"offcanvas-header"),v.jsx(Wu,{ref:i,...a,className:I(t,e),closeLabel:n,closeButton:r})));ko.displayName="OffcanvasHeader";const Lr=e=>u.forwardRef((t,n)=>v.jsx("div",{...t,ref:n,className:I(t.className,e)})),zu=Lr("h5"),Eo=u.forwardRef(({className:e,bsPrefix:t,as:n=zu,...r},a)=>(t=D(t,"offcanvas-title"),v.jsx(n,{ref:a,className:I(e,t),...r})));Eo.displayName="OffcanvasTitle";function Hu(e,t){return e.classList?e.classList.contains(t):(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")!==-1}function Uu(e,t){e.classList?e.classList.add(t):Hu(e,t)||(typeof e.className=="string"?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}function Ha(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function Yu(e,t){e.classList?e.classList.remove(t):typeof e.className=="string"?e.className=Ha(e.className,t):e.setAttribute("class",Ha(e.className&&e.className.baseVal||"",t))}const Qe={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class Oo extends Mr{adjustAndStore(t,n,r){const a=n.style[t];n.dataset[t]=a,ye(n,{[t]:`${parseFloat(ye(n,t))+r}px`})}restore(t,n){const r=n.dataset[t];r!==void 0&&(delete n.dataset[t],ye(n,{[t]:r}))}setContainerStyle(t){super.setContainerStyle(t);const n=this.getElement();if(Uu(n,"modal-open"),!t.scrollBarWidth)return;const r=this.isRTL?"paddingLeft":"paddingRight",a=this.isRTL?"marginLeft":"marginRight";ge(n,Qe.FIXED_CONTENT).forEach(i=>this.adjustAndStore(r,i,t.scrollBarWidth)),ge(n,Qe.STICKY_CONTENT).forEach(i=>this.adjustAndStore(a,i,-t.scrollBarWidth)),ge(n,Qe.NAVBAR_TOGGLER).forEach(i=>this.adjustAndStore(a,i,t.scrollBarWidth))}removeContainerStyle(t){super.removeContainerStyle(t);const n=this.getElement();Yu(n,"modal-open");const r=this.isRTL?"paddingLeft":"paddingRight",a=this.isRTL?"marginLeft":"marginRight";ge(n,Qe.FIXED_CONTENT).forEach(i=>this.restore(r,i)),ge(n,Qe.STICKY_CONTENT).forEach(i=>this.restore(a,i)),ge(n,Qe.NAVBAR_TOGGLER).forEach(i=>this.restore(a,i))}}let In;function Ku(e){return In||(In=new Oo(e)),In}function Xu(e){return v.jsx(xo,{...e})}function Vu(e){return v.jsx(bo,{...e})}const Co=u.forwardRef(({bsPrefix:e,className:t,children:n,"aria-labelledby":r,placement:a="start",responsive:i,show:o=!1,backdrop:s=!0,keyboard:l=!0,scroll:c=!1,onEscapeKeyDown:f,onShow:d,onHide:p,container:m,autoFocus:h=!0,enforceFocus:b=!0,restoreFocus:g=!0,restoreFocusOptions:O,onEntered:w,onExit:y,onExiting:x,onEnter:k,onEntering:E,onExited:A,backdropClassName:N,manager:j,renderStaticNode:M=!1,...T},P)=>{const $=u.useRef();e=D(e,"offcanvas");const{onToggle:W}=u.useContext($e)||{},[K,L]=u.useState(!1),Y=gu(i||"xs","up");u.useEffect(()=>{L(i?o&&!Y:o)},[o,i,Y]);const _=V(()=>{W==null||W(),p==null||p()}),Q=u.useMemo(()=>({onHide:_}),[_]);function X(){return j||(c?($.current||($.current=new Oo({handleContainerOverflow:!1})),$.current):Ku())}const re=(z,...le)=>{z&&(z.style.visibility="visible"),k==null||k(z,...le)},ue=(z,...le)=>{z&&(z.style.visibility=""),A==null||A(...le)},se=u.useCallback(z=>v.jsx("div",{...z,className:I(`${e}-backdrop`,N)}),[N,e]),ae=z=>v.jsx("div",{...z,...T,className:I(t,i?`${e}-${i}`:e,`${e}-${a}`),"aria-labelledby":r,children:n});return v.jsxs(v.Fragment,{children:[!K&&(i||M)&&ae({}),v.jsx(wo.Provider,{value:Q,children:v.jsx(Lu,{show:K,ref:P,backdrop:s,container:m,keyboard:l,autoFocus:h,enforceFocus:b&&!c,restoreFocus:g,restoreFocusOptions:O,onEscapeKeyDown:f,onShow:d,onHide:_,onEnter:re,onEntering:E,onEntered:w,onExit:y,onExiting:x,onExited:ue,manager:X(),transition:Xu,backdropTransition:Vu,renderBackdrop:se,renderDialog:ae})})]})});Co.displayName="Offcanvas";const Gu=Object.assign(Co,{Body:yo,Header:ko,Title:Eo}),Ao=u.forwardRef((e,t)=>{const n=u.useContext($e);return v.jsx(Gu,{ref:t,show:!!(n!=null&&n.expanded),...e,renderStaticNode:!0})});Ao.displayName="NavbarOffcanvas";const So=u.forwardRef(({className:e,bsPrefix:t,as:n="span",...r},a)=>(t=D(t,"navbar-text"),v.jsx(n,{ref:a,className:I(e,t),...r})));So.displayName="NavbarText";const No=u.forwardRef((e,t)=>{const{bsPrefix:n,expand:r=!0,variant:a="light",bg:i,fixed:o,sticky:s,className:l,as:c="nav",expanded:f,onToggle:d,onSelect:p,collapseOnSelect:m=!1,...h}=br(e,{expanded:"onToggle"}),b=D(n,"navbar"),g=u.useCallback((...y)=>{p==null||p(...y),m&&f&&(d==null||d(!1))},[p,m,f,d]);h.role===void 0&&c!=="nav"&&(h.role="navigation");let O=`${b}-expand`;typeof r=="string"&&(O=`${O}-${r}`);const w=u.useMemo(()=>({onToggle:()=>d==null?void 0:d(!f),bsPrefix:b,expanded:!!f,expand:r}),[b,f,r,d]);return v.jsx($e.Provider,{value:w,children:v.jsx(He.Provider,{value:g,children:v.jsx(c,{ref:t,...h,className:I(l,b,r&&O,a&&`${b}-${a}`,i&&`bg-${i}`,s&&`sticky-${s}`,o&&`fixed-${o}`)})})})});No.displayName="Navbar";const Zt=Object.assign(No,{Brand:uo,Collapse:vo,Offcanvas:Ao,Text:So,Toggle:ho}),qu="ke-logo.jpg";function td(){const[e,t]=u.useState(!0),[n,r]=u.useState(0),a=()=>{const i=window.pageYOffset,o=n>i;r(i),t(o)};return u.useEffect(()=>(window.addEventListener("scroll",a),()=>{window.removeEventListener("scroll",a)}),[n]),v.jsx("nav",{style:{top:e?"0":"-100px",transition:"top 0.1s"},children:v.jsxs(Zt,{expand:"lg",className:"navbar w-100 pl-4 pr-4",children:[v.jsx(Zt.Brand,{href:"/",children:v.jsx("img",{width:"89",height:"50",src:qu})}),v.jsx(Zt.Toggle,{className:"custom-toggler"}),v.jsx(Zt.Collapse,{children:v.jsxs(Sn,{className:"justify-content-start w-100",children:[v.jsx(Sn.Item,{className:"mx-3 border-right border-left nav-white"}),v.jsxs(Z,{className:"nav-dropdown",title:"Places to go",id:"navbarScrollingDropdown",children:[v.jsx(Z.Item,{href:"#action3",children:"Action"}),v.jsx(Z.Item,{href:"#action4",children:"Another action"}),v.jsx(Z.Item,{href:"#action5",children:"Something else here"})]}),v.jsxs(Z,{className:"nav-dropdown",title:"Things to do",id:"navbarScrollingDropdown",children:[v.jsx(Z.Item,{href:"#action3",children:"Action"}),v.jsx(Z.Item,{href:"#action4",children:"Another action"}),v.jsx(Z.Divider,{}),v.jsx(Z.Item,{href:"#action5",children:"Something else here"})]}),v.jsxs(Z,{className:"nav-dropdown",title:"Plan your trip",id:"navbarScrollingDropdown",children:[v.jsx(Z.Item,{href:"#action3",children:"Action"}),v.jsx(Z.Item,{href:"#action4",children:"Another action"}),v.jsx(Z.Divider,{}),v.jsx(Z.Item,{href:"#action5",children:"Something else here"})]}),v.jsx(Sn.Link,{id:"navbarScrollingDropdown",href:"#action1",children:"Wildfire guidance"})]})}),v.jsx("div",{className:"d-flex justify-content-end d-none d-lg-block",children:v.jsxs("form",{action:"",className:"search-bar",children:[v.jsx("input",{type:"search",name:"search",pattern:".*\\S.*",required:!0}),v.jsx("button",{className:"search-btn",type:"submit",children:v.jsx("span",{children:"Search"})})]})})]})})}const _r=u.forwardRef(({className:e,bsPrefix:t,as:n="div",...r},a)=>(t=D(t,"card-body"),v.jsx(n,{ref:a,className:I(e,t),...r})));_r.displayName="CardBody";const To=u.forwardRef(({className:e,bsPrefix:t,as:n="div",...r},a)=>(t=D(t,"card-footer"),v.jsx(n,{ref:a,className:I(e,t),...r})));To.displayName="CardFooter";const jo=u.forwardRef(({bsPrefix:e,className:t,as:n="div",...r},a)=>{const i=D(e,"card-header"),o=u.useMemo(()=>({cardHeaderBsPrefix:i}),[i]);return v.jsx(wr.Provider,{value:o,children:v.jsx(n,{ref:a,...r,className:I(t,i)})})});jo.displayName="CardHeader";const Ro=u.forwardRef(({bsPrefix:e,className:t,variant:n,as:r="img",...a},i)=>{const o=D(e,"card-img");return v.jsx(r,{ref:i,className:I(n?`${o}-${n}`:o,t),...a})});Ro.displayName="CardImg";const Po=u.forwardRef(({className:e,bsPrefix:t,as:n="div",...r},a)=>(t=D(t,"card-img-overlay"),v.jsx(n,{ref:a,className:I(e,t),...r})));Po.displayName="CardImgOverlay";const $o=u.forwardRef(({className:e,bsPrefix:t,as:n="a",...r},a)=>(t=D(t,"card-link"),v.jsx(n,{ref:a,className:I(e,t),...r})));$o.displayName="CardLink";const Qu=Lr("h6"),Io=u.forwardRef(({className:e,bsPrefix:t,as:n=Qu,...r},a)=>(t=D(t,"card-subtitle"),v.jsx(n,{ref:a,className:I(e,t),...r})));Io.displayName="CardSubtitle";const Mo=u.forwardRef(({className:e,bsPrefix:t,as:n="p",...r},a)=>(t=D(t,"card-text"),v.jsx(n,{ref:a,className:I(e,t),...r})));Mo.displayName="CardText";const Zu=Lr("h5"),Do=u.forwardRef(({className:e,bsPrefix:t,as:n=Zu,...r},a)=>(t=D(t,"card-title"),v.jsx(n,{ref:a,className:I(e,t),...r})));Do.displayName="CardTitle";const Lo=u.forwardRef(({bsPrefix:e,className:t,bg:n,text:r,border:a,body:i=!1,children:o,as:s="div",...l},c)=>{const f=D(e,"card");return v.jsx(s,{ref:c,...l,className:I(t,f,n&&`bg-${n}`,r&&`text-${r}`,a&&`border-${a}`),children:i?v.jsx(_r,{children:o}):o})});Lo.displayName="Card";const vt=Object.assign(Lo,{Img:Ro,Title:Do,Subtitle:Io,Body:_r,Link:$o,Text:Mo,Header:jo,Footer:To,ImgOverlay:Po});function nd({title:e,desc:t,icon:n=v.jsx(gr,{icon:Ll}),articles:r}){return v.jsxs("div",{className:"pt-4 pl-10",children:[v.jsxs("div",{className:"col-xl-12 pl-color-10 d-flex justify-content-between align-items-center pb-4",children:[v.jsx("h1",{className:"display-3 font-weight-bold text-center text-sm-left",children:e}),v.jsx("div",{className:"d-flex align-items-center",children:v.jsxs("p",{className:"mb-0 font-weight-bold fs-5 d-none d-sm-block",children:[t,"  ",n]})})]}),v.jsx(Ju,{articles:r})]})}function Ju({articles:e}){return v.jsx("div",{className:"row",children:e.map((t,n)=>v.jsx("div",{className:"col-lg-4 col-md-4 pb-4 pb-lg-0",children:v.jsxs(vt,{className:"h-100 shadow-sm bg-white card-hover",children:[v.jsx(vt.Img,{src:t.image}),v.jsxs(vt.Body,{className:"d-flex flex-column",children:[v.jsx("div",{className:"d-flex mb-2 justify-content-between",children:v.jsx(vt.Title,{className:"mb-0 font-weight-bold",children:t.title})}),v.jsx(vt.Text,{className:"text-secondary",children:t.desc})]})]})},n))})}export{kr as A,gr as F,td as N,R as P,Ir as T,qn as _,_l as a,Gn as b,yu as c,D as d,I as e,br as f,lc as g,ql as h,V as i,$r as j,nd as k,Ll as l,mo as t,Pi as u};

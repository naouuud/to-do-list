(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(81),a=n.n(r),i=n(645),o=n.n(i)()(a());o.push([e.id,"* {\n    background-color: white;\n}\n\nbody {\n    margin: 0;\n}\n\n.homepage {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: auto auto;\n    justify-items: center;\n}\n\n.header {\n    font-size: 32px;\n    width: auto;\n    text-align: left;\n    padding: 10px 0;\n    margin-right: calc(785px - 190px);\n    position: fixed;\n    top: 0;\n}\n\n.projects {\n    padding: 150px 0;\n    display: grid;\n    gap: 25px;\n    grid-template-columns: 700px;\n    grid-auto-flow: row;\n    justify-items: center;\n}\n\n.homepage .project {\n    border: 2px solid black;\n    border-radius: 5px;\n    grid-area: span 1 / span 1;\n    width: 100%;\n    height: auto;\n    padding: 15px;\n    box-sizing: border-box;\n    font-size: 20px;\n}\n\n.project-header {\n    display: flex;\n    justify-content: space-between;\n}\n\n.project-header div img {\n    width: 20px;\n    padding-top: 2px;\n}\n\n.project-body {\n    padding: 25px 0 0 10px;\n}\n\n.project-body .item-list li {\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 10px;\n}\n\n.flex-left {\n    display: grid;\n    grid-template-columns: auto auto;\n    align-items: center;\n    gap: 15px;\n}\n\n.flex-right {\n    display: grid;\n    grid-template-columns: auto auto auto auto;\n    align-items: center;\n    gap: 12px;\n}\n\n.flex-left:hover, .flex-right:hover {\n    cursor: pointer;\n}\n\n.flex-right span {\n    margin: 0 5px;\n    width: 60px;\n    text-align: center;\n    font-size: 0.9em;\n    border: 1px solid black;\n    border-radius: 5px;\n}\n\n.project-body .item-list li img {\n    width: 20px;\n}\n\n.project-body .item-list li span:last-child {\n    justify-self: end;\n}\n\n.project .project-header {\n    font-weight: 600;\n}\n\n.project .project-body .item-list {\n    list-style: none;\n    padding: 0;\n    margin-top: 0;\n    font-size: .95em;\n}\n\n.item-list .new-item {\n    color: rgb(100, 100, 100);\n    margin-top: 20px;\n}\n\n.item-list .new-item:only-child {\n    margin-top: 0;\n}\n\n.homepage .project#new-project {\n    color: rgb(100, 100, 100);\n    border: 2px dashed black;\n    height: auto;\n}\n\n.item-edit {\n    display: grid;\n    justify-content: center;\n    padding-top: 180px;\n}\n\n.item-edit-form {\n    border: 2px solid black;\n    box-sizing: border-box;\n    border-radius: 5px;\n    display: grid;\n    grid-template: auto 1fr 1fr 1fr 0.8fr/ 2fr 1fr;\n    grid-auto-flow: column;\n    row-gap: 20px;\n    column-gap: 60px;\n    padding: 30px;\n    padding-top: 25px;\n}\n\n.item-edit-form label {\n    color: black;\n    padding-bottom: 5px;\n}\n\n.label-input-pair {\n    display: grid;\n    grid-template-rows: auto 1fr;\n}\n\n.description {\n    grid-row: 3 / 6;\n}\n\n.item-cancel {\n    grid-column: 1 / 3;\n    display: flex;\n    justify-content: end;\n    margin-top: -25px;\n    margin-bottom: -15px;\n    margin-right: -20px;\n}\n\n.item-cancel img {\n    width: 20px;\n    padding-top: 2px;\n}\n\n.due input {\n    height: auto;\n    border-style: none;\n}\n\n.label-input-pair input,\n.label-input-pair textarea,\n.label-input-pair select,\n.submit button {\n    border-style: none;\n    padding: 4px 10px;\n    border: 1px solid black;\n    border-radius: 2px;\n    font-family: serif;\n    font-size: 16px;\n    resize: none;\n}\n\n.submit button {\n    width: 100%;\n    height: 70%;\n    box-shadow: black 1px 1px;\n    margin-top: 13px;\n}\n\n.submit button:active {\n    box-shadow: none;\n}\n\n.priority input {\n    border: none;\n}\n\n.slider-label {\n    display: flex;\n    justify-content: space-between;\n    padding: 0 20px;\n}\n\n.slider-label img {\n    width: 20px;\n}\n\n.label-input-pair input:focus-visible,\n.label-input-pair textarea:focus-visible,\n.label-input-pair select:focus-visible {\n    outline: -webkit-focus-ring-color auto 1px;\n}",""]);const u=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var u=0;u<this.length;u++){var s=this[u][0];null!=s&&(o[s]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);r&&o[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},o=[],u=0;u<e.length;u++){var s=e[u],c=r.base?s[0]+r.base:s[0],l=i[c]||0,d="".concat(c," ").concat(l);i[c]=l+1;var p=n(d),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=a(m,r);r.byIndex=u,t.splice(u,0,{identifier:d,updater:f,references:1})}o.push(d)}return o}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var i=r(e=e||[],a=a||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var u=n(i[o]);t[u].references--}for(var s=r(e,a),c=0;c<i.length;c++){var l=n(i[c]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),a=n.n(r),i=n(569),o=n.n(i),u=n(565),s=n.n(u),c=n(216),l=n.n(c),d=n(589),p=n.n(d),m=n(426),f={};f.styleTagTransform=p(),f.setAttributes=s(),f.insert=o().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=l(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=[],g=[];function v(e){const t={title:e.title,description:e.description,due:e.due,priority:e.priority,project:e.project,complete:!1};h.push(t)}function y(e){const t=document.createElement(e.type);for(const n in e)"class"==n||"className"==n?t.className=e[n]:"id"==n?t.id=e[n]:"text"==n||"textContent"==n?t.textContent=e[n]:"type"!=n&&"parent"!=n&&t.setAttribute(`${n}`,e[n]);return e.parent&&("string"==typeof e.parent?document.querySelector(e.parent).appendChild(t):e.parent.appendChild(t)),t}function b(e){if(null!=e){const t={name:e};if(g.some((e=>e.name==t.name)))return void alert("Project already exists. Please pick a new name.");g.push(t)}}function w(){const e=document.querySelector(".title input"),t=document.querySelector(".description textarea"),n=document.querySelector(".project-edit select"),r=document.querySelector(".priority input"),a=document.querySelector(".due input");return{title:e.value,description:t.value,project:n.value,priority:r.value,due:a.value}}function x(e){const t=document.querySelector(".homepage");t.innerHTML="",y({type:"div",class:"header",text:"My To Do List",parent:t});const n=y({type:"div",class:"item-edit",parent:t}),r=y({type:"form",className:"item-edit-form",parent:n}),a=y({type:"div",className:"label-input-pair title",parent:r});y({type:"label",textContent:"Title",for:"title",parent:a});const i=y({type:"input",id:"title",placeholder:"Choose a title",maxlength:"50",parent:a});i.setAttribute("type","text");const o=y({type:"div",className:"label-input-pair description",parent:r});y({type:"label",for:"description",text:"Description",parent:o});const u=y({type:"textarea",id:"description",placeholder:"Add a description",maxlength:"300",parent:o}),s=y({type:"div",class:"item-cancel",parent:r});y({type:"img",src:"./../src/images/close-circle-outline.svg",alt:"Close icon",parent:s}).addEventListener("click",We);const c=y({type:"div",class:"label-input-pair priority",parent:r});y({type:"label",text:"Priority",for:"priority",parent:c});const l=y({type:"div",class:"priority-bundle",parent:c}),d=y({type:"input",min:"1",max:"3",value:"2",class:"slider",id:"priority",parent:l});d.setAttribute("type","range");const p=y({type:"div",class:"slider-label",parent:l});y({type:"img",src:"./../src/images/sunny.png",alt:"Number one",parent:p}),y({type:"img",src:"./../src/images/rainy.png",alt:"Number two",parent:p}),y({type:"img",src:"./../src/images/flames.png",alt:"Number three",parent:p});const m=y({type:"div",class:"label-input-pair due",parent:r});y({type:"label",for:"due-date",text:"Due date",parent:m});const f=y({type:"input",id:"due-date",parent:m});f.setAttribute("type","date");const h=y({type:"div",class:"label-input-pair project-edit",parent:r});y({type:"label",text:"Project",for:"project",parent:h});const v=y({type:"select",name:"project",id:"project",parent:h});document.querySelector("select#project").innerHTML="",g.forEach((e=>{y({type:"option",text:e.name,value:e.name,parent:"select#project"})})),e&&(v.value=e.id);const b=y({type:"div",class:"submit",parent:r}),w=y({type:"button",text:"Submit",parent:b});return w.setAttribute("type","submit"),w.addEventListener("click",T),{titleInput:i,descriptionInput:u,prioritySlider:d,dueCalendar:f,projectName:v,submitButton:w}}function T(e){e.preventDefault(),createItem(w()),We()}function C(e){const t=x(null),n=h[e];t.titleInput.value=n.title,t.descriptionInput.value=n.description,t.prioritySlider.value=n.priority,t.dueCalendar.value=n.due,t.projectName.value=n.project,t.submitButton.removeEventListener("click",T),t.submitButton.addEventListener("click",(t=>{t.preventDefault(),function(e,t){const n={title:t.title,description:t.description,due:t.due,priority:t.priority,complete:t.complete,project:t.project};h.splice(e,1,n)}(e,w()),We()}))}function M(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function S(e){return M(1,arguments),e instanceof Date||"object"===k(e)&&"[object Date]"===Object.prototype.toString.call(e)}function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function D(e){M(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===j(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function P(e){if(M(1,arguments),!S(e)&&"number"!=typeof e)return!1;var t=D(e);return!isNaN(Number(t))}function U(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function E(e,t){M(2,arguments);var n=D(e).getTime(),r=U(t);return new Date(n+r)}function N(e,t){M(2,arguments);var n=U(t);return E(e,-n)}var W=864e5;function O(e){M(1,arguments);var t=1,n=D(e),r=n.getUTCDay(),a=(r<t?7:0)+r-t;return n.setUTCDate(n.getUTCDate()-a),n.setUTCHours(0,0,0,0),n}function q(e){M(1,arguments);var t=D(e),n=t.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=O(r),i=new Date(0);i.setUTCFullYear(n,0,4),i.setUTCHours(0,0,0,0);var o=O(i);return t.getTime()>=a.getTime()?n+1:t.getTime()>=o.getTime()?n:n-1}function Y(e){M(1,arguments);var t=q(e),n=new Date(0);n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0);var r=O(n);return r}var L=6048e5,A={};function H(){return A}function F(e,t){var n,r,a,i,o,u,s,c;M(1,arguments);var l=H(),d=U(null!==(n=null!==(r=null!==(a=null!==(i=null==t?void 0:t.weekStartsOn)&&void 0!==i?i:null==t||null===(o=t.locale)||void 0===o||null===(u=o.options)||void 0===u?void 0:u.weekStartsOn)&&void 0!==a?a:l.weekStartsOn)&&void 0!==r?r:null===(s=l.locale)||void 0===s||null===(c=s.options)||void 0===c?void 0:c.weekStartsOn)&&void 0!==n?n:0);if(!(d>=0&&d<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var p=D(e),m=p.getUTCDay(),f=(m<d?7:0)+m-d;return p.setUTCDate(p.getUTCDate()-f),p.setUTCHours(0,0,0,0),p}function z(e,t){var n,r,a,i,o,u,s,c;M(1,arguments);var l=D(e),d=l.getUTCFullYear(),p=H(),m=U(null!==(n=null!==(r=null!==(a=null!==(i=null==t?void 0:t.firstWeekContainsDate)&&void 0!==i?i:null==t||null===(o=t.locale)||void 0===o||null===(u=o.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==a?a:p.firstWeekContainsDate)&&void 0!==r?r:null===(s=p.locale)||void 0===s||null===(c=s.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==n?n:1);if(!(m>=1&&m<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var f=new Date(0);f.setUTCFullYear(d+1,0,m),f.setUTCHours(0,0,0,0);var h=F(f,t),g=new Date(0);g.setUTCFullYear(d,0,m),g.setUTCHours(0,0,0,0);var v=F(g,t);return l.getTime()>=h.getTime()?d+1:l.getTime()>=v.getTime()?d:d-1}function I(e,t){var n,r,a,i,o,u,s,c;M(1,arguments);var l=H(),d=U(null!==(n=null!==(r=null!==(a=null!==(i=null==t?void 0:t.firstWeekContainsDate)&&void 0!==i?i:null==t||null===(o=t.locale)||void 0===o||null===(u=o.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==a?a:l.firstWeekContainsDate)&&void 0!==r?r:null===(s=l.locale)||void 0===s||null===(c=s.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==n?n:1),p=z(e,t),m=new Date(0);m.setUTCFullYear(p,0,d),m.setUTCHours(0,0,0,0);var f=F(m,t);return f}var R=6048e5;function G(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}const B=function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return G("yy"===t?r%100:r,t.length)},Q=function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):G(n+1,2)},X=function(e,t){return G(e.getUTCDate(),t.length)},$=function(e,t){return G(e.getUTCHours()%12||12,t.length)},J=function(e,t){return G(e.getUTCHours(),t.length)},_=function(e,t){return G(e.getUTCMinutes(),t.length)},Z=function(e,t){return G(e.getUTCSeconds(),t.length)},V=function(e,t){var n=t.length,r=e.getUTCMilliseconds();return G(Math.floor(r*Math.pow(10,n-3)),t.length)};var K={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var r=e.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return B(e,t)},Y:function(e,t,n,r){var a=z(e,r),i=a>0?a:1-a;return"YY"===t?G(i%100,2):"Yo"===t?n.ordinalNumber(i,{unit:"year"}):G(i,t.length)},R:function(e,t){return G(q(e),t.length)},u:function(e,t){return G(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return G(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return G(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return Q(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return G(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){var a=function(e,t){M(1,arguments);var n=D(e),r=F(n,t).getTime()-I(n,t).getTime();return Math.round(r/R)+1}(e,r);return"wo"===t?n.ordinalNumber(a,{unit:"week"}):G(a,t.length)},I:function(e,t,n){var r=function(e){M(1,arguments);var t=D(e),n=O(t).getTime()-Y(t).getTime();return Math.round(n/L)+1}(e);return"Io"===t?n.ordinalNumber(r,{unit:"week"}):G(r,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):X(e,t)},D:function(e,t,n){var r=function(e){M(1,arguments);var t=D(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var r=t.getTime(),a=n-r;return Math.floor(a/W)+1}(e);return"Do"===t?n.ordinalNumber(r,{unit:"dayOfYear"}):G(r,t.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return G(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return G(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),a=0===r?7:r;switch(t){case"i":return String(a);case"ii":return G(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r,a=e.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r,a=e.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return $(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):J(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):G(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):G(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):_(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):Z(e,t)},S:function(e,t){return V(e,t)},X:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();if(0===a)return"Z";switch(t){case"X":return te(a);case"XXXX":case"XX":return ne(a);default:return ne(a,":")}},x:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return te(a);case"xxxx":case"xx":return ne(a);default:return ne(a,":")}},O:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+ee(a,":");default:return"GMT"+ne(a,":")}},z:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+ee(a,":");default:return"GMT"+ne(a,":")}},t:function(e,t,n,r){var a=r._originalDate||e;return G(Math.floor(a.getTime()/1e3),t.length)},T:function(e,t,n,r){return G((r._originalDate||e).getTime(),t.length)}};function ee(e,t){var n=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=t||"";return n+String(a)+o+G(i,2)}function te(e,t){return e%60==0?(e>0?"-":"+")+G(Math.abs(e)/60,2):ne(e,t)}function ne(e,t){var n=t||"",r=e>0?"-":"+",a=Math.abs(e);return r+G(Math.floor(a/60),2)+n+G(a%60,2)}const re=K;var ae=function(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}},ie=function(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}};const oe={p:ie,P:function(e,t){var n,r=e.match(/(P+)(p+)?/)||[],a=r[1],i=r[2];if(!i)return ae(e,t);switch(a){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",ae(a,t)).replace("{{time}}",ie(i,t))}};function ue(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}var se=["D","DD"],ce=["YY","YYYY"];function le(e){return-1!==se.indexOf(e)}function de(e){return-1!==ce.indexOf(e)}function pe(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var me={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function fe(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth,r=e.formats[n]||e.formats[e.defaultWidth];return r}}const he={date:fe({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:fe({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:fe({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};var ge={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function ve(e){return function(t,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&e.formattingValues){var a=e.defaultFormattingWidth||e.defaultWidth,i=null!=n&&n.width?String(n.width):a;r=e.formattingValues[i]||e.formattingValues[a]}else{var o=e.defaultWidth,u=null!=n&&n.width?String(n.width):e.defaultWidth;r=e.values[u]||e.values[o]}return r[e.argumentCallback?e.argumentCallback(t):t]}}const ye={ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:ve({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:ve({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:ve({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:ve({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:ve({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function be(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],i=t.match(a);if(!i)return null;var o,u=i[0],s=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(s)?xe(s,(function(e){return e.test(u)})):we(s,(function(e){return e.test(u)}));o=e.valueCallback?e.valueCallback(c):c,o=n.valueCallback?n.valueCallback(o):o;var l=t.slice(u.length);return{value:o,rest:l}}}function we(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}function xe(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}var Te,Ce={ordinalNumber:(Te={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(Te.matchPattern);if(!n)return null;var r=n[0],a=e.match(Te.parsePattern);if(!a)return null;var i=Te.valueCallback?Te.valueCallback(a[0]):a[0];i=t.valueCallback?t.valueCallback(i):i;var o=e.slice(r.length);return{value:i,rest:o}}),era:be({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:be({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:be({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:be({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:be({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};const Me={code:"en-US",formatDistance:function(e,t,n){var r,a=me[e];return r="string"==typeof a?a:1===t?a.one:a.other.replace("{{count}}",t.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:he,formatRelative:function(e,t,n,r){return ge[e]},localize:ye,match:Ce,options:{weekStartsOn:0,firstWeekContainsDate:1}};var ke=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Se=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,je=/^'([^]*?)'?$/,De=/''/g,Pe=/[a-zA-Z]/;function Ue(e){var t=e.match(je);return t?t[1].replace(De,"'"):e}function Ee(e){e.complete?e.complete=!1:e.complete=!0,Ne(e),function(e){const t=document.querySelector(`.project-body .item-list li[index="${h.indexOf(e)}"] span`);e.complete?t.style.textDecoration="line-through":t.style.textDecoration="none"}(e)}function Ne(e){const t=document.querySelector(`.project-body .item-list li[index="${h.indexOf(e)}"] img`);e.complete?(t.className="checked",t.src="./../src/images/checkbox-outline.svg",t.alt="Marked checkbox"):(t.className="unchecked",t.src="./../src/images/checkbox-blank-outline.svg",t.alt="Unmarked checkbox")}function We(){const e=document.querySelector(".homepage");e.innerHTML="",y({type:"div",class:"header",text:"My To Do List",parent:e}),y({type:"div",class:"projects",parent:e}),g.forEach((e=>{const t=y({type:"div",id:`${e.name}`,className:"project",parent:".projects"});t.setAttribute("index",g.indexOf(e));const n=y({type:"div",className:"project-header",parent:t});y({type:"span",textContent:`${e.name}`,parent:n});const r=y({type:"div",parent:n});r.addEventListener("click",(()=>{!function(e){const t=g[e].name;!function e(){for(let n=0;n<h.length;n++)h[n].project==t&&(h.splice(n,1),e())}(),g.splice(e,1)}(t.getAttribute("index")),We()})),y({type:"img",src:"../src/images/delete-icon.svg",alt:"garbage bin",parent:r});const a=y({type:"div",className:"project-body",parent:t});y({type:"ul",className:"item-list",parent:a})})),y({type:"div",id:"new-project",className:"project",textContent:"+ New Project",parent:".projects"}),g.forEach((e=>{document.querySelector(`#${e.name} .project-body .item-list`).innerHTML=""})),h.forEach((e=>{const t=y({type:"li",parent:`#${e.project} .project-body .item-list`});t.setAttribute("index",h.indexOf(e));const n=y({type:"div",class:"flex-left",parent:t}),r=y({type:"div",class:"flex-right",parent:t});y({type:"img",parent:n}).addEventListener("click",(()=>Ee(e)));let a=e.title.substring(0,35);a.length>=35&&(a+="..."),y({type:"span",textContent:a,parent:n}).addEventListener("click",(()=>Ee(e))),y({type:"img",parent:r}).addEventListener("click",(()=>C(h.indexOf(e)))),function(e){const t=document.querySelector(`.project-body .item-list li[index="${h.indexOf(e)}"] .flex-right img:first-child`);"1"==e.priority?(t.src="./../src/images/sunny.png",t.alt="Sunny icon"):"2"==e.priority?(t.src="./../src/images/rainy.png",t.alt="Rainy icon"):"3"==e.priority&&(t.src="./../src/images/flames.png",t.alt="Flames icon")}(e);const i=function(e,t,n){var r,a,i,o,u,s,c,l,d,p,m,f,h,g,v,y,b,w;M(2,arguments);var x=String(t),T=H(),C=null!==(r=null!==(a=null==n?void 0:n.locale)&&void 0!==a?a:T.locale)&&void 0!==r?r:Me,k=U(null!==(i=null!==(o=null!==(u=null!==(s=null==n?void 0:n.firstWeekContainsDate)&&void 0!==s?s:null==n||null===(c=n.locale)||void 0===c||null===(l=c.options)||void 0===l?void 0:l.firstWeekContainsDate)&&void 0!==u?u:T.firstWeekContainsDate)&&void 0!==o?o:null===(d=T.locale)||void 0===d||null===(p=d.options)||void 0===p?void 0:p.firstWeekContainsDate)&&void 0!==i?i:1);if(!(k>=1&&k<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var S=U(null!==(m=null!==(f=null!==(h=null!==(g=null==n?void 0:n.weekStartsOn)&&void 0!==g?g:null==n||null===(v=n.locale)||void 0===v||null===(y=v.options)||void 0===y?void 0:y.weekStartsOn)&&void 0!==h?h:T.weekStartsOn)&&void 0!==f?f:null===(b=T.locale)||void 0===b||null===(w=b.options)||void 0===w?void 0:w.weekStartsOn)&&void 0!==m?m:0);if(!(S>=0&&S<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!C.localize)throw new RangeError("locale must contain localize property");if(!C.formatLong)throw new RangeError("locale must contain formatLong property");var j=D(e);if(!P(j))throw new RangeError("Invalid time value");var E=N(j,ue(j)),W={firstWeekContainsDate:k,weekStartsOn:S,locale:C,_originalDate:j};return x.match(Se).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,oe[t])(e,C.formatLong):e})).join("").match(ke).map((function(r){if("''"===r)return"'";var a=r[0];if("'"===a)return Ue(r);var i=re[a];if(i)return null!=n&&n.useAdditionalWeekYearTokens||!de(r)||pe(r,t,String(e)),null!=n&&n.useAdditionalDayOfYearTokens||!le(r)||pe(r,t,String(e)),i(E,r,C.localize,W);if(a.match(Pe))throw new RangeError("Format string contains an unescaped latin alphabet character `"+a+"`");return r})).join("")}(new Date(`${e.due}`),"MMM d");y({type:"span",text:i,parent:r}).addEventListener("click",(()=>C(h.indexOf(e)))),y({type:"img",className:"item-edit-icon",parent:r,src:"./../src/images/progress-pencil.svg",alt:"Item edit icon"}).addEventListener("click",(()=>C(h.indexOf(e)))),y({type:"img",className:"item-delete-icon",parent:r,src:"./../src/images/delete-outline.svg",alt:"Item delete icon"}).addEventListener("click",(()=>{var t;t=h.indexOf(e),h.splice(t,1),We()})),Ne(e)})),document.querySelectorAll(".project").forEach((e=>{const t=e.lastElementChild;t&&y({type:"li",className:"new-item",textContent:"+ New Item",parent:t.lastElementChild}).addEventListener("click",(()=>x(e)))})),document.querySelector("div#new-project").addEventListener("click",(()=>{b(prompt("Choose a name for your project:","Untitled")),We()}))}window.createProject=b,window.createItem=v,window.allProjects=g,window.allItems=h,b("Adventure"),b("RPG"),b("Roguelite"),v({title:"TUNIC (Secret Legend)",description:"Explore, be happy",due:"2023-02-28",priority:"2",complete:!1,project:"Adventure"}),v({title:"Ori and the Will of the Wisps",description:"Remember to love",due:"2023-06-30",priority:"1",complete:!1,project:"Adventure"}),v({title:"CrossCode",description:"Help an AI avatar find meaning in life",due:"2023-03-31",priority:"1",complete:!1,project:"RPG"}),v({title:"Dark Souls 3",description:"Fight your worst fears",due:"2023-06-30",priority:"3",complete:!1,project:"RPG"}),v({title:"Dwarf Fortress",description:"Wrap your head around this",due:"2024-02-07",priority:"1",complete:!1,project:"Roguelite"}),v({title:"The Binding of Isaac",description:"Defeat mom",due:"2023-08-31",priority:"2",complete:!1,project:"Roguelite"}),We()})()})();
(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([e.id,"* {\n    background-color: white;\n}\n\nbody {\n    margin: 0;\n}\n\n.header {\n    font-size: 32px;\n    /* border: 1px solid black; */\n    width: 100%;\n    text-align: left;\n    padding: 10px;\n    padding-left: 10%;\n    position: fixed;\n    top: 0;\n}\n\n.projects-flex {\n    padding: 150px 0;\n    /* border: 1px solid blue; */\n    display: flex;\n    justify-content: center;\n}\n\n.projects {\n    /* border: 1px solid magenta; */\n    display: grid;\n    gap: 20px;\n    grid-template-columns: repeat(2, 350px);\n    grid-auto-flow: row;\n    justify-items: center;\n}\n\n.homepage .project {\n    border: 2px solid black;\n    border-radius: 5px;\n    grid-area: span 1 / span 1;\n    width: 100%;\n    height: 450px;\n    padding: 15px;\n    box-sizing: border-box;\n    font-size: 20px;\n}\n\n.project-header {\n    display: flex;\n    justify-content: space-between;\n}\n\n.project-header div img {\n    width: 20px;\n    padding-top: 2px;\n}\n\n.project-body {\n    padding: 25px;\n}\n\n.homepage .project#new-project {\n    color: darkgray;\n    border: 2px dashed black;\n}\n\ndiv.item-edit-container {\n    height: 100vh;\n    width: 100vw;\n    border: 2px solid darkgreen;\n    display: grid;\n    justify-content: center;\n    align-items: center;\n}\n\nform.item-edit-form {\n    width: 40vw;\n    border: 2px solid black;\n    /* box-shadow: 1px 1px 10px black; */\n    border-radius: 5px;\n    display: grid;\n    grid-template: 1fr 1fr 1fr / 1fr 1fr 1fr;\n    grid-auto-flow: column;\n    row-gap: 20px;\n    column-gap: 60px;\n    padding: 40px;\n}\n\n.item-edit-form label {\n    color: black;\n    padding-bottom: 5px;\n}\n\ndiv.label-input-pair {\n    display: grid;\n    grid-template-rows: auto 1fr;\n}\n\ndiv.title,\ndiv.description,\ndiv.project {\n    grid-column: 1 / 3;\n}\n\n.due input {\n    height: auto;\n    border-style: none;\n}\n\n.label-input-pair input,\n.label-input-pair textarea,\n.label-input-pair select,\n.submit button {\n    border-style: none;\n    padding: 4px 10px;\n    border: 1px solid black;\n    border-radius: 2px;\n    font-family: serif;\n    font-size: 16px;\n}\n\n.submit button {\n    width: 100%;\n    height: 65%;\n    margin-top: 22px;\n    box-shadow: black 1px 1px;\n}\n\n.submit button:active {\n    box-shadow: none;\n}\n\n.priority input {\n    padding: 0;\n}\n\n.label-input-pair input:focus-visible,\n.label-input-pair textarea:focus-visible,\n.label-input-pair select:focus-visible {\n    outline: -webkit-focus-ring-color auto 1px;\n}",""]);const c=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(a[d]=!0)}for(var p=0;p<e.length;p++){var s=[].concat(e[p]);r&&a[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),n.push(s))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var d=e[c],p=r.base?d[0]+r.base:d[0],s=i[p]||0,l="".concat(p," ").concat(s);i[p]=s+1;var u=t(l),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var m=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:l,updater:m,references:1})}a.push(l)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=t(i[a]);n[c].references--}for(var d=r(e,o),p=0;p<i.length;p++){var s=t(i[p]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}i=d}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),i=t(569),a=t.n(i),c=t(565),d=t.n(c),p=t(216),s=t.n(p),l=t(589),u=t.n(l),f=t(426),m={};m.styleTagTransform=u(),m.setAttributes=d(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=s(),n()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const v=[],b=[];function h(e){const n={title:e.title,description:e.description,due:e.due,priority:e.priority,complete:e.complete,project:e.project,complete:!1};return v.push(n),n}function x(){const e=prompt("Choose a name for your project:","Untitled");if(null!=e){const n={name:e};b.push(n)}}function g(e){b.splice(e,1)}window.createProject=x,window.deleteProject=g,window.allProjects=b,window.createItem=h,window.allItems=v,document.querySelector("button[type=submit]").addEventListener("click",(e=>{e.preventDefault(),h(function(){const e=document.querySelector(".title input"),n=document.querySelector(".description textarea"),t=document.querySelector(".project select"),r=document.querySelector(".priority input"),o=document.querySelector(".due input");return{title:e.value,description:n.value,project:t.value,priority:r.value,due:o.value}}())})),function e(){document.querySelector(".projects").innerHTML="",b.forEach((n=>{const t=document.createElement("div");t.classList.add("project"),t.setAttribute("index",b.indexOf(n)),document.querySelector(".projects").appendChild(t);const r=document.createElement("div");r.classList.add("project-header"),t.appendChild(r);const o=document.createElement("div");o.classList.add("project-body"),o.textContent="The lazy brown fox jumped over the dog",t.appendChild(o);const i=document.createElement("span");i.textContent=`${n.name}`,r.appendChild(i);const a=document.createElement("div");a.addEventListener("click",(()=>{g(t.getAttribute("index")),e()})),r.appendChild(a);const c=document.createElement("img");c.setAttribute("src","../src/images/delete-icon.svg"),c.setAttribute("alt","garbage icon"),a.appendChild(c)})),function(){const e=document.createElement("div");e.id="new-project",e.classList.add("project"),e.textContent="+ New Project",document.querySelector(".projects").appendChild(e)}(),document.querySelector("div#new-project").addEventListener("click",(()=>{x(),document.querySelector("select#project").innerHTML="",b.forEach((e=>{const n=document.createElement("option");n.value=e.name,n.textContent=e.name,document.querySelector("select#project").appendChild(n)})),e()}))}()})()})();
!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){n(1),["os","arch","version"].map(function(e){var t;t=e,document.getElementById(t).addEventListener("click",function(e){let n=t+"-hide",r=e.target.dataset[t],o="tbody tr:not(."+r+")",l="tbody tr."+r;var s;if(e.srcElement.classList.contains("is-success")){e.srcElement.classList.remove("is-success"),s=document.querySelectorAll(o);for(let e=0;e<s.length;e++)s.item(e).classList.remove(n)}else{for(let n=0;n<this.children.length;n++)this.children.item(n).dataset[t]!==e.srcElement.dataset[t]?this.children.item(n).classList.remove("is-success"):e.srcElement.classList.add("is-success");s=document.querySelectorAll(o);for(let e=0;e<s.length;e++)s.item(e).classList.add(n);s=document.querySelectorAll(l);for(let e=0;e<s.length;e++)s.item(e).classList.remove(n)}})});let r=document.getElementsByClassName("copy");for(let e=0;e<r.length;e++)r.item(e).addEventListener("click",function(e){e.preventDefault();let t=document.createElement("textarea");t.value=this.href,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)})},function(e,t,n){}]);
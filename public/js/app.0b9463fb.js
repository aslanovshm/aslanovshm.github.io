(function(e){function t(t){for(var c,a,i=t[0],l=t[1],u=t[2],f=0,b=[];f<i.length;f++)a=i[f],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&b.push(r[a][0]),r[a]=0;for(c in l)Object.prototype.hasOwnProperty.call(l,c)&&(e[c]=l[c]);d&&d(t);while(b.length)b.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],c=!0,i=1;i<n.length;i++){var l=n[i];0!==r[l]&&(c=!1)}c&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var c={},r={app:0},o=[];function a(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=c,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)a.d(n,c,function(t){return e[t]}.bind(null,c));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0b43":function(e,t,n){},2258:function(e,t,n){"use strict";n("dfcc")},4723:function(e,t,n){"use strict";n("0b43")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("5aea");var c=n("7a23"),r={id:"app"};function o(e,t,n,o,a,i){var l=Object(c["j"])("Editor");return Object(c["f"])(),Object(c["c"])("div",r,[Object(c["e"])(l)])}var a=Object(c["k"])("data-v-e5720136");Object(c["h"])("data-v-e5720136");var i={class:"editor"},l={class:"editor-menu"},u=Object(c["d"])("Скопировать HTML"),d={class:"editor-content",ref:"editor",contenteditable:"true",spellcheck:"false",autofocus:""};Object(c["g"])();var f=a((function(e,t,n,r,o,f){var b=Object(c["j"])("EditorMenu"),s=Object(c["j"])("base-btn");return Object(c["f"])(),Object(c["c"])("div",i,[Object(c["e"])("div",l,[Object(c["e"])(b),Object(c["e"])(s,{onClick:f.copyCode},{default:a((function(){return[u]})),_:1},8,["onClick"])]),Object(c["e"])("div",d,null,512)])})),b=Object(c["k"])("data-v-68390371");Object(c["h"])("data-v-68390371");var s=Object(c["e"])("svg",{width:"22",height:"20",viewBox:"0 0 22 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[Object(c["e"])("path",{d:"M18.6358 19.5824C18.3582 19.86 17.9929 20 17.6299 20C17.2645 20 16.8992 19.86 16.6216 19.5824C16.0664 19.0249 16.0664 18.1257 16.6216 17.5682C19.7604 14.4294 19.7604 9.32384 16.6216 6.18505C13.4852 3.04864 8.37722 3.04864 5.24081 6.18505L4.72598 6.69988H8.12337C8.90866 6.69988 9.54686 7.33808 9.54686 8.12337C9.54686 8.91103 8.90866 9.54686 8.12337 9.54686H1.42349C0.638197 9.54686 0 8.91103 0 8.12337V1.42349C0 0.638197 0.638197 0 1.42349 0C2.20878 0 2.84697 0.638197 2.84697 1.42349V4.55279L3.22657 4.17319C7.47568 -0.0759193 14.3867 -0.0759193 18.6358 4.17319C22.8849 8.4223 22.8849 15.3333 18.6358 19.5824Z",fill:"#639EFF"})],-1),C=Object(c["e"])("svg",{width:"22",height:"20",viewBox:"0 0 22 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[Object(c["e"])("path",{d:"M3.18684 19.5824C3.46442 19.86 3.82978 20 4.19277 20C4.55813 20 4.92349 19.86 5.20107 19.5824C5.75624 19.0249 5.75624 18.1257 5.20107 17.5682C2.06229 14.4294 2.06229 9.32384 5.20107 6.18505C8.33749 3.04864 13.4454 3.04864 16.5819 6.18505L17.0967 6.69988H13.6993C12.914 6.69988 12.2758 7.33808 12.2758 8.12337C12.2758 8.91103 12.914 9.54686 13.6993 9.54686H20.3992C21.1845 9.54686 21.8227 8.91103 21.8227 8.12337V1.42349C21.8227 0.638197 21.1845 0 20.3992 0C19.6139 0 18.9757 0.638197 18.9757 1.42349V4.55279L18.5961 4.17319C14.347 -0.0759193 7.43595 -0.0759193 3.18684 4.17319C-1.06227 8.4223 -1.06227 15.3333 3.18684 19.5824Z",fill:"#639EFF"})],-1),p=Object(c["e"])("svg",{width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[Object(c["e"])("path",{d:"M20 1.5V4.0075C20 4.8375 19.3317 5.5075 18.5037 5.5075C17.6783 5.5075 17.0075 4.8375 17.0075 4.0075V3H11.4963V20H12.8454C13.6733 20 14.3416 20.6725 14.3416 21.5C14.3416 22.3275 13.6733 23 12.8454 23H7.15461C6.32668 23 5.65835 22.3275 5.65835 21.5C5.65835 20.6725 6.32668 20 7.15461 20H8.50374V3H2.99252V4.0075C2.99252 4.8375 2.3217 5.5075 1.49626 5.5075C0.668329 5.5075 0 4.8375 0 4.0075V1.5C0 0.6725 0.668329 0 1.49626 0H18.5037C19.3317 0 20 0.6725 20 1.5Z",fill:"#639EFF"})],-1),v=Object(c["e"])("svg",{width:"26",height:"14",viewBox:"0 0 26 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[Object(c["e"])("path",{d:"M12.4876 1.74158V3.06038C12.4876 3.98719 11.7344 4.74039 10.8076 4.74039C10.004 4.74039 9.33201 4.17479 9.16681 3.42159H8.00481V10.5868C8.84761 10.6792 9.50561 11.3932 9.50561 12.2584C9.50561 13.188 8.75241 13.9384 7.82561 13.9384H4.82401C3.89441 13.9384 3.14401 13.188 3.14401 12.2584C3.14401 11.3932 3.79921 10.6792 4.64481 10.5868V3.42159H3.48001C3.31481 4.17479 2.64281 4.74039 1.83921 4.74039C0.91241 4.74039 0.15921 3.98719 0.15921 3.06038V1.74158C0.15921 0.811985 0.91241 0.0615845 1.83921 0.0615845H10.8076C11.7344 0.0615845 12.4876 0.811985 12.4876 1.74158Z",fill:"#639EFF"}),Object(c["e"])("path",{d:"M25.9192 1.74158V3.06038C25.9192 3.98719 25.1688 4.74039 24.2392 4.74039C23.4356 4.74039 22.7636 4.17479 22.5984 3.42159H21.4364V10.5868C22.2792 10.6792 22.9372 11.3932 22.9372 12.2584C22.9372 13.188 22.184 13.9384 21.2572 13.9384H18.2556C17.326 13.9384 16.5756 13.188 16.5756 12.2584C16.5756 11.3932 17.2308 10.6792 18.0764 10.5868V3.42159H16.9144C16.7492 4.17479 16.0772 4.74039 15.2708 4.74039C14.344 4.74039 13.5908 3.98719 13.5908 3.06038V1.74158C13.5908 0.811985 14.344 0.0615845 15.2708 0.0615845H24.2392C25.1688 0.0615845 25.9192 0.811985 25.9192 1.74158Z",fill:"#639EFF"})],-1),j=Object(c["e"])("svg",{width:"22",height:"20",viewBox:"0 0 22 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[Object(c["e"])("path",{d:"M20.5652 0.0784912H1.43478C0.643261 0.0784912 0 0.721752 0 1.51327V18.4868C0 19.2783 0.643261 19.9215 1.43478 19.9215H20.5652C21.3567 19.9215 22 19.2783 22 18.4868V1.51327C22 0.721752 21.3567 0.0784912 20.5652 0.0784912ZM19.1304 17.052H2.86957V16.3274L5.94956 13.2474L7.38674 14.6822C7.9463 15.2441 8.855 15.2441 9.41457 14.6846L15.0843 9.0148L19.1304 13.0609V17.052ZM19.1304 9.00523L16.0983 5.97067C15.5363 5.4111 14.63 5.4111 14.068 5.97067L8.40065 11.6404L6.96348 10.2033C6.40391 9.64371 5.49522 9.64371 4.93565 10.2033L2.86957 12.2694V2.94806H19.1304V9.00523Z",fill:"#639EFF"})],-1);Object(c["g"])();var h=b((function(e,t,n,r,o,a){var i=Object(c["j"])("base-btn");return Object(c["f"])(),Object(c["c"])(c["a"],null,[Object(c["e"])(i,{class:"btn-icon",onClick:a.undo,"aria-label":"undo"},{default:b((function(){return[s]})),_:1},8,["onClick"]),Object(c["e"])(i,{class:"btn-icon",onClick:a.redo,"aria-label":"redo"},{default:b((function(){return[C]})),_:1},8,["onClick"]),Object(c["e"])(i,{class:"btn-icon",onClick:a.heading,"aria-label":"heading"},{default:b((function(){return[p]})),_:1},8,["onClick"]),Object(c["e"])(i,{class:"btn-icon",onClick:a.paragraph,"aria-label":"paragraph"},{default:b((function(){return[v]})),_:1},8,["onClick"]),Object(c["e"])(i,{class:"btn-icon",onClick:a.image,"aria-label":"image"},{default:b((function(){return[j]})),_:1},8,["onClick"])],64)})),O={methods:{undo:function(){return document.execCommand("undo",!1,null)},redo:function(){return document.execCommand("redo",!1,null)},heading:function(){return document.execCommand("formatBlock",!1,"h1")},paragraph:function(){return document.execCommand("formatBlock",!1,"p")},image:function(){var e=prompt("Enter a URL:","http://");if(null!=e&&""!==e)return document.execCommand("insertImage",!1,e)}}};n("b29b");O.render=h,O.__scopeId="data-v-68390371";var g=O,m={components:{EditorMenu:g},methods:{copyCode:function(){var e=this.$refs.editor.innerHTML;navigator.clipboard.writeText(e)}}};n("4723");m.render=f,m.__scopeId="data-v-e5720136";var w=m,H={name:"App",components:{Editor:w}};n("ec8f");H.render=o;var V=H,x=Object(c["k"])("data-v-75048f7f");Object(c["h"])("data-v-75048f7f");var k={class:"btn"};Object(c["g"])();var y=x((function(e,t,n,r,o,a){return Object(c["f"])(),Object(c["c"])("button",k,[Object(c["i"])(e.$slots,"default")])})),_={};n("2258");_.render=y,_.__scopeId="data-v-75048f7f";var M=_,L=Object(c["b"])(V);L.component("base-btn",M),L.mount("#app")},"5aea":function(e,t,n){},"761c":function(e,t,n){},b29b:function(e,t,n){"use strict";n("761c")},dfcc:function(e,t,n){},ea3b:function(e,t,n){},ec8f:function(e,t,n){"use strict";n("ea3b")}});
//# sourceMappingURL=app.0b9463fb.js.map
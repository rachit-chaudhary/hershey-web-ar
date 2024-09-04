/*! For license information please see main-bundled.js.LICENSE.txt */
(()=>{"use strict";var e={419:(e,t,n)=>{e.exports=n.p+"46e454841fbbf37c4aef.png"},862:(e,t,n)=>{e.exports=n.p+"a725e4806389dfdb51a0.glb"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}n.m=e,n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,(()=>{function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,n){for(var o=0;o<n.length;o++){var r=n[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,a=function(t,n){if("object"!==e(t)||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var r=o.call(t,"string");if("object"!==e(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===e(a)?a:String(a)),r)}var a}var o,r,a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.packtype="hello",this.template="yo",$(".owl-carousel").owlCarousel({center:!0,loop:!1,margin:-70,nav:!0,responsive:{0:{items:1},600:{items:3},1e3:{items:5}}})}var n,o;return n=e,(o=[{key:"untapKisses",value:function(){document.getElementById("hoverhershey").src="/images/kisses.png"}},{key:"changeKissesPack",value:function(){var e=document.getElementById("hoverChange");e.src.match("/images/kisses.png")?(e.src="/images/tapkisses.png",this.packtype="kisses",console.log("module"+this.packtype)):(e.src="/images/kisses.png",this.packtype="")}},{key:"changeHersheyPack",value:function(){var e=document.getElementById("hoverhershey");e.src.match("/images/hershey.png")?(e.src="/images/taphershey.png",console.log("chocolatebar"),this.packtype="chocolatebar",console.log("module"+this.packtype)):(e.src="/images/hershey.png",this.packtype="")}},{key:"changeExoticPack",value:function(){var e=document.getElementById("hoverexotic");e.src.match("/images/exotic.png")?(e.src="/images/tapexotic.png",console.log("exotic"),this.packtype="exotic",console.log("module"+this.packtype)):(e.src="/images/exotic.png",this.packtype="")}},{key:"changeLongDistance",value:function(){var e=document.getElementById("distancewali");e.src.match("/images/distancewali.png")?(e.src="/images/tap-distancewali.png",this.template="long-distance"):(e.src="/images/distancewali.png",this.template=""),console.log(this.template)}},{key:"changeFriendWali",value:function(){var e=document.getElementById("friendwali");e.src.match("/images/friendwali.png")?(e.src="/images/tap-friendwali.png",this.template="friend-wali"):(e.src="/images/friendwali.png",this.template=""),console.log(this.template)}},{key:"changeFamilyWali",value:function(){var e=document.getElementById("familywali");e.src.match("/images/familywali.png")?(e.src="/images/tap-familywali.png",this.template="family-wali"):(e.src="/images/familywali.png",this.template=""),console.log(this.template)}}])&&t(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),e}();function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function c(){c=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,o=Object.defineProperty||function(e,t,n){e[t]=n.value},r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",s=r.asyncIterator||"@@asyncIterator",l=r.toStringTag||"@@toStringTag";function d(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{d({},"")}catch(e){d=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var a=t&&t.prototype instanceof g?t:g,i=Object.create(a.prototype),c=new S(r||[]);return o(i,"_invoke",{value:L(e,n,c)}),i}function m(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var p={};function g(){}function y(){}function h(){}var f={};d(f,a,(function(){return this}));var v=Object.getPrototypeOf,b=v&&v(v(x([])));b&&b!==t&&n.call(b,a)&&(f=b);var w=h.prototype=g.prototype=Object.create(f);function E(e){["next","throw","return"].forEach((function(t){d(e,t,(function(e){return this._invoke(t,e)}))}))}function k(e,t){function r(o,a,c,s){var l=m(e[o],e,a);if("throw"!==l.type){var d=l.arg,u=d.value;return u&&"object"==i(u)&&n.call(u,"__await")?t.resolve(u.__await).then((function(e){r("next",e,c,s)}),(function(e){r("throw",e,c,s)})):t.resolve(u).then((function(e){d.value=e,c(d)}),(function(e){return r("throw",e,c,s)}))}s(l.arg)}var a;o(this,"_invoke",{value:function(e,n){function o(){return new t((function(t,o){r(e,n,t,o)}))}return a=a?a.then(o,o):o()}})}function L(e,t,n){var o="suspendedStart";return function(r,a){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===r)throw a;return{value:void 0,done:!0}}for(n.method=r,n.arg=a;;){var i=n.delegate;if(i){var c=B(i,n);if(c){if(c===p)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===o)throw o="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o="executing";var s=m(e,t,n);if("normal"===s.type){if(o=n.done?"completed":"suspendedYield",s.arg===p)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o="completed",n.method="throw",n.arg=s.arg)}}}function B(e,t){var n=t.method,o=e.iterator[n];if(void 0===o)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,B(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),p;var r=m(o,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,p;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,p):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function I(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function T(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(I,this),this.reset(!0)}function x(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,r=function t(){for(;++o<e.length;)if(n.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:A}}function A(){return{value:void 0,done:!0}}return y.prototype=h,o(w,"constructor",{value:h,configurable:!0}),o(h,"constructor",{value:y,configurable:!0}),y.displayName=d(h,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,d(e,l,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},E(k.prototype),d(k.prototype,s,(function(){return this})),e.AsyncIterator=k,e.async=function(t,n,o,r,a){void 0===a&&(a=Promise);var i=new k(u(t,n,o,r),a);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},E(w),d(w,l,"Generator"),d(w,a,(function(){return this})),d(w,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var o in t)n.push(o);return n.reverse(),function e(){for(;n.length;){var o=n.pop();if(o in t)return e.value=o,e.done=!1,e}return e.done=!0,e}},e.values=x,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(T),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function o(n,o){return i.type="throw",i.arg=e,t.next=n,o&&(t.method="next",t.arg=void 0),!!o}for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r],i=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var o=this.tryEntries.length-1;o>=0;--o){var r=this.tryEntries[o];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),T(n),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var o=n.completion;if("throw"===o.type){var r=o.arg;T(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:x(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),p}},e}function s(e,t,n,o,r,a,i){try{var c=e[a](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(o,r)}function l(e){return function(){var t=this,n=arguments;return new Promise((function(o,r){var a=e.apply(t,n);function i(e){s(a,o,r,i,c,"next",e)}function c(e){s(a,o,r,i,c,"throw",e)}i(void 0)}))}}var d,u,m=document.querySelectorAll("#tap-to-place"),p=document.querySelector("#tap-to-place"),g=document.getElementById("nextbtn");g.onclick=function(){o=document.getElementById("diwaliMessage").value,r=document.getElementById("siblingname").value,d=encodeURIComponent(o),u=encodeURIComponent(r),console.log("encoded "+u)};var y=new a,h=(new URL(n(862),n.b).href,new URL(n(419),n.b).href,document.getElementById("scenediv")),f=document.getElementById("thirdscreen-bar"),v=document.getElementById("thirdscreen"),b=document.getElementById("thirdscreen-exotic"),w="";h.style.zIndex=-1,secondscreen.style.display="none",uploadingDiv.style.display="none";var E=document.querySelector(".form-part-1"),k=document.querySelector(".form-part-2"),L=(document.querySelector("#siblingname"),document.getElementById("#hereGoesID")),B=document.querySelector(".alert-check-questions");document.getElementById("alertCloseBtn").onclick=function(){B.classList.remove("visible"),B.classList.add("invisible")};var I=document.querySelector(".alert-check-questions-bar");document.getElementById("alertClosebarBtn").onclick=function(){I.classList.remove("visible"),I.classList.add("invisible")};var T=document.querySelector(".alert-check-questions-exotic");document.getElementById("alertCloseexoticBtn").onclick=function(){T.classList.remove("visible"),T.classList.add("invisible")};var S,x=document.getElementById("loadingHeader"),A=document.querySelector(".bars-casacade-loading");sendgift.onclick=function(){firstscreen.style.display="none",h.style.display="block",bgaudio.play();for(var e=document.querySelectorAll(".diwali-diya"),t=0;t<e.length;t++)e[t].style.display="none";for(var n=document.querySelectorAll(".diwali-rocket"),o=0;o<n.length;o++)n[o].style.display="none";secondscreen.style.display="block",E.style.display="block"},sendthankyou.onclick=function(){firstscreen.style.display="none",h.style.display="block",bgaudio.play(),secondscreen.style.display="block",E.style.display="block"},document.getElementById("copy");var P,U,F,q,R,C,j,M,O,D=0,H=0,N=1,G=0;m.length>0?m.forEach((function(e){e.addEventListener("click",(function(){console.log("in"),console.log(modelname),h.emit("recenter"),modelname.setAttribute("visible",!0),modelname.setAttribute("animation-mixer",{clip:"Animation",loop:"once",crossFadeDuration:.4,clampWhenFinished:!0}),function(){Q.apply(this,arguments)}(),document.getElementById("cropimgdisplay").src=M,sharepopupdiv.style.display="block",arscreen.style.display="block",setTimeout((function(){recordparentdiv.style.display="none"}),3e3),p.remove(),setTimeout((function(){0===D&&(modelname.setAttribute("animation-mixer",{timeScale:0}),tapOnEnvelope.style.display="block",console.log("tap 1300"),notebox.setAttribute("class","cantap"))}),G)}))})):console.log("No elements found with id 'tap-to-place'");var _,z=function(e){var t=document.createElement("textarea");t.value=e,document.body.appendChild(t),Object.assign(t.style,{zIndex:"-99999",position:"absolute"});var n=navigator.userAgent||navigator.vendor||window.opera;if(/iPads|iPod/.test(n)&&!window.MSStream){t.contentEditable=!0,t.readOnly=!1;var o=window.getSelection();o.removeAllRanges();var r=document.createRange();r.selectNodeContents(t),o.addRange(r),t.setSelectionRange(0,999999)}else t.select();document.execCommand("copy"),document.body.removeChild(t)},J=function(){var e=l(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("copy clicked"),z("".concat(t="To my special person! ❤️Wishing you a very Happy Diwali 🪔🎇Here’s a custom surprise for you, to celebrate this festive season season with lots of happiness, joy and delicious HERSHEY’S Chocolates."," https://hersheysgifting.co.in/?name=").concat(M,"&name1=").concat(C,"&name5=").concat(u,"&name6=").concat(d,"&name7=").concat(me)),e.prev=3,n={text:"".concat(t),url:"https://hersheysgifting.co.in/?name=".concat(M,"&name1=").concat(C,"&name5=").concat(u,"&name6=").concat(d,"&name7=").concat(me)},!navigator.share){e.next=13;break}return e.next=8,navigator.share(n);case 8:share.classList.add("pulse-once"),console.log("".concat(t," https://hersheysgifting.co.in/?name=").concat(M,"&name1=").concat(C,"&name5=").concat(u,"&name6=").concat(d,"&name7=").concat(me)),setTimeout((function(){share.classList.remove("pulse-once")}),200),e.next=14;break;case 13:console.log("Web Share API is not supported on this device/browser.");case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(3),console.error("An error occurred while trying to share:",e.t0);case 19:case"end":return e.stop()}}),e,null,[[3,16]])})));return function(){return e.apply(this,arguments)}}();send.addEventListener("click",J),sharebtn.addEventListener("click",J),fetch("data:image/png;filename=image.png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEV4r8729vb39/f1+Pt4q8u71OV4rMm71eT39/n1+Pz19fX2+Pn39/XZ5u670+J2qMdJ1ZSjAAABz0lEQVR4nO3U23KDIBgAYfGIiub937ZoYpL2up3M/t0douSObwCbnNpS2qOU2khV1Zrru0nBa5s2lfs0X5NYHcLYBRcu78L80aX8TRX4EuYuWPN6sMqaH8J126dhiDT2rZ7KpTz3cN5v49hHGre9O2WXsJuaYI3T/BDer2E39J9e0i83Dvc9TFVYQgr7u3BJ1ykNJxynH/dQIS6F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIb9/KNxv/dk4PgZ9Pk5zKuUlXLd9OJuuQZ9PW07pTZhyF6y5Ape3U7qkqMUVlofpFNb9TEs04/GVue7h01Y+uKA/avkujFjbNjnXZ5vr7/gbqnw+vgB2C0ejZ/UGZAAAAABJRU5ErkJggg==").then((function(e){return e.blob()})).then(URL.createObjectURL).then((function(e){return _=e})).then(console.log);var W=document.createElement("a");W.href=_,document.body.appendChild(W);var Y=document.getElementById("hoverChange"),Z=document.getElementById("hoverhershey"),K=document.getElementById("hoverexotic");Y.src="/images/kisses.png",Z.src="/images/hershey.png",K.src="/images/exotic.png",Y.onclick=function(){console.log("clickedkisses"),y.changeKissesPack(),Z.src="/images/hershey.png",K.src="/images/exotic.png",w="kisses",G=13e3,C="1"},hoverhershey.onclick=function(){console.log("clickedchocolatebar"),y.changeHersheyPack(),Y.src="/images/kisses.png",K.src="/images/exotic.png",w="chocolatebar",G=14e3,console.log(w),C="2"},hoverexotic.onclick=function(){document.getElementById("hoverChange").value,document.getElementById("hoverhershey").value,console.log("clickedexotic"),y.changeExoticPack(),Y.src="/images/kisses.png",Z.src="/images/hershey.png",w="exotic",G=17e3,C="3"};var V=document.getElementById("uploadbtn");function X(){console.log("clicked different btn");var e=V.files[0];console.log("imageFile",e),console.log("clicked different btn1"),function(e){console.log("uploadImage ran");var t=new FormData;return t.append("fileUploadBtn",e),console.log("formData",t),new Promise((function(e,n){fetch("/questions",{method:"POST",body:t}).then((function(e){if(!e.ok)throw new Error("Network response was not ok ".concat(e.json()));return e.json()})).then((function(t){var n=t.imageUrl;e(n)})).catch((function(e){n(e)}))}))}(e).then((function(e){console.log("clicked different btn2"),console.log("Uploaded Image URL:",e),M=e,setTimeout((function(){!function(e){console.log("Rendering the result with imageUrl:",e)}(e),console.log("clicked different btn3")}),2e3)})).catch((function(e){console.log("Error:",e)}))}function Q(){return Q=l(c().mark((function e(){var t,n,o,r,a,i,s,l,d,u,m,p,g,y,h;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h=function(e,t){var n=g.createBufferSource();n.loop=!0,n.buffer=e,n.start(0,0),n.connect(y);var o=g.createMediaStreamDestination();n.connect(o),t(o.stream)},p=function(e){var t=m(blobdataURL),n=new FileReader;n.file=t,n.onload=function(t){g.decodeAudioData(t.target.result,(function(t){h(t,e)}))},n.readAsArrayBuffer(n.file)},m=function(e){for(var t=e.split(","),n=t[0].match(/:(.*?);/)[1],o=atob(t[1]),r=o.length,a=new Uint8Array(r);r--;)a[r]=o.charCodeAt(r);return new Blob([a],{type:n})},u=function(){var e=new Blob(s,{type:"".concat(d)});console.log("blob",e),console.log("chunks",s),i=URL.createObjectURL(e);var o=document.getElementById("videotag");o.src=i,te(o),o.controls=!0,document.getElementById("preview-Container").style.display="flex",new File([e],"hersheys_".concat(Date.now(),".mp4"),{type:"".concat(d),lastModified:Date.now()}),n=!1,r.stop(),a.stop(),capture.src="/images/shutter-button-start.png",t.innerHTML="Tap Rec Button to Record"},document.querySelector("canvas")||document.createElement("canvas"),t=document.getElementById("recordbannerdiv"),n=!1,s=[],l=["video/webm","video/mp4","video/ogg","audio/webm","audio/wav","audio/mpeg"],capture.addEventListener("click",(function(){n?(u(),console.log("stop"),capture.src="/images/shutter-button-start.png",t.innerHTML="Tap Rec Button to Record"):(t.innerHTML="Tap Stop Button to Save",capture.src="/images/shutter-button-stop.png",p((function(e){var t=document.querySelector("canvas").captureStream();a=t;var i=new MediaStream;getTracks(e,"audio").forEach((function(e){i.addTrack(e)})),r=e,getTracks(t,"video").forEach((function(e){i.addTrack(e)})),l.forEach((function(e){MediaRecorder.isTypeSupported(e)?(console.log("".concat(e," is supported")),null==d&&(d=e)):console.log("".concat(e," is not supported"))})),"video/webm"==d?(d="video/webm; codecs=vp9",o=new MediaRecorder(i,{audioBitsPerSecond:128e3,videoBitsPerSecond:25e5,mimeType:d})):o=new MediaRecorder(i),o.ondataavailable=function(e){s.push(e.data)},o.onstop=function(e){Date.now()},o.start(1e3),Date.now(),n=!0})))})),window.AudioContext=window.AudioContext||window.webkitAudioContext,g=new AudioContext,(y=g.createGain()).connect(g.destination),y.gain.value=0,document.getElementById("closebtn").addEventListener("click",(function(e){document.getElementById("preview-Container").style.display="none"})),document.getElementById("savebtn").addEventListener("click",(function(e){ee(i)}));case 18:case"end":return e.stop()}}),e)}))),Q.apply(this,arguments)}reload.onclick=function(){H++,D++,console.log("clicked"),modelname.removeAttribute("animation-mixer"),setTimeout((function(){modelname.setAttribute("animation-mixer",{clip:"Animation",loop:"once",crossFadeDuration:.4,clampWhenFinished:!0}),setTimeout((function(){N==H&&(modelname.setAttribute("animation-mixer",{timeScale:0}),tapOnEnvelope.style.display="block",console.log("reload 1300"),notebox.setAttribute("class","cantap")),N++}),G)}),1e3)};var ee=function(e){var t,n;t={href:e,download:"hersheys.mp4"},n=document.createElement("a"),Object.assign(n,t),document.body.appendChild(n),n.click(),document.body.removeChild(n)};function te(e){e.muted=!0;var t=e.play();setTimeout((function(){void 0!==t&&t.then((function(t){console.log("inside play promise"),e.pause(),e.muted=!1})).catch((function(e){}))}),1100),e.addEventListener("click",(function(){playing?(e.pause(),playing=!1):(e.play(),playing=!0)}))}AFRAME.registerComponent("postcardinvisible",{tock:function(){var e,t,n=(e=modelname.object3D,"postcard",t=null,e.traverse((function(e){e.isMesh&&"postcard"===e.name&&(t=e)})),t);console.log("mesh name"+n)}}),AFRAME.registerComponent("swap-texture",{init:function(){console.log("init");var e=document.getElementById("msgclosebtn"),t=document.getElementById("uploadbtn");t.onchange=function(){!function(e){var n=new FileReader;n.onload=function(){if(t.files.length>0){var e=t.files.item(0).size/Math.pow(1024,2);if(console.log(e),e>=12)alert("please upload file less then 10mb"),console.log("size is large");else{document.getElementById("changeFileName").innerHTML="Uploaded!",console.log("size is ohk")}}console.log("image upload clicked"),(S=document.getElementById("uploadbtn")).src=n.result,console.log(S.src),console.log("sss"+j),document.getElementById("preview")},n.readAsDataURL(e.target.files[0])}(event)},new THREE.TextureLoader;var n=document.getElementById("modelname"),r=document.getElementById("notebox");if(document.getElementById("fileUploadLabel").onclick=function(){document.querySelector(".alert-check-upload");var e=document.getElementById("preview");V.click(),V.addEventListener("change",(function(){var t=V.files[0];if(t){var n=new FileReader;n.onload=function(t){var n=new Image;n.src=t.target.result,n.onload=function(){e.src=t.target.result}},n.readAsDataURL(t)}}))},document.getElementById("formId").addEventListener("submit",(function(e){e.preventDefault()})),console.log("init"),P=new URLSearchParams(document.location.search.substring(1)),U=new URLSearchParams(document.location.search.substring(2)),new URLSearchParams(document.location.search.substring(3)),new URLSearchParams(document.location.search.substring(4)),new URLSearchParams(document.location.search.substring(5)),F=new URLSearchParams(document.location.search.substring(6)),q=new URLSearchParams(document.location.search.substring(7)),R=new URLSearchParams(document.location.search.substring(8)),"friend"===(j=P.get("name")?P.get("name"):"friend"))receiverfirstscreen.style.display="none",firstscreen.style.display="block";else{var a=function(){"distance-wali"===me&&(pe(),X()),"friend-wali"===me&&(ge(),X(),console.log("Testing friends wali")),"family-wali"===me&&(ye(),X())};document.getElementById("cropimgdisplay").src=j,document.querySelector(".preview-text").style.display="none",receiverfirstscreen.style.display="block",firstscreen.style.display="none",send.classList.add("invisible"),C=U.get("name1"),O=F.get("name5"),console.log(O),console.log("Options=undefined undefined "+void 0),console.log(C),console.log("receiver side"),o=q.get("name6"),me=R.get("name7"),"1"===C?(console.log("pnametype"+C),M=j,G=13e3,n.setAttribute("gltf-model","/models/kissesfile3.glb"),L.innerHTML="".concat(O),console.log(o),completenote.innerHTML=o,a()):"2"===C?(console.log("pnametype"+C),M=j,G=14e3,n.setAttribute("gltf-model","/models/barsfinalfile5.glb"),L.innerHTML="".concat(O),a()):"3"===C&&(console.log("pnametype"+C),M=j,G=17e3,n.setAttribute("gltf-model","/models/edfinal3.glb"),L.innerHTML="".concat(O),a())}document.getElementById("receiverbtn").addEventListener("click",(function(){bgaudio.play(),receiverfirstscreen.style.display="none",h.style.zIndex=0,permissions.setAttribute("zappar-permissions-ui",""),p.style.display="block"})),e.onclick=function(){console.log("msg close button clicked"),document.getElementById("messagenote"),messagenote.style.display="none",n.setAttribute("animation-mixer",{timeScale:1})},r.addEventListener("click",(function(e){var t=document.getElementById("messagenote");setTimeout((function(){html2canvas(t,{scale:3,dpi:500}).then((function(e){console.log("Canvas created:",e),e.toDataURL();var t=document.getElementById("modelname"),n=(new THREE.TextureLoader).load("https://static.vecteezy.com/system/resources/previews/011/350/136/original/yellow-color-triangulated-background-texture-for-business-card-template-free-vector.jpg");console.log(n);var o=t.getObject3D("mesh");if(o){var r=o.getObjectByName("postcard");r&&r.material?(console.log("Applying texture to postcard mesh"),r.material.map=n,r.material.needsUpdate=!0):console.log("Postcard mesh or its material not found")}else console.log("Model element does not have an object3D")}))}),1e3),console.log("envolope clicked"),tapOnEnvelope.style.display="none",messagenote.style.display="block",r.setAttribute("class","")}))}}),document.getElementById("sendthankyou").addEventListener("click",(function(){document.getElementById("siblingname").focus()})),document.getElementById("sendgift").addEventListener("click",(function(){document.getElementById("siblingname").focus()}));var ne=document.getElementById("siblingname"),oe=document.getElementById("hoverChange");ne.addEventListener("input",(function(){ne.value.length>6&&oe.focus()})),document.getElementById("sendthankyou").addEventListener("click",(function(){document.getElementById("changeTextScreen").textContent="Say thankyou to"})),document.getElementById("homeIcon").onclick=function(){window.location.reload()};var re,ae,ie=document.querySelector(".create-postcard"),ce=document.querySelector("#diwaliMessage"),se=(document.querySelector("#character-counter"),document.querySelector("#typed-characters"));ie.addEventListener("click",(function(){var e=[];if(""!=document.getElementById("siblingname").value&&""!=w||e.push("Please fill all the details."),e.length>0){var t=document.querySelector(".alert-box"),n=document.createElement("div");n.classList.add("alert","alert-danger"),n.setAttribute("role","alert"),n.innerHTML=e[0],t.appendChild(n)}else 0===e.length?(E.style.display="none",k.style.display="block"):alert("Something went wrong please reload page.")})),ce.addEventListener("keyup",(function(e){var t=ce.value.length;if(t>100)return!1;se.textContent=t}));var le=document.getElementById("distancewali"),de=document.getElementById("friendwali"),ue=document.getElementById("familywali"),me="";function pe(){document.querySelector(".message-wrapper").classList.remove("family-bg"),document.querySelector(".message-wrapper").classList.remove("friend-bg"),document.querySelector(".message-wrapper").classList.add("long-distance-bg"),document.querySelector(".message-header h3").classList.remove("hed-note-text"),document.getElementById("msgclosebtn").classList.remove("hed-close-btn"),document.querySelector(".dynamic-name").classList.remove("hed-dynamic-name"),document.getElementById("completenote").classList.remove("hed-note-text");var e=document.getElementById("dynamicImg");e.classList.add("long-distance-dynamic"),e.children[0].src="/images/both-kisses.png";var t=document.createElement("img");t.src="/images/hand.png",t.className="handstyle",document.getElementById("imagewithhand").appendChild(t)}function ge(){document.querySelector(".message-wrapper").classList.remove("long-distance-bg"),document.querySelector(".message-wrapper").classList.remove("family-bg"),document.querySelector(".message-wrapper").classList.add("friend-bg"),document.querySelector(".diwali-msg-h4").innerHTML="<span>F</span>estive <span>M</span>oments with <span>F</span>riends";var e=document.querySelector(".polaroid-frame");e.classList.add("friend-bg-polaroid"),document.querySelector(".brand-wish").children[0].src="/images/friend-brand-wishes.png";var t=document.createElement("div"),n=document.createElement("img");t.className="kiss-cascade",n.className="kiss-cascade-img",n.src="/images/both-kisses.png",t.appendChild(n),e.appendChild(t);var o=document.getElementById("dynamicImg");o.classList.add("long-distance-dynamic"),o.children[0].style.display="none"}function ye(){document.getElementById("#hereGoesID").style.color="#DFBC66",document.getElementById("dear").style.color="#DFBC66",document.querySelector(".message-wrapper").classList.remove("long-distance-bg"),document.querySelector(".message-wrapper").classList.remove("friend-bg"),document.querySelector(".message-wrapper").classList.add("family-bg"),document.querySelector(".polaroid-frame").classList.add("friend-bg-polaroid"),document.querySelector(".brand-wish").children[0].src="/images/friend-brand-wishes.png",document.querySelector(".vertical-bar").children[0].style.background="#DFBC66",document.querySelector(".diwali-msg-h4").classList.add("family-gold-text"),document.querySelector(".diwali-msg-h4").innerHTML="<span>F</span>estive <span>M</span>oments with <span>F</span>amily!",document.querySelector(".message-header").classList.add("family-gold-text"),document.querySelector("#completenote").classList.add("family-gold-text");var e=document.getElementById("dynamicImg");e.classList.add("long-distance-dynamic"),e.children[0].style.display="none"}le.addEventListener("click",(function(){y.changeLongDistance(),de.src="/images/friendwali.png",ue.src="/images/familywali.png",me="distance-wali"})),de.addEventListener("click",(function(){y.changeFriendWali(),le.src="/images/distancewali.png",ue.src="/images/familywali.png",me="friend-wali"})),ue.addEventListener("click",(function(){y.changeFamilyWali(),le.src="/images/distancewali.png",de.src="/images/friendwali.png",me="family-wali"})),g.addEventListener("click",(function(e){if(e.preventDefault(),function(){var e=[];if(0===ce.value.length&&e.push("Please write a message."),e.length>0){var t=document.querySelectorAll(".alert-box"),n=document.createElement("div");n.classList.add("alert","alert-danger"),n.setAttribute("role","alert"),n.innerHTML=e[0],t[1].appendChild(n)}else 0===e.length&&(re="nil")}(),function(){var e=[];if(""===me&&e.push("Please select a template."),e.length>0){var t=document.querySelectorAll(".alert-box"),n=document.createElement("div");n.classList.add("alert","alert-danger"),n.setAttribute("role","alert"),n.innerHTML=e[0],t[1].appendChild(n)}else 0===e.length&&(ae="nil")}(),"nil"===re&&"nil"===ae){O=document.getElementById("siblingname").value;var t=document.getElementById("uploadbtn").value,n=ce.value;""===O?secondscreen.style.display="block":""===t?alert("Please upload your photo!"):n.length>150?alert("Message character limit is over!"):(secondscreen.style.display="none",v.style.display="none",f.style.display="none",b.style.display="none","kisses"===w?(modelname.setAttribute("gltf-model","#kissesmodel"),A.style.display="none",loadingscreen.style.display="block",kissesloadingvid.style.display="block",kissesloadingvid.play()):"chocolatebar"===w?(modelname.setAttribute("gltf-model","#barmodel"),x.src="/images/hersheyslogo.png",x.parentElement.parentElement.classList.remove("justify-content-start"),x.parentElement.parentElement.classList.add("justify-content-center"),kissesloadingvid.style.display="none",A.style.display="block",loadingscreen.style.display="block"):"exotic"===w?(modelname.setAttribute("gltf-model","#exoticmodel"),x.parentElement.parentElement.classList.remove("justify-content-start"),x.parentElement.parentElement.classList.add("justify-content-center"),x.src="/images/hed-logo.png",A.style.display="none",loadingscreen.style.display="block",exoticloadingvid.style.display="block",exoticloadingvid.play()):alert("Please reload your page!"),o=n,completenote.innerHTML=o,"distance-wali"===me&&(pe(),X()),"friend-wali"===me&&(ge(),X()),"family-wali"===me&&(ye(),X()),modelname.addEventListener("model-loaded",(function(){})),setTimeout((function(){loadingscreen.style.display="none",h.style.zIndex=0,p.style.display="block"}),6e3),L.innerHTML="".concat(O))}}))})()})();
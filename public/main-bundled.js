/*! For license information please see main-bundled.js.LICENSE.txt */

(()=>{"use strict";var e={419:(e,t,n)=>{e.exports=n.p+"46e454841fbbf37c4aef.png"},28:(e,t,n)=>{e.exports=n.p+"fcc0127c3473232fe5bb.glb"}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}n.m=e,n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var i=o.length-1;i>-1&&!e;)e=o[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,(()=>{function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,n){for(var o=0;o<n.length;o++){var i=n[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,r=function(t,n){if("object"!==e(t)||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var i=o.call(t,"string");if("object"!==e(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===e(r)?r:String(r)),i)}var r}function o(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),Object.defineProperty(e,"prototype",{writable:!1}),e}var i=o((function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}));function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function s(){s=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,o=Object.defineProperty||function(e,t,n){e[t]=n.value},i="function"==typeof Symbol?Symbol:{},r=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function d(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{d({},"")}catch(e){d=function(e,t,n){return e[t]=n}}function u(e,t,n,i){var r=t&&t.prototype instanceof g?t:g,c=Object.create(r.prototype),a=new S(i||[]);return o(c,"_invoke",{value:I(e,n,a)}),c}function m(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var y={};function g(){}function p(){}function h(){}var f={};d(f,r,(function(){return this}));var v=Object.getPrototypeOf,b=v&&v(v(T([])));b&&b!==t&&n.call(b,r)&&(f=b);var w=h.prototype=g.prototype=Object.create(f);function k(e){["next","throw","return"].forEach((function(t){d(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function i(o,r,c,s){var l=m(e[o],e,r);if("throw"!==l.type){var d=l.arg,u=d.value;return u&&"object"==a(u)&&n.call(u,"__await")?t.resolve(u.__await).then((function(e){i("next",e,c,s)}),(function(e){i("throw",e,c,s)})):t.resolve(u).then((function(e){d.value=e,c(d)}),(function(e){return i("throw",e,c,s)}))}s(l.arg)}var r;o(this,"_invoke",{value:function(e,n){function o(){return new t((function(t,o){i(e,n,t,o)}))}return r=r?r.then(o,o):o()}})}function I(e,t,n){var o="suspendedStart";return function(i,r){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===i)throw r;return{value:void 0,done:!0}}for(n.method=i,n.arg=r;;){var c=n.delegate;if(c){var a=B(c,n);if(a){if(a===y)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===o)throw o="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o="executing";var s=m(e,t,n);if("normal"===s.type){if(o=n.done?"completed":"suspendedYield",s.arg===y)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o="completed",n.method="throw",n.arg=s.arg)}}}function B(e,t){var n=t.method,o=e.iterator[n];if(void 0===o)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,B(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=m(o,e.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,y;var r=i.arg;return r?r.done?(t[e.resultName]=r.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,y):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,y)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function T(e){if(e){var t=e[r];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function t(){for(;++o<e.length;)if(n.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:A}}function A(){return{value:void 0,done:!0}}return p.prototype=h,o(w,"constructor",{value:h,configurable:!0}),o(h,"constructor",{value:p,configurable:!0}),p.displayName=d(h,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,d(e,l,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},k(E.prototype),d(E.prototype,c,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,o,i,r){void 0===r&&(r=Promise);var c=new E(u(t,n,o,i),r);return e.isGeneratorFunction(n)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},k(w),d(w,l,"Generator"),d(w,r,(function(){return this})),d(w,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var o in t)n.push(o);return n.reverse(),function e(){for(;n.length;){var o=n.pop();if(o in t)return e.value=o,e.done=!1,e}return e.done=!0,e}},e.values=T,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function o(n,o){return c.type="throw",c.arg=e,t.next=n,o&&(t.method="next",t.arg=void 0),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var r=this.tryEntries[i],c=r.completion;if("root"===r.tryLoc)return o("end");if(r.tryLoc<=this.prev){var a=n.call(r,"catchLoc"),s=n.call(r,"finallyLoc");if(a&&s){if(this.prev<r.catchLoc)return o(r.catchLoc,!0);if(this.prev<r.finallyLoc)return o(r.finallyLoc)}else if(a){if(this.prev<r.catchLoc)return o(r.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return o(r.finallyLoc)}}}},abrupt:function(e,t){for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var r=i;break}}r&&("break"===e||"continue"===e)&&r.tryLoc<=t&&t<=r.finallyLoc&&(r=null);var c=r?r.completion:{};return c.type=e,c.arg=t,r?(this.method="next",this.next=r.finallyLoc,y):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),x(n),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var o=n.completion;if("throw"===o.type){var i=o.arg;x(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:T(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),y}},e}function l(e,t,n,o,i,r,c){try{var a=e[r](c),s=a.value}catch(e){return void n(e)}a.done?t(s):Promise.resolve(s).then(o,i)}var d=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.packtype="hello",$(".owl-carousel").owlCarousel({center:!0,loop:!1,margin:-70,nav:!0,responsive:{0:{items:1},600:{items:3},1e3:{items:5}}})}var t,n;return t=e,(n=[{key:"untapKisses",value:function(){document.getElementById("hoverhershey").src="/images/kisses.png"}},{key:"changeKissesPack",value:function(){var e=document.getElementById("hoverChange");e.src.match("/images/kisses.png")?(e.src="/images/tapkisses.png",console.log("kisses"),this.packtype="kisses",console.log("module"+this.packtype)):(e.src="/images/kisses.png",this.packtype="")}},{key:"changeHersheyPack",value:function(){var e=document.getElementById("hoverhershey");e.src.match("/images/hershey.png")?(e.src="/images/taphershey.png",console.log("chocolatebar"),this.packtype="chocolatebar",console.log("module"+this.packtype)):(e.src="/images/hershey.png",this.packtype="")}},{key:"changeExoticPack",value:function(){var e=document.getElementById("hoverexotic");e.src.match("/images/exotic.png")?(e.src="/images/tapexotic.png",console.log("exotic"),this.packtype="exotic",console.log("module"+this.packtype)):(e.src="/images/exotic.png",this.packtype="")}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}());new i,new URL(n(28),n.b).href,new URL(n(419),n.b).href;var u,m=document.getElementById("scenediv"),y=document.getElementById("thirdscreen-bar"),g=document.getElementById("thirdscreen"),p=document.getElementById("thirdscreen-exotic");m.style.zIndex=-1,secondscreen.style.display="none",uploadingDiv.style.display="none",document.querySelector("#siblingname");var h=document.getElementById("#hereGoesID"),f=document.querySelector(".alert-check-questions");document.getElementById("alertCloseBtn").onclick=function(){f.classList.remove("visible"),f.classList.add("invisible")};var v=document.querySelector(".alert-check-questions-bar");document.getElementById("alertClosebarBtn").onclick=function(){v.classList.remove("visible"),v.classList.add("invisible")};var b=document.querySelector(".alert-check-questions-exotic");document.getElementById("alertCloseexoticBtn").onclick=function(){b.classList.remove("visible"),b.classList.add("invisible")};var w,k=document.getElementById("loadingHeader"),E=document.querySelector(".bars-casacade-loading");sendgift.onclick=function(){firstscreen.style.display="none",m.style.display="block",bgaudio.play(),secondscreen.style.display="block"},sendthankyou.onclick=function(){firstscreen.style.display="none",m.style.display="block",bgaudio.play(),secondscreen.style.display="block"},document.getElementById("copy");var I,B,L,x,S,T,A,P,U,j,F,O,q,R,M,C,D,z,H=0,N=0,Y=1,G=0,_=document.getElementById("tap-to-place"),J=0;send.onclick=function(){console.log("copy clicked"),function(e){var t=document.createElement("textarea");t.value=e,document.body.appendChild(t),Object.assign(t.style,{zIndex:"-99999",position:"absolute"});var n=navigator.userAgent||navigator.vendor||window.opera;if(/iPads|iPod/.test(n)&&!window.MSStream){t.contentEditable=!0,t.readOnly=!1;var o=window.getSelection();o.removeAllRanges();var i=document.createRange();i.selectNodeContents(t),o.addRange(i),t.setSelectionRange(0,999999)}else t.select();document.execCommand("copy"),document.body.removeChild(t)}("https://hersheysgifting.co.in/questions?name=".concat(O,"&name1=").concat(A,"&name2=").concat(U,"&name3=").concat(j,"&name4=").concat(F,"&name5=").concat(R));var e={url:"https://hersheysgifting.co.in/questions?name=".concat(O,"&name1=").concat(A,"&name2=").concat(U,"&name3=").concat(j,"&name4=").concat(F,"&name5=").concat(R)};navigator.share&&navigator.share(e),share.classList.add("pulse-once"),setTimeout((function(){share.classList.remove("pulse-once")}),200)},fetch("data:image/png;filename=image.png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEV4r8729vb39/f1+Pt4q8u71OV4rMm71eT39/n1+Pz19fX2+Pn39/XZ5u670+J2qMdJ1ZSjAAABz0lEQVR4nO3U23KDIBgAYfGIiub937ZoYpL2up3M/t0douSObwCbnNpS2qOU2khV1Zrru0nBa5s2lfs0X5NYHcLYBRcu78L80aX8TRX4EuYuWPN6sMqaH8J126dhiDT2rZ7KpTz3cN5v49hHGre9O2WXsJuaYI3T/BDer2E39J9e0i83Dvc9TFVYQgr7u3BJ1ykNJxynH/dQIS6F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIb9/KNxv/dk4PgZ9Pk5zKuUlXLd9OJuuQZ9PW07pTZhyF6y5Ape3U7qkqMUVlofpFNb9TEs04/GVue7h01Y+uKA/avkujFjbNjnXZ5vr7/gbqnw+vgB2C0ejZ/UGZAAAAABJRU5ErkJggg==").then((function(e){return e.blob()})).then(URL.createObjectURL).then((function(e){return z=e})).then(console.log);var W=document.createElement("a");W.href=z,document.body.appendChild(W),hoverChange.onclick=function(){document.getElementById("hoverhershey").value,document.getElementById("hoverexotic").value,console.log("clickedkisses"),d.changeKissesPack(),u="kisses",G=13e3,A="1"},hoverhershey.onclick=function(){document.getElementById("hoverChange").value,document.getElementById("hoverexotic").value,console.log("clickedchocolatebar"),d.changeHersheyPack(),u="chocolatebar",G=11e3,console.log(u),A="2"},hoverexotic.onclick=function(){document.getElementById("hoverChange").value,document.getElementById("hoverhershey").value,console.log("clickedexotic"),d.changeExoticPack(),u="exotic",G=17e3,A="3"},nextbtn.onclick=function(){R=document.getElementById("siblingname").value;var e=document.getElementById("uploadbtn").value;console.log(R),console.log(e),""===R?secondscreen.style.display="block":""===e?alert("Please upload your photo!"):(secondscreen.style.display="none","kisses"===u?(modelname.setAttribute("gltf-model","#kissesmodel"),console.log("ss"),g.style.display="block"):"chocolatebar"===u?(modelname.setAttribute("gltf-model","#barmodel"),y.style.display="block"):"exotic"===u&&(modelname.setAttribute("gltf-model","#exoticmodel"),p.style.display="block"),modelname.addEventListener("model-loaded",(function(){console.log("if loaded"),J=1})))},reload.onclick=function(){N++,H++,console.log("clicked"),modelname.removeAttribute("animation-mixer"),setTimeout((function(){modelname.setAttribute("animation-mixer",{clip:"Animation",loop:"once",crossFadeDuration:.4,clampWhenFinished:!0}),setTimeout((function(){Y==N&&(modelname.setAttribute("animation-mixer",{timeScale:0}),tapOnEnvelope.style.display="block",console.log("reload 1300"),notebox.setAttribute("class","cantap")),Y++}),G)}),1e3)};var Z=document.getElementById("div-1"),K=document.getElementById("div-2"),V=document.getElementById("div-3");Z.onclick=function(){console.log("option1 div 1"),M="Sweet Troublemakers",U=1},K.onclick=function(){console.log("option1 div 2"),M="Partners in crime",U=2},V.onclick=function(){console.log("option1 div 3"),M="Top Secret keepers",U=3};var X=document.getElementById("custom-div-1"),Q=document.getElementById("custom-div-2"),ee=document.getElementById("custom-div-3");X.onclick=function(){console.log("option2 div 1"),C="Caring nature",j=1},Q.onclick=function(){console.log("option2 div 2"),C="Delightfully annoying nature",j=2},ee.onclick=function(){console.log("option2 div 3"),C="Giving mature advices",j=3};var te=document.getElementById("custom-option-1"),ne=document.getElementById("custom-option-2"),oe=document.getElementById("custom-option-3");te.onclick=function(){console.log("option3 div 1"),D="Crazy",F=1},ne.onclick=function(){console.log("option3 div 2"),D="Realistic",F=1},oe.onclick=function(){console.log("option3 div 3"),D="Determined",F=1};var ie=document.getElementById("hershey-bar-1"),re=document.getElementById("hershey-bar-2"),ce=document.getElementById("hershey-bar-3");ie.onclick=function(){console.log("option1 div 1"),M="Sweet Siblings",U=1},re.onclick=function(){console.log("option1 div 2"),M="Nutty Friends",U=2},ce.onclick=function(){console.log("option1 div 3"),M="Trusted Partners",U=3};var ae=document.getElementById("new-hershey-bar-1"),se=document.getElementById("new-hershey-bar-2"),le=document.getElementById("new-hershey-bar-3");ae.onclick=function(){console.log("option2 div 1"),C="You are a closet rockstar, unleashing brilliance and leaving everyone in awe",j=1},se.onclick=function(){console.log("option2 div 2"),C="You are always in FOMO mode, eager to seize every opportunity and get the best out of it",j=2},le.onclick=function(){console.log("option2 div 3"),C="You are the Ultimate Foodie, never hesitating to try new and exciting cuisines",j=3};var de=document.getElementById("option-1"),ue=document.getElementById("option-2"),me=document.getElementById("option-3");de.onclick=function(){console.log("option3 div 1"),D="Music",F=1},ue.onclick=function(){console.log("option3 div 2"),D="Street food",F=1},me.onclick=function(){console.log("option3 div 3"),D="Gaming",F=1};var ye=document.getElementById("exotic-hershey-1"),ge=document.getElementById("exotic-hershey-2"),pe=document.getElementById("exotic-hershey-3");ye.onclick=function(){console.log("option1 div 1"),M="Berry Good Friends",U=1},ge.onclick=function(){console.log("option1 div 2"),M="Nutty Partners",U=2},pe.onclick=function(){console.log("option1 div 3"),M="Trusted Confidantes",U=3};var he=document.getElementById("exotic-dark-card2-1"),fe=document.getElementById("exotic-dark-card2-2"),ve=document.getElementById("exotic-dark-card2-3");he.onclick=function(){console.log("option2 div 1"),C="Wine & Chocolates at Home",j=1},fe.onclick=function(){console.log("option2 div 2"),C="Sundowners at Beach Resort",j=2},ve.onclick=function(){console.log("option2 div 3"),C="Bollywood Music Festival ",j=3};var be=document.getElementById("option-exotic-1"),we=document.getElementById("option-exotic-2"),ke=document.getElementById("option-exotic-3");function Ee(){var e;return e=s().mark((function e(){var t,n,o,i,r,c,a,l,d,u,m,y,g,p,h;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h=function(e,t){var n=g.createBufferSource();n.loop=!0,n.buffer=e,n.start(0,0),n.connect(p);var o=g.createMediaStreamDestination();n.connect(o),t(o.stream)},y=function(e){var t=m(blobdataURL),n=new FileReader;n.file=t,n.onload=function(t){g.decodeAudioData(t.target.result,(function(t){h(t,e)}))},n.readAsArrayBuffer(n.file)},m=function(e){for(var t=e.split(","),n=t[0].match(/:(.*?);/)[1],o=atob(t[1]),i=o.length,r=new Uint8Array(i);i--;)r[i]=o.charCodeAt(i);return new Blob([r],{type:n})},u=function(){var e=new Blob(c,{type:"".concat(d)});console.log("blob",e),console.log("chunks",c),r=URL.createObjectURL(e);var n=document.getElementById("videotag");n.src=r,n.setAttribute("style","height: 75%; position: absolute; top:10%; left:12.5%;"),Be(n),n.controls=!0,document.getElementById("preview-Container").style.display="flex",a=new File([e],"hersheys_".concat(Date.now(),".mp4"),{type:"".concat(d),lastModified:Date.now()}),t=!1,o.stop(),i.stop(),capture.src="/images/shutter-button-start.png"},document.querySelector("canvas")||document.createElement("canvas"),t=!1,c=[],l=["video/webm","video/mp4","video/ogg","audio/webm","audio/wav","audio/mpeg"],capture.addEventListener("click",(function(){t?(u(),console.log("stop"),capture.src="/images/shutter-button-start.png"):(capture.src="/images/shutter-button-stop.png",y((function(e){var r=document.querySelector("canvas").captureStream();i=r;var a=new MediaStream;getTracks(e,"audio").forEach((function(e){a.addTrack(e)})),o=e,getTracks(r,"video").forEach((function(e){a.addTrack(e)})),l.forEach((function(e){MediaRecorder.isTypeSupported(e)?(console.log("".concat(e," is supported")),null==d&&(d=e)):console.log("".concat(e," is not supported"))})),"video/webm"==d?(d="video/webm; codecs=vp9",n=new MediaRecorder(a,{audioBitsPerSecond:128e3,videoBitsPerSecond:25e5,mimeType:d})):n=new MediaRecorder(a),n.ondataavailable=function(e){c.push(e.data)},n.onstop=function(e){Date.now()},n.start(1e3),Date.now(),t=!0})))})),window.AudioContext=window.AudioContext||window.webkitAudioContext,g=new AudioContext,(p=g.createGain()).connect(g.destination),p.gain.value=0,document.getElementById("closebtn").addEventListener("click",(function(e){document.getElementById("preview-Container").style.display="none"})),document.getElementById("sharebtn").addEventListener("click",(function(e){try{navigator.share&&navigator.canShare({files:[a]})?navigator.share(void 0).then((function(){return console.log("Successful share")})).catch((function(e){return console.log("Error sharing",e)})):alert("Web Share API is not supported in your browser.")}catch(e){alert("Sharing is not supported in your browser")}})),document.getElementById("savebtn").addEventListener("click",(function(e){Ie(r)}));case 18:case"end":return e.stop()}}),e)})),Ee=function(){var t=this,n=arguments;return new Promise((function(o,i){var r=e.apply(t,n);function c(e){l(r,o,i,c,a,"next",e)}function a(e){l(r,o,i,c,a,"throw",e)}c(void 0)}))},Ee.apply(this,arguments)}be.onclick=function(){console.log("option3 div 1"),D="Discussing family",F=1},we.onclick=function(){console.log("option3 div 2"),D="Remembering childhood days",F=1},ke.onclick=function(){console.log("option3 div 3"),D="Laughing at Silly Jokes ",F=1};var Ie=function(e){var t,n;t={href:e,download:"hersheys.mp4"},n=document.createElement("a"),Object.assign(n,t),document.body.appendChild(n),n.click(),document.body.removeChild(n)};function Be(e){e.muted=!0;var t=e.play();setTimeout((function(){void 0!==t&&t.then((function(t){console.log("inside play promise"),e.pause(),e.muted=!1})).catch((function(e){}))}),1100),e.addEventListener("click",(function(){playing?(e.pause(),playing=!1):(e.play(),playing=!0)}))}AFRAME.registerComponent("swap-texture",{init:function(){console.log("init");var e=document.getElementById("msgclosebtn"),t=document.getElementById("uploadbtn");t.onchange=function(){!function(e){var n=new FileReader;n.onload=function(){if(t.files.length>0){var e=t.files.item(0).size/Math.pow(1024,2);if(console.log(e),e>=12)alert("please upload file less then 10mb"),console.log("size is large");else{document.getElementById("changeFileName").innerHTML="Uploaded!",console.log("size is ohk")}}console.log("image upload clicked"),(w=document.getElementById("uploadbtn")).src=n.result,console.log(w.src),console.log("sss"+P)},n.readAsDataURL(e.target.files[0])}(event)};var n=new THREE.TextureLoader,o=document.getElementById("modelname"),i=document.getElementById("notebox");function r(){console.log("clicked different btn");var e=document.getElementById("uploadbtn").files[0];console.log("clicked different btn1"),function(e){var t=new FormData;return t.append("image",e),new Promise((function(e,n){fetch("/questions",{method:"POST",body:t}).then((function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((function(t){var n=t.imageUrl;e(n)})).catch((function(e){n(e)}))}))}(e).then((function(e){console.log("clicked different btn2"),console.log("Uploaded Image URL:",e),O=e,console.log("dataurl "+O),setTimeout((function(){!function(e){console.log("Rendering the result with imageUrl:",e)}(e),console.log("clicked different btn3")}),2e3)})).catch((function(e){console.error("Error:",e)}))}if(nextQuestionid.onclick=function(){if(1==document.querySelectorAll(".options-row .expanded-div").length&&1==document.querySelectorAll(".options-row .custom-expanded-div").length&&1==document.querySelectorAll(".options-row .custom-expanded-option").length){g.style.display="none",E.style.display="none",loadingscreen.style.display="block",kissesloadingvid.style.display="block",kissesloadingvid.play(),1===J&&setTimeout((function(){loadingscreen.style.display="none",m.style.zIndex=0,permissions.setAttribute("zappar-permissions-ui",""),_.style.display="block"}),6e3),h.innerHTML="".concat(R),q="Our bond can be described as ".concat(M," and that makes it special. Your ").concat(C," makes you a Super Sibling. You are the best I could ask for and I am sure with your crazy and determined attitude, all your dreams will turn into reality.<br>\n  This is my way of expressing what you mean to me. And for moments\n  <span>when words fall short,</span>"),console.log(q),completenote.innerHTML=q,document.querySelector(".message-wrapper").classList.remove("bar-message"),document.querySelector(".message-wrapper").classList.remove("hed-message"),document.querySelector(".message-wrapper").classList.add("kisses-message"),document.querySelector(".message-header h3").classList.remove("hed-note-text"),document.getElementById("msgclosebtn").classList.remove("hed-close-btn"),document.querySelector(".dynamic-name").classList.remove("hed-dynamic-name"),document.getElementById("completenote").classList.remove("hed-note-text");var e=document.getElementById("dynamicImg");e.classList.add("justify-content-center"),e.children[0].src="/images/say it with a kiss (brown).png",console.log(d.packtype),console.log("next"),r()}else f.classList.remove("invisible"),f.classList.add("visible")},nextQuestionid1.onclick=function(){if(1==document.querySelectorAll(".option-row-bars .expanded-div-bars").length&&1==document.querySelectorAll(".option-row-bars .new-expanded-div").length&&1==document.querySelectorAll(".option-row-bars .option-expanded").length){y.style.display="none",k.src="/images/hersheyslogo.png",k.parentElement.parentElement.classList.remove("justify-content-start"),k.parentElement.parentElement.classList.add("justify-content-center"),kissesloadingvid.style.display="none",E.style.display="block",loadingscreen.style.display="block",1===J&&setTimeout((function(){loadingscreen.style.display="none",permissions.setAttribute("zappar-permissions-ui",""),m.style.zIndex=0,console.log(d.packtype),console.log("next"),_.style.display="block"}),6e3),h.innerHTML="".concat(R),q="Our bond can be described as ".concat(M," and that makes it special.<br>\n    ").concat(C,".<br>\n    Whenever we’re together, I love how we bond over ").concat(D,", and make every moment special.<br>\n    This is my way of expressing what you mean to me, because stories with my cool sibling are #MeantToBeShared!"),console.log(q),completenote.innerHTML=q,document.querySelector(".message-wrapper").classList.add("bar-message"),document.querySelector(".message-wrapper").insertAdjacentHTML("beforeend",'<div class="bars-note-png"></div>'),document.querySelector(".message-header h3").classList.add("bars-note-text"),document.getElementById("msgclosebtn").classList.add("bars-close-btn"),document.querySelector(".dynamic-name").classList.add("bars-dynamic-name"),document.getElementById("completenote").classList.add("bars-note-text"),document.querySelector(".dynamic-note").style.height="320px",document.querySelector(".close-icon").style.zIndex="99";var e=document.getElementById("dynamicImg");e.classList.remove("dynamic-img"),e.classList.remove("justify-content-center"),e.classList.add("container-fluid"),e.classList.add("bars-dynamic-img"),e.children[0].style.width="100%",e.children[0].style.borderBottomLeftRadius="10px",e.children[0].style.borderBottomRightRadius="10px",e.children[0].src="/images/bars-bottom-img.png",r()}else v.classList.remove("invisible"),v.classList.add("visible")},nextQuestionid2.onclick=function(){if(1==document.querySelectorAll(".options-row .exotic-hershey").length&&1==document.querySelectorAll(".options-row .exotic-expanded-div").length&&1==document.querySelectorAll(".options-row .expanded-option").length){p.style.display="none",k.parentElement.parentElement.classList.remove("justify-content-start"),k.parentElement.parentElement.classList.add("justify-content-center"),k.src="/images/hed-logo.png",E.style.display="none",loadingscreen.style.display="block",exoticloadingvid.style.display="block",exoticloadingvid.play(),1===J&&setTimeout((function(){loadingscreen.style.display="none",m.style.zIndex=0,permissions.setAttribute("zappar-permissions-ui",""),_.style.display="block"}),6e3),h.innerHTML="".concat(R),q="We will forever be ".concat(M," for years to come. \n\n  Let's make this occasion special and bond over our idea of a perfect day - ").concat(C,", or spend time ").concat(D," just like old times<br>\n  \n  Thank you for being the best Sibling! You know I am in awe of you <span>😊</span> "),console.log(q),completenote.innerHTML=q,document.querySelector(".message-wrapper").classList.add("hed-message"),document.querySelector(".message-header h3").classList.add("hed-note-text"),document.getElementById("msgclosebtn").classList.add("hed-close-btn"),document.querySelector(".dynamic-name").classList.add("hed-dynamic-name"),document.getElementById("completenote").classList.add("hed-note-text");var e=document.getElementById("dynamicImg");e.classList.add("justify-content-start"),e.children[0].src="/images/hed-bottom-img.png",console.log(d.packtype),console.log("next"),r()}else b.classList.remove("invisible"),b.classList.add("visible")},document.getElementById("formId").addEventListener("submit",(function(e){e.preventDefault()})),console.log("init"),I=new URLSearchParams(document.location.search.substring(1)),B=new URLSearchParams(document.location.search.substring(2)),L=new URLSearchParams(document.location.search.substring(3)),x=new URLSearchParams(document.location.search.substring(4)),S=new URLSearchParams(document.location.search.substring(5)),T=new URLSearchParams(document.location.search.substring(6)),P=I.get("name")?I.get("name"):"friend",console.log(P),"friend"===P)receiverfirstscreen.style.display="none",firstscreen.style.display="block";else if(document.querySelector(".preview-text").style.display="none",receiverfirstscreen.style.display="block",firstscreen.style.display="none",send.classList.add("invisible"),A=B.get("name1"),U=L.get("name2"),j=x.get("name3"),F=S.get("name4"),R=T.get("name5"),console.log(R),console.log("Options="+U+" "+j+" "+F),console.log(A),console.log("receiver side"),"1"===A){console.log("pnametype"+A),O=P,G=13e3,o.setAttribute("gltf-model","/models/kisses .glb"),h.innerHTML="".concat(R),C=1===j?"Caring nature":2===j?"Delightfully annoying nature":"Giving mature advices",q="Our bond can be described as ".concat(M=1===U?"Sweet Troublemakers":2===U?"Partners in crime":"Top Secret keepers"," and that makes it special. Your ").concat(C," makes you a Super Sibling. You are the best I could ask for and I am sure with your crazy and determined attitude, all your dreams will turn into reality.<br>\n        This is my way of expressing what you mean to me. And for moments\n        <span>when words fall short,</span>"),console.log(q),completenote.innerHTML=q,document.querySelector(".message-wrapper").classList.add("kisses-message");var c=document.getElementById("dynamicImg");c.classList.add("justify-content-center"),c.children[0].src="/images/say it with a kiss (brown).png"}else if("2"===A){console.log("pnametype"+A),O=P,G=11e3,o.setAttribute("gltf-model","/models/bars final.glb"),h.innerHTML="".concat(R),C=1===j?"You are a closet rockstar, unleashing brilliance and leaving everyone in awe":2===j?"You are always in FOMO mode, eager to seize every opportunity and get the best out of it":"You are the Ultimate Foodie, never hesitating to try new and exciting cuisines",D=1===F?"Music":2===F?"Street food":"Gaming",q="Our bond can be described as ".concat(M=1===U?"Sweet Siblings":2===U?"Nutty Friends":"Trusted Partners"," and that makes it special.<br>\n           ").concat(C,".<br>\n           Whenever we’re together, I love how we bond over ").concat(D,", and make every moment special."),console.log(q),completenote.innerHTML=q,document.querySelector(".message-wrapper").classList.add("bar-message"),document.querySelector(".message-wrapper").insertAdjacentHTML("beforeend",'<div class="bars-note-png"></div>'),document.querySelector(".message-header h3").classList.add("bars-note-text"),document.getElementById("msgclosebtn").classList.add("bars-close-btn"),document.querySelector(".dynamic-name").classList.add("bars-dynamic-name"),document.getElementById("completenote").classList.add("bars-note-text"),document.querySelector(".dynamic-note").style.height="320px",document.querySelector(".close-icon").style.zIndex="99";var a=document.getElementById("dynamicImg");a.classList.remove("dynamic-img"),a.classList.remove("justify-content-center"),a.classList.add("container-fluid"),a.classList.add("bars-dynamic-img"),a.children[0].style.width="100%",a.children[0].src="/images/bars-bottom-img.png"}else if("3"===A){console.log("pnametype"+A),O=P,G=17e3,o.setAttribute("gltf-model","/models/exotic darkv13.glb"),h.innerHTML="".concat(R),C=1===j?"Wine & Chocolates at Home":2===j?"Sundowners at Beach Resort":"Bollywood Music Festival ",D=1===F?"Discussing family":2===F?"Remembering childhood days":"Laughing at Silly Jokes ",q="We will forever be ".concat(M=1===U?"Berry Good Friends":2===U?"Nutty Partners":"Trusted Confidantes"," for years to come. \n\n           Let's make this occasion special and bond over our idea of a perfect day - ").concat(C,", or spend time ").concat(D," just like old times<br>\n           \n           Thank you for being the best Sibling! You know I am in awe of you <span>😊</span>"),console.log(q),completenote.innerHTML=q,document.querySelector(".message-wrapper").classList.add("hed-message"),document.querySelector(".message-header h3").classList.add("hed-note-text"),document.getElementById("msgclosebtn").classList.add("hed-close-btn"),document.querySelector(".dynamic-name").classList.add("hed-dynamic-name"),document.getElementById("completenote").classList.add("hed-note-text");var s=document.getElementById("dynamicImg");s.classList.add("justify-content-start"),s.children[0].src="/images/hed-bottom-img.png"}document.getElementById("receiverbtn").addEventListener("click",(function(){bgaudio.play(),receiverfirstscreen.style.display="none",m.style.zIndex=0,permissions.setAttribute("zappar-permissions-ui",""),_.style.display="block"})),e.onclick=function(){messagenote.style.display="none",o.setAttribute("animation-mixer",{timeScale:1})},i.addEventListener("click",(function(e){console.log("envolope clicked"),tapOnEnvelope.style.display="none",messagenote.style.display="block",i.setAttribute("class","")})),(_=document.getElementById("tap-to-place")||document.createElement("div")).addEventListener("click",(function(){!function(){Ee.apply(this,arguments)}(),function(){var e;"kisses"===u||"1"===A?(console.log("kisses"),e=o.getObject3D("mesh").children[4].children[3],console.log(o.getObject3D("mesh")),console.log(o.getObject3D("mesh").children[4].children[3])):"chocolatebar"===u||"2"===A?(console.log("bar"),e=o.getObject3D("mesh").children[2].children[2],console.log(o.getObject3D("mesh")),console.log(o.getObject3D("mesh").children[2].children[2])):"exotic"!==u&&"3"!==A||(console.log("exotic"),e=o.getObject3D("mesh").children[1].children[5],console.log(o.getObject3D("mesh")),console.log(o.getObject3D("mesh").children[1].children[5]));var t=document.getElementById("rakhi"),i=O,r=new Image;r.src=i,r.onload=function(){var o=document.createElement("canvas"),i=1024,c=1024,a=r.width/2-512,s=r.height/2-512;o.width=i,o.height=c,o.getContext("2d").drawImage(r,a,s,i,c,0,0,i,c);var l=o.toDataURL();t.src=l,console.log("www"+O),e.material.map=n.load(t.src),console.log(O),e.material.map.flipY=!1}}(),sharepopupdiv.style.display="block",arscreen.style.display="block",document.getElementById("instant-tracker").setAttribute("zappar-instant","placement-mode: false"),_.remove(),setTimeout((function(){o.setAttribute("animation-mixer",{clip:"Animation",loop:"once",crossFadeDuration:.4,clampWhenFinished:!0}),setTimeout((function(){0===H&&(o.setAttribute("animation-mixer",{timeScale:0}),tapOnEnvelope.style.display="block",console.log("tap 1300"),i.setAttribute("class","cantap"))}),G)}),1e3)}))}}),document.getElementById("sendthankyou").addEventListener("click",(function(){document.getElementById("siblingname").focus()})),document.getElementById("sendgift").addEventListener("click",(function(){document.getElementById("siblingname").focus()}));var Le=document.getElementById("siblingname"),xe=document.getElementById("hoverChange");Le.addEventListener("input",(function(){Le.value.length>6&&xe.focus()})),document.getElementById("sendthankyou").addEventListener("click",(function(){document.getElementById("changeTextScreen").textContent="Say thankyou to"}))})()})();


/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'three'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '@zappar/zappar-threejs'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'three/examples/jsm/loaders/GLTFLoader'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);\n/// Zappar for ThreeJS Examples\n/// Instant Tracking 3D Model\n\n// In this example we track a 3D model using instant world tracking\n\n\n\n\nconst model = new URL(/* asset import */ __webpack_require__(/*! ../assets/box.glb */ \"./assets/box.glb\"), __webpack_require__.b).href;\n\n// The SDK is supported on many different browsers, but there are some that\n// don't provide camera access. This function detects if the browser is supported\n// For more information on support, check out the readme over at\n// https://www.npmjs.com/package/@zappar/zappar-threejs\nif (Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '@zappar/zappar-threejs'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())()) {\n  // The browserIncompatibleUI() function shows a full-page dialog that informs the user\n  // they're using an unsupported browser, and provides a button to 'copy' the current page\n  // URL so they can 'paste' it into the address bar of a compatible alternative.\n  Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '@zappar/zappar-threejs'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\n\n  // If the browser is not compatible, we can avoid setting up the rest of the page\n  // so we throw an exception here.\n  throw new Error('Unsupported browser');\n}\n\n// ZapparThree provides a LoadingManager that shows a progress bar while\n// the assets are downloaded. You can use this if it's helpful, or use\n// your own loading UI - it's up to you :-)\nconst manager = new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '@zappar/zappar-threejs'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\n\n// Construct our ThreeJS renderer and scene as usual\nconst renderer = new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'three'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({\n  antialias: true\n});\nconst scene = new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'three'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\ndocument.body.appendChild(renderer.domElement);\n\n// As with a normal ThreeJS scene, resize the canvas if the window resizes\nrenderer.setSize(window.innerWidth, window.innerHeight);\nwindow.addEventListener('resize', () => {\n  renderer.setSize(window.innerWidth, window.innerHeight);\n});\n\n// Create a Zappar camera that we'll use instead of a ThreeJS camera\nconst camera = new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '@zappar/zappar-threejs'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\n\n// In order to use camera and motion data, we need to ask the users for permission\n// The Zappar library comes with some UI to help with that, so let's use it\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '@zappar/zappar-threejs'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())().then(granted => {\n  // If the user granted us the permissions we need then we can start the camera\n  // Otherwise let's them know that it's necessary with Zappar's permission denied UI\n  if (granted) camera.start();else Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '@zappar/zappar-threejs'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\n});\n\n// The Zappar component needs to know our WebGL context, so set it like this:\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '@zappar/zappar-threejs'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(renderer.getContext());\n\n// Set the background of our scene to be the camera background texture\n// that's provided by the Zappar camera\nscene.background = camera.backgroundTexture;\n\n// Create an InstantWorldTracker and wrap it in an InstantWorldAnchorGroup for us\n// to put our ThreeJS content into\nconst instantTracker = new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '@zappar/zappar-threejs'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\nconst instantTrackerGroup = new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '@zappar/zappar-threejs'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(camera, instantTracker);\nvar texture;\nvar loader;\nvar output;\nconst copy = document.getElementById(\"copy\");\nlet params;\nlet pName;\nvar dataURL;\nvar mimeType;\nparams = new URLSearchParams(document.location.search.substring(1));\npName = params.get('name') ? params.get('name') : 'friend';\nconsole.log(pName);\n\n// let str = \"A+com&puter$sc/i=nce$portal$for$Geeks\";\n// var str\n// var newStr\n// function gfg_Run() {\n//   console.log(\"encode\")\n//   str = pName\n//   newStr = \"\";\n\n//   for (let i = 0; i < str.length; i++) {\n//     if (str[i] == '+') {\n//       newStr += '.';\n//     }\n//     else {\n//       newStr += str[i];\n//     }\n//   }\n//   str = \"\"\n//   for (let i = 0; i < newStr.length; i++) {\n//     if (newStr[i] == '/') {\n//       str += '_';\n//     }\n//     else {\n//       str += newStr[i];\n//     }\n//   }\n//   newStr = \"\"\n//   for (let i = 0; i < str.length; i++) {\n//     if (str[i] == '=') {\n//       newStr += '-';\n//     }\n//     else {\n//       newStr += str[i];\n//     }\n//   }\n\n//   // alert(newStr);\n//   pName = newStr\n\n// }\n\n// function gfg_Rundec() {\n//   console.log(\"decode\")\n//   newStr = pName\n//   let str = \"\";\n\n//   for (let i = 0; i < newStr.length; i++) {\n//     if (newStr[i] == '.') {\n//       str += '+';\n//     }\n//     else {\n//       str += newStr[i];\n//     }\n//   }\n//   newStr = \"\"\n//   for (let i = 0; i < str.length; i++) {\n//     if (str[i] == '_') {\n//       newStr += '/';\n//     }\n//     else {\n//       newStr += str[i];\n//     }\n//   }\n//   str = \"\"\n//   for (let i = 0; i < newStr.length; i++) {\n//     if (newStr[i] == '-') {\n//       str += '=';\n//     }\n//     else {\n//       str += newStr[i];\n//     }\n//   }\n//   // alert(str);\n//   pName = str\n//   dataURL = pName\n//   console.log(\"111111111111111\" + dataURL)\n\n// }\n\n//copy to clipboard function\nconst copyToClipboard = e => {\n  const el = document.createElement('textarea');\n  el.value = e;\n  document.body.appendChild(el);\n  Object.assign(el.style, {\n    zIndex: '-99999',\n    position: 'absolute'\n  });\n  const userAgent = navigator.userAgent || navigator.vendor || window.opera;\n  if (/iPads|iPod/.test(userAgent) && !window.MSStream) {\n    el.contentEditable = true;\n    el.readOnly = false;\n    const s = window.getSelection();\n    s.removeAllRanges();\n    const range = document.createRange();\n    range.selectNodeContents(el);\n    s.addRange(range);\n    el.setSelectionRange(0, 999999);\n  } else {\n    el.select();\n  }\n  document.execCommand('copy');\n  document.body.removeChild(el);\n};\ncopy.onclick = function () {\n  console.log(\"copy clicked\");\n  // gfg_Run();\n  console.log(pName);\n  copyToClipboard(`https://localhost:1234/index.js?name=${pName}`);\n};\n\n// image fill function\nfunction drawImageScaled(img, ctx) {\n  var canvas = ctx.canvas;\n  var hRatio = canvas.width / img.width;\n  var vRatio = canvas.height / img.height;\n  var ratio = Math.min(hRatio, vRatio);\n  var centerShift_x = (canvas.width - img.width * ratio) / 2;\n  var centerShift_y = (canvas.height - img.height * ratio) / 2;\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n  ctx.drawImage(img, 0, 0, img.width, img.height, centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);\n}\n//convert base64 to blob\nfunction b64toBlob(b64Data, contentType, sliceSize) {\n  contentType = contentType || '';\n  sliceSize = sliceSize || 512;\n  var byteCharacters = atob(b64Data);\n  var byteArrays = [];\n  for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {\n    var slice = byteCharacters.slice(offset, offset + sliceSize);\n    var byteNumbers = new Array(slice.length);\n    for (var i = 0; i < slice.length; i++) {\n      byteNumbers[i] = slice.charCodeAt(i);\n    }\n    var byteArray = new Uint8Array(byteNumbers);\n    byteArrays.push(byteArray);\n  }\n  var blob = new Blob(byteArrays, {\n    type: contentType\n  });\n  return blob;\n}\n//default image in blob\nvar contentType = 'image/png';\nvar b64Data = 'iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEV4r8729vb39/f1+Pt4q8u71OV4rMm71eT39/n1+Pz19fX2+Pn39/XZ5u670+J2qMdJ1ZSjAAABz0lEQVR4nO3U23KDIBgAYfGIiub937ZoYpL2up3M/t0douSObwCbnNpS2qOU2khV1Zrru0nBa5s2lfs0X5NYHcLYBRcu78L80aX8TRX4EuYuWPN6sMqaH8J126dhiDT2rZ7KpTz3cN5v49hHGre9O2WXsJuaYI3T/BDer2E39J9e0i83Dvc9TFVYQgr7u3BJ1ykNJxynH/dQIS6F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIb9/KNxv/dk4PgZ9Pk5zKuUlXLd9OJuuQZ9PW07pTZhyF6y5Ape3U7qkqMUVlofpFNb9TEs04/GVue7h01Y+uKA/avkujFjbNjnXZ5vr7/gbqnw+vgB2C0ejZ/UGZAAAAABJRU5ErkJggg==';\n\n// console.log(blobUrl);\n\n//var img = document.createElement('img');\n//img.src = blobUrl;\n//document.body.appendChild(img);\n\n// ## Example 2 - Using fetch\n\nvar url = 'data:image/png;filename=image.png;base64,' + b64Data;\nvar blobUrl;\nfetch(url).then(res => res.blob()).then(URL.createObjectURL).then(ret => {\n  blobUrl = ret;\n  return blobUrl;\n}).then(console.log);\nvar linkEl = document.createElement('a');\nlinkEl.href = blobUrl;\n// dataURL=blobUrl\ndocument.body.appendChild(linkEl);\n// dataURL=blobUrl\n\n// to load the model\nconst gltfLoader = new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'three/examples/jsm/loaders/GLTFLoader'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(manager);\ngltfLoader.load(model, gltf => {\n  // gfg_Rundec();\n\n  //traverse mesh \n  function traversal() {\n    gltf.scene.traverse(function (child) {\n      if (child.name === \"Cube001_1\") {\n        // dataURL = blobUrl\n        // pName = dataURL\n        dataURL = pName;\n        console.log(\"cube texture loaded\");\n        loader = new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'three'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\n        texture = loader.load(dataURL);\n        console.log(22222 + dataURL);\n        child.material.map = texture;\n        child.material.map.flipY = false;\n      }\n    });\n  }\n  traversal();\n  //upload button\n  document.getElementById(\"fname\").onchange = function () {\n    preview_image(event);\n  };\n  function preview_image(event) {\n    var reader = new FileReader();\n    reader.onload = function () {\n      console.log(\"image upload clicked\");\n      output = document.getElementById('output_image');\n      output.src = reader.result;\n      console.log(output.src);\n      dataURL = output.src;\n      // dataURL=blobUrl\n\n      const file = event.target.files[0];\n      contentType = file.type;\n      if (contentType === \"image/jpeg\") {\n        console.log(contentType);\n        b64Data = dataURL.substring(23, dataURL.length);\n      } else if (contentType === \"image/png\") {\n        console.log(contentType);\n        b64Data = dataURL.substring(22, dataURL.length);\n      }\n      var blob = b64toBlob(b64Data, contentType);\n      blobUrl = URL.createObjectURL(blob);\n      dataURL = blobUrl;\n      pName = dataURL;\n      traversal();\n      // gltf.scene.traverse(function (child) {..\n\n      //   if (child.name === \"Cube001_1\") {\n      //     console.log(\"model loaded\")\n      //     loader = new THREE.TextureLoader()\n      //     texture = loader.load(dataURL)\n\n      //     child.material.map = texture;\n      //     child.material.map.flipY = false\n      //   }\n      // })\n    };\n\n    reader.readAsDataURL(event.target.files[0]);\n  }\n\n  //div texture image \n  var imageElement = document.getElementById('profileCameraImage');\n  var canvas = document.createElement('canvas');\n  var context = canvas.getContext('2d');\n  canvas.width = 350;\n  canvas.height = 350;\n  drawImageScaled(imageElement, context);\n  // context.drawImage(imageElement, 20, 20);\n  dataURL = canvas.toDataURL('image/jpg');\n  console.log(dataURL);\n  scene.add(instantTrackerGroup);\n  const elem = document.querySelector('#screenshot');\n  elem.addEventListener('click', () => {\n    canvas.toBlob(blob => {\n      saveBlob(blob, `screencapture-${canvas.width}x${canvas.height}.png`);\n      console.log(blob);\n    });\n  });\n  const saveBlob = function () {\n    const a = document.createElement('a');\n    document.body.appendChild(a);\n    a.style.display = 'block';\n    return function saveData(blob, fileName) {\n      const url = window.URL.createObjectURL(blob);\n      a.href = url;\n      a.download = fileName;\n      a.click();\n      //  texture = loader.load(require('../assets/trees.jpg'))\n      //  console.log(\"base   \"+dataURL)\n    };\n  }();\n  // Now the model has been loaded, we can add it to our instant_tracker_group\n  instantTrackerGroup.add(gltf.scene);\n\n  // init() {\n  // console.log(\"init\")\n  // const {src} = document.getElementById('imageFile')\n\n  // const modelname=document.getElementById('modelname')\n  // this.el.addEventListener('click', (event) => {\n  // console.log(\"init\")\n\n  // const modelobject = model.getObject3D('mesh').getObjectByName('Cube001_1')\n  // console.log(modelobject)\n  // modelobject.material.map = THREE.ImageUtils.loadTexture('../assets/grunge-paint-background.jpg');\n\n  // modelobject.material.needsUpdate = true;\n  // model.material.map = loader.load(src)\n  // set flipY to false to correclty rotate texture\n  // model.material.map.flipY = false\n  // })\n  // },\n}, undefined, () => {\n  console.log('An error ocurred loading the GLTF model');\n});\n// Let's add some lighting, first a directional light above the model pointing down\nconst directionalLight = new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'three'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('white', 0.8);\ndirectionalLight.position.set(0, 5, 0);\ndirectionalLight.lookAt(0, 0, 0);\ninstantTrackerGroup.add(directionalLight);\n\n// And then a little ambient light to brighten the model up a bit\nconst ambientLight = new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'three'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('white', 1.4);\ninstantTrackerGroup.add(ambientLight);\n\n// When the experience loads we'll let the user choose a place in their room for\n// the content to appear using setAnchorPoseFromCameraOffset (see below)\n// The user can confirm the location by tapping on the screen\nlet hasPlaced = false;\nconst placeButton = document.getElementById('tap-to-place') || document.createElement('div');\nplaceButton.addEventListener('click', () => {\n  hasPlaced = true;\n  placeButton.remove();\n});\n\n// Use a function to render our scene as usual\nfunction render() {\n  if (!hasPlaced) {\n    // If the user hasn't chosen a place in their room yet, update the instant tracker\n    // to be directly in front of the user\n    instantTrackerGroup.setAnchorPoseFromCameraOffset(0, 0, -5);\n  }\n\n  // The Zappar camera must have updateFrame called every frame\n  camera.updateFrame(renderer);\n\n  // Draw the ThreeJS scene in the usual way, but using the Zappar camera\n  renderer.render(scene, camera);\n\n  // Call render() again next frame\n  requestAnimationFrame(render);\n}\n\n// Start things off\nrender();\n\n//# sourceURL=webpack://sample-test-code/./src/index.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected character '@' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> @import url(\\\"https://webglfundamentals.org/webgl/resources/webgl-tutorials.css\\\");\\n| \\n| html,\");\n\n//# sourceURL=webpack://sample-test-code/./src/index.css?");

/***/ }),

/***/ "./assets/box.glb":
/*!************************!*\
  !*** ./assets/box.glb ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"fcec7b3aa9a46b5470ce.glb\";\n\n//# sourceURL=webpack://sample-test-code/./assets/box.glb?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
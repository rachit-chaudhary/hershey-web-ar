/// Zappar for ThreeJS Examples
/// Instant Tracking 3D Model

// In this example we track a 3D model using instant world tracking

import * as THREE from 'three';
import * as ZapparThree from '@zappar/zappar-threejs';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import ZAPPPermissionUI from './modules/permission-ui'
import UImodule from './modules/webexperience-ui'


const model = new URL('../public/models/box.glb', import.meta.url).href;
//import '../public/main.css';
// The SDK is supported on many different browsers, but there are some that
// don't provide camera access. This function detects if the browser is supported
// For more information on support, check out the readme over at
// https://www.npmjs.com/package/@zappar/zappar-threejs
if (ZapparThree.browserIncompatible()) {
  // The browserIncompatibleUI() function shows a full-page dialog that informs the user
  // they're using an unsupported browser, and provides a button to 'copy' the current page
  // URL so they can 'paste' it into the address bar of a compatible alternative.
  ZapparThree.browserIncompatibleUI();

  // If the browser is not compatible, we can avoid setting up the rest of the page
  // so we throw an exception here.
  throw new Error('Unsupported browser');
}

// ZapparThree provides a LoadingManager that shows a progress bar while
// the assets are downloaded. You can use this if it's helpful, or use
// your own loading UI - it's up to you :-)
const manager = new ZapparThree.LoadingManager();

// Construct our ThreeJS renderer and scene as usual
const renderer = new THREE.WebGLRenderer({ antialias: true });
const scene = new THREE.Scene();
document.body.appendChild(renderer.domElement);

// As with a normal ThreeJS scene, resize the canvas if the window resizes
renderer.setSize(window.innerWidth, window.innerHeight);
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Create a Zappar camera that we'll use instead of a ThreeJS camera
const camera = new ZapparThree.Camera();

// In order to use camera and motion data, we need to ask the users for permission
// The Zappar library comes with some UI to help with that, so let's use it
ZapparThree.permissionRequestUI().then((granted) => {
  // If the user granted us the permissions we need then we can start the camera
  // Otherwise let's them know that it's necessary with Zappar's permission denied UI
  if (granted) camera.start();
  else ZapparThree.permissionDeniedUI();
});

// The Zappar component needs to know our WebGL context, so set it like this:
ZapparThree.glContextSet(renderer.getContext());

// Set the background of our scene to be the camera background texture
// that's provided by the Zappar camera
scene.background = camera.backgroundTexture;

// Create an InstantWorldTracker and wrap it in an InstantWorldAnchorGroup for us
// to put our ThreeJS content into
// const instantTracker = new ZapparThree.InstantWorldTracker();
// const instantTrackerGroup = new ZapparThree.InstantWorldAnchorGroup(camera, instantTracker);
// var texture
// var loader
let output
// const copy = document.getElementById("copy")
// let params
// let pName
// var dataURL
// var mimeType
// params = new URLSearchParams(document.location.search.substring(1))

// pName = params.get('name') ? params.get('name') : 'friend'
// console.log(pName)






// //copy to clipboard function
// const copyToClipboard = (e) => {
//   const el = document.createElement('textarea')
//   el.value = e
//   document.body.appendChild(el)
//   Object.assign(el.style, {
//     zIndex: '-99999',
//     position: 'absolute',
//   })

//   const userAgent = navigator.userAgent || navigator.vendor || window.opera
//   if (/iPads|iPod/.test(userAgent) && !window.MSStream) {
//     el.contentEditable = true
//     el.readOnly = false
//     const s = window.getSelection()
//     s.removeAllRanges()

//     const range = document.createRange()
//     range.selectNodeContents(el)
//     s.addRange(range)

//     el.setSelectionRange(0, 999999)
//   } else {
//     el.select()
//   }

//   document.execCommand('copy')
//   document.body.removeChild(el)
// }
// copy.onclick = function () {
//   console.log("copy clicked")
//   // gfg_Run();
//   console.log(pName)
//   copyToClipboard(`https://localhost:1234/index.js?name=${pName}`)
// }


// // image fill function
// function drawImageScaled(img, ctx) {
//   var canvas = ctx.canvas;
//   var hRatio = canvas.width / img.width;
//   var vRatio = canvas.height / img.height;
//   var ratio = Math.min(hRatio, vRatio);
//   var centerShift_x = (canvas.width - img.width * ratio) / 2;
//   var centerShift_y = (canvas.height - img.height * ratio) / 2;
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   ctx.drawImage(img, 0, 0, img.width, img.height,
//     centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
// }
// //convert base64 to blob
// function b64toBlob(b64Data, contentType, sliceSize) {
//   contentType = contentType || '';
//   sliceSize = sliceSize || 512;

//   var byteCharacters = atob(b64Data);
//   var byteArrays = [];

//   for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
//     var slice = byteCharacters.slice(offset, offset + sliceSize);

//     var byteNumbers = new Array(slice.length);
//     for (var i = 0; i < slice.length; i++) {
//       byteNumbers[i] = slice.charCodeAt(i);
//     }

//     var byteArray = new Uint8Array(byteNumbers);

//     byteArrays.push(byteArray);
//   }

//   var blob = new Blob(byteArrays, { type: contentType });
//   return blob;
// }
// //default image in blob
// var contentType = 'image/png';
// var b64Data = 'iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEV4r8729vb39/f1+Pt4q8u71OV4rMm71eT39/n1+Pz19fX2+Pn39/XZ5u670+J2qMdJ1ZSjAAABz0lEQVR4nO3U23KDIBgAYfGIiub937ZoYpL2up3M/t0douSObwCbnNpS2qOU2khV1Zrru0nBa5s2lfs0X5NYHcLYBRcu78L80aX8TRX4EuYuWPN6sMqaH8J126dhiDT2rZ7KpTz3cN5v49hHGre9O2WXsJuaYI3T/BDer2E39J9e0i83Dvc9TFVYQgr7u3BJ1ykNJxynH/dQIS6F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIb9/KNxv/dk4PgZ9Pk5zKuUlXLd9OJuuQZ9PW07pTZhyF6y5Ape3U7qkqMUVlofpFNb9TEs04/GVue7h01Y+uKA/avkujFjbNjnXZ5vr7/gbqnw+vgB2C0ejZ/UGZAAAAABJRU5ErkJggg=='

// // console.log(blobUrl);

// //var img = document.createElement('img');
// //img.src = blobUrl;
// //document.body.appendChild(img);

// // ## Example 2 - Using fetch

// var url = 'data:image/png;filename=image.png;base64,' + b64Data;
// var blobUrl;
// fetch(url)
//   .then(res => res.blob())
//   .then(URL.createObjectURL)
//   .then((ret) => { blobUrl = ret; return blobUrl; })
//   .then(console.log)

// var linkEl = document.createElement('a')
// linkEl.href = blobUrl;
// // dataURL=blobUrl
// document.body.appendChild(linkEl);
// // dataURL=blobUrl

// // to load the model
// const gltfLoader = new GLTFLoader(manager);
// gltfLoader.load(model, (gltf) => {
//   // gfg_Rundec();

//   //traverse mesh 
//   function traversal() {
//     gltf.scene.traverse(function (child) {
//       if (child.name === "Cube001_1") {
//         // dataURL = blobUrl
//         // pName = dataURL
//         dataURL = pName
//         console.log("cube texture loaded")
//         loader = new THREE.TextureLoader()
//         texture = loader.load(dataURL)
//         console.log(22222 + dataURL)
//         child.material.map = texture;
//         child.material.map.flipY = false
//       }
//     })
//   }
//   traversal()
  //upload button
  document.getElementById("uploadbtn").onchange = function () { preview_image(event) };
  function preview_image(event) {
    var reader = new FileReader();
    reader.onload = function () {
      console.log("image upload clicked")

      output = document.getElementById('galleryimg');
      output.src = reader.result;
      console.log(output.src)
    
    
    }
    reader.readAsDataURL(event.target.files[0]);
  }

//   //div texture image 
//   var imageElement = document.getElementById('profileCameraImage')
//   var canvas = document.createElement('canvas');
//   var context = canvas.getContext('2d');

//   canvas.width = 350;
//   canvas.height = 350;
//   drawImageScaled(imageElement, context)
//   // context.drawImage(imageElement, 20, 20);
//   dataURL = canvas.toDataURL('image/jpg');
//   console.log(dataURL)

//   scene.add(instantTrackerGroup);
//   const elem = document.querySelector('#screenshot');
//   elem.addEventListener('click', () => {

//     canvas.toBlob((blob) => {
//       saveBlob(blob, `screencapture-${canvas.width}x${canvas.height}.png`);
//       console.log(blob)
//     });
//   });
//   const saveBlob = (function () {
//     const a = document.createElement('a');
//     document.body.appendChild(a);
//     a.style.display = 'block';
//     return function saveData(blob, fileName) {
//       const url = window.URL.createObjectURL(blob);
//       a.href = url;
//       a.download = fileName;
//       a.click();
//       //  texture = loader.load(require('../assets/trees.jpg'))
//       //  console.log("base   "+dataURL)

//     };
//   }());
//   // Now the model has been loaded, we can add it to our instant_tracker_group
//   instantTrackerGroup.add(gltf.scene);



// }, undefined, () => {
//   console.log('An error ocurred loading the GLTF model');
// });
// // Let's add some lighting, first a directional light above the model pointing down
// const directionalLight = new THREE.DirectionalLight('white', 0.8);
// directionalLight.position.set(0, 5, 0);
// directionalLight.lookAt(0, 0, 0);
// instantTrackerGroup.add(directionalLight);

// // And then a little ambient light to brighten the model up a bit
// const ambientLight = new THREE.AmbientLight('white', 1.4);
// instantTrackerGroup.add(ambientLight);

// // When the experience loads we'll let the user choose a place in their room for
// // the content to appear using setAnchorPoseFromCameraOffset (see below)
// // The user can confirm the location by tapping on the screen
// let hasPlaced = false;
// const placeButton = document.getElementById('tap-to-place') || document.createElement('div');
// placeButton.addEventListener('click', () => {
//   hasPlaced = true;
//   placeButton.remove();
// });

// // Use a function to render our scene as usual
// function render() {

//   if (!hasPlaced) {
//     // If the user hasn't chosen a place in their room yet, update the instant tracker
//     // to be directly in front of the user
//     instantTrackerGroup.setAnchorPoseFromCameraOffset(0, 0, -5);
//   }

//   // The Zappar camera must have updateFrame called every frame
//   camera.updateFrame(renderer);

//   // Draw the ThreeJS scene in the usual way, but using the Zappar camera
//   renderer.render(scene, camera);

//   // Call render() again next frame
//   requestAnimationFrame(render);
// }

// // Start things off
// render();



// modules code
new UImodule()
new ZAPPPermissionUI()
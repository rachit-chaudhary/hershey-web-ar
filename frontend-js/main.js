/// Zappar for ThreeJS Examples
/// Instant Tracking 3D Model

// In this example we track a 3D model using instant world tracking

// import * as THREE from 'three';
// import * as ZapparThree from '@zappar/zappar-threejs';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import {rgbe} from 'C:\Users\march\Downloads\hersheys_final\node_modules\three\examples\js\loaders\RGBELoader.js'
import ZAPPPermissionUI from './modules/permission-ui'
import { UImodule } from './modules/webexperience-ui'


let imagevalue


// modules code
const uimoduleobj = new UImodule();
new ZAPPPermissionUI()

const model = new URL('/public/models/kisses .glb', import.meta.url).href;
const hotspotImg = new URL('/public/images/hotspot.png', import.meta.url).href;
const scene = document.getElementById("scenediv")
let thirdscreenbar = document.getElementById("thirdscreen-bar")
let thirdscreen = document.getElementById("thirdscreen")
let thirdscreenexotic = document.getElementById("thirdscreen-exotic")
let typeofpack
// let headerlogo = document.getElementById("headerlogo")
scene.style.zIndex = -1
secondscreen.style.display = "none"
uploadingDiv.style.display = "none"
const inputElement = document.querySelector('#siblingname');
let hereGoesID = document.getElementById("#hereGoesID")

//questions hiding DOM elements
const questionAlert = document.querySelector(".alert-check-questions")
const questionAlertClose = document.getElementById("alertCloseBtn")

questionAlertClose.onclick = () => {
  questionAlert.classList.remove("visible")
  questionAlert.classList.add("invisible")
}
// bar alert
const questionAlertbar = document.querySelector(".alert-check-questions-bar")
const questionAlertbarClose = document.getElementById("alertClosebarBtn")

questionAlertbarClose.onclick = () => {
  questionAlertbar.classList.remove("visible")
  questionAlertbar.classList.add("invisible")
}
//exotic
const questionAlertexotic = document.querySelector(".alert-check-questions-exotic")
const questionAlertexoticClose = document.getElementById("alertCloseexoticBtn")

questionAlertexoticClose.onclick = () => {
  questionAlertexotic.classList.remove("visible")
  questionAlertexotic.classList.add("invisible")
}
let loadingHeader = document.getElementById("loadingHeader")
let barsLoadingMedia = document.querySelector(".bars-casacade-loading")
// alert("i")

// firstscreen.style.display = "none"
// scene.style.display="block"
sendgift.onclick = () => {
  firstscreen.style.display = "none"
  scene.style.display = "block"
  // inputElement.focus();
  bgaudio.play()



  secondscreen.style.display = "block"
}
sendthankyou.onclick = () => {
  firstscreen.style.display = "none"
  scene.style.display = "block"
  // inputElement.focus();
  bgaudio.play()



  secondscreen.style.display = "block"
}
//import '../public/main.css';
// The SDK is supported on many different browsers, but there are some that
// don't provide camera access. This function detects if the browser is supported
// For more information on support, check out the readme over at
// https://www.npmjs.com/package/@zappar/zappar-threejs
// if (ZapparThree.browserIncompatible()) {
//   // The browserIncompatibleUI() function shows a full-page dialog that informs the user
//   // they're using an unsupported browser, and provides a button to 'copy' the current page
//   // URL so they can 'paste' it into the address bar of a compatible alternative.
//   ZapparThree.browserIncompatibleUI();

//   // If the browser is not compatible, we can avoid setting up the rest of the page
//   // so we throw an exception here.
//   throw new Error('Unsupported browser');
// }

// ZapparThree provides a LoadingManager that shows a progress bar while
// the assets are downloaded. You can use this if it's helpful, or use
// your own loading UI - it's up to you :-)
// const manager = new ZapparThree.LoadingManager();

// // Construct our ThreeJS renderer and scene as usual
// const renderer = new THREE.WebGLRenderer({ antialias: true},
//   {colorManagement: true },
//   {sortObjects: true},
//   // {physicallyCorrectLights: true},
//   {maxCanvasWidth: 1920},
//   { maxCanvasHeight: 1920}
//   );
//   renderer.shadowMap.type = THREE.PCFSoftShadowMap;
//   // renderer.outputEncoding = sRGBEncoding
// // renderer.toneMapping = ACESFilmicToneMapping
//   renderer.physicallyBasedLights = true
// const scene = new THREE.Scene();
// document.body.appendChild(renderer.domElement);

// // As with a normal ThreeJS scene, resize the canvas if the window resizes
// renderer.setSize(window.innerWidth, window.innerHeight);
// window.addEventListener('resize', () => {
//   renderer.setSize(window.innerWidth, window.innerHeight);
// });

// // Create a Zappar camera that we'll use instead of a ThreeJS camera
// const camera = new ZapparThree.Camera();

// In order to use camera and motion data, we need to ask the users for permission
// The Zappar library comes with some UI to help with that, so let's use it
// ZapparThree.permissionRequestUI().then((granted) => {
//   // If the user granted us the permissions we need then we can start the camera
//   // Otherwise let's them know that it's necessary with Zappar's permission denied UI
//   if (granted) camera.start();
//   else ZapparThree.permissionDeniedUI();
// });

// // The Zappar component needs to know our WebGL context, so set it like this:
// ZapparThree.glContextSet(renderer.getContext());

// // Set the background of our scene to be the camera background texture
// // that's provided by the Zappar camera
// scene.background = camera.backgroundTexture;


// const instantTracker = new ZapparThree.InstantWorldTracker();
// const instantTrackerGroup = new ZapparThree.InstantWorldAnchorGroup(camera, instantTracker);
var texture
var loader
var output
const copy = document.getElementById("copy")
let params
let params1
let params2, params3, params4, params5
let pNametype
let pName
let op1, op2, op3
var dataURL
var mimeType
var msg
let name
let i = 1
let pausevalue = 0
let previouspausevalue = 0
let innerpausevalue = 1
let animtime = 0
let taptoplace = document.getElementById('tap-to-place')
let modelloaded = 0
// const clock = new THREE.Clock();
// let mixer= new THREE.AnimationMixer;
let option1, option2, option3
let modelobj;
// params = new URLSearchParams(document.location.search.substring(1))

// pName = params.get('name') ? params.get('name') : 'friend'
// console.log(pName)
// if (pName === "friend") {
//   pName = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEV4r8729vb39/f1+Pt4q8u71OV4rMm71eT39/n1+Pz19fX2+Pn39/XZ5u670+J2qMdJ1ZSjAAABz0lEQVR4nO3U23KDIBgAYfGIiub937ZoYpL2up3M/t0douSObwCbnNpS2qOU2khV1Zrru0nBa5s2lfs0X5NYHcLYBRcu78L80aX8TRX4EuYuWPN6sMqaH8J126dhiDT2rZ7KpTz3cN5v49hHGre9O2WXsJuaYI3T/BDer2E39J9e0i83Dvc9TFVYQgr7u3BJ1ykNJxynH/dQIS6F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIb9/KNxv/dk4PgZ9Pk5zKuUlXLd9OJuuQZ9PW07pTZhyF6y5Ape3U7qkqMUVlofpFNb9TEs04/GVue7h01Y+uKA/avkujFjbNjnXZ5vr7/gbqnw+vgB2C0ejZ/UGZAAAAABJRU5ErkJggg=="
// }


// * *** SET UP PLACEMENT HOTSPOT ***

// Load in a hostpot texture from our ../assets folder
// const hotspotTexture = new THREE.TextureLoader().load(hotspotImg);
// // Create a mesh for the texture to attach to
// const hotspot = new THREE.Mesh(
//   new THREE.PlaneBufferGeometry(),
//   new THREE.MeshBasicMaterial({
//     // Get the hotspot texture and set it as the map
//     map: hotspotTexture,
//     // Make sure we can see it from all angles
//     side: THREE.DoubleSide,
//     // Set the transparency so we can see the ring
//     transparent: true,
//     alphaTest: 0.5,
//   }),
// );
// hotspot.scale.setScalar(2);
// // Prevent z-fighting between the hotspot and the shadow plane
// hotspot.renderOrder = 1;
// // Rotate the hotspot so that it is flat on the floor
// hotspot.rotateX(-0.5 * Math.PI);

// instantTrackerGroup.add(hotspot);



//copy to clipboard function
const copyToClipboard = (e) => {
  const el = document.createElement('textarea')
  el.value = e
  document.body.appendChild(el)
  Object.assign(el.style, {
    zIndex: '-99999',
    position: 'absolute',
  })

  const userAgent = navigator.userAgent || navigator.vendor || window.opera
  if (/iPads|iPod/.test(userAgent) && !window.MSStream) {
    el.contentEditable = true
    el.readOnly = false
    const s = window.getSelection()
    s.removeAllRanges()

    const range = document.createRange()
    range.selectNodeContents(el)
    s.addRange(range)

    el.setSelectionRange(0, 999999)
  } else {
    el.select()
  }

  document.execCommand('copy')
  document.body.removeChild(el)
}
let shareOnWhatsapp = async function() {
  console.log("copy clicked")
  // gfg_Run();
  const message = "To the best sibling, ❤️\nThank you for always having my back!\nHere's a custom surprise for you, to celebrate our special bond, that is sweet as our favourite, HERSHEY'S Chocolates.\nClick on the link to view \n Happy Rakhi! ✨";

  copyToClipboard(`${message} https://hersheysgifting.co.in/?name=${dataURL}&name1=${pNametype}&name2=${op1}&name3=${op2}&name4=${op3}&name5=${name}`)

  try {
    const shareData = {
      text: `${message} https://hersheysgifting.co.in/?name=${dataURL}&name1=${pNametype}&name2=${op1}&name3=${op2}&name4=${op3}&name5=${name}`,  // Message + URL
    };

    if (navigator.share) {
      await navigator.share(shareData);
      share.classList.add('pulse-once');
      setTimeout(() => {
        share.classList.remove('pulse-once');
      }, 200);
    } else {
      // Fallback for devices/browsers that do not support Web Share API
      // You can provide an alternative sharing option or display a message.
      console.log("Web Share API is not supported on this device/browser.");
    }
  } catch (error) {
    console.error("An error occurred while trying to share:", error);
  }
}

send.addEventListener('click', shareOnWhatsapp)
sharebtn.addEventListener('click', shareOnWhatsapp)

// image fill function
function drawImageScaled(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.min(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0, img.width, img.height,
    centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
}
//convert base64 to blob
function b64toBlob(b64Data, contentType, sliceSize) {
  contentType = contentType || '';
  sliceSize = sliceSize || 512;

  var byteCharacters = atob(b64Data);
  var byteArrays = [];

  for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    var slice = byteCharacters.slice(offset, offset + sliceSize);

    var byteNumbers = new Array(slice.length);
    for (var i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    var byteArray = new Uint8Array(byteNumbers);

    byteArrays.push(byteArray);
  }

  var blob = new Blob(byteArrays, { type: contentType });
  return blob;
}
//default image in blob
var contentType = 'image/png';
var b64Data = 'iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEV4r8729vb39/f1+Pt4q8u71OV4rMm71eT39/n1+Pz19fX2+Pn39/XZ5u670+J2qMdJ1ZSjAAABz0lEQVR4nO3U23KDIBgAYfGIiub937ZoYpL2up3M/t0douSObwCbnNpS2qOU2khV1Zrru0nBa5s2lfs0X5NYHcLYBRcu78L80aX8TRX4EuYuWPN6sMqaH8J126dhiDT2rZ7KpTz3cN5v49hHGre9O2WXsJuaYI3T/BDer2E39J9e0i83Dvc9TFVYQgr7u3BJ1ykNJxynH/dQIS6F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIb9/KNxv/dk4PgZ9Pk5zKuUlXLd9OJuuQZ9PW07pTZhyF6y5Ape3U7qkqMUVlofpFNb9TEs04/GVue7h01Y+uKA/avkujFjbNjnXZ5vr7/gbqnw+vgB2C0ejZ/UGZAAAAABJRU5ErkJggg=='

// console.log(blobUrl);

//var img = document.createElement('img');
//img.src = blobUrl;
//document.body.appendChild(img);

// ## Example 2 - Using fetch

var url = 'data:image/png;filename=image.png;base64,' + b64Data;
var blobUrl;
fetch(url)
  .then(res => res.blob())
  .then(URL.createObjectURL)
  .then((ret) => { blobUrl = ret; return blobUrl; })
  .then(console.log)

var linkEl = document.createElement('a')
linkEl.href = blobUrl;
// dataURL=blobUrl
document.body.appendChild(linkEl);
// dataURL=blobUrl

var hoverChange = document.getElementById('hoverChange')
var hoverHershey = document.getElementById('hoverhershey')
var hoverExotic = document.getElementById('hoverexotic')

  hoverChange.src = '/images/kisses.png'
  hoverHershey.src = '/images/hershey.png'
  hoverExotic.src = '/images/exotic.png'

// ---------------------------pack1----------
hoverChange.onclick = () => {
  console.log("clickedkisses")
  uimoduleobj.changeKissesPack()

  hoverHershey.src = '/images/hershey.png'
  hoverExotic.src = '/images/exotic.png'

  typeofpack = 'kisses'
  animtime = 13000
  pNametype = "1"
}
// -----------------------------pack2 hershey--------------
hoverhershey.onclick = () => {
  console.log("clickedchocolatebar")
  // uimoduleobj.untapKisses()
  uimoduleobj.changeHersheyPack()

  hoverChange.src = '/images/kisses.png'
  hoverExotic.src = '/images/exotic.png'

  typeofpack = 'chocolatebar'
  animtime = 11000
  console.log(typeofpack)
  pNametype = "2"
}
// --------------------------------------pack3-----------------------------
hoverexotic.onclick = () => {
  var choice3 = document.getElementById('hoverChange').value
  var choice4 = document.getElementById('hoverhershey').value
  console.log("clickedexotic")
  // uimoduleobj.untapKisses()
  uimoduleobj.changeExoticPack()
  
  hoverChange.src = '/images/kisses.png'
  hoverHershey.src = '/images/hershey.png'

  typeofpack = 'exotic'
  animtime = 17000
  pNametype = "3"

}

// ------------upload validation-----------------
function myFunction() {
  var x = document.getElementById("uploadbtn").required;
  console.log(x, "k");
}

// --------------------------------

// ---------------------------------------
nextbtn.onclick = () => {
  name = document.getElementById("siblingname").value
  var x = document.getElementById("uploadbtn").value;
  // const primaryAlert = document.getElementById("uploadingDiv");


  console.log(name)
  console.log(x);
  if (name === "") {
    secondscreen.style.display = "block"
  } else if (x === "") {
    alert("Please upload your photo!")
  }
  else {
    secondscreen.style.display = "none"
    if (typeofpack === 'kisses') {
      //
      modelname.setAttribute('gltf-model', '#kissesmodel')
      console.log("ss")
      thirdscreen.style.display = "block"
    } else if (typeofpack === 'chocolatebar') {
      modelname.setAttribute('gltf-model', '#barmodel')
      thirdscreenbar.style.display = "block"
    } else if (typeofpack === 'exotic') {
      //
      modelname.setAttribute('gltf-model', '#exoticmodel')
      thirdscreenexotic.style.display = "block"
    }
    else {
      alert("Please reload your page!")
    }

    modelname.addEventListener("model-loaded", () => {
      console.log("if loaded")
      modelloaded = 1
    });

  }
}

reload.onclick = () => {
  previouspausevalue++
  pausevalue++
  console.log("clicked")
  modelname.removeAttribute('animation-mixer')
  setTimeout(() => {
    modelname.setAttribute('animation-mixer', {
      clip: 'Animation',
      loop: 'once',
      crossFadeDuration: 0.4,
      clampWhenFinished: true,
    })
    setTimeout(() => {
      if (innerpausevalue == previouspausevalue) {
        modelname.setAttribute('animation-mixer', { timeScale: 0 });
        tapOnEnvelope.style.display = "block"
        console.log("reload 1300")
        notebox.setAttribute('class', 'cantap')
      }
      innerpausevalue++

    }, animtime);
  }, 1000);

}


// ---------------cards for kisses---------------
// Option 1
const option1div1 = document.getElementById('div-1')
const option1div2 = document.getElementById('div-2')
const option1div3 = document.getElementById('div-3')
option1div1.onclick = () => {
  console.log("option1 div 1")
  option1 = "Sweet Troublemakers"
  op1 = 1
}
option1div2.onclick = () => {
  console.log("option1 div 2")
  option1 = "Partners in crime"
  op1 = 2
}
option1div3.onclick = () => {
  console.log("option1 div 3")
  option1 = "Top Secret keepers"
  op1 = 3
}

// Option2
const option2div1 = document.getElementById('custom-div-1')
const option2div2 = document.getElementById('custom-div-2')
const option2div3 = document.getElementById('custom-div-3')
option2div1.onclick = () => {
  console.log("option2 div 1")
  option2 = "Caring nature"
  op2 = 1
}
option2div2.onclick = () => {
  console.log("option2 div 2")
  option2 = "Delightfully annoying nature"
  op2 = 2
}
option2div3.onclick = () => {
  console.log("option2 div 3")
  option2 = "Giving mature advices"
  op2 = 3
}
// Option3
const option3div1 = document.getElementById('custom-option-1')
const option3div2 = document.getElementById('custom-option-2')
const option3div3 = document.getElementById('custom-option-3')
option3div1.onclick = () => {
  console.log("option3 div 1")

  option3 = "Crazy"
  op3 = 1

}
option3div2.onclick = () => {
  console.log("option3 div 2")
  option3 = "Realistic"
  op3 = 1
}
option3div3.onclick = () => {
  console.log("option3 div 3")
  option3 = "Determined"
  op3 = 1
}

// ---------------cards for bars---------------
// Option 1
const option1div1bar = document.getElementById('hershey-bar-1')
const option1div2bar = document.getElementById('hershey-bar-2')
const option1div3bar = document.getElementById('hershey-bar-3')
option1div1bar.onclick = () => {
  console.log("option1 div 1")
  option1 = "Sweet Siblings"
  op1 = 1
}
option1div2bar.onclick = () => {
  console.log("option1 div 2")
  option1 = "Nutty Friends"
  op1 = 2
}
option1div3bar.onclick = () => {
  console.log("option1 div 3")
  option1 = "Trusted Partners"
  op1 = 3
}

// Option2
const option2div1bar = document.getElementById('new-hershey-bar-1')
const option2div2bar = document.getElementById('new-hershey-bar-2')
const option2div3bar = document.getElementById('new-hershey-bar-3')
option2div1bar.onclick = () => {
  console.log("option2 div 1")
  option2 = "You are a closet rockstar, unleashing brilliance and leaving everyone in awe"
  op2 = 1
}
option2div2bar.onclick = () => {
  console.log("option2 div 2")
  option2 = "You are always in FOMO mode, eager to seize every opportunity and get the best out of it"
  op2 = 2
}
option2div3bar.onclick = () => {
  console.log("option2 div 3")
  option2 = "You are the Ultimate Foodie, never hesitating to try new and exciting cuisines"
  op2 = 3
}
// Option3
const option3div1bar = document.getElementById('option-1')
const option3div2bar = document.getElementById('option-2')
const option3div3bar = document.getElementById('option-3')
option3div1bar.onclick = () => {
  console.log("option3 div 1")

  option3 = "Music"
  op3 = 1

}
option3div2bar.onclick = () => {
  console.log("option3 div 2")
  option3 = "Street food"
  op3 = 1
}
option3div3bar.onclick = () => {
  console.log("option3 div 3")
  option3 = "Gaming"
  op3 = 1
}

// ---------------cards for exotic dark hed---------------
// Option 1
const option1div1exotic = document.getElementById('exotic-hershey-1')
const option1div2exotic = document.getElementById('exotic-hershey-2')
const option1div3exotic = document.getElementById('exotic-hershey-3')
option1div1exotic.onclick = () => {
  console.log("option1 div 1")
  option1 = "Berry Good Friends"
  op1 = 1
}
option1div2exotic.onclick = () => {
  console.log("option1 div 2")
  option1 = "Nutty Partners"
  op1 = 2
}
option1div3exotic.onclick = () => {
  console.log("option1 div 3")
  option1 = "Trusted Confidantes"
  op1 = 3
}

// Option2
const option2div1exotic = document.getElementById('exotic-dark-card2-1')
const option2div2exotic = document.getElementById('exotic-dark-card2-2')
const option2div3exotic = document.getElementById('exotic-dark-card2-3')
option2div1exotic.onclick = () => {
  console.log("option2 div 1")
  option2 = "Wine & Chocolates at Home"
  op2 = 1
}
option2div2exotic.onclick = () => {
  console.log("option2 div 2")
  option2 = "Sundowners at Beach Resort"
  op2 = 2
}
option2div3exotic.onclick = () => {
  console.log("option2 div 3")
  option2 = "Bollywood Music Festival "
  op2 = 3
}

// Option3
const option3div1exotic = document.getElementById('option-exotic-1')
const option3div2exotic = document.getElementById('option-exotic-2')
const option3div3exotic = document.getElementById('option-exotic-3')
option3div1exotic.onclick = () => {
  console.log("option3 div 1")

  option3 = "Discussing family"
  op3 = 1

}
option3div2exotic.onclick = () => {
  console.log("option3 div 2")
  option3 = "Remembering childhood days"
  op3 = 1
}
option3div3exotic.onclick = () => {
  console.log("option3 div 3")
  option3 = "Laughing at Silly Jokes "
  op3 = 1
}
// When the experience loads we'll let the user choose a place in their room for
// the content to appear using setAnchorPoseFromCameraOffset (see below)
// The user can confirm the location by tapping on the screen
// let hasPlaced = false;



//  capture functionality
async function initRecorder() {

  const canvas = document.querySelector('canvas') || document.createElement('canvas');
  const recMsg = document.getElementById('recordbannerdiv')


  let recording = false;
  let recorder;
  let audioFinalStream;
  let canvasFinalStream;
  let dataURL;
  let chunks = [];
  let duration = 0;
  let fileToInclude;
  let shareObject;
  const mimeTypes = [
    'video/webm',
    'video/mp4',
    'video/ogg',
    'audio/webm',
    'audio/wav',
    'audio/mpeg'
  ];

  let mimeTypeSelected;
  capture.addEventListener('click', () => {
    if (recording) {

    stopRecordFunc();

    console.log("stop")

// capture.style.display = 'none'

    capture.src = "/images/shutter-button-start.png"
    recMsg.innerHTML = "Tap Rec Button to Record"

} else {
  recMsg.innerHTML = "Tap Stop Button to Save"
  capture.src = "/images/shutter-button-stop.png"
    getMp3Stream(function (audioStream) {
        const canvas = document.querySelector('canvas');
        var canvasStream = canvas.captureStream();
        canvasFinalStream = canvasStream;
        var finalStream = new MediaStream();
        getTracks(audioStream, 'audio').forEach(function (track) {
            finalStream.addTrack(track);
        });
        audioFinalStream = audioStream;
        getTracks(canvasStream, 'video').forEach(function (track) {
            finalStream.addTrack(track);
        });
        mimeTypes.forEach(mimeType => {
          if (MediaRecorder.isTypeSupported(mimeType)) {
            console.log(`${mimeType} is supported`);
            if (mimeTypeSelected == null) {
              mimeTypeSelected = mimeType
            }
          } else {
            console.log(`${mimeType} is not supported`);
          }
      });

      if (mimeTypeSelected == 'video/webm') {
          mimeTypeSelected = 'video/webm; codecs=vp9'
          const options = {
              audioBitsPerSecond: 128000,
              videoBitsPerSecond: 2500000,
              mimeType: mimeTypeSelected,
          };
          recorder = new MediaRecorder(finalStream, options); 
      } else {
      // Do something if the device is not running on Android
          recorder = new MediaRecorder(finalStream); 
      }

      

      recorder.ondataavailable = (e) => {
          chunks.push(e.data);
      };

      recorder.onstop = (e) => {
        duration = Date.now(); - startTime;
      };

      recorder.start(1000);
      const startTime = Date.now();

      
        // recorder = RecordRTC(finalStream, {
        //     type: 'video'
        // });

        // recorder.startRecording();
        recording = true;
    });
  }
});

function stopRecordFunc(){
              let blob = new Blob(chunks, { type: `${mimeTypeSelected}` });
              console.log('blob', blob);
              console.log('chunks', chunks);
              dataURL = URL.createObjectURL(blob);
              var video = document.getElementById('videotag');
              video.src = dataURL;
              // video.setAttribute('style', 'height: 75%; position: absolute; top:10%; left:12.5%;');
              autoPlayCheck(video);
              // var body = document.getElementById("preview-Container")
              // body.innerHTML = '';
              // body.appendChild(video);
              video.controls = true;
              document.getElementById("preview-Container").style.display='flex'
              fileToInclude = new File([blob], `hersheys_${Date.now()}.mp4`, {
                    type: `${mimeTypeSelected}`,
                    lastModified: Date.now(),
                })
                const shareObject = {
                  title: '',
                  text: '',
                  files: [fileToInclude],                       
              }
              recording = false;
              audioFinalStream.stop();
              canvasFinalStream.stop();
              capture.src = "/images/shutter-button-start.png"
              recMsg.innerHTML = "Tap Rec Button to Record"
              
}
function dataURLtoBlob(dataurl) {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
}
function getMp3Stream(callback) {
    var file = dataURLtoBlob(blobdataURL);
    var reader = new FileReader();
    reader.file = file;
    reader.onload = (function (e) {
        // Import callback function
        // provides PCM audio data decoded as an audio buffer
        context.decodeAudioData(e.target.result, function (buffer) {
            createSoundSource(buffer, callback);
        });
    });
    reader.readAsArrayBuffer(reader.file);
}

window.AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var gainNode = context.createGain();
gainNode.connect(context.destination);
gainNode.gain.value = 0; // don't play for self

function createSoundSource(buffer, callback) {
    var soundSource = context.createBufferSource();
    soundSource.loop = true;
    soundSource.buffer = buffer;
    soundSource.start(0, 0 / 1000);
    soundSource.connect(gainNode);
    var destination = context.createMediaStreamDestination();
    soundSource.connect(destination);

    // durtion=second*1000 (milliseconds)
    callback(destination.stream);
}
document.getElementById('closebtn').addEventListener('click', (e) =>{
  document.getElementById("preview-Container").style.display='none';
});
// document.getElementById('sharebtn').addEventListener('click', (e) => {
//   try {
//       if (navigator.share && navigator.canShare({files: [fileToInclude]})) {
//           navigator.share(shareObject)
//               .then(() => console.log('Successful share'))
//               .catch((error) => console.log('Error sharing', error));
//       } else {
//           alert("Web Share API is not supported in your browser.")
//       }
//   } catch {
//       alert("Sharing is not supported in your browser")
//   }
// });

document.getElementById('savebtn').addEventListener('click', (e) => {
    downloadFile(dataURL);
});
}

const clickAnchor = (properties) => {
  const anchor = document.createElement('a')
  Object.assign(anchor, properties)
  document.body.appendChild(anchor)
  anchor.click()
  document.body.removeChild(anchor)
}
const downloadFile = (currentDownloadUrl) => {
  clickAnchor({
      href: currentDownloadUrl,
      download: 'hersheys.mp4',
  })

}
function autoPlayCheck(v) {
  v.muted = true
  const playPromise = v.play()
  setTimeout(() => {
      if (playPromise !== undefined) {
          playPromise.then((_) => {
              // Automatic playback started!
              // Show playing UI.
              // We can now safely pause video...
              console.log('inside play promise')
              v.pause()
              v.muted = false
          })
              .catch((error) => {
                  // Auto-play was prevented
                  // Show paused UI.
              })
      }
  }, 1100)


  v.addEventListener('click', () => {
      if (!playing) {
          v.play()
          playing = true
      } else {
          v.pause()
          playing = false
      }
  })
}
//Video Recorder Code New (Urjit)

// placeButton.addEventListener('click', () => {
//   if (hasPlaced) {
//     hasPlaced = false;
//     placeButton.innerText = 'Tap to place';
//     hologram.pauseHologram();
//     hologram.mute();
//     hotspot.material.opacity = 1;
//     return;
//   }
//   hasPlaced = true;
//   placeButton.innerText = 'Tap to pick up';
//   hologram.playHologram();
//   hologram.unmute();
//   hotspot.material.opacity = 0;
// });

// function render() {
//   // update();
//   camera.updateFrame(renderer);
//   if (!hasPlaced) {
//     // If the user hasn't chosen a place in their room yet, update the instant tracker
//     // to be directly in front of the user
//     instantTrackerGroup.setAnchorPoseFromCameraOffset(0, 0, -5);
//   }
//   renderer.render(scene, camera);
//   // const clock = new THREE.Clock();
//   const detla = clock.getDelta();
//   mixer.update(detla)


//   // The Zappar camera must have updateFrame called every frame

//   // placeButton.onclick=()=>{
//   //   //Zappar permission ui after tap click

//   // }
//   // Draw the ThreeJS scene in the usual way, but using the Zappar camera


//   // Call render() again next frame
//   requestAnimationFrame(render);
//   // controls.update();
// }

// // Start things off
// render();

AFRAME.registerComponent("swap-texture", {
  init() {
    console.log("init")
    const msgclosebtn = document.getElementById("msgclosebtn")
    // 
    //  ------------------------
    const uploadbtn = document.getElementById("uploadbtn")
    uploadbtn.onchange = function () { preview_image(event) };
    function preview_image(event) {

      var reader = new FileReader();
      reader.onload = function () {
        //check size of the file
        if (uploadbtn.files.length > 0) {
          const fileSize = uploadbtn.files.item(0).size;
          const fileMb = fileSize / 1024 ** 2;
          console.log(fileMb);

          if (fileMb >= 12) {
            alert("please upload file less then 10mb")
            console.log("size is large")
            // fileResult.innerHTML = "Please select a file less than 2MB.";
            // fileSubmit.disabled = true;
          } else {
            var fileIdElement = document.getElementById("changeFileName");
            var newFileName = "Uploaded!"; // Replace with your desired new file name
            fileIdElement.innerHTML = newFileName;

            console.log("size is ohk")


            // fileResult.innerHTML = "Success, your file is " + fileMb.toFixed(1) + "MB.";
            // fileSubmit.disabled = true;
          }
        }

        console.log("image upload clicked")

        output = document.getElementById('uploadbtn');
        output.src = reader.result;
        console.log(output.src)
        // dataURL = output.src

        // dataURL=blobUrl

        // const file = event.target.files[0];
        // contentType = file.type;

        // if (contentType === "image/jpeg") {
        //   console.log(contentType);
        //   b64Data = dataURL.substring(23, dataURL.length);
        // } else if (contentType === "image/png") {
        //   console.log(contentType);
        //   b64Data = dataURL.substring(22, dataURL.length);
        // } else if (contentType!="image/jpeg" || contentType!="image/png" ){
        //   console.log(contentType);
        //   b64Data = dataURL.substring(22, dataURL.length);
        //   alert("please upload png/jpeg file only")


        // }


        // var blob = b64toBlob(b64Data, contentType);
        // blobUrl = URL.createObjectURL(blob);
        // dataURL = blobUrl
        // pName = dataURL
        console.log("sss" + pName)
        // texturechange()
        // traversal()
        // gltf.scene.traverse(function (child) {..

        //   if (child.name === "Cube001_1") {
        //     console.log("model loaded")
        //     loader = new THREE.TextureLoader()
        //     texture = loader.load(dataURL)

        //     child.material.map = texture;
        //     child.material.map.flipY = false
        //   }
        // })
      }
      reader.readAsDataURL(event.target.files[0]);
    }

    // const { src } = document.getElementById('galleryimg')

    const loader = new THREE.TextureLoader()
    //   var canvas = document.createElement('canvas');
    // var context = canvas.getContext('2d');
    //   dataURL = canvas.toDataURL('image/jpg');

    const modelname = document.getElementById('modelname')
    const notebox = document.getElementById('notebox')
  
    //upload btn pop up
    const fileInput = document.getElementById("uploadbtn");
    const uploadLabel = document.getElementById("fileUploadLabel")

    uploadLabel.onclick = function () {
      let uploadAlert = document.querySelector(".alert-check-upload")
      //uploadAlert.classList.remove("invisible")
      //uploadAlert.classList.add("add")

      fileInput.click() 
      // let uploadAlertClose = document.querySelector("#alertCloseBtnUpload")
      // uploadAlertClose.onclick = () => {
      //   uploadAlert.classList.remove("add")
      //   uploadAlert.classList.add("invisible")   
      // }
    }
    
    //upload image function
    function uploadImage(imageFile) {
      const formData = new FormData();
      formData.append("image", imageFile);

      return new Promise((resolve, reject) => {
        fetch("/questions", {
          method: "POST",
          body: formData,
        })
          .then(response => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then(data => {
            // Handle the response data from the server
            const imageUrl = data.imageUrl;
            resolve(imageUrl);
          })
          .catch(error => {
            reject(error);
          });
      });
    }
    // Function to render the result after a delay
    function renderResult(imageUrl) {
      // Replace this with your rendering logic
      console.log("Rendering the result with imageUrl:", imageUrl);
    }
    function getimageuploaded() {
      // Get uploaded image from server
      console.log("clicked different btn")
      
      const imageFile = fileInput.files[0]; /* Get your image file here (e.g., from an input[type="file"] element) */
      console.log("clicked different btn1")
      uploadImage(imageFile).then(imageUrl => {
          console.log("clicked different btn2")
          console.log("Uploaded Image URL:", imageUrl);
          dataURL = imageUrl
          console.log("dataurl " + dataURL)
          // texturechange()
          // Delay rendering the result after 2 seconds (2000 milliseconds)
          setTimeout(() => {
            renderResult(imageUrl);
            console.log("clicked different btn3")
          }, 2000);
        }).catch(error => {
          console.error("Error:", error);
        });
    }

    // ------------------------------
    // Click event for nextquestionid

    nextQuestionid.onclick = () => {

      if (document.querySelectorAll(".options-row .expanded-div").length == 1 && document.querySelectorAll(".options-row .custom-expanded-div").length == 1 && document.querySelectorAll(".options-row .custom-expanded-option").length == 1) {
        thirdscreen.style.display = "none"

        barsLoadingMedia.style.display = "none"
        loadingscreen.style.display = "block"
        kissesloadingvid.style.display = "block"
        kissesloadingvid.play();


        if (modelloaded === 1) {
          setTimeout(() => {
            loadingscreen.style.display = "none"
            scene.style.zIndex = 0
            permissions.setAttribute("zappar-permissions-ui", "")
            taptoplace.style.display = "block"
          }, 6000);
        }


        hereGoesID.innerHTML = `${name}`

        msg = `Our bond can be described as ${option1} and that makes it special. Your ${option2} makes you a Super Sibling. You are the best I could ask for and I am sure with your crazy and determined attitude, all your dreams will turn into reality.<br>
  This is my way of expressing what you mean to me. And for moments
  <span>when words fall short,</span>`
        console.log(msg)
        completenote.innerHTML = msg
        document.querySelector(".message-wrapper").classList.remove("bar-message")
        document.querySelector(".message-wrapper").classList.remove("hed-message")
        document.querySelector(".message-wrapper").classList.add("kisses-message")

        document.querySelector(".message-header h3").classList.remove("hed-note-text")
        document.getElementById("msgclosebtn").classList.remove("hed-close-btn")
        document.querySelector(".dynamic-name").classList.remove("hed-dynamic-name")
        document.getElementById("completenote").classList.remove("hed-note-text")
        let dynamicImg = document.getElementById("dynamicImg")
        dynamicImg.classList.add("justify-content-center")
        dynamicImg.children[0].src = "/images/say it with a kiss (brown).png"

        // Ar scene 

        // scene.style.zIndex = 0
        console.log(uimoduleobj.packtype)
        console.log("next")

        getimageuploaded()
      } else {
        // alert("Please select an option for each question.");
        questionAlert.classList.remove("invisible")
        questionAlert.classList.add("visible")

      }



    }

    //nextquestionid1 for bar
    nextQuestionid1.onclick = () => {
      if (document.querySelectorAll(".option-row-bars .expanded-div-bars").length == 1 && document.querySelectorAll(".option-row-bars .new-expanded-div").length == 1 && document.querySelectorAll(".option-row-bars .option-expanded").length == 1) {
        thirdscreenbar.style.display = "none"
        //show bars loading screen @kartik 

        loadingHeader.src = "/images/hersheyslogo.png"
        loadingHeader.parentElement.parentElement.classList.remove("justify-content-start")
        loadingHeader.parentElement.parentElement.classList.add("justify-content-center")
        kissesloadingvid.style.display = "none"
        barsLoadingMedia.style.display = "block"
        loadingscreen.style.display = "block"



        // also add if model loaded then show tap to place @kartik
        if (modelloaded === 1) {
          setTimeout(() => {
            // Ar scene 
            loadingscreen.style.display = "none"
            permissions.setAttribute("zappar-permissions-ui", "")
            scene.style.zIndex = 0
            console.log(uimoduleobj.packtype)
            console.log("next")
            taptoplace.style.display = "block"
          }, 6000)
        }

        hereGoesID.innerHTML = `${name}`
        //messagenote for bar comes here
        msg = `Our bond can be described as ${option1} and that makes it special.<br>
    ${option2}.<br>
    Whenever we’re together, I love how we bond over ${option3}, and make every moment special.<br>
    This is my way of expressing what you mean to me, because stories with my cool sibling are #MeantToBeShared!`

        console.log(msg)
        completenote.innerHTML = msg

        document.querySelector(".message-wrapper").classList.add("bar-message")
        document.querySelector(".message-wrapper").insertAdjacentHTML('beforeend',
          `<div class="bars-note-png"></div>`)
        document.querySelector(".message-header h3").classList.add("bars-note-text")
        document.getElementById("msgclosebtn").classList.add("bars-close-btn")
        document.querySelector(".dynamic-name").classList.add("bars-dynamic-name")
        document.getElementById("completenote").classList.add("bars-note-text")
        document.querySelector(".dynamic-note").style.height = "320px"
        document.querySelector(".close-icon").style.zIndex = "99"
        let dynamicImg = document.getElementById("dynamicImg")
        dynamicImg.classList.remove("dynamic-img")
        dynamicImg.classList.remove("justify-content-center")
        dynamicImg.classList.add("container-fluid")
        dynamicImg.classList.add("bars-dynamic-img")
        dynamicImg.children[0].style.width = "100%"
        dynamicImg.children[0].style.borderBottomLeftRadius = "10px"
        dynamicImg.children[0].style.borderBottomRightRadius = "10px"
        dynamicImg.children[0].src = "/images/bars-bottom-img.png"

        getimageuploaded()
      } else {
        questionAlertbar.classList.remove("invisible")
        questionAlertbar.classList.add("visible")
      }

}

    // Click event for nextquestionid2 for exotic
    nextQuestionid2.onclick = () => {
      if (document.querySelectorAll(".options-row .exotic-hershey").length == 1 && document.querySelectorAll(".options-row .exotic-expanded-div").length == 1 && document.querySelectorAll(".options-row .expanded-option").length == 1) {

        thirdscreenexotic.style.display = "none"
        loadingHeader.parentElement.parentElement.classList.remove("justify-content-start")
        loadingHeader.parentElement.parentElement.classList.add("justify-content-center")
        loadingHeader.src = "/images/hed-logo.png"
        barsLoadingMedia.style.display = "none"
        loadingscreen.style.display = "block"
        exoticloadingvid.style.display = "block"
        exoticloadingvid.play();


        if (modelloaded === 1) {
          setTimeout(() => {
            loadingscreen.style.display = "none"
            scene.style.zIndex = 0
            permissions.setAttribute("zappar-permissions-ui", "")
            taptoplace.style.display = "block"
          }, 6000);
        }


        hereGoesID.innerHTML = `${name}`

        msg = `We will forever be ${option1} for years to come. 

  Let's make this occasion special and bond over our idea of a perfect day - ${option2}, or spend time ${option3} just like old times<br>
  
  Thank you for being the best Sibling! You know I am in awe of you <span>😊</span> `
        console.log(msg)
        completenote.innerHTML = msg

        document.querySelector(".message-wrapper").classList.add("hed-message")
        document.querySelector(".message-header h3").classList.add("hed-note-text")
        document.getElementById("msgclosebtn").classList.add("hed-close-btn")
        document.querySelector(".dynamic-name").classList.add("hed-dynamic-name")
        document.getElementById("completenote").classList.add("hed-note-text")
        let dynamicImg = document.getElementById("dynamicImg")
        dynamicImg.classList.add("justify-content-start")
        dynamicImg.children[0].src = "/images/hed-bottom-img.png"

        // Ar scene 

        // scene.style.zIndex = 0
        console.log(uimoduleobj.packtype)
        console.log("next")

        getimageuploaded()


      } else {
        questionAlertexotic.classList.remove("invisible")
        questionAlertexotic.classList.add("visible")
      }


    }
    // Optionally, you can also keep the form submission logic for the original submit button
    document.getElementById("formId").addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission behavior
      // Perform any form-specific handling here
    });
  

//resize the image and draw it to the canvas
function resizeImage(imagePath, newWidth, newHeight) {
    //create an image object from the path
    const originalImage = new Image();
    originalImage.src = imagePath;
 
    //get a reference to the canvas
    // const canvas = document.getElementById('canvas');
    const croppedCanvas = document.createElement('canvas');
    const ctx = croppedCanvas.getContext('2d');
 
    //wait for the image to load
    originalImage.addEventListener('load', function() {
        
        //get the original image size and aspect ratio
        const originalWidth = originalImage.naturalWidth;
        const originalHeight = originalImage.naturalHeight;
        const aspectRatio = originalWidth/originalHeight;
 
        //if the new height wasn't specified, use the width and the original aspect ratio
        if (newHeight === undefined) {
            //calculate the new height
            newHeight = newWidth/aspectRatio;
            newHeight = Math.floor(newHeight);
            
            //update the input element with the new height
            hInput.placeholder = `Height (${newHeight})`;
            hInput.value = newHeight;
        }
      
        //set the canvas size
        croppedCanvas.width = newWidth;
        croppedCanvas.height = newHeight;
         
        //render the image
        ctx.drawImage(originalImage, 0, 0, newWidth, newHeight);
        imagevalue=croppedCanvas.toDataURL("image/jpeg", 0.9);
        console.log(imagevalue)
    });
}
    // modelname.addEventListener('model-loaded', (e) => {
    function texturechange() {
      let modelmesh
      if ((typeofpack === 'kisses') || (pNametype === '1')) {
        console.log("kisses")
        modelmesh = modelname.getObject3D('mesh').children[4].children[3]
        console.log(modelname.getObject3D('mesh'))
        console.log(modelname.getObject3D('mesh').children[4].children[3])
      } else if ((typeofpack === 'chocolatebar') || (pNametype === '2')) {
        console.log("bar")
        modelmesh = modelname.getObject3D('mesh').children[2].children[2]
        console.log(modelname.getObject3D('mesh'))
        console.log(modelname.getObject3D('mesh').children[2].children[2])
      } else if ((typeofpack === 'exotic') || (pNametype === '3')) {
        console.log("exotic")
        modelmesh = modelname.getObject3D('mesh').children[1].children[5]
        console.log(modelname.getObject3D('mesh'))
        console.log(modelname.getObject3D('mesh').children[1].children[5])
      }

      // const rakhiImage = document.getElementById('rakhi');

      // // Replace 'originalDataURL' with the actual Data URL of the original image
      // const originalDataURL = dataURL;

      // // Create a new Image object
      // const image = new Image();

      // // Set the new image's src to the original Data URL
      // image.src = originalDataURL;

      // const croppedCanvas = document.createElement('canvas');
 
  resizeImage(dataURL, 1024, 1524);





setTimeout(() => {
  console.log("www" + dataURL)
  modelmesh.material.map = loader.load(imagevalue)
  console.log(dataURL)
  // set flipY to false to correclty rotate texture
  modelmesh.material.map.flipY = false
}, 3000);
  


    }
    // this.el.addEventListener('click', (event) => {
    console.log("init")


    // modelname.setAttribute('visible',false)




    // })
    //Getting parameter from url
    params = new URLSearchParams(document.location.search.substring(1))
    params1 = new URLSearchParams(document.location.search.substring(2))
    params2 = new URLSearchParams(document.location.search.substring(3))
    params3 = new URLSearchParams(document.location.search.substring(4))
    params4 = new URLSearchParams(document.location.search.substring(5))
    params5 = new URLSearchParams(document.location.search.substring(6))

    pName = params.get('name') ? params.get('name') : 'friend'


    console.log(pName)
    //Sender screen
    if (pName === "friend") {
      receiverfirstscreen.style.display = "none"
      firstscreen.style.display = "block"
      // pName = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEV4r8729vb39/f1+Pt4q8u71OV4rMm71eT39/n1+Pz19fX2+Pn39/XZ5u670+J2qMdJ1ZSjAAABz0lEQVR4nO3U23KDIBgAYfGIiub937ZoYpL2up3M/t0douSObwCbnNpS2qOU2khV1Zrru0nBa5s2lfs0X5NYHcLYBRcu78L80aX8TRX4EuYuWPN6sMqaH8J126dhiDT2rZ7KpTz3cN5v49hHGre9O2WXsJuaYI3T/BDer2E39J9e0i83Dvc9TFVYQgr7u3BJ1ykNJxynH/dQIS6F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIb9/KNxv/dk4PgZ9Pk5zKuUlXLd9OJuuQZ9PW07pTZhyF6y5Ape3U7qkqMUVlofpFNb9TEs04/GVue7h01Y+uKA/avkujFjbNjnXZ5vr7/gbqnw+vgB2C0ejZ/UGZAAAAABJRU5ErkJggg=="
    }
    else {
      //Receiver screen
      document.querySelector(".preview-text").style.display = "none"
      receiverfirstscreen.style.display = "block"
      firstscreen.style.display = "none"
      send.classList.add("invisible")
      pNametype = params1.get('name1')
      op1 = params2.get('name2')
      op2 = params3.get('name3')
      op3 = params4.get('name4')
      name = params5.get('name5')
      console.log(name)
      console.log("Options=" + op1 + " " + op2 + " " + op3)
      console.log(pNametype)
      console.log("receiver side")
      //kisses
      if (pNametype === "1") {
        console.log("pnametype" + pNametype);
        dataURL = pName
        animtime = 13000
        modelname.setAttribute('gltf-model', '/models/kisses .glb')
        hereGoesID.innerHTML = `${name}`
        //option1
        if (op1 === 1) {
          option1 = "Sweet Troublemakers"
        }
        else if (op1 === 2) {
          option1 = "Partners in crime"
        } else {
          option1 = "Top Secret keepers"
        }
        //option2
        if (op2 === 1) {
          option2 = "Caring nature"
        }
        else if (op2 === 2) {
          option2 = "Delightfully annoying nature"
        } else {
          option2 = "Giving mature advices"
        }
        msg = `Our bond can be described as ${option1} and that makes it special. Your ${option2} makes you a Super Sibling. You are the best I could ask for and I am sure with your crazy and determined attitude, all your dreams will turn into reality.<br>
        This is my way of expressing what you mean to me. And for moments
        <span>when words fall short,</span>`
        console.log(msg)
        completenote.innerHTML = msg

        document.querySelector(".message-wrapper").classList.add("kisses-message")
        let dynamicImg = document.getElementById("dynamicImg")
        dynamicImg.classList.add("justify-content-center")
        dynamicImg.children[0].src = "/images/say it with a kiss (brown).png"
        // headerlogo.src='/images/hersheys-kisses-logo 1.png'
        // headerlogo.classList.add("headerlogokisses");
      }
      else if (pNametype === "2") {
        console.log("pnametype" + pNametype);
        dataURL = pName
        animtime = 11000
        modelname.setAttribute('gltf-model', '/models/bars final.glb')
        hereGoesID.innerHTML = `${name}`
        //option1
        if (op1 === 1) {
          option1 = "Sweet Siblings"

        }
        else if (op1 === 2) {
          option1 = "Nutty Friends"
        } else {
          option1 = "Trusted Partners"
        }
        //option2
        if (op2 === 1) {
          option2 = "You are a closet rockstar, unleashing brilliance and leaving everyone in awe"
        }
        else if (op2 === 2) {
          option2 = "You are always in FOMO mode, eager to seize every opportunity and get the best out of it"
        } else {
          option2 = "You are the Ultimate Foodie, never hesitating to try new and exciting cuisines"
        }
        //option3
        if (op3 === 1) {
          option3 = "Music"
        }
        else if (op3 === 2) {
          option3 = "Street food"
        } else {
          option3 = "Gaming"
        }
        msg = `Our bond can be described as ${option1} and that makes it special.<br>
           ${option2}.<br>
           Whenever we’re together, I love how we bond over ${option3}, and make every moment special.`
        console.log(msg)
        completenote.innerHTML = msg
        // headerlogo.src='/images/hersheys-kisses-logo 1.png'
        // headerlogo.classList.add("headerlogokisses");

        document.querySelector(".message-wrapper").classList.add("bar-message")
        document.querySelector(".message-wrapper").insertAdjacentHTML('beforeend',
          `<div class="bars-note-png"></div>`)
        document.querySelector(".message-header h3").classList.add("bars-note-text")
        document.getElementById("msgclosebtn").classList.add("bars-close-btn")
        document.querySelector(".dynamic-name").classList.add("bars-dynamic-name")
        document.getElementById("completenote").classList.add("bars-note-text")
        document.querySelector(".dynamic-note").style.height = "320px"
        document.querySelector(".close-icon").style.zIndex = "99"
        let dynamicImg = document.getElementById("dynamicImg")
        dynamicImg.classList.remove("dynamic-img")
        dynamicImg.classList.remove("justify-content-center")
        dynamicImg.classList.add("container-fluid")
        dynamicImg.classList.add("bars-dynamic-img")
        dynamicImg.children[0].style.width = "100%"
        dynamicImg.children[0].src = "/images/bars-bottom-img.png"
      }
      else if (pNametype === "3") {
        console.log("pnametype" + pNametype);
        dataURL = pName
        animtime = 17000
        modelname.setAttribute('gltf-model', '/models/exotic darkv13.glb')
        hereGoesID.innerHTML = `${name}`
        //option1
        if (op1 === 1) {
          option1 = "Berry Good Friends"
        }
        else if (op1 === 2) {
          option1 = "Nutty Partners"
        } else {
          option1 = "Trusted Confidantes"
        }
        //option2
        if (op2 === 1) {
          option2 =
            "Wine & Chocolates at Home"

        }
        else if (op2 === 2) {
          option2 = "Sundowners at Beach Resort"
        } else {
          option2 =
            "Bollywood Music Festival "
        }
        //option3
        if (op3 === 1) {
          option3 = "Discussing family"


        }
        else if (op3 === 2) {
          option3 = "Remembering childhood days"
        } else {
          option3 = "Laughing at Silly Jokes "
        }
        msg = `We will forever be ${option1} for years to come. 

           Let's make this occasion special and bond over our idea of a perfect day - ${option2}, or spend time ${option3} just like old times<br>
           
           Thank you for being the best Sibling! You know I am in awe of you <span>😊</span>`
        console.log(msg)
        completenote.innerHTML = msg

        // headerlogo.src='/images/hersheys-kisses-logo 1.png'
        // headerlogo.classList.add("headerlogokisses");
        document.querySelector(".message-wrapper").classList.add("hed-message")
        document.querySelector(".message-header h3").classList.add("hed-note-text")
        document.getElementById("msgclosebtn").classList.add("hed-close-btn")
        document.querySelector(".dynamic-name").classList.add("hed-dynamic-name")
        document.getElementById("completenote").classList.add("hed-note-text")
        let dynamicImg = document.getElementById("dynamicImg")
        dynamicImg.classList.add("justify-content-start")
        dynamicImg.children[0].src = "/images/hed-bottom-img.png"
      }

    }
    // Receiver button from Receiver first screen
    document.getElementById("receiverbtn").addEventListener("click", function () {

      bgaudio.play()
      receiverfirstscreen.style.display = "none"
      scene.style.zIndex = 0
      permissions.setAttribute("zappar-permissions-ui", "")
      taptoplace.style.display = "block"


      // }

    });

    msgclosebtn.onclick = () => {
     
      var captureDiv = document.getElementById('messagenote');
     
  
      // Specify the name of the mesh you want to modify messagenote
      var targetMeshName = 'postcard';
  
      // Find the mesh by name
      var targetMesh = findMeshByName(modelname.object3D, targetMeshName);
  
      if (targetMesh) {
          console.log("Mesh found");
         
          // Use html2canvas to capture the content of the div
          html2canvas(captureDiv).then(function(canvas) {
              console.log('Canvas created:', canvas);
  
              // Convert the canvas to a data URL
              var dataURL = canvas.toDataURL();
  
              // Create a new texture using the data URL
              var texture = new THREE.TextureLoader().load(dataURL);
              texture.minFilter = THREE.LinearFilter;
              texture.magFilter = THREE.LinearFilter;
              // Create a new material using the texture
              var material = new THREE.MeshBasicMaterial({
                map: texture,
                minFilter: THREE.LinearFilter,
                magFilter: THREE.LinearFilter
            });
  
              // Set the material to the target mesh
              targetMesh.material = material;
          });
        
      } else {
          console.warn('Mesh not found:', targetMeshName);
      }
  
      function findMeshByName(object3D, targetName) {
          var resultMesh = null;
  
          object3D.traverse(function(node) {
              if (node.isMesh && node.name === targetName) {
                  resultMesh = node;
              }
          });
  
          return resultMesh;
      }
      messagenote.style.display = "none";
      modelname.setAttribute('animation-mixer', { timeScale: 1 });
  }
  
    notebox.addEventListener('click', function (evt) {
      console.log("envolope clicked")
      tapOnEnvelope.style.display = "none"
      messagenote.style.display = "block"

      // modelname.setAttribute('animation-mixer', {timeScale: 1});
      notebox.setAttribute('class', '')
    });
    taptoplace = document.getElementById('tap-to-place') || document.createElement('div');
    taptoplace.addEventListener('click', () => {
      initRecorder()
      texturechange()

      sharepopupdiv.style.display = "block"

      arscreen.style.display = "block"
      // setTimeout(() => {
      //   recordparentdiv.style.display = "none"
      // }, 3000);


      //--------------------------- 
      const instantTracker = document.getElementById("instant-tracker");
      instantTracker.setAttribute("zappar-instant", "placement-mode: false");
      taptoplace.remove();
      setTimeout(() => {
        modelname.setAttribute('animation-mixer', {
          clip: 'Animation',
          loop: 'once',
          crossFadeDuration: 0.4,
          clampWhenFinished: true,
        })
        setTimeout(() => {
          if (pausevalue === 0) {
            modelname.setAttribute('animation-mixer', { timeScale: 0 });
            tapOnEnvelope.style.display = "block"
            console.log("tap 1300")
            notebox.setAttribute('class', 'cantap')
          }

        }, animtime);
      }, 1000);

    });
    // modelname.onclick = () => {
    //   console.log("clicked")sendgift
    // }


  },
})
// ------------------autofocus for input field----------------------
document.getElementById("sendthankyou").addEventListener("click", function () {
  document.getElementById("siblingname").focus();

});
document.getElementById("sendgift").addEventListener("click", function () {
  document.getElementById("siblingname").focus();
});

// -----------------------------
const siblingNameInput = document.getElementById("siblingname");
const selectPackInput = document.getElementById("hoverChange");

siblingNameInput.addEventListener("input", function () {
  if (siblingNameInput.value.length > 6) {
    selectPackInput.focus();
  }
});

// -------------------- changing text based on user selection---------------------
document.getElementById("sendthankyou").addEventListener("click", function () {
  // Get the text element by its ID
  const textElement = document.getElementById("changeTextScreen");

  // Update the text content
  textElement.textContent = "Say thankyou to";
});

const homebtn = document.getElementById("homeIcon")

homebtn.onclick = () => {
  window.location.reload()
}

/* --------**---------**-----DON'T DELETE THIS COMMENT-----**-----**-----*/
// var zappCloseBtn = document.getElementById("zapparCloseAref")
// zappCloseBtn.children[0].style.display = "none"
// zappCloseBtn.insertAdjacentHTML('beforeend',
// `<h3 class="go-back-txt">Go Back</h3>`)
/* --------**---------**-----DON'T DELETE THIS COMMENT-----**-----**-----*/



// //resize and draw the image on first load
// resizeImage(imagePath, 1024, 1024);

// //resize the image and draw it to the canvas
// function resizeImage(imagePath, newWidth, newHeight) {
//     //create an image object from the path
//     const originalImage = new Image();
//     originalImage.src = imagePath;
 
//     //get a reference to the canvas
//     const canvas = document.getElementById('canvas');
//     const ctx = canvas.getContext('2d');
 
//     //wait for the image to load
//     originalImage.addEventListener('load', function() {
        
//         //get the original image size and aspect ratio
//         const originalWidth = originalImage.naturalWidth;
//         const originalHeight = originalImage.naturalHeight;
//         const aspectRatio = originalWidth/originalHeight;
 
//         //if the new height wasn't specified, use the width and the original aspect ratio
//         if (newHeight === undefined) {
//             //calculate the new height
//             newHeight = newWidth/aspectRatio;
//             newHeight = Math.floor(newHeight);
            
//             //update the input element with the new height
//             hInput.placeholder = `Height (${newHeight})`;
//             hInput.value = newHeight;
//         }
      
//         //set the canvas size
//         canvas.width = newWidth;
//         canvas.height = newHeight;
         
//         //render the image
//         ctx.drawImage(originalImage, 0, 0, newWidth, newHeight);
//     });
// }

// const downloadBtn = document.querySelector("button.download");
 
// //a click event handler for the download button
// //download the resized image to the client computer
// downloadBtn.addEventListener('click', function() {
//     //create a temporary link for the download item
//     let tempLink = document.createElement('a');

//     //generate a new filename
//     let fileName = `image-resized.jpg`;
  
//     //configure the link to download the resized image
//     tempLink.download = fileName;
//     tempLink.href = document.getElementById('canvas').toDataURL("image/jpeg", 0.9);
  
//     //trigger a click on the link to start the download
//     tempLink.click();
// });


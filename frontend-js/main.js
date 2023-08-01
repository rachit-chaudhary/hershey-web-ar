/// Zappar for ThreeJS Examples
/// Instant Tracking 3D Model

// In this example we track a 3D model using instant world tracking

// import * as THREE from 'three';
// import * as ZapparThree from '@zappar/zappar-threejs';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import {rgbe} from 'C:\Users\march\Downloads\hersheys_final\node_modules\three\examples\js\loaders\RGBELoader.js'
import ZAPPPermissionUI from './modules/permission-ui'
import { UImodule } from './modules/webexperience-ui'





// modules code
const uimoduleobj = new UImodule();
new ZAPPPermissionUI()

const model = new URL('/public/models/kisses .glb', import.meta.url).href;
const hotspotImg = new URL('/public/images/hotspot.png', import.meta.url).href;
const scene = document.getElementById("scenediv")
let thirdscreenbar=document.getElementById("thirdscreen-bar")
let thirdscreen=document.getElementById("thirdscreen")
let typeofpack
let headerlogo=document.getElementById("headerlogo")
scene.style.zIndex = -1
secondscreen.style.display = "none"
const inputElement = document.querySelector('#siblingname');
// alert("i")

// firstscreen.style.display = "none"
// scene.style.display="block"
sendgift.onclick = () => {
  firstscreen.style.display = "none"
  scene.style.display = "block"
  inputElement.focus();



  secondscreen.style.display = "block"
}
sendthankyou.onclick = () => {
  firstscreen.style.display = "none"
  scene.style.display = "block"
  inputElement.focus();




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
let pName
var dataURL
var mimeType
var msg
let name 
let i=1
let pausevalue=0
let previouspausevalue=0
let innerpausevalue=1
let animtime=0
let taptoplace=document.getElementById('tap-to-place')
// const clock = new THREE.Clock();
// let mixer= new THREE.AnimationMixer;
let option1, option2, option3
let modelobj;
params = new URLSearchParams(document.location.search.substring(1))

pName = params.get('name') ? params.get('name') : 'friend'
console.log(pName)
if (pName === "friend") {
  pName = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEV4r8729vb39/f1+Pt4q8u71OV4rMm71eT39/n1+Pz19fX2+Pn39/XZ5u670+J2qMdJ1ZSjAAABz0lEQVR4nO3U23KDIBgAYfGIiub937ZoYpL2up3M/t0douSObwCbnNpS2qOU2khV1Zrru0nBa5s2lfs0X5NYHcLYBRcu78L80aX8TRX4EuYuWPN6sMqaH8J126dhiDT2rZ7KpTz3cN5v49hHGre9O2WXsJuaYI3T/BDer2E39J9e0i83Dvc9TFVYQgr7u3BJ1ykNJxynH/dQIS6F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIT+F/BTyU8hPIb9/KNxv/dk4PgZ9Pk5zKuUlXLd9OJuuQZ9PW07pTZhyF6y5Ape3U7qkqMUVlofpFNb9TEs04/GVue7h01Y+uKA/avkujFjbNjnXZ5vr7/gbqnw+vgB2C0ejZ/UGZAAAAABJRU5ErkJggg=="
}


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
// copy.onclick = function () {
//   console.log("copy clicked")
//   // gfg_Run();
//   console.log(pName)
//   copyToClipboard(`https://localhost:1234/index.js?name=${pName}`)
// }


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


// console.log(modelmesh)
// modelmesh.material.map = loader.load(src)
// console.log(dataURL)
// modelmesh.material.map.flipY = false

// to load the model
// const gltfLoader = new GLTFLoader(manager);
// gltfLoader.load(model, (gltf) => {
//   // gfg_Rundec();
//   modelobj=gltf.scene
//   modelobj.visible=false
//   //traverse mesh 
//   function traversal() {
//     gltf.scene.traverse(function (child) {
//       if (child.name === "Picture_Picture_0") {
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
//   // document.getElementById("uploadbtn").onchange = function () { preview_image(event) };
//   // function preview_image(event) {
//   //   var reader = new FileReader();
//   //   reader.onload = function () {
//   //     console.log("image upload clicked")

//   //     output = document.getElementById('galleryimg');
//   //     output.src = reader.result;
//   //     console.log(output.src)
//   //      uploadpicture=1

//   //   }
//   //   reader.readAsDataURL(event.target.files[0]);
//   // }
//   //upload button
// const uploadbtn=document.getElementById("uploadbtn")
// uploadbtn.onchange = function () { preview_image(event) };
// function preview_image(event) {
//   var reader = new FileReader();
//   reader.onload = function () {
//     //check size of the file
//     if (uploadbtn.files.length > 0) {
//       const fileSize = uploadbtn.files.item(0).size;
//       const fileMb = fileSize / 1024 ** 2;
//       console.log(fileMb);

//       if (fileMb >= 12) {
//         console.log("size is large")
//         // fileResult.innerHTML = "Please select a file less than 2MB.";
//         // fileSubmit.disabled = true;
//       } else {
//         console.log("size is ohk")
//         // fileResult.innerHTML = "Success, your file is " + fileMb.toFixed(1) + "MB.";
//         // fileSubmit.disabled = true;
//       }
//     }

//     console.log("image upload clicked")

//     output = document.getElementById('galleryimg');
//     output.src = reader.result;
//     console.log(output.src)
//     dataURL = output.src
//     // dataURL=blobUrl

//     const file = event.target.files[0];
//     contentType = file.type;

//     if (contentType === "image/jpeg") {
//       console.log(contentType);
//       b64Data = dataURL.substring(23, dataURL.length);
//     } else if (contentType === "image/png") {
//       console.log(contentType);
//       b64Data = dataURL.substring(22, dataURL.length);
//     }


//     var blob = b64toBlob(b64Data, contentType);
//     blobUrl = URL.createObjectURL(blob);
//     dataURL = blobUrl
//     pName = dataURL
//     // traversal()
//     // gltf.scene.traverse(function (child) {..

//     //   if (child.name === "Cube001_1") {
//     //     console.log("model loaded")
//     //     loader = new THREE.TextureLoader()
//     //     texture = loader.load(dataURL)

//     //     child.material.map = texture;
//     //     child.material.map.flipY = false
//     //   }
//     // })
//   }
//   reader.readAsDataURL(event.target.files[0]);
// }

//   //div texture image 
//   var imageElement = document.getElementById('galleryimg')
//   var canvas = document.createElement('canvas');
//   var context = canvas.getContext('2d');

//   canvas.width = 350;
//   canvas.height = 350;
//   drawImageScaled(imageElement, context)
//   // context.drawImage(imageElement, 20, 20);
//   dataURL = canvas.toDataURL('image/jpg');
//   console.log(dataURL)
// scene.tapplace="true"
// console.log(scene)
//   scene.add(instantTrackerGroup);
//   // const elem = document.querySelector('#screenshot');
//   // elem.addEventListener('click', () => {

//   //   canvas.toBlob((blob) => {
//   //     saveBlob(blob, `screencapture-${canvas.width}x${canvas.height}.png`);
//   //     console.log(blob)
//   //   });
//   // });
//   // const saveBlob = (function () {
//   //   const a = document.createElement('a');
//   //   document.body.appendChild(a);
//   //   a.style.display = 'block';
//   //   return function saveData(blob, fileName) {
//   //     const url = window.URL.createObjectURL(blob);
//   //     a.href = url;
//   //     a.download = fileName;
//   //     a.click();
//   //     //  texture = loader.load(require('../assets/trees.jpg'))
//   //     //  console.log("base   "+dataURL)

//   //   };
//   // }());
//   // Now the model has been loaded, we can add it to our instant_tracker_group

//   gltf.scene.scale.set(0.1, 0.1, 0.1);
//   gltf.scene.position.set(0,-0,0);

//   // gltf.scene.gesturehandler="true"
//   // console.log( gltf.setObject3D('light', new THREE.PointLight()))



//   instantTrackerGroup.add(gltf.scene);
//   mixer = new THREE.AnimationMixer(gltf.scene);
//   const clips = gltf.animations;
//   const clip = THREE.AnimationClip.findByName(clips,'Animation');
//   const action= mixer.clipAction(clip);

//  action.play();



// }, undefined, () => {
//   console.log('An error ocurred loading the GLTF model');
// });
// Let's add some lighting, first a directional light above the model pointing down
// const directionalLight = new THREE.DirectionalLight('white', 0.8);
// directionalLight.position.set(0,3.5,7);
// // directionalLight.rotateX(1.4)
// directionalLight.scale.set(3,3,3);

// // directionalLight.lookAt(0, 0, 0);
// instantTrackerGroup.add(directionalLight);
// btn1.onclick = () => {
//   console.log("btn1")
//   option1="Sweet Troublemakers"
// }
// btn2.onclick = () => {
//   console.log("btn2")
//   option1="Partners in crime"
// }
// btn3.onclick = () => {
//   console.log("btn3")
//   option1="Top Secret keepers"
// }

// btn4.onclick = () => {
//   console.log("btn4")
//   option2="Caring nature"
// }
// btn5.onclick = () => {
//   console.log("btn5")
//   option2="Delightfully annoying nature"
// }
// btn6.onclick = () => {
//   console.log("btn6")
//   option2="Giving mature advices"
// }


// btn7.onclick = () => {
//   console.log("btn7")
//   option3="Crazy"
// }
// btn8.onclick = () => {
//   console.log("btn8")
//   option3="Realistic"
// }
// btn9.onclick = () => {
//   console.log("btn9")
//   option3="Determined"
// }


// next.onclick = () => {
//   console.log("next")
//    msg = `Dear ${name}, Our bond can be described as ${option1} and that makes it special. Your ${option2} makes you a Super Sibling.You are the best I could ask for and I am sure with your crazy and determined attitude all your dreams will turn into reality. My words fall short of expressing my love, hence Saying it with a Kiss.`
// console.log(msg)


//   // if (option1 === "button1") {
//   //   console.log("option1 button1")
//   // } else if (option1 === "button2") {
//   //   console.log("option1 button2")
//   // } else if (option1 === "button3") {
//   //   console.log("option1 button3")
//   // }

//   // if (option2 === "button1") {
//   //   console.log("option2 button1")
//   // } else if (option2 === "button2") {
//   //   console.log("option2 button2")
//   // } else if (option2 === "button3") {
//   //   console.log("option2 button3")
//   // }

//   // if (option3 === "button1") {
//   //   console.log("option3 button1")
//   // } else if (option3 === "button2") {
//   //   console.log("option3 button2")
//   // } else if (option3 === "button3") {
//   //   console.log("option3 button3")
//   // }

// }

// //zapparsharing feature
// // Get canvas from dom
// const canvas = document.querySelector('canvas');

// // Convert canvas data to url

// const url1 = canvas.toDataURL('image/jpeg', 0.8);

// ZapparSharing({
//   data: url1,
//   fileNamePrepend: 'Zappar',
//   shareUrl: 'www.zappar.com',
//   shareTitle: 'Hello World!',
//   shareText: 'Hello World!',
//   onSave: () => {
//     console.log('Image was saved');
//   },
//   onShare: () => {
//     console.log('Share button was pressed');
//   },
//   onClose: () => {
//     console.log('Dialog was closed');
//   },
// }, {
//   containerDiv: {
//     position: 'fixed',
//     width: '100%',
//     height: '100%',
//     top: '0px',
//     left: '0px',
//     zIndex: 10000,
//     backgroundImage: "url('https://source.unsplash.com/user/c_v_r/1900x800')",
//     fontFamily: 'sans-serif',
//     color: 'rgba(255,255,255,1)',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//   },
//   saveShareAnchor: {
//     display: 'flex',
//     width: '70px',
//     height: '70px',
//     marginTop: '2.5%',
//     marginLeft: '5%',
//     marginRight: '5%',
//     backgroundImage: "url('https://source.unsplash.com/user/c_v_r/1900x800')",
//   },
// }, {}, {
//   SAVE: 'SAVE',
//   SHARE: 'SHARE',
//   NowOpenFilesAppToShare: 'Now open files app to share',
//   TapAndHoldToSave: 'Tap and hold the image<br/>to save to your Photos app',
// });



// And then a little ambient light to brighten the model up a bit
// const ambientLight = new THREE.AmbientLight('white', 0.8);
// instantTrackerGroup.add(ambientLight);

// When the experience loads we'll let the user choose a place in their room for
// the content to appear using setAnchorPoseFromCameraOffset (see below)
// The user can confirm the location by tapping on the screen

// Use a function to render our scene as usual



//upload button

hoverChange.onclick = () => {
  console.log("clickedkisses")
  // uimoduleobj.untapK``isses()
  uimoduleobj.changeKissesPack()
  typeofpack='kisses'
  animtime=13000

}
hoverhershey.onclick = () => {
  console.log("clickedchocolatebar")
  // uimoduleobj.untapKisses()
  uimoduleobj.changeHersheyPack()
  typeofpack='chocolatebar'

  console.log(typeofpack)
}
hoverexotic.onclick = () => {
  console.log("clickedexotic")
  // uimoduleobj.untapKisses()
  uimoduleobj.changeExoticPack()
  typeofpack='exotic'
  animtime=15000
}
nextbtn.onclick = () => {
  name =document.getElementById("siblingname").value
  secondscreen.style.display = "none"


if(typeofpack==='kisses'){
//
modelname.setAttribute('gltf-model','#kissesmodel')
console.log("ss")
thirdscreen.style.display = "block"
headerlogo.src='/images/hersheys-kisses-logo 1.png'
headerlogo.classList.add("headerlogokisses");

}else if(typeofpack==='chocolatebar')
{
  modelname.setAttribute('gltf-model','#kissesmodel')
thirdscreenbar.style.display = "block"
headerlogo.src='/images/hersheyslogo.png'
headerlogo.classList.add("headerlogo-bar-exotic");
}else if(typeofpack==='exotic')
{
  //
  modelname.setAttribute('gltf-model','#exoticmodel')
  thirdscreenbar.style.display = "block"
  headerlogo.src='/images/hed-logo.png'
  headerlogo.classList.add("headerlogo-bar-exotic");
}


}
closebtnsharepopup.onclick = () => {
 
  sharepopupdiv.style.display="none"
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
      clampWhenFinished:true,
    })
    setTimeout(() => {
      if(innerpausevalue==previouspausevalue){
        modelname.setAttribute('animation-mixer', {timeScale: 0});
        console.log("reload 1300")
        notebox.setAttribute('class','cantap')
      }
      innerpausevalue++
    
    }, animtime);
  }, 1000);
 
}
nextQuestionid.onclick = () => {
  thirdscreen.style.display = "none"
  msg = `Dear ${name}, Our bond can be described as ${option1} and that makes it special. Your ${option2} makes you a Super Sibling.You are the best I could ask for and I am sure with your crazy and determined attitude all your dreams will turn into reality. My words fall short of expressing my love, hence Saying it with a Kiss.`
  console.log(msg)

  // Ar scene 
  permissions.setAttribute("zappar-permissions-ui", "")
  scene.style.zIndex = 0
  console.log(uimoduleobj.packtype)
  console.log("next")
  taptoplace.style.display = "block"
}
nextQuestionid1.onclick = () => {
  thirdscreenbar.style.display = "none"
  msg = `Dear ${name}, Our bond can be described as ${option1} and that makes it special. Your ${option2} makes you a Super Sibling.You are the best I could ask for and I am sure with your crazy and determined attitude all your dreams will turn into reality. My words fall short of expressing my love, hence Saying it with a Kiss.`
  console.log(msg)

  // Ar scene 
  permissions.setAttribute("zappar-permissions-ui", "")
  scene.style.zIndex = 0
  console.log(uimoduleobj.packtype)
  console.log("next")
  taptoplace.style.display = "block"
}


// ---------------cards---------------
// Option 1
const option1div1 = document.getElementById('div-1')
const option1div2 = document.getElementById('div-2')
const option1div3 = document.getElementById('div-3')
option1div1.onclick = () => {
  console.log("option1 div 1")
  option1 = "Sweet Troublemakers"
}
option1div2.onclick = () => {
  option1 = "Partners in crime"
}
option1div3.onclick = () => {
  option1 = "Top Secret keepers"
}

// Option2
const option2div1 = document.getElementById('custom-div-1')
const option2div2 = document.getElementById('custom-div-2')
const option2div3 = document.getElementById('custom-div-3')
option2div1.onclick = () => {
  console.log("option3 div 1")
  option2 = "Caring nature"

}
option2div2.onclick = () => {
  console.log("option3 div 2")
  option2 = "Delightfully annoying nature"
}
option2div3.onclick = () => {
  console.log("option3 div 3")
  option2 = "Giving mature advices"
}
// Option3
const option3div1 = document.getElementById('custom-option-1')
const option3div2 = document.getElementById('custom-option-1')
const option3div3 = document.getElementById('custom-option-1')
option3div1.onclick = () => {
  console.log("option3 div 1")

  option3 = "Crazy"

}
option3div2.onclick = () => {
  console.log("option3 div 2")
  option3 = "Realistic"

}
option3div3.onclick = () => {
  console.log("option3 div 3")
  option3 = "Determined"
}


// When the experience loads we'll let the user choose a place in their room for
// the content to appear using setAnchorPoseFromCameraOffset (see below)
// The user can confirm the location by tapping on the screen
// let hasPlaced = false;



  //  capture functionality
 async function initRecorder() {

const canvas = document.querySelector('canvas') || document.createElement('canvas');

// const url = canvas.toDataURL('video/mp4', 0.8);


const recorder = await ZapparVideoRecorder.createCanvasVideoRecorder(canvas);

let recording = false;




// When we start recording update text

recorder.onStart.bind(() => {

recording = true;
console.log("start 2")
// placeButton.innerText = 'TAP TO STOP RECORDING';

});




// When stop recording update text, and prompt a social share dialog.

recorder.onComplete.bind(async (result) => {

// placeButton.innerText = 'TAP TO START RECORDING';
console.log("stop 2")

// result.arrayBuffer
console.log(result.asDataURL())

ZapparWebGLSnapshot({

data: await result.asDataURL(),
fileNamePrepend: 'ImpresarioTech',
// data:url,
onClose: () => {
console.log('Dialog was closed');

},

});


// console.log(recorder._getData())

recording = false;

});




// Toggle between recording

capture.addEventListener('click', async () => {

if (recording) {

recorder.stop();
console.log("stop")
// capture.style.display = 'none'
// capture.src = "./assets/UI/Cameravideo.svg"





} else {

recorder.start();
// capture.src = "./assets/UI/Cameravideo1.svg"
console.log("start")


}

});

}
initRecorder();




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
            console.log("size is large")
            // fileResult.innerHTML = "Please select a file less than 2MB.";
            // fileSubmit.disabled = true;
          } else {
            console.log("size is ohk")
            // fileResult.innerHTML = "Success, your file is " + fileMb.toFixed(1) + "MB.";
            // fileSubmit.disabled = true;
          }
        }

        console.log("image upload clicked")

        output = document.getElementById('uploadbtn');
        output.src = reader.result;
        console.log(output.src)
        dataURL = output.src
        // dataURL=blobUrl

        const file = event.target.files[0];
        contentType = file.type;

        if (contentType === "image/jpeg") {
          console.log(contentType);
          b64Data = dataURL.substring(23, dataURL.length);
        } else if (contentType === "image/png") {
          console.log(contentType);
          b64Data = dataURL.substring(22, dataURL.length);
        }


        var blob = b64toBlob(b64Data, contentType);
        blobUrl = URL.createObjectURL(blob);
        dataURL = blobUrl
        pName = dataURL
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


    // modelname.addEventListener('model-loaded', (e) => {
    function texturechange() {
      const modelmesh = modelname.getObject3D('mesh').children[3].children[6]

      //  const model = modelname.getObject3D('mesh').getObjectByName('Plane035')
      //  .getObjectByName('Picture_Picture_0')
      console.log(modelname.getObject3D('mesh'))
      console.log(modelname.getObject3D('mesh').children[3].children[6])
      //  console.log(modelname.getObject3D('mesh').children[0].children[2].children[6])
     
      
      modelmesh.material.map = loader.load(pName)
      console.log(pName)
      // set flipY to false to correclty rotate texture
      modelmesh.material.map.flipY = false
    }
    // this.el.addEventListener('click', (event) => {
    console.log("init")


    // modelname.setAttribute('visible',false)




    // })

    notebox.addEventListener('click', function (evt) {  
      console.log("envolope clicked")
        modelname.setAttribute('animation-mixer', {timeScale: 1});
        notebox.setAttribute('class','')
    });
     taptoplace = document.getElementById('tap-to-place') || document.createElement('div');
taptoplace.addEventListener('click', () => {
  texturechange()

  // -------------------------
// capture.style.display="block"
// sharebtn.style.display="block"
// reload.style.display="block"
arscreen.style.display="block"
setTimeout(() => {
  sharepopupdiv.style.display="block"
  recordbannerdiv.style.display="none"
}, 3000);


  //--------------------------- 
  const instantTracker = document.getElementById("instant-tracker");
  instantTracker.setAttribute("zappar-instant", "placement-mode: false");
  taptoplace.remove();
  setTimeout(() => {
    modelname.setAttribute('animation-mixer', {
      clip: 'Animation',
      loop: 'once',
      crossFadeDuration: 0.4,
      clampWhenFinished:true,
    })
    setTimeout(() => {
      if(pausevalue===0){
        modelname.setAttribute('animation-mixer', {timeScale: 0});
        console.log("tap 1300")
        notebox.setAttribute('class','cantap')
      }
    
    },animtime);
  }, 1000);

});
    // modelname.onclick = () => {
    //   console.log("clicked")
    // }


  },
})
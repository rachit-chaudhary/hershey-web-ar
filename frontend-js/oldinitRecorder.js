// async function initRecorder() {

//   const canvas = document.querySelector('canvas') || document.createElement('canvas');
// //   // const url = canvas.toDataURL('video/mp4', 0.8);
// //   var width = window.innerWidth
// //   || document.documentElement.clientWidth
// //   || document.body.clientWidth;
// // var height = window.innerHeight
// //   || document.documentElement.clientHeight
// //   || document.body.clientHeight;
// // // Get canvas from dom
// // document.querySelector("a-scene").setAttribute('screenshot', {
// //   width: width,
// //   height: height
// // })
// // const canvas = document.querySelector("a-scene").components.screenshot.getCanvas("perspective");

//   let recording = false;

//   const recorder = await ZapparVideoRecorder.createCanvasVideoRecorder(canvas, {
//     quality:10,
//     maxFrameRate:144,
//     audio: false,
//   })

//   // When we start recording update text

//   recorder.onStart.bind(() => {

//     recording = true;

//     console.log("start 2")

//     // placeButton.innerText = 'TAP TO STOP RECORDING';

//   });

 

//   // When stop recording update text, and prompt a social share dialog.

//   recorder.onComplete.bind(async (result) => {

 

//     // placeButton.innerText = 'TAP TO START RECORDING';

//     console.log("stop 2")

 

//     // result.arrayBuffer

//     console.log(result.asDataURL())

 

//     ZapparWebGLSnapshot({

//       data: await result.asDataURL(),

//       fileNamePrepend: 'hersheys_sibling_surprise',

//       // data:url,

//       onClose: () => {

//         console.log('Dialog was closed');

//       },

//     });

 

//     // console.log(recorder._getData())

//     recording = false;

//   });

 

//   // Toggle between recording

//   capture.addEventListener('click', async () => {
//     if (recording) {

//       recorder.stop();

//       console.log("stop")

//       // capture.style.display = 'none'

//       capture.src = "/images/shutter-button-start.png"

//     } else {

//       recorder.start();

//       capture.src = "/images/shutter-button-stop.png"

//       console.log("start")

//     }

//   });

// }
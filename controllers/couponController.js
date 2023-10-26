const express = require('express');
const router = express.Router();
const fs = require('fs');
const couponModel = require('../models/Coupon');
//let couponMessage = '';
//public routes
// router.get('/', (req, res) => {
//     couponMessage = ""
//     res.render('get-coupon', { couponMessage });
//   })
// router.post('/get-coupon', (req, res) => {
//   const visitorCoupon = req.cookies.coupon;
//   const { visitorCoupon: newVisitorCoupon, couponMessage } = couponModel.getCoupon(visitorCoupon);
//   res.cookie('coupon', newVisitorCoupon, { maxAge: 86400000 });
//   res.render('get-coupon', { couponMessage });
//   res.json({ couponMessage });
// });

const multer = require('multer');
const path = require('path');

// Set up multer for file uploads
const storage = multer.diskStorage({
    // destination: '/uploads/',
    destination: './uploads/',
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  });
  
  const upload = multer({ storage: storage });
  var imageUrl = "";
  router.post('/questions', upload.single('image'), (req, res) => {
    if (!req.file) {
      res.status(400).send('No file uploaded.');
    } else {
      imageUrl = '/' + req.file.filename;
  console.log(imageUrl)
  
    //  res.render('index', { imageUrl });
     res.json({ imageUrl });
    }
  });
  router.get('/', (req, res) => {
    imageUrl = "";
    res.render('index', { imageUrl });
  })
  
//let couponMessage = '';
//public routes
// router.get('/', (req, res) => {
//     couponMessage = ""
//     res.render('get-coupon', { couponMessage });
//   })
// router.post('/get-coupon', (req, res) => {
//   const visitorCoupon = req.cookies.coupon;
//   const { visitorCoupon: newVisitorCoupon, couponMessage } = couponModel.getCoupon(visitorCoupon);
//   res.cookie('coupon', newVisitorCoupon, { maxAge: 86400000 });
//   res.render('get-coupon', { couponMessage });
//   res.json({ couponMessage });
// });

router.get('/', (req, res) => {
    res.render('get-coupon');
  });
  
  // router.get('/questions', (req, res) => {
  //   res.render('index');
  // });
  
  router.get('/get-coupon', (req, res) => {

   
    const visitorCoupon = req.cookies.coupon;
    const { visitorCoupon: newVisitorCoupon, couponMessage } = couponModel.getCoupon(visitorCoupon);
    
    const logData = `Coupon: ${newVisitorCoupon}, Redeemed: ${new Date().toISOString()}\n`;
    fs.appendFileSync('coupon_log.txt', logData);
    const DaysInMilliseconds = 20 * 24 * 60 * 60 * 1000;
    res.cookie('coupon', newVisitorCoupon, { maxAge: DaysInMilliseconds });
    
    //res.cookie('coupon', newVisitorCoupon, { maxAge: 86400000 });
    res.json({ couponMessage });
  });
  

module.exports = router;
// const express = require('express');
// const router = express.Router();
// const fs = require('fs');
// const couponModel = require('../models/Coupon');
// const multer = require('multer');
// const path = require('path');
// const sharp = require('sharp');

// // Set up multer for file uploads
// const storage = multer.diskStorage({
//   destination: './uploads/',
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//   }
// });

// const upload = multer({ storage: storage });

// let imageUrl = ""; // Define imageUrl at the top level

// router.post('/questions', upload.single('image'), (req, res) => {
//   if (!req.file) {
//     res.status(400).send('No file uploaded.');
//   } else {
//     const originalImagePath = './uploads/' + req.file.filename;
//     const compressedImagePath = './uploads/compressed_' + req.file.filename;

//     sharp(originalImagePath)
//       .jpeg({ quality: 80 })
//       .toFile(compressedImagePath, (err, info) => {
//         if (err) {
//           console.error('Error compressing image:', err);
//           res.status(500).send('Error compressing image');
//         } else {
//           fs.unlinkSync(originalImagePath);
//           imageUrl = '/compressed_' + req.file.filename; // Set imageUrl to the compressed image path
//           res.json({ imageUrl });
//         }
//       });
//   }
// });

// router.get('/', (req, res) => {
//   res.render('index', { imagePath: imageUrl });
// });


// router.get('/clear', (req, res) => {
//   imageUrl = ""; // Optionally clear the imageUrl when needed
//   res.redirect('/');
// });

// router.get('/get-coupon', (req, res) => {
//   res.render('get-coupon');
// });

//   //let couponMessage = '';
// //public routes
// // router.get('/', (req, res) => {
// //     couponMessage = ""
// //     res.render('get-coupon', { couponMessage });
// //   })
// // router.post('/get-coupon', (req, res) => {
// //   const visitorCoupon = req.cookies.coupon;
// //   const { visitorCoupon: newVisitorCoupon, couponMessage } = couponModel.getCoupon(visitorCoupon);
// //   res.cookie('coupon', newVisitorCoupon, { maxAge: 86400000 });
// //   res.render('get-coupon', { couponMessage });
// //   res.json({ couponMessage });
// // });
//   // router.get('/questions', (req, res) => {
//   //   res.render('index');
//   // });
//   //let couponMessage = '';
// //public routes
// // router.get('/', (req, res) => {
// //     couponMessage = ""
// //     res.render('get-coupon', { couponMessage });
// //   })
// // router.post('/get-coupon', (req, res) => {
// //   const visitorCoupon = req.cookies.coupon;
// //   const { visitorCoupon: newVisitorCoupon, couponMessage } = couponModel.getCoupon(visitorCoupon);
// //   res.cookie('coupon', newVisitorCoupon, { maxAge: 86400000 });
// //   res.render('get-coupon', { couponMessage });
// //   res.json({ couponMessage });
// // });
//   router.get('/get-coupon', (req, res) => {

   
//     const visitorCoupon = req.cookies.coupon;
//     const { visitorCoupon: newVisitorCoupon, couponMessage } = couponModel.getCoupon(visitorCoupon);
    
//     const logData = `Coupon: ${newVisitorCoupon}, Redeemed: ${new Date().toISOString()}\n`;
//     fs.appendFileSync('coupon_log.txt', logData);
//     const DaysInMilliseconds = 20 * 24 * 60 * 60 * 1000;
//     res.cookie('coupon', newVisitorCoupon, { maxAge: DaysInMilliseconds });
    
//     //res.cookie('coupon', newVisitorCoupon, { maxAge: 86400000 });
//     res.json({ couponMessage });
//   });
  

// module.exports = router;

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
  res.render('index', { imagePath: imageUrl });
})

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

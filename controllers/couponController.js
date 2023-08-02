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
router.get('/', (req, res) => {
    res.render('get-coupon');
  });
  
  router.get('/questions', (req, res) => {
    res.render('index');
  });
  
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

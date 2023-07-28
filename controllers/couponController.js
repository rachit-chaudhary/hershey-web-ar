const Coupon = require('../models/Coupon')

exports.getCoupon = function(req, res) {
    let coupon = new Coupon()
    console.log("send request to db")
    res.send("send data to db")
}
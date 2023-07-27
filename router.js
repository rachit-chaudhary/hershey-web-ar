const express = require('express')
const router = express.Router()
const couponController = require('./controllers/couponController')

//public routes
router.get('/', (req, res) => {
    res.render('get-coupon')
})

router.get('/questions', (req, res) => {
    res.render('index')
})

//get coupon routes
router.post('/get-coupon', couponController.getCoupon)

module.exports = router
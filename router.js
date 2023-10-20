const express =require('express')
const emailController = require('./controllers/emailController')
const router = express.Router()

//home route
router.get('/', (req, res) => {
    res.render('index')
})

router.get('/why-makear', (req, res) => {
    res.render('why-makear.ejs')
})

router.get('/contact', (req, res) => {
    res.render('contact')
})

router.get('/view-email-address', (req, res) => {
    res.render('email-list')
})

router.post('/send-email', emailController.sendEmailAddress)
router.post('/view-emails', emailController.viewEmailAddress)

module.exports = router
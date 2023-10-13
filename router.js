const express =require('express')
const router = express.Router()

//home route
router.get('/', (req, res) => {
    res.render('index')
})

router.get('/why-makear', (req, res) => {
    res.render('why-makear.ejs')
})
module.exports = router
const express = require('express')
const router = express.Router()

//public routes
router.get('/', (req, res) => {
    res.render('index')
})

module.exports = router
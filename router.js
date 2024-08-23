const express = require('express')
const router = express.Router()
const couponController = require('./controllers/couponController')

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
router.post('/questions', upload.single('fileUploadBtn'), (req, res) => {
    if (!req.file) {
        res.status(400).send('No file uploaded.');
    } else {
        imageUrl = '/' + req.file.filename;
        console.log(imageUrl)

        //  res.render('index', { imageUrl });
        res.json({ imageUrl });
        console.log(imageUrl)
        res.send(imageUrl)
    }
});

//public routes

router.get('/', (req, res) => {
    res.render('index')
})

//get coupon routes
router.post('/get-coupon', couponController.getCoupon)

module.exports = router
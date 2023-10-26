
const express = require('express')
const fs = require('fs');
const dotenv = require('dotenv').config()

const cookieParser = require('cookie-parser');
const app = express()
//const ejs = require('ejs');
const couponController = require('./controllers/couponController');
const port = process.env.PORT || 5000

app.use(cookieParser());
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(express.static('views'))
app.use(express.static('public'))
app.use(express.static('uploads'))
app.set('view engine', 'ejs')

app.use('/', couponController)
app.listen(port, () => {
  console.log("ebcksjbcksbbcdk")
  console.log(`Hershey's is listening on ${port}`)
  console.log("check status");
})
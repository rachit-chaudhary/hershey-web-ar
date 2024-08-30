
const express = require('express')
// const fs = require('fs');
const dotenv = require('dotenv').config()

// https server
var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey = fs.readFileSync('sslcert/key.pem', 'utf8');
var certificate = fs.readFileSync('sslcert/cert.pem', 'utf8');

var credentials = { key: privateKey, cert: certificate };

const cookieParser = require('cookie-parser');
const app = express()
//const ejs = require('ejs');
const couponController = require('./controllers/couponController');
// const port = process.env.PORT || 8080
app.use(cookieParser());
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(express.static('views'))
app.use(express.static('public'))
app.use(express.static('uploads'))
app.set('view engine', 'ejs')


app.use('/', couponController)

var httpsServer = https.createServer(credentials, app);

// httpsServer.listen(8443, '192.168.1.22', () => {
//   console.log(`Hershey's is listening on 8443`)
// });
app.listen(process.env.PORT, () => {
  console.log(`Hershey's is listening on ${process.env.PORT}`)
})
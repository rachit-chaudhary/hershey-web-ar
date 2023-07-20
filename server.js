const express = require('express')
const dotenv = require('dotenv').config()
const app = express()
const router = require('./router')
const port = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(express.static('views'))
app.use(express.static('public'))
app.set('view engine', 'ejs')

app.use('/', router)

app.listen(port, () => {
  console.log(`Hershey's is listening on ${port}`)
})
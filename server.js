const express = require('express')
const app = express()
const dotenv = require('dotenv').config()

const router = require('./router')

app.use(express.static('public'))
app.set('views', 'views')
app.set('view engine', 'ejs')

app.use('/', router)
app.all('*', (req, res) => {
    res.status(404).render('404')
})

app.listen(process.env.PORT, () => {
    console.log(`Site listening on port ${process.env.PORT}`)
})
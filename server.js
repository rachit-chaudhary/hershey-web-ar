const dotenv = require('dotenv').config()
const session = require('express-session')
const MongoStore = require('connect-mongo')
const flash = require('connect-flash')
const express = require('express')
const app = express()


const router = require('./router')

let sessionOptions = session({
    secret: "seven sisters big",
    store: MongoStore.create({client: require('./db')}),
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge: 1000 * 60 * 60 * 24, httpsOnly: true}
})

app.use(sessionOptions)

app.use(flash())

app.use(function(req, res, next) {

    //make all errors and success flash messages available
    res.locals.errors = req.flash("errors")
    res.locals.failed = req.flash("failed")
    res.locals.success = req.flash("success")

    next()    
})

app.use(express.static('public'))
app.set('views', 'views')
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/', router)
app.all('*', (req, res) => {
    res.status(404).render('404')
})

module.exports = app
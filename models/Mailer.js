
const dataCollection = require('../db').db().collection("data")
var nodemailer = require('nodemailer')
const dotenv = require('dotenv').config()

let Mailer = function(data) {
    this.data = data
    this.errors = []
}

// Mailer.prototype.validate = function() {
//     return new Promise((resolve, reject) => {

//     })
// }

Mailer.prototype.cleanUp = function() {
    this.data = {
        email: this.data.email.trim().toLowerCase()
    }
}

Mailer.prototype.register = function() {
    console.log(this.data)
    return new Promise(async (resolve, reject) => {
        let result = await dataCollection.insertOne({email: this.data.email})
        resolve(result)
    })
}

Mailer.findEmails = function() {
    return new Promise(async (resolve, reject) => {
        let emailData = await dataCollection.find().toArray()
        resolve(emailData)
    })
}

module.exports = Mailer
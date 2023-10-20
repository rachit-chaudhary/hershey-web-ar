const Mailer = require('../models/Mailer')

exports.sendEmailAddress = function(req, res) {
    let mailer = new Mailer(req.body)
    mailer.register().then((result) => {
        req.flash("success", "We have received your message, will reach you soon.")
        req.session.save(function() {
            res.render('contact', {success: req.flash('success')})
        })  
    }).catch((err) => {
        res.send(err)
    })
}

exports.viewEmailAddress = function(req, res) {
    Mailer.findEmails().then((result) => {
        res.render('email-list', {data: result})
    }).catch((err) => {
        res.send(err)
    })
}
var nodemailer = require('nodemailer')
var config = require('./config')
var transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
        user:config.credentials.user,
        pass:config.credentials.password
    }
})

var mailOptions = {
    from: config.credentials.user,
    to: config.credentials.to,
    subject: 'Hello World',
    html: '<p>I am learning to send email through Node</p>'
}


transporter.sendMail(mailOptions, function(err, info){
    if(err){
        console.log(err)
    }
    else{
        console.log(info)
    }
})
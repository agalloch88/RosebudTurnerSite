export default function (req, res) {
    console.log(req.body);

    require('dotenv').config();
    const PASSWORD = process.env.password;
    let nodeMailer = require('nodemailer');
    const transporter = nodeMailer.createTransport({
        port: 465,
        host: 'smtp.gmail.com',
        auth: {
            user: 'rosebudturnerdotcom@gmail.com',
            pass: PASSWORD,
        },
        secure: true,
    });

    const mailData = {
        from: 'rosebudturnerdotcom@gmail.com',
        to: ['ryankirsch88@gmail.com', 'agalloch88@gmail.com'],
        subject: `Message From ${req.body.name}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `<div>${req.body.message}</div><p>Sent from:
        ${req.body.email}</p>`,
    }

    transporter.sendMail(mailData, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
    })

    res.status(200)
    res.send()
}
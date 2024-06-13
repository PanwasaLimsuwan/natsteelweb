const nodemailer = require('nodemailer');
require("dotenv").config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.USER,
        // user: process.env.panwasalimsuwan@gmail.com,
        pass: process.env.APP_PASSWORD,
        // pass: process.env.yoswrnnvzgcokwls,
    },
});

const mailOptions = {
    from: {
        name: 'name',
        address: process.env.USER
    },
    to: 'panwasalimsuwan@gmail.com',
    subject: '',
    text: 'messages',
}

const SendEmail = async (transporter , mailOptions) => {
    try {
        await transporter.SendEmail(mailOptions);
        console.log('Email has been sent');
    }   catch (error) {
        console.error(error);
    }
}

SendEmail(transporter , mailOptions);
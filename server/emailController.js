// const expressAsyncHandler = require("express-async-handler");
// const dotenv = require("dotenv");
// const nodemailer = require("nodemailer");
// dotenv.config();

// // let transporter = nodemailer.createTransport({
// //   host: process.env.SMTP_HOST,
// //   port: process.env.SMTP_PORT,
// //   secure: false, // true for 465, false for other ports
// //   auth: {
// //     // user: process.env.SMTP_MAIL, // generated ethereal user
// //     pass: process.env.SMTP_PASSWORD, // generated ethereal password
// //   },
// // });

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "s6404062630465@email.kmutnb.ac.th",
//     pass: "jdupbxgytqiyzcon",
//   },
// });

// const sendEmail = expressAsyncHandler(async (req, res) => {
//   const { clientName, email, tel, mobile, fax, company, province, branch, messages } = req.body;
//   console.log(clientName, email, tel, mobile, fax, company, province, branch, messages,);

//   // var mailOptions = {
//   //   from: process.env.SMTP_MAIL,
//   //   to: email,
//   //   subject: subject,
//   //   text: messages,
//   // };

//   var mailOptions = {
//     from: "s6404062630465@email.kmutnb.ac.th",
//     to: "s6404062630465@email.kmutnb.ac.th",
//     subject: "Quotation",
//     text: `Client Name: ${clientName}\n
//     Email: ${email}\n
//     Tel: ${tel}\n
//     Mobile: ${mobile}\n
//     Fax: ${fax}\n
//     Company: ${company}\n
//     Province: ${province}\n
//     Branch: ${branch}\n
//     Messages: ${messages}\n
//     `,
//   };

//   // transporter.sendMail(mailOptions, function (error, info) {
//   //   if (error) {
//   //     console.log(error);
//   //   } else {
//   //     console.log("Email sent successfully!");
//   //   }
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error('Error sending email:', error);
//       res.status(500).send('Error sending email');
//     } else {
//       console.log('Email sent:', info.response);
//       res.status(200).send('Email sent successfully');
//     }
//   });
// });

// module.exports = { sendEmail };

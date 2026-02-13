const nodemailer = require('nodemailer');

const sendEmail = async ({email, subject, message}) => {
    //1. Create a transporter
    const { EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASSWORD } = process.env;

    const transport = nodemailer.createTransport({
        host: EMAIL_HOST,
        port: EMAIL_PORT,
        auth: {
          user: EMAIL_USER,
          pass: EMAIL_PASSWORD,
        }
      });

    //2. Define the email options
    const mailOptions = {
        from: 'Accoount <suport@veggy.com>',
        to: email,
        subject: subject,
        text: message,
    }

    //3. Send the email
    await transport.sendMail(mailOptions)
}

module.exports = sendEmail;
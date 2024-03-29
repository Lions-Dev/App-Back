const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
var cors = require('cors')

require('dotenv').config()


app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(express.json());


app.get('/', function (req, res) {
  res.send('app');
});

app.post('/email',  function (req, res) {
  let {nombre, email, texto} = req.body
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.USER,
      pass: process.env.PASS
    }
  });
  const mailOptions = {
    from: email,
    to: process.env.TO,
    subject: 'Sending Email using Node.js',
    text: 'Mensaje de: ' + nombre + '- Email: ' + email + '\b - Mensaje: ' + texto
  };
   transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      console.log(info)
    } else {
      console.log('Email sent' + info.response);
      res.send('Email sent');
    }
  })
})



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Conectado ${PORT}`);
})

const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
var cors = require('cors')

app.set("views engine", "ejs")

app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(express.json());
app.use(express.static("public"))


app.get('/', function (req, res) {
  res.render('index.ejs');
});

app.post('/email',  function (req, res) {
  let {nombre, email, texto} = req.body
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'echeverriadesarrollador@gmail.com',
      pass: '@Echeverriadesarrollador'
    }
  });
  const mailOptions = {
    from: email,
    to: 'leonelandresecheverria@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'Mensaje de: ' + nombre + 'Email: ' + email + '\b Mensaje: ' + texto
  };
   transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
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
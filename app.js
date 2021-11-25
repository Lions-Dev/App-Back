const express = require('express');
const app = express();
const nodemailer = require('nodemailer');

app.set("views engine", "ejs")

app.use(express.urlencoded({extended:false}))

app.use(express.static("public"))

app.get('/', function(req, res) {
  res.render('index.ejs');
});

app.post('/mail', async function(req, res){
const {nombre, email, mensaje} = req.body
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
  text: 'Mensaje de: ' + nombre + 'Email: ' + email +  '\b Mensaje: ' + mensaje
};
await transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Conectado ${ PORT }`);
})
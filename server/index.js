// express
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

// sendgrid
const nodemailer = require("nodemailer");
const sendGridTransport = require("nodemailer-sendgrid-transport");
const { SENDGRID_API } = require("../config/keys");

const transporter = nodemailer.createTransport(
  sendGridTransport({
    auth: {
      api_key: SENDGRID_API,
    },
  })
);

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.post("/send", (req, res) => {
  const { name, email, message, subject } = req.body;
  transporter
    .sendMail({
      to: "jillfetherston@gmail.com",
      from: email,
      subject: subject,
      html: `<h3>${name}</h3>
  <p>${message}</p>`,
    })
    .then((resp) => {
      res.json({ resp });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

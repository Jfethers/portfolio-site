// express
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
// sendgrid
const nodemailer = require("nodemailer");
const sendGridTransport = require("nodemailer-sendgrid-transport");
const { SENDGRID_API } = require("../config/keys");

// body parser
const bodyParser = require("body-parser");
var jsonParser = bodyParser.json();

app.use(express.json()); // <==== parse request body as JSON

const transporter = nodemailer.createTransport(
  sendGridTransport({
    auth: {
      api_key: SENDGRID_API,
    },
  })
);

app.get("/api", jsonParser, (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.post("/api/send", (req, res) => {
  transporter
    .sendMail({
      to: "jillfetherston@gmail.com",
      from: req.body.email,
      subject: req.body.subject,
      html: `<h3>${req.body.name}</h3>
  <p>${req.body.message}</p>`,
    })
    .then((resp) => {
      res.json({ resp });
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

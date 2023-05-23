// express
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const path = require("path");
sendgrid;
const nodemailer = require("nodemailer");
const sendGridTransport = require("nodemailer-sendgrid-transport");
const { SENDGRID_API } = require("../config/keys");

app.use(express.json());

app.use(express.static("client/build"));

app.get("*", (req, res) => {
	res.sendFile(path.resolve(__dirname, "/../client/build/index.html"));
});

const transporter = nodemailer.createTransport(
	sendGridTransport({
		auth: {
			api_key: SENDGRID_API,
		},
	})
);

app.post("/api/send", (req, res) => {
	transporter
		.sendMail({
			to: "jillfetherston@gmail.com",
			from: "jillfetherston@gmail.com",
			subject: req.body.subject,
			html: `<h3>${req.body.name}</h3>
			<h3>from: ${req.body.email}</h3>
			<p>${req.body.message}</p>
			`,
		})
		.then((resp) => {
			res.json({ resp });
		});
});

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});

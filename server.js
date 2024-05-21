const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config({ path: "mail.env" }); // Charge les variables d'environnement spécifiquement depuis mail.env

const app = express();
app.use(cors());
app.use(bodyParser.json()); // Assurez-vous de gérer correctement le parsing des requêtes JSON entrantes

const transporter = nodemailer.createTransport({
  service: "gmail", // Utilisez Gmail ou un autre service
  auth: {
    user: process.env.EMAIL_USER, // Votre adresse email
    pass: process.env.EMAIL_PASS, // Votre mot de passe
  },
});

app.post("/send", (req, res) => {
  const { name, email, message } = req.body;
  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER, // Email destinataire, généralement votre propre email
    subject: `Message de ${name}`,
    text: message,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(500).send("Erreur lors de l'envoi de l'email");
    } else {
      console.log("Email envoyé: " + info.response);
      res.status(200).send("Email envoyé avec succès");
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});

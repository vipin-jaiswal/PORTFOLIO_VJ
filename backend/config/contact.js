const express = require("express");
const cors = require("cors");
const transporter = require("../config/mail");
const { personal } = require("../config/siteData");

const app = express();

// It's a good practice to restrict the origin for CORS in production
app.use(cors()); // For development, this is fine. For production, consider `cors({ origin: 'your-frontend-url.com' })`

app.use(express.json());

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const mailOptions = {
    from: `"${name}" <${process.env.EMAIL_USER}>`, // sender address
    to: personal.email, // list of receivers
    replyTo: email,
    subject: "New Contact Form Submission from Portfolio", // Subject line
    text: message, // plain text body
    html: `<p>You have a new contact form submission from:</p>
           <p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Message:</strong></p>
           <p>${message}</p>`, // html body
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email." });
  }
});

module.exports = app;
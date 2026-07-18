const express = require("express");
const cors = require("cors");
const { Resend } = require("resend");
const { personal } = require("../config/siteData");

const app = express();

const resend = new Resend(process.env.RESEND_API_KEY);

app.use(cors({
  origin: [
    "https://vipinjaiswal.site",
    "https://www.vipinjaiswal.site",
  ],
}));

app.use(express.json());

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    // Mail to you
    await resend.emails.send({
      from: "Portfolio <contact@send.vipinjaiswal.site>",
      to: personal.email,
      replyTo: email,
      subject: `📩 New Portfolio Contact - ${name}`,
      html: `
        <h2>New Portfolio Contact</h2>

        <p><b>Name:</b> ${name}</p>

        <p><b>Email:</b> ${email}</p>

        <p><b>Message:</b></p>

        <p>${message}</p>
      `,
    });

    // Auto reply
    await resend.emails.send({
      from: "Vipin Jaiswal <contact@send.vipinjaiswal.site>",
      to: email,
      subject: "Thanks for contacting me",
      html: `
        <h2>Hello ${name},</h2>

        <p>Thank you for contacting me.</p>

        <p>I have received your message and will reply soon.</p>

        <br>

        Vipin Jaiswal
      `,
    });

    return res.json({
      success: true,
      message: "Message sent successfully.",
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = app;
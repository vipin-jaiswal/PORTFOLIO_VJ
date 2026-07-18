const express = require("express");
const cors = require("cors");
const transporter = require("../config/mail");
const { personal } = require("../config/siteData");

const app = express();

app.use(cors({
  origin: [
    "https://vipinjaiswal.site",
    "https://www.vipinjaiswal.site"
  ],
  methods: ["POST", "OPTIONS"],
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
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: personal.email,
      replyTo: email,
      subject: `📩 New Contact from ${name}`,
      html: `
        <h2>New Portfolio Contact</h2>

        <p><b>Name:</b> ${name}</p>

        <p><b>Email:</b> ${email}</p>

        <p><b>Message:</b></p>

        <div style="padding:15px;background:#f5f5f5">
        ${message}
        </div>
      `,
    });

    // Auto reply
    await transporter.sendMail({
      from: `"Vipin Jaiswal" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thanks for contacting me",
      html: `
      <h2>Hello ${name},</h2>

      <p>
      Thank you for contacting me.
      I have received your message and will reply soon.
      </p>

      <br>

      <b>Vipin Jaiswal</b>
      `,
    });

    return res.json({
      success: true,
      message: "Message sent successfully.",
    });

  } catch (err) {
    console.error(err);

    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

module.exports = app;
const { Resend } = require("resend");
const { personal } = require("../config/siteData");

const resend = new Resend(process.env.RESEND_API_KEY);

const ALLOWED_ORIGINS = [
  "https://vipinjaiswal.site",
  "https://www.vipinjaiswal.site",
];

module.exports = async (req, res) => {
  // CORS - reflect the request origin only if it's in the allowed list
  const origin = req.headers.origin;
  if (ALLOWED_ORIGINS.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight request
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method Not Allowed",
    });
  }

  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    // Send email to you
    await resend.emails.send({
      from: "Portfolio <contact@vipinjaiswal.site>",
      to: personal.email,
      replyTo: email,
      subject: `📩 New Portfolio Contact - ${name}`,
      html: `
        <h2>New Portfolio Contact</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // Auto reply
    await resend.emails.send({
      from: "Vipin Jaiswal <contact@vipinjaiswal.site>",
      to: email,
      subject: "Thank you for contacting me",
      html: `
        <h2>Hello ${name},</h2>
        <p>Thank you for contacting me.</p>
        <p>I have received your message and will reply soon.</p>
        <br>
        <p>Regards,<br><strong>Vipin Jaiswal</strong></p>
      `,
    });

    return res.status(200).json({
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
};
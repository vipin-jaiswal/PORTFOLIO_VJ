const transporter = require("../config/mail");

const sendContactEmail = async (req, res) => {
  try {
    console.log("Incoming Request:", req.body);

    console.log("EMAIL_USER:", process.env.EMAIL_USER);
    console.log("EMAIL_PASS exists:", !!process.env.EMAIL_PASS);

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    // Mail to yourself
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `📩 New Portfolio Contact - ${name}`,
      html: `
        <h2>New Portfolio Message</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Message:</strong></p>

        <p>${message}</p>
      `,
    });

    // Auto reply
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for contacting me",
      html: `
        <h2>Hello ${name},</h2>

        <p>Thank you for contacting me.</p>

        <p>I have received your message and will reply as soon as possible.</p>

        <br>

        <p>Regards,</p>
        <b>Vipin Jaiswal</b>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Message sent successfully.",
    });

  } catch (error) {
    console.error("❌ Send Mail Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  sendContactEmail,
};
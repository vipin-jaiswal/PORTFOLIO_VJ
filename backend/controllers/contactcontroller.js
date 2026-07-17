const transporter = require("../config/mail");

const sendContactEmail = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    // Send mail to you
    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`, // Show user's name in the 'from' field
      to: process.env.EMAIL_USER, // Send to your own email
      replyTo: email,
      subject: `📩 New Portfolio Contact - ${name}`,
      html: `
        <div style="font-family:Arial;padding:20px;">
          <h2>New Contact Message</h2>

          <p><strong>Name:</strong> ${name}</p>

          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Message:</strong></p>

          <div style="background:#f5f5f5;padding:15px;border-radius:8px;">
            ${message}
          </div>
        </div>
      `,
    });

    // Auto reply to visitor
    await transporter.sendMail({
      from: `"Vipin Jaiswal" <${process.env.EMAIL_USER}>`, // Your name and email
      to: email, // Send to the user's email
      subject: "Thank you for your message!",
      html: `
        <div style="font-family:Arial;padding:20px;">
          <h3>Hello ${name},</h3>
          <p>Thank you for reaching out! I have received your message and will get back to you as soon as possible.</p>
        </div>
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
      message: "Failed to send message.",
    });
  }
};

module.exports = {
  sendContactEmail,
};
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

const allowedOrigins = [
  process.env.FRONTEND_URL,
  'http://localhost:4200',
  'http://localhost:4201'
].filter(Boolean);

app.use(helmet());
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    callback(new Error(`CORS blocked request from origin: ${origin}`));
  }
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_APP_PASSWORD
    }
  });
};

app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'Email server is running' });
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, companyName, phone, serviceRequired, message } = req.body;

    if (!name || !email || !companyName || !phone) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields'
      });
    }

    const transporter = createTransporter();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.SALES_EMAIL,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1f2937; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">New Contact Form Submission</h2>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Company:</strong> ${companyName}</p>
            <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
          </div>
          <div style="background: #ffffff; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px;">
            <h3 style="color: #1f2937; margin-top: 0;">Message:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message || 'No message provided'}</p>
          </div>
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #6b7280; font-size: 14px;">
            <p>This message was sent from the Vydyut Solutions contact form.</p>
          </div>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({ success: false, message: 'Failed to send email', error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Email server running on port ${PORT}`);
  console.log(`📧 Sales emails will be sent to: ${process.env.SALES_EMAIL}`);
});

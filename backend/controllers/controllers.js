const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

// Email transport
const createTransporter = () =>
  nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

exports.submitContactForm = async (req, res) => {
  try {
    const { name, email, location, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ success: false, message: 'Required fields missing' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, message: 'Invalid email format' });
    }

    const newContact = await Contact.create({ name, email, location, subject, message });

    const transporter = createTransporter();

    // To admin
    const adminEmail = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `📬 New message: ${subject}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // To user
    const userReply = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting me!',
      html: `
        <p>Hello ${name},</p>
        <p>Thank you for your message. I’ll get back to you soon!</p>
        <p><i>Your message:</i> "${message}"</p>
      `,
    };

    await transporter.sendMail(adminEmail);
    await transporter.sendMail(userReply);

    res.status(200).json({
      success: true,
      message: 'Message sent and email delivered!',
      data: newContact,
    });
  } catch (err) {
    console.error('Contact error:', err);
    res.status(500).json({ success: false, message: 'Server error, try again later.' });
  }
};

exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 }).limit(100);
    res.json({ success: true, data: contacts });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to fetch messages' });
  }
};

exports.markAsRead = async (req, res) => {
  try {
    const updated = await Contact.findByIdAndUpdate(req.params.id, { status: 'read' }, { new: true });
    if (!updated) {
      return res.status(404).json({ success: false, message: 'Not found' });
    }
    res.json({ success: true, data: updated });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to update status' });
  }
};

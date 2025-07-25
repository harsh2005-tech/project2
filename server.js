const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Message schema/model
const messageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});
const Message = mongoose.model('Message', messageSchema);

// Certificate schema/model
const certificateSchema = new mongoose.Schema({
  title: { type: String, required: true },
  platform: { type: String, required: true },
  image: { type: String, required: true },
  url: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});
const Certificate = mongoose.model('Certificate', certificateSchema);

app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    // Save message to MongoDB
    const newMessage = new Message({ name, email, message });
    await newMessage.save();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER || process.env.EMAIL_USER,
      subject: `New Contact Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Message:</b><br/>${message}</p>`
    });

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to send message.' });
  }
});

// Get all certificates
app.get('/api/certificates', async (req, res) => {
  try {
    const certificates = await Certificate.find().sort({ createdAt: -1 });
    res.json(certificates);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch certificates.' });
  }
});

// Add a new certificate
app.post('/api/certificates', async (req, res) => {
  const { title, platform, image, url, description } = req.body;
  if (!title || !platform || !image || !url || !description) {
    return res.status(400).json({ error: 'All fields are required.' });
  }
  try {
    const newCert = new Certificate({ title, platform, image, url, description });
    await newCert.save();
    res.json({ success: true, certificate: newCert });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add certificate.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 
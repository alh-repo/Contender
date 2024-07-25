const express = require('express');
const nodemailer = require('nodemailer');
const uuid = require('uuid');
const bcrypt = require('bcryptjs');
const router = express.Router();

// Configure nodemailer
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password'
    }
});

const magicLinks = {}; // In-memory storage for demo purposes

// Endpoint to request a magic link
router.post('/request-magic-link', (req, res) => {
    const { email } = req.body;
    if (!email) return res.status(400).send('Email is required');

    const token = uuid.v4();
    magicLinks[token] = { email, createdAt: Date.now() };

    const link = `http://localhost:3000/login?token=${token}`;

    const mailOptions = {
        from: 'your-email@gmail.com',
        to: email,
        subject: 'Your Magic Link',
        text: `Click here to log in: ${link}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) return res.status(500).send(error.toString());
        res.send('Magic link sent');
    });
});

// Endpoint to verify the magic link token
router.get('/verify-magic-link', (req, res) => {
    const { token } = req.query;
    const magicLink = magicLinks[token];

    if (!magicLink || Date.now() - magicLink.createdAt > 15 * 60 * 1000) {
        return res.status(400).send('Invalid or expired token');
    }

    const email = magicLink.email;
    delete magicLinks[token];

    res.send({ message: `Logged in as ${email}`, email });
});

module.exports = router;

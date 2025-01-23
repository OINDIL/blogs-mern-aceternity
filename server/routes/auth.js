const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.post('/register', async (req, res) => {
    const { email, password, name, role = 'user' } = req.body;
    console.log({ email, password, name, role });
    if (!email || !password || !name) {
        return res.status(400).json({ message: 'Credentials are required' });
    }

    // const existingUserWithEmail = await User.findOne({ email });
    // if (existingUserWithEmail) {
    //     return res.status(400).json({ message: 'User already exists' });
    // }

    // const existingUserWithAdminRole = await User.findOne({ role: 'admin' });
    // if (existingUserWithAdminRole) {
    //     return res.status(400).json({ message: 'Admin user already exists' });
    // }


    const newUser = await User.create({ email, password, name, role });
    // console.log(newUser)


    res.status(201).json({ message: `${role || newUser.role} registered successfully` });
});

// Login route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // console.log({ email, password });

    const user = await User.findOne({ email });
    console.log(user)
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!user || !passwordMatch) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // res.json({ message: 'Login successful', token });

    res.cookie("token", token, {
        httpOnly: true, // Prevents access by JavaScript
        secure: process.env.NODE_ENV === "production", // Ensures HTTPS in production
        sameSite: "Strict", // Helps prevent CSRF
        maxAge: 3600000, // 1 hour
    });

    res.status(200).json({ message: 'Login successful', token });
});

// checking for token in the frontend
router.get('/check', (req, res) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ message: 'No token' });
        }

        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) return res.status(403).json({ message: 'Token is invalid or expired' });

            res.status(200).json({ status: "Authenticated user" });
        });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }

});

module.exports = router;
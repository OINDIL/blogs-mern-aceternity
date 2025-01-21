require('dotenv').config();
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());

app.use(cors({
    origin: "http://localhost:5173", // Replace with the URL of your frontend
    credentials: true,
}));
app.use(cookieParser());

const users = [
    { email: 'admin@admin.com', password: bcrypt.hashSync('admin', 10) }
]; // Temporary in-memory user store with a static user


// Signup route
app.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ email, password: hashedPassword });
    res.status(201).json({ message: 'User registered successfully' });
});

// Login route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password)
    const user = users.find(u => u.email === email);



    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ email: user.email }, 'oindil', { expiresIn: '1h' });

    // res.json({ message: 'Login successful', token });

    res.cookie("token", token, {
        httpOnly: true, // Prevents access by JavaScript
        secure: process.env.NODE_ENV === "production", // Ensures HTTPS in production
        sameSite: "Strict", // Helps prevent CSRF
        maxAge: 3600000, // 1 hour
    });

    res.status(200).json({ message: 'Login successful' });
});

app.get('/check', (req, res) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ message: 'No token' });
        }

        jwt.verify(token, 'oindil', (err, user) => {
            if (err) return res.status(403).json({ message: 'Token is invalid or expired' });

            res.status(200).json({ status: "Authenticated user" });
        });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }

});

app.listen(3000, () => console.log('Server running on port 3000'));

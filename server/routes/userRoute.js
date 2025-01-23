const express = require('express');
const User = require('../models/User');
const router = express.Router();;

const verifyToken = require('../middlewares/verifyToken');
const authorizationMiddleware = require('../middlewares/authorizationMiddleware');

router.get('/profile', verifyToken, authorizationMiddleware('user', 'admin'), async (req, res) => {
    const { id } = req.query
    try {
        const user = await User.findById(id);
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

router.get('/admin', verifyToken, authorizationMiddleware('admin'), async (req, res) => {
    const { id } = req.query
    try {
        const user = await User.findById(id);
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
})

module.exports = router;
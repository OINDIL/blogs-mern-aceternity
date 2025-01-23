const jwt = require('jsonwebtoken');
const verifyToken = (req, res, next) => {
    const token = req.cookies.token;
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) return res.status(403).json({ message: "Token is invalid or expired" });
            req.user = user;
            next();
        });
    } else {
        res.status(401).json({ message: "No token" });
    }
};

module.exports = verifyToken;
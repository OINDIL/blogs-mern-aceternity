const authorizationMiddleware = (...authRoles) => {
    return (req, res, next) => {
        if (authRoles.includes(req.user.role)) {
            next();
        } else {
            return res.status(403).json({ message: 'Access denied' });
        }
    };
}

module.exports = authorizationMiddleware
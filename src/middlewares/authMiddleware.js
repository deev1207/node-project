// authMiddleware.js
const jwt = require('jsonwebtoken');
const User = require('../models/User');

async function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401); // Unauthorized

    try {
        const decoded = jwt.verify(token, 'secret'); // Change 'secret' to your own secret key
        const user = await User.findOne({ username: decoded.name });
        if (!user) return res.sendStatus(403); // Forbidden

        req.user = user;
        next();
    } catch (error) {
        console.error('Error authenticating token:', error);
        return res.sendStatus(403); // Forbidden
    }
}

module.exports = {
    authenticateToken
};

// auth.js
const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config()

function generateToken(username) {
    return jwt.sign({ username }, process.env.SECRET_KEY, { expiresIn: '1h' }); // Change 'secret' to your own secret key
}

async function authenticate(name) {
    try {
        const user = await User.findOne({ name });
        if (!user) return null;

        const token = generateToken(name);
        return { user, token };
    } catch (error) {
        console.error('Error authenticating user:', error);
        return null;
    }
}

module.exports = {
    authenticate,
    generateToken
};

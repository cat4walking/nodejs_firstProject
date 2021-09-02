const jwt = require('jsonwebtoken');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './.env') });

module.exports = vertifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    // token = token.split(' ')[1];
    if (!token) return res.status(400).render('home', { layout: 'login.hbs' });
    try {
        const vertified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = vertified;
        next();
    } catch (err) {
        res.status(400).send('Invalid');
    }
};


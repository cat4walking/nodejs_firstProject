const jwt = require('jsonwebtoken');

module.exports = vertifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    // token = token.split(' ')[1];
    if (!token) return res.status(400).render('home', { layout: 'login.hbs' });
    try {
        const vertified = jwt.verify(token, 'bhsawlljycdiabo');
        req.user = vertified;
        next();
    } catch (err) {
        res.status(400).send('Invalid');
    }
};


const jwt = require('jsonwebtoken');

module.exports = vertifyToken = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) return res.status(400).send('Acess Denied');
    try {
        const vertified = jwt.verify(token, 'bhsawlljycdiabo');
        req.user = vertified;
        next();
    } catch (err) {
        res.status(400).send('Invalid');
    }
};


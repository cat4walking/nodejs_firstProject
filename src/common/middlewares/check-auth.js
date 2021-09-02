const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const decode = jwt.verify(req.header('auth-token'), 'bhsawlljycdiabo');
        req.user = decode;
        res.send('successfully')
        next();
    } catch (error) {
        res.status(400).send(error)
    }
};
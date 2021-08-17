const User = require('../models/User');
const { registerValidation, loginValidation } = require('../helper/validation');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
//validation

class loginController {
    async register(req, res, next) {
        const { error } = registerValidation(req.body);
        if (error) return res.status(400).send(error.details[0].message);
        // checking if the user already in the database
        const emailExist = await User.findOne({ email: req.body.email });
        if (emailExist) return res.status(400).send('Email already exists');
        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password, salt);
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashPassword
        });
        user.save()
            .then(() => {
                res.send({ user: user._id });
            }).catch((err) => {
                res.status(400).send(err);
            });
    };
    async login(req, res, next) {
        const { error } = loginValidation(req.body);
        if (error) return res.status(400).send(error.details[0].message);
        // checking if email exists
        const user = await User.findOne({ email: req.body.email });
        if (!user) return res.status(400).send('Email is not found');
        // Password is correct
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) return res.status(400).send('Password is valid');
        // creat and assign token
        // const token = jwt.sign({_id: user._id}, process.env.TOKEN_SERCET);
        const token = jwt.sign({ _id: user._id }, 'bhsawlljycdiabo');
        res.header('auth-token', token).send(token);

    }
    index(req, res, next) {
        res.render('news', { layout: 'login.hbs' });
    };
};

module.exports = new loginController();
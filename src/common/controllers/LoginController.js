const User = require('../models/User');
const News = require('../models/News');
const { registerValidation, loginValidation } = require('../helper/validation');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './.env') });
//validation

class loginController {
    async register(req, res, next) {
        const { error } = registerValidation(req.body);
        if (error) return res.render("home", {
            layout: 'login.hbs',
            errors: error.details
        })
        // checking if the user already in the database
        const emailExist = await User.findOne({ email: req.body.email });
        if (emailExist) return res.status(400).send('Email already exists');
        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password, salt);
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashPassword,
        });
        user.save()
            .then(() => {
                res.redirect('back');
            }).catch((err) => {
                res.status(400).send(err);
            });
    };
    async login(req, res, next) {
        const { error } = loginValidation(req.body);
        if (error) return res.status(400).render("home", {
            layout: 'login.hbs',
            errorlogin: error.details
        });
        // checking if email exists
        const user = await User.findOne({ email: req.body.email });
        if (!user) return res.status(400).render('home',
            {
                layout: 'login.hbs',
                errorlogin: error
            }
        );
        // Password is correct
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) return res.status(400).render('home',
            {
                layout: 'login.hbs',
                errorlogin: error
            }
        );
        // creat and assign token.
        const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, {
            expiresIn: '30s'
        });
        res.header('authorization', token);
        res.redirect('home');
        // res.send('Please');
    }
    index(req, res, next) {
        res.render('listmembers', { layout: 'login.hbs' });
    };
};

module.exports = new loginController();
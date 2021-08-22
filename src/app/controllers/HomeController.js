const { render } = require('node-sass');
const Member = require('../models/Members');
const User = require('../models/User');
const News = require('../models/News');
class HomeController {
    // [GET] /
    async index(req, res, next) {
        try {
            const news = await News.findOne().lean()
            const member = await Member.find().lean()
            res.render('home', { news, member })
        }
        catch (error) {
            next(error);
        }
    }
}
module.exports = new HomeController();

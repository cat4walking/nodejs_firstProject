const Member = require('../models/Members');
const User = require('../models/User');
const News = require('../models/News');
class HomeController {
    // [GET] /
    async index(req, res, next) {
        try {
            const news = await News.find({ category: "science" }).lean();
            const member = await Member.find({}).lean();
            res.render('home', { news, member });
        }
        catch (error) {
            next(error);
        }
    }
}
module.exports = new HomeController();

const Member = require('../models/Members');
class SiteController {
    // [GET] /
    index(req, res, next) {
        res.render('home');
    }
    search(req, res) {
        res.render('search');
    }
}
module.exports = new SiteController();

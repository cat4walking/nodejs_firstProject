const Member = require('../models/Members');
class SiteController {
    // [GET] /
    index(req, res, next) {
        Member.find({}).lean()
            .then(member => res.render('home', { member }))
            .catch(next);
    }
    search(req, res) {
        res.render('search');
    }
}
module.exports = new SiteController();

const Member = require('../models/Members');
class ContactController {
    index(req, res, next) {
        Member.find({}).lean()
            .then(member => res.render('home', { member }))
            .catch(next);
    }
}
module.exports = new ContactController();

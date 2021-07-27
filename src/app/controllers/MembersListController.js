const Member = require('../models/Members');
class MembersListController {
    index(req, res, next) {
        Member.find({}).lean()
            .then(member => res.render('listmembers', { member }))
            .catch(next);
    };
}

module.exports = new MembersListController();
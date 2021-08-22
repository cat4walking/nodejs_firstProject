const Member = require('../models/Members');
const jwt = require('jsonwebtoken');
class MembersListController {
    index(req, res, next) {
        Member.find({}).lean()
            .then(member => res.render('listmembers', { member }))
            .catch(next);
    }
};

module.exports = new MembersListController();
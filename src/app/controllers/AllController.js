const Member = require('../models/Members');
class AllController {
    // [GET] /
    uploadedMembers(req, res, next) {
        Member.find({}).lean()
            .then(member => {
                res.render('all/uploaded-members', { member });
            })
            .catch(next);
    }
}
module.exports = new AllController();

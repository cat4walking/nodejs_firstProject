const Member = require('../models/Members');
class AllController {
    // [GET] / all/uploaded/members
    uploadedMembers(req, res, next) {
        Promise.all([Member.find({}).lean(), Member.countDocumentsDeleted().lean()])
            .then(([member, deletedCount]) => {
                res.render('all/uploaded-members', { deletedCount, member });
            })
            .catch(next);
        // Member.countDocumentsDeleted()
        //     .then((deletedCount) => {
        //         console.log(deletedCount);
        //     })
        //     .catch(() => { });

        // Member.find({}).lean()
        //     .then(member => {
        //         res.render('all/uploaded-members', { member });
        //     })
        //     .catch(next);
    }
    // [GET] / all/trash/members
    trashMembers(req, res, next) {
        Member.findDeleted({}).lean()
            .then(member => {
                res.render('all/trash-members', { member });
            })
            .catch(next);
    }
}
module.exports = new AllController();

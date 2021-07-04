const Member = require('../models/Members');
class MemberController {
    show(req, res, next) {
        Member.findOne({ slug: req.params.slug }).lean()
            .then(member => {
                res.render('members/show', { member })
            })
            .catch(next);
    }
    create(req, res, next) {
        res.render('members/create');
    }
    // post action
    successfully(req, res, next) {
        const readImage = req.body;
        readImage.image = `https://i.ytimg.com/vi/${readImage.videoid}/maxresdefault.jpg`;
        const member = new Member(readImage);
        member.save()
            .then(() => {
                res.redirect('/')
            })
            .catch(error => {

            });
    }
}
module.exports = new MemberController();

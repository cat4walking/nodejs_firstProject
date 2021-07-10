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
    // edit
    edit(req, res, next) {
        Member.findById(req.params.id).lean()
            .then(member => res.render('members/edit', {
                member
            }))
            .catch(next);
    }
    // [PUT] /members/:id
    update(req, res, next) {
        Member.updateOne({ _id: req.params.id }, req.body)
            .then(() =>
                res.redirect('/all/uploaded/members')
            )
            .catch(next)
    }
    // [DELETE]] /members/:id
    destroy(req, res, next) {
        Member.deleteOne({ _id: req.params.id })
            .then(() => {
                res.redirect('back')
            })
            .catch(next);
    }
}
module.exports = new MemberController();

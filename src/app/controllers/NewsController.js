const News = require('../models/News');
class NewsController {
    // get / news
    index(req, res, next) {
        News.find({}).lean()
            .then(news => res.render('news', { news }))
            .catch(next);
    };

    create(req, res, next) {
        res.render('postnews/createpost');
    };
    // [GET] news/slug
    show(req, res, next) {
        News.findOne({ slug: req.params.slug }).lean()
            .then(news => {
                res.render('postnews/detail', { news })
            })
            .catch(next)
    };
    successfully(req, res, next) {
        let news = new News({
            title: req.body.title,
            content: req.body.content,
            author: req.body.author,
        });
        if (req.file) {
            news.image = req.file.filename;
        } else {
            res.status('400');
            res.send('Please upload a file');
        }
        news.save()
            .then(() => {
                res.redirect('/news/')
            })
            .catch(next);
        console.log(news);
    };
    destroy(req, res, next) {
        News.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    };
    //[GET]
    edit(req, res, next) {
        News.findById({ _id: req.params.id }).lean()
            .then(news => {
                res.render('postnews/edit', { news });
            })
            .catch(next);
    };
    // [PUT]
    update(req, res, next) {
        News.updateOne({ _id: req.params.id }, {
            title: req.body.title,
            content: req.body.content,
            image: req.file.filename,
        }).lean()
            .then((news) => {
                res.redirect('/listnews/uploaded/news')
            })
            .catch(next);

    };
    deleteOne(req, res, next) {
        News.deleteOne({})
            .then(() => {
                res.redirect('back')
            })
            .catch(next);
    }
    //form action
    formAction(req, res, next) {
        switch (req.body.action) {
            case 'delete':
                News.delete({ _id: { $in: req.body.newsIds } })
                    .then(() => {
                        res.redirect('back')
                    })
                    .catch(next);
                break;
            default:
                res.json(
                    {
                        message: 'Action is invalid !!!'
                    }
                );
        }
    };
    //action finally
    actionFinally(req, res, next) {
        switch (req.body.action) {
            case 'delete':
                News.deleteMany({})
                    .then(() => {
                        res.redirect('back')
                    })
                    .catch(next);
                break;
            case 'restore':
                News.restore({})
                    .then(() => {
                        res.redirect('back')
                    })
                    .catch(next);
                break;
            default:
                res.json({
                    message: 'Action is invalid!!!'
                });
        }
    }
}
module.exports = new NewsController();

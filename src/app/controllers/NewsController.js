const News = require('../models/News');

const APP_URL = 'http://localhost:3000/upload/images/'
// Lưu biến này vào env

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
                const imgUrl = APP_URL.concat(news.image)
                news.image = imgUrl;
                console.log(news)
                res.render('postnews/detail', { news })
            })
            .catch(next)
    };
    successfully(req, res, next) {
        let news = new News({
            title: req.body.title,
            content: req.body.content,
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
    };



}
module.exports = new NewsController();

const News = require('../models/News');
class NewsController {
    // get / news
    index(req, res, next) {
        News.find({}).lean()
            .then(news => res.render('news', { news }))
            .catch(next);
    }
    // [GET] news/slug
    show(req, res) {
        res.send('News Detail');
    }
}
module.exports = new NewsController();

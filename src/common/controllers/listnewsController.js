const News = require('../models/News');
class ListNewsController {
    uploadedNews(req, res, next) {
        Promise.all([News.find({}).lean().sortable(req), News.countDocumentsDeleted().lean()])
            .then(([news, deletedCount]) => {
                res.render('listnews/uploaded-news', { news, deletedCount })
            })
            .catch(next);
    }
    trashNews(req, res, next) {
        News.findDeleted({}).lean()
            .then(news => {
                res.render('listnews/trash-news', { news })
            })
            .catch(next);
    };
    //[PATCH]
    restore(req, res, next) {
        News.restore({ _id: req.params.id }).lean()
            .then(() => {
                res.redirect('back');
            })
            .catch(next);
    };
};
module.exports = new ListNewsController();
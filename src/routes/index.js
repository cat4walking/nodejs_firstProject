const newRouter = require('./news');
const siteRouter = require('./site');
const membersRouter = require('./members');
const contactRouter = require('./contact');
const { contact } = require('../app/controllers/ContactController');
function route(app) {
    app.use('/news', newRouter);
    app.use('/members', membersRouter);
    app.use('/contact', contactRouter);
    app.use('/', siteRouter);
}
module.exports = route;

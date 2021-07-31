const newsRouter = require('./news');
const allRouter = require('./all');
const siteRouter = require('./site');
const membersRouter = require('./members');
const contactRouter = require('./contact');
const membersListRouter = require('./membersList');
const { contact } = require('../app/controllers/ContactController');
function route(app) {
    app.use('/listmembers', membersListRouter);
    app.use('/news', newsRouter);
    app.use('/all', allRouter);
    app.use('/members', membersRouter);
    app.use('/contact', contactRouter);
    app.use('/', siteRouter);
}
module.exports = route;

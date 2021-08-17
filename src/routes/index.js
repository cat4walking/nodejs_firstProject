const newsRouter = require('./news');
const listRouter = require('./listnews');
const allRouter = require('./all');
const homeRouter = require('./home');
const membersRouter = require('./members');
const contactRouter = require('./contact');
const membersListRouter = require('./membersList');
// const registerRouter = require('./register');
const loginRouter = require('./login')
const { contact } = require('../app/controllers/ContactController');
function route(app) {
    app.use('/listmembers', membersListRouter);
    app.use('/news', newsRouter);
    app.use('/listnews', listRouter);
    app.use('/all', allRouter);
    app.use('/members', membersRouter);
    app.use('/contact', contactRouter);
    app.use('/home', homeRouter);
    // app.use('/register', registerRouter);
    app.use('/', loginRouter);
}
module.exports = route;

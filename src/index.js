const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();
const methodOverride = require('method-override');
const handlebars = require('express-handlebars');
require('dotenv').config({ path: path.resolve(__dirname, './.env') });
// sortMiddleware
const SortMiddleware = require('./common/middlewares/SortMiddleware')
// Using Node.js `require()`
const { Console } = require('console');
const route = require('./routes');
const db = require('./config/db');
db.connect();
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public',)));
app.set('views', path.join(__dirname, 'resource', 'views',));
app.use(SortMiddleware);
app.use(morgan('combined'));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(methodOverride('_method'));
app.use(express.json());
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        helpers: require('./common/helper/handlebars'),
    }),
);
// routes init

app.listen(process.env.PORT || 3000, () => {
    console.log(`sever running on: http://localhost:${process.env.PORT}`);
});
route(app);

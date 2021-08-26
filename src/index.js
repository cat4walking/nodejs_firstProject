const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();
const methodOverride = require('method-override');
const handlebars = require('express-handlebars');
require('dotenv').config({ path: path.resolve(__dirname, './.env') });
// sortMiddleware
const SortMiddleware = require('./app/middlewares/SortMiddleware')
// Using Node.js `require()`
const { Console } = require('console');
const route = require('./routes');
const port = process.env.PORT_API;
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
        helpers: require('./app/helper/handlebars'),
    }),
);
// routes init

app.listen(process.env.PORT_API, () => {
    console.log(`http://localhost:${process.env.PORT_API}`);
});
route(app);

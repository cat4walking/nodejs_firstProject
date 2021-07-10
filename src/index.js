const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();
const methodOverride = require('method-override');
const handlebars = require('express-handlebars');
// Using Node.js `require()`
const { Console } = require('console');
const route = require('./routes');
const port = 3000;
const db = require('./config/db');
db.connect();
app.use(express.static(path.join(__dirname, 'public')));
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
        helpers: {
            sum: (a, b) =>
                a + b
        }
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource', 'views'));

// routes init

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
route(app);

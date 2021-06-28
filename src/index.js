const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();
const handlebars = require('express-handlebars');
const { Console } = require('console');
const route = require('./routes');
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('combined'));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));

// routes init
route(app);

app.listen
    (port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
    });

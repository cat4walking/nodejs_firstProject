const Handlebars = require('handlebars');

module.exports = {
    sum: (a, b) =>
        a + b,
    sortable: (field, sort) => {
        const icons = {
            default: 'oi oi-elevator',
            asc: 'oi oi-sort-ascending',
            desc: 'oi oi-sort-descending',
        };

        const sortType = field === sort.column ? sort.type : 'default';

        const types = {
            default: 'desc',
            asc: 'desc',
            desc: 'asc',
        };

        const icon = icons[sortType];
        const type = types[sortType];
        // HTMl esacping --- protect URI
        const address = Handlebars.escapeExpression(`?_sort&column=${field}&type=${type}`);
        const output = `<a href="${address}"><span class="${icon}"></span></a>`;
        return new Handlebars.SafeString(output);
    }
};
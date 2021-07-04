const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);
const Member = new Schema({
    name: { type: String, require: true, },
    description: { type: String, maxLength: 500 },
    image: { type: String, default: '' },
    videoid: { type: String, require: true, },
    slug: { type: String, slug: 'name' }
}, {
    timestamps: true
});

module.exports = mongoose.model('Member', Member);

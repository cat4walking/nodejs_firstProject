const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');


const Member = new Schema({
    name: { type: String, require: true, },
    description: { type: String, maxLength: 500 },
    image: { type: String, default: '' },
    videoid: { type: String, require: true, },
    price: { type: String, require: true },
    slug: { type: String, slug: 'name' }
}, {
    timestamps: true
});

// add plugins
mongoose.plugin(slug);
Member.plugin(mongooseDelete, { deletedAt: true, overrideMethods: 'all' }); // plugin soft delete
module.exports = mongoose.model('Member', Member);

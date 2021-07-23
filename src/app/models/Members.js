const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const MemberSchema = new Schema({
    _id: { type: Number },
    name: { type: String, require: true, },
    description: { type: String, maxLength: 500 },
    image: { type: String, default: '' },
    videoid: { type: String, require: true, },
    price: { type: String, require: true },
    slug: { type: String, slug: 'name' }
}, {
    _id: false,
    timestamps: true
});

// Custom query helper
MemberSchema.query.sortable = function (req) {
    if (req.query.hasOwnProperty('_sort')) {
        const isValidType = ['asc', 'desc'].includes(req.query.type);
        return this.sort({
            [req.query.column]: isValidType ? req.query.type : 'desc',
        });
    }
    return this;

};


// add plugins
mongoose.plugin(slug);
MemberSchema.plugin(AutoIncrement);
MemberSchema.plugin(mongooseDelete, { deletedAt: true, overrideMethods: 'all' }); // plugin soft delete
module.exports = mongoose.model('Member', MemberSchema);

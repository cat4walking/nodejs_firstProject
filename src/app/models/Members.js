const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');


const MemberSchema = new Schema({
    name: { type: String, require: true, },
    description: { type: String, maxLength: 500 },
    image: { type: String, default: '' },
    videoid: { type: String, require: true, },
    price: { type: String, require: true },
    slug: { type: String, slug: 'name' }
}, {
    timestamps: true
});

// Custom query helper
MemberSchema.query.sortable = function (req) {
    if (req.query.hasOwnProperty('_sort')) {
        const isValidType = ['asc', 'desc'].includes(req.query.type);
        console.log(isValidType);
        return this.sort({
            [req.query.column]: isValidType ? req.query.type : 'desc',
        });
    }
    return this;

};


// add plugins
mongoose.plugin(slug);
MemberSchema.plugin(mongooseDelete, { deletedAt: true, overrideMethods: 'all' }); // plugin soft delete
module.exports = mongoose.model('Member', MemberSchema);

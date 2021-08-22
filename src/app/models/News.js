const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const NewsSchema = new Schema(
    {
        _id: { type: Number },
        title: { type: String, },
        content: { type: String },
        image: { type: String },
        author: { type: String, },
        slug: { type: String, slug: 'title' },
    },
    {
        _id: false,
        timestamps: true,
    }
);


// Custom query helper
NewsSchema.query.sortable = function (req) {
    if (req.query.hasOwnProperty('_sort')) {
        const isValidType = ['asc', 'desc'].includes(req.query.type);
        return this.sort({
            [req.query.column]: isValidType ? req.query.type : 'desc',
        });
    }
    return this;
};

mongoose.plugin(slug);
NewsSchema.plugin(AutoIncrement, { id: 'sensor_id_counter' });
NewsSchema.plugin(mongooseDelete, { deletedAt: true, overrideMethods: 'all' }); // plugin soft delete -- dont show filed has deleteAt:true
module.exports = mongoose.model('News', NewsSchema);
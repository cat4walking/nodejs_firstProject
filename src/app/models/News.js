const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
// const AutoIncrement = require('mongoose-sequence')(mongoose);

const NewsSchema = new Schema(
    {
        title: { type: String, },
        content: { type: String },
        image: { type: String },
        slug: { type: String, slug: 'title' },
    },
    {
        timestamps: true,
    }
);

NewsSchema.plugin(mongooseDelete, { deletedAt: true, overrideMethods: 'all' }); // plugin soft delete -- dont show filed has deleteAt:true
mongoose.plugin(slug);
// NewsSchema.plugin(AutoIncrement);
module.exports = mongoose.model('News', NewsSchema);
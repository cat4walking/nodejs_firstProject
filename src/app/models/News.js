const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
// const AutoIncrement = require('mongoose-sequence')(mongoose);

const NewsSchema = new Schema(
    {
        _id: { type: Number },
        title: { type: String, require: true },
        content: { type: String },
    },
    {
        timestamps: true,
    }
);

NewsSchema.plugin(mongooseDelete, { deletedAt: true, overrideMethods: 'all' }); // plugin soft delete
mongoose.plugin(slug);
// NewsSchema.plugin(AutoIncrement);
module.exports = mongoose.model('News', NewsSchema);
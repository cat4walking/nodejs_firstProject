const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');

const UserSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            min: 6
        },
        email: {
            type: String,
            required: true,
            max: 200,
            min: 6
        },
        password: {
            type: String,
            required: true,
            max: 1000,
            min: 4
        },
        conPassword: {
            type: String,
        },
        date: {
            type: Date,
            default: Date.now
        }
    },
    {
        timestamps: true
    }
);



module.exports = mongoose.model('User', UserSchema);
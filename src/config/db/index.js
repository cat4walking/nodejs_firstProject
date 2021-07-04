const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/fit_levels_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("connect success !!")
    } catch (error) {
        console.log("connect failed !!")
    }
}
module.exports = { connect };
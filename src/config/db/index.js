const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb+srv://cat4walking:cat4walking@edufitness.eh8s7.mongodb.net/test', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
        console.log("connect success !!")
    } catch (error) {
        console.log("connect failed !!")
    }
}
module.exports = { connect };
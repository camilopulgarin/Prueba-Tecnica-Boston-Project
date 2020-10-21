const mongoose = require('mongoose');
const { Schema } = mongoose;

const Cars = new Schema({
    plate: String,
    model: String

});

module.exports = mongoose.model('Cars',Cars);
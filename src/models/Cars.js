const mongoose = require('mongoose');
const { Schema } = mongoose;

//Schema Cars

const Cars = new Schema({
    plate: String,
    model: String

});

module.exports = mongoose.model('Cars',Cars);
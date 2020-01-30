const mongoose = require("mongoose");

const AlgoSchema = new mongoose.Schema({
    difficulty: {type: String, required: true},
    algorithm: {type: String, required: true}
}, {timestamps: true});

module.exports = mongoose.model('algo', AlgoSchema);
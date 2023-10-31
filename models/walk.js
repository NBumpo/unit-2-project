const mongoose = require("mongoose");

const walkSchema = new mongoose.Schema({
    caption: String,
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    distanceTraveled: String,
    date: Date,
    userName: String,
    userAvatar: String,
})


module.exports = mongoose.model('Walk', walkSchema);
const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    
    content: {
        type: String,
        required: true,
    },

    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    userAvatar: String
})
const walkSchema = new mongoose.Schema({
    caption: String,
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    distanceTraveled: String,
    date: Date,
    userName: String,
    userAvatar: String,
    comments: [commentSchema],
    
})


module.exports = mongoose.model('Walk', walkSchema);
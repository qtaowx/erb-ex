// 定義事件模型
const mongoose = require("mongoose");
const eventSchema = new mongoose.Schema({
    title: String,
    start: Date,
    end: Date,
    description: String,
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});
module.exports = mongoose.model('Event', eventSchema);
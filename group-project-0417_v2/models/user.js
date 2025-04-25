const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: String
    },
    avatar: { // 新增的 avatar 欄位
        data: Buffer, // 儲存圖片的二進制資料
        contentType: String, // 儲存圖片的 MIME 類型 (例如 'image/jpeg', 'image/png')
        filename: String // 可選：儲存原始檔案名稱
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('User', UserSchema);
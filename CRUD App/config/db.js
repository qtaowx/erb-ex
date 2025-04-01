const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        await mongoose.connect('mongodb://localhost:27017/mydb');
        console.log('MongoDB Connected');
    }catch(e){
        console.error("MongoDB Error: ",e);
        process.exit(1);
    }
}

module.exports = connectDB;
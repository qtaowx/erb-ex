const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    image:{type:String}
})

const Item = mongoose.model('Item', ItemSchema);

module.exports = Item;
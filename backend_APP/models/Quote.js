const mongoose = require("mongoose")
const QuoteSchema = new mongoose.Schema({
    author:{
        type:String,
        required:true,
        trim:true
    },
    text:{
        type:String,
        required:true,
        trim:true
    }
})
let Quotes = mongoose.model('Quote',QuoteSchema);
module.exports = Quotes;
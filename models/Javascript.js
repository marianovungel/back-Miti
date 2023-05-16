const mongoose = require('mongoose');

const JavascriptSchema = new mongoose.Schema({
    question:String,
    resposta:Array,
    tipo:String,
    url:String,
    lang:String
},
    {timestamps: true}
);

module.exports = mongoose.model("Javascript", JavascriptSchema);
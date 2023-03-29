const mongoose = require('mongoose');

const PerguntaSchema = new mongoose.Schema({
    question:String,
    resposta:Array,
    tipo:String,
    url:String,
    lang:String
},
    {timestamps: true}
);

module.exports = mongoose.model("Pergunta", PerguntaSchema);
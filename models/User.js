const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nome:String,
    senha: String,
    pontoC: Number,
    pontoJava: Number,
    pontoJS: Number,
    pontoPY: Number
},
    {timestamps: true}
);

module.exports = mongoose.model("User", UserSchema);
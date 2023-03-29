require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
require('./db')

const pergunta = require('./routes/Perguntas')
const user = require('./routes/User')

app.use(express.json())
app.use(cors())

app.use("/pergunta", pergunta)
app.use("/user", user)



app.listen(process.env.PORT, console.log("Servidor Funcionando na Porta = " + process.env.PORT))
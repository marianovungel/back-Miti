const express = require('express')
const Pergunta = require('../models/Perguntas')
const router = express.Router()


router.get("/", async(req, res)=>{
    try {
        const data = await Pergunta.find()
        res.status(200).json(data)
    } catch (error) {
        res.status(404).json(error)
    }
})
router.put("/:id", async(req, res)=>{
    try {
        const data = await Pergunta.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json(data)
    } catch (error) {
        res.status(404).json(error)
    }
})
router.post("/", async(req, res)=>{
    try {
        const body = new Pergunta(req.body)
        const newPergunta = await body.save()
        res.status(200).json(newPergunta)
    } catch (error) {
        res.status(404).json(error)
    }
})

module.exports = router;
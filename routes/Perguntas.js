const express = require('express')
const Pergunta = require('../models/Perguntas')
const router = express.Router()
const fasec = require('../fasec').userget
const fasejv = require('../fasejava').userget
const fasepy = require('../fasepy').userget
const fasejs = require('../fasejs').userget

router.get("/newc", async(req, res)=>{
    try {
        const data = await fasec()
        res.status(200).json(data.data)
    } catch (error) {
        res.status(404).json(error)
        
    }
})
router.get("/newjava", async(req, res)=>{
    try {
        const data = await fasejv()
        res.status(200).json(data.data)
    } catch (error) {
        res.status(404).json(error)
        
    }
})
router.get("/newpy", async(req, res)=>{
    try {
        const data = await fasepy()
        res.status(200).json(data.data)
    } catch (error) {
        res.status(404).json(error)
        
    }
})
router.get("/newjs", async(req, res)=>{
    try {
        const data = await fasejs()
        res.status(200).json(data.data)
    } catch (error) {
        res.status(404).json(error)
        
    }
})
router.get("/:id", async(req, res)=>{
    try {
        const data = await Pergunta.find({lang: req.params.id})
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
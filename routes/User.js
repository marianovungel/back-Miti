const express = require('express')
const User = require('../models/User')
const bcrypt = require('bcrypt')
const router = express.Router()


router.get("/", async(req, res)=>{
    try {
        const data = await User.find()
        res.status(200).json(data)
    } catch (error) {
        res.status(404).json(error)
    }
})
router.get("/login", async(req, res)=>{
    try{
        const user = await User.find({ nome: req.headers.nome});
        if(user.length < 1){
            return res.status(200).json({userNome:true});
        }

        if(user.length > 0){
            const validated = await bcrypt.compare(req.headers.senha, user[0].senha);
            if(!validated){
                return res.status(200).json({userPassword:true});
            }
        }
        
        const {senha, ...others} = user[0]._doc;
        res.status(200).json(others);

    }catch(err){
        return res.status(404).json(err);
        
    }
})
router.get("/users", async(req, res)=>{
    try{
        const user = await User.find({ nome: req.headers.nome});
        const nunberUsers = user.length;
        return res.status(200).json(nunberUsers);
    }catch(err){
        return res.status(404).json(err);
        
    }
})
router.post("/", async(req, res)=>{
    try {
        const body = new User({
            nome: req.body.nome,
            pontoC: 0,
            pontoJava: 0,
            pontoJS: 0,
            pontoPY: 0
        })

        if(req.body.senha){
            //usando bcrypt para incriptar a senha
            const salt = await bcrypt.genSalt(10);
            const hashedPass = await bcrypt.hash(req.body.senha, salt)
            body.senha = hashedPass;
        }
        const newPergunta = await body.save()
        res.status(200).json(newPergunta)
    } catch (error) {
        res.status(404).json(error)
    }
})

router.put("/:id", async(req, res)=>{
    try {
        const use = req.body;
        if(req.body.senha){
            //usando bcrypt para incriptar a senha
            const salt = await bcrypt.genSalt(10);
            const hashedPass = await bcrypt.hash(req.body.senha, salt)
            use.senha = hashedPass;
        }
        const data = await User.findByIdAndUpdate(req.params.id, use)
        res.status(200).json(data)
    } catch (error) {
        res.status(404).json(error)
    }
})

module.exports = router;
const express = require('express');
const User = require('../models/user');
const router = new express.Router();

router.get('/foo',(req,res)=>{
    res.send('Bienvenue dans mon site');
});

router.post('/todos', async (req,res,next)=>{
    // const user =  new User(req.body);

    try{    
    const saveUser = await user.save();
    res.status(201).send(saveUser);
    }catch(e){
        res.status(400).send(e);
    }
});

router.get('/users', async (req,res,next)=>{
    const userId = req.params.id;
    try{
        const user = await User.find({});
        if(!user) return res.status(404).send('User not found!');
        res.send(user);
    }catch(e){
        res.status(500).send(e);
    }
});


router.patch('/users/:id', async (req,res,next)=>{
    const userId = req.params.id;
    try{
        const user = await User.findByIdAndUpdate(userId, req.body,{
            new: true,
            runValidators: true 
        });
        if (!user) return res.status(404).send("user not found!");
        res.send(user);

    }catch(e){
        res.status(500).send(e);
    }
});

router.delete('/users/:id', async (req,res,next)=>{
    const userId = req.params.id;
    try{
        const user = await User.findByIdAndDelete(userId);
        res.send(user);
    }catch(e){
        res.status(500).send(e);
    }
});

module.exports = router
import express from 'express';
import User from '../models/User.js';

const router = express.Router()

router.post('/register', async(req,res,next)=> {
    try {
        const newUser = User(req.body);
        const savedUser = await newUser.save()
        res.status(200).json(savedUser)
    } catch (error) {
        res.status(500).json(error)
    }
})

export default router
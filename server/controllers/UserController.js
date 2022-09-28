import CryptoJS from "crypto-js";
import User from "../models/User.js";

export const updateUser = async(req,res,next) => {
    if(req.body.password){
        req.body.password =  CryptoJS.AES.decrypt(
            req.body.password,
            process.env.PASS_SEC
        ).toString();
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, 
        {
            $set: req.body,
        }, { new: true });
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json(error)
    }
}

export const deleteUser = async(req,res,next) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User has been deleted")
    } catch (err) {
        res.status(500).json(err)
    }
}

export const getUser = async(req,res,next) => {
    try {
        const user = await User.findById(req.params.id);
        const {password, ...others} = user._id;
        res.status(200).json(others)
    } catch (err) {
        res.status(500).json(err)
    }
}

export const getUsers = async(req,res,next) => {
    try {
        const user = await User.find()
        res.status(200).json(user)
    } catch (err) {
        res.status(500).json(err)
    }
}
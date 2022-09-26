import User from "../models/User.js";
import CryptoJS from 'crypto-js';

export const Register = async(req,res) => {
    const newUser = User(...req.body, CryptoJS.AES.encrypt(req.body.password, "Secret Pass"));
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
}
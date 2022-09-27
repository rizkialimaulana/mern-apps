import User from "../models/User.js";
import CryptoJS from 'crypto-js';
import JWT from 'jsonwebtoken';

export const Register = async(req,res) => {
    try {
        const newUser = User({
            username: req.body.username, 
            email: req.body.email, 
            password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString()});
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch (err) {
        res.status(500).json(err)
    }
}

export const Login = async(req,res) => {
    try {
        const user = await User.findOne({username: req.body.username})
        !user && res.status(404).json("Username not found")
    
        const hanshedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);
        const realPassword = hanshedPassword.toString(CryptoJS.enc.Utf8)
        if (realPassword == req.body.password) {
            const acessToken = JWT.sign({
                id: user._id,
                admin: user.isAdmin
            }, process.env.JWT_SEC, {expiresIn: "3d"})
            const {password, ...others} = user._doc;
            res.status(200).json({...others, acessToken});
        }else{
            res.status(404).json("Wrong Password");
        }
    } catch (err) {
        res.status(500).json(err)
    }
}
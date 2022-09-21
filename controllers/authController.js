import User from "../models/User.js";
import bcrypt from 'bcryptjs'
import { createError } from "../error.js";
import jwt from 'jsonwebtoken';

export const Register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({...req.body, password: hash});
    const savedUser = await newUser.save();
    res.status(200).send(savedUser);
  } catch (err) {
    next(createError(404, "not found sorry!"))
  }
};

export const Login = async (req, res, next) => {
  try {
    const user = await User.findOne({name:req.body.name});
    if(!user) return next(createError(404, "User not found"))

    const isCorrect = await bcrypt.compare(req.body.password, user.password)
    if(!isCorrect) return next(createError(400, "Wrong Password"))

    const token = jwt.sign({id:user._id}, process.env.JWT)
    const {password,...others} = user._doc;
    res.cookie("access_token", token, {
      httpOnly:true
    }).status(200).json(others)
  } catch (error) {
    next(error)
  }
};
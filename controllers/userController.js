import User from '../models/User.js';
import {createError} from '../error.js';

//UPDATE USER
export const updateUser = async(req,res,next) => {
    if(req.params.id === req.user.id){
        try {
            const updateUser = await User.findByIdAndUpdate(
                req.params.id, {
                    $set: req.body
                }, {new: true})
            res.status(200).json(updateUser)
        } catch (err) {
            next(err)
        }
    }else{
        return next(createError(403, "Only you can update your account"))
    }
}


//DELETE USER
export const deleteUser = async(req,res,next)=> {
    if(req.params.id === req.user.id){
        try {
            await User.findByIdAndDelete(req.params.id)
            res.status(200).json("User has been deleted")
        } catch (err) {
            next(err)
        }
    }else{
        return next(createError(403, "Only you can delete your account"))
    }
}

//GET USER
export const getUser = async(req,res,next)=>{
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    } catch (err) {
        next(err)
    }
}

//SUBSCRIBE USER
export const subscribeUser = async(req,res,next)=>{
    try {
        await User.findByIdAndUpdate(req.user.id, {
          $push: { subscribedUser: req.params.id },
        });
        await User.findByIdAndUpdate(req.params.id, {
          $inc: { subscribers: 1 },
        });
        res.status(200).json("Subscription success!");
    } catch (err) {
        next(err)
    }
}

//UNSUBSCRIBE USER
export const unsubscribetUser = async(req,res,next)=>{
    try {
        await User.findByIdAndUpdate(req.user.id, {
          $pull: { subscribedUser: req.params.id }
        })
        await User.findByIdAndUpdate(req.params.id, {
          $inc: { subscribers: -1 },
        });
        res.status(200).json("Unsubscription success!")
    } catch (err) {
        next(err)
    }
}

//LIKE
export const like = async(req,res,next)=>{
    if(req.params.id === req.user.id){
        try {
            
        } catch (err) {
            next(err)
        }
    }else{
        next(createError(403, "Only you can subscribe the account"))
    }
}

//DISLIKE
export const dislike = async(req,res,next)=>{
    if(req.params.id === req.user.id){
        try {
            
        } catch (err) {
            next(err)
        }
    }else{
        next(createError(403, "Only you can subscribe the account"))
    }
}
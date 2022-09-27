import CryptoJS from "crypto-js";
import { verifyTokenAndAuthorization } from '../router/verifyToken.js';

export const updateUser = async(req,res,next) => {
    const password = req.body.password;
    if(password){
        password =  CryptoJS.AES.decrypt(
            req.body.password,
            process.env.PASS_SEC
        ).toString();
    }
}
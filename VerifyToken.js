import jwt from 'jsonwebtoken';

export const verifyToken = (req,res,next)=> {
    const token = req.cookies.access_token
    if(!token) return next(createError(401, "Access denied"))

    jwt.verify(token, process.env.JWT, (err,user)=> {
        if(err) return next(createError(403, "Token is invalid"))
        req.user = user;
        next()
    })

}
import JWT from 'jsonwebtoken';

const verifyToken = (req,res,next)=> {
    const authHeader = req.headers.token;

    if (authHeader) {
        JWT.verify(token, process.env.JWT_SEC, (err,user)=> {
            if(err) res.status(403).json("Token invalid");
            req.user = user;
            next();
        })
    }else{
        return res.status(401).json("You're not authenticated")
    }
}

const verifyTokenAndAuthorization = (req,res,next) => {
    if(req.user.id === req.params.id || req.user.isAdmin) {
        next()
    }else{
        res.status(403).json('Access Denied');
    }
}
export default {verifyToken, verifyTokenAndAuthorization}
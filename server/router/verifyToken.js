import JWT from 'jsonwebtoken';

const verifyToken = (req,res,next)=> {
    const authHeader = req.headers.token;
    if (authHeader) {
        const token = authHeader.split(" ")[1];
        JWT.verify(token, process.env.JWT_SEC, (err,user)=> {
            if(err) res.status(403).json("Token invalid");
            req.user = user;
            next();
        })
    }else{
        return res.status(401).json("You're not authenticated")
    }
}

export const verifyTokenAndAuthorization = (req,res,next) => {
    verifyToken(req,res, ()=>{
        if(req.user.id === req.params.id || req.user.isAdmin) {
            next()
        }else{
            res.status(403).json('Access Denied');
        }
    })
}

export const verifyTokenAndAdmin = (req,res,next) => {
    verifyToken(req,res, ()=> {
        if(req.user.isAdmin) {
            next()
        }else{
            res.status(403).json('Access Denied! You are not admin');
        }
    })
}
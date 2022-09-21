import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoutes from './routes/Auth.js';
import videoRoutes from './routes/Videos.js';
import commentRoutes from './routes/Comments.js';
import userRoutes from './routes/Users.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();
dotenv.config();


const connect = ()=> {
    mongoose.connect(process.env.MONGO).then(()=> {
        console.log("DB Connected")
    }).catch((error)=> {
        throw error
    })
}

app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/videos", videoRoutes)
app.use("/api/comments", commentRoutes)

app.use((err, req,res, next)=>{
    const status = err.status || 500;
    const message = err.message || "Something went wrong";
    return res.status(status).json({
        success:false,
        status,
        message
    })
})

app.listen(8800, ()=> {
    connect()
    console.log("Connected")
})
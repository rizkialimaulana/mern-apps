import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoutes from './router/Auth.js'

dotenv.config()
const app = express();

const connect = () => {
    try {
        mongoose.connect(process.env.MONGO)
        console.log("DB Connected")
    } catch (error) {
        console.log("Not Connected")
    }
}

app.use(express.json())
app.use('/api/auth', authRoutes)
app.listen(process.env.PORT || 8800, ()=> {
    connect()
    console.log("Connected")
})
import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './router/Auth.js';
import productRoutes from './router/Products.js';
import userRoutes from './router/Users.js';
import mongoose from 'mongoose';

const app = express();
dotenv.config();

const connect = async()=> {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log('DB Connected');
    } catch (error) {
        throw error
    }
}

app.use(express.json())
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

app.listen(process.env.PORT || 8800, () => {
    connect()
    console.log("Connected");
})
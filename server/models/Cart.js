import mongoose from 'mongoose';

const CartSchema = new mongoose.Schema({
    userId: {type: String, required: true, unique: true},
    
})
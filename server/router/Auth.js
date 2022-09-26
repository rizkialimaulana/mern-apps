import express from 'express';
import { Register } from '../controllers/AuthController.js';

const router = express.Router();

//REGISTER
router.post('/register', Register);

export default router
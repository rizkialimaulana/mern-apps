import express from "express";
import { Login, Register } from "../controllers/authController.js";

const router = express.Router()

router.post('/register', Register);
router.post('/login', Login);
router.post('/google', );

export default router
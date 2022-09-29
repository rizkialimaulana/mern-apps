import express from 'express';
import { deleteUser, getUser, getUsers, updateUser } from '../controllers/UserController.js';
import { verifyTokenAndAdmin, verifyTokenAndAuthorization } from './verifyToken.js';

const router = express.Router();

router.put('/:id', verifyTokenAndAuthorization, updateUser);
router.delete('/:id', verifyTokenAndAuthorization, deleteUser);
router.get('/find/:id', verifyTokenAndAuthorization, getUser);
router.get('/', getUsers);

export default router;
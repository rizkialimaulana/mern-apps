import express from "express";
import { deleteUser, dislike, getUser, like, subscribeUser, unsubscribetUser, updateUser } from "../controllers/userController.js";
import { verifyToken } from "../VerifyToken.js";

const router = express.Router();

//update
router.put("/:id", verifyToken, updateUser)
//delete
router.delete("/:id", verifyToken, deleteUser)
//get user
router.get("/:id", getUser)
//subscribe user
router.put("/subs/:id", verifyToken, subscribeUser)
//unsubscribe user
router.put("/unsubs/:id", verifyToken, unsubscribetUser)

export default router;

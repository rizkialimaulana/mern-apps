import express from "express";
import { addComment, deleteComment, getComment } from "../controllers/commentController.js";
import { verifyToken } from "../VerifyToken.js";

const router = express.Router()

router.get("/:videoId", getComment)
router.post("/", verifyToken, addComment)
router.delete("/:id", verifyToken, deleteComment)

export default router
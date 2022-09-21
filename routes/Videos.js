import express from "express";
import { 
    uploadVideo, 
    deleteVideo, 
    getVideo, 
    updateVideo, 
    Sub, 
    Random, 
    Trend, 
    getByTag, 
    searchVideo, 
    AddView, 
    likeFunction, 
    dislikeFunction } from "../controllers/videoController.js";
import { verifyToken } from "../VerifyToken.js";

const router = express.Router();

router.get("/find/:id", verifyToken, getVideo)
router.put("/:id", verifyToken, updateVideo)
router.put("/view/:id", verifyToken, AddView)
router.get("/trend", Trend)
router.get("/random", Random)
router.get("/sub", verifyToken, Sub)
router.delete("/:id", verifyToken, deleteVideo)
router.post("/", verifyToken, uploadVideo)
router.get("/tags", getByTag);
router.get("/search", searchVideo);
router.put("/like/:videoId", verifyToken, likeFunction);
router.put("/dislike/:videoId", verifyToken, dislikeFunction);

export default router;

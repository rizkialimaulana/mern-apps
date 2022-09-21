import { createError } from "../error.js";
import User from "../models/User.js";
import Video from "../models/Video.js"

//UPLOAD VIDEO
export const uploadVideo = async(req,res,next)=> {
    const newVideo = new Video({userId: req.user.id, ...req.body});
    try{
        const savedVideo = await newVideo.save();
        res.status(200).json(savedVideo);
    }catch(err){
        next(err)
    }
    
}

//GET VIDEO
export const getVideo = async(req,res,next)=> {
    try {
        const video = await Video.findById(req.params.id)
        res.status(200).json(video)
    } catch (err) {
        next(err)
    }
}

//UPDATE VIDEO
export const updateVideo = async(req,res,next)=> {
    try {
        const video = Video.findById(req.params.id)
        if(!video) return next(createError(404, "Video not found"))
        if(req.user.id === video.userId){
            const updatedVideo = await Video.findByIdAndUpdate(req.params.id, {
                $set: req.body
            },{new:true})
            res.status(200).json(updatedVideo)
        }else{
            next(createError(403, "You can only update your video"))
        }
    } catch (err) {
        next(err)
    }
}

//DELETE VIDEO
export const deleteVideo = async(req,res,next)=> {
    try {
        if (req.user.id === video.userId) {
          await Video.findByIdAndDelete(req.params.id);
          res.status(200).json("Video has been deleted");
        } else {
          next(createError(403, "You can only delete your video"));
        }
    } catch (err) {
        next(err)
    }
}

//RANDOM
export const Random = async (req,res,next)=> {
    try {
        const videos = await Video.aggregate([{$sample: {size: 3}}])
        res.status(200).json(videos)
    } catch (err) {
        next(err)
    }
}
//TREND
export const Trend = (req,res,next) => {
    try {
      const videos = Video.find().sort({views: -1});
      res.status(200).json(videos);
    } catch (err) {
      next(err);
    }
};

//SUB
export const Sub = async (req,res,next) => {
    try{
        const user = await User.findById(req.user.id)
        const subscribedChannel = user.subscriberdUsers

        const List = await Promise.all(
            subscribedChannel.map(async (channelId)=>{
                return await Video.find({userId: channelId})
            })
        )

        res
          .status(200)
          .json(list.flat().sort((a, b) => b.createdAt - a.createdAt));
    }catch(err){
        next(err)
    }
};

//GET BY TAG 
export const getByTag = async (req, res, next) => {
  const tags = req.query.tags.split(",");
  try {
    const videos = await Video.find({ tags: { $in: tags } }).limit(20);
    res.status(200).json(videos);
  } catch (err) {
    next(err);
  }
};


//VIEW
export const AddView = async (req,res,next) => {
    try {
        await Video.findByIdAndUpdate(req.params.id, {
            $inc: {views: 1}
        },{new: true})
        res.status(200).json("The view has been increased!")
    } catch (err) {
        next(err)
    }
};

//SEARCH
export const searchVideo = async (req, res, next) => {
  const query = req.query.q;
  try {
    const videos = await Video.find({
      title: { $regex: query, $options: "i" },
    }).limit(40);
    res.status(200).json(videos);
  } catch (err) {
    next(err);
  }
};

//LIKE
export const likeFunction = async(req,res,next)=> {
    const id = req.params.id;
    const videoId = req.user.videoId;
    try {
        await Video.findByIdAndUpdate(videoId, {
            $addToSet: {likes:id},
            $pull: {dislikes:id}
        })
        res.status(200).json("You like the videos")
    } catch (err) {
        next(err)
    }
}
//DISLIKE
export const dislikeFunction = async(req,res,next)=> {
    const id = req.params.id;
    const videoId = req.user.videoId;
    try {
      await Video.findByIdAndUpdate(videoId, {
        $addToSet: { dislikes: id },
        $pull: { likes: id },
      });
      res.status(200).json("You like the videos");
    } catch (err) {
      next(err);
    }
}
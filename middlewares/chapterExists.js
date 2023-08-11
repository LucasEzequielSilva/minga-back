import Chapter from "../models/Chapter.js";

async function  chapterExists(req,res,next){

    const chapter = await Chapter.findOne({
        manga_id : req.body.manga_id,
        title: req.body.title
    })
    if (chapter){
        return res.status(400).json({
            succes: false,
            message: [{
                path: "exists",
                message: "The chapter already exists"
            }]
        })
    }
    return next()
}
export default chapterExists
import Chapter from "../models/Chapter.js";

async function nextOrder(req,res,next){
    if(req.body.order){
        return next()
    }
    let chapters = await Chapter.find({
        manga_id: req.body.manga_id
    }).sort({order:-1})
    if(chapters[0]){
        req.body.order = chapters[0].order + 1
    return next()   
    }
    req.body.order = 1
    return next()
}
export default nextOrder
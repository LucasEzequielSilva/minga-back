import Author from "../models/Author.js";

async function  authorExistsSingUp(req,res,next){
    
    const author = await Author.findOne({
        name : req.body.name})
    if (author){
        return res.status(400).json({
            succes: false,
            message:"You are already an author!"
        })
    }
    return next()
}
export default authorExistsSingUp
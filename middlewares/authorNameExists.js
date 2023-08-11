import Author from "../models/Author.js";

async function authorNameExist(req,res,next){
    let author = await Author.findOne({
        name: req.body.name,
        lastname: req.body.lastname
    })
    if(author){
        return res.status(400).json({
            success: false,
            message: [{
                path: "sameName",
                message: "There is already an author with this name"
            }]
        })
    }
    return next()
}
export default authorNameExist
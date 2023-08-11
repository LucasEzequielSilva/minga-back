import Author from "../models/Author.js"
import Company from "../models/Company.js"

async function isActive(req,res,next){
    let author = await Author.findOne({
        user_id: req.user.id,
        active: true
    })
    let company = await Company.findOne({
        user_id: req.user.id,
        active: true
    })
    if (author || company){
        return next()
    }
    return res.status(400).json({
        succes:false,
        messages:"error!"
    })
}
export default isActive
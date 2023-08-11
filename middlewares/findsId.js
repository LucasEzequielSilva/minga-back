import Author from "../models/Author.js";
import Company from "../models/Company.js"
import createHttpError from "http-errors";

let find_id = async(req,res,next)=>{
    let author = await Author.findOne({
        user_id: req.user.id
    })
    let company = await Company.findOne({
        user_id: req.user.id
    })
    if (author){
        req.body.author_id = author._id.toString()
    }
    if(company){
        req.body.company_id = company._id
    }
    if(author || company){
        return next()
    }
    return res.status(400).json({
        success: false,
        message: [{
            path: "unauthorized",
            message: "You don't have authorization for this action"
        }]
    })
}
export default find_id
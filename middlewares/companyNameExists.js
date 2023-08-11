import Company from "../models/Company.js";

async function  companiesExists(req,res,next){
    
    const companies = await Company.findOne({
        name : req.body.name})
    if (companies){
        return res.status(400).json({
            success: false,
            message: [{
                path: "sameName",
                message: "The name of the company already exists"
            }]
        })
    }
    return next()
}
export default companiesExists
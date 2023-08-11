import Company from '../models/Company.js'

async function companyExist(req,res,next){
    let company = await Company.findOne({
        user_id: req.user.id
    
    })
    if(company){
        return res.status(400).json({
            succes:false,
            message: [{
                path: "exists",
                message: "You are already part of a company"
            }]
        })
    }
    return next()
}
export default companyExist
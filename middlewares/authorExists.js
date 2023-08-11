import Author from '../models/Author.js'

async function authorExist(req,res,next){
    let author = await Author.findOne({
        user_id: req.user.id
    
    })
    if(author){
        return res.status(400).json({
            succes:false,
            message: [{
                path: "exists",
                message: "Author already exists"
            }]
        })
    }
    return next()
}
export default authorExist
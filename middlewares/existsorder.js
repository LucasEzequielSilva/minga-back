import Chapter from "../models/Chapter.js";


async function existOrder (req,res,next){
    const chapters = await Chapter.findOne({
        manga_id: req.body.manga_id,
        order: req.body.order,

    })
    if (chapters){
        return res.status(400).json({
            success: false,
            message: [{
                path: "order",
                message: "The order already exists"
            }]
        })
    }
    return next()

}
export default existOrder
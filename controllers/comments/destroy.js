import Comments from "../../models/Comments.js";

let destroy = async(req,res,next)=>{
    try {
        let destroyed = await Comments.deleteOne({_id:req.params.id})
        return res
        .status(200)
        .json({
            succes:true,
            destroyed
        })
    } catch (error) {
        next(error)
    }
}
export default destroy
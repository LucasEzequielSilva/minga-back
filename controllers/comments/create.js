import Comments from "../../models/Comments.js"

let create = async (req, res, next) => {
    try {
        
        req.body.user_id = req.user.id
        req.body.name = req.user.name
        req.body.last_name = req.user.last_name
        let comment = await Comments(req.body)
        await comment.save()
        return res
            .status(201)
            .json({
                succes: true,
                message: "comment created"
            })
    } catch (error) {
        next(error)
    }
}
export default create

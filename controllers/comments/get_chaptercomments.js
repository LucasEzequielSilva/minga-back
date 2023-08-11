import Comments from "../../models/Comments.js";

async function getChapterComments(req, res, next) {
    try {
        let comments = await Comments.find({
            chapter_id: req.params.chapter_id
        })
            .sort({ createdAt: -1 })
            .populate("user_id", "photo role is_verified email")
        if (comments) {
            return res.status(200).json({
                succes: true,
                comments
            })
        }
        return res.status(400).json({
            succes: false,
            messages: [{
                path: "exist",
                message: "not found"
            }]
        })
    } catch (error) {

    }

}
export default getChapterComments
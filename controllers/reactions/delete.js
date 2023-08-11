import Reaction from "../../models/Reaction.js"
import Manga from "../../models/Manga.js"
async function reactionExists(req, res, next) {
    try {
        let name = req.body.name
        const manga = await Manga.findById(req.body.manga_id)
        let reaction = await Reaction.findOne({ name: req.body.name, user_id: req.user.id, manga_id: req.body.manga_id })
        console.log(reaction)
        if (reaction) {
            manga.reactions[name] -= 1
            await manga.save()
            await Reaction.findByIdAndDelete(reaction._id)
            return res.status(200).json({
                success: true,
                message: `${req.body.name} deleted`,
                destroy: true
            })
        } else {
            next()
        }
    } catch (error) {

    }
}
export default reactionExists;
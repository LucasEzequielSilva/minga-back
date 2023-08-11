import Reaction from "../../models/Reaction.js";
import Manga from "../../models/Manga.js";

async function create(req, res, next) {
    try {
        let name = req.body.name
        let reaction = {
            manga_id: req.body.manga_id,
            name: req.body.name,
            user_id: req.user.id
        }
        let reactionCreated = await Reaction.create(reaction);
        const manga = await Manga.findById(req.body.manga_id)
        if (reactionCreated) {
            manga.reactions[name] += 1
            await manga.save()
            return res.status(200).json({
                success: true,
                message: "Reaction created",
                destroy: false
            })
        }
    } catch (error) {

    }
}
export default create

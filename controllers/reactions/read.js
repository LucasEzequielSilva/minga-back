
import Manga from "../../models/Manga.js";
import Reactions from "../../models/Reaction.js";


let read = async (req, res, next) => {
    try {
        let user = req.user._id
        let name = req.body.name
        let manga = await Manga.findById(req.params.id)
        return res.status(200).json({
            manga,
        })
    } catch (error) {
        return res.status(400).json({
            error: 'error!'
        })
    }
}
export default read
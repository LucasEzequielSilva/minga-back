import Manga from "../../models/Manga.js";
import Chapter from "../../models/Chapter.js";

async function getOne(req, res, next) {
    try {
        let manga = await Manga.findById(req.params.id).select('-_id  -__v').populate("company_id", "name -_id").populate("category_id", "color hover name -_id").populate("author_id", "name -_id")
        if (manga) {
            let numberChapter = await Chapter.find({ manga_id: req.params.id }).countDocuments()
            let ranking = 5 * (manga.reactions.like / (manga.reactions.dislike + manga.reactions.like))
            return res.status("201").json({
                manga,
                numberChapter,
                ranking,
                userReactions: req.body.userReactions
            });
        }
        return res.status(404).json({
            success: false,
            message: [{
                path: "exists",
                message: "The manga doesn't exists"
            }]
        })

    } catch (error) {
        console.log(error);
    }
}

export default getOne
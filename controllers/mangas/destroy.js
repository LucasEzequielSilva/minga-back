import Manga from "../../models/Manga.js";
import Chapter from "../../models/Chapter.js"
async function destroy(req, res, next){
    try {
        let manga = await Manga.findByIdAndDelete(req.params.id);
        let chapters = await Chapter.deleteMany({manga_id: req.params.id})
        if(manga || chapters.deletedCount){
            return res.status(201).json({
                success: true,
                manga,
                chapters
            })
        }
        return res.status(404).json({
            success: false,
            message: [{
                path: "exists",
                message: "The manga doesnt exists"
            }]
        }) 
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: [{
                path: "interal",
                message: "internal server error"
            }]
        })
    }
    
}

export default destroy
import Manga from "../../models/Manga.js";

async function update(req, res, next){
    try {
        let manga = await Manga.findByIdAndUpdate(req.params.id, req.body, {new: true}).populate("category_id")
        if(manga){
            return res.status(201).json({
                success: true,
                manga
            })
        }else{
            return res.status(404).json({
                success: false,
                message: [{
                    path: "exists",
                    message: "The manga doesn't exists"
                }]
            })
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: [{
                path: "internal",
                message: "Internal server error"
            }]
        })
    }
}
export default update;
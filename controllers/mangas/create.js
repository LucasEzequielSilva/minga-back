import Manga from '../../models/Manga.js'

let create = async(req,res,next)=>{
    try {
        
        let manga = await Manga.create(req.body);
        return res.status(201).json({
            succes: true,
            manga: manga
        })
    } catch (error) {
        next(error)
    }
}

export default create
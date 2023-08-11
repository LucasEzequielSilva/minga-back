import Chapter from '../../models/Chapter.js'

let get_me = async (req,res,next) => {
    try {
        let manga_id = req.query.manga_id
        let chapter = await Chapter.find({manga_id}).select('title order pages manga_id -_id')
        if(chapter){
            return res.status(200).json({
                success: 'ok',
                chapter: chapter,
            })
        }
            return res.status(404).json({
                success: false
            })
        } catch (error){
        next(error)
        }
}

export default get_me
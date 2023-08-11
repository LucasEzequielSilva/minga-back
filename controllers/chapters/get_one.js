import Chapter from '../../models/Chapter.js'

let get_one = async (req,res,next) => {
    try {
        let id = req.params.id
        let chapter = await Chapter.findById(id).select('title order pages manga_id -_id')
        if(chapter){
            let nextChapter = await Chapter.findOne({manga_id:chapter.manga_id, order:chapter.order+1})
            return res.status(200).json({
                success: 'ok',
                chapter: chapter,
                nextChapter:nextChapter? nextChapter._id:null
            })
        }
            return res.status(404).json({
                success: false
            })
        } catch (error){
        next(error)
        }
}

export default get_one
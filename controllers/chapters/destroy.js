import Chapter from '../../models/Chapter.js'

let destroy = async(req,res,next) => {
    try {
        let destroyed = await Chapter.deleteOne({ id:req.body.id})
        return res.status(200).json({
            success: true,
            destroyed
        })
    } catch (error) {
        next(error)
    }
}

export default destroy
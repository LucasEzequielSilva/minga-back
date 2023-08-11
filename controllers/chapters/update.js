import Chapter from '../../models/Chapter.js'

const update = async(req,res,next) => {
    try {
        console.log("paso")
    let updated = await Chapter.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new:true }
    )
    if(updated){
        return res.status(200).json({
            success: true,
            message: 'updated',
            updated
        })
    }else{
        return res.status(404).json({
            success: false,
            message: 'chapter id not found'
        })
    }
    
    } catch (error) {
        next(error)
    }
}

export default update
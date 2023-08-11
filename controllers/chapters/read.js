import Chapter from '../../models/Chapter.js'

let read = async(req,res,next)=>{

    try {
        let all = await Chapter.find(queries, 'pages -_id')
        return res.status(200).json({
            success: true,
            response: all
        })
    } catch (error) {
        next(error)
    }
}

export default read
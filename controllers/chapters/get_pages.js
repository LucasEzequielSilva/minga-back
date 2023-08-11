import Chapter from '../../models/Chapter.js'

async function getPages(req, res, next) {
    let limit = 4
    if (req.query.limit) {
        limit = req.query.limit
    }
    try {
        let count = await Chapter.countDocuments({manga_id: req.query.manga_id}) / limit
        count = Math.ceil(count)
        req.body.pages = count;
        next()
    } catch (error) {
        res.status(500).json({
            success: false,
            message: [{
                path: "serverError",
                message: "Internal server error, please try again later."
            }]
        })
    }

}

export default getPages
import Manga from '../../models/Manga.js'

async function getPages(req, res, next) {
    let limit = 6
    let queries = {}
    if (req.query.limit) {
        limit = req.query.limit
    }
    if (req.query.title) {
        queries.title = new RegExp(req.query.title.trim(), 'i')
    }
    if (req.query.category_id) {
        queries.category_id = req.query.category_id
    }
    try {
        let count = await Manga.countDocuments(queries) / limit
        count = Math.ceil(count)
        req.body.pages = count
        next();
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
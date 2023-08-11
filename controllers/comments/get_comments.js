import Comments from "../../models/Comments.js";

let get_comments = async (req, res, next) => {
    let queries = {}
    let sort = {}
    let pagination = {
        limit: 4,
        page: 1,
    }
    if (req.query.name) {
        queries.name = new RegExp(req.query.name.trim(), "i")
    }
    if (req.query.user_id) {
        queries.user_id = req.query.user_id
    }
    if (req.query.date) {
        queries.date = req.query.date
    }
    if (req.query.order) {
        sort.createdAt = req.query.order
    }
    if (req.query.page) {
        pagination.page = req.query.page
    }
    if (req.query.limit) {
        pagination.limit = req.query.limit
    }

    try {
        let all = await Comments
            .find(queries)
            .select("-name -user_id -active")
            .sort(sort)
            .skip(pagination.page > 0 ? (pagination.page - 1) * pagination.limit : 0)
            .limit(pagination.limit > 0 ? pagination.limit : 0)
        res
            .status(200)
            .json({
                succes: true,
                response: all,
                pages: pagination,
            })
    } catch (error) {
        next(error)
    }
}
export default get_comments
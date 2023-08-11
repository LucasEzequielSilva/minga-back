import createHttpError from "http-errors"
import Author from "../../models/Author.js"



let read = async (req, res, next) => {
    try {
        let all = await Author.find()

        if (all.length > 0) {
            return res.status(200)
                .json({
                    authors: all

                })
        }
        return next(createHttpError(404, "the resource was not found"))
    } catch (error) {
        return res.status(400).json({
            error: "error!"
        })
    }

}

export default read

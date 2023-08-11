import Author from "../../models/Author.js";

const activeAuthorinactive = async (req, res, next) => {
    try {
        let authorActive = await Author.find({
            active: true,
        })
        let authorInactive = await Author.find({
            active: false,
        })
        if (authorActive || authorInactive) {
            return res
                .status(200)
                .json({
                    authorActive,
                    authorInactive,
                })
        }
    } catch (error) {
        return res.status(500).json({
            succes:false,
            message: [{
                path: 'internal',
                message: 'internal server error'
            }]
        })
    }
}
export default activeAuthorinactive
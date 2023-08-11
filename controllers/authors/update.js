import Author from "../../models/Author.js";
import User from "../../models/User.js"

const update = async (req, res, next) => {
    let role = req.body.active ? 1 : 0
    try {
        let upd = await Author.findByIdAndUpdate(
            req.params.id
            ,
            { active: req.body.active },
            { new: true }
        )
        if (upd) {
            let userUpdate = await User.findByIdAndUpdate(
                upd.user_id, { role: role }
            )
            if (userUpdate) {
                return res
                    .status(200)
                    .json({
                        success: true,
                        upd
                    })
            }
            return res.status(404).json({
                succes: false,
                messages: [{
                    path: "not found",
                    message: "not found"
                }]
            })
        }
    } catch (error) {
        next(error)
    }
}
export default update
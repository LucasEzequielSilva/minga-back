import User from "../../models/User.js";


const roleUpdate = async (req, res, next) => {
    try {
        let user = await User.findByIdAndUpdate(
            req.params.id
            ,
            { role: 1 },
        )
        if (user) {
            return res
                .status(200)
                .json({
                    success: true,
                    message: [{
                        path: "RoleUpdate",
                        message: "Role update!"
                    }]
                })
        }
    } catch (error) {
        next(error)
    }
}
export default roleUpdate
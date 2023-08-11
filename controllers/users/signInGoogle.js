import User from "../../models/User.js";
import jwt from 'jsonwebtoken'

let signInGoogle = async (req, res, next) => {
    let user = await User.findOneAndUpdate(
        { email: req.body.email },
        { is_online: true },
        { new: true }
    )
    const token = jwt.sign(
        { id: user._id },
        process.env.SECRET,
        { expiresIn: 60 * 60 * 24 * 10 }
    )
    return res.status(200).json({
        success: true,
        token,
        user
    })
}
export default signInGoogle
import bcryptjs from 'bcryptjs'
import User from "../../models/User.js"

let createUserGoogle = async (req, res, next) => {

    let user = {
        name: req.body.name,
        email: req.body.email,
        photo: req.body.picture,
        is_verified: req.body.email_verified,
        password: bcryptjs.hashSync(req.body.sub, 10),
        is_online: true,
        role: 0,
        verify_code: req.body.jti
    }
    try {
        await User.create(user)
        next()
    } catch (error) {
        next(error);
    }
}
export default createUserGoogle
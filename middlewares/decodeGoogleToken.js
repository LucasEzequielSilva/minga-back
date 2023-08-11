import jwt from 'jsonwebtoken'

let decodeToken = async (req, res, next) => {
    try {
        if (req.body.credential) {
            const { email, email_verified, name, picture, sub, jti } = jwt.decode(req.body.credential)
            req.body.email = email,
                req.body.email_verified = email_verified,
                req.body.name = name,
                req.body.picture = picture,
                req.body.sub = sub
                req.body.jti = jti
                req.body.password = sub
            next()
        } else {
            return res.status(401).json({
                succes: false,
                message: [{
                    path: 'authorization',
                    message: 'not token given'
                }]
            })
        }
    } catch (error) {
        return res.status(401).json({
            succes: false,
            message: [{
                path: 'error server',
                message: 'error'
            }]
        })
    }
}
export default decodeToken
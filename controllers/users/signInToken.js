import User from '../../models/User.js'
const signintoken =  async (req, res, next) => {
    const {email} = req.user
    try{
        let user = await User.findOneAndUpdate(
            {email},
            {is_online: true},
            {new: true}
        )
        return res.status(200).json({
            success: true,
            user
        })
    }catch(error){
        next(error);
    }
}

export default signintoken;
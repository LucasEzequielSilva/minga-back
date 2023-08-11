import Companies from '../../models/Company.js'
import User from '../../models/User.js';
let create = async(req,res,next)=>{
    try {
        let object = req.body;
        object.active = false;
        object.user_id = req.user.id;
        

        let one = await Companies(req.body)
        await one.save()
        await User.findOneAndUpdate({
            _id: req.user.id
        },{
            role: 2,
        })
        return res.status(201).json({
            companies: one,
            success: true,
            timestamps: one.createAt
        })
    } catch (error) {
        console.log(error)
        next(error)
        
    }
}

export default create
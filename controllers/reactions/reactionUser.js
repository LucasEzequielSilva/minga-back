import Reaction from "../../models/Reaction.js";
let reactionUser = async (req, res, next) => {
    try {
        let reactions = {
            like: false,
            dislike: false,
            heart: false,
            surprised: false
        }
        let userReactions = await Reaction.find({
            manga_id: req.params.id,
            user_id: req.user.id,

        })
        if (userReactions.length === 0){
            req.body.userReactions = reactions
            next()
        }else{
            for(let item of userReactions){
                reactions[item.name]= true
            }
            req.body.userReactions = reactions
            next()
        }

    } catch (error) {

    }
}
export default reactionUser
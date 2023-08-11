import { Router } from "express";
import create from "../controllers/comments/create.js";
import get_comments from "../controllers/comments/get_comments.js";
import validator from "../middlewares/validator.js";
import { commentsCreate, commentsUpdate } from "../schemas/comments.js";
import passport from "passport";
import destroy from "../controllers/comments/destroy.js";
import getChapterComments from "../controllers/comments/get_chaptercomments.js";

let router = Router()


router.post('/', validator(commentsCreate), passport.authenticate("jwt", { session: false }), create);
router.get('/', get_comments)
router.get('/:chapter_id', getChapterComments)
router.put('/:id', validator(commentsUpdate), passport.authenticate("jwt", { session: false }))
router.delete('/:id', passport.authenticate("jwt", { session: false }), destroy)
export default router
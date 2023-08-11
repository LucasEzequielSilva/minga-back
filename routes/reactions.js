import { Router } from "express";
import passport from "../middlewares/passport.js";
import reactionExists from "../controllers/reactions/delete.js";
import create from "../controllers/reactions/create.js";
import read from "../controllers/reactions/read.js";

let router = Router()

router.post('/', passport.authenticate('jwt', { session: false }), reactionExists, create)
router.get('/manga/:id', passport.authenticate('jwt', { session: false }),read)


export default router
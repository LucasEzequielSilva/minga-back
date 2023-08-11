import { Router } from "express";
import read from "../controllers/authors/read.js"
import create from "../controllers/authors/create.js";
import passport from "../middlewares/passport.js";
import validator from "../middlewares/validator.js";
import authorExist from "../middlewares/authorExists.js";
import authorNameExist from "../middlewares/authorNameExists.js";
import { authorCreate } from "../schemas/authors.js"
import update from "../controllers/authors/update.js";
import find_id from "../middlewares/findsId.js";
import activeAuthorinactive from "../controllers/authors/admin.js";



let router = Router()

router.get('/', read)
router.get('/admin', passport.authenticate('jwt', { session: false }), activeAuthorinactive)
router.post('/', validator(authorCreate), passport.authenticate("jwt", { session: false }), authorExist, authorNameExist, create)
router.put('/:id', passport.authenticate("jwt", { session: false }), update)

export default router

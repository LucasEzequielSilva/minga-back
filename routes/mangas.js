import { Router } from "express";
import get_mangas from "../controllers/mangas/get_mangas.js";
import passport from "../middlewares/passport.js";
import validator from "../middlewares/validator.js";
import create from '../controllers/mangas/create.js'
import { mangasCreate, mangasUpdate } from '../schemas/mangas.js';
import exists_title from "../middlewares/existsTitle.js";
import find_id from '../middlewares/findsId.js';
import get_one from '../controllers/mangas/get_one.js';
import get_me from '../controllers/mangas/get_me.js'
import update from "../controllers/mangas/update.js";
import is_active from "../middlewares/isactive.js"
import is_property_of from "../middlewares/isPropertyOf.js"
import destroy from "../controllers/mangas/destroy.js"
import getPages from "../controllers/mangas/get_pages.js";
import reactionUser from "../controllers/reactions/reactionUser.js";

let router = Router()


router.get('/', passport.authenticate("jwt", { session: false }), getPages, get_mangas)
router.get('/me', passport.authenticate('jwt', { session: false }), find_id, get_me)
router.get('/:id', passport.authenticate('jwt', { session: false }), reactionUser, get_one)
router.put('/:id', validator(mangasUpdate), passport.authenticate('jwt', { session: false }), find_id, is_active, is_property_of, update)
router.delete('/:id', validator(mangasUpdate), passport.authenticate('jwt', { session: false }), find_id, is_active, is_property_of, destroy)
router.post('/', validator(mangasCreate), passport.authenticate('jwt', { session: false }), exists_title, find_id, create)

export default router
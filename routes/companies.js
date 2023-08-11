import { Router } from "express";
import read from "../controllers/companies/read.js";
import create from "../controllers/companies/create.js";
import validator from "../middlewares/validator.js";
import { companiesCreate } from '../schemas/companies.js';
import companyNameExists from '../middlewares/companyNameExists.js'
import passport from "../middlewares/passport.js";
import companyExists from '../middlewares/companyExists.js'
import activeCompanyinactive from "../controllers/companies/admin.js";
import update from "../controllers/companies/update.js";


let router = Router()

router.get('/', read)
router.get('/admin', passport.authenticate('jwt', { session: false }), activeCompanyinactive)
router.post('/', validator(companiesCreate), passport.authenticate('jwt', { session: false }), companyExists, companyNameExists, create)
router.put('/:id', passport.authenticate('jwt', { session: false }), update)

export default router
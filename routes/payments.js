import { Router } from "express";
import read from "../controllers/payments/read.js";

let router = Router()

router.post('/', read)

export default router
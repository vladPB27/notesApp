import { Router } from "express";
import * as rolesCtrl from "../controllers/roles.controller"

const router = Router()

router.get('/roles',rolesCtrl.getRoles)
router.post('/addRol',rolesCtrl.addRol)

export default router
import { Router } from "express";
import * as institucionCtrl from "../controllers/institucion.controller"

const router = Router()

router.get('/institucion/:id',institucionCtrl.getDataInstitucionById)
router.get('/getInstituciones',institucionCtrl.getDataInstitucion)
router.post('/addInstitucion',institucionCtrl.addDataInstitucion)
router.put('/updateInstitucion/:id',institucionCtrl.updateDataInstitucion)

export default router
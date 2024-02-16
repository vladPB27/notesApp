import { Router } from "express";

// import {getNotes} from './notes.controller'
import * as notesCtrl from '../controllers/notes.controller'

const router = Router()

router.get('/notes', notesCtrl.getNotes)

router.get('/notes/:id', notesCtrl.getNote)

router.post('/addNote', notesCtrl.addNote)

router.delete('/deleteNote/:id', notesCtrl.deleteNote)

router.put('/updateNote/:id', notesCtrl.updateNote)

export default router
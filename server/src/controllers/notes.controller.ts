import { RequestHandler } from "express"

import Note from '../models/Note'

export const getNotes: RequestHandler = async (req, res) => {
    try {
        const notes = await Note.find()
        return res.json(notes)
    } catch (error) {
        return res.json(error)
    }
}

export const getNote: RequestHandler = async (req, res) => {
    try {
        const noteFound = await Note.findById(req.params.id)
        if (!noteFound) return res.status(204).json()
        return res.json(noteFound)
    } catch (error) {
        return res.json(error)
    }
}

export const deleteNote: RequestHandler = async(req, res) => {
    try {
        const noteFound = await Note.findByIdAndDelete(req.params.id)
        if(!noteFound) return res.status(204).json()
        return res.json(noteFound)
    } catch (error) {
        return res.json(error)
    }
}

export const addNote: RequestHandler = async (req, res) => {
    const note = new Note(req.body)
    const result = await note.save()
    return res.json(result)
}

export const updateNote: RequestHandler = async(req, res) => {
    try {
        const noteUpdated = await Note.findByIdAndUpdate(req.params.id,req.body,{new:true})
        if(!noteUpdated) return res.status(204).json()
        return res.json(noteUpdated)
    } catch (error) {
        return res.json(error)
    }
}

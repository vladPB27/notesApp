import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import Note from './models/note';

const cors = require('cors')
const app = express();
const PORT = 5000;

app.use(cors())//para habilitar cors
app.use(express.json()) //para poder enivar json desde postman

/* const db = mongoose.connect('mongodb+srv://davisvladimirpb:ktl6piY5bKmdNFxA@firstcluster.fwgemid.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('Connected!')); */

const users = [
    {
        id: 1,
        name: "meme",
        age: 29
    },
    {
        id: 2,
        name: "malu",
        age: 23
    },
    {
        id: 3,
        name: "clap",
        age: 27
    }
]

app.get('/', (req: Request, res: Response) => {
    res.send('hello world')
})

app.get('/getusers', (req, res) => {
    res.json(users)
})

app.post('/addNotes', async(req, res) => {
    const newNote  = new Note({
        title: 'recordatorio',
        description: 'fiesta este 29 de marzo'

    })
    const createNote = await newNote.save();
    res.json(createNote)
})

mongoose.connect('mongodb+srv://davisvladimirpb:ktl6piY5bKmdNFxA@firstcluster.fwgemid.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log('server running');
        app.listen(PORT)
    });


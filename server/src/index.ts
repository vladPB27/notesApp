// import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import { config } from 'dotenv'
import app from './app'
import './database'

config()
const cors = require('cors')
// const app = express();
const PORT = 5000;

app.use(cors())//para habilitar cors
// app.use(express.json()) //para poder enivar json desde postman

/* const db = mongoose.connect('mongodb+srv://davisvladimirpb:ktl6piY5bKmdNFxA@firstcluster.fwgemid.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('Connected!')); */


app.get('/', (req, res) => {
    res.send('hello world')
})

/* app.post('/addNotes', async (req, res) => {
    const newNote = new Note({
        title: 'lectura',
        description: 'fiesta este 29 de marzo'

    })
    const createNote = await newNote.save();
    res.json(createNote)
}) */

/* mongoose.connect(process.env.MONGO_URL!)
    .then(() => {
        console.log('server running');
        app.listen(PORT)
    }); */

app.listen(PORT);
console.log('server running');

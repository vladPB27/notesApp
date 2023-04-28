import { Note } from "../components/notes/Note";

const baseUrl = 'http://localhost:5000'

export async function getNotesService() {
    try {
        const res = await fetch(`${baseUrl}/notes`)
        .then(async data => {
            const body = await data.json()
            return body
        })
        return res;
    } catch (error) {
        console.log(error);
    }
}

export async function addNote(formValues:Note) {
    try {
        const res = await fetch(`${baseUrl}/addNote`,{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formValues)
        })
    } catch (error) {
        console.log(error);
        
    }
}

export async function updateNoteService(id:number, formValues: Note) {
    try {
        const res = await fetch(`${baseUrl}/udpateNote/${id}`, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formValues)
        })
        // console.log('Status: ', res.status);
        return res
    } catch (error) {
        console.log('ERROR: ', error);
    }
}

export async function deleteNoteService(id:number) {
    try {
        const res = await fetch(`${baseUrl}/deleteNote/${id}`, {
            method: 'DELETE',
        })
        return res
    } catch (error) {
        console.log('ERROR: ', error);
    }
}

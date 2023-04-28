import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import * as noteServices from "../../services/notes.services"
import NewNote from "./newNote"
import { Note } from "./Note"
import NoteItem from "./noteItem"

const Notes = () => {
    const [notes, setNotes] = useState<Note[]>([])
    const [error, setError] = useState(false)
    const items = ['skill', 'jaze', 'stick']
    const [isOpen, setIsOpen] = useState(false)
    const [dataNote, setDataNote] = useState<Note>()

    const openModal = () => {
        setIsOpen(true)
        setDataNote(null)
    }

    const closeModal = () => setIsOpen(false)

    useEffect(() => {
        getNotes()
    }, [])

    const getNotes = async () => {
        try {
            // const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await noteServices.getNotesService()
            console.log('data: ', data);
            setNotes(data)


        } catch (error) {
            // console.log(error);
            setError(true)
        }
    }

    const deleteNote = async (id: number) => {
        try {
            await noteServices.deleteNoteService(id)
            await getNotes()

        } catch (error) {
            console.log(error);

        }
    }

    const handleEditNote = (note: Note) => {
        setIsOpen(true)
        setDataNote(note)

    }

    return (
        <div className="">
            {isOpen && <NewNote closeModal={closeModal} isOpen={isOpen} getNotes={getNotes} dataNote={dataNote} />}
                


            <div className="w-full md:w-4/5 mx-auto p-3">
                <div className="flex items-center bg-white rounded-lg shadow-md">
                    <input type="text" className="w-full py-2 px-4 focus:outline-none" placeholder="Buscar..." />
                    <button className="bg-gray-200 py-2 px-3">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>

                </div>
                <button className="bg-indigo-600 hover:bg-indigo-800 text-white py-2 px-2 rounded m-3"
                    onClick={openModal}>
                    <FontAwesomeIcon icon={faPlus} /> New
                </button>
            </div>


            {error && <h1>Error</h1>}

            <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 px-5 py-3">
                {notes.map(note => (
                    <div key={note._id} >
                        <NoteItem note={note} deleteNote={deleteNote} handleEditNote={() => handleEditNote(note)} />

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Notes
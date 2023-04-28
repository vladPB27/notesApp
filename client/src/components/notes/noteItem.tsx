import { faTrashAlt } from "@fortawesome/free-regular-svg-icons"
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { Note } from "./Note"

interface Props {
    note: Note,
    deleteNote: (e: number) => void,
}

const NoteItem = ({ note, deleteNote }: Props) => {
    // const NoteItem : React.FC<Props> = ({ note , deleteNote}) => {
    return (
        <div className="bg-white shadow-md rounded-md p-6 bg-indigo-200">
            <img
                className="w-16 h-16 rounded-full mx-auto mb-4"
                src="https://via.placeholder.com/150"
            />
            <h2 className="text-xl font-bold mb-2">{note.title}</h2>
            <p className="text-gray-700 mb-4">{note.description}</p>
            <div>
                <button className="px-1">
                    <FontAwesomeIcon icon={faPencilAlt} />
                </button>
                <button className="px-1"
                    onClick={() => deleteNote(note._id)}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                </button>
            </div>

        </div>
    )
}

export default NoteItem
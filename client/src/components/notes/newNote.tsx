import React, { useState } from "react"
import { addNote } from "../../services/notes.services"

interface NewNoteProps {
    closeModal: () => void,
    isOpen: boolean
}

const initialForm = {
    title: "",
    description: ""
}

const NewNote: React.FC<NewNoteProps> = ({ closeModal, isOpen }) => {

    const [formValues, setFormValues] = useState(initialForm)
    if (!isOpen) return null

    const handleInputChanges = (e) => {
        const {name,value} = e.target;
        setFormValues({
            ...formValues,
            [name]:value
        })

    }

    const handleAddNote = async()=>{
        console.log(formValues);
        await addNote(formValues)

        
    }

    return (
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                <div className="relative w-auto max-w-md mx-auto my-6">
                    <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                        <div className="flex items-start justify-between p-5 border-b border-solid rounded-t">
                            <h3 className="text-2xl font-semibold">Add a note</h3>
                            <button
                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-50 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={closeModal}
                            >
                                <span className="bg-transparent text-black opacity-50 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    ×
                                </span>
                            </button>
                        </div>
                        <div className="relative p-6 flex-auto">
                            <form>
                                <div className="grid grid-cols-2 space-y-1">
                                    <label htmlFor="">Title:</label>
                                    <input type="text" 
                                        className="px-2 py-1 border border-gray-400 rounded-md focus:outline-none focus:border-indigo-500"
                                        placeholder="insert a name"
                                        name="title"
                                        value={formValues.title}
                                        onChange={handleInputChanges}
                                    />
                                    <label htmlFor="">Description:</label>
                                    <textarea 
                                        className="px-2 py-1 rtl:esize border w-full border-gray-400 rounded-md focus:outline-none focus:border-indigo-500"
                                        name="description"
                                        value={formValues.description}
                                        onChange={handleInputChanges}
                                    >

                                    </textarea>
                                </div>

                            </form>
                        </div>
                        <div className="flex justify-end space-x-1 p-1 border">
                            <button className="border border-red-600 hover:bg-red-100 py-1 px-2 rounded">Cancel</button>
                            <button className="border border-green-600 hover:bg-green-100 py-1 px-2 rounded"
                                onClick={handleAddNote}>
                                Add
                            </button>

                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>

    )
}

export default NewNote
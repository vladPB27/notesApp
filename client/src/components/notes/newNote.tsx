import React from "react"

interface NewNoteProps {
    labels: String,
    closeModal: () => void,
    isOpen: boolean
}

const NewNote: React.FC<NewNoteProps> = ({ labels, closeModal, isOpen }) => {

    if (!isOpen) return null

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
                            <form className="flex items-center space-x-6">
                                <label htmlFor="">Name:</label>
                                <input type="text" className="required:border-red-500 placeholder-shown:border-gray-500 border-red-600"
                                    placeholder="insert a name"
                                />
                                <label htmlFor="">Description:</label>
                                <input type="text" className="required:border-red-500 placeholder-shown:border-gray-500 border-red-600"
                                    placeholder="insert a description"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>

    )
}

export default NewNote
import { useEffect, useState } from "react"
import NewNote from "./newNote"

const Notes = () => {
    const [notes, setNotes] = useState([])
    const [error, setError] = useState(false)
    const items = ['skill', 'jaze', 'stick']
    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => setIsOpen(true)

    const closeModal = () => setIsOpen(false)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:5000/notes');
            // const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json()
            console.log('data: ', data);
            console.log({ data });
            setNotes(data)


        } catch (error) {
            // console.log(error);
            setError(true)
        }
    }
    return (
        <div>
            <NewNote closeModal={closeModal} isOpen={isOpen}/>

            <div className="w-full md:w-1/2 mx-auto">
                <div className="flex items-center bg-white rounded-lg shadow-md">
                    <input type="text" className="w-full py-2 px-4 focus:outline-none" placeholder="Buscar..."/>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4">
                            Buscar
                        </button>
                        <button className="bg-green-600 hover:bg-green-800 text-white py-2 px-4 rounded-r-lg"
                        onClick={openModal}>
                            New
                        </button>
                </div>
            </div>

            {error && <h1>Error</h1>}

            <ul>
                {notes.map(note => (
                    <li key={note.id}>{note.title} - {note.description}</li>
                ))}
            </ul>
        </div>
    )
}

export default Notes
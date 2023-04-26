import { useState } from 'react';
import noteImage from '../../assets/images/notesimg.jpg'
import NewNote from '../notes/newNote';

const MainScreen = () => {
    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => setIsOpen(true)

    const closeModal = () => setIsOpen(false)

    return (
            // {/* <NewNote labels = {label} closeModal={closeModal} isOpen={isOpen}/> */}

            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='grid place-items-center px-5'>
                    <p className='text-md md:text-xl'>
                        <b>Keep your activities organized   <br></br>using notes<br></br>
                            In One Place!!</b>
                    </p>
                    <p className='text-sm'>We know you need to organize your activities in one place</p>
                    {/* <button className="bg-cyan-800 hover:bg-cyan-600 rounded text-white px-2 py-1"
                        onClick={openModal}>
                        Add Note
                    </button> */}
                </div>
                <div className='grid'>
                    <img src={noteImage} alt="note image" />
                </div>
            </div>
    )
}

export default MainScreen
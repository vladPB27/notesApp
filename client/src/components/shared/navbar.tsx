import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Notes from "../notes/notes"

const Navbar = () => (
    <nav className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                    <a href="#" className="text-black text-2xl font-bold">Notes App</a>
                </div>
                <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                        <Link to='/' className="text-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                        <Link to='/notes' className="text-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Notes</Link>
                        <Link to='/users' className="text-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Users</Link>
                        <a href="#" className="text-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
                        <a href="#" className="text-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Notes</a>
                        <a href="#" className="text-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                        <div className="flex items-center justify-center">
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer" checked onChange={()=>{}}/>
                                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
)

export default Navbar

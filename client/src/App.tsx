import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UsersComponent from './components/users/users'
import Navbar from './components/shared/navbar'
import MainScreen from './components/shared/mainScreen'
import Notes from './components/notes/notes'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/users" element={<UsersComponent />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

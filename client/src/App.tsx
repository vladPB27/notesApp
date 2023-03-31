import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UsersComponent from './components/users/users'
import Navbar from './components/shared/navbar'
import MainScreen from './components/shared/mainScreen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div>
        {/* <UsersComponent /> */}
        <MainScreen />

      </div>
    </>
  )
}

export default App


import { Outlet } from 'react-router-dom'
import NavBar from './components/navbar/Navbar'

import './App.css'


function App() {

  return (
    <div className="App">
     <NavBar />
      <Outlet />
    </div>
  )
}

export default App


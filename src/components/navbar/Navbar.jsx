import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'
import Icon from '../../../public/iconwhite.png'
import './Navbar.css'

const NavBar = () => {

  const [search, setSearch] = useState("")
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(!search) return 

    navigate(`/search?q=${search}`);
    setSearch("");
  }

    return (
        <nav id="navbar">
        <h2>
         <Link to='/'>
            <img src={Icon}/>
              Cine Explorer
        </Link>
        </h2>
        <form onSubmit={handleSubmit}>
           <input 
              type="text" 
              placeholder="Buscar um filme" 
              onChange={(e) => setSearch(e.target.value)} 
              value={search}/>
           <button type="submit">
               <BiSearchAlt2/>
           </button>
        </form>
        
      </nav>
    )
}

export default NavBar
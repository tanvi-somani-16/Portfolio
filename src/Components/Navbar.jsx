import {React,useState} from 'react'
import './Navbar.css'

const navbar = () => {

  const [menuopen,setmenuopen]=useState(false);

  const togglemenu=()=>{
    setmenuopen(!menuopen);
  }

  return (
    <div className='navbar'>
      <div className="hamburger" onClick={togglemenu}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
        <ul className={`nav-menu ${menuopen ? 'open' : ''}`}>
          <a href='/'><li>Home</li></a>
          <a href='#about_page'><li>About Me</li></a>
          <a href='#skills_page'><li>Skills</li></a>
          <a href='#project_page'><li>Projects</li></a>
          <a href='#contact_page'><li>Contact</li></a>
        </ul>
    </div>
  )
}

export default navbar
import React from 'react'
import './Navbar.css'

const navbar = () => {
  return (
    <div className='navbar'>
        <ul className="nav-menu">
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
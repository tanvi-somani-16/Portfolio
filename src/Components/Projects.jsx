import React from 'react'
import './Projects.css'
import Projectlist from './Projectlist'
import portfolio from '../assets/portfolio.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import Plist from './Projectlist';


const Projects = () => {
  return (
    <div className="project" id='project_page'>
      <div className="project-title">
        <p>Projects</p>
      </div>
      <div className="project-content">
        <ul>
          {
            Plist.map((item,index)=>(
              <li key={index}>
                <h1>{item.name}</h1>
                <img  src={item.src}/>
                <p>{item.text}</p>
                <a href={item.linkto}><FontAwesomeIcon icon={faLink} size="2x" color="white" /></a>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Projects

        
        
        
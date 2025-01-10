import React from 'react'
import './Skills.css'
import cpp from '../assets/cpp.png'
import List from './List'

const Skills = () => {
  return (
    <div className="skills" id='skills_page'>
        <div className="skill-title">Skills</div>
        <div className="skill-items">
            <ul>
                {List.map((item,index)=>(
                  <li key={index}>
                    <img src={item.src} />
                    <p>{item.name}</p>
                  </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Skills
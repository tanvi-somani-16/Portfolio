import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Skills from './Components/Skills'
import Project from './Components/Projects'
import Contact from './Components/Contact'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About/>
      <Skills />
      <Project />
      <Contact />
    </div>
  )
}

export default App
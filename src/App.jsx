import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'

import NavBar from './components/NavBar'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'


function App() {
  

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App

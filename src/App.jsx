import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'

import NavBar from './components/NavBar'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import History from './components/History'

import Contact from './components/Contact'


function App() {
  

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/history" element={<History />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App

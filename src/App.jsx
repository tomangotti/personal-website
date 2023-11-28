import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'


import Tile from './components/Tile'
import Header from './components/Header'



const about = {
  name: "Thomas Angotti",
  bio: "This is a BIO"
}


function App() {
  

  return (
    <>
      <div>
        <Header name={about.name} bio={about.bio}/>
      </div>
      <div className="tile-container">
        <Tile title="Project 1" content="Content for Tile 1" />
        <Tile title="Tile 2" content="Content for Tile 2" />
        <Tile title="Tile 3" content="Content for Tile 3" />
        <Tile title="Tile 2" content="Content for Tile 2" />
        <Tile title="Tile 3" content="Content for Tile 3" />
        <Tile title="Tile 3" content="Content for Tile 3" />
        <Tile title="Tile 2" content="Content for Tile 2" />
        <Tile title="Tile 3" content="Content for Tile 3" />
        {/* Add more tiles as needed */}
      </div>
    </>
    
  )
}

export default App

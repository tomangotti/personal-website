import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'


import Tile from './components/Tile/Tile'
import Header from './components/Header/Header'



const about = {
  name: "Thomas Angotti",
  bio: "Technically-inclined professional with passion to influence future of digital world through effective development and implementation of web-based applications, platforms, and systems. Demonstrated expertise in collaborating with clients and cross-functional teams to analyze needs and implement innovative software solutions. Possess strong understanding of software engineering theories, project management methodologies, and broad portfolio of tools, languages, frameworks, and databases. Refined communicator with ability to translate complex technical concepts into actionable insights for diverse stakeholders."
}

const tiles = [
  {
    title: "The Good Cook Book(Mobile App)",
    description: "Created cross-platform mobile app for both Android and iOS, empowering users to create, store, and share favorite recipes.",
    image: "https://via.placeholder.com/150",
    link: "https://github.com/tomangotti/the-cook-book",
  },
  {
    title: "Rogue Fighter Elite (Unity Game)",
    description: "Developed immersive 3D space shooter game using Unity and C#.",
    image: "https://via.placeholder.com/150",
    link: "https://sharemygame.com/@tomangotti/rogue-fighter-elite",
  },
  {
    title: "Music Player",
    description: "Designed music player with Spotify integration by leveraging Python, Django, JavaScript, and React.",
    image: "https://via.placeholder.com/150",
    link: "https://github.com/tomangotti/musicPlayer"
  },
  {
    title: "Project Boost (Unity Game)",
    description: "Platformer build in The Unity Game Engine.",
    image: "https://via.placeholder.com/150",
    link: "https://sharemygame.com/@tomangotti/tom-s-project-boost-from-unity-3d-course",
  },
  {
    title: "To-Do List",
    description: "Website build in Angular and Golang that persists after each refresh.",
    image: "https://via.placeholder.com/150",
    link: "https://to-do-list-b3f39.web.app/",
  },
  {
    title: "Molly Michelle Beauty (Freelance Project)",
    description: "Established dynamic beauty salon website to enable admin customization of styles and efficient management of photos.",
    image: "https://via.placeholder.com/150",
    link: "https://Mollymichellebeauty.com",
  },
  {
    title: "Gaming-Hub (Captsone project)",
    description: "Website that allows users to add or play pygames and share feedback with other users.",
    image: "https://via.placeholder.com/150",
    link: "https://gaminghub.onrender.com",
  },
  {
    title: "SpaceShooter (Pygame)",
    description: "2D space shooter game developed using Python and Pygame.",
    image: "https://via.placeholder.com/150",
    link: "https://tomangotti.itch.io/spaceshooters",
  }
]

const tilesContainer = tiles.map((tile) => {
  return (
    <Tile title={tile.title} content={tile.description} image={tile.image} />
  )
})


function App() {
  

  return (
    <>
      <div>
        <Header name={about.name} bio={about.bio}/>
      </div>
      <div className="tile-container">
        {tilesContainer}
      </div>
    </>
    
  )
}

export default App

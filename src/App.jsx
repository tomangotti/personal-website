import { useState } from 'react'
import './App.css'


import Tile from './components/Tile/Tile'
import Header from './components/Header/Header'
import HistoryTiles from './components/History-tiles/HistoryTiles'
import SkillTile from './components/Skill-tiles/SkillTile'
import EducationTiles from './components/Education/EducationTile'



const about = {
  name: "Thomas Angotti",
  bio: "Technically-inclined professional with passion to influence future of digital world through effective development and implementation of web-based applications, platforms, and systems. Demonstrated expertise in collaborating with clients and cross-functional teams to analyze needs and implement innovative software solutions. Possess strong understanding of software engineering theories, project management methodologies, and broad portfolio of tools, languages, frameworks, and databases. Refined communicator with ability to translate complex technical concepts into actionable insights for diverse stakeholders."
}

const mainTiles = [
  {
    title: "Character Generator",
    description: "Developed an application leveraging OpenAI's API to generate dynamic characters. Integrated WebSocket technology to open interactive chat boxes, enabling users to engage in real-time conversations with the characters. Using React and Node.js",
    image: "",
    github:"https://github.com/tomangotti/ai-texting-app",
    demo: "https://ai-character-generator.onrender.com/"
  },
  {
    title: "The Good Cook Book (Mobile App)",
    description: "Created cross-platform mobile app for both Android and iOS, empowering users to create, store, and share favorite recipes.",
    image: "",
    github: "https://github.com/tomangotti/the-cook-book",
  },
  {
    title: "Rogue Fighter Elite (Unity Game)",
    description: "Developed immersive 3D space shooter game using Unity and C#.",
    image: "/images/elite_rouge_fighter.gif",
    github: "",
    demo: "https://sharemygame.com/@tomangotti/rogue-fighter-elite",
  },
  {
    title: "Music Player",
    description: "Designed music player with Spotify integration by leveraging Python, Django, JavaScript, and React.",
    image: "",
    github: "https://github.com/tomangotti/musicPlayer",
    demo: "",
  },
  {
    title: "Project Boost (Unity Game)",
    description: "Platformer build in The Unity Game Engine.",
    image: "/images/space_boost.gif",
    github: "",
    demo: "https://sharemygame.com/@tomangotti/tom-s-project-boost-from-unity-3d-course",
  },
  
]

const additionalTiles = [
  {
    title: "To-Do List",
    description: "Website build in Angular and Golang that persists after each refresh.",
    image: "",
    github: "",
    demo: "https://to-do-list-b3f39.web.app/",
  },
  {
    title: "Molly Michelle Beauty (Freelance Project)",
    description: "Established dynamic beauty salon website to enable admin customization of styles and efficient management of photos.",
    image: "",
    github: "",
    demo: "https://Mollymichellebeauty.com",
  },
  {
    title: "Gaming-Hub (Captsone project)",
    description: "Website that allows users to add or play pygames and share feedback with other users.",
    image: "",
    github: "",
    demo: "https://gaminghub.onrender.com",
  },
  {
    title: "SpaceShooter (Pygame)",
    description: "2D space shooter game developed using Python and Pygame.",
    image: "",
    github: "",
    demo: "https://tomangotti.itch.io/spaceshooters",
  }
]

const historyTiles = [
  {
    company: "Freelance",
    years: "April 2023 - Current",
    position: "Software Developer",
    description: "Engage with clients to identify website objectives and offered tailored solutions to fulfill requirements. Embrace innovative technologies to meet client demands and provide cutting-edge solutions. Conceptualize, create, and implement captivating user interfaces to ensure seamless navigation. Work closely with designers, developers, and stakeholders to brainstorm ideas, troubleshoot issues, and deliver high-quality web applications."
  },
  {
    company: "Wells Concrete",
    years: "Jan 2019 - Nov 2022",
    position: "Design Engineer",
    description: "Performed meetings with stakeholders to monitor project progress and foster clear communication channels with various trades. Spearheaded design process for multiple concrete structures and orchestrated seamless collaboration among various teams to enable cohesive and efficient project execution."
  },
  {
    company: "Rocky Mountian Prestress",
    years: "Aug 2016- Jan 2019",
    position: "Eningeer-In-training | Field Engineer | QC Inspector",
    description: "Conducted thorough inspections of construction connections, concrete members, and piece quality to maintain project standards. Collaborated seamlessly with teams, contractors, and stakeholders to streamline construction processes, resolve challenges, and optimize project efficiency. Documented inspection findings and generate comprehensive reports by providing valuable insights to project stakeholders."
  }
]

const skills = [
  {
    title: "Area of Expertise",
    content: ["Software Development", "Project Management", "Quality Assurance", "Client Relations", "Team Collaboration", "Problem Solving", "Communication", "Leadership"]
  },
  {
    title: "Programming Languages",
    content: ["JavaScript", "Ruby", "Python", "C#", "Golang", "SQL", "HTML", "CSS"]
  },
  {
    title: "Frameworks",
    content: ["React Native", "Rails", "React", "Node.js", "Angular", "Django", "PyGame"]
  },
  {
    title: "Tools",
    content: ["Unity Game Engine", "AutoCAD", "Revit", "Mathcad"]
  }
]

const education = [
  {
    title: "Bachelor's Degree in Civil Engineering",
    school: "West Virginia University, Morgantown, WV",
    year: "2011-2016"
  },
  {
    title: "Software Engineering Course",
    school: "Flatiron School, Denver, CO",
    year: "2022-2023"
  }
]






function App() {
  

  const mainTilesContainer = mainTiles.map((tile) => {
    return (
      <Tile title={tile.title} content={tile.description} image={tile.image} demo={tile.demo} github={tile.github}/>
    )
  })
  
  const additionalTilesContainer = additionalTiles.map((tile) => {
    return (
      <Tile title={tile.title} content={tile.description} image={tile.image} demo={tile.demo} github={tile.github} />
    )
  })

  const historyTilesContainer = historyTiles.map((tile) => {
    return (
      <HistoryTiles title={tile.position} content={tile.description} duration={tile.years} company={tile.company} />
    )
  })

  const skillsTilesContainer = skills.map((tile) => {
    return (
      <SkillTile title={tile.title} content={tile.content} />
    )
  })

  return (
    <>
      <div>
        <Header name={about.name} bio={about.bio}/>
      </div>
      <div className="tile-container">
        {mainTilesContainer}
        {skillsTilesContainer}
        <EducationTiles programs={education} />
        {historyTilesContainer}
        {additionalTilesContainer}
      </div>
    </>
    
  )
}

export default App

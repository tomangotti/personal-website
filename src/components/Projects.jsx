import React from "react";

function Projects(){

    const projects = [
        {
            name: "Gaming-Hub (Captsone project)",
            description: "A website that allows users to add or play pygames!",
            tools: "React, Ruby on Rails, Websockets, ActionCable, HTML, CSS",
            link: "https://gaminghub.onrender.com",
            github: "https://github.com/tomangotti/gaminghub"
        },
        {
            name: "SpaceShooter (Pygame)",
            description: "Simple Game, similar to space invaders.",
            tools: "Python, Pygame",
            link: "https://tomangotti.itch.io/spaceshooters",
            github: "https://github.com/tomangotti/SpaceShooter"
        }
    ]

    const projectList = projects.map((project, index) => {
        return (<div className="projects" key={index}>
            <h2>{project.name}</h2>
            <h5>{project.description}</h5>
            <h5>{project.tools}</h5>
            <div className="link">
                <a href={project.github} target="_blank" ><h5>GitHub</h5></a>
                <a href={project.link} target="_blank" ><h5>Demo</h5></a>
            </div>
        </div>)
    })
    return (
        <>
        <h1>Achievements</h1>
        {projectList}
        </>
    )
}

export default Projects
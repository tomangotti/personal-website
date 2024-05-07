import React from "react";

function Projects(){

    const projects = [
        {
            name: "The Good Cook Book (Mobile App)",
            description: "Created cross-platform mobile app for both Android and iOS, empowering users to create, store, and share favorite recipes.",
            tools: "React Native, Python",
            links: [
                    {name: "App Store", link: "https://apps.apple.com/us/app/the-good-cook-book/id6474798876"},
                    {name: "Google Play", link: "https://play.google.com/store/apps/details?id=com.tomangotti.thecookbook"},
                    {name: "Github", link: "https://github.com/tomangotti/the-cook-book"},
                ],
        },
        {
            name: "Rogue Fighter Elite (Unity Game)",
            description: "3D Space shooter build in The Unity Game Engine.",
            tools: "C#, Unity 3D game design",
            links: [
                    {name: "Demo", link: "https://sharemygame.com/@tomangotti/rogue-fighter-elite"},
            ],
        },
        {
            name: "Music Player",
            description: "Using Spotify API users can connect their account and let others play/pause/skip their songs",
            tools: "Python, Django, JavaScript, React",
            links: [
                {name: "Github", link: "https://github.com/tomangotti/musicPlayer"}
            ],
        },
        {
            name: "Project Boost (Unity Game)",
            description: "Platformer build in The Unity Game Engine.",
            tools: "C#, Unity 3D game design",
            links: [
                    {name: "Demo", link: "https://sharemygame.com/@tomangotti/tom-s-project-boost-from-unity-3d-course"},
                    {name: "Github", link: "https://github.com/tomangotti/projectBoost"}
            ]
        },
        {
            name: "To-Do List",
            description: "Website build in Angular and Golang that persists after each refresh.",
            tools: "Angular, Golang, Postgresql, HTML, CSS",
            links: [
                {name: "github", link: "https://github.com/tomangotti/to-do-list"},
                {name: "Demo", link: "https://to-do-list-b3f39.web.app/"}
            ],
        },
        {
            name: "Molly Michelle Beauty (Freelance Project)",
            description: "Website showcasing all hair styles available with client having ability to customize expierence!",
            tools: "React, Ruby on Rails, ActiveStorage, Postgresql, HTML, CSS",
            links: [
                {name: ""}
            ],
            link: "https://Mollymichellebeauty.com",
            github: "https://github.com/tomangotti/MollyMichelleBeauty"
        },
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
import React from "react";

function Skills(){

    const skills = [
        {
            language: "JavaScript",
            image: "https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-hq-png-1.png"
        },
        {
            language: "React",
            image: "https://www.datocms-assets.com/45470/1631110818-logo-react-js.png"
        },
        {
            language: "Ruby",
            image: "https://logodix.com/logo/2052379.png"
        },
        {
            language: "Rails",
            image: "https://assets.stickpng.com/images/58483107cef1014c0b5e4aa3.png"
        },
        {
            language: "HTML",
            image: "https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png"
        },
        {
            language: "CSS",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
        }
    ]
    const grid =skills.map((skill) => {
        return (<div className="card">
            <img src={skill.image} />
        </div>)
    })
    return (
        <>
        <h1>Perks</h1>
        <div className="grid-container">
            {grid}
        </div>
        </>
    )
}

export default Skills
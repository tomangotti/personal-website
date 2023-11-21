import React from "react";

function Skills(){

    const skills = [
        {
            language: "Angular",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png"
        },
        {
            language: "GoLang",
            image: "https://w7.pngwing.com/pngs/566/160/png-transparent-golang-hd-logo.png"
        },
        {
            language: "C#",
            image: "https://w7.pngwing.com/pngs/7/894/png-transparent-csharp-plain-logo-icon.png"
        },
        {
            language: "Unity",
            image: "https://w7.pngwing.com/pngs/270/765/png-transparent-unity-logo-illustration-unity-game-engine-logo-video-game-corelle-brands-angle-text-c-thumbnail.png"
        },
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
            image: "https://upload.wikimedia.org/wikipedia/commons/1/16/Ruby_on_Rails-logo.png"
        },
        {
            language: "Python",
            image: "https://logos-world.net/wp-content/uploads/2021/10/Python-Symbol.png"
        },
        {
            language: "Django",
            image: "https://1000logos.net/wp-content/uploads/2020/08/Django-Logo.png"
        },
        {
            language: "SQL",
            image: "https://www.tutorialsteacher.com/Content/images/home/sql.png"
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
        return (<div className="card" key={skill.name}>
            <img src={skill.image} alt={skill.language} />
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
import React from "react";

function History(){

    const work = [
        {
            company: "Freelance Web Designer",
            years: "April 2023 - Current",
            position: "Software Developer"
        },
        {
            company: "Wells Concrete",
            years: "Jan 2019 - Nov 2022",
            position: "Design Engineer"
        },
        {
            company: "Rocky Mountian Prestress",
            years: "Jan 2018 - Jan 2019",
            position: "Eningeer-In-training"
        },
        {
            company: "Rocky Mountian Prestress",
            years: "Aug 2017 - Jan 2018",
            position: "Field Engineer"
        },
        {
            company: "Rocky Mountian Prestress",
            years: "Jan 2017 - Aug 2017",
            position: "Quality Control Lead"
        },
        {
            company: "Rocky Mountian Prestress",
            years: "Aug 2016 - Jan 2017",
            position: "Quality Control Lead"
        }
    ]

    const school = [
        {
            name: "Flatiron School",
            course: "Software Engineering",
            graduation: "December 2022 - March 2023"
        },
        {
            name: "West Virginia",
            course: "Bachelor of Science in Civil Engineering",
            graduation: "Aug 2011 - May 2016"
        }
    ]
    const exp = work.map((job, index) => {
        return (<div className="history" key={index}>
            <h3>{job.position}</h3>
            <h3>{job.company}</h3>
            <h3>{job.years}</h3>
        </div>)
    })

    const edu = school.map((clas, index) => {
        return (
            <div className="history" key={index}>
                <h3>{clas.name}</h3>
                <h3>{clas.course}</h3>
                <h3>{clas.graduation}</h3>
            </div>
        )
    })
    return (
        <>
        <h1>Saved Games</h1>
        <br></br>
        <h2>School</h2>
        <br></br>
        {edu}
        <br></br>
        <br></br>
        <h2>Work</h2>
        <br></br>
        {exp}
        </>
    )
}

export default History
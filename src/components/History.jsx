import React from "react";

function History(){

    const work = [
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
            graduation: "March 2023 - expected"
        },
        {
            name: "West Virginia",
            course: "Bachelor of Science in Civil Engineering",
            graduation: "May 2016"
        }
    ]
    const exp = work.map((job) => {
        return (<div className="history">
            <h4>{job.position}</h4>
            <h5>{job.company}</h5>
            <h5>{job.years}</h5>
        </div>)
    })

    const edu = school.map((clas) => {
        return (
            <div className="history">
                <h4>{clas.name}</h4>
                <h4>{clas.course}</h4>
                <h4>{clas.graduation}</h4>
            </div>
        )
    })
    return (
        <>
        <h1>Saved Games</h1>
        <h2>School</h2>
        {edu}
        <br></br>
        <h2>Work</h2>
        {exp}
        </>
    )
}

export default History
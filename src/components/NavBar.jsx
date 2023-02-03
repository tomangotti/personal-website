import React from "react";
import { Route, Routes, Link } from "react-router-dom";

function NavBar(){

const shipStyle = {
    width: "250px",
    height: "200px",
    transform: "rotate(-90deg)" 

}

    return(
        <>
        <img style={shipStyle} id="ship" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/391aa854-ba50-427b-a8ab-68392d1af18f/dbzzd87-2c70f8ee-41ec-421e-b8f7-9ce9dfbd5a3d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM5MWFhODU0LWJhNTAtNDI3Yi1hOGFiLTY4MzkyZDFhZjE4ZlwvZGJ6emQ4Ny0yYzcwZjhlZS00MWVjLTQyMWUtYjhmNy05Y2U5ZGZiZDVhM2QucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.puxCmlinCrCWdSBk7Lo3k6yFh4rjlzctLf7WfyEZ_5w" />
        
        <h1>Thomas Angotti</h1>
        <table>
            <thead>
                <tr>
                    <td><Link to="/about"><button>About</button></Link></td>
                    <td><Link to="/skills"><button>Skills</button></Link></td>
                    <td><Link to="/projects"><button>Projects</button></Link></td>
                    <td><Link to="/history"><button>History</button></Link></td>
                    <td><Link to="/contact"><button>Contact</button></Link></td>
                </tr>
            </thead>
        </table>
        </>
    )
}

export default NavBar
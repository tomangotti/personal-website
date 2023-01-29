import React from "react";
import { Route, Routes, Link } from "react-router-dom";

function NavBar(){
    return(
        <>
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
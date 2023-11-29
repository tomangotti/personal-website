import React from "react";
import "./Header.css";


function Header({name, bio}){
    return(
        <header>
            <div className="header-container">
                <h1>{name}</h1>
                <p>{bio}</p>
            </div>
        </header>
    )
}

export default Header;
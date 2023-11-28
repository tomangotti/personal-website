import React from "react";
import "./Header.css";


function Header({name, bio}){
    return(
        <header>
            <h1>{name}</h1>
            <p>{bio}</p>
        </header>
    )
}

export default Header;
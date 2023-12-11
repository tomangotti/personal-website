import React, { useState, useEffect } from 'react';
import './EducationTile.css';

const EducationTiles = ({programs}) => {
    const colors = ['#e74c3c'];
    
    const [isFlipped, setIsFlipped] = useState(false);


    const getRandomColor = () => {
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    };

    const [backgroundColor, setBackgroundColor] = useState(getRandomColor());

    const flipTile = () => {
        setIsFlipped(!isFlipped);
    };

    useEffect(() => {
        const randomInterval = Math.floor(Math.random() * (20000 - 2000 + 1)) + 5000;
    
        const intervalId = setInterval(() => {
            flipTile();
        }, randomInterval);
    
        return () => {
            clearInterval(intervalId);
        };
    }, [isFlipped]);

    const body = programs.map((program, index) => {
        return (
            <div key={index}>
                <h2>{program.title}</h2>
                <p>{program.school}</p>
                <p>{program.year}</p>
            </div>
        )
    })

    return (
        <div className={`tile ${isFlipped ? 'flipped' : ''}`} style={{ backgroundColor }} onClick={flipTile}>
            <div className="front">
                <div className="front-body-edu">
                    <h1>Education</h1>
                </div>
            </div>
            <div className="back">
                <div className='back-body-edu' style={{color: backgroundColor}}>
                    {body}
                </div>
            </div>
        </div>
    );
};

export default EducationTiles;
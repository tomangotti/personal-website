import React, { useState, useEffect } from 'react';
import './EducationTile.css';

const EducationTiles = ({programs}) => {
    const colors = ['#3498db', '#2ecc71', '#e74c3c', '#9b59b6', '#f39c12'];
    
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
        const randomInterval = Math.floor(Math.random() * (20000 - 2000 + 1)) + 3000;
    
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
                <h3>{program.title}</h3>
                <h5>{program.school}</h5>
                <h6>{program.duration}</h6>
            </div>
        )
    })

    return (
        <div className={`tile ${isFlipped ? 'flipped' : ''}`} style={{ backgroundColor }} onClick={flipTile}>
            <div className="front">
                <div className="front-body">
                    <h1>Education</h1>
                </div>
            </div>
            <div className="back">
                <div className='back-body'>
                    {body}
                </div>
            </div>
        </div>
    );
};

export default EducationTiles;
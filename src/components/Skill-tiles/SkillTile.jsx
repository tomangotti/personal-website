import React, { useState, useEffect } from 'react';
import './SkillTile.css';

const SkillTile = ({title, content}) => {
    const colors = ['#2ecc71'];
    
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

    const list = content.map((item, index) => {
        return (
            <li key={index}>{item}</li>
        )
    })

    return (
        <div className={`tile ${isFlipped ? 'flipped' : ''}`} style={{ backgroundColor }} onClick={flipTile}>
            <div className="front">
                <div className="front-body-skill">
                    <h1>{title}</h1>
                </div>
            </div>
            <div className="back">
                <div className='back-body-skill' style={{color: backgroundColor}}>
                    <h3>{title}</h3>
                    <ul>
                        {list}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SkillTile;
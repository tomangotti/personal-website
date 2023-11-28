import React, { useState, useEffect } from 'react';
import './Tile.css';

const Tile = ({ title, content, image, link }) => {
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
        const randomInterval = Math.floor(Math.random() * (15000 - 2000 + 1)) + 5000;
    
        const intervalId = setInterval(() => {
            flipTile();
        }, randomInterval);
    
        return () => {
            clearInterval(intervalId);
        };
    }, [isFlipped]);

    return (
        <div className={`tile ${isFlipped ? 'flipped' : ''}`} style={{ backgroundColor }} onClick={flipTile}>
            <div className="front">
                <h1>{title}</h1>
            </div>
            <div className="back">
                <div className='back-body'>
                    <h3>{title}</h3>
                    <img src={image} alt={title} />
                    <p>{content}</p>
                </div>
            </div>
        </div>
    );
};

export default Tile;



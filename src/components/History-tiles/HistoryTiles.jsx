import React, { useState, useEffect } from 'react';
import './HistoryTile.css';
import { Link } from 'react-router-dom';

const HistoryTiles = ({title, content, duration, company}) => {
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

    return (
        <div className={`tile ${isFlipped ? 'flipped' : ''}`} style={{ backgroundColor }} onClick={flipTile}>
            <div className="front">
                <div className="front-body">
                    <h1>{title}</h1>
                </div>
            </div>
            <div className="back">
                <div className='back-body'>
                    <h3>{title}</h3>
                    <h5>{company}</h5>
                    <h6>{duration}</h6>
                    <p>{content}</p>
                </div>
            </div>
        </div>
    );
};

export default HistoryTiles;
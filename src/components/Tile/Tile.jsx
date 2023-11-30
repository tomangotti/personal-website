import React, { useState, useEffect } from 'react';
import './Tile.css';
import { Link } from 'react-router-dom';

const Tile = ({ title, content, image, demo, github }) => {
    const colors = ['#f39c12'];
    
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
                <div className='front-body-tile'>
                    <h1>{title}</h1>
                    {image ? <img src={image} alt={title}/>  : null}
                </div>
            </div>
            <div className="back">
                <div className='back-body-tile' style={{color: backgroundColor}}>
                    <h3>{title}</h3>
                    <p>{content}</p>
                    <br />
                    {demo ? <Link to={demo}>Demo</Link> : null}
                    <br />
                    {github ? <Link to={github}>GITHUB</Link> : null}
                </div>
            </div>
        </div>
    );
};

export default Tile;



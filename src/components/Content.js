import React from 'react';
import '../styles/content.css';
import hero from '../assets/hero.png';

export default function Content() {
    return (
        <>
                <img src={hero} className="contentImg" alt="contentImg"></img>
                <p className="contentTxt">
                    Get your seat to Mars!
                </p>   
        </>
    )
}
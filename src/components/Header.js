import React from 'react';
import header from '../assets/rocket.png';

import '../styles/header.css';

export default function Header() {
    return (
     <img src={header} className="header" alt="logo"></img>
    )
}
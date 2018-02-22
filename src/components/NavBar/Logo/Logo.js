import React from 'react';
import Logo from '../../../assets/images/logo.png';
import './Logo.css';

const logo = () => (
    <div className="Logo">
        <img src={Logo} alt="Logo" />
    </div>
);

export default logo;
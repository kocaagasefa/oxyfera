import React from 'react';
import './Main.css';
import Carousel from './NCarousel/NCarousel';
import Description from './Description/Description';
import Benefits from './Benefits/Benefits';

const main = props => (
    <div className="Main"  >
            <Carousel /> 
            <Description />       
            <Benefits />
    </div>
);

export default main;
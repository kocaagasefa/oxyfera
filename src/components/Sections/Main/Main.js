import React from 'react';
import './Main.css';
import Carousel from './NCarousel/NCarousel';
import Description from './Description/Description';

const main = props => (
    <div className="Main"  >
            <Carousel /> 
            <Description />       
    </div>
);

export default main;
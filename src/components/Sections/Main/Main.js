import React from 'react';
import './Main.css';
import Entrance from './Entrance/Entrance';
import Description from './Description/Description';
import Benefits from './Benefits/Benefits';

const main = props => (
    <div className="Main"  >
            <Entrance />
            <Description />       
            <Benefits />
    </div>
);

export default main;
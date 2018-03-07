import React from 'react';
import './Spinner.css';

const spinner = () => (
    <div className="Spinner-Container">
        <i className="fa fa-spinner fa-spin" 
        style={{fontSize:"72px",color:"#31708f"}}></i>
    </div>
);

export default spinner;
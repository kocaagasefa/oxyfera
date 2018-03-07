import React from 'react';
import BackgroundImage from '../../../../assets/images/main.jpg';
import './Entrance.css';
import {Button} from 'react-bootstrap';
import TweenLite from 'gsap';
import scrollTo from 'gsap/ScrollToPlugin';


const clickedHandler = (e) =>{
    e.preventDefault();
    TweenLite.to(window, .8, {scrollTo:{y:"#description", offsetY:100}});
}


const entrance = () =>(
    <div className="Entrance">
        <div className="Background-Image" style={{backgroundImage:"url("+BackgroundImage+")"}}/>
		<div className="Entrance-Content-Area">
            <h1>OXYFERA</h1>
            <h3>Sağlıklı Yaşam Teknolojileri</h3>
            <Button 
                bsSize="lg" bsStyle="primary" 
                onClick={clickedHandler}
                className="btn">Buradan Başlayın</Button>
        </div>
    </div>
)

export default entrance;
import React, {Component} from 'react';
import NukaCarousel from 'nuka-carousel';
import slides from './slides';
import './NCarousel.css';
import decorators from './decorators';

class nCarousel extends Component{
  componentDidMount() {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 0);
  }
  render() {
      return (
        <NukaCarousel 
          decorators={decorators}
          easing="linear"
          edgeEasing="easeOutCirc"
          speed={400}
          autoplay={true}
          wrapAround={true}>
            <div className="slider-image" style={{backgroundImage:"url("+slides[0] +")"}}/>
            <div className="slider-image" style={{backgroundImage:"url("+slides[1] +")"}}/>
            <div className="slider-image" style={{backgroundImage:"url("+slides[2] +")"}}/>
            
        </NukaCarousel>
      )
    }
  };
export default nCarousel;
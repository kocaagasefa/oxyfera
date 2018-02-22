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
            <img className="slider-image" src={slides[0]} alt="Resim alınamadı"/>
            <img className="slider-image" src={slides[1]} alt="Resim alınamadı"/>
            <img className="slider-image" src={slides[2]} alt="Resim alınamadı"/>
        </NukaCarousel>
      )
    }
  };
export default nCarousel;
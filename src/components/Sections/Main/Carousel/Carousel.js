import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';
import './Carousel.css';
import slides from './slides';

class CustomCarousel extends Component{
  state={
    selectedIndex:0,
    direction:null
  }
  handleIndexChange=(selectedIndex,event)=>{
    this.setState({
      index:selectedIndex,
      direction:event.direction
    });
  }
  render(){
    return (
        <Carousel 
          onSelect={this.handleIndexChange} 
          activeIndex={this.state.index} 
          direction={this.state.direction}
          >          
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" 
                src={slides[0]} 
                />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src={slides[1]} />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src={slides[2]} />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    )
  }
}


export default CustomCarousel;
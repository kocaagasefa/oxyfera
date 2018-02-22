import React,{Component} from 'react';

const DefaultDecorators = [
  {
    component: class extends Component{
        state={
            hover:false
        }
      render() {
        return (
          <button onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave}
            style={this.getButtonStyles(this.props.currentSlide === 0 && !this.props.wrapAround)}
            onClick={this.handleClick}><span className="glyphicon glyphicon-chevron-left"></span></button>
        )
      }
      handleClick=(e)=> {
        e.preventDefault();
        this.props.previousSlide();
      }
      handleMouseOver= (e) =>{
          this.setState({hover:true});
      }
      handleMouseLeave= (e) =>{
          this.setState({hover:false});
      }
      getButtonStyles=(disabled)=> {
        return {
          border: 0,
          background: 'rgba(0,0,0,0)',
          color: 'white',
          padding: 10,
          outline: 0,
          opacity: this.state.hover ? 1 : .3,
          cursor: 'pointer'
        }
      }
    },
    position: 'CenterLeft'
  },
  {
    component: class extends Component{
        state={
            hover:false
        }
    render() {
        return (
          <button onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave}
            style={this.getButtonStyles(this.props.currentSlide + this.props.slidesToScroll >= this.props.slideCount && !this.props.wrapAround)}
            onClick={this.handleClick}><span className="glyphicon glyphicon-chevron-right"></span></button>
        )
      }
    handleClick=(e)=> {
        e.preventDefault();
        this.props.nextSlide();
    }
      handleMouseOver= (e) =>{
        this.setState({hover:true});
    }
    handleMouseLeave= (e) =>{
        this.setState({hover:false});
    }
      getButtonStyles=(disabled) =>{
        return {
          border: 0,
          background: 'rgba(0,0,0,0)',
          color: 'white',
          padding: 10,
          outline: 0,
          opacity: this.state.hover ? 1 : .3,
          cursor: 'pointer'
        }
      }
    },
    position: 'CenterRight'
  },
  {
    component: class extends Component{
      render() {
        var self = this;
        var indexes = this.getIndexes(self.props.slideCount, self.props.slidesToScroll);
        return (
          <ul style={self.getListStyles()}>
            {
              indexes.map(function(index) {
                return (
                  <li style={self.getListItemStyles()} key={index}>
                    <button
                      style={self.getButtonStyles(self.props.currentSlide === index)}
                      onClick={self.props.goToSlide.bind(null, index)}>
                      &bull;
                    </button>
                  </li>
                )
              })
            }
          </ul>
        )
      }
      getIndexes=(count, inc)=> {
        var arr = [];
        for (var i = 0; i < count; i += inc) {
          arr.push(i);
        }
        return arr;
      }
      getListStyles=()=> {
        return {
          position: 'relative',
          margin: 0,
          top: -10,
          padding: 0
        }
      }
      getListItemStyles=()=> {
        return {
          listStyleType: 'none',
          display: 'inline-block'
        }
      }
      getButtonStyles=(active)=> {
        return {
          border: 0,
          background: 'white',
          color: 'black',
          cursor: 'pointer',
          padding: 10,
          outline: 0,
          fontSize: 24,
          opacity: active ? 1 : 0.5
        }
      }
    },
    position: 'BottomCenter'
  }
];

export default DefaultDecorators;

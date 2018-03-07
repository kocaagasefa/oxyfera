import React, {Component} from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import './GoogleMapsContainer.css';
import PlaceCard from './PlaceCard/PlaceCard';

export class Container extends Component {

    onMarkerClick= ()=>{
        console.log("Clicked on marker");
    }

render() {
    const style = {
        width: '100%',
        height: '100%',
        boxSizing:'border-box',
        margin:"auto"
      }
    return (
    <div className="GoogleMapsContainer" >
    <PlaceCard />
      <Map 
        google={this.props.google} 
        zoom={14}
        style={style}
        initialCenter={{ 
            lat: 39.962398, 
            lng: 32.745058
          }}>
        
       <Marker onClick={this.onMarkerClick}
                name={'Current location'} /> 
      </Map>
    </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyDNNU_o9ymFSeVvy-NxYM19Kzt7xD2Q4sY'
})(Container)
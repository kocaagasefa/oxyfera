import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import './GoogleMapsContainer.css';

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
      <Map 
        google={this.props.google} 
        zoom={14}
        style={style}
        initialCenter={{
            lat: 39.954594, 
            lng: 32.740350
          }}>

       <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
        {/* 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow> */}
      </Map>
    </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyDNNU_o9ymFSeVvy-NxYM19Kzt7xD2Q4sY'
})(Container)
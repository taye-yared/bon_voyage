import React from 'react'
import {Component} from 'react'
import {GoogleApiWrapper} from 'google-maps-react'
import Map from './map'
import Marker from './marker'

const api_key = "AIzaSyDI4hK1pCDnO7G7tlLnjXGGi0037Y1s9gU"

class MapContainer extends React.Component{
    constructor(props){
        super(props)
    }

    render(){

        if (!this.props.loaded) {
            return <div>Loading...</div>
        }

        const pos = {lat:37.854751, lng:-25.834751}
        return (
            <div>
                <Map addRome={this.props.addRome} addToMap={this.props.addToMap} toggleCard={this.props.toggleCard} google={this.props.google} initialCenter={{lat:37.854751, lng:-25.834751}}>
                    <Marker position={pos} />
                </Map>
            </div>
        )
        
    }
}



export default GoogleApiWrapper({
    apiKey: api_key
  })(MapContainer) 
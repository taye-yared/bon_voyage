import React from 'react'
import {Component} from 'react'
import MapContainer from './map_container'
import {Input} from 'semantic-ui-react' 
import MiamiCard from './miami_card'

const pinimg = require('../../../public/assets/pin.png')
export default class MapView extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        // Function will be called whenever the state or props of this class changes.
        // Never call setState in this function! (Will cause an infinite loop)
        return(
            <div>
                <div id="search-container">
                    <img id='pin-img' src={pinimg} />
                    
                    <h2 id="drop-me"> Drop Me! </h2>
                    
                    <div id="map-view-input">
                        <Input size="big" icon='search' placeholder='Search...' />
                    </div>
                </div>
                <div style={{display: 'flex'}}>
                    <MapContainer />
                    <MiamiCard />
                </div>
            </div>
        )
    }
}
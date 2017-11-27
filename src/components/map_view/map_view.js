import React from 'react'
import {Component} from 'react'
import MapContainer from './map_container'
import {Input, Image, Card} from 'semantic-ui-react' 
import MiamiCard from './miami_card'

const pinImg = require('../../../public/assets/pin.png')
const miamiImg = require('../../../public/assets/miami.jpg')
const parisImg = require('../../../public/assets/paris.jpg')
const tokyoImg = require('../../../public/assets/tokyo.jpg')
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
                    <img id='pin-img' src={pinImg} />
                    
                    <h2 id="drop-me"> Drop Me! </h2>
                    
                    <div id="map-view-input">
                        <Input size="big" icon='search' placeholder='Search...' />
                    </div>
                </div>
                <div style={{display: 'flex'}}>
                    <MapContainer />
                    <MiamiCard />
                </div>
                <div style={{display: 'flex', position: 'absolute', top:'77vh'}}>
                    <img src={parisImg} className='map-view-img sec-img' />
                    <img src={miamiImg} className='map-view-img main-img' />
                    <img src={tokyoImg} className='map-view-img sec-img' />
                   
                </div>
            </div>
        )
    }
}
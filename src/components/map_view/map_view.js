import React from 'react'
import {Component} from 'react'
import MapContainer from './map_container'
import FlightsView from './flights_view'
import {Input, Image, Card, Popup, Icon, Button} from 'semantic-ui-react' 
import MiamiCard from './miami_card'
import TokyoCard from './tokyo_card'
import Menu from '../common/menu'

const pinImg = require('../../../public/assets/pin.png')
const miamiImg = require('../../../public/assets/miami.jpg')
const parisImg = require('../../../public/assets/paris.jpg')
const tokyoImg = require('../../../public/assets/tokyo.jpg')
const brusselsImg = require('../../../public/assets/brussels.jpg')
const romeImg = require('../../../public/assets/rome.jpg')
// TODO: change images and card
export default class MapView extends React.Component{
    constructor(props){
        super(props)
        this.state={
            showMiami: true,
            inputText: '',
            addToMap: false,
            showRome: false,
            onMap: true
        }
        this.toggleCard = this.toggleCard.bind(this)
        this.onInputChange = this.onInputChange.bind(this)
        this.areaSearch = this.areaSearch.bind(this)
        this.onKeyDown = this.onKeyDown.bind(this)
        this.addRome = this.addRome.bind(this)
        this.onFlightsClick = this.onFlightsClick.bind(this)
        this.onMapClick = this.onMapClick.bind(this)
    }

    addRome(){
        this.setState({
            showRome: true
        })
    }

    toggleCard(){
        this.setState({
            showMiami: !this.state.showMiami
        })
    }

    onInputChange(event){
        this.setState({
            inputText: event.target.value
        })
    }

    onKeyDown(event){
        if (event.keyCode == 13) {
            // Pressed Enter
            this.areaSearch()
        }
    }

    areaSearch(){
        console.log('Enter pressed')
        this.setState({
            addToMap: true
        })
    }

    onMapClick(){
        this.setState({
            onMap: true
        })
    }

    onFlightsClick(){
        this.setState({
            onMap: false
        })
    }

    render(){
        // Function will be called whenever the state or props of this class changes.
        // Never call setState in this function! (Will cause an infinite loop)
        return(
            <div>
                <Menu />
                <div id="flight-toggle-wrapper">
                    <Button.Group>
                        <Button onClick={this.onMapClick} positive={this.state.onMap}>Map</Button>
                        <Button.Or />
                        <Button onClick={this.onFlightsClick} positive={!this.state.onMap}>Flights</Button>
                    </Button.Group>
                </div>
               { this.state.onMap && 
                    <div> 
                        <div id="search-container">
                            <img id='pin-img' src={pinImg} />
                            
                            <h2 id="drop-me"> Drop Me! </h2>
                            
                            <div id="map-view-input">
                                <Input icon={<Icon name='search' />}onKeyDown={this.onKeyDown} onChange={this.onInputChange} value={this.state.inputText} size="big" placeholder='Search...'/>
                            </div>
                        </div>
                        <div style={{display: 'flex'}}>
                            <MapContainer addRome={this.addRome} addToMap={this.state.addToMap} toggleCard={this.toggleCard}/>
                            {this.state.showMiami ? <MiamiCard /> : <TokyoCard />}
                        </div>
                        <div style={{display: 'flex', position: 'absolute', top:'77vh', width: '100%', justifyContent: 'space-evenly'}}>
                            <Popup position='top center' content="Paris" trigger={<img src={parisImg} className='map-view-img sec-img' />} />
                            <Popup position='top center' content="Miami" trigger={<img src={miamiImg} className='map-view-img main-img' />} />
                            <Popup position='top center' content="Tokyo" trigger={<img src={tokyoImg} className='map-view-img sec-img' />} />
                            {
                                this.state.addToMap &&
                                <Popup position='top center' content="Brussels" trigger={<img src={brusselsImg} className='map-view-img sec-img' />} />
                            }
                            {
                                this.state.showRome &&
                                <Popup position='top center' content="Rome" trigger={<img src={romeImg} className='map-view-img sec-img' />} />
                            }
                        </div>
                    </div>
                }
                {
                    !this.state.onMap && <FlightsView />
                }
            </div>
        )
    }
}
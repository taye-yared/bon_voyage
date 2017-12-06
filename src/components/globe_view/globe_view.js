import React from 'react'
import {Component} from 'react'
import Swipe from 'react-swipe-component'
import Menu from '../common/menu'
import TravelCard from './travel_card'
const globeImg = require('./globe.jpg')

const cityData = [["Miami", "Florida", "A land of sunshine, mystery and oranges", "MIA"],
        ["Honolulu", "Hawaii", "Exotic hula dancers and azure waves invite you to lounge in Polynesian paradise", "HNL"],
        ["Cancun", "Mexico", "Spring break every week of the year, soak up some rays and explore ancient Mayan ruins and cenotes", "CUN"],
        ["Anchorage", "Alaska", "Experience nature in all its glory as you trek the frozen tundra and climb the tallest mountain in North America", "ANC"],
        ["Angkor Wat", "Cambodia", "Travel back in time to the age of ancient Oriental emperors and golden palaces","REP"]]

export default class GlobeView extends React.Component{

    constructor(props){
        super(props)
        this.swipeListener = this.swipeListener.bind(this)
        this.state = {
        	currentCity : 0,
          weather:1
        }
    }
    swipeListener() {
    	this.setState({currentCity : Math.floor(Math.random()*cityData.length) + 0})
    }
    render() {
    	return(
    		<div>
                <Menu history={this.props.history}/>
                <div>
                  <h1>{this.props.weatherState}</h1>
	                <Swipe
	                	onSwipedLeft = {this.swipeListener}
	                	onSwipedRight = {this.swipeListener}
                        mouseSwipe = {true}>
	                	<img id="globe-img"src={globeImg} />
	                </Swipe>
	            </div>
	            <div>
                	{this.state.cardToShow != -1 ?
                        <TravelCard
                    		city = {cityData[this.state.currentCity][0]}
                    		state = {cityData[this.state.currentCity][1]}
                    		description = {cityData[this.state.currentCity][2]}
                    		airportCode = {cityData[this.state.currentCity][3]}>
                        </TravelCard> : null}
                </div>
            </div>
    	)
    }
}

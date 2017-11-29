import React from 'react'
import {Component} from 'react'
import Swipe from 'react-swipe-component'
import Menu from '../common/menu'
import Card from './card'
const globeImg = require('./globe.jpg')

export default class GlobeView extends React.Component{
	const cityData = [
		["Miami", "Florida", "A land of sunshine, mystery and oranges", "MIA"],
		["Honolulu", "Hawaii", "Exotic hula dancers and azure waves invite you to lounge in Polynesian paradise", "HNL"],
		["Cancun", "Mexico", "Spring break every week of the year, soak up some rays and explore ancient Mayan ruins and cenotes", "CUN"],
		["Anchorage", "Alaska", "Experience nature in all its glory as you trek the frozen tundra and climb the tallest mountain in North America", "ANC"],
		["Angkor Wat", "Cambodia", "Travel back in time to the age of ancient Oriental emperors and golden palaces","REP"]
	]
    constructor(props){
        super(props)
        this.swipeListener = this.swipeListener.bind(this)
        this.state = {
        	currentCity = -1
        }
    }
    swipeListener() {
    	this.setState({currentCity : Math.floor(Math.random()*cityData.length) + 0})
    }
    render() {
    	return(
    		<div>
                <Menu />
                <div>
	                <Swipe
	                	onSwipedLeft = this.swipeListener
	                	onSwipedRight = this.swipeListener>
	                	globeImg
	                <Swipe/>
	            <div/>
	            <div>
                	{this.state.cardToShow != -1 ? <Card 
                		city = cityData[currentCity][0]
                		state = cityData[currentCity][1]
                		description = cityData[currentCity][2]
                		airportCode = cityData[currentCity][3]/> : null}
                <div/>
            <div/>
    	)
    }
}
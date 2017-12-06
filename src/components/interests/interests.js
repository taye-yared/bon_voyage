import React from 'react'
import {Component} from 'react'
import { Button } from 'semantic-ui-react'
import Pics from './activityPics'
import Menu from '../common/menu'
import GlobeView from '../globe_view/globe_view'
import SignupView from '../signup_view/signup_view'
export default class Interests extends Component{
    constructor(props){
        super(props)
        this.finishLaterClick = this.finishLaterClick.bind(this)
        this.state={
            // Initialize state here if neded
        }
    }
    finishLaterClick(){
        this.props.history.push('/Preferences')
    }
    render(){
        // Function will be called whenever the state or props of this class changes.
        // Never call setState in this function! (Will cause an infinite loop)
        return(
	<div>
	 <Menu history={this.props.history}/>
            <div align = "center">
               <h1> Interests </h1>
		<h3> Where would you rather go?! (Click one) </h3>
            </div>
	    <div>
		<Pics history={this.props.history} weatherState={this.props.weatherState} activityState={this.props.activityState} regionState={this.props.regionState} updateWeather={this.props.updateWeather} updateActivity={this.props.updateActivity} updateRegion={this.props.updateRegion}/>
	    </div>
		<div align="right">
	    <Button color='black' style = {{marginRight:'135px'}} onClick = {this.finishLaterClick}> Finish later </Button>
		</div>
	</div>
        )
    }
}

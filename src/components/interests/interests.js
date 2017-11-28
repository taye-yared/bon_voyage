import React from 'react'
import {Component} from 'react'
import { Button } from 'semantic-ui-react'
import Pics from './activityPics'
import Menu from '../common/menu'
export default class Interests extends Component{
    constructor(props){
        super(props)

        this.state={
            // Initialize state here if neded
        }
    }

    render(){
        // Function will be called whenever the state or props of this class changes.
        // Never call setState in this function! (Will cause an infinite loop)
        return(
	<div>
	 <Menu />
            <div>
               <h1> Interests </h1>
		<h3> Where would you rather go?! (Click one) </h3>
            </div>
	    <div>
		<Pics />
	    </div>
	    <Button> Finish later </Button>
	</div>
        )
    }
}

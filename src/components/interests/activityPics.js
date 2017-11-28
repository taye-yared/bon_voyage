// This is just a template to copy and paste whenever you need to make a new component
import React from 'react'
import {Component} from 'react'
import { Image, Button, Checkbox, Icon, Table, Input, Label } from 'semantic-ui-react'
import pic3 from './picture2.jpg';
import pic4 from './picture3.jpg';
const pic1 = require('./picture0.jpg')
const pic2 = require('./picture1.jpg')

export default class Pics extends Component{
    constructor(props){
        super(props)

        this.state={		
            // Initialize state here if neded
		picA: pic1, picB: pic2, counter:0
        }
	this.toggleIcon = this.toggleIcon.bind(this);
    }

    toggleIcon(){
	if (this.state.counter == 0){
		this.setState({picA: pic3});
		this.setState({picB: pic4});	
	}
	this.setState({counter: this.state.counter+1});	
    }

    render(){
        // Function will be called whenever the state or props of this class changes.
        // Never call setState in this function! (Will cause an infinite loop)
        return(
            <div onClick={this.toggleIcon} >
		 <img style={{width: '400px', height: '400px'}} src={this.state.picA} />	
		<img style={{width: '400px', height: '400px'}} src={this.state.picB}  /> 		
            </div>
        )
    }
}

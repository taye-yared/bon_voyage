// This is just a template to copy and paste whenever you need to make a new component
import React from 'react'
import {Component} from 'react'
import { Image, Button, Checkbox, Icon, Table, Input, Label } from 'semantic-ui-react'
import pic3 from './picture2.jpg';
import pic4 from './picture3.jpg';
const pic1 = require('./picture0.jpg')
const pic2 = require('./picture1.jpg')
import pic5 from './picture4.jpg';
import pic6 from './picture5.jpg';
import pic7 from './picture6.jpg';
import pic8 from './picture7.jpg';
import pic9 from './picture8.jpg';
import pic10 from './picture9.jpg';

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
		this.setState({picA: pic3, picB: pic4, counter: this.state.counter+1});
	}
	else if (this.state.counter == 1){
                this.setState({picA: pic5, picB: pic6, counter: this.state.counter+1});
        }
	else if (this.state.counter == 2){
                this.setState({picA: pic7, counter: this.state.counter+1, picB: pic8});
        }
	else if (this.state.counter == 3){
                this.setState({picA: pic9, picB: pic10, counter: this.state.counter+1});
        }	
    }

    render(){
        // Function will be called whenever the state or props of this class changes.
        // Never call setState in this function! (Will cause an infinite loop)
        return(
            <div align = "center" onClick={this.toggleIcon} >
		 <img style={{width: '500px', height: '350px', padding:'20px', borderRadius: '30px'}} src={this.state.picA} />	
		<img style={{width: '500px', height: '350px', padding:'20px', borderRadius: '30px'}} src={this.state.picB}  /> 		
            </div>
        )
    }
}

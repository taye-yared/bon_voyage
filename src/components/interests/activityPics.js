// This is just a template to copy and paste whenever you need to make a new component
import React from 'react'
import {Component} from 'react'
import { Image, Button, Icon, Input, Label, Modal } from 'semantic-ui-react'
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
 		picA: pic1, picB: pic2, counter:0, modalIsOpen: false
        }
	this.toggleIcon = this.toggleIcon.bind(this);
    }
   
    finishLaterClick(){
        window.location="/Preferences"
    }

   tryAgainClick(){
        window.location="/interests"
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
	else if (this.state.counter == 4) {
		this.setState({modalIsOpen: true, counter:this.state.counter+1});		
	}	
    }

    render(){
        // Function will be called whenever the state or props of this class changes.
        // Never call setState in this function! (Will cause an infinite loop)
        return(
            <div align = "center" onClick={this.toggleIcon} >
		 <img style={{width: '600px', height: '400px', padding:'20px', borderRadius: '30px'}} src={this.state.picA} />	
		<img style={{width: '600px', height: '400px', padding:'20px', borderRadius: '30px'}} src={this.state.picB}  /> 		
			<h1> {this.state.counter}/5 </h1>
		<Modal open={this.state.modalIsOpen}>
			<h1 align = "center" style = {{padding:'20px'}}> Interests Summary </h1>
			<p style={{padding:'20px'}}> Based on your selections, it seems like you love adventure! You are free-spirited and enjoy trying new things. You are also active and outdoorsy. We think you'd enjoy visiting places with beautiful natural landscapes where you can kayak, hike, and more! We'll keep your interests in mind when picking suggested destinations for you - check those out on the "Feeling Spontaneous" page.      
			</p>
			<div align = "center" style = {{padding:'30px'}}>
			<Button onClick = {this.tryAgainClick}> Doesn't sound quite right? Try Again. </Button>
			<Button onClick = {this.finishLaterClick}> Sounds good! Let's move on to your preferences. </Button>
			</div>
		</Modal>           

	    </div>
        )
    }
}

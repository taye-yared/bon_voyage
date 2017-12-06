// This is just a template to copy and paste whenever you need to make a new component
import React from 'react'
import {Component} from 'react'
import { Image, Button, Icon, Input, Label, Modal } from 'semantic-ui-react'
import pic3 from './picture5.jpg';
import pic4 from './picture3.jpg';
const pic1 = require('./picture0.jpg')
const pic2 = require('./picture1.jpg')
import pic5 from './picture4.jpg';
import pic6 from './picture6.jpg';
import pic7 from './picture6.jpg';
import pic8 from './picture7.jpg';
import pic9 from './picture8.jpg';
import pic10 from './picture9.jpg';

export default class Pics extends Component{
    constructor(props){
        super(props)

      this.state={
            // Initialize state here if neded
        picA: pic1, picB: pic2, counter:0, modalIsOpen: false, rButtonText : 'Next'
      }
      this.toggleIconA = this.toggleIconA.bind(this);
      this.toggleIconB = this.toggleIconB.bind(this);
      this.backClick = this.backClick.bind(this);
      this.nextClick = this.nextClick.bind(this);
      this.finishLaterClick = this.finishLaterClick.bind(this)
      this.tryAgainClick = this.tryAgainClick.bind(this)
    }

    finishLaterClick(){
        this.props.history.push("/Preferences")
    }

   tryAgainClick(){
        this.props.history.push("/interests")
        this.setState({
          picA: pic1, picB: pic2, counter:0, modalIsOpen: false, rButtonText : 'Next'
        })
    }

   backClick(){
     a.style.border="none";
     b.style.border="none";
   	if (this.state.counter == 1){
                   this.setState({picA: pic1, picB: pic2, counter: this.state.counter-1, rButtonText : 'Next'});
           }
   	else if (this.state.counter == 2){
                   this.setState({picA: pic3, picB: pic4, counter: this.state.counter-1, rButtonText : 'Next'});
           }
   	else if (this.state.counter == 3){
                   this.setState({picA: pic5, counter: this.state.counter-1, picB: pic6});
           }
   	else if (this.state.counter == 4) {
   		this.setState({picA: pic7, picB: pic8, counter: this.state.counter-1});
   	}
   }

   nextClick(){
     a.style.border="none";
     b.style.border="none";
     if (this.state.counter == 0){
   		this.setState({picA: pic3, picB: pic4, counter: this.state.counter+1});
   	}
   	else if (this.state.counter == 1){
                   this.setState({picA: pic5, picB: pic6, counter: this.state.counter+1, rButtonText: "Complete"});
           }
   	else if (this.state.counter == 2){
                   this.setState({modalIsOpen: true});
           }
   }

    toggleIconA(){
      b.style.border=""
      a.style.border="2px solid black"
      if(this.state.counter == 0){
        this.props.updateWeather(0);
	 
      }
      else if(this.state.counter == 1){
        this.props.updateRegion(0);
      }
      else if(this.state.counter == 2){
        this.props.updateActivity(0);
      }
    }

    toggleIconB() {
      a.style.border=""
      b.style.border="2px solid black"
      if(this.state.counter == 0){
        this.props.updateWeather(1);
      }
      else if(this.state.counter == 1){
        this.props.updateRegion(1);
      }
      else if(this.state.counter == 2){
        this.props.updateActivity(1);
      }
    }
    render(){
        // Function will be called whenever the state or props of this class changes.
        // Never call setState in this function! (Will cause an infinite loop)
        return(
            <div align = "center" >
		 <img className="menu-item" id='a' style={{width: '600px', height: '400px', padding:'20px', borderRadius: '30px'}} src={this.state.picA} onClick={this.toggleIconA} />
		<img className="menu-item" id='b' style={{width: '600px', height: '400px', padding:'20px', borderRadius: '30px'}} src={this.state.picB}  onClick={this.toggleIconB}/>
			<h1> {this.state.counter+1}/3 </h1>
      <Button.Group>
        <Button disabled={this.state.counter == 0} attached='left' id="backbtn" color='black' labelPosition='left' icon='left chevron' content='Back' onClick= {this.backClick}/>
        <Button attached='right'id="nextbtn" labelPosition='right' icon='right chevron' color='black' content={this.state.rButtonText} onClick={this.nextClick}/>
      </Button.Group>
		<Modal open={this.state.modalIsOpen}>
			<h1 align = "center" style = {{padding:'20px'}}> Interests Summary </h1>
			<p style={{padding:'20px'}}> Based on your selections, it seems like you love adventure! You are free-spirited and enjoy trying new things. We'll keep your interests in mind when picking suggested destinations for you - check those out on the "Feeling Spontaneous" page.
			</p>
			<div align = "center" style = {{padding:'30px'}}>
			<Button onClick = {this.tryAgainClick}> Doesn't sound quite right? Try Again. </Button>
			<Button onClick = {this.finishLaterClick}> Sounds good! Let's move on to travel preferences. </Button>
			</div>
		</Modal>

	    </div>
        )
    }
}

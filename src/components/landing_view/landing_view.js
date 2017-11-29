import React from 'react'
import {Component} from 'react'
import {Input, Table, Button} from 'semantic-ui-react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'

const drinkImg = require('../../../public/assets/drink.png')
const listImg = require('../../../public/assets/list.png')
const suitcaseImg = require('../../../public/assets/suitcase.png')
const oneImg = require('../../../public/assets/one.png')
const twoImg = require('../../../public/assets/two.png')
const threeImg = require('../../../public/assets/three.png')
const backImg = require('../../../public/assets/beach5.jpg')

export default class LandingView extends React.Component{
    constructor(props){
        super(props)
        this.loginClick = this.loginClick.bind(this)
        this.signupClick = this.signupClick.bind(this)
        this.tryClick = this.tryClick.bind(this)
    }
    loginClick(){
      window.location="/map-view"
    }
    signupClick(){
      window.location="/signup"
    }
    tryClick(){
      window.location="/interests"
    }
    render(){
        // Function will be called whenever the state or props of this class changes.
        // Never call setState in this function! (Will cause an infinite loop)
        return(
            <div style={{backgroundImage:"url(" + backImg +")"}}>
              <div id="title">
                <div style={{display:"inline-block"}}>
                  <a href="https://fontmeme.com/handwriting-fonts/"><img src="https://fontmeme.com/permalink/171128/7b3c958af02e02aab0650a9692875934.png" border="0"/></a>
                </div>
                <div style={{display:"inline-block", float:"right"}}>
                  <Input align="right" size="medium" placeholder='Username' style={{margin:"3px"}}/>
                  <Input type="password" align="right" size="medium" placeholder='Password' style={{margin:"3px"}}/>
                  <button class="ui button" onClick={this.loginClick}>
                    Sign in
                  </button>
                </div>
              </div>
              <h2 align="center">How it Works</h2>
              <div id="images">
                <table id="landingtable" width="100%" textAlign="center" >
                  <tr>
                    <td align="center" >
                      <img id="one" width="75" src={oneImg}/>
                    </td>
                    <td align="center">
                      <img id="two" width="75" src={twoImg}/>
                    </td>
                    <td align="center">
                      <img id="three" width="75" src={threeImg}/>
                    </td>
                  </tr>
                  <tr>
                    <td align="center"><b><font size="4">Tell us what you like</font></b></td>
                    <td align="center"><b><font size="4">Make a wishlist of destinations</font></b></td>
                    <td align="center"><b><font size="4">Get ready to travel!</font></b></td>
                  </tr>
                  <tr>
                    <td align="center">
                      <img id="drink" width="100"src={drinkImg}/>
                    </td>
                    <td align="center">
                      <img id="list" width="80"src={listImg}/>
                    </td>
                    <td align="center">
                      <img id="suitcase" width="100" src={suitcaseImg}/>
                    </td>
                  </tr>
                </table>
              </div>
              <div id="buttons" align="center">
                <Button animated="fade" primary style={{margin:"20px", width:"130px"}} onClick={this.signupClick}>
                  <Button.Content visible>Sign Up</Button.Content>
                  <Button.Content hidden>Create an Account</Button.Content>
                </Button>
                <Button animated="fade" style={{width:"130px"}} onClick={this.tryClick}>
                  <Button.Content visible>Try It Out</Button.Content>
                  <Button.Content hidden>Continue as Guest</Button.Content>
                </Button>
              </div>
            </div>
        )
    }
}

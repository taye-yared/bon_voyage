import React from 'react'
import {Component} from 'react'
import {Input, Button, Form} from 'semantic-ui-react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'

const backImg = require('../../../public/assets/beach3.jpg')

export default class SignupView extends React.Component{
    constructor(props){
        super(props)
        this.submitClick = this.submitClick.bind(this)
    }
    submitClick(){
      window.location="/interests"
    }
    render(){
        // Function will be called whenever the state or props of this class changes.
        // Never call setState in this function! (Will cause an infinite loop)
        return(
            <div style={{backgroundImage:"url(" + backImg +")"}}>
              <div id="title">
                  <a href="https://fontmeme.com/handwriting-fonts/"><img src="https://fontmeme.com/permalink/171128/c3547f750585bfe36d5fc7bed6b6e631.png" border="0"/></a>
              </div>
              <div id="signup" style={{margin:"auto", width:"50%"}}>
                <Form align="center">
                  <h1>Sign Up</h1>
                  <Form.Group widths="equal">
                    <Form.Input placeholder="First Name"/>
                    <Form.Input placeholder="Last Name"/>
                  </Form.Group>
                  <Form.Field>
                    <input placeholder="Email"/>
                  </Form.Field>
                  <Form.Field>
                    <input placeholder="Password" type="password"/>
                  </Form.Field>
                  <Form.Group>
                    <Form.Input placeholder="MM" width={2}/>
                    <Form.Input placeholder="DD" width={2}/>
                    <Form.Input placeholder="YYYY" width={3}/>
                  </Form.Group>
                  <Form.Group>
                    <Form.Input placeholder="Phone Number (Optional)" width={6}/>
                  </Form.Group>
                  <Form.Checkbox label = "Send me Email notifications"/>
                  <Form.Checkbox label = "Send me Text notifications"/>
                  <Button primary onClick={this.submitClick}>Submit</Button>
                </Form>
              </div>
            </div>
        )
    }
}

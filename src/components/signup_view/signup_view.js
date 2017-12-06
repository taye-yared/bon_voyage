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
      this.props.history.push("/interests")
    }
    render(){
        // Function will be called whenever the state or props of this class changes.
        // Never call setState in this function! (Will cause an infinite loop)
        return(
            <div id="sign-up-wrapper" style={{backgroundImage:"url(" + backImg +")"}}>
              <div id="title">
                  <img src="https://fontmeme.com/permalink/171129/9950a9730792e7cd820f44ddce6b3363.png" border="0"/>
              </div>
              <div id="signup" style={{margin:"auto", width:"50%"}}>
                <Form id = "sign-up-form" align="center">
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
                  <Button primary disabled={this.props.weatherState == 1} onClick={this.submitClick}>Submit</Button>
                </Form>
              </div>
            </div>
        )
    }
}

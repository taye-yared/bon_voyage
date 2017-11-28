// This is just a template to copy and paste whenever you need to make a new component
import React from 'react'
import {Component} from 'react'
import { Image, Button, Checkbox, Icon, Table, Input, Label } from 'semantic-ui-react'
const pic1 = require('./picture0.jpg')
const pic2 = require('./picture1.jpg')

export default class Pics extends Component{
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
		test
			
            </div>
        )
    }
}

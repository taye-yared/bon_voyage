import React from 'react'
import {Component} from 'react'

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
                Hello World!
            </div>
        )
    }
}

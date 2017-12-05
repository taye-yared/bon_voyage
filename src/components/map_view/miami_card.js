// This is just a template to copy and paste whenever you need to make a new component
import React from 'react'
import {Component} from 'react'
import {Card, Image, Icon, Divider} from 'semantic-ui-react'

const style = {
    width: '24vw',
    height: '60vh',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-60%)',
    marginLeft: '74vw'
}

export default class MiamiCard extends Component{
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
            <div style={style}>
                <Card>
                    <Card.Content>
                        <Card.Header>Miami</Card.Header>
                        <Card.Meta>Florida</Card.Meta>
                        <Card.Description>
                            Miami is located on the Atlantic coast of Florida at the southern tip 
                            and is one of the most popular cities visited by tourists from around the world.  
                            Most arrive at Florida’s busiest airport: Miami International Airport.
                        </Card.Description>
                    </Card.Content>
                </Card>
            </div>
        )
    }
}
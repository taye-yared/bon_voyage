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

export default class MarrakeshCard extends Component{
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
                        <Card.Header>Marrakesh</Card.Header>
                        <Card.Meta>Morocco</Card.Meta>
                        <Card.Description>
                        The fourth largest city in Morocco, the warm city of Marrakesh is one with a rich 
                        history and is a prominent cultural, religious, and trading centre in northern Africa. 
                        To fully experience and appreciate its culture, a trip to Marrakesh’s medina and perusal 
                        of the various marketplaces or souks are a must for any traveller who wants to make the most 
                        of their trip.  
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <ul>
                            <h4 id="activity_header">Activities</h4>
                            <li>Sightseeing</li>
                            <li>Shopping</li>
                            <li>Tour Museums</li>
                            <li>Camel Riding</li>
                            <li>Quad Biking</li>
                            <li>Hot Air Balloon Rides/Tours</li>
                        </ul>
                    </Card.Content>
                </Card>
            </div>
        )
    }
}
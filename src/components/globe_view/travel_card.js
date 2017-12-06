// This is just a template to copy and paste whenever you need to make a new component
import React from 'react'
import {Component} from 'react'
import {Card, Image, Icon, Divider} from 'semantic-ui-react'
/*const mauiImg = require('../../public/assets/maui-hawaii.jpg')
const miamiImg = require('../../../public/assets/miami-florida.jpg')
const evergladesImg = require('../../public/assets/everglades-florida.jpg')
const marrakechImg = require('../../public/assets/marrakech-morocco.jpg')
const zurichImg = require('../../public/assets/zurich-switzerland.jpg')
const denverImg = require('../../public/assets/denver-colorado.jpg')
const chicagoImg = require('../../public/assets/chicago-illinois.jpg')
const denaliImg = require('../../public/assets/denali-alaska.jpg')*/

const style = {
    width: '24vw',
    height: '75vh',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-60%)',
    marginLeft: '74vw'
}

export default class TravelCard extends Component{
    constructor(props){
        super(props)
    }

    render(){
        // Function will be called whenever the state or props of this class changes.
        // Never call setState in this function! (Will cause an infinite loop)
        return(
            <div style={style}>
                <Card>
                    <Card.Content>
                        <img id="travelCardCityImage" src={require('../../../public/assets/' + this.props.city.toLowerCase() + 
                            '-' + this.props.state.toLowerCase() + '.jpg')} />
                        <Card.Header>{this.props.city}</Card.Header>
                        <Card.Meta>{this.props.state}</Card.Meta>
                        <Divider />
                            <Card.Content>
                                {this.props.custom_description} 
                            </Card.Content>
                        <Divider />
                            <Card.Content>
                                {this.props.activities} 
                            </Card.Content>
                        <Divider />
                        <Card.Content>
                                {this.props.reason} 
                            </Card.Content>
                        <Divider />

                    </Card.Content>   
                </Card>
            </div>
        )
    }
}
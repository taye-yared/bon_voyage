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
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra style={{overflowY:'scroll', maxHeight:'42.5vh'}}>
                        <Card.Content extra>
                            <a>
                                <Icon name='plane' />
                                AA ORD(5:25AM)->MIA(9:30AM)  $104 
                            </a>
                        </Card.Content>
                        <Divider />
                        <Card.Content extra>
                            <a>
                                <Icon name='plane' />
                                AA ORD(7:05AM)->MIA(11:14AM)  $145 
                            </a>
                        </Card.Content>
                        <Divider />
                        <Card.Content extra>
                            <a>
                                <Icon name='plane' />
                                AA ORD(1:55PM)->MIA(6:08PM)  $210 
                            </a>
                        </Card.Content>
                        <Divider />
                        <Card.Content extra>
                            <a>
                                <Icon name='plane' />
                                UA ORD(9:10AM)->MIA(3:57PM)  $66
                            </a>
                        </Card.Content>
                        <Divider />
                        <Card.Content extra>
                            <a>
                                <Icon name='plane' />
                                UA ORD(7:37AM)->MIA(11:42AM)  $145
                            </a>
                        </Card.Content>
                        <Divider />
                        <Card.Content extra>
                            <a>
                                <Icon name='plane' />
                                UA ORD(8:37AM)->MIA(12:42PM)  $155
                            </a>
                        </Card.Content>
                    </Card.Content>
                    
                </Card>
            </div>
        )
    }
}
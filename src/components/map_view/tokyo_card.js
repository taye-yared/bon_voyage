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
                        <Card.Header>Tokyo</Card.Header>
                        <Card.Meta>Japan</Card.Meta>
                        <Card.Description>
                        Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional, from 
                        neon-lit skyscrapers to historic temples. The opulent Meiji Shinto Shrine is known 
                        for its towering gate and surrounding woods.  
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra style={{overflowY:'scroll', maxHeight:'38.5vh'}}>
                        <Card.Content extra>
                            <a>
                                <Icon name='plane' />
                                AA ORD(5:25AM)->TYO(9:30AM)  $1066 (12/6/2017)
                            </a>
                        </Card.Content>
                        <Divider />
                        <Card.Content extra>
                            <a>
                                <Icon name='plane' />
                                AA ORD(7:05AM)->TYO(11:14AM)  $1110 (12/6/2017)
                            </a>
                        </Card.Content>
                        <Divider />
                        <Card.Content extra>
                            <a>
                                <Icon name='plane' />
                                AA ORD(1:55PM)->TYO(6:08PM)  $1150 (12/6/2017)
                            </a>
                        </Card.Content>
                        <Divider />
                        <Card.Content extra>
                            <a>
                                <Icon name='plane' />
                                UA ORD(9:10AM)->TYO(3:57PM)  $1165 (12/6/2017)
                            </a>
                        </Card.Content>
                        <Divider />
                        <Card.Content extra>
                            <a>
                                <Icon name='plane' />
                                UA ORD(7:37AM)->TYO(11:42AM)  $1200 (12/6/2017)
                            </a>
                        </Card.Content>
                        <Divider />
                        <Card.Content extra>
                            <a>
                                <Icon name='plane' />
                                UA ORD(8:37AM)->TYO(12:42PM)  $1212 (12/6/2017)
                            </a>
                        </Card.Content>
                    </Card.Content>
                    
                </Card>
            </div>
        )
    }
}
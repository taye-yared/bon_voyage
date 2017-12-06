import React from 'react'
import {Component} from 'react'
import {Table, Icon, Popup} from 'semantic-ui-react'
const aaImg = require('../../../public/assets/AA.jpg')
const dlImg = require('../../../public/assets/DL.png')
const uaImg = require('../../../public/assets/UA.png')

const cellStyle = {
    display: 'flex',
    flexDirection: 'column',
    fontSize: 'smaller',
    justifyContent: 'center',
    textAlign: 'center'
}

const flex = {
    display:'flex'
}

export default class FlightRow extends Component{
    constructor(props){
        super(props)
        this.renderIcon = this.renderIcon.bind(this)
    }

    renderIcon(name){
        let contentName = name
        switch(name){
            case 'snowflake outline':
                contentName = 'Chilly'
                break;
            case 'sun':
                contentName = 'Warm'
                break;
            case 'hotel':
                contentName = 'Relaxing'
                break;
            case 'bicycle':
                contentName = 'Active'
                break;
            case 'building':
                contentName = 'Big City'
                break;
            case 'tree':
                contentName = 'Country Side'
        }
            return <Popup
                position='top center'
                key={name}
                trigger={<Icon name={name} />}
                content={contentName}
                size='mini' />
    }

    onRowClick(airline){
        switch(airline){
            case 'AA':
                document.location = 'https://www.aa.com/homePage.do'
                break;
            case 'DL':
                document.location = 'https://www.delta.com/'
                break;
            case 'UA':
                document.location = 'https://www.united.com/ual/en/us/'
        }
    }

    render(){
        const {flight} = this.props
        let icons = []
        let airlineImg;
        let airlineName;
        switch(flight.airline){
            case 'AA':
                airlineImg = aaImg
                airlineName = 'American Airlines'
                break;
            case 'DL':
                airlineImg = dlImg
                airlineName = 'Delta Airlines'
                break;
            case 'UA':
                airlineImg = uaImg
                airlineName = "United Airlines"
        }
        // Cold or Hot
        switch(flight.location){
            case 'ZRH':
            case 'ANC':
            case 'ORD':
            case 'DEN':
                icons.push('snowflake outline')
                break;
            default:
                icons.push('sun')
        }
        // Chill or Active
        switch(flight.location){
            case 'ZRH':
            case 'ANC':
            case 'RAK':
            case 'HNL':
                icons.push('hotel')
                break;
            default:
                icons.push('bicycle')
        }
        // City or Country
        switch(flight.location){
            case 'ZRH':
            case 'ORD':
            case 'RAK':
            case 'MIA':
                icons.push('building')
                break;
            default:
                icons.push('tree')
        }
        const boundClick = this.onRowClick.bind(this, flight.airline)
        
        return(
                <Table.Row id='flight_row' onClick={boundClick}>
                    <Table.Cell>
                        <div style={flex}>
                            <div id="airline_img" style={cellStyle}>
                                <img width={80} src={airlineImg} />
                                {airlineName}
                            </div>
                            <div style={cellStyle}>
                                <div>{flight.start}</div>
                                <div>{flight.startTime}</div>
                            </div>
                            <div id="flight_arrow" style={cellStyle}>-></div>
                            <div style={cellStyle}>
                                <div>{flight.location}</div>
                                <div>{flight.endTime}</div>
                            </div>
                        </div>
                    </Table.Cell>
                    <Table.Cell textAlign='right'>
                        <div id="price_wrapper" style={flex}>
                            <div id="icon_wrapper">
                                {icons.map(this.renderIcon)}
                            </div>
                            <div id="airline_price">
                                {`$${flight.price}.00`}
                            </div>
                            <div id="savings_wrapper">
                                {`$${flight.savings}.00 under your budget!`}
                            </div>
                        </div>
                    </Table.Cell>
                </Table.Row>
        )
    }
}
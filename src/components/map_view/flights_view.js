import React from 'react'
import {Component} from 'react'
import FlightRow from './flight_row'
import { Table } from 'semantic-ui-react'

export default class FlightsView extends Component{
    constructor(props){
        super(props)
        this.renderRow = this.renderRow.bind(this)
    }

    getRand(max){
       return Math.floor(Math.random() * max)
    }

    renderRow(flight){
        return <FlightRow flight={flight} />
    }

    render(){
        const airlines = ['AA', 'UA', 'DL']
        const locations = ['ZRH', 'ANC', 'ORD', 'DEN', 'RAK', 'HNL', 'MIA', 'TPA']
        const start = 'ORD'
        let flights = []
        // generate random flights
        const num_flights = 20
        for(let i=0; i<num_flights; i++){
            let airline = airlines[Math.floor(Math.random() * airlines.length)]
            let startTime = `${this.getRand(12)+1}:${this.getRand(6)}${this.getRand(10)} PM`
            let endTime = `${this.getRand(12)+1}:${this.getRand(6)}${this.getRand(10)} AM`
            let location = locations[Math.floor(Math.random() * locations.length)]
            let price = this.getRand(200)+100
            let savings = this.getRand(50)
            flights.push({
                airline: airline,
                startTime: startTime,
                endTime: endTime,
                location: location,
                price: price,
                savings: savings,
                start: start
            })
        }
        return(
            <div id="table_wrapper">
                <Table singleLine selectable>
                    <Table.Body>
                        {flights.map(this.renderRow)}
                    </Table.Body>
                </Table>
            </div>
        )
    }
}
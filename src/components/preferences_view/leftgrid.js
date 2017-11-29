import React from 'react'
import { Component } from 'react'
import { Grid, Button, Icon } from 'semantic-ui-react'
import { DateRange } from 'react-date-range';
import ListTable from './listtable.js';

export default class LeftGrid extends Component {
    constructor(props){
        super(props)
    }

    render(){
      return (
        <Grid>
          <Grid.Row height={1}>
            <h3> Availibilities </h3>
          </Grid.Row>
          <Grid.Row height={9}>
            <DateRange
              onInit={this.handleSelect}
              onChange={this.handleSelect}
            />
          </Grid.Row>
          <Grid.Row height={6}>
              <Button icon labelPosition='left' primary size='small'>
                  <Icon name='add to calendar' /> Add New Date Range
              </Button>
          </Grid.Row>
          <Grid.Row height={6}>
              <ListTable />
          </Grid.Row>
        </Grid>
      )
    }
}
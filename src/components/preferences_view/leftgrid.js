import React from 'react'
import { Component } from 'react'
import { Grid, Button, Icon } from 'semantic-ui-react'
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
          <Grid.Row height={6}>
              <ListTable />
          </Grid.Row>
        </Grid>
      )
    }
}
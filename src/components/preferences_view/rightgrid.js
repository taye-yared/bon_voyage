import React from 'react'
import { Component } from 'react'
import { Grid, Button, Icon, Input } from 'semantic-ui-react'
import WishListTable from './table.js';

export default class RightGrid extends Component {
    constructor(props){
        super(props)
    }

    render(){
      return (
        <Grid>
          <Grid.Row height={1}>
            <h3> Wish List </h3>
          </Grid.Row>
          <Grid.Row height={60}>
          </Grid.Row>
          <Grid.Row height={60}>
            <Input placeholder='Starting point...' />
          </Grid.Row>
          <Grid.Row height={6}>
              <WishListTable />
          </Grid.Row>
        </Grid>
      )
    }
}
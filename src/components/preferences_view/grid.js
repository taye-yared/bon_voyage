import React from 'react'
import { Component } from 'react'
import { Grid, Image, Button } from 'semantic-ui-react'
import LeftGrid from './leftgrid.js';
import RightGrid from './rightgrid.js';

export default class PreferencesGrid extends Component {
    constructor(props){
        super(props)
    }

    render(){
      return (
        <Grid>
          <Grid.Column width={9}>
            <LeftGrid />
          </Grid.Column>
          <Grid.Column width={7}>
            <RightGrid />
          </Grid.Column>
          <Button content='Save preferences' icon='lock' labelPosition='left' color='green' floated='right'/>
        </Grid>
      )
    }
}
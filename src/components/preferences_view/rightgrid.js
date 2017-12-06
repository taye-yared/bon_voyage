import React from 'react'
import { Component } from 'react'
import { Grid, Button, Icon, Input , Text , Checkbox , Segment , Divider , Popup , Header, Item } from 'semantic-ui-react'
import WishListTable from './table.js';

const timeoutLength = 2600
const saveTimeoutLength = 600


export default class RightGrid extends Component {
    constructor(props){
        super(props)
        this.state = {isOpen: false}
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.savePreferences = this.savePreferences.bind(this)
    }

    savePreferences() {
      this.props.history.push("/map-view")
    }

    handleOpen() {
      this.timeout = setTimeout(() => {
        this.setState({ isOpen: true })}, saveTimeoutLength)
      this.timeout = setTimeout(() => {
        this.setState({ isOpen: false })}, timeoutLength)
    }

    handleClose() {
      this.setState({ isOpen: false })
      clearTimeout(this.timeout)
    }

    render(){
      return (
        <Grid>
          <Grid.Row height={1}>
            <h3> Wish List </h3>
          </Grid.Row>
          <Grid.Row height={60}>
            <Item>
              Departing from :
              <Item.Content verticalAlign='middle'>
                <Input icon='plane' iconPosition='left' list='cities' placeholder='e.g. Chicago (ORD)'/>
                <datalist id='cities'>
                <option value='New York (JFK)' />
                <option value='San Francisco (SFO)' />
                <option value='Chicago (ORD)' />
                <option value='Atlanta (ATL)' />
                <option value='Los Angeles (LAX)' />
                <option value='Dallas/Fort Worth (DFW)' />
                <option value='Denver (DEN)' />
                <option value='Las Vegas (LAS)' />
                <option value='Charlotte (CLT)' />
                <option value='Seattle/Tacoma (SEA)' />
                <option value='Phoenix (PHX)' />
                <option value='Miami (MIA)' />
                <option value='Orlando (MCO)' />
                <option value='Houston (IAH)' />
                <option value='Boston (BOS)' />
                <option value='Detroit (DTW)' />
                <option value='Philadelphia (PHL)' />
                <option value='Baltimore/Washington, D.C. (BWI)' />
                <option value='San Diego (SAN)' />
                <option value='Honolulu (HNL)' />
                <option value='Tampa (TPA)' />
                <option value='Portland (PDX)' />
              </datalist>
              </Item.Content>
            </Item>
          </Grid.Row>
          <Grid.Row height={6}>
              <WishListTable />
          </Grid.Row>
          <Grid.Row height={1}>
            <h3> Notifications </h3>
          </Grid.Row>
          <Grid.Row height={10}>
            <Segment floated='left'>
              <Checkbox label='Send me Email notifications' />
            <Divider fitted hidden/>
              <Checkbox label='Send me Text notifications' />
            </Segment>
          </Grid.Row>
          <Grid.Row height={10}>
            <Grid.Column width={30}>
              <Button content='Home' icon='world' labelPosition='right' color='blue' floated='right' size='large' onClick={this.savePreferences}/>
              <Grid.Column width={8}>
                  <Popup
                    trigger={<Button content='Save' icon='lock' labelPosition='left' color='green' floated='right' size='large'/>}
                    content={`Your preferences have been saved.`}
                    on='click'
                    open={this.state.isOpen}
                    onClose={this.handleClose}
                    onOpen={this.handleOpen}
                    position='top right'
                  />
                </Grid.Column>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      )
    }
}
import React from 'react'
import { Component } from 'react'
import { Button, Checkbox, Icon, Table, Input, Label } from 'semantic-ui-react'

export default class WishListTable extends Component {
    constructor(props){
        super(props)
    }

    render(){
      return (
        <Table compact celled definition>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell />
              <Table.HeaderCell>Destination</Table.HeaderCell>
              <Table.HeaderCell>Budget</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell collapsing>
                <Button icon negative size='tiny'>
                  <Icon name='close' />
                </Button>
              </Table.Cell>
              <Table.Cell>Paris</Table.Cell>
              <Table.Cell>1000</Table.Cell>
            </Table.Row>
          </Table.Body>

          <Table.Footer fullWidth>
            <Table.Row>
              <Table.HeaderCell />
              <Table.HeaderCell colSpan='4'>
                <Input placeholder='Destination...' />
                <Input labelPosition='right' type='text' placeholder='Budget...'>
                <Label basic>$</Label>
                <input />
                <Label>.00</Label>
                </Input>
                <Button icon labelPosition='left' primary size='small'>
                  <Icon name='world' /> Add New Destination
                </Button>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table> 
      )
    }
}
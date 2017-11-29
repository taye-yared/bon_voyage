import React from 'react'
import { Component } from 'react'
import { Button, Checkbox, Icon, Table, Input, Label } from 'semantic-ui-react'

export default class ListTable extends Component {
    constructor(props){
        super(props)
    }

    render(){
      return (
        <Table compact celled definition>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell />
              <Table.HeaderCell>Start</Table.HeaderCell>
              <Table.HeaderCell>End</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell collapsing>
                <Button icon negative size='mini'>
                  <Icon name='close' />
                </Button>
              </Table.Cell>
              <Table.Cell>10/21/2017</Table.Cell>
              <Table.Cell>12/22/2017</Table.Cell>
            </Table.Row>
          </Table.Body>

          <Table.Footer fullWidth>
          </Table.Footer>
        </Table> 
      )
    }
}
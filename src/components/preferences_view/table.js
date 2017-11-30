import React from 'react'
import { Component } from 'react'
import { Button, Checkbox, Icon, Table, Input, Label } from 'semantic-ui-react'

export default class WishListTable extends Component {
    constructor(props){
        super(props)
        this.state = {destination: '', budget: '', rows: []}
        this.handleNewDestination = this.handleNewDestination.bind(this);
        this.onDestinationChange = this.onDestinationChange.bind(this);
        this.onBudgetChange = this.onBudgetChange.bind(this);
        this.renderRow = this.renderRow.bind(this);
    }

    handleNewDestination() {
        var rows = this.state.rows.slice();
        rows.push({
          rdestination: this.state.destination,
          rbudget: this.state.budget,
          rshow: true
        });
       
        this.setState({
          rows:rows,
          destination:'',
          budget:''
        })
    }

    onDestinationChange(event){
      this.setState({
        destination: event.target.value
      })
    }

    onBudgetChange(event){
      this.setState({
        budget: event.target.value
      })
    }

    deleteRow(row){
        row.rshow = false;
        var rows = this.state.rows.slice();
        this.setState({
          rows:rows
        })
    }

    renderRow(row){
      let boundClick = this.deleteRow.bind(this, row)
      if(row.rshow == true) {
        return (
          <Table.Row>
            <Table.Cell>
                <Button icon='close' onClick={boundClick} />
            </Table.Cell>
            <Table.Cell>
              {row.rdestination}
            </Table.Cell>
            <Table.Cell>
              {row.rbudget}
            </Table.Cell>
          </Table.Row>
        )
      }
    }

    render(){
      return (
        <Table compact celled definition>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell>Destination</Table.HeaderCell>
              <Table.HeaderCell>Budget</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.state.rows.map(this.renderRow)}
          </Table.Body>

          <Table.Footer fullWidth>
            <Table.Row>
              <Table.HeaderCell />
              <Table.HeaderCell colSpan='4'>
                <Input value={this.state.destination} onChange={this.onDestinationChange} placeholder='Destination...' />
                <Input value={this.state.budget} onChange={this.onBudgetChange} labelPosition='right' type='text' placeholder='Budget...'>
                <Label basic>$</Label>
                <input />
                <Label>.00</Label>
                </Input>
                <Button icon labelPosition='left' primary size='small' onClick={this.handleNewDestination}>
                  <Icon name='world' /> Add New Destination
                </Button>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table> 
      )
    }
}
import React from 'react'
import { Component } from 'react'
import { Button, Checkbox, Icon, Table, Input, Label } from 'semantic-ui-react'
import { DateRange } from 'react-date-range';

export default class ListTable extends Component {
    constructor(props){
        super(props)
        this.state = {start: '', end: '', rows: []}
        this.handleNewDateRange = this.handleNewDateRange.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.renderRow = this.renderRow.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }


    handleNewDateRange() {
        var rows = this.state.rows.slice();
        rows.push({
          rstart: this.state.start,
          rend: this.state.end,
          rshow: true
        });
       
        this.setState({
          rows:rows
        })
    }

    handleSelect(range) {
      var start = range.startDate.format("MMMM Do YYYY");
      var end = range.endDate.format("MMMM Do YYYY");
      this.setState({
        start:start,
        end:end
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
              {row.rstart}
            </Table.Cell>
            <Table.Cell>
              {row.rend}
            </Table.Cell>
          </Table.Row>
        )
      }
    }

    render(){
      return (
      <div>
        <DateRange
              onInit={this.handleSelect}
              onChange={this.handleSelect}
            />
        <Button icon labelPosition='left' primary size='small' onClick={this.handleNewDateRange}>
          <Icon name='add to calendar' /> Add New Date Range
        </Button>
        <Table compact celled definition>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell />
              <Table.HeaderCell>Start</Table.HeaderCell>
              <Table.HeaderCell>End</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.state.rows.map(this.renderRow)}
          </Table.Body>

          <Table.Footer fullWidth>
          </Table.Footer>
        </Table> 
        </div>
      )
    }
}
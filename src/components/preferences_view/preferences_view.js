import React from 'react'
import { Component } from 'react'
import PreferencesGrid from './grid.js';
import { Button, Checkbox, Icon, Table, Input, Label } from 'semantic-ui-react'

export default class PreferencesView extends Component {
    constructor(props){
        super(props)
        this.state={
        }
    }

    render(){
        return (
            <div className="PreferencesView">
                <div class="ui container">
                    <h1> Preferences </h1>
                    <div>
                        <PreferencesGrid />
                    </div>
                </div>
            </div>
        );
    }
}
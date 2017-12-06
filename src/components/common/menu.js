import React from 'react'
import {Component} from 'react'
import { Button, Icon} from 'semantic-ui-react'

export default class MyMenu extends Component{
    constructor(props){
        super(props)
        this.onToggleMenu = this.onToggleMenu.bind(this)
        this.onFSClick = this.onFSClick.bind(this)
        this.onHClick = this.onHClick.bind(this)
        this.onPClick = this.onPClick.bind(this)
        this.onIClick = this.onIClick.bind(this)
        this.onLClick = this.onLClick.bind(this)
        this.state={
           showMenu: false
        }
    }

    onToggleMenu(){
        console.log('Clicked!')
        this.openNav()
    }

    /* Set the width of the side navigation to 250px */
    openNav() {
        document.getElementById("mySidenav").style.width = "250px";
    }

    /* Set the width of the side navigation to 0 */
    closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }

    onFSClick(e){
        e.preventDefault()
        this.props.history.push('/feeling-sponataneous')
    }

    onHClick(e){
        e.preventDefault()
        this.props.history.push('/map-view')
    }

    onPClick(e){
        e.preventDefault()
        this.props.history.push('/Preferences')
    }

    onIClick(e){
        e.preventDefault()
        this.props.history.push('/Interests')
    }

    onLClick(e){
        e.preventDefault()
        this.props.history.push('/')
    }

    render(){
        return(
            <div>
                    <div id="mySidenav" className="sidenav">
                    <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
                    <a className="menu-item" onClick={this.onHClick}>Home</a>
                    <a className="menu-item" onClick= {this.onFSClick}>Feeling Spontaneous</a>
                    <a className="menu-item" onClick={this.onPClick}>Preferences</a>
                    <a className="menu-item" onClick={this.onIClick}>Interests</a>
                    <a className="menu-item" onClick={this.onLClick}>Logout</a>
                  </div>

                  <Button
                    icon={<Icon name='content' size='big' color='black'/>}
                    size='large'
                    style={{backgroundColor: 'transparent'}}
                    onClick={this.onToggleMenu}/>
            </div>
        )
    }
}

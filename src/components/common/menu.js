import React from 'react'
import {Component} from 'react'
import { Button, Icon} from 'semantic-ui-react' 

export default class MyMenu extends Component{
    constructor(props){
        super(props)
        this.onToggleMenu = this.onToggleMenu.bind(this)
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

    

    render(){
        return(
            <div>
                    <div id="mySidenav" className="sidenav">
                    <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
                    <a href="/map-view">Home</a>
                    <a href="/feeling-sponataneous">Feeling Spontaneous</a>
                    <a href="/Preferences">Preferences</a>
                    <a href="/Interests">Interests</a>
                    <a href="/">Logout</a>
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
import {Component} from 'react'
import React from 'react'

export default class Marker extends Component {
    constructor(props){
        super(props)
        this.renderMarker = this.renderMarker.bind(this)
        this.componentDidUpdate = this.componentDidUpdate.bind(this)
    }

    componentDidUpdate(prevProps) {
        if ((this.props.map !== prevProps.map) ||
            (this.props.position !== prevProps.position)) {
            console.log("Marker props updated")
            this.renderMarker();
        }
    }

    componentDidMount(){
        if ((this.props.map)) {
        console.log("Marker props updated")
        this.renderMarker();
    }

    }

    renderMarker() {
      let {
        map, google, position, mapCenter
      } = this.props;

      let pos = position || mapCenter;
      position = new google.maps.LatLng(pos.lat, pos.lng);

      const pref = {
        map: map,
        position: position
      };
      this.marker = new google.maps.Marker(pref);
  }

  render(){
      return null;
  }
}
import React from 'react'
import { Component } from 'react'

const style = {
    width: '70vw',
    height: '60vh',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-60%)',
    marginLeft: '2vw'
}

export default class Map extends React.Component {
    mapDiv;
    map;
    markers;
    constructor(props) {
        super(props)
        this.loadMap = this.loadMap.bind(this)
        this.addMarker = this.addMarker.bind(this)

        const { lat, lng } = this.props.initialCenter;
        this.state = {
            currentLocation: {
                lat: lat,
                lng: lng
            }
        }
    }

    componentDidMount() {
        this.loadMap();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.google !== this.props.google) {
            this.loadMap();
        }
        if(prevProps.addToMap === false && this.props.addToMap === true){
            this.addMarker(39.736803, -104.952623, 'Denver, Colorado')
        }
    }

    addMarker(lat,lng,title){
        if(!this.markers) this.markers=[]
        const { google } = this.props;
        const maps = google.maps;
        let marker = new maps.Marker({
            id: this.markers && this.markers.length ? this.markers.length : 0,
            position: new maps.LatLng(lat, lng),
            map: this.map,
            title: title,
            animation: google.maps.Animation.DROP
        });
        marker.addListener('click', (event) =>{
            this.props.toggleCard()
        })
    }
    

    loadMap() {
        if (this.props && this.props.google) {
            // google is available
            const { google } = this.props;
            const maps = google.maps;

            let zoom = 2;
            let lat = 37.854751;
            let lng = -25.834751;
            const center = new maps.LatLng(lat, lng);
            const mapConfig = Object.assign({}, {
                center: center,
                zoom: zoom
            })
            this.map = new maps.Map(this.mapDiv, mapConfig);

            // Add Markers
            // Morocco
            this.addMarker(31.441182, -6.500734, 'Morocco')
            // Miami
            this.addMarker(25.776826, -80.211265, 'Miami')

            // Add Listeners
            this.map.addListener('click', (event) => {
                this.props.addRome()
                var tempMarker = new google.maps.Marker({
                    position: new maps.LatLng(20.781009, -156.317227),//event.latLng,
                    map: this.map,
                    title: 'Maui, Hawaii',
                    animation: google.maps.Animation.DROP
                });
            })
        }
    }

    onMouseUp(event){
        var simulateDivClick = document.createEvent('MouseEvents');
        simulateDivClick.initMouseEvent('click',true,true,document.defaultView,0,0,0,0,0,false,false,false,0,null,null);
    }

    render() {
        return (
            <div style={style} ref={(mapDiv) => { this.mapDiv = mapDiv; }} onMouseUp={this.onMouseUp}>
                Loading map...
            </div>
        )
    }
}
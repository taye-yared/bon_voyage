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
        this.renderMarkers = this.renderMarkers.bind(this)
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
            this.addMarker(50.845616, 4.353104, 'Brussels')
        }
    }

    renderMarkers() {
        const { children } = this.props;

        if (!children) {
            console.log("There are no children")
            return;
        }

        return React.Children.map(children, c => {
            return React.cloneElement(c, {
                map: this.map,
                google: this.props.google,
                mapCenter: this.state.currentLocation
            });
        })
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
            // Miami
            this.addMarker(25.795662, -80.286541, 'Miami, Florida')
            // Paris
            this.addMarker(48.961154, 2.437088, 'Paris, France')
            // Tokyo
            this.addMarker(35.549149, 139.779914, 'Tokyo, Japan')

            // Add Listeners
            this.map.addListener('click', (event) => {
                var tempMarker = new google.maps.Marker({
                    position: event.latLng,
                    map: this.map,
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
                {this.renderMarkers()}
            </div>
        )
    }
}
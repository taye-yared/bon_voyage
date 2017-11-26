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
    constructor(props) {
        super(props)
        this.loadMap = this.loadMap.bind(this)
        this.renderMarkers = this.renderMarkers.bind(this)
        this.componentDidUpdate = this.componentDidUpdate.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)

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
            let marker = new maps.Marker({
                position: new maps.LatLng(25.795662, -80.286541),
                map: this.map,
                title: 'Miami, Florida'
            });
            // Paris
            let marker1 = new maps.Marker({
                position: new maps.LatLng(48.961154, 2.437088),
                map: this.map,
                title: 'Paris, France'
            });
            // Tokyo
            let marker2 = new maps.Marker({
                position: new maps.LatLng(35.549149, 139.779914),
                map: this.map,
                draggable:true,
                title: 'Tokyo, Japan'
            });

            // Add Listeners
            this.map.addListener('click', (event) => {
                var tempMarker = new google.maps.Marker({
                    position: event.latLng,
                    map: this.map
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
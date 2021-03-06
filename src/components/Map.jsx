import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({data}) => {

    const mapStyles = {
        height: "50vh",
        width: "100%"
    }

    const defaultCenter = {
        lat: data.lat, lng:data.lng
    } 

    return (
        <LoadScript googleMapsApiKey='AIzaSyA1phH2Xa4ZvKyhjAsxsd1oorfNUfe1Wbg'>
            <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={20}
            center={defaultCenter}
            >
            <Marker position={defaultCenter} />

            </GoogleMap>
        </LoadScript>
    );
}

export default Map;
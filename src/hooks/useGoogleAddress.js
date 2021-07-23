import { useState, useEffect } from "react";
import axios from 'axios';
import { major } from "semver";

const useGoogleAddress = address => {
    const [map, setMap] = useState({});
    const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address},AIzaSyA1phH2Xa4ZvKyhjAsxsd1oorfNUfe1Wbg`;

    useEffect(async () => {
        const response = await axios(API);
            setMap(response.data.results[0].geometry.location);
    }, []);
    return map;
};

export default useGoogleAddress; 
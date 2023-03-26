import * as React from 'react'
import BingMapsView from 'react-native-bing-maps';

class Location {
    postalnum;
    street;
    county;
    state;
    zipcode;
    
    constructor(postalnumin, streetin, countyin, statein, zipcodein) {
        postalnum = postalnumin;
        street = streetin;
        county = countyin;
        state = statein;
        zipcode = zipcodein;
    }
}
function callLocationApi() {
    // if(!!postalnum && !!street && !!county && !!state && !!zipcode) {
    //     http://dev.virtualearth.net/REST/V1/Routes/Walking?wp.0=Eiffel%20Tower&wp.1=louvre%20museum&optmz=distance&output=xml&key={BingMapsKey}  
    // }
}


construct
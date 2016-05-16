# GeomagnaticToKpIndex-Converter
A lib to convert from the KP-Index --> geomagneticPosition and geomagneticPosition --> KpIndex

#What is the KpIndex ?
The planetary K-Index (called Kp-Index) is an index to measure the magnetic activity for the planet.
For more information visit [spaceweatherlive.com](https://www.spaceweatherlive.com/en/help/the-kp-index)



#Example

This module is written in ES6 you find the compiled version in *dist/lib.js* 

```javascript


 import {KpIndexToGeomagneticLat,GeomagneticLatToKPIndex}  from "./../src/lib"

 let geoMagLat = KpIndexToGeomagneticLat(4);
 let kpIndex = GeomagneticLatToKPIndex(58.3)



 console.log(geoMagLat) //  // output => 58.3
 console.log(kpIndex) //  // output => 4

```

#Known issues

* No implementation for the south

##KpIndexToGeomagneticLat

* All input values under zero return 66.5
* All input values above 9 return 48.1  

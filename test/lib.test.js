import {KpIndexToGeomagnaticLat,GeomagnaticLatToKPIndex}  from "./../src/lib"
import {expect} from "chai"

/**
*  generated from the following table: https://www.spaceweatherlive.com/de/hilfe/was-ist-der-kp-index
* @type Map<kpIndex,GeomagneticLat>
*/
const testValues = [
  {
    kpValue: 0,
    geomagneticLat: 66.5 // instead of 90 deg. beacuse the kp to geomagneticLat function can't calculate values between 66.5 and 90 deg
  },
  {
    kpValue: 0,
    geomagneticLat: 66.5
  },
  {
    kpValue: 1,
    geomagneticLat: 64.5
  },
  {
    kpValue: 2,
    geomagneticLat: 62.4
  },
  {
    kpValue: 3,
    geomagneticLat: 60.4
  },
  {
    kpValue: 4,
    geomagneticLat: 58.3
  },
  {
    kpValue: 5,
    geomagneticLat: 56.3
  },
  {
    kpValue: 6,
    geomagneticLat: 54.2
  },
  {
    kpValue: 7,
    geomagneticLat: 52.2
  },
  {
    kpValue: 8,
    geomagneticLat: 50.1
  },
  {
    kpValue: 9,
    geomagneticLat: 48.1
  }
]


describe("GeomagnaticToKpIndex-Converter", function() {
  describe("KpIndexToGeomagnaticPos", function() {

    testValues.forEach((testValue)=>{
        it("should return the geoMagLat: " + testValue.geomagneticLat + " for the kpIndex:" + testValue.kpValue, ()=>{
            let result = KpIndexToGeomagnaticLat(testValue.kpValue)

            expect(Math.round(result * 10)/10).to.equal(testValue.geomagneticLat);
        })
    })

  });

  describe("GeomagnaticPosToKPIndex", function() {
      testValues.forEach((testValue)=>{
        it("should return the kpIndex: " + testValue.kpValue + " for the geMagPost:" + testValue.geomagneticLat, ()=>{
            let result = GeomagnaticLatToKPIndex(testValue.geomagneticLat)
            expect(Math.round(result)).to.equal(testValue.kpValue);
        })
    })
  });
});

import * as React from 'react'
import WorldMap from "react-svg-worldmap";

const Map = () => {
    const data = [
     { country: "us", value: 331883986 }
    ];
  return (
    <div className="map">
    <WorldMap
      color="blue"
      value-suffix="people"
      width= "100%"
      size="responsive"
      data={data}
    />
  </div>
  )
}

export default Map
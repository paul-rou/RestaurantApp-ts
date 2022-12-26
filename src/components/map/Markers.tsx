import { MarkerF } from "@react-google-maps/api";
import React from "react";
import { IMap } from "../../type";

const Markers: React.FC<IMap> = ({localisation, restaurantList}) => {

    const restaurantMarkers = restaurantList.map(restaurant => 
        <MarkerF key={restaurant.title} position={{lat: restaurant.position.lat, lng: restaurant.position.lng}} label={restaurant.title.replace(/ .*/,'')}></MarkerF>)

  return (
          <div>
            <MarkerF position={localisation} icon={{
                path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                strokeColor: "red",
                scale: 6
            }}></MarkerF>
            {restaurantMarkers}
          </div>
  )

};

export default Markers;

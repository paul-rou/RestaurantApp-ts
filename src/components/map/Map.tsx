import { GoogleMap, LoadScript } from "@react-google-maps/api";
import React from "react";
import Markers from "./Markers";
import { API_KEY_GOOGLE } from "../../env";
import { IMap } from "../../type";

const Map: React.FC<IMap> = ({localisation, restaurantList}) => {


  return (
    <div>
      <LoadScript
      googleMapsApiKey={API_KEY_GOOGLE}
      >
        <GoogleMap
          mapContainerStyle={{
            width: '500px',
            height: '350px'
        }}
          zoom={18}
          center={localisation}
        >
          <Markers localisation={localisation} restaurantList={restaurantList} />
        </GoogleMap>
      </LoadScript>
   </div>
  )

};

export default Map;

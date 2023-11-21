import React from "react";
import { Loader } from "@googlemaps/js-api-loader";

const GoogleMapsCustom = () => {
  const loader = new Loader({
    apiKey: "",
    version: "weekly",
    libraries: ["places", "marker"],
  });

  const mapOptions = {
    center: {
      lat: 19.04333739260366,
      lng: -98.23410018607889,
    },
    zoom: 13,
  };

  loader
    .load()
    .then((google) => {
      const mapC = new google.maps.Map(document.getElementById("map"), mapOptions);
      new google.maps.Marker({position: {
        lat: 19.04333739260366,
        lng: -98.23410018607889,
      }, mapC});
    })
    .catch((e) => {
      // do something
    });

  return <div style={{ height: "330px" }} id="map"></div>;
};

export default GoogleMapsCustom;

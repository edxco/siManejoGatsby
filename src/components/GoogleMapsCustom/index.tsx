import React from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { useGMapsKey } from "../../hooks";
import { ICoordinates } from "../../atoms/types/cities";

const GoogleMapsCustom = (props: ICoordinates) => {
  const GoogleMapsKey = useGMapsKey();
  const loader = new Loader({
    apiKey: GoogleMapsKey,
    version: "weekly",
    libraries: ["places", "marker"],
  });

  const mapOptions = {
    center: {
      lat: Number(props.lat),
      lng: Number(props.lng),
    },
    zoom: 15,
  };

  loader
    .load()
    .then((google) => {
      const siManejoLocationMap = new google.maps.Map(
        document.getElementById("map"),
        mapOptions
      );
      if (!siManejoLocationMap) return;

      new google.maps.Marker({
        position: { lat: Number(props.lat), lng: Number(props.lng) },
        map: siManejoLocationMap,
      });
    })
    .catch((e) => {
      // do something
    });
  return <div style={{ height: "330px" }} id="map"></div>;
};

export default GoogleMapsCustom;

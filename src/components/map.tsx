"use client";

import {MapContainer, Marker, TileLayer, Tooltip} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"

export interface Restaurant {
  key: string;
  name: string;
  types: string[];
  address: {
    street: string;
    city: string;
    country: string;
  };
  website: string;
  googleMaps: string;
  rating: number;
  position: [number, number];
  images: string[];
}

export default function FoodMap({restaurants}: Readonly<{ restaurants: Restaurant[] }>) {
  const RestaurantsMarkers = ({restaurants}: Readonly<{ restaurants: Restaurant[] }>) => {
    return <>
      {restaurants.map((item, index) => (
        <Marker
          key={index}
          position={item.position}
        >
          <Tooltip>
            {`${item.name} (${item.rating}) - ${item.types.join(", ")}`}
          </Tooltip>
        </Marker>
      ))}
    </>
  }

  return (
    <MapContainer
      center={[44, -7]}
      zoom={4}
      scrollWheelZoom={true}
      style={{height: "100%"}}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MarkerClusterGroup
        chunkedLoading
        maxClusterRadius={25}
        showCoverageOnHover={false}
      >
        <RestaurantsMarkers restaurants={restaurants}/>
      </MarkerClusterGroup>
    </MapContainer>
  )
}

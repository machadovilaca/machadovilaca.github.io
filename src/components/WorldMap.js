"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import RestaurantLayer from "./RestaurantLayer";
import FlightLayer from "./FlightLayer";
import StadiumLayer from "./StadiumLayer";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

const MAP_CENTER = [30, 0];
const MAP_ZOOM = 3;

export default function WorldMap({ restaurants = [], focusKey = null, flights = [], stadiums = [] }) {
  useEffect(() => {
    window.dispatchEvent(new Event("resize"));
  }, []);

  return (
    <MapContainer
      center={MAP_CENTER}
      zoom={MAP_ZOOM}
      minZoom={2}
      maxZoom={18}
      className="h-full w-full"
      style={{ background: "#f4f4f5" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />

      <RestaurantLayer restaurants={restaurants} focusKey={focusKey} />
      <FlightLayer flights={flights} />
      <StadiumLayer stadiums={stadiums} />
    </MapContainer>
  );
}

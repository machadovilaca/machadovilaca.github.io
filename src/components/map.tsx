"use client";

import React from "react";

import {useRouter, useSearchParams} from 'next/navigation'

import {MapContainer, Marker, TileLayer, Tooltip} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import {RestaurantDialog} from "@/components/restaurant-dialog";
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import "./map.css"
import {Restaurant} from "@/app/food-map/restaurants";

const baseUrl = "/food-map"

export default function FoodMap({restaurants}: Readonly<{ restaurants: Restaurant[] }>) {
  const searchParams = useSearchParams()
  const router = useRouter()

  const [selectedRestaurant, setSelectedRestaurant] = React.useState<Restaurant | null>(null);

  React.useEffect(() => {
    const restaurant = searchParams.get('restaurant')
    const initialRestaurant = restaurants.find(item => item.key === restaurant);

    setSelectedRestaurant(initialRestaurant || null)
  }, [restaurants, searchParams])

  const RestaurantsMarkers = ({restaurants}: Readonly<{ restaurants: Restaurant[] }>) => {
    return <>
      {restaurants.map((item, index) => (
        <Marker
          key={index}
          position={item.position}
          eventHandlers={{
            click: () => router.push(`${baseUrl}?restaurant=${item.key}`)
          }}
        >
          <Tooltip>
            {`${item.name} (${item.rating}) - ${item.types.join(", ")}`}
          </Tooltip>
        </Marker>
      ))}
    </>
  }

  return (
    <>
      {
        selectedRestaurant !== null &&
          <RestaurantDialog
              restaurant={selectedRestaurant}
              open={true}
              onOpenChange={() => router.push(baseUrl)}
          />
      }

      <MapContainer
        center={[44, -7]}
        zoom={4}
        scrollWheelZoom={true}
        style={{height: "calc(100vh - 150px)"}}
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
    </>
  )
}

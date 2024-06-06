"use client";

import React from "react";

import {useRouter, useSearchParams} from 'next/navigation'
import {MapContainer, Marker, TileLayer, Tooltip} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import {icon} from "leaflet";

import {Restaurant} from "@/app/food-map/restaurants";
import {RestaurantDialog} from "@/components/restaurant-dialog";
import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger
} from "@/components/ui/multiselect";

import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import "./map.css"

const baseUrl = "/food-map"
const marker = icon({iconUrl: "/marker-icon.svg"});

export default function FoodMap({restaurants}: Readonly<{ restaurants: Restaurant[] }>) {
  const searchParams = useSearchParams()
  const router = useRouter()

  const [value, setValue] = React.useState<string[]>([])
  const [showingRestaurants, setShowingRestaurants] = React.useState<Restaurant[]>(restaurants)
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
          icon={marker}
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

  const searches = () => {
    const tags: Set<string> = new Set()

    restaurants.forEach(restaurant => {
      restaurant.types.forEach(tag => tags.add(tag))
      tags.add(restaurant.address.country)
      tags.add(restaurant.address.city)
      tags.add(restaurant.name)
    })

    return Array.from(tags)
  }

  const onSearchChange = (value: string[]) => {
    const toShow = restaurants.filter(restaurant => {
      const tags = [...restaurant.types, restaurant.address.city, restaurant.address.country, restaurant.name]
      return value.every(tag => tags.includes(tag))
    })

    setShowingRestaurants(toShow)
    setValue(value)
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

      <div className="h-20 w-full">
        <MultiSelector values={value} onValuesChange={onSearchChange} loop>
          <MultiSelectorTrigger>
            <MultiSelectorInput placeholder="Search by type, city, etc..."/>
          </MultiSelectorTrigger>
          <MultiSelectorContent>
            <MultiSelectorList>
              {
                searches().map((tag, index) => (
                  <MultiSelectorItem key={index} value={tag}>{tag}</MultiSelectorItem>
                ))
              }
            </MultiSelectorList>
          </MultiSelectorContent>
        </MultiSelector>
      </div>

      <MapContainer
        center={[44, -7]}
        zoom={4}
        scrollWheelZoom={true}
        style={{height: "calc(100vh - 250px)"}}
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
          <RestaurantsMarkers restaurants={showingRestaurants}/>
        </MarkerClusterGroup>
      </MapContainer>
    </>
  )
}
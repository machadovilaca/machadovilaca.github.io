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
import {Slider} from "@/components/ui/slider";
import {BadgeDollarSign, DollarSignIcon, StarIcon} from "lucide-react";

const baseUrl = "/food-map"
const marker = icon({iconUrl: "/marker-icon.svg"});
const defaultRatingValue = [0, 5]
const defaultPriceValue = [1, 5]

export default function FoodMap({restaurants}: Readonly<{ restaurants: Restaurant[] }>) {
  const searchParams = useSearchParams()
  const router = useRouter()

  const [searchValue, setSearchValue] = React.useState<string[]>([])
  const [ratingValue, setRatingValue] = React.useState<number[]>(defaultRatingValue)
  const [priceValue, setPriceValue] = React.useState<number[]>(defaultPriceValue)

  const [showingRestaurants, setShowingRestaurants] = React.useState<Restaurant[]>(restaurants)
  const [selectedRestaurant, setSelectedRestaurant] = React.useState<Restaurant | null>(null);

  React.useEffect(() => {
    const restaurant = searchParams.get('restaurant')
    const initialRestaurant = restaurants.find(item => item.key === restaurant);

    setSelectedRestaurant(initialRestaurant || null)
  }, [restaurants, searchParams])

  React.useEffect(() => {
    const toShow =
      restaurants
        .filter(restaurant => {
          const restaurantTags = [...restaurant.types, restaurant.address.city, restaurant.address.country, restaurant.name]
          return searchValue.every(tag => restaurantTags.includes(tag))
        })
        .filter(restaurant => restaurant.rating >= ratingValue[0] && restaurant.rating <= ratingValue[1])
        .filter(restaurant => restaurant.priceRange >= priceValue[0] && restaurant.priceRange <= priceValue[1])

    setShowingRestaurants(toShow)
  }, [restaurants, searchValue, ratingValue, priceValue])

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

  const tagSelector = () =>
    <div className="w-full flex flex-row gap-3 items-center">
      <span className="min-w-44">Type, location, name:</span>
      <MultiSelector values={searchValue} onValuesChange={setSearchValue} loop>
        <MultiSelectorTrigger>
          <MultiSelectorInput placeholder="Search by..."/>
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

  const ratingSelector = () =>
    <div className="mb-5 flex flex-row gap-3 items-center">
      <span>Rating:</span>
      <div className="flex flex-row gap-2 items-center">
        <span className="flex flex-row">
          {Array.from({length: ratingValue[0]}, (_, i) => (
            <StarIcon key={i} fill="#f0ab00" strokeWidth={0.2} />
          ))}
          {Array.from({length: 5 - ratingValue[0]}, (_, i) => (
            <StarIcon key={i} fill="#f0ab00" strokeWidth={0.2} className="opacity-30" />
          ))}
        </span>
        <Slider
          className="w-40"
          defaultValue={defaultRatingValue}
          max={5}
          step={1}
          onValueChange={setRatingValue}
        />
        <span className="flex flex-row">
          {Array.from({length: ratingValue[1]}, (_, i) => (
            <StarIcon key={i} fill="#f0ab00" strokeWidth={0.2}/>
          ))}
          {Array.from({length: 5 - ratingValue[1]}, (_, i) => (
            <StarIcon key={i} fill="#f0ab00" strokeWidth={0.2} className="opacity-30"/>
          ))}
        </span>
      </div>
    </div>

  const priceSelector = () =>
    <div className="mb-5 flex flex-row gap-3 items-center">
      <span>Price:</span>
      <div className="flex flex-row gap-2 items-center">
        <span className="flex flex-row">
            {Array.from({length: priceValue[0]}, (_, i) => (
              <BadgeDollarSign key={i}/>
            ))}
          {Array.from({length: 5 - priceValue[0]}, (_, i) => (
            <BadgeDollarSign key={i} className="opacity-30"/>
          ))}
        </span>
        <Slider
          className="w-40"
          defaultValue={defaultPriceValue}
          min={1}
          max={5}
          step={1}
          onValueChange={setPriceValue}
        />
        <span className="flex flex-row">
          <span className="flex flex-row">
            {Array.from({length: priceValue[1]}, (_, i) => (
              <BadgeDollarSign key={i}/>
            ))}
              {Array.from({length: 5 - priceValue[1]}, (_, i) => (
                <BadgeDollarSign key={i} className="opacity-30"/>
              ))}
          </span>
        </span>
      </div>
    </div>

  return (
    <div className="flex flex-col gap-5">
      {
        selectedRestaurant !== null &&
          <RestaurantDialog
              restaurant={selectedRestaurant}
              open={true}
              onOpenChange={() => router.push(baseUrl)}
          />
      }

      {tagSelector()}
      {ratingSelector()}
      {priceSelector()}

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
    </div>
  )
}

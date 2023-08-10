import * as React from "react";
import { Page } from "@app/components/Page";
import { Icon } from 'leaflet';
import { MapContainer, Marker, TileLayer, Tooltip, useMap } from "react-leaflet";
import MarkerClusterGroup from 'react-leaflet-cluster';
import { restaurantData } from "@app/FoodMap/data/Restaurants";
import { FoodMarker } from "@app/FoodMap/FoodMarker";
import { Button, Flex } from "@patternfly/react-core";
import { FiltersModal } from "@app/FoodMap/FiltersModal";

import pin from '@app/images/pin.svg';
import 'leaflet/dist/leaflet.css'

export interface Restaurant {
  name: string;
  types: string[];
  address: {
    street: string;
    city: string;
    country: string;
  };
  website: string;
  rating: number;
  position: [number, number];
  images: string[];
}

export interface RestaurantFilter {
  types?: string[];
  minimumRating?: number;
  location?: string;
}

export const FoodMap: React.FunctionComponent = () => {
  const [isFilterModalOpen, setIsFilterModalOpen] = React.useState(false);
  const [restaurantFilters, setRestaurantFilters] = React.useState<RestaurantFilter>({})

  const markerIcon = new Icon({
    iconUrl:  pin,
    iconSize: [40, 40],
  });

  const handleFilterModalToggle = () => {
    setIsFilterModalOpen(!isFilterModalOpen);
  }

  const matchesType = (item: Restaurant): boolean => {
    if (restaurantFilters.types === undefined) {
      return true;
    }

    for (const type of restaurantFilters.types) {
      const uppercaseType = type.toUpperCase();
      if (item.types.map(t => t.toUpperCase()).includes(uppercaseType)) {
        return true;
      }
    }

    return false;
  }

  const matchesLocation = (item: Restaurant): boolean => {
    if (restaurantFilters.location === undefined) {
      return true;
    }

    const location = restaurantFilters.location.toUpperCase()

    return (
      item.address.country.toUpperCase().includes(location)
      ||
      item.address.city.toUpperCase().includes(location)
      ||
      item.address.street.toUpperCase().includes(location)
    )
  }

  const matchesFilter = (item: Restaurant): boolean => {
    return matchesType(item) && matchesLocation(item);
  }

  const FilterButtons = () => {
    const map = useMap();

    return (
      <Flex
        style={{
          position: "absolute",
          width: "auto",
          zIndex: 1000,
          top: 10,
          right: 0,
          background: "white",
          padding: "10px",
        }}
      >
        <Button variant="primary" onClick={handleFilterModalToggle}>
          Filters
        </Button>
        <Button variant="secondary" onClick={() => {
          setRestaurantFilters({});
          map.setView([47.12050796189794, 15.430993191034421], 5);
        }}>
          Reset
        </Button>
      </Flex>
    )
  }

  return (
    <Page title="Food Map" style={{ maxHeight: "90vh" }}>
      <MapContainer
        center={[47.12050796189794, 15.430993191034421]}
        zoom={5}
        scrollWheelZoom={true}
        style={{ height: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <FilterButtons />
        <FiltersModal
          isOpen={isFilterModalOpen}
          handleToggle={handleFilterModalToggle}
          restaurantFilters={restaurantFilters}
          setRestaurantFilters={setRestaurantFilters}
        />
        <MarkerClusterGroup
          chunkedLoading
          maxClusterRadius={25}
          showCoverageOnHover={false}
        >
          {
            restaurantData.map((item, index) => (
              matchesFilter(item) &&
              <Marker
                key={index}
                position={item.position}
                icon={markerIcon}
                eventHandlers={{
                  click: (e) => {
                    console.log(e)
                  },
                }}
              >
                <Tooltip>
                  {`${item.name} (${item.rating}) - ${item.types.join(", ")}`}
                </Tooltip>
              </Marker>
            ))
          }
        </MarkerClusterGroup>
      </MapContainer>
    </Page>
  )
}

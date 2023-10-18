import * as React from "react";

import { Icon, LatLngExpression } from "leaflet";
import { MapContainer, Marker, TileLayer, Tooltip, useMap } from "react-leaflet";
import MarkerClusterGroup from 'react-leaflet-cluster';
import 'leaflet/dist/leaflet.css'
import { useLocation, useHistory } from "react-router-dom";
import { Button, Flex, Modal, ModalVariant } from "@patternfly/react-core";

import { Page } from "@app/components/Page";
import { FoodMarker } from "@app/FoodMap/FoodMarker";
import { restaurantData } from "@app/FoodMap/data/Restaurants";
import { FiltersModal } from "@app/FoodMap/FiltersModal";
import pin from '@app/images/pin.svg';

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

export interface RestaurantFilter {
  name?: string;
  types?: string[];
  minimumRating?: number;
  location?: string;
}

const mapCenterSmallScreen: LatLngExpression = [45.792529586011504, -8.99721104344336];
const mapCenterLargeScreen: LatLngExpression = [45.85377838427736, 1.549663550068369];
const mapCenter: LatLngExpression = window.innerWidth < 768 ? mapCenterSmallScreen : mapCenterLargeScreen;

const baseUrl = "/foodmap"

const useQuery = () => {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export const FoodMap: React.FunctionComponent = () => {
  const [isItemModalOpen, setIsItemModalOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState<Restaurant | undefined>(undefined);

  const history = useHistory();
  const query = useQuery();

  React.useEffect(() => {
    const restaurantKey = query.get("restaurant");
    const initialRestaurant = restaurantData.find(item => item.key === restaurantKey);

    setSelectedItem(initialRestaurant);
    setIsItemModalOpen(initialRestaurant !== undefined);
  }, [query])

  const [isFilterModalOpen, setIsFilterModalOpen] = React.useState(false);
  const [restaurantFilters, setRestaurantFilters] = React.useState<RestaurantFilter>({})

  const markerIcon = new Icon({
    iconUrl:  pin,
    iconSize: [40, 40],
  });

  const handleFilterModalToggle = () => {
    setIsFilterModalOpen(!isFilterModalOpen);
  }

  const matchesName = (item: Restaurant): boolean => {
    if (restaurantFilters.name === undefined || restaurantFilters.name.length === 0) {
      return true;
    }

    return item.name.toUpperCase().includes(restaurantFilters.name.toUpperCase());
  }

  const matchesType = (item: Restaurant): boolean => {
    if (restaurantFilters.types === undefined || restaurantFilters.types.length === 0) {
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
    if (restaurantFilters.location === undefined || restaurantFilters.location.length === 0) {
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
    return matchesName(item) && matchesType(item) && matchesLocation(item);
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
          map.setView(mapCenter, 5);
        }}>
          Reset
        </Button>
      </Flex>
    )
  }

  const handleItemModalToggle = () => {
    history.push(baseUrl);
  };

  return (
    <Page title="Food Map">
      <Modal
        isOpen={isItemModalOpen}
        onClose={handleItemModalToggle}
        variant={ModalVariant.medium}
        showClose={false}
      >
        <FoodMarker item={selectedItem} onClose={handleItemModalToggle} />
      </Modal>

      <MapContainer
        center={mapCenter}
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
                  click: () => {
                    history.push(`${baseUrl}?restaurant=${item.key}`);
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

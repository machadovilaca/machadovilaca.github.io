import * as React from "react";
import { Page } from "@app/components/Page";
import { Bullseye, Button, Card, CardBody, CardTitle, Slider } from "@patternfly/react-core";
import { AngleLeftIcon, AngleRightIcon, StarHalfIcon, StarIcon } from "@patternfly/react-icons";
import { TextLink } from "@app/components/TextLink";
import { Icon } from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer, Tooltip } from "react-leaflet";
import MarkerClusterGroup from 'react-leaflet-cluster';
import { restaurantData } from "@app/FoodMap/data/Restaurants";

import pin from '@app/images/pin.svg';
import 'leaflet/dist/leaflet.css'

export interface Restaurant {
  name: string;
  types: string[];
  address: string;
  website: string;
  rating: number;
  position: [number, number];
  images: string[];
}

const FoodMarker: ({ item }: { item: Restaurant }) => JSX.Element = ({ item }) => {
  const [index, setIndex] = React.useState(1);

  const onChange = (value: number) => {
    setIndex(value);
  }

  const onMinusClick = () => {
    const newValue = index - 1;
    if (newValue >= 1) {
      setIndex(newValue);
    }
  };

  const onPlusClick = () => {
    const newValue = index + 1;
    if (newValue <= item.images.length) {
      setIndex(newValue);
    }
  };

  const stars: JSX.Element[] = [];
  let i = 0;
  for (; i+1 <= item.rating; i++) {
    stars.push(<StarIcon key={i} style={{ color: "#f0ab00" }} />);
  }
  if (item.rating - i >= 0.5) {
    stars.push(<StarHalfIcon key={i} style={{ color: "#f0ab00" }} />);
  }

  const content =
    <Card isPlain style={{ maxHeight: "70vh", maxWidth: "50vw", overflow: "auto" }}>
      <CardTitle style={{ color: "black" }}>
        {item.name}
        <p style={{ fontWeight: 100, fontSize: "small", }}>
          {item.types.join(", ")}
        </p>
      </CardTitle>

      <CardBody style={{ color: "black" }}>
        <TextLink text="Website" href={item.website} />

        <p>{item.rating} {stars}</p>

        <p>{item.address}</p>

        <Bullseye>
          <img
            alt={item.name}
            src={item.images[index-1]}
            className={"pf-u-my-md"}
            style={{ height: '200px', width: '200px', padding: 'auto' }}
          />
        </Bullseye>
        <Slider
          value={index}
          onChange={onChange}
          min={1}
          max={item.images.length}
          leftActions={
            <Button variant="plain" aria-label="Minus" onClick={onMinusClick}>
              <AngleLeftIcon />
            </Button>
          }
          rightActions={
            <Button variant="plain" aria-label="Plus" onClick={onPlusClick}>
              <AngleRightIcon />
            </Button>
          }
        />
      </CardBody>
    </Card>

  return (
    <>
      <Popup>
        {content}
      </Popup>
      <Tooltip>
        {`${item.name} (${item.rating}) - ${item.types.join(", ")}`}
      </Tooltip>
    </>
  )
}

export const FoodMap: React.FunctionComponent = () => {
  const markerIcon = new Icon({
    iconUrl:  pin,
    iconSize: [40, 40],
  });

  return (
    <Page title="Food Map">
      <MapContainer
        center={[49.6133127050156, 6.116811722034303]}
        zoom={5}
        scrollWheelZoom={true}
        style={{height: "1000px", maxHeight: "80vh"}}
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
          {
            restaurantData.map((item, index) => (
              <Marker key={index} position={item.position} icon={markerIcon}>
                <FoodMarker item={item} />
              </Marker>
            ))
          }
        </MarkerClusterGroup>
      </MapContainer>
    </Page>
  )
}

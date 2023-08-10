import * as React from "react";
import { AngleLeftIcon, AngleRightIcon, StarHalfIcon, StarIcon } from "@patternfly/react-icons";
import { Bullseye, Button, Card, CardBody, CardTitle, Skeleton, Slider } from "@patternfly/react-core";
import { TextLink } from "@app/components/TextLink";
import { Restaurant } from "@app/FoodMap/FoodMap";

export const FoodMarker: ({ item }: { item: Restaurant | undefined }) => JSX.Element = ({ item }) => {
  return (
    <>
      {
        item === undefined ? <Skeleton screenreaderText="Loading contents" /> :
        <FoodMarkerContent item={item} />
      }
    </>
  )
}

const FoodMarkerContent: ({ item }: { item: Restaurant }) => JSX.Element = ({ item }) => {
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

  return (
    <Card isPlain>
      <CardTitle style={{ color: "black" }}>
        {item.name}
        <p style={{ fontWeight: 100, fontSize: "small", }}>
          {item.types.join(", ")}
        </p>
      </CardTitle>

      <CardBody style={{ color: "black" }}>
        <TextLink text="Website" href={item.website} />

        <p>{item.rating} {stars}</p>

        <p>{item.address.street}, {item.address.city}, {item.address.country}</p>

        <Bullseye>
          <img
            alt={item.name}
            src={item.images[index-1]}
            className={"pf-v5-u-my-md"}
            style={{ maxWidth: "100%", maxHeight: "500px" }}
          />
        </Bullseye>
        <Slider
          value={index}
          onChange={(e, value) => onChange(value)}
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
  )
}

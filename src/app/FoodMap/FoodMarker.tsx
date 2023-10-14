import * as React from "react";
import {
  AngleLeftIcon,
  AngleRightIcon,
  StarHalfIcon,
  StarIcon,
  EllipsisVIcon, CloseIcon, CheckIcon
} from "@patternfly/react-icons";
import {
  Bullseye,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Dropdown,
  DropdownItem,
  DropdownList,
  MenuToggle,
  MenuToggleElement,
  Skeleton,
  Slider
} from "@patternfly/react-core";

import { TextLink } from "@app/components/TextLink";
import { Restaurant } from "@app/FoodMap/FoodMap";

interface FoodMarkerProps {
  item: Restaurant | undefined;
  onClose: () => void;
}

export function FoodMarker({ item, onClose }: FoodMarkerProps) {
  return (
    <>
      {
        item === undefined ? <Skeleton screenreaderText="Loading contents" /> :
        <FoodMarkerContent item={item} onClose={onClose} />
      }
    </>
  )
}

interface FoodMarkerContentProps {
  item: Restaurant;
  onClose: () => void;
}

export function FoodMarkerContent({ item, onClose }: FoodMarkerContentProps) {
  const [index, setIndex] = React.useState(1);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [urlCopied, setUrlCopied] = React.useState(false);

  const onSelect = () => {
    setIsOpen(!isOpen);
  };

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

  const dropdownItems = (
    <>
      <DropdownItem key="website" onClick={() => {window.open(item.website, '_blank');}}>
        Open website
      </DropdownItem>
      <DropdownItem key="share" onClick={() => {
        navigator.clipboard.writeText(window.location.href).then(() => {
          setUrlCopied(true);
          setTimeout(() => setUrlCopied(false), 1000);
        })
        setIsOpen(true);
      }}>
        Copy link {urlCopied ? <CheckIcon /> : ""}
      </DropdownItem>
    </>
  );

  const headerActions = (
    <>
      <Dropdown
        onSelect={onSelect}
        toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
          <MenuToggle ref={toggleRef} isExpanded={isOpen} onClick={() => setIsOpen(!isOpen)} variant="plain">
            <EllipsisVIcon aria-hidden="true" />
          </MenuToggle>
        )}
        isOpen={isOpen}
        onOpenChange={(isOpen: boolean) => setIsOpen(isOpen)}
        popperProps={{ position: 'right' }}
      >
        <DropdownList>{dropdownItems}</DropdownList>
      </Dropdown>
      <CloseIcon style={{ cursor: 'pointer' }} onClick={() => onClose()} />
    </>
  );

  return (
    <Card isPlain>
      <CardHeader actions={{ actions: headerActions, hasNoOffset: true }}>
        <CardTitle style={{ color: "black" }}>
          {item.name}
          <p style={{ fontWeight: 100, fontSize: "small", }}>
            {item.types.join(", ")}
          </p>
        </CardTitle>
      </CardHeader>

      <CardBody style={{ color: "black" }}>
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

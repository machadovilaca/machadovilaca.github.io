import {
  Button,
  Form,
  FormGroup,
  Modal,
  ModalVariant
} from "@patternfly/react-core";
import * as React from "react";
import { RestaurantFilter } from "@app/FoodMap/FoodMap";
import { AutocompleteInput } from "@app/components/AutocompleteInput";
import { restaurantData } from "@app/FoodMap/data/Restaurants";
import { AutocompleteSelect } from "@app/components/AutocompleteSelect";

interface FiltersModalProps {
  isOpen: boolean;
  handleToggle: () => void;
  restaurantFilters: RestaurantFilter;
  setRestaurantFilters: (filters: RestaurantFilter) => void;
}

export const FiltersModal: React.FunctionComponent<FiltersModalProps> = (
  {
    isOpen,
    handleToggle,
    restaurantFilters,
    setRestaurantFilters
  }) => {

  const clearFilters = () => {
    setRestaurantFilters({});
  }

  const handleNameChange = (name: string) => {
    setRestaurantFilters({
      ...restaurantFilters,
      name
    });
  }

  const handleLocationChange = (location: string) => {
    setRestaurantFilters({
      ...restaurantFilters,
      location
    });
  }

  const handleTypeChange = (types: string[]) => {
    setRestaurantFilters({
      ...restaurantFilters,
      types
    });
  }

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  const getNameSuggestions = (): string[] => {
    const suggestions = new Set<string>()

    restaurantData.map((r) => {
      suggestions.add(r.name);
    })

    const r = Array.from(suggestions)
    shuffle(r)
    return r
  }

  const getLocationSuggestions = (): string[] => {
    const suggestions = new Set<string>()

    restaurantData.map((r) => {
      suggestions.add(r.address.city);
      suggestions.add(r.address.country);
    })

    const r = Array.from(suggestions)
    shuffle(r)
    return r
  }

  const getTypeSuggestions = (): string[] => {
    const suggestions = new Set<string>()

    restaurantData.map((r) => {
      r.types.map((t) => {
        if (restaurantFilters.types === undefined || !restaurantFilters.types.includes(t)) {
          suggestions.add(t);
        }
      })
    })

    const r = Array.from(suggestions)
    shuffle(r)
    return r
  }

  return (
    <Modal
      variant={ModalVariant.small}
      title="Filters"
      isOpen={isOpen}
      onClose={handleToggle}
      onEscapePress={(e) => {e.preventDefault()}}
      actions={[
        <Button key="filter" variant="primary" form="modal-with-form-form" onClick={handleToggle}>
          Confirm
        </Button>,
        <Button key="clear" variant="link" onClick={clearFilters}>
          Clear
        </Button>
      ]}
    >
      <Form>
        <FormGroup
          label="Location"
        >
          <AutocompleteInput
            value={restaurantFilters.name}
            suggestions={getNameSuggestions()}
            onChange={handleNameChange}
            placeholder={"Search by name"}
          />
        </FormGroup>

        <FormGroup
          label="Location"
        >
          <AutocompleteInput
            value={restaurantFilters.location}
            suggestions={getLocationSuggestions()}
            onChange={handleLocationChange}
            placeholder={"Search by address, city or country"}
          />
        </FormGroup>
        <FormGroup
          label="Type"
        >
          <AutocompleteSelect
            values={restaurantFilters.types}
            suggestions={getTypeSuggestions()}
            onChange={handleTypeChange}
            placeholder={"Search by type"}
          />
        </FormGroup>
      </Form>
    </Modal>
  )
}

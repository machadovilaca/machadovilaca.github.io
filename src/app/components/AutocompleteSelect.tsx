import * as React from "react";
import { LegacyRef } from "react";
import {
  Button,
  Chip,
  ChipGroup,
  Divider,
  Menu,
  MenuContent,
  MenuItem,
  MenuList,
  Popper,
  TextInputGroup,
  TextInputGroupMain, TextInputGroupUtilities
} from "@patternfly/react-core";
import { TimesIcon } from "@patternfly/react-icons";

interface AutocompleteSelectProps {
  values?: string[];
  suggestions: string[];
  onChange: (values: string[]) => void;
  placeholder?: string;
}

export const AutocompleteSelect: React.FunctionComponent<AutocompleteSelectProps> = (
  {
    values,
    suggestions,
    onChange,
    placeholder
  }) => {
  const [inputValue, setInputValue] = React.useState('');
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);
  const [hint, setHint] = React.useState('');

  const [menuItems, setMenuItems] = React.useState<React.ReactElement[]>([]);

  const menuRef = React.useRef<HTMLDivElement>();
  const textInputGroupRef = React.useRef<HTMLDivElement>();

  const handleInputChange = (_event: React.FormEvent<HTMLInputElement>, value: string) => {
    setInputValue(value);
  };

  const deleteChip = (chipToDelete: string) => {
    if (!values) {
      return;
    }

    const newChips = values.filter((chip) => !Object.is(chip, chipToDelete));
    onChange(newChips);
  };

  const clearChipsAndInput = () => {
    onChange([]);
    setInputValue('');
  };

  React.useEffect(() => {
    /** in the menu only show items that include the text in the input */
    const filteredMenuItems = suggestions
      .filter((item) => !inputValue || item.toLowerCase().includes(inputValue.toString().toLowerCase()))
      .slice(0, 5)
      .map((currentValue, index) => (
        <MenuItem key={currentValue} itemId={index}>
          {currentValue}
        </MenuItem>
      ));

    /** in the menu show a disabled "no result" when all menu items are filtered out */
    if (filteredMenuItems.length === 0) {
      const noResultItem = (
        <MenuItem isDisabled key="no result">
          No results found
        </MenuItem>
      );
      setMenuItems([noResultItem]);
      setHint('');
      return;
    }

    /** The hint is set whenever there is only one autocomplete option left. */
    if (filteredMenuItems.length === 1) {
      const hint = filteredMenuItems[0].props.children;
      if (hint.toLowerCase().indexOf(inputValue.toLowerCase())) {
        // the match was found in a place other than the start, so typeahead wouldn't work right
        setHint('');
      } else {
        // use the input for the first part, otherwise case difference could make things look wrong
        setHint(inputValue + hint.substr(inputValue.length));
      }
    } else {
      setHint('');
    }

    const headingItem = (
      <MenuItem isDisabled key="heading">
        Suggestions
      </MenuItem>
    );

    const divider = <Divider key="divider" />;

    setMenuItems([headingItem, divider, ...filteredMenuItems]);
  }, [inputValue, suggestions]);

  const addChip = (newChipText: string) => {
    const newValues = new Set(values);
    newValues.add(newChipText);
    onChange(Array.from(newValues));
    setInputValue('');
  };

  const handleEnter = () => {
    if (inputValue.length) {
      addChip(inputValue);
    }
  };

  const handleTab = () => {
    if (menuItems.length === 3) {
      setInputValue(menuItems[2].props.children);
    }
    setMenuIsOpen(false);
  };

  const handleEscape = () => {
    setMenuIsOpen(false);
  };

  const handleArrowKey = () => {
    if (menuRef.current) {
      const firstElement = menuRef.current.querySelector<HTMLButtonElement>('li > button:not(:disabled)');
      firstElement && firstElement.focus();
    }
  };

  const handleDefault = () => {
    if (!menuIsOpen) {
      setMenuIsOpen(true);
    }
  };

  const handleTextInputKeyDown = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case 'Enter':
        handleEnter();
        break;
      case 'Escape':
        handleEscape();
        break;
      case 'Tab':
        handleTab();
        break;
      case 'ArrowUp':
      case 'ArrowDown':
        handleArrowKey();
        break;
      default:
        handleDefault();
    }
  };

  const focusTextInput = () => {
    textInputGroupRef.current?.querySelector('input')?.focus();
  };

  const onSelect = (event?: React.MouseEvent<Element, MouseEvent>) => {
    if (!event) {
      return;
    }

    const selectedText = (event.target as HTMLElement).innerText;
    addChip(selectedText);
    event.stopPropagation();
    focusTextInput();
  };

  const handleClick = (event?: MouseEvent) => {
    if (
      event &&
      menuRef.current && textInputGroupRef.current &&
      !menuRef.current.contains(event.target as HTMLElement) &&
      !textInputGroupRef.current.contains(event.target as HTMLElement)
    ) {
      setMenuIsOpen(false);
    }
  };

  const showClearButton = !!inputValue || (values && !!values.length);

  const handleMenuKeyDown = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case 'Tab':
      case 'Escape':
        event.preventDefault();
        focusTextInput();
        setMenuIsOpen(false);
        break;
      case 'Enter':
      case ' ':
        setTimeout(() => setMenuIsOpen(false), 0);
        break;
    }
  };

  const inputGroup = (
    <div ref={textInputGroupRef as LegacyRef<HTMLDivElement>}>
      <TextInputGroup>
        <ChipGroup style={{ paddingLeft: '10px' }}>
          {
            values &&
            values.map((currentChip) => (
              <Chip key={currentChip} onClick={() => deleteChip(currentChip)}>
                {currentChip}
              </Chip>
            ))
          }
        </ChipGroup>
        <TextInputGroupMain
          value={inputValue}
          hint={hint}
          onChange={handleInputChange}
          onFocus={() => setMenuIsOpen(true)}
          onKeyDown={handleTextInputKeyDown}
          placeholder={(values && !!values.length) ? '' : placeholder}
          aria-label="input"
          style={{ paddingLeft: (values && !!values.length) ? '10px' : '0' }}
        />
        {showClearButton && (
          <TextInputGroupUtilities>
            <Button variant="plain" onClick={clearChipsAndInput} aria-label="Clear button for chips and input">
              <TimesIcon />
            </Button>
          </TextInputGroupUtilities>
        )}
      </TextInputGroup>
    </div>
  );

  const menu = (
    <div ref={menuRef as LegacyRef<HTMLDivElement>}>
      <Menu onSelect={onSelect} onKeyDown={handleMenuKeyDown}>
        <MenuContent>
          <MenuList>{menuItems}</MenuList>
        </MenuContent>
      </Menu>
    </div>
  );

  return (
    <>
      {inputGroup}
      <Popper
        reference={textInputGroupRef}
        popper={menu}
        popperRef={menuRef}
        appendTo={textInputGroupRef.current}
        isVisible={menuIsOpen}
        onDocumentClick={handleClick}
      />
    </>
  );
}

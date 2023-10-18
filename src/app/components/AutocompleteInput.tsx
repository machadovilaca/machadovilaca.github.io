import * as React from "react";
import { LegacyRef } from "react";
import {
  Divider,
  Menu,
  MenuContent,
  MenuItem,
  MenuList,
  Popper,
  TextInputGroup,
  TextInputGroupMain,
} from "@patternfly/react-core";

interface AutocompleteInputProps {
  value?: string;
  suggestions: string[];
  onChange: (string) => void;
  placeholder?: string;
}

export const AutocompleteInput: React.FunctionComponent<AutocompleteInputProps> = (
  {
    value,
    suggestions,
    onChange,
    placeholder
  }) => {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);
  const [hint, setHint] = React.useState('');

  const [menuItems, setMenuItems] = React.useState<React.ReactElement[]>([]);

  const menuRef = React.useRef<HTMLDivElement>();
  const textInputGroupRef = React.useRef<HTMLDivElement>();

  const setInputValue = (value) => {
    onChange(value);
  }

  const handleInputChange = (_event: React.FormEvent<HTMLInputElement>, value: string) => {
    setInputValue(value);
  };

  React.useEffect(() => {
    const filteredMenuItems = suggestions
      .filter((item) => !value || item.toLowerCase().includes(value.toString().toLowerCase()))
      .slice(0, 5)
      .map((currentValue, index) => (
        <MenuItem key={currentValue} itemId={index}>
          {currentValue}
        </MenuItem>
      ));

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

    if (value !== undefined && filteredMenuItems.length === 1) {
      const hint = filteredMenuItems[0].props.children;
      if (hint.toLowerCase().indexOf(value.toLowerCase())) {
        // the match was found in a place other than the start, so typeahead wouldn't work right
        setHint('');
      } else {
        // use the input for the first part, otherwise case difference could make things look wrong
        setHint(value + hint.substr(value.length));
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
  }, [value, suggestions]);

  const handleChange = () => {
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
        handleChange();
        break;
      case 'Escape':
        handleEscape();
        break;
      case 'Tab':
        handleChange();
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
    if (event === undefined) {
      return
    }
    const selectedText = (event.target as HTMLElement).innerText;
    setInputValue(selectedText);
    event.stopPropagation();
    focusTextInput();
    setMenuIsOpen(false);
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
        <TextInputGroupMain
          value={value}
          hint={hint}
          onChange={handleInputChange}
          onFocus={(event) => {
            event.target.setAttribute('autoComplete', 'none');
            setMenuIsOpen(true);
          }}
          onKeyDown={handleTextInputKeyDown}
          placeholder={placeholder}
          aria-label="input"

        />
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
        triggerRef={textInputGroupRef}
        popper={menu}
        popperRef={menuRef}
        appendTo={textInputGroupRef.current}
        isVisible={menuIsOpen}
        onDocumentClick={handleClick}
      />
    </>
  );
}

import React from 'react';
import PropTypes from 'prop-types';
import { Input } from '@edx/paragon';
import debounce from 'lodash.debounce';
import FacetDropdown from './FacetDropdown';

const TypeaheadFacetDropdown = ({
  title,
  items,
  isBold,
  options,
  searchForItems,
}) => {
  const handleSearch = debounce((value) => {
    // when user is erasing the input and input is empty we need to reset the filtering
    if (value.length >= options.minLength || value.length === 0) {
      searchForItems(value);
    }
  }, 200);

  const transformMenuOptions = menuOptions => (
    <>
      <Input
        autoFocus
        type="search"
        className="typeahead-dropdown-input"
        placeholder={options.placeholder}
        aria-label={options.ariaLabel}
        onChange={(event) => handleSearch(event.currentTarget.value)}
      />
      <div className="typeahead-dropdown-menu-scrollable-items">
        {menuOptions}
      </div>
    </>
  );

  return (
    <FacetDropdown
      items={transformMenuOptions(items)}
      title={title}
      isBold={isBold}
      type="typeahead"
    />
  );
};

TypeaheadFacetDropdown.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  isBold: PropTypes.bool.isRequired,
  options: PropTypes.shape({
    placeholder: PropTypes.string.isRequired,
    ariaLabel: PropTypes.string.isRequired,
    minLength: PropTypes.number.isRequired,
  }).isRequired,
  searchForItems: PropTypes.func.isRequired,
};

export default TypeaheadFacetDropdown;

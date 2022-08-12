/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useContext } from 'react';
import PropTypes from 'prop-types';

import { NO_OPTIONS_FOUND, STYLE_VARIANTS } from './data/constants';
import FacetDropdown from './FacetDropdown';
import TypeaheadFacetDropdown from './TypeaheadFacetDropdown';
import FacetItem from './FacetItem';
import { SearchContext } from './SearchContext';
import {
  addToRefinementArray, setRefinementAction, deleteRefinementAction, removeFromRefinementArray,
} from './data/actions';

function FacetListBase({
  attribute,
  facetValueType,
  isBold,
  isCheckedField,
  items,
  title,
  typeaheadOptions,
  searchForItems,
  variant,
  noDisplay,
  doRefinement,
  customAttribute,
  showBadge,
}) {
  const { refinements, dispatch } = useContext(SearchContext);

  /**
   * Handles when a facet option is toggled by either adding it to the refinements
   * reducer for the facet attribute, or removes the facet attribute if there is no
   * longer any selected options for that particular facet attribute.
   */
  const handleInputOnChange = (item) => {
    // if it is desired to load the same attribute data in multiple dropdowns then
    // customAttribute can be passed to differentiate them.
    const index = customAttribute || attribute;
    if (item.value && facetValueType === 'array') {
      if (item.value.length > 0) {
        if (refinements[index]?.includes(item.label)) {
          dispatch(removeFromRefinementArray(index, item.label));
        } else {
          dispatch(addToRefinementArray(index, item.label));
        }
      } else {
        dispatch(deleteRefinementAction(index));
      }
    } else if (facetValueType === 'bool') {
      // eslint-disable-next-line no-bitwise
      dispatch(setRefinementAction(index, refinements[index] ^ 1));
    } else if (facetValueType === 'single-item') {
      if (refinements[index]?.includes(item.label)) {
        dispatch(deleteRefinementAction(index, item.label));
      } else {
        dispatch(setRefinementAction(index, [item.label]));
      }
    }
  };

  const renderItems = useCallback(
    () => {
      if (!items?.length) {
        return <span className="p-2 d-block">{NO_OPTIONS_FOUND}</span>;
      }

      return items.map((item) => {
        let isChecked;
        if (doRefinement) {
          isChecked = isCheckedField ? item[isCheckedField] : !!item.value;
        } else {
          const index = customAttribute || attribute;
          isChecked = refinements[index]?.includes(item.label);
        }
        return (
          <FacetItem
            key={item.label}
            handleInputOnChange={handleInputOnChange}
            item={item}
            isChecked={isChecked}
            variant={variant}
            showBadge={showBadge}
          />
        );
      });
    },
    [items],
  );

  if (noDisplay) {
    return null;
  }

  if (typeaheadOptions) {
    return (
      <TypeaheadFacetDropdown
        items={renderItems()}
        title={title}
        isBold={isBold}
        options={typeaheadOptions}
        searchForItems={searchForItems}
        variant={variant}
      />
    );
  }

  return (
    <FacetDropdown
      items={renderItems()}
      title={title}
      isBold={isBold}
      variant={variant}
    />
  );
}

FacetListBase.defaultProps = {
  isCheckedField: null,
  typeaheadOptions: null,
  customAttribute: null,
  searchForItems: null,
  variant: STYLE_VARIANTS.inverse,
  noDisplay: false,
  doRefinement: true,
  showBadge: true,
};

FacetListBase.propTypes = {
  attribute: PropTypes.string.isRequired,
  facetValueType: PropTypes.oneOf(['array', 'bool', 'single-item']).isRequired,
  isBold: PropTypes.bool.isRequired,
  isCheckedField: PropTypes.string,
  customAttribute: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  title: PropTypes.string.isRequired,
  typeaheadOptions: PropTypes.shape({
    placeholder: PropTypes.string.isRequired,
    ariaLabel: PropTypes.string.isRequired,
    minLength: PropTypes.number.isRequired,
  }),
  searchForItems: PropTypes.func,
  variant: PropTypes.oneOf([STYLE_VARIANTS.default, STYLE_VARIANTS.inverse]),
  noDisplay: PropTypes.bool,
  doRefinement: PropTypes.bool,
  showBadge: PropTypes.bool,
};

export default FacetListBase;

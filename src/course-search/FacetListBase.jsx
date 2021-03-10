import React, { useCallback, useContext } from 'react';
import PropTypes from 'prop-types';

import { NO_OPTIONS_FOUND } from './data/constants';
import FacetDropdown from './FacetDropdown';
import TypeaheadFacetDropdown from './TypeaheadFacetDropdown';
import FacetItem from './FacetItem';
import { SearchContext } from './SearchContext';
import {
  addToRefinementArray, setRefinementAction, deleteRefinementAction, removeFromRefinementArray,
} from './data/actions';

const FacetListBase = ({
  attribute,
  facetValueType,
  isBold,
  isCheckedField,
  items,
  title,
  typeaheadOptions,
  searchForItems,
}) => {
  /**
   * Handles when a facet option is toggled by either updating the appropriate
   * query parameter for the facet attribute, or removes the facet attribute if
   * there's no longer any selected options for that facet attribute.
   */

  const { refinementsFromQueryParams, dispatch } = useContext(SearchContext);

  const handleInputOnChange = (item) => {
    if (item.value && facetValueType === 'array') {
      if (item.value.length > 0) {
        if (refinementsFromQueryParams[attribute]?.includes(item.label)) {
          dispatch(removeFromRefinementArray(attribute, item.label));
        } else {
          dispatch(addToRefinementArray(attribute, item.label));
        }
      } else {
        dispatch(deleteRefinementAction(attribute));
      }
    } else if (facetValueType === 'bool') {
      // eslint-disable-next-line no-bitwise
      dispatch(setRefinementAction(attribute, refinementsFromQueryParams[attribute] ^ 1));
    }
  };

  const renderItems = useCallback(
    () => {
      if (!items || !items.length) {
        return <span className="py-2 px-2 no-options-found">{NO_OPTIONS_FOUND}</span>;
      }

      return items.map(item => {
        const isChecked = isCheckedField ? item[isCheckedField] : !!item.value;

        return (
          <FacetItem
            key={item.label}
            handleInputOnChange={handleInputOnChange}
            item={item}
            isChecked={isChecked}
          />
        );
      });
    },
    [items],
  );

  if (typeaheadOptions) {
    return (
      <TypeaheadFacetDropdown
        items={renderItems()}
        title={title}
        isBold={isBold}
        options={typeaheadOptions}
        searchForItems={searchForItems}
      />
    );
  }

  return (
    typeaheadOptions ? (
      <TypeaheadFacetDropdown
        items={renderItems()}
        title={title}
        isBold={isBold}
        options={typeaheadOptions}
        searchForItems={searchForItems}
      />
    ) : (
      <FacetDropdown
        items={renderItems()}
        title={title}
        isBold={isBold}
      />
    )
  );
};

FacetListBase.defaultProps = {
  isCheckedField: null,
  typeaheadOptions: null,
  searchForItems: null,
};

FacetListBase.propTypes = {
  attribute: PropTypes.string.isRequired,
  facetValueType: PropTypes.oneOf(['array', 'bool']).isRequired,
  isBold: PropTypes.bool.isRequired,
  isCheckedField: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  title: PropTypes.string.isRequired,
  typeaheadOptions: PropTypes.shape({
    placeholder: PropTypes.string.isRequired,
    ariaLabel: PropTypes.string.isRequired,
    minLength: PropTypes.number.isRequired,
  }),
  searchForItems: PropTypes.func,
};

export default FacetListBase;

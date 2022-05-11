import React, { useMemo, useContext } from 'react';
import PropTypes from 'prop-types';
import { breakpoints, useWindowSize } from '@edx/paragon';

import FacetListRefinement from './FacetListRefinement';
import FacetListBase from './FacetListBase';
import CurrentRefinements from './CurrentRefinements';

import MobileFilterMenu from './MobileFilterMenu';

import { SHOW_ALL_NAME, STYLE_VARIANTS } from './data/constants';
import { sortItemsByLabelAsc } from './data/utils';

import { SearchContext } from './SearchContext';
import { features } from './config';
import LearningTypeRadioFacet from './LearningTypeRadioFacet';

export const FREE_ALL_TITLE = 'Free / All';

const SearchFilters = ({ variant }) => {
  const size = useWindowSize();
  const { refinements, searchFacetFilters } = useContext(SearchContext);
  const showMobileMenu = useMemo(
    () => size.width < breakpoints.large.maxWidth,
    [JSON.stringify(size)],
  );
  const freeAllItems = useMemo(() => [
    {
      label: 'Free to me',
      // flip the 1 to 0 or vice versa using boolean logic
      // eslint-disable-next-line no-bitwise
      value: refinements[SHOW_ALL_NAME] ^ 1,
    },
    {
      label: 'All courses',
      value: refinements[SHOW_ALL_NAME],
    },
  ], [refinements[SHOW_ALL_NAME]]);

  const searchFacets = useMemo(
    () => {
      const filtersFromRefinements = searchFacetFilters.map(({
        title, attribute, isSortedAlphabetical, typeaheadOptions, noDisplay,
      }) => (
        <FacetListRefinement
          key={attribute}
          title={title}
          attribute={attribute}
          limit={300} // this is replicating the B2C search experience
          transformItems={(items) => {
            if (isSortedAlphabetical) {
              return sortItemsByLabelAsc(items);
            }
            return items;
          }}
          refinements={refinements}
          defaultRefinement={refinements[attribute]}
          facetValueType="array"
          typeaheadOptions={typeaheadOptions}
          searchable={!!typeaheadOptions}
          variant={variant}
          noDisplay={noDisplay}
        />
      ));
      return (
        <>
          {features.ENROLL_WITH_CODES && (
            <FacetListBase
              attribute={SHOW_ALL_NAME}
              facetValueType="bool"
              isBold
              items={freeAllItems}
              key={SHOW_ALL_NAME}
              title={FREE_ALL_TITLE}
              variant={variant}
            />
          )}
          {filtersFromRefinements}
          {features.LEARNING_TYPE_FACET && (<LearningTypeRadioFacet />)}
        </>
      );
    },
    [JSON.stringify(refinements)],
  );

  return (
    <>
      {showMobileMenu ? (
        <MobileFilterMenu className="mb-3">
          {searchFacets}
        </MobileFilterMenu>
      ) : (
        <>
          <div className="d-flex">
            {searchFacets}
          </div>
          <CurrentRefinements variant={variant} />
        </>
      )}
    </>
  );
};

SearchFilters.defaultProps = {
  variant: STYLE_VARIANTS.inverse,
};

SearchFilters.propTypes = {
  variant: PropTypes.oneOf([STYLE_VARIANTS.default, STYLE_VARIANTS.inverse]),
};

export default SearchFilters;

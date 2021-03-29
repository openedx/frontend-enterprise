import React, { useMemo, useContext } from 'react';
import PropTypes from 'prop-types';
import { breakpoints } from '@edx/paragon';

import FacetListRefinement from './FacetListRefinement';
import FacetListBase from './FacetListBase';
import CurrentRefinements from './CurrentRefinements';

import MobileFilterMenu from './MobileFilterMenu';

import {
  SHOW_ALL_NAME,
} from './data/constants';
import { sortItemsByLabelAsc } from './data/utils';

import { useWindowSize } from '../hooks';
import { SearchContext } from './SearchContext';
import { features } from './config';
import { STYLE_VARIANTS } from '../constants';

export const FREE_ALL_TITLE = 'Free / All';

const SearchFilters = ({ variant }) => {
  const size = useWindowSize();
  const { refinementsFromQueryParams, searchFacetFilters } = useContext(SearchContext);
  const showMobileMenu = useMemo(
    () => size.width < breakpoints.small.maxWidth,
    [size],
  );
  const freeAllItems = useMemo(() => [
    {
      label: 'Free to me',
      // flip the 1 to 0 or vice versa using boolean logic
      // eslint-disable-next-line no-bitwise
      value: refinementsFromQueryParams[SHOW_ALL_NAME] ^ 1,
    },
    {
      label: 'All courses',
      value: refinementsFromQueryParams[SHOW_ALL_NAME],
    },
  ], [refinementsFromQueryParams[SHOW_ALL_NAME]]);

  const searchFacets = useMemo(
    () => {
      const filtersFromRefinements = searchFacetFilters.map(({
        title, attribute, isSortedAlphabetical, typeaheadOptions,
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
          refinementsFromQueryParams={refinementsFromQueryParams}
          defaultRefinement={refinementsFromQueryParams[attribute]}
          facetValueType="array"
          typeaheadOptions={typeaheadOptions}
          searchable={!!typeaheadOptions}
          variant={variant}
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
        </>
      );
    },
    [refinementsFromQueryParams],
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
          <CurrentRefinements />
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

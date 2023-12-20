/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo, useContext } from 'react';
import PropTypes from 'prop-types';
import { breakpoints, MediaQuery } from '@edx/paragon';

import FacetListRefinement from './FacetListRefinement';
import CurrentRefinements from './CurrentRefinements';

import MobileFilterMenu from './MobileFilterMenu';

import { STYLE_VARIANTS } from './data/constants';
import { sortItemsByLabelAsc } from './data/utils';

import { SearchContext } from './SearchContext';
import { features } from './config';
import LearningTypeRadioFacet from './LearningTypeRadioFacet';

export const FREE_ALL_TITLE = 'Free / All';

const SearchFilters = ({ variant, enablePathways }) => {
  const { refinements, searchFacetFilters } = useContext(SearchContext);

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
          {filtersFromRefinements}
          {features.LEARNING_TYPE_FACET && (<LearningTypeRadioFacet enablePathways={enablePathways} />)}
        </>
      );
    },
    [JSON.stringify(refinements)],
  );

  return (
    <>
      <MediaQuery maxWidth={breakpoints.large.maxWidth}>
        <MobileFilterMenu className="mb-3">
          {searchFacets}
        </MobileFilterMenu>
      </MediaQuery>
      <MediaQuery minWidth={breakpoints.extraLarge.minWidth}>
        <>
          <div className="d-flex">
            {searchFacets}
          </div>
          <CurrentRefinements variant={variant} />
        </>
      </MediaQuery>
    </>
  );
};

SearchFilters.defaultProps = {
  variant: STYLE_VARIANTS.inverse,
  enablePathways: null,
};

SearchFilters.propTypes = {
  variant: PropTypes.oneOf([STYLE_VARIANTS.default, STYLE_VARIANTS.inverse]),
  enablePathways: PropTypes.bool,
};

export default SearchFilters;

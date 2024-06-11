/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  createContext, useReducer, useMemo, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import { useLocation, useNavigate } from 'react-router-dom';
import { useIsFirstRender } from '@edx/frontend-enterprise-utils';
import { useIntl } from '@edx/frontend-platform/i18n';

import {
  BOOLEAN_FILTERS,
  ADDITIONAL_FACET_FILTERS,
  URL_FILTERS,
} from './data/constants';
import { refinementsReducer } from './data/reducer';
import { setMultipleRefinementsAction } from './data/actions';
import { searchParamsToObject, stringifyRefinements } from './data/utils';
import { getSearchFacetFilters } from './utils';

export const SearchContext = createContext();

export const getRefinementsToSet = (queryParams, activeFacetAttributes) => {
  const refinementsToSet = {};
  Object.entries(queryParams).forEach(([key, value]) => {
    // Any additional facet filter to SEARCH_FACET_FILTERS who's data needs to be kept in an
    // array can live in ADDITIONAL_FACET_FILTERS.
    if (activeFacetAttributes.includes(key) || ADDITIONAL_FACET_FILTERS.includes(key) || URL_FILTERS.includes(key)) {
      const valueAsArray = Array.isArray(value) ? value : [value];
      refinementsToSet[key] = valueAsArray;
    } else if (BOOLEAN_FILTERS.includes(key)) {
      // convert a string into a number (this should be a 1 or 0)
      refinementsToSet[key] = +value;
    } else {
      refinementsToSet[key] = value;
    }
  });

  return refinementsToSet;
};

const SearchData = ({ children, searchFacetFilters, trackingName }) => {
  const [refinements, dispatch] = useReducer(
    refinementsReducer,
    {},
  );
  const intl = useIntl();
  const searchFilters = searchFacetFilters || getSearchFacetFilters(intl);

  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  /**
   * Applies initial URL query params on page load to the refinements
   * reducer to update search results. Note the empty dependency list
   * here is important; we only want to set the refinements reducer with
   * the initial query parameters, *not* any time the query parameters change.
   *
   * The URL query parameters will be kept in sync with any updates to the
   * reducer state below.
   */
  useEffect(() => {
    const initialQueryParams = searchParamsToObject(new URLSearchParams(search));
    const activeFacetAttributes = searchFilters.map(filter => filter.attribute);
    const refinementsToSet = getRefinementsToSet(initialQueryParams, activeFacetAttributes);
    dispatch(setMultipleRefinementsAction(refinementsToSet));
  }, []);

  const isFirstRender = useIsFirstRender();

  /**
   * Syncs the refinements reducer state with the URL query parameters.
   */
  useEffect(() => {
    if (!isFirstRender) {
      const newQueryString = stringifyRefinements(refinements);
      navigate({ pathname, search: newQueryString });
    }
  }, [JSON.stringify(refinements)]);

  const value = useMemo(
    () => ({
      refinements,
      dispatch,
      searchFacetFilters: searchFilters,
      trackingName,
    }),
    [JSON.stringify(refinements), dispatch, searchFilters, trackingName],
  );

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

SearchData.defaultProps = {
  searchFacetFilters: null,
  trackingName: null,
};

SearchData.propTypes = {
  children: PropTypes.node.isRequired,
  searchFacetFilters: PropTypes.arrayOf(PropTypes.shape({
    attribute: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    isSortedAlphabetical: PropTypes.bool,
  })),
  trackingName: PropTypes.string,
};

export default SearchData;

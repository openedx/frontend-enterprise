import React, {
  createContext, useReducer, useMemo, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import { useLocation, useHistory } from 'react-router-dom';
import { BOOLEAN_FILTERS, SEARCH_FACET_FILTERS } from './data/constants';
import { refinementsReducer } from './data/reducer';
import { setMultipleRefinementsAction } from './data/actions';
import { paramsToObject, stringifyRefinements, updateRefinementsFromQueryParams } from './data/utils';
import { useIsFirstRender } from '../hooks';

export const SearchContext = createContext();
export const getRefinementsToSet = (queryParams, activeFacetAttributes) => {
  const refinementsToSet = {};

  Object.entries(queryParams).forEach(([key, value]) => {
    if (activeFacetAttributes.includes(key)) {
      const valueAsArray = value.includes(',') ? value.split(',') : [value];
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

const SearchData = ({ children, searchFacetFilters }) => {
  const [refinementsFromQueryParams, dispatch] = useReducer(
    refinementsReducer,
    {},
  );

  const { search } = useLocation();
  const history = useHistory();

  const queryParams = useMemo(() => paramsToObject(new URLSearchParams(search)), [search]);
  useEffect(() => {
    const activeFacetAttributes = searchFacetFilters.map(filter => filter.attribute);
    const refinementsToSet = getRefinementsToSet(queryParams, activeFacetAttributes);
    dispatch(setMultipleRefinementsAction(refinementsToSet));
  }, [search]);

  const newQueryString = useMemo(() => {
    const refinementsWithJoinedLists = updateRefinementsFromQueryParams(refinementsFromQueryParams);
    return stringifyRefinements(refinementsWithJoinedLists);
  }, [refinementsFromQueryParams]);

  const isFirstRender = useIsFirstRender();

  useEffect(() => {
    if (!isFirstRender) {
      history.push({ search: newQueryString });
    }
  }, [newQueryString]);

  const value = useMemo(
    () => ({
      refinementsFromQueryParams,
      dispatch,
      searchFacetFilters,
    }),
    [refinementsFromQueryParams, dispatch, searchFacetFilters],
  );

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

SearchData.defaultProps = {
  searchFacetFilters: SEARCH_FACET_FILTERS,
};

SearchData.propTypes = {
  children: PropTypes.node.isRequired,
  searchFacetFilters: PropTypes.arrayOf(PropTypes.shape({
    attribute: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    isSortedAlphabetical: PropTypes.bool,
  })),
};

export default SearchData;

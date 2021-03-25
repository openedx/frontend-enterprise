import React, {
  createContext, useReducer, useMemo, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import { useLocation, useHistory } from 'react-router-dom';
import qs from 'query-string';
import { BOOLEAN_FILTERS, SEARCH_FACET_FILTERS } from './data/constants';
import { refinementsReducer } from './data/reducer';
import { setMultipleRefinementsAction } from './data/actions';
import { updateRefinementsFromQueryParams } from './data/utils';
import { useIsFirstRender } from '../hooks';

export const SearchContext = createContext();

const SearchData = ({ children, searchFacetFilters }) => {
  const [refinementsFromQueryParams, dispatch] = useReducer(
    refinementsReducer,
    {},
  );

  const { search } = useLocation();
  const history = useHistory();

  const queryParams = useMemo(() => qs.parse(search), [search]);

  useEffect(() => {
    const activeFacetAttributes = SEARCH_FACET_FILTERS.map(filter => filter.attribute);
    const keysToSet = {};
    Object.entries(queryParams).forEach(([key, value]) => {
      if (activeFacetAttributes.includes(key)) {
        const valueAsArray = value.includes(',') ? value.split(',') : [value];
        keysToSet[key] = valueAsArray;
      } else if (BOOLEAN_FILTERS.includes(key)) {
        // convert a string into a number (this should be a 1 or 0)
        keysToSet[key] = +value;
      } else {
        keysToSet[key] = value;
      }
    });
    dispatch(setMultipleRefinementsAction(keysToSet));
  }, [search]);

  const newQueryString = useMemo(() => {
    const refinementsWithJoinedLists = updateRefinementsFromQueryParams(refinementsFromQueryParams);
    return qs.stringify(refinementsWithJoinedLists);
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

/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  useContext,
  useEffect,
  useState,
  useCallback,
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SearchField } from '@edx/paragon';
import debounce from 'lodash.debounce';
import { connectSearchBox } from 'react-instantsearch-dom';

import { sendTrackEvent } from '@edx/frontend-platform/analytics';

import { deleteRefinementAction, setRefinementAction } from './data/actions';
import { useActiveElement } from './data/hooks';
import { SearchContext } from './SearchContext';
import {
  STYLE_VARIANTS,
  QUERY_PARAM_FOR_PAGE,
  QUERY_PARAM_FOR_SEARCH_QUERY,
  ALGOLIA_ATTRIBUTES_TO_RETRIEVE,
  SEARCH_BOX_CLASS_NAME,
  DEBOUNCE_TIME_MS,
} from './data/constants';
import SearchSuggestions from './SearchSuggestions';

export const searchText = 'Search courses';
// this prefix will be combined with one of the SearchBox props to create a full tracking event name
// only if event name prop is provided by user. In the absence of the tracking name prop,
// no tracking event will be sent.
export const SEARCH_EVENT_NAME_PREFIX = 'edx.enterprise';
export const QUERY_SUBMITTED_EVENT = 'catalog_search.query_submitted';

export const SearchBoxBase = ({
  className,
  defaultRefinement,
  variant,
  headerTitle,
  hideTitle,
  index,
  filters,
  enterpriseSlug,
  suggestionSubmitOverride,
  disableSuggestionRedirect,
  isPreQueryEnabled,
  optimizelyPrequerySuggestionClickHandler,
}) => {
  const { dispatch, trackingName } = useContext(SearchContext);

  const [autocompleteHits, setAutocompleteHits] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [preQueryHits, setPreQueryHits] = useState([]);

  /**
   * Handles when a search is submitted by adding the user's search
   * query as a query parameter. Note that it must preserved any other
   * existing query parameters must be preserved.
   */
  const handleSubmit = (query) => {
    setShowSuggestions(false);
    dispatch(setRefinementAction(QUERY_PARAM_FOR_SEARCH_QUERY, query));
    dispatch(deleteRefinementAction(QUERY_PARAM_FOR_PAGE));
    if (trackingName) {
      sendTrackEvent(`${SEARCH_EVENT_NAME_PREFIX}.${trackingName}.${QUERY_SUBMITTED_EVENT}`, {
        query,
      });
    }
  };

  const handleSuggestionSubmit = (hit) => {
    // If an override is provided, call it with the hit
    if (typeof suggestionSubmitOverride === 'function') {
      suggestionSubmitOverride(hit);
    }

    // When a suggested search is clicked, set the course tile to the search query
    setSearchQuery(hit.title);
    // Do all the regular submit stuff
    handleSubmit(hit.title);
  };

  const handleClickListener = () => setShowSuggestions(false);
  useEffect(() => {
    document.addEventListener('click', handleClickListener);
    // Clean up the event listener when the component unmounts-
    // https://blog.logrocket.com/understanding-react-useeffect-cleanup-function/
    return () => {
      document.removeEventListener('click', handleClickListener);
    };
  });

  // Track the focused element
  const focusedElement = useActiveElement();
  // Function to be called when the user stops typing, will fetch algolia hits for query after `DEBOUNCE_TIME_MS` has
  // elapsed
  const debounceFunc = async (query) => {
    // Skip suggesting anything until there's something typed
    if (query !== '') {
      const { hits, nbHits } = await index.search(query, {
        filters,
        attributesToHighlight: ['title'],
        attributesToRetrieve: ALGOLIA_ATTRIBUTES_TO_RETRIEVE,
      });
      if (nbHits > 0) {
        setPreQueryHits([]);
        setAutocompleteHits(hits);
        setShowSuggestions(true);
      } else {
        // If there are no results of the suggested search, hide the empty suggestion component
        setShowSuggestions(false);
      }
    // If isPreQueryEnabled is true display the prequery results when user clicks on search box but has not began typing
    } else if (query === '' && isPreQueryEnabled) {
      const { hits } = await index.search(query, {
        filters,
        attributesToHighlight: ['title'],
        attributesToRetrieve: ALGOLIA_ATTRIBUTES_TO_RETRIEVE,
      });
      setAutocompleteHits([]);
      setPreQueryHits(hits);
      setShowSuggestions(true);
    }
  };
  // Since the debounced method is called in a useEffect hook, use `useCallback` to account for repeated invoking of the
  // method.
  const debounceHandler = useCallback(debounce(debounceFunc, DEBOUNCE_TIME_MS), []);

  useEffect(() => {
    // If the component is provided an index and the current focused element is the input field,
    // start the suggestion request to algolia
    if (index !== undefined && focusedElement.classList.contains(SEARCH_BOX_CLASS_NAME)) {
      debounceHandler(searchQuery);
    }
    // Retry this method if the focused element or the search query changes
  }, [searchQuery, focusedElement]);

  /**
   * Handles when a search is cleared by removing the user's search query
   * from the query parameters.
   */
  const handleClear = () => {
    setSearchQuery('');
    dispatch(deleteRefinementAction(QUERY_PARAM_FOR_SEARCH_QUERY));
    dispatch(deleteRefinementAction(QUERY_PARAM_FOR_PAGE));
  };

  // Changing or removing New Relic synthetic data attributes will trigger a failure alert on our synthetics tests
  // these should be disabled before removing the data attrs.
  // https://docs.newrelic.com/docs/synthetics/synthetic-monitoring/scripting-monitors/introduction-scripted-browser-monitors/
  return (
    <div className={className}>
      {!hideTitle && (
        /* eslint-disable-next-line jsx-a11y/label-has-associated-control */
        <label id="search-input-box" className="fe__searchfield-input-box text-brand-primary">
          {headerTitle || searchText}
        </label>
      )}
      <SearchField.Advanced
        className={classNames('fe__searchfield', {
          'fe__searchfield--inverse': variant === STYLE_VARIANTS.inverse,
        })}
        value={defaultRefinement}
        onSubmit={handleSubmit}
        onClear={handleClear}
        onFocus={(query) => {
          setSearchQuery(query);
        }}
        onChange={(query) => {
          setSearchQuery(query);
        }}
      >
        <SearchField.Input
          className={`form-control-lg ${SEARCH_BOX_CLASS_NAME}`}
          aria-labelledby="search-input-box"
          data-nr-synth-id="catalog-search-input-field"
          data-hj-whitelist
          autoComplete="off"
        />
        <SearchField.ClearButton data-nr-synth-id="catalog-search-clear-button" />
        <SearchField.SubmitButton data-nr-synth-id="catalog-search-submit-button" />
      </SearchField.Advanced>
      {showSuggestions && (
        <SearchSuggestions
          enterpriseSlug={enterpriseSlug}
          preQueryHits={preQueryHits}
          autoCompleteHits={autocompleteHits}
          handleSubmit={() => handleSubmit(searchQuery)}
          handleSuggestionClickSubmit={hit => handleSuggestionSubmit(hit)}
          disableSuggestionRedirect={disableSuggestionRedirect}
          optimizelyPrequerySuggestionClickHandler={optimizelyPrequerySuggestionClickHandler}
        />
      )}
    </div>
  );
};

SearchBoxBase.propTypes = {
  defaultRefinement: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf([STYLE_VARIANTS.default, STYLE_VARIANTS.inverse]),
  headerTitle: PropTypes.string,
  hideTitle: PropTypes.bool,
  index: PropTypes.shape({ search: PropTypes.func.isRequired }),
  filters: PropTypes.string,
  enterpriseSlug: PropTypes.string,
  suggestionSubmitOverride: PropTypes.func,
  disableSuggestionRedirect: PropTypes.bool,
  isPreQueryEnabled: PropTypes.bool,
  optimizelyPrequerySuggestionClickHandler: PropTypes.func,
};

SearchBoxBase.defaultProps = {
  className: undefined,
  defaultRefinement: '',
  variant: STYLE_VARIANTS.inverse,
  headerTitle: undefined,
  hideTitle: false,
  filters: '',
  enterpriseSlug: undefined,
  index: undefined,
  suggestionSubmitOverride: undefined,
  disableSuggestionRedirect: false,
  isPreQueryEnabled: false,
  optimizelyPrequerySuggestionClickHandler: undefined,
};

export default connectSearchBox(SearchBoxBase);

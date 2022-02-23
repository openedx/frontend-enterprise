import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SearchField } from '@edx/paragon';
import { connectSearchBox } from 'react-instantsearch-dom';

import { sendTrackEvent } from '@edx/frontend-platform/analytics';

import { deleteRefinementAction, setRefinementAction } from './data/actions';
import { SearchContext } from './SearchContext';
import {
  STYLE_VARIANTS,
  QUERY_PARAM_FOR_PAGE,
  QUERY_PARAM_FOR_SEARCH_QUERY,
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
}) => {
  const { dispatch, trackingName } = useContext(SearchContext);

  const [autocompleteHits, setAutocompleteHits] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

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

  useEffect(() => {
    document.addEventListener('click', () => setShowSuggestions(false));
  });

  useEffect(() => {
    let isMounted = true;
    const fetchCourses = setTimeout(async () => {
      if (searchQuery !== '' && isMounted) {
        const { hits, nbHits } = await index.search(searchQuery, {
          filters,
          attributesToHighlight: ['title'],
          attributesToRetrieve: [
            'key',
            'content_type',
            'title',
            'authoring_organizations',
            'aggregation_key',
            '_highlightResult',
            'program_type',
          ],
        });
        if (nbHits > 0 && isMounted) {
          setAutocompleteHits(hits);
          setShowSuggestions(true);
        }
      } else {
        setShowSuggestions(false);
      }
    }, 1000);
    return () => {
      isMounted = false;
      clearTimeout(fetchCourses);
    };
  }, [searchQuery]);

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
        { headerTitle || searchText }
      </label>
      )}
      <SearchField.Advanced
        className={classNames('fe__searchfield', {
          'fe__searchfield--inverse': variant === STYLE_VARIANTS.inverse,
        })}
        value={defaultRefinement}
        onSubmit={handleSubmit}
        onClear={handleClear}
        onChange={(query) => {
          setSearchQuery(query);
        }}
      >
        <SearchField.Input
          className="form-control-lg"
          aria-labelledby="search-input-box"
          data-nr-synth-id="catalog-search-input-field"
          data-hj-whitelist
          autoComplete="off"
        />
        <SearchField.ClearButton data-nr-synth-id="catalog-search-clear-button" />
        <SearchField.SubmitButton data-nr-synth-id="catalog-search-submit-button" />
      </SearchField.Advanced>
      { showSuggestions && (
        <SearchSuggestions
          enterpriseSlug={enterpriseSlug}
          autoCompleteHits={autocompleteHits}
          handleViewAllClick={() => handleSubmit(searchQuery)}
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
  index: PropTypes.shape({ search: PropTypes.func.isRequired }).isRequired,
  filters: PropTypes.string,
  enterpriseSlug: PropTypes.string.isRequired,
};

SearchBoxBase.defaultProps = {
  className: undefined,
  defaultRefinement: '',
  variant: STYLE_VARIANTS.inverse,
  headerTitle: undefined,
  hideTitle: false,
  filters: '',
};

export default connectSearchBox(SearchBoxBase);

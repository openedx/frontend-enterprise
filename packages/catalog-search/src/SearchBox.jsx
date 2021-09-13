import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  Button, Col, Row, SearchField,
} from '@edx/paragon';
import { connectSearchBox } from 'react-instantsearch-dom';

import { sendTrackEvent } from '@edx/frontend-platform/analytics';

import { deleteRefinementAction, setRefinementAction } from './data/actions';
import { SearchContext } from './SearchContext';
import {
  STYLE_VARIANTS,
  QUERY_PARAM_FOR_PAGE,
  QUERY_PARAM_FOR_SEARCH_QUERY,
} from './data/constants';

export const searchText = 'Search courses and programs';
// this prefix will be combined with one of the SearchBox props to create a full tracking event name
// only if event name prop is provided by user. In the absence of the tracking name prop,
// no tracking event will be sent.
export const SEARCH_EVENT_NAME_PREFIX = 'edx.enterprise';
export const QUERY_SUBMITTED_EVENT = 'catalog_search.query_submitted';

export const SearchBoxBase = ({
  className,
  defaultRefinement,
  variant,
}) => {
  const { dispatch, trackingName } = useContext(SearchContext);
  const [currSearchQuery, setCurrState] = useState(defaultRefinement);

  /**
   * Handles when a search is submitted by adding the user's search
   * query as a query parameter. Note that it must preserved any other
   * existing query parameters must be preserved.
   */

  const handleSearch = (searchQuery) => {
    dispatch(setRefinementAction(QUERY_PARAM_FOR_SEARCH_QUERY, searchQuery));
    dispatch(deleteRefinementAction(QUERY_PARAM_FOR_PAGE));
    if (trackingName) {
      sendTrackEvent(`${SEARCH_EVENT_NAME_PREFIX}.${trackingName}.${QUERY_SUBMITTED_EVENT}`, {
        query: searchQuery,
      });
    }
  };

  const handleOnChange = (value) => {
    setCurrState(value);
  };

  // Changing or removing New Relic synthetic data attributes will trigger a failure alert on our synthetics tests
  // these should be disabled before removing the data attrs.
  // https://docs.newrelic.com/docs/synthetics/synthetic-monitoring/scripting-monitors/introduction-scripted-browser-monitors/
  return (
    <Row className={className}>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <Col xl={8}>
        <SearchField.Advanced
          className={classNames('fe__searchfield', {
            'fe__searchfield--inverse': variant === STYLE_VARIANTS.inverse,
          })}
          value={defaultRefinement}
          onChange={handleOnChange}
          onSubmit={handleSearch}
        >
          <SearchField.Input
            className="form-control-lg"
            aria-labelledby="search-input-box"
            data-nr-synth-id="catalog-search-input-field"
            placeholder={searchText}
            data-hj-whitelist
          />
        </SearchField.Advanced>
      </Col>
      <Col>
        <Button
          role="button"
          onClick={() => { handleSearch(currSearchQuery); }}
          variant="primary"
        >
          Search
        </Button>
      </Col>
    </Row>
  );
};

SearchBoxBase.propTypes = {
  defaultRefinement: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf([STYLE_VARIANTS.default, STYLE_VARIANTS.inverse]),
};

SearchBoxBase.defaultProps = {
  className: undefined,
  defaultRefinement: '',
  variant: STYLE_VARIANTS.inverse,
};

export default connectSearchBox(SearchBoxBase);

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SearchField } from '@edx/paragon';
import { connectSearchBox } from 'react-instantsearch-dom';

import { deleteRefinementAction, setRefinementAction } from './data/actions';
import { STYLE_VARIANTS } from '../constants';
import { SearchContext } from './SearchContext';
import { QUERY_PARAM_FOR_PAGE, QUERY_PARAM_FOR_SEARCH_QUERY } from './data/constants';

export const searchText = 'Search courses';

export const SearchBoxBase = ({
  className,
  defaultRefinement,
  variant,
}) => {
  const { dispatch } = useContext(SearchContext);

  /**
   * Handles when a search is submitted by adding the user's search
   * query as a query parameter. Note that it must preserved any other
   * existing query parameters must be preserved.
   */
  const handleSubmit = (searchQuery) => {
    dispatch(setRefinementAction(QUERY_PARAM_FOR_SEARCH_QUERY, searchQuery));
    dispatch(deleteRefinementAction(QUERY_PARAM_FOR_PAGE));
  };

  /**
   * Handles when a search is cleared by removing the user's search query
   * from the query parameters.
   */
  const handleClear = () => {
    dispatch(deleteRefinementAction(QUERY_PARAM_FOR_SEARCH_QUERY));
    dispatch(deleteRefinementAction(QUERY_PARAM_FOR_PAGE));
  };

  return (
    <div className={className}>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label id="search-input-box" className="fe__searchfield-input-box text-brand-primary">
        {searchText}
      </label>
      <SearchField.Advanced
        className={classNames('fe__searchfield', {
          'fe__searchfield--inverse': variant === STYLE_VARIANTS.inverse,
        })}
        value={defaultRefinement}
        onSubmit={handleSubmit}
        onClear={handleClear}
      >
        <SearchField.Input className="form-control-lg" aria-labelledby="search-input-box" />
        <SearchField.ClearButton />
        <SearchField.SubmitButton />
      </SearchField.Advanced>
    </div>
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

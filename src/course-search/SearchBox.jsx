import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useHistory } from 'react-router-dom';
import qs from 'query-string';
import { SearchField } from '@edx/paragon';
import { connectSearchBox } from 'react-instantsearch-dom';

import { updateRefinementsFromQueryParams } from './data/utils';
import { STYLE_VARIANTS } from '../constants';

export const SearchBoxBase = ({
  className,
  defaultRefinement,
  refinementsFromQueryParams,
  variant,
}) => {
  const history = useHistory();

  /**
   * Handles when a search is submitted by adding the user's search
   * query as a query parameter. Note that it must preserved any other
   * existing query parameters must be preserved.
   */
  const handleSubmit = (searchQuery) => {
    const refinements = { ...refinementsFromQueryParams };
    refinements.q = searchQuery;
    delete refinements.page; // reset to page 1

    const updatedRefinements = updateRefinementsFromQueryParams(refinements);
    history.push({ search: qs.stringify(updatedRefinements) });
  };

  /**
   * Handles when a search is cleared by removing the user's search query
   * from the query parameters.
   */
  const handleClear = () => {
    const refinements = { ...refinementsFromQueryParams };
    delete refinements.q;
    delete refinements.page; // reset to page 1

    const updatedRefinements = updateRefinementsFromQueryParams(refinements);
    history.push({ search: qs.stringify(updatedRefinements) });
  };

  return (
    <div className={className}>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label id="search-input-box" className="fe__searchfield-input-box">
        Search Courses
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
  refinementsFromQueryParams: PropTypes.shape().isRequired,
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

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@edx/paragon';
import { SearchContext } from './SearchContext';
import { clearRefinementsAction } from './data/actions';

export const CLEAR_ALL_TEXT = 'clear all';

const ClearCurrentRefinements = ({ className, variant, ...props }) => {
  const { refinements, dispatch } = useContext(SearchContext);
  const hideCards = (refinements.hide_cards === 'true');
  const CLEAR_ALL_LABEL = hideCards ? '' : CLEAR_ALL_TEXT;

  /**
   * Called when clear filters button is clicked. Removes
   * all non-query keys from ``refinements`` and
   * updates the query params.
   */
  const handleClearAllRefinementsClick = () => {
    dispatch(clearRefinementsAction());
  };

  return (
    <Button
      className={className}
      variant={variant}
      onClick={handleClearAllRefinementsClick}
      {...props}
    >
      {CLEAR_ALL_LABEL}
    </Button>
  );
};

ClearCurrentRefinements.propTypes = {
  variant: PropTypes.string.isRequired,
  className: PropTypes.string,
};

ClearCurrentRefinements.defaultProps = {
  className: undefined,
};

export default ClearCurrentRefinements;

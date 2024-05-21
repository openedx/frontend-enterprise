import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@openedx/paragon';
import { FormattedMessage } from '@edx/frontend-platform/i18n';
import { SearchContext } from './SearchContext';
import { clearRefinementsAction } from './data/actions';

export const CLEAR_ALL_TEXT = 'clear all';

const ClearCurrentRefinements = ({ className, variant, ...props }) => {
  const { refinements, dispatch } = useContext(SearchContext);
  const hideCards = (refinements.hide_cards && refinements.hide_cards[0] === 'true');

  /**
   * Called when clear filters button is clicked. Removes
   * all non-query keys from ``refinements`` and
   * updates the query params.
   */
  const handleClearAllRefinementsClick = () => {
    dispatch(clearRefinementsAction());
  };

  return (
    <span>
      {!hideCards && (
      <Button
        className={className}
        variant={variant}
        onClick={handleClearAllRefinementsClick}
        {...props}
      >
        <FormattedMessage
          id="search.facetFilters.clearAll.button"
          defaultMessage="clear all"
          description="Button text to clear all filters"
        />
      </Button>
      ) }
    </span>
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

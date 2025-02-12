import React, { useContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Badge, Button } from '@openedx/paragon';
import { CloseSmall } from '@openedx/paragon/icons';
import { connectCurrentRefinements } from 'react-instantsearch-dom';
import { FormattedMessage, useIntl } from '@edx/frontend-platform/i18n';

import ClearCurrentRefinements from './ClearCurrentRefinements';

import {
  QUERY_PARAMS_TO_IGNORE,
  NUM_CURRENT_REFINEMENTS_TO_DISPLAY,
  STYLE_VARIANTS,
} from './data/constants';
import {
  useActiveRefinementsAsFlatArray,
} from './data/hooks';
import { SearchContext } from './SearchContext';
import { removeFromRefinementArray, deleteRefinementAction } from './data/actions';
import messages from './messages';

require('react-dom');
window.React2 = require('react');

console.log('DEBUG: React 1 === React 2?: ', window.React1 === window.React2);

export const CurrentRefinementsBase = ({ items, variant }) => {
  const [showAllRefinements, setShowAllRefinements] = useState(false);
  const { refinements, dispatch } = useContext(SearchContext);
  const activeRefinementsAsFlatArray = useActiveRefinementsAsFlatArray(items || []);
  const intl = useIntl();

  /**
   * Determines the correct number of active refinements to show at any
   * given time based on showAllRefinements.
   */
  const visibleActiveRefinements = useMemo(
    () => {
      // is the parameter to hide cards is passed, the selection of the catalog title is hidden
      // to avoid the user accidentally clearing it and triggering a reload
      if (refinements.hide_cards && refinements.hide_cards[0] === 'true') {
        const updatedArray = [];
        activeRefinementsAsFlatArray.forEach(element => {
          if (element.attribute !== 'enterprise_catalog_query_titles') {
            updatedArray.push(element);
          }
        });
        return updatedArray;
      }
      if (showAllRefinements) {
        return activeRefinementsAsFlatArray;
      }
      return activeRefinementsAsFlatArray.slice(0, NUM_CURRENT_REFINEMENTS_TO_DISPLAY);
    },
    [activeRefinementsAsFlatArray, refinements.hide_cards, showAllRefinements],
  );

  /**
   * Removes the refinement that was clicked from the query params, which causes
   * the search results to update.
   */
  const handleRefinementBadgeClick = (item) => {
    if (showAllRefinements && visibleActiveRefinements.length - 1 <= NUM_CURRENT_REFINEMENTS_TO_DISPLAY) {
      setShowAllRefinements(false);
    }
    // if the refinement is found, remove it.
    const facetName = item.attribute;
    if (!QUERY_PARAMS_TO_IGNORE.includes(facetName) && refinements[facetName]?.includes(item.label)) {
      if (refinements[facetName].length === 1) {
        dispatch(deleteRefinementAction(facetName));
      } else {
        dispatch(removeFromRefinementArray(facetName, item.label));
      }
    }
  };

  return (
    <ul className="list-unstyled d-flex flex-wrap align-items-center mb-0">
      {visibleActiveRefinements.map(item => (
        <li className="mr-2" key={item.label}>
          <Badge
            className="fe__refinement-badge py-2 mb-2 font-weight-light"
            variant="light"
            onClick={() => handleRefinementBadgeClick(item)}
          >
            <span className="mr-2">
              {messages[item.label] ? intl.formatMessage(messages[item.label]) : item.label}
            </span>

            <CloseSmall />
            <span className="sr-only">
              <FormattedMessage
                id="search.facetFilters.removeFilter.button"
                defaultMessage="Remove the filter {filterTitle}"
                description="Button text to remove a filter from the search results"
                values={{ filterTitle: item.label }}
              />
            </span>
          </Badge>
        </li>
      ))}
      {!showAllRefinements && activeRefinementsAsFlatArray.length > NUM_CURRENT_REFINEMENTS_TO_DISPLAY && (
        <li className="mr-2">
          <Badge
            className={classNames('fe__refinement-badge mb-2 py-2 font-weight-light fe_current-icon-justify-center', { 'fe__refinement-badge--default': variant === STYLE_VARIANTS.defualt })}
            variant="light"
            onClick={() => setShowAllRefinements(true)}
          >
            +{activeRefinementsAsFlatArray.length - NUM_CURRENT_REFINEMENTS_TO_DISPLAY}
            <span className="sr-only">
              <FormattedMessage
                id="search.facetFilters.showAll.button"
                defaultMessage="Show all {activeRefinementsCount} filters"
                description="Button text to show all filters"
                values={{ activeRefinementsCount: activeRefinementsAsFlatArray.length }}
              />
            </span>
          </Badge>
        </li>
      )}
      {showAllRefinements && (
        <li className="mr-2">
          <Button
            className={classNames(
              'fe__current-refinement-button text-underline px-1 py-0 mb-2',
              { 'fe__current-refinement-button--inverse': variant === STYLE_VARIANTS.inverse },
            )}
            onClick={() => setShowAllRefinements(false)}
            variant="link"
            size="inline"
          >
            <FormattedMessage
              id="search.facetFilters.showLess.button"
              defaultMessage="show less"
              description="Button text to show less filters"
            />
          </Button>
        </li>
      )}
      <li>
        <ClearCurrentRefinements
          className={classNames(
            'fe__current-refinement-button text-underline px-1 py-0 mb-2',
            { 'fe__current-refinement-button--inverse': variant === STYLE_VARIANTS.inverse },
          )}
          variant="link"
          size="inline"
        />
      </li>
    </ul>
  );
};

CurrentRefinementsBase.defaultProps = {
  variant: STYLE_VARIANTS.inverse,
};

CurrentRefinementsBase.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  variant: PropTypes.oneOf(Object.values(STYLE_VARIANTS)),
};

export default connectCurrentRefinements(CurrentRefinementsBase);

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connectCurrentRefinements } from 'react-instantsearch-dom';
import { Button } from '@openedx/paragon';
import { ArrowDropDown, Close } from '@openedx/paragon/icons';

import { FormattedMessage } from '@edx/frontend-platform/i18n';
import ClearCurrentRefinements from './ClearCurrentRefinements';

import { useActiveRefinementsAsFlatArray } from './data/hooks';

export const MobileFilterMenuBase = ({ children, className, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const activeRefinementsAsFlatArray = useActiveRefinementsAsFlatArray(items);

  return (
    <div className={className}>
      {!isOpen && (
        <Button
          className="btn btn-block bg-white rounded-0 d-flex align-items-center justify-content-between text-dark"
          onClick={() => setIsOpen(true)}
        >
          <div className="mr-2">
            <FormattedMessage
              id="catalog.search.filters"
              defaultMessage="Filters"
              description="Label for the filters button."
            />
            {activeRefinementsAsFlatArray && activeRefinementsAsFlatArray.length > 0 && (
              <span className="ml-1">
                <FormattedMessage
                  id="catalog.search.filters.selected"
                  defaultMessage="({count} selected)"
                  description="Label for the number of selected filters."
                  values={{ count: activeRefinementsAsFlatArray.length }}
                />
              </span>
            )}
          </div>
          <ArrowDropDown />
        </Button>
      )}
      <div
        className={classNames(
          'modal fade mobile-filter-menu',
          { 'd-block show': isOpen },
          { 'd-none': !isOpen },
        )}
        tabIndex="-1"
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header d-flex align-items-center">
              <h5 className="modal-title text-center w-100">
                <FormattedMessage
                  id="catalog.search.filters.all"
                  defaultMessage="All Filters"
                  description="Label for the all filters button."
                />
                {activeRefinementsAsFlatArray && activeRefinementsAsFlatArray.length > 0 && (
                  <span className="ml-1">
                    <FormattedMessage
                      id="catalog.search.filters.all.selected"
                      defaultMessage="({count} selected)"
                      description="Label for the number of selected filters."
                      values={{ count: activeRefinementsAsFlatArray.length }}
                    />
                  </span>
                )}
              </h5>
              <Button
                variant="link"
                className="btn-close position-absolute px-2"
                onClick={() => setIsOpen(false)}
              >
                <Close
                  id="icon-close-mobile-filter-menu"
                />
                <span className="sr-only">
                  <FormattedMessage
                    id="catalog.search.filters.close"
                    defaultMessage="close filter menu"
                    description="Label for the close filter menu button."
                  />
                </span>
              </Button>
            </div>
            <div className="modal-body p-0">
              {children}
            </div>
            <div className="modal-footer py-3">
              <div className="col">
                <ClearCurrentRefinements className="btn-block" variant="inverse-primary" />
              </div>
              <div className="col">
                <Button
                  className="btn-brand-primary btn-block py-2 m-0"
                  onClick={() => setIsOpen(false)}
                >
                  <FormattedMessage
                    id="catalog.search.filters.done"
                    defaultMessage="Done"
                    description="Label for the done button."
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MobileFilterMenuBase.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  className: PropTypes.string,
};

MobileFilterMenuBase.defaultProps = {
  className: undefined,
};

export default connectCurrentRefinements(MobileFilterMenuBase);

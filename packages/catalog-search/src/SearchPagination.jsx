import React, { useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { connectPagination } from 'react-instantsearch-dom';
import { Pagination, Icon } from '@openedx/paragon';
import { ArrowBackIos, ArrowForwardIos } from '@openedx/paragon/icons';

import { useIntl } from '@edx/frontend-platform/i18n';
import { SearchContext } from './SearchContext';
import { setRefinementAction, deleteRefinementAction } from './data/actions';

export const SearchPaginationBase = ({
  nbPages,
  currentRefinement,
  maxPagesDisplayed,
}) => {
  const { dispatch } = useContext(SearchContext);
  const intl = useIntl();

  const icons = useMemo(
    () => ({
      left: (
        <>
          <Icon src={ArrowBackIos} />
          <div className="sr-only">Navigate Left</div>
        </>
      ),
      right: (
        <>
          <Icon src={ArrowForwardIos} />
          <div className="sr-only">Navigate Right</div>
        </>
      ),
    }),
    [],
  );

  const buttonLabels = {
    previous: '',
    next: '',
    page: intl.formatMessage({
      id: 'catalog.search.pagination.page',
      defaultMessage: 'Page',
      description: 'Label for the page number in the pagination component',
    }),
    currentPage: intl.formatMessage({
      id: 'catalog.search.pagination.current.page',
      defaultMessage: 'Current Page',
      description: 'Label for the current page number in the pagination component',
    }),
    pageOfCount: intl.formatMessage({
      id: 'catalog.search.pagination.page.of.count',
      defaultMessage: 'of',
      description: 'Label for the page of count in the pagination component',
    }),
  };

  const handlePageSelect = (page) => {
    if (page > 1) {
      dispatch(setRefinementAction('page', page));
    } else {
      dispatch(deleteRefinementAction('page'));
    }
  };

  return (
    <Pagination
      paginationLabel={
        intl.formatMessage({
          id: 'catalog.search.pagination.label',
          defaultMessage: 'search results navigation',
          description: 'Label for the pagination component',
        })
      }
      pageCount={nbPages}
      currentPage={currentRefinement}
      onPageSelect={handlePageSelect}
      maxPagesDisplayed={maxPagesDisplayed}
      buttonLabels={buttonLabels}
      icons={{
        leftIcon: icons.left,
        rightIcon: icons.right,
      }}
    />
  );
};

SearchPaginationBase.propTypes = {
  nbPages: PropTypes.number.isRequired,
  currentRefinement: PropTypes.number,
  maxPagesDisplayed: PropTypes.number,
};

SearchPaginationBase.defaultProps = {
  currentRefinement: 1,
  maxPagesDisplayed: 7,
};

export default connectPagination(SearchPaginationBase);

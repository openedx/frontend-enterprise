import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from '@edx/paragon';
import classNames from 'classnames';

import SearchBox from './SearchBox';
import SearchFilters from './SearchFilters';
import { STYLE_VARIANTS } from './data/constants';

import { SearchContext } from './SearchContext';

export const searchBoxColTestId = 'search-box-col';
export const filtersColTestId = 'filters-col';

const SearchHeader = ({ variant, containerSize }) => {
  const { refinements } = useContext(SearchContext);
  const searchQueryFromRefinements = refinements.q;

  return (
    <div className="bg-brand-primary">
      <Container size={containerSize}>
        <Row className="pt-4 pb-3">
          <Col
            data-testid={searchBoxColTestId}
            className={classNames('fe__searchbox-col', { 'fe__searchbox-col--default': variant === STYLE_VARIANTS.default })}
            xs={12}
            md={8}
          >
            <SearchBox
              className="mb-4"
              defaultRefinement={searchQueryFromRefinements}
              variant={variant}
            />
          </Col>
          <Col
            data-testid={filtersColTestId}
            className={classNames('fe__searchbox-col', { 'fe__searchbox-col--default': variant === STYLE_VARIANTS.default })}
            xs={12}
          >
            <SearchFilters className="mb-3" variant={variant} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

SearchHeader.defaultProps = {
  variant: STYLE_VARIANTS.inverse,
  containerSize: null,
};

SearchHeader.propTypes = {
  containerSize: PropTypes.string,
  variant: PropTypes.oneOf([STYLE_VARIANTS.default, STYLE_VARIANTS.inverse]),
};

export default SearchHeader;

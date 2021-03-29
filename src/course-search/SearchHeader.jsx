import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from '@edx/paragon';

import classNames from 'classnames';
import SearchBox from './SearchBox';
import SearchFilters from './SearchFilters';
import { STYLE_VARIANTS } from '../constants';

import { SearchContext } from './SearchContext';

const SearchHeader = ({ variant }) => {
  const { refinementsFromQueryParams } = useContext(SearchContext);

  const searchQueryFromQueryParams = refinementsFromQueryParams.q;

  return (
    <div className="bg-brand-primary">
      <Container size="lg">
        <Row className="pt-4 pb-3">
          <Col
            className={classNames('fe__searchbox-col', { 'fe__searchbox-col--default': variant === STYLE_VARIANTS.default })}
            xs={12}
            md={8}
          >
            <SearchBox
              className="mb-4"
              defaultRefinement={searchQueryFromQueryParams}
              refinementsFromQueryParams={refinementsFromQueryParams}
              variant={variant}
            />
          </Col>
          <Col className={classNames('fe__searchbox-col', { 'fe__searchbox-col--default': variant === STYLE_VARIANTS.default })} xs={12}>
            <SearchFilters className="mb-3" variant={variant} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

SearchHeader.defaultProps = {
  variant: STYLE_VARIANTS.inverse,
};

SearchHeader.propTypes = {
  variant: PropTypes.oneOf([STYLE_VARIANTS.default, STYLE_VARIANTS.inverse]),
};

export default SearchHeader;

import React, { useContext } from 'react';
import { Container, Row, Col } from '@edx/paragon';

import SearchBox from './SearchBox';
import SearchFilters from './SearchFilters';

import { SearchContext } from './SearchContext';

const SearchHeader = () => {
  const { refinementsFromQueryParams } = useContext(SearchContext);

  const searchQueryFromQueryParams = refinementsFromQueryParams.q;

  return (
    <div className="bg-brand-primary">
      <Container size="lg">
        <Row className="pt-4 pb-3">
          <Col xs={12} md={8}>
            <SearchBox
              className="mb-4"
              defaultRefinement={searchQueryFromQueryParams}
              refinementsFromQueryParams={refinementsFromQueryParams}
            />
          </Col>
          <Col xs={12}>
            <SearchFilters className="mb-3" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SearchHeader;

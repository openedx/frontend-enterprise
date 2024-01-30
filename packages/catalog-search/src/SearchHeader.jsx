import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from '@edx/paragon';
import classNames from 'classnames';

import SearchBox from './SearchBox';
import SearchFilters from './SearchFilters';
import { STYLE_VARIANTS } from './data/constants';

import { SearchContext } from './SearchContext';

export const searchHeaderTestId = 'search-header';
export const searchBoxColTestId = 'search-box-col';
export const filtersColTestId = 'filters-col';

const SearchHeader = ({
  variant,
  containerSize,
  headerTitle,
  hideTitle,
  index,
  filters,
  suggestionSubmitOverride,
  enterpriseConfig: { slug, enablePathways },
  disableSuggestionRedirect,
  isPreQueryEnabled,
}) => {
  const { refinements } = useContext(SearchContext);
  let searchQueryFromRefinements;
  // Sometimes the query is set to an array of one string instead of just the string
  if (Array.isArray(refinements.q)) {
    [searchQueryFromRefinements] = refinements.q;
  } else {
    searchQueryFromRefinements = refinements.q;
  }

  return (
    <div
      data-testid={searchHeaderTestId}
      className={classNames({ 'bg-brand-primary': variant === STYLE_VARIANTS.inverse })}
    >
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
              headerTitle={headerTitle}
              hideTitle={hideTitle}
              index={index}
              filters={filters}
              enterpriseSlug={slug}
              suggestionSubmitOverride={suggestionSubmitOverride}
              disableSuggestionRedirect={disableSuggestionRedirect}
              isPreQueryEnabled={isPreQueryEnabled}
            />
          </Col>
          <Col
            data-testid={filtersColTestId}
            className={classNames('fe__searchbox-col', { 'fe__searchbox-col--default': variant === STYLE_VARIANTS.default })}
            xs={12}
          >
            <SearchFilters className="mb-3" variant={variant} enablePathways={enablePathways} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

SearchHeader.defaultProps = {
  variant: STYLE_VARIANTS.inverse,
  containerSize: null,
  headerTitle: undefined,
  hideTitle: false,
  filters: '',
  enterpriseConfig: { slug: undefined, enablePathways: undefined },
  suggestionSubmitOverride: undefined,
  disableSuggestionRedirect: false,
  index: undefined,
  isPreQueryEnabled: false,
};

SearchHeader.propTypes = {
  headerTitle: PropTypes.string,
  containerSize: PropTypes.string,
  variant: PropTypes.oneOf([STYLE_VARIANTS.default, STYLE_VARIANTS.inverse]),
  hideTitle: PropTypes.bool,
  index: PropTypes.shape({ search: PropTypes.func.isRequired }),
  filters: PropTypes.string,
  enterpriseConfig: PropTypes.shape(
    { slug: PropTypes.string, enablePathways: PropTypes.bool },
  ),
  suggestionSubmitOverride: PropTypes.func,
  disableSuggestionRedirect: PropTypes.bool,
  isPreQueryEnabled: PropTypes.bool,
};

export default SearchHeader;

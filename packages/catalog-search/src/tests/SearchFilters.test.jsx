import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { breakpoints, ResponsiveContext } from '@edx/paragon';
import { SEARCH_FACET_FILTERS } from '../data/constants';

import { renderWithSearchContext } from './utils';

import '../../__mocks__/react-instantsearch-dom';
import SearchFilters from '../SearchFilters';

describe('<SearchFilters />', () => {
  test('renders with a label', () => {
    renderWithSearchContext(
      <ResponsiveContext.Provider value={{ width: breakpoints.large.maxWidth }}>
        <SearchFilters />
      </ResponsiveContext.Provider>,
    );
    SEARCH_FACET_FILTERS.forEach((filter) => {
      expect(screen.getByText(filter.title)).toBeInTheDocument();
    });
  });
});

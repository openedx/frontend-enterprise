import React, { useMemo } from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { breakpoints, ResponsiveContext } from '@openedx/paragon';
import { SEARCH_FACET_FILTERS } from '../data/constants';

import { renderWithSearchContext } from './utils';

import '../../__mocks__/react-instantsearch-dom';
import SearchFilters from '../SearchFilters';

const SearchContextWrapper = () => {
  const contextValue = useMemo(() => ({ width: breakpoints.large.maxWidth }), []);
  return (
    <ResponsiveContext.Provider value={contextValue}>
      <SearchFilters />
    </ResponsiveContext.Provider>
  );
};

describe('<SearchFilters />', () => {
  test('renders with a label', () => {
    renderWithSearchContext(<SearchContextWrapper />);
    SEARCH_FACET_FILTERS.forEach((filter) => {
      expect(screen.getByText(filter.title)).toBeInTheDocument();
    });
  });
});

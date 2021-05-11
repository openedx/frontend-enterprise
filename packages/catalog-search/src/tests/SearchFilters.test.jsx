import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { SEARCH_FACET_FILTERS } from '../data/constants';

import { renderWithSearchContext } from './utils';

import '../../__mocks__/react-instantsearch-dom';
import SearchFilters from '../SearchFilters';

describe('<SearchFilters />', () => {
  test('renders with a label', () => {
    renderWithSearchContext(<SearchFilters />);
    SEARCH_FACET_FILTERS.forEach((filter) => {
      expect(screen.getByText(filter.title)).toBeInTheDocument();
    });
  });
});

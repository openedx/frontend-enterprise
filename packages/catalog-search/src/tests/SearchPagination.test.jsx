import React from 'react';
import { renderWithRouter } from '@edx/frontend-enterprise-utils';
import { screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { SearchPaginationBase } from '../SearchPagination';
import SearchData from '../SearchContext';

describe('<SearchPagination />', () => {
  test('updates url when navigating right', () => {
    renderWithRouter(<SearchData><SearchPaginationBase nbPages={3} /></SearchData>);

    // assert no initial page query parameter
    expect(window.location.search).toEqual('');

    // click on next button and assert page query parameter exists and is accurate
    fireEvent.click(screen.queryByText('Navigate Right'));
    expect(window.location.search).toEqual('?page=2');
  });
  test('deletes page query when navigating to the first page', () => {
    renderWithRouter(
      <SearchData>
        <SearchPaginationBase nbPages={3} currentRefinement={2} />
      </SearchData>,
      { route: 'search/?page=2' },
    );
    // assert SearchData does not modify the page
    expect(window.location.search).toEqual('?page=2');

    // click on prev button and assert page disappears
    fireEvent.click(screen.queryByText('Navigate Left'));
    expect(window.location.search).toEqual('');
  });
  test('updates page query when navigating left to a previous page', () => {
    renderWithRouter((
      <SearchData>
        <SearchPaginationBase nbPages={4} currentRefinement={3} />
      </SearchData>), {
      route: 'search/?page=3',
    });

    // assert SearchData adds showAll
    expect(window.location.search).toEqual('?page=3');

    // click on prev button and assert page disappears
    fireEvent.click(screen.queryByText('Navigate Left'));
    expect(window.location.search).toEqual('?page=2');
  });
});

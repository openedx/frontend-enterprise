import React from 'react';
import { useLocation } from 'react-router-dom';
import { screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { SearchPaginationBase } from '../SearchPagination';
import { renderWithSearchContext } from './utils';

const mockedNavigator = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedNavigator,
  useLocation: jest.fn(),
}));

describe('<SearchPagination />', () => {
  beforeEach(() => {
    useLocation.mockReturnValue({ pathname: '/' });
    jest.clearAllMocks();
  });

  test('updates url when navigating right', () => {
    renderWithSearchContext(<SearchPaginationBase nbPages={3} />);

    // assert no initial page query parameter
    expect(window.location.search).toEqual('');

    // click on next button and assert page query parameter exists and is accurate
    fireEvent.click(screen.queryByText('Navigate Right'));
    expect(mockedNavigator).toHaveBeenCalledWith({ pathname: '/', search: 'page=2' });
  });
  test('deletes page query when navigating to the first page', () => {
    const mockedLocation = {
      pathname: '/',
      search: '?page=2',
    };
    useLocation.mockReturnValue(mockedLocation);

    renderWithSearchContext(
      <SearchPaginationBase nbPages={3} currentRefinement={2} />,
    );
    // assert SearchData does not modify the page
    expect(mockedNavigator.mock.calls[0][0]).toEqual({ pathname: '/', search: 'page=2' });

    // click on prev button and assert page disappears
    fireEvent.click(screen.queryByText('Navigate Left'));
    expect(mockedNavigator.mock.calls[1][0]).toEqual({ pathname: '/', search: '' });
  });
  test('updates page query when navigating left to a previous page', () => {
    const mockedLocation = {
      pathname: '/',
      search: '?page=3',
    };
    useLocation.mockReturnValue(mockedLocation);

    renderWithSearchContext(
      <SearchPaginationBase nbPages={4} currentRefinement={3} />,
    );

    // assert SearchData adds showAll
    expect(mockedNavigator.mock.calls[0][0]).toEqual({ pathname: '/', search: 'page=3' });

    // click on prev button and assert page disappears
    fireEvent.click(screen.queryByText('Navigate Left'));
    expect(mockedNavigator.mock.calls[1][0]).toEqual({ pathname: '/', search: 'page=2' });
  });
});

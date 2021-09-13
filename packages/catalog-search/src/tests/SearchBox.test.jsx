import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

import { sendTrackEvent } from '@edx/frontend-platform/analytics';

import {
  SearchBoxBase,
  SEARCH_EVENT_NAME_PREFIX,
  QUERY_SUBMITTED_EVENT,
} from '../SearchBox';
import {
  renderWithSearchContext,
  renderWithSearchContextAndTracking,
} from './utils';

jest.mock('@edx/frontend-platform/analytics');

const TEST_QUERY = 'test query';

describe('<SearchBox />', () => {
  test('renders with a label', () => {
    renderWithSearchContext(<SearchBoxBase />);

    // assert the Paragon <SearchField /> component renders
    expect(screen.queryByRole('search')).toBeInTheDocument();
    expect(screen.queryByRole('searchbox')).toBeInTheDocument();
  });

  test('renders with an initial value', () => {
    renderWithSearchContext(<SearchBoxBase defaultRefinement={TEST_QUERY} />);

    // assert the Paragon <SearchField /> component renders
    expect(screen.queryByRole('searchbox')).toHaveAttribute('value', TEST_QUERY);
  });

  test('handles submit', () => {
    const { history } = renderWithSearchContext(<SearchBoxBase />);

    // fill in search input and submit the search
    userEvent.type(screen.getByRole('searchbox'), TEST_QUERY);
    userEvent.click(screen.getByRole('button'));

    // assert url is updated with the query
    expect(history).toHaveLength(2);
    expect(history.location.search).toEqual('?q=test%20query');
    // check tracking is not invoked due to absent trackingName in context
    expect(sendTrackEvent).not.toHaveBeenCalled();
  });
  test('tracking event when search initiated with trackingName present in context', () => {
    renderWithSearchContextAndTracking(<SearchBoxBase />, 'aProduct');

    // fill in search input and submit the search
    userEvent.type(screen.getByRole('searchbox'), TEST_QUERY);
    userEvent.click(screen.getByRole('button'));

    // check tracking is invoked due to trackingName in context
    expect(sendTrackEvent).toHaveBeenCalledWith(
      `${SEARCH_EVENT_NAME_PREFIX}.aProduct.${QUERY_SUBMITTED_EVENT}`,
      { query: TEST_QUERY },
    );
  });
});

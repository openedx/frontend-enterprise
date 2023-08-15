import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

import { sendTrackEvent } from '@edx/frontend-platform/analytics';

import {
  SearchBoxBase,
  searchText,
  SEARCH_EVENT_NAME_PREFIX,
  QUERY_SUBMITTED_EVENT,
} from '../SearchBox';
import {
  renderWithSearchContext,
  renderWithSearchContextAndTracking,
} from './utils';

jest.mock('@edx/frontend-platform/analytics');

const mockedNavigator = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedNavigator,
  useLocation: () => ({
    pathname: '/',
  }),
}));

const TEST_QUERY = 'test query';
const HEADER_TITLE = 'Search Courses and Programs';

const index = { search: jest.fn() };

describe('<SearchBox />', () => {
  test('renders with a label', () => {
    renderWithSearchContext(<SearchBoxBase enterpriseSlug="test-enterprise" index={index} />);

    // assert the Paragon <SearchField /> component renders
    expect(screen.queryByRole('search')).toBeInTheDocument();
    expect(screen.queryByRole('searchbox')).toBeInTheDocument();

    // assert our custom label for the input renders
    expect(screen.getByLabelText(searchText)).toBeInTheDocument();
  });

  test('renders with correct label when provided in props', () => {
    renderWithSearchContext(<SearchBoxBase headerTitle={HEADER_TITLE} enterpriseSlug="test-enterprise" index={index} />);

    // assert our custom label for the input renders
    expect(screen.getByLabelText(HEADER_TITLE)).toBeInTheDocument();
  });

  test('renders without a label when hideTitle is true', () => {
    renderWithSearchContext(<SearchBoxBase hideTitle enterpriseSlug="test-enterprise" index={index} />);

    // assert the Paragon <SearchField /> component renders
    expect(screen.queryByRole('search')).toBeInTheDocument();
    expect(screen.queryByRole('searchbox')).toBeInTheDocument();

    // assert the label is hidden
    expect(screen.queryByText(searchText)).not.toBeInTheDocument();
  });

  test('renders with an initial value', () => {
    renderWithSearchContext(<SearchBoxBase defaultRefinement={TEST_QUERY} enterpriseSlug="test-enterprise" index={index} />);

    // assert the Paragon <SearchField /> component renders
    expect(screen.queryByRole('searchbox')).toHaveAttribute('value', TEST_QUERY);
  });

  test('doesnt render suggestions at start', () => {
    renderWithSearchContext(<SearchBoxBase enterpriseSlug="test-enterprise" index={index} />);
    expect(screen.queryByTestId('suggestions')).toBeNull();
  });

  test('makes algolia call with correct parameters on typing in searchbox', async () => {
    const hits = [
      { content_type: 'course', _highlightResult: { title: { value: 'test-title' } } },
      { content_type: 'course', _highlightResult: { title: { value: 'test-title2' } } },
    ];
    const nbHits = 2;

    index.search.mockImplementation(() => {
      const thing = { hits, nbHits };
      return (thing);
    });

    renderWithSearchContext(<SearchBoxBase enterpriseSlug="test-enterprise" index={index} />);
    userEvent.type(screen.getByRole('searchbox'), TEST_QUERY);
    await waitFor(() => expect(index.search.mock.calls.length).toBe(1));
    expect(index.search).toHaveBeenCalledWith(
      'test query',
      {
        attributesToHighlight: ['title'],
        filters: '',
        attributesToRetrieve: ['*'],
      },
    );
  });
  test('handles submit and clear', async () => {
    renderWithSearchContext(<SearchBoxBase enterpriseSlug="test-enterprise" index={index} />);

    // fill in search input and submit the search
    userEvent.type(screen.getByRole('searchbox'), TEST_QUERY);
    userEvent.type(screen.getByRole('searchbox'), '{enter}');

    // assert url is updated with the query
    expect(mockedNavigator).toHaveBeenCalledWith({ pathname: '/', search: 'q=test%20query' });
    // check tracking is not invoked due to absent trackingName in context
    expect(sendTrackEvent).not.toHaveBeenCalled();

    // clear the input
    userEvent.click(screen.getByText('clear search'));

    // assert query no longer exists in url
    await waitFor(() => expect(mockedNavigator).toHaveBeenCalledWith({ pathname: '/', search: '' }));
  });
  test('tracking event when search initiated with trackingName present in context', () => {
    renderWithSearchContextAndTracking(<SearchBoxBase enterpriseSlug="test-enterprise" index={index} />, 'aProduct');

    // fill in search input and submit the search
    userEvent.type(screen.getByRole('searchbox'), TEST_QUERY);
    userEvent.type(screen.getByRole('searchbox'), '{enter}');
    // check tracking is invoked due to trackingName in context
    expect(sendTrackEvent).toHaveBeenCalledWith(
      `${SEARCH_EVENT_NAME_PREFIX}.aProduct.${QUERY_SUBMITTED_EVENT}`,
      { query: TEST_QUERY },
    );
  });
  test('search box renders search suggestion and can override redirect', async () => {
    const suggestionSubmitOverride = jest.fn();

    SearchBoxBase.handleSuggestionSubmit = jest.fn();
    const hits = [
      { learning_type: 'course', _highlightResult: { title: { value: 'test-title' } } },
      { learning_type: 'course', _highlightResult: { title: { value: 'test-title2' } } },
    ];
    const nbHits = 2;

    index.search.mockImplementation(() => {
      const thing = { hits, nbHits };
      return (thing);
    });

    renderWithSearchContext(
      <SearchBoxBase
        enterpriseSlug="test-enterprise"
        index={index}
        suggestionSubmitOverride={suggestionSubmitOverride}
        disableSuggestionRedirect
      />,
    );

    // fill in search input and submit the search
    userEvent.type(screen.getByRole('searchbox'), TEST_QUERY);
    await waitFor(() => expect(screen.queryByTestId('suggestions')).not.toBeNull());
    await waitFor(() => expect(screen.getByText('test-title')).toBeInTheDocument());
    userEvent.click(screen.getByText('test-title'));

    expect(suggestionSubmitOverride).toHaveBeenCalledWith(
      { learning_type: 'course', _highlightResult: { title: { value: 'test-title' } } },
    );
  });
});

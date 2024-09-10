import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchSuggestions from '../SearchSuggestions';
import { COURSE_TYPE_EXECUTIVE_EDUCATION } from '../data/constants';
import { renderWithIntlProvider } from './utils';

const fakeSuggestionsData = {
  nbHits: 2,
  hits: [
    {
      learning_type: 'course',
      key: 'edX+courseX',
      title: 'test-course',
      _highlightResult: { title: { value: 'test-<em>course</em>' } },
      partners: [{
        name: 'edx-partner',
      }],
    },
    {
      learning_type: 'program',
      key: 'harvard+programX',
      title: 'test-program',
      _highlightResult: { title: { value: 'test-<em>program</em>' } },
      aggregation_key: '123:456',
      authoring_organizations: [{ key: 'harvard' }],
      program_type: 'xSeries',
      partners: [{
        name: 'harvard-partner',
      }],
    },
  ],
};

const fakeSuggestionsDataOnlyExecEd = {
  ...fakeSuggestionsData,
  nbHits: 1,
  hits: [
    {
      learning_type: 'Executive Education',
      key: 'harvard+programX',
      title: 'test-program',
      _highlightResult: { title: { value: 'test-<em>program</em>' } },
    },
  ],
};

const fakeSuggestionsDataEmptyAuthoringOrgs = {
  ...fakeSuggestionsData,
  nbHits: 1,
  hits: [
    {
      learning_type: 'program',
      key: 'harvard+programX',
      title: 'test-program',
      _highlightResult: { title: { value: 'test-<em>program</em>' } },
      aggregation_key: '123:456',
      authoring_organizations: [],
      program_type: 'xSeries',
    },
  ],
};

const handleSubmit = jest.fn();

describe('<SeachSuggestions />', () => {
  test('renders all data', () => {
    renderWithIntlProvider(<SearchSuggestions
      enterpriseSlug="test-enterprise"
      autoCompleteHits={fakeSuggestionsData.hits}
      handleSubmit={handleSubmit}
    />);
    expect(screen.getByText('Courses')).not.toBeNull();
    expect(screen.getByText('Programs')).not.toBeNull();
    expect(screen.getAllByText('test-').length).toBe(2);
    expect(screen.getByText('course')).not.toBeNull();
    expect(screen.getByText('program')).not.toBeNull();
    expect(screen.getByText('edX')).not.toBeNull();
    expect(screen.getByText('harvard')).not.toBeNull();
    expect(screen.getByText('xSeries')).not.toBeNull();
    expect(screen.getByText('View all results')).not.toBeNull();
  });

  test('renders no errors when no authoring orgs found for programs data', () => {
    renderWithIntlProvider(<SearchSuggestions
      enterpriseSlug="test-enterprise"
      autoCompleteHits={fakeSuggestionsDataEmptyAuthoringOrgs.hits}
      handleSubmit={handleSubmit}
    />);
    expect(screen.getByText('Programs')).not.toBeNull();
    expect(screen.getAllByText('test-').length).toBe(1);
    expect(screen.getByText('program')).not.toBeNull();
    expect(screen.getByText('xSeries')).not.toBeNull();
    expect(screen.getByText('View all results')).not.toBeNull();
  });

  test('calls click handler on view all results', () => {
    renderWithIntlProvider(<SearchSuggestions
      enterpriseSlug="test-enterprise"
      autoCompleteHits={fakeSuggestionsData.hits}
      handleSubmit={handleSubmit}
    />);

    userEvent.click(screen.getByText('View all results'));
    expect(handleSubmit.mock.calls.length).toBe(1);
  });

  test('redirects to correct page on course click', () => {
    const { container } = renderWithIntlProvider(<SearchSuggestions
      enterpriseSlug="test-enterprise"
      autoCompleteHits={fakeSuggestionsData.hits}
      handleSubmit={handleSubmit}
    />);

    userEvent.click(container.getElementsByClassName('suggestion-item')[0]);
    expect(window.location.pathname).toBe('/test-enterprise/course/edX+courseX');
  });

  test('redirects to correct page on program click', () => {
    const { container } = renderWithIntlProvider(<SearchSuggestions
      enterpriseSlug="test-enterprise"
      autoCompleteHits={fakeSuggestionsData.hits}
      handleSubmit={handleSubmit}
    />);
    userEvent.click(container.getElementsByClassName('suggestion-item')[1]);
    expect(window.location.pathname).toBe('/test-enterprise/program/456');
  });
  test('properly handles exec ed content', () => {
    const { container } = renderWithIntlProvider(<SearchSuggestions
      enterpriseSlug="test-enterprise"
      autoCompleteHits={fakeSuggestionsDataOnlyExecEd.hits}
      handleSubmit={handleSubmit}
      disableSuggestionRedirect
    />);
    expect(screen.getByText('Executive Education')).not.toBeNull();
    expect(container.getElementsByClassName('suggestion-item')[0].href)
      .toMatch(`http://localhost/test-enterprise/${COURSE_TYPE_EXECUTIVE_EDUCATION}/course/harvard+programX`);
  });
  test('does not display containers it does not have results for', () => {
    renderWithIntlProvider(<SearchSuggestions
      enterpriseSlug="test-enterprise"
      autoCompleteHits={fakeSuggestionsDataOnlyExecEd.hits}
      handleSubmit={handleSubmit}
    />);
    expect(() => { screen.getByText('Programs'); }).toThrow();
  });
});

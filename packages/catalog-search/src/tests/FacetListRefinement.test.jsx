import React from 'react';
import { act, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

import { FacetListRefinementBase } from '../FacetListRefinement';

import { FACET_ATTRIBUTES, SUBJECTS } from '../data/tests/constants';
import { renderWithSearchContext } from './utils';

const mockedNavigator = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedNavigator,
  useLocation: () => ({
    pathname: '/',
  }),
}));

const propsForNoRefinements = {
  items: [],
  attribute: FACET_ATTRIBUTES.SUBJECTS,
  title: FACET_ATTRIBUTES.SUBJECTS,
  currentRefinement: [],
  facetValueType: 'array',
  refinements: {},
  facetName: 'subjects',
  searchForItems: () => {},
};

const propsForRefinements = {
  ...propsForNoRefinements,
  items: [{
    label: SUBJECTS.COMMUNICATION,
    value: [SUBJECTS.COMMUNICATION],
    count: 10,
    isRefined: false,
  }],
  facetValueType: 'array',
  refinements: {},
  searchForItems: () => {},
};

const propsForActiveRefinements = {
  ...propsForNoRefinements,
  items: [{
    label: SUBJECTS.COMPUTER_SCIENCE,
    value: [SUBJECTS.COMPUTER_SCIENCE],
    count: 10,
    isRefined: true,
  }, {
    label: SUBJECTS.COMMUNICATION,
    value: [SUBJECTS.COMMUNICATION],
    count: 4,
    isRefined: false,
  }],
  currentRefinement: [SUBJECTS.COMPUTER_SCIENCE],
  facetValueType: 'array',
  refinements: { [FACET_ATTRIBUTES.SUBJECTS]: [SUBJECTS.COMPUTER_SCIENCE] },
};

describe('<FacetListRefinementBase />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders with no options', async () => {
    const user = userEvent.setup();
    renderWithSearchContext(<FacetListRefinementBase {...propsForNoRefinements} />);

    // assert facet title exists
    expect(screen.queryByText(FACET_ATTRIBUTES.SUBJECTS)).toBeInTheDocument();

    // assert there are no options
    await act(async () => {
      await user.click(screen.queryByText(FACET_ATTRIBUTES.SUBJECTS));
    });
    expect(screen.queryByText('No options found.')).toBeInTheDocument();
  });

  test('renders with options', async () => {
    const user = userEvent.setup();
    renderWithSearchContext(<FacetListRefinementBase {...propsForActiveRefinements} />);

    // assert the "no options" message does not show
    expect(screen.queryByText('No options found.')).not.toBeInTheDocument();

    // assert the refinements appear with appropriate counts
    await act(async () => {
      await user.click(screen.queryByText(FACET_ATTRIBUTES.SUBJECTS));
    });

    expect(screen.queryByText(SUBJECTS.COMPUTER_SCIENCE)).toBeInTheDocument();
    expect(screen.queryByText('10')).toBeInTheDocument();
    expect(screen.queryByText(SUBJECTS.COMMUNICATION)).toBeInTheDocument();
    expect(screen.queryByText('4')).toBeInTheDocument();
  });

  test('renders with options', async () => {
    const user = userEvent.setup();
    renderWithSearchContext(<FacetListRefinementBase {...propsForActiveRefinements} />);

    // assert the "no options" message does not show
    await act(async () => {
      await user.click(screen.queryByText(FACET_ATTRIBUTES.SUBJECTS));
    });
    expect(screen.queryByText('No options found.')).not.toBeInTheDocument();

    // assert the refinements appear with appropriate counts
    expect(screen.queryByText(SUBJECTS.COMPUTER_SCIENCE)).toBeInTheDocument();
    expect(screen.queryByText(SUBJECTS.COMPUTER_SCIENCE)).toHaveClass('is-refined');
    expect(screen.queryByText('10')).toBeInTheDocument();

    expect(screen.queryByText(SUBJECTS.COMMUNICATION)).toBeInTheDocument();
    expect(screen.queryByText(SUBJECTS.COMMUNICATION)).not.toHaveClass('is-refined');
    expect(screen.queryByText('4')).toBeInTheDocument();
  });

  test('supports clicking on a refinement', async () => {
    const user = userEvent.setup();
    renderWithSearchContext(<FacetListRefinementBase {...propsForRefinements} />);

    // assert the refinements appear
    await act(async () => {
      await user.click(screen.queryByText(FACET_ATTRIBUTES.SUBJECTS));
    });
    expect(screen.queryByText(SUBJECTS.COMMUNICATION)).toBeInTheDocument();

    // click a refinement option
    await act(async () => {
      await user.click(screen.queryByText(SUBJECTS.COMMUNICATION));
    });

    // assert the clicked refinement was added to the url
    expect(mockedNavigator).toHaveBeenCalledWith({ pathname: '/', search: 'subjects=Communication' });
  });

  test('clears pagination when clicking on a refinement', async () => {
    const user = userEvent.setup();
    renderWithSearchContext(
      <FacetListRefinementBase
        {...propsForActiveRefinements}
        refinements={{ ...propsForActiveRefinements.refinements, page: 3 }}
      />,
    );

    // assert the refinements appear
    await act(async () => {
      await user.click(screen.queryByText(FACET_ATTRIBUTES.SUBJECTS));
    });
    // click a refinement option
    await act(async () => {
      await user.click(screen.queryByText(SUBJECTS.COMMUNICATION));
    });

    // assert page was deleted and subjects were not
    expect(mockedNavigator).toHaveBeenCalledWith({ pathname: '/', search: 'subjects=Communication' });
  });
});

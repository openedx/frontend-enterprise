import React from 'react';
import { useLocation } from 'react-router-dom';
import { act, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { FREE_ALL_TITLE } from '../SearchFilters';
import FacetListBase from '../FacetListBase';
import { FACET_ATTRIBUTES, SUBJECTS } from '../data/tests/constants';
import { SHOW_ALL_NAME } from '../data/constants';
import { renderWithSearchContext } from './utils';

const mockedNavigator = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn(),
  useNavigate: () => mockedNavigator,
}));

const propsForNoItems = {
  items: [],
  title: FREE_ALL_TITLE,
  attribute: SHOW_ALL_NAME,
  isBold: true,
  facetValueType: 'bool',
  searchForItems: () => {},
};

const FREE_LABEL = 'Free';
const NOT_FREE_LABEL = 'Not free';
const propsWithItems = {
  ...propsForNoItems,
  items: [{
    label: FREE_LABEL,
    value: 1,
  },
  {
    label: NOT_FREE_LABEL,
    value: 0,
  },
  ],
  refinements: {
    [FACET_ATTRIBUTES.SUBJECTS]: [SUBJECTS.COMMUNICATION],
    page: 3,
  },
  searchForItems: () => {},
};
const searchableDropdownProps = {
  title: 'Skills',
  attribute: 'skill_names',
  facetValueType: 'array',
  items: [{ label: 'Blockchain', value: ['Blockchain'] }, { label: 'Cryptocurrency', value: ['Cryptocurrency'] }],
  searchForItems: jest.fn(),
  searchable: true,
  isBold: true,
  typeaheadOptions: {
    placeholder: 'Find a skill...',
    ariaLabel: 'Type to find a skill',
    minLength: 3,
  },
};

describe('<FacetListBase />', () => {
  beforeEach(() => {
    useLocation.mockReturnValue({ pathname: '/' });
    jest.clearAllMocks();
  });

  test('renders with no options', async () => {
    renderWithSearchContext(<FacetListBase {...propsForNoItems} />);

    // assert facet title exists
    expect(screen.queryByText(FREE_ALL_TITLE)).toBeInTheDocument();

    // assert there are no options
    await act(async () => {
      fireEvent.click(screen.queryByText(FREE_ALL_TITLE));
    });
    expect(screen.queryByText('No options found.')).toBeInTheDocument();
  });

  test('renders with options', async () => {
    renderWithSearchContext(<FacetListBase {...propsWithItems} />);

    // assert the "no options" message does not show
    expect(screen.queryByText('No options found.')).not.toBeInTheDocument();

    // assert the refinements appear with appropriate counts
    await act(async () => {
      fireEvent.click(screen.queryByText(FREE_ALL_TITLE));
    });
    expect(screen.queryByText(FREE_LABEL)).toBeInTheDocument();
    expect(screen.queryByText(NOT_FREE_LABEL)).toBeInTheDocument();
  });
  test('does not render if noDisplay is set to True', () => {
    renderWithSearchContext(<FacetListBase {...propsWithItems} noDisplay />);
    expect(screen.queryByText(propsWithItems.title)).not.toBeInTheDocument();
  });
  test('renders with options', async () => {
    renderWithSearchContext(<FacetListBase {...propsWithItems} />);

    // assert the "no options" message does not show
    await act(async () => {
      fireEvent.click(screen.queryByText(FREE_ALL_TITLE));
    });
    expect(screen.queryByText('No options found.')).not.toBeInTheDocument();

    // assert the refinements appear with appropriate styles
    expect(screen.queryByText(FREE_LABEL)).toBeInTheDocument();
    expect(screen.queryByText(FREE_LABEL)).toHaveClass('is-refined');

    expect(screen.queryByText(NOT_FREE_LABEL)).toBeInTheDocument();
    expect(screen.queryByText(NOT_FREE_LABEL)).not.toHaveClass('is-refined');
  });

  test('supports clicking on a refinement', async () => {
    renderWithSearchContext(
      <FacetListBase
        {...propsWithItems}
      />,
    );

    // assert the refinements appear
    await act(async () => {
      fireEvent.click(screen.queryByText(FREE_ALL_TITLE));
    });
    expect(screen.queryByText(FREE_LABEL)).toBeInTheDocument();

    // click a refinement option
    await act(async () => {
      fireEvent.click(screen.queryByText(NOT_FREE_LABEL));
    });

    expect(mockedNavigator).toHaveBeenCalledWith({ pathname: '/', search: 'showAll=1' });
  });
  test('clears pagination when clicking on a refinement', async () => {
    const mockedLocation = {
      pathname: '/',
      search: '?subjects=Communication&page=3',
    };
    useLocation.mockReturnValue(mockedLocation);

    renderWithSearchContext(
      <FacetListBase
        {...propsWithItems}
      />,
    );

    // assert the refinements appear
    await act(async () => {
      fireEvent.click(screen.queryByText(FREE_ALL_TITLE));
    });
    // click a refinement option
    await act(async () => {
      fireEvent.click(screen.queryByText(NOT_FREE_LABEL));
    });

    // assert page was deleted and subjects were not
    expect(mockedNavigator).toHaveBeenCalledWith({ pathname: '/', search: 'subjects=Communication&showAll=1' });
  });

  test('renders a typeahead dropdown', async () => {
    const { container } = renderWithSearchContext((
      <FacetListBase {...searchableDropdownProps} />
    ));

    // assert the "no options" message does not show
    expect(screen.queryByText('No options found.')).not.toBeInTheDocument();

    // open the typeahead dropdown menu
    await act(async () => {
      fireEvent.click(screen.queryByText('Skills'));
    });
    expect(screen.queryByPlaceholderText('Find a skill...')).toBeInTheDocument();
    expect(screen.queryByText('Blockchain')).toBeInTheDocument();
    expect(screen.queryByText('Cryptocurrency')).toBeInTheDocument();

    expect(container.querySelector('div.facet-list .typeahead.dropdown')).toBeInTheDocument();
  });

  test('typeahead dropdown calls searchForItems with correct arguments', async () => {
    renderWithSearchContext(<FacetListBase {...searchableDropdownProps} />);

    // open the typeahead dropdown menu
    await act(async () => {
      fireEvent.click(screen.queryByText('Skills'));
    });

    // input some search text
    await act(async () => {
      fireEvent.change(screen.queryByPlaceholderText('Find a skill...'), { target: { value: 'Blockchain' } });
    });

    await new Promise((r) => { setTimeout(r, 210); });

    expect(searchableDropdownProps.searchForItems).toHaveBeenCalledTimes(1);
    expect(searchableDropdownProps.searchForItems).toHaveBeenCalledWith('Blockchain');
  });
});

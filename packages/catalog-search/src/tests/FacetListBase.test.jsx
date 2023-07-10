import React from 'react';
import { renderWithRouter } from '@edx/frontend-enterprise-utils';
import { act, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';

import { FREE_ALL_TITLE } from '../SearchFilters';
import FacetListBase from '../FacetListBase';
import { FACET_ATTRIBUTES, SUBJECTS } from '../data/tests/constants';
import { NO_OPTIONS_FOUND, SHOW_ALL_NAME } from '../data/constants';
import SearchData from '../SearchContext';

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
  test('renders with no options', async () => {
    renderWithRouter(<BrowserRouter><SearchData><FacetListBase {...propsForNoItems} /></SearchData></BrowserRouter>);

    // assert facet title exists
    expect(screen.queryByText(FREE_ALL_TITLE)).toBeInTheDocument();

    // assert there are no options
    await act(async () => {
      fireEvent.click(screen.queryByText(FREE_ALL_TITLE));
    });
    expect(screen.queryByText(NO_OPTIONS_FOUND)).toBeInTheDocument();
  });

  test('renders with options', async () => {
    renderWithRouter(<SearchData><FacetListBase {...propsWithItems} /></SearchData>);

    // assert the "no options" message does not show
    expect(screen.queryByText(NO_OPTIONS_FOUND)).not.toBeInTheDocument();

    // assert the refinements appear with appropriate counts
    await act(async () => {
      fireEvent.click(screen.queryByText(FREE_ALL_TITLE));
    });
    expect(screen.queryByText(FREE_LABEL)).toBeInTheDocument();
    expect(screen.queryByText(NOT_FREE_LABEL)).toBeInTheDocument();
  });
  test('does not render if noDisplay is set to True', () => {
    renderWithRouter(<SearchData><FacetListBase {...propsWithItems} noDisplay /></SearchData>);
    expect(screen.queryByText(propsWithItems.title)).not.toBeInTheDocument();
  });
  test('renders with options', async () => {
    renderWithRouter(<SearchData><FacetListBase {...propsWithItems} /></SearchData>);

    // assert the "no options" message does not show
    await act(async () => {
      fireEvent.click(screen.queryByText(FREE_ALL_TITLE));
    });
    expect(screen.queryByText(NO_OPTIONS_FOUND)).not.toBeInTheDocument();

    // assert the refinements appear with appropriate styles
    expect(screen.queryByText(FREE_LABEL)).toBeInTheDocument();
    expect(screen.queryByText(FREE_LABEL)).toHaveClass('is-refined');

    expect(screen.queryByText(NOT_FREE_LABEL)).toBeInTheDocument();
    expect(screen.queryByText(NOT_FREE_LABEL)).not.toHaveClass('is-refined');
  });

  test('supports clicking on a refinement', async () => {
    const { history } = renderWithRouter(
      <SearchData>
        <FacetListBase
          {...propsWithItems}
        />
      </SearchData>,
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

    expect(history.location.search).toEqual('?showAll=1');
  });
  test('clears pagination when clicking on a refinement', async () => {
    const { history } = renderWithRouter(
      <SearchData>
        <FacetListBase
          {...propsWithItems}
        />
      </SearchData>,
      { route: '/search?subjects=Communication&page=3' },
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
    expect(history.location.search).toEqual('?subjects=Communication&showAll=1');
  });

  test('renders a typeahead dropdown', async () => {
    const { container } = renderWithRouter((
      <SearchData>
        <FacetListBase {...searchableDropdownProps} />
      </SearchData>
    ));

    // assert the "no options" message does not show
    expect(screen.queryByText(NO_OPTIONS_FOUND)).not.toBeInTheDocument();

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
    renderWithRouter(<SearchData><FacetListBase {...searchableDropdownProps} /></SearchData>);

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

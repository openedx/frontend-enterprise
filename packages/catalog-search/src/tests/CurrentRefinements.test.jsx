import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

import { CurrentRefinementsBase } from '../CurrentRefinements';
import {
  SUBJECTS,
  AVAILABLILITY,
  FACET_ATTRIBUTES,
} from '../data/tests/constants';
import { renderWithSearchContext } from './utils';

const mockedNavigator = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedNavigator,
  useLocation: () => ({
    pathname: '/',
    search: 'subjects=Computer Science&subjects=Communication',
  }),
}));

describe('<CurrentRefinements />', () => {
  const items = [
    {
      attribute: FACET_ATTRIBUTES.SUBJECTS,
      items: [
        { label: SUBJECTS.COMPUTER_SCIENCE },
        { label: SUBJECTS.COMMUNICATION },
      ],
    },
    {
      attribute: FACET_ATTRIBUTES.AVAILABLILITY,
      items: [
        { label: AVAILABLILITY.AVAILABLE_NOW },
        { label: AVAILABLILITY.UPCOMING },
      ],
    },
  ];

  test('renders refinements and supports viewing all active refinements', () => {
    renderWithSearchContext(<CurrentRefinementsBase items={items} />);

    // assert first 3 active refinements are visible
    expect(screen.queryByText(SUBJECTS.COMPUTER_SCIENCE)).toBeInTheDocument();
    expect(screen.queryByText(SUBJECTS.COMMUNICATION)).toBeInTheDocument();
    expect(screen.queryByText(AVAILABLILITY.AVAILABLE_NOW)).toBeInTheDocument();

    // assert additional refinement does not show, and a "+1" button shows
    expect(screen.queryByText(AVAILABLILITY.UPCOMING)).not.toBeInTheDocument();
    expect(screen.queryByText('+1', { exact: false })).toBeInTheDocument();
  });

  test('supports viewing all active refinements at once', async () => {
    const user = userEvent.setup();
    renderWithSearchContext(<CurrentRefinementsBase items={items} />);

    // click the "+1" button to show all refinements
    await user.click(screen.queryByText('+1', { exact: false }));

    // assert additional refinement now shows and the "+1" button disappears
    expect(screen.queryByText(AVAILABLILITY.UPCOMING)).toBeInTheDocument();
    expect(screen.queryByText('+1', { exact: false })).not.toBeInTheDocument();

    // click the "show less" button to show only 3 active refinements again
    await user.click(screen.queryByText('show less'));
    expect(screen.queryByText(AVAILABLILITY.UPCOMING)).not.toBeInTheDocument();
    expect(screen.queryByText('+1', { exact: false })).toBeInTheDocument();
  });

  test('supports removing an active refinement from the url by clicking on it', async () => {
    const user = userEvent.setup();
    renderWithSearchContext(
      <CurrentRefinementsBase items={items} />,
    );

    // click a specific refinement to remove it
    await user.click(screen.queryByText(SUBJECTS.COMMUNICATION));

    // assert the clicked refinement in the url is removed but others stay put
    expect(mockedNavigator).toHaveBeenCalledWith({ pathname: '/', search: 'subjects=Computer%20Science' });
  });
});

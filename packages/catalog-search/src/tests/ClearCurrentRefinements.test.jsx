import React from 'react';
import { renderWithRouter } from '@edx/frontend-enterprise-utils';
import userEvent from '@testing-library/user-event';
import { screen, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { IntlProvider } from '@edx/frontend-platform/i18n';
import ClearCurrentRefinements, { CLEAR_ALL_TEXT } from '../ClearCurrentRefinements';

import * as actions from '../data/actions';
import SearchData from '../SearchContext';

const ClearCurrentRefinementsWrapper = () => (
  <IntlProvider locale="en">
    <SearchData>
      <ClearCurrentRefinements variant="primary" />
    </SearchData>
  </IntlProvider>
);

describe('<ClearCurrentRefinements />', () => {
  test('renders the clear all button', () => {
    renderWithRouter(<ClearCurrentRefinementsWrapper />);

    expect(screen.queryByText(CLEAR_ALL_TEXT)).toBeInTheDocument();
  });

  test('dispatches the clear refinements action on click', async () => {
    const spy = jest.spyOn(actions, 'clearRefinementsAction');
    renderWithRouter(<ClearCurrentRefinementsWrapper />);

    await act(async () => {
      // click the clear all button
      await userEvent.click(screen.queryByText(CLEAR_ALL_TEXT));
    });

    // assert the clicked refinement in the url is removed but others stay put
    expect(spy).toHaveBeenCalledTimes(1);
  });
});

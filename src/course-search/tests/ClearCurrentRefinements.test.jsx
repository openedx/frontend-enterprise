import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ClearCurrentRefinements, { CLEAR_ALL_TEXT } from '../ClearCurrentRefinements';

import { renderWithRouter } from '../../utils/tests';
import * as actions from '../data/actions';
import SearchData from '../SearchContext';

describe('<ClearCurrentRefinements />', () => {
  test('renders the clear all button', () => {
    renderWithRouter(<SearchData><ClearCurrentRefinements variant="primary" /></SearchData>);

    expect(screen.queryByText(CLEAR_ALL_TEXT)).toBeInTheDocument();
  });

  test('dispatches the clear refinements action on click', async () => {
    const spy = jest.spyOn(actions, 'clearRefinementsAction');
    renderWithRouter(<SearchData><ClearCurrentRefinements /></SearchData>);

    // click a specific refinement to remove it
    fireEvent.click(screen.queryByText(CLEAR_ALL_TEXT));

    // assert the clicked refinement in the url is removed but others stay put
    expect(spy).toHaveBeenCalledTimes(1);
  });
});

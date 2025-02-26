import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

import LearningTypeRadioFacet from '../LearningTypeRadioFacet';

import { features } from '../config';
import { renderWithSearchContext } from './utils';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: '/',
  }),
}));

describe('<LearningTypeRadioFacet />', () => {
  beforeEach(() => {
    features.ENABlE_PATHWAYS = true;
  });

  test('LearningTypeRadioFacet is rendered and isnt bold initially', () => {
    renderWithSearchContext(<LearningTypeRadioFacet enablePathways />);
    expect(screen.getByText('Learning Type')).toBeInTheDocument();
    expect(screen.getByText('Learning Type').classList.contains('font-weight-bold')).toBeFalsy();
  });

  test('LearningTypeRadioFacet displays all the options', async () => {
    const user = userEvent.setup();
    renderWithSearchContext(<LearningTypeRadioFacet enablePathways />);
    expect(screen.getByText('Learning Type')).toBeInTheDocument();
    await user.click(screen.getByText('Learning Type'));
    await waitFor(() => {
      expect(screen.getByText('Any')).toBeInTheDocument();
      expect(screen.getByText('Courses')).toBeInTheDocument();
      expect(screen.getByText('Programs')).toBeInTheDocument();
      expect(screen.getByText('Pathways')).toBeInTheDocument();
    });
  });

  test('LearningTypeRadioFacet doesnt display pathways if false', async () => {
    const user = userEvent.setup();
    renderWithSearchContext(<LearningTypeRadioFacet enablePathways={false} />);
    expect(screen.getByText('Learning Type')).toBeInTheDocument();
    await user.click(screen.getByText('Learning Type'));
    await waitFor(() => {
      expect(screen.getByText('Any')).toBeInTheDocument();
      expect(screen.getByText('Courses')).toBeInTheDocument();
      expect(screen.getByText('Programs')).toBeInTheDocument();
      expect(screen.queryByText('Pathways')).not.toBeInTheDocument();
    });
  });

  test('LearningTypeRadioFacet isnt bold when content type Any is selected', async () => {
    const user = userEvent.setup();
    renderWithSearchContext(<LearningTypeRadioFacet enablePathways />);
    expect(screen.getByText('Learning Type')).toBeInTheDocument();
    await user.click(screen.getByText('Learning Type'));
    await waitFor(() => {
      expect(screen.getByTestId('learning-type-any')).toBeChecked();
      expect(screen.getByText('Learning Type').classList.contains('font-weight-bold')).toBeFalsy();
    });
  });

  test('LearningTypeRadioFacet is bold content type Courses is selected', async () => {
    const user = userEvent.setup();
    renderWithSearchContext(<LearningTypeRadioFacet enablePathways />);
    expect(screen.getByText('Learning Type')).toBeInTheDocument();
    await user.click(screen.getByText('Learning Type'));
    await user.click(screen.getByTestId('learning-type-courses'));
    await waitFor(() => {
      expect(screen.getByText('Learning Type').classList.contains('font-weight-bold')).toBeTruthy();
      expect(screen.getByText('Courses').classList.contains('is-refined')).toBeTruthy();
    });
  });

  test('LearningTypeRadioFacet is bold content type Courses is selected', async () => {
    const user = userEvent.setup();
    renderWithSearchContext(<LearningTypeRadioFacet enablePathways />);
    expect(screen.getByText('Learning Type')).toBeInTheDocument();
    await user.click(screen.getByText('Learning Type'));
    await user.click(screen.getByTestId('learning-type-programs'));
    await waitFor(() => {
      expect(screen.getByText('Learning Type').classList.contains('font-weight-bold')).toBeTruthy();
      expect(screen.getByText('Programs').classList.contains('is-refined')).toBeTruthy();
    });
  });

  test('LearningTypeRadioFacet is bold content type Courses is selected', async () => {
    const user = userEvent.setup();
    renderWithSearchContext(<LearningTypeRadioFacet enablePathways />);
    expect(screen.getByText('Learning Type')).toBeInTheDocument();
    await user.click(screen.getByText('Learning Type'));
    await user.click(screen.getByTestId('learning-type-pathways'));
    await waitFor(() => {
      expect(screen.getByText('Learning Type').classList.contains('font-weight-bold')).toBeTruthy();
      expect(screen.getByText('Pathways').classList.contains('is-refined')).toBeTruthy();
    });
  });
});

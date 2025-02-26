import { renderWithRouter } from '@edx/frontend-enterprise-utils';
import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchSuggestionItem from '../SearchSuggestionItem';

describe('<SeachSuggestionItem />', () => {
  test('renders course data', () => {
    const mockData = {
      course: {
        url: '/test-enterprise/course/edX+courseX',
        suggestionItemHandler: jest.fn(),
        disableSuggestionRedirect: true,
        hit: {
          content_type: 'course',
          key: 'edX+courseX',
          title: 'test-course',
          _highlightResult: { title: { value: '<em>course</em> <em>catalog</em>' } },
        },
      },
    };

    renderWithRouter(<SearchSuggestionItem
      url={mockData.course.url}
      suggestionItemHandler={mockData.course.suggestionItemHandler}
      hit={mockData.course.hit}
      disableSuggestionRedirect={mockData.course.disableSuggestionRedirect}
    />);
    expect(screen.getByRole('link', { name: 'course catalog edX' })).not.toBeNull();
    expect(screen.getByText('course')).not.toBeNull();
    expect(screen.getByText('catalog')).not.toBeNull();
    expect(screen.getByText('edX')).not.toBeNull();
  });

  test('renders program data', () => {
    const mockData = {
      program: {
        url: '/test-enterprise/program/456',
        suggestionItemHandler: jest.fn(),
        disableSuggestionRedirect: true,
        hit: {
          content_type: 'program',
          program_type: 'Professional Program',
          key: 'edX+programX',
          title: 'test-program',
          _highlightResult: { title: { value: '<em>program</em> <em>catalog</em>' } },
        },
      },
    };

    renderWithRouter(<SearchSuggestionItem
      url={mockData.program.url}
      suggestionItemHandler={mockData.program.suggestionItemHandler}
      hit={mockData.program.hit}
      disableSuggestionRedirect={mockData.program.disableSuggestionRedirect}
    />);
    expect(screen.getByRole('link', { name: 'program catalog edX Professional Program' })).not.toBeNull();
    expect(screen.getByText('program')).not.toBeNull();
    expect(screen.getByText('catalog')).not.toBeNull();
    expect(screen.getByText('edX')).not.toBeNull();
    expect(screen.getByText('Professional Program')).not.toBeNull();
  });

  test('redirects on click if disableSuggestionRedirect is false', async () => {
    const user = userEvent.setup();
    const mockData = {
      program: {
        url: '/test-enterprise/program/456',
        suggestionItemHandler: jest.fn(),
        disableSuggestionRedirect: false,
        hit: {
          content_type: 'program',
          program_type: 'Professional Program',
          key: 'edX+programX',
          title: 'test-program',
          _highlightResult: { title: { value: '<em>program</em> <em>catalog</em>' } },
        },
      },
    };
    const { container } = renderWithRouter(<SearchSuggestionItem
      url={mockData.program.url}
      suggestionItemHandler={mockData.program.suggestionItemHandler}
      hit={mockData.program.hit}
      disableSuggestionRedirect={mockData.program.disableSuggestionRedirect}
    />);
    await user.click(container.getElementsByClassName('suggestion-item')[0]);
    expect(window.location.pathname).toBe(mockData.program.url);
  });

  test('fires callback on click if disableSuggestionRedirect is true', async () => {
    const user = userEvent.setup();
    const mockData = {
      program: {
        url: '/test-enterprise/program/456',
        suggestionItemHandler: jest.fn(),
        disableSuggestionRedirect: true,
        hit: {
          content_type: 'program',
          program_type: 'Professional Program',
          key: 'edX+programX',
          title: 'test-program',
          _highlightResult: { title: { value: '<em>program</em> <em>catalog</em>' } },
        },
      },
    };

    const { container } = renderWithRouter(<SearchSuggestionItem
      url={mockData.program.url}
      suggestionItemHandler={mockData.program.suggestionItemHandler}
      hit={mockData.program.hit}
      disableSuggestionRedirect={mockData.program.disableSuggestionRedirect}
    />);
    await user.click(container.getElementsByClassName('suggestion-item')[0]);
    expect(mockData.program.suggestionItemHandler).toHaveBeenCalledWith(mockData.program.hit);
  });
});

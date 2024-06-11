import { renderWithRouter } from '@edx/frontend-enterprise-utils';
import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import PrequerySearchSuggestionItem from '../PrequerySearchSuggestionItem';

describe('<PrequerySearchSuggestionItem />', () => {
  test('sends optimizely event on prequery click', () => {
    const mockData = {
      url: '/test-enterprise/course/edX+courseX',
      optimizelySuggestionClickHandler: jest.fn(),
      hit: {
        partners: [{
          name: 'edX',
        }],
        learning_type: 'course',
        content_type: 'course',
        card_image_url: 'url.com',
        key: 'edX+courseX',
        title: 'basket weaving',
        _highlightResult: { title: { value: 'basket weaving' } },
      },
    };

    renderWithRouter(<PrequerySearchSuggestionItem
      url={mockData.url}
      optimizelySuggestionClickHandler={mockData.optimizelySuggestionClickHandler}
      hit={mockData.hit}
    />);
    expect(screen.getByRole('link', { name: 'basket weaving edX | course' }))
      .toHaveAttribute('href', '/test-enterprise/course/edX+courseX');
    userEvent.click(screen.getByText('basket weaving'));
    expect(mockData.optimizelySuggestionClickHandler.mock.calls.length).toBe(1);
  });
});

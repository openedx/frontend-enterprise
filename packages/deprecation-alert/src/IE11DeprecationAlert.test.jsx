import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import IE11DeprecationAlert from './IE11DeprecationAlert';

describe('IE11DeprecationAlert', () => {
    afterEach(() => jest.restoreAllMocks())

    it('should not render if the user agent is not IE11', () => {
        const { container } = render(<IE11DeprecationAlert />)
        expect(container.firstChild).toBeNull()
    })

    it('should render if the user agent is IE11', () => {
        jest.spyOn(window, 'navigator', 'get').mockImplementation(() => ({ userAgent: 'Trident/7.0' }))
        render(<IE11DeprecationAlert />)
        expect(screen.getByText(
            'Following Microsoft’s guidance, we will no longer support the use of Internet Explorer 11. '
          + 'Please use a recommended browser (Chrome, Firefox) to continue learning with edX.'))
    })

    it('should render custom content', () => {
        jest.spyOn(window, 'navigator', 'get').mockImplementation(() => ({ userAgent: 'Trident/7.0' }))
        render(<IE11DeprecationAlert>Deprecated!</IE11DeprecationAlert>)
        expect(screen.getByText('Deprecated!'))
    })
});

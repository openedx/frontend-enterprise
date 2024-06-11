import React from 'react';
import { renderWithRouter } from '@edx/frontend-enterprise-utils';
import { IntlProvider } from '@edx/frontend-platform/i18n';

import SearchData from '../SearchContext';

export const renderWithSearchContext = (children) => renderWithRouter(
  <IntlProvider locale="en">
    <SearchData>
      {children}
    </SearchData>
  </IntlProvider>,
);

export const renderWithSearchContextAndTracking = (children, trackingName) => renderWithRouter(
  <IntlProvider locale="en">
    <SearchData trackingName={trackingName}>
      {children}
    </SearchData>
  </IntlProvider>,
);

export const renderWithIntlProvider = (children) => renderWithRouter(
  <IntlProvider locale="en">
    {children}
  </IntlProvider>,
);

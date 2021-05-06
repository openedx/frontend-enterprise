import React from 'react';
import { renderWithRouter } from '@edx/frontend-enterprise-utils';

import SearchData from '../SearchContext';

export const renderWithSearchContext = (children) => renderWithRouter(
  <SearchData>
    {children}
  </SearchData>,
);

export const renderWithSearchContextAndTracking = (children, trackingName) => renderWithRouter(
  <SearchData trackingName={trackingName}>
    {children}
  </SearchData>,
);

import { sendTrackEvent } from '@edx/frontend-platform/analytics';

import sendEnterpriseTrackEvent from '../analytics';

jest.mock('@edx/frontend-platform/analytics');

describe('sendEnterpriseTrackEvent', () => {
  it('should call sendTrackEvent with the enterprise uuid in properties', () => {
    const mockEnterpriseUUID = '1';
    const mockEventName = 'event';
    const mockEventProperties = { property1: 'property 1' };
    sendEnterpriseTrackEvent(mockEnterpriseUUID, mockEventName, mockEventProperties);

    expect(sendTrackEvent).toHaveBeenCalledWith(mockEventName, {
      enterpriseUUID: mockEnterpriseUUID,
      ...mockEventProperties,
    });
  });
});

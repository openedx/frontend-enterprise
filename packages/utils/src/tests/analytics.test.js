import { sendTrackEvent } from '@edx/frontend-platform/analytics';

import { sendEnterpriseTrackEvent, sendEnterpriseTrackEventWithDelay, TRACK_EVENT_DELAY_MS } from '../analytics';

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

describe('sendEnterpriseTrackEventWithDelay', () => {
  jest.spyOn(global, 'setTimeout');

  const mockEnterpriseUUID = '1';
  const mockEventName = 'event';
  const mockEventProperties = { property1: 'property 1' };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call sendTrackEvent after default delay', async () => {
    await sendEnterpriseTrackEventWithDelay(mockEnterpriseUUID, mockEventName, mockEventProperties);

    expect(sendTrackEvent).toHaveBeenCalledWith(mockEventName, {
      enterpriseUUID: mockEnterpriseUUID,
      ...mockEventProperties,
    });

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), TRACK_EVENT_DELAY_MS);
  });

  it('should call sendTrackEvent after custom delay', async () => {
    const customDelay = 3000;
    await sendEnterpriseTrackEventWithDelay(mockEnterpriseUUID, mockEventName, mockEventProperties, customDelay);

    expect(sendTrackEvent).toHaveBeenCalledWith(mockEventName, {
      enterpriseUUID: mockEnterpriseUUID,
      ...mockEventProperties,
    });

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), customDelay);
  });
});

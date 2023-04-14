import { sendTrackEvent } from '@edx/frontend-platform/analytics';

export const sendEnterpriseTrackEvent = (enterpriseUUID, eventName, properties = {}) => {
  sendTrackEvent(
    eventName,
    {
      enterpriseUUID,
      ...properties,
    },
  );
};

// How long to delay an event, so that we allow enough time for any async analytics event call to resolve.
// https://segment.com/docs/connections/sources/catalog/libraries/website/javascript/
export const TRACK_EVENT_DELAY_MS = 300; // 300ms replicates Segment's ``trackLink`` function

/**
 * Delay for a certain period to allow time for analytics event call to resolve.
 */
export const sendEnterpriseTrackEventWithDelay = (
  enterpriseId,
  eventName,
  properties = {},
  delay = TRACK_EVENT_DELAY_MS,
) => {
  sendEnterpriseTrackEvent(
    enterpriseId,
    eventName,
    properties,
  );
  return new Promise((resolve) => { setTimeout(resolve, delay); });
};

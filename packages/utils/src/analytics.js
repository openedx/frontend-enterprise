import { sendTrackEvent } from '@edx/frontend-platform/analytics';

const sendEnterpriseTrackEvent = (enterpriseUUID, eventName, properties = {}) => {
  sendTrackEvent(
    eventName,
    {
      enterpriseUUID,
      ...properties,
    },
  );
};

export default sendEnterpriseTrackEvent;

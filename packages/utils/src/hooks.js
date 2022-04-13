import { useRef, useEffect, useState } from 'react';
import { getAuthenticatedHttpClient } from '@edx/frontend-platform/auth';

import getLearnerPortalLinks from './learnerPortalLinks';

export const useIsFirstRender = () => {
  console.log('useIsFirstRender');
  throw new Error('huzzah!');

  const isMountRef = useRef(true);
  useEffect(() => {
    isMountRef.current = false;
  }, []);
  return isMountRef.current;
};

export function useEnterpriseConfig(
  authenticatedUser,
  learnerPortalHostname,
  lmsBaseUrl,
) {
  const [
    enterpriseLearnerPortalLink,
    setEnterpriseLearnerPortalLink,
  ] = useState();
  const [
    enterpriseCustomerBrandingConfig,
    setEnterpriseCustomerBrandingConfig,
  ] = useState();

  useEffect(() => {
    const httpClient = getAuthenticatedHttpClient();
    getLearnerPortalLinks(
      httpClient,
      authenticatedUser,
      learnerPortalHostname,
      lmsBaseUrl,
    ).then((learnerPortalLinks) => {
      const preferredLearnerPortalLink = learnerPortalLinks.pop();
      if (preferredLearnerPortalLink) {
        const config = {
          logoAltText: preferredLearnerPortalLink.title,
          logoDestination: preferredLearnerPortalLink.url,
        };
        if (preferredLearnerPortalLink.branding_configuration) {
          config.logo = preferredLearnerPortalLink.branding_configuration.logo;
        }
        setEnterpriseCustomerBrandingConfig(config);

        setEnterpriseLearnerPortalLink({
          type: 'item',
          href: preferredLearnerPortalLink.url,
          content: 'Dashboard',
        });
      }
    });
  }, [authenticatedUser, learnerPortalHostname, lmsBaseUrl]);

  return {
    enterpriseLearnerPortalLink,
    enterpriseCustomerBrandingConfig,
  };
}

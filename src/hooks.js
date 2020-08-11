import { useEffect, useState } from 'react';
import { getAuthenticatedHttpClient } from '@edx/frontend-platform/auth';
import getLearnerPortalLinks from './learnerPortalLinks';
import { getSelectedEnterpriseUUID } from './utils';

export default function useEnterpriseConfig(authenticatedUser, learnerPortalHostname, lmsBaseUrl) {
  const [enterpriseLearnerPortalLink, setEnterpriseLearnerPortalLink] = useState();
  const [enterpriseCustomerBrandingConfig, setEnterpriseCustomerBrandingConfig] = useState();

  useEffect(
    () => {
      const httpClient = getAuthenticatedHttpClient();
      getLearnerPortalLinks(
        httpClient,
        authenticatedUser,
        learnerPortalHostname,
        lmsBaseUrl,
      ).then((learnerPortalLinks) => {
        const preferredUUID = getSelectedEnterpriseUUID(authenticatedUser);
        const preferredLearnerPortalLink = learnerPortalLinks.find(learnerPortalLink =>
          learnerPortalLink.uuid === preferredUUID);
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
    },
    [authenticatedUser, learnerPortalHostname, lmsBaseUrl],
  );

  return {
    enterpriseLearnerPortalLink,
    enterpriseCustomerBrandingConfig,
  };
}

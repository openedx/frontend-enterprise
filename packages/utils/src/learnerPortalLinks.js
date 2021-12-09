import { getSelectedEnterpriseUUID } from './utils';
import { isEnterpriseUser } from './roles';

/**
 * Fetches the metadata for the authenticated user's linked enterprise customers.
 *
 * @param {object} apiClient http client to use to make an API request (e.g., axios)
 * @param {string} [lmsBaseUrl] The base URL for the LMS
 * @param {string} [preferredEnterpriseUUID] Filters to only return data about this specific Enterprise.
 * @returns {promise} A promise that, when resolved, provides an API response from the `enterprise-customer`
 *  API endpoint.
 */
export const fetchEnterpriseCustomers = (
  apiClient,
  lmsBaseUrl = process.env.LMS_BASE_URL,
  preferredEnterpriseUUID = null,
) => {
  let url = `${lmsBaseUrl}/enterprise/api/v1/enterprise-customer/`;
  if (preferredEnterpriseUUID !== null) {
    const queryParams = new URLSearchParams();
    queryParams.append('uuid', preferredEnterpriseUUID);
    url += `?${queryParams.toString()}`;
  }
  return apiClient.get(url);
};

function getCacheKey(userId) {
  return `learnerPortalLinks:${userId}`;
}

function cacheLinks(userId, links) {
  sessionStorage.setItem(
    getCacheKey(userId),
    JSON.stringify({
      // Set one hour expiration
      expiration: Date.now() + (1 * 60 * 60 * 1000),
      links,
    }),
  );
}

async function fetchLearnerPortalLinks(
  apiClient,
  userId,
  preferredEnterpriseUUID,
  learnerPortalHostname = process.env.ENTERPRISE_LEARNER_PORTAL_HOSTNAME,
  lmsBaseUrl = process.env.LMS_BASE_URL,
) {
  const learnerPortalLinks = [];
  if (!learnerPortalHostname) {
    return learnerPortalLinks;
  }
  const response = await fetchEnterpriseCustomers(apiClient, lmsBaseUrl, preferredEnterpriseUUID);
  const enterpriseCustomers = response.data.results;
  try {
    for (let i = 0; i < enterpriseCustomers.length; i += 1) {
      const enterpriseCustomer = enterpriseCustomers[i];
      const enterpriseCustomerSlug = enterpriseCustomer.slug;
      const enableLearnerPortal = enterpriseCustomer.enable_learner_portal;
      const brandingConfiguration = enterpriseCustomer.branding_configuration;
      if (enableLearnerPortal && enterpriseCustomerSlug) {
        learnerPortalLinks.push({
          // branding_configuration is not always returned as part
          // of the response, so check if it exists before referencing fields.
          branding_configuration: brandingConfiguration ? {
            logo: brandingConfiguration.logo || null,
            primary_color: brandingConfiguration.primary_color || null,
            secondary_color: brandingConfiguration.secondary_color || null,
            tertiary_color: brandingConfiguration.tertiary_color || null,
          } : null,
          title: enterpriseCustomer.name,
          url: `${window.location.protocol}//${learnerPortalHostname}/${enterpriseCustomerSlug}`,
          uuid: enterpriseCustomer.uuid,
        });
      }
    }

    cacheLinks(userId, learnerPortalLinks);
  } catch (error) {
    // empty
  }

  return learnerPortalLinks;
}

function getCachedLearnerPortalLinks(userId) {
  const cacheKey = getCacheKey(userId);
  const cachedItem = sessionStorage.getItem(cacheKey);

  if (cachedItem) {
    const cachedLinks = JSON.parse(cachedItem);
    // Check cache expiration
    if (cachedLinks.expiration <= Date.now()) {
      sessionStorage.removeItem(cacheKey);
    } else {
      return cachedLinks.links;
    }
  }

  return null;
}

/**
 * Fetches the learner portal links available to an enterprise user.
 *
 * @param {object} apiClient http client to use to make an API request (e.g., axios)
 * @param {object} authenticatedUser An authenticated user object
 * @param {string} [learnerPortalHostname] Hostname for enterprise learner portal
 * @param {string} [lmsBaseUrl] The base URL for the LMS
 * @returns Array of objects with metadata about the learner portal URLs associated with the
 * enterprise customers for which the user is linked.
 */
export default async function getLearnerPortalLinks(
  apiClient,
  authenticatedUser,
  learnerPortalHostname = process.env.ENTERPRISE_LEARNER_PORTAL_HOSTNAME,
  lmsBaseUrl = process.env.LMS_BASE_URL,
) {
  let learnerPortalLinks = [];

  if (authenticatedUser !== null && isEnterpriseUser(authenticatedUser)) {
    const { userId } = authenticatedUser;
    const cachedLinks = getCachedLearnerPortalLinks(userId);

    if (cachedLinks) {
      learnerPortalLinks = learnerPortalLinks.concat(cachedLinks);
    } else {
      const preferredEnterpriseUUID = getSelectedEnterpriseUUID(authenticatedUser);
      const links = await fetchLearnerPortalLinks(
        apiClient,
        userId,
        preferredEnterpriseUUID,
        learnerPortalHostname,
        lmsBaseUrl,
      );
      learnerPortalLinks = learnerPortalLinks.concat(links);
    }
  }

  return learnerPortalLinks;
}

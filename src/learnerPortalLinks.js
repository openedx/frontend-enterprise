import { fetchEnterpriseCustomers } from './service';
import { isEnterpriseLearner } from './utils';

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

async function fetchLearnerPortalLinks(apiClient, userId) {
  const learnerPortalLinks = [];
  const response = await fetchEnterpriseCustomers(apiClient);
  const enterpriseCustomers = response.data.results;
  try {
    for (let i = 0; i < enterpriseCustomers.length; i += 1) {
      const enterpriseCustomer = enterpriseCustomers[i];
      const enableLearnerPortal = enterpriseCustomer.enable_learner_portal;
      const learnerPortalHostname = enterpriseCustomer.learner_portal_hostname;
      if (enableLearnerPortal && learnerPortalHostname) {
        learnerPortalLinks.push({
          title: `${enterpriseCustomer.name} Dashboard`,
          url: `https://${enterpriseCustomer.learner_portal_hostname}`,
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

export default async function getLearnerPortalLinks(apiClient) {
  let learnerPortalLinks = [];
  let accessToken = apiClient.getDecodedAccessToken();
  if (!accessToken) {
    await apiClient.refreshAccessToken();
    accessToken = apiClient.getDecodedAccessToken();
  }

  if (isEnterpriseLearner(accessToken)) {
    const userId = accessToken.user_id;
    const cachedLinks = getCachedLearnerPortalLinks(userId);

    if (cachedLinks != null) {
      learnerPortalLinks = learnerPortalLinks.concat(cachedLinks);
    } else {
      const links = await fetchLearnerPortalLinks(apiClient, userId);
      learnerPortalLinks = learnerPortalLinks.concat(links);
    }
  }

  return learnerPortalLinks;
}

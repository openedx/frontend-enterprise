/**
 * Given either an `enterpriseSlug` or an `enterpriseCustomerInviteKey`, returns a
 * URL to the enterprise proxy login page in the LMS. The proxy-login page appropriately
 * redirects enterprise users to the enterprise-specific logistration flow.
 *
 * @param {string} enterpriseSlug Slug of an enterprise customer
 * @param {string} enterpriseCustomerInviteKey UUID of an EnterpriseCustomerInviteKey
 * @returns URL of the enterprise proxy login page in the LMS.
 */
// eslint-disable-next-line import/prefer-default-export
export const getProxyLoginUrl = (enterpriseSlug, enterpriseCustomerInviteKey) => {
  const queryParams = new URLSearchParams();
  queryParams.append('next', global.location);
  if (enterpriseSlug) {
    queryParams.append('enterprise_slug', enterpriseSlug);
  }
  if (enterpriseCustomerInviteKey) {
    queryParams.append('enterprise_customer_invite_key', enterpriseCustomerInviteKey);
  }
  const proxyLoginUrl = `${process.env.LMS_BASE_URL}/enterprise/proxy-login/?${queryParams.toString()}`;
  return proxyLoginUrl;
};

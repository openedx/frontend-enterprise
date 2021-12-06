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

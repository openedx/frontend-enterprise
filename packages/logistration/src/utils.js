import qs from 'query-string';

// eslint-disable-next-line import/prefer-default-export
export const getProxyLoginUrl = (enterpriseSlug) => {
  const options = {
    enterprise_slug: enterpriseSlug,
    next: global.location,
  };
  const proxyLoginUrl = `${process.env.LMS_BASE_URL}/enterprise/proxy-login/?${qs.stringify(options)}`;
  return proxyLoginUrl;
};

import qs from 'querystring';

const fetchEnterpriseCustomers = (
  apiClient,
  lmsBaseUrl = process.env.LMS_BASE_URL,
  preferredEnterpriseUUID = null,
) => {
  let url = `${lmsBaseUrl}/enterprise/api/v1/enterprise-customer/`;
  if (preferredEnterpriseUUID !== null) {
    const queryParams = qs.stringify({
      uuid: preferredEnterpriseUUID,
    });
    url += `?${queryParams}`;
  }
  return apiClient.get(url);
};

// eslint-disable-next-line import/prefer-default-export
export { fetchEnterpriseCustomers };

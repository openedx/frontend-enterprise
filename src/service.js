const fetchEnterpriseCustomers = (apiClient, lmsBaseUrl = process.env.LMS_BASE_URL) => apiClient.get(`${lmsBaseUrl}/enterprise/api/v1/enterprise-customer/`);

// eslint-disable-next-line import/prefer-default-export
export { fetchEnterpriseCustomers };

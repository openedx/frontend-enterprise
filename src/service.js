const fetchEnterpriseCustomers = apiClient => apiClient.get(`${apiClient.authBaseUrl}/enterprise/api/v1/enterprise-customer/`);

// eslint-disable-next-line import/prefer-default-export
export { fetchEnterpriseCustomers };

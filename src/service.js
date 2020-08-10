const fetchEnterpriseCustomers = apiClient => apiClient.get(`${process.env.LMS_BASE_URL}/enterprise/api/v1/enterprise-customer/`);

// eslint-disable-next-line import/prefer-default-export
export { fetchEnterpriseCustomers };

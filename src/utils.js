function isEnterpriseLearner(accessToken) {
  if (accessToken && accessToken.roles) {
    const { roles } = accessToken;
    for (let i = 0; i < roles.length; i += 1) {
      if (roles[i].includes('enterprise_learner')) {
        return true;
      }
    }
  }

  return false;
}

// eslint-disable-next-line import/prefer-default-export
export { isEnterpriseLearner };

// eslint-disable-next-line import/prefer-default-export
export function isEnterpriseLearner(user) {
  if (user !== null && user.roles) {
    const { roles } = user;
    for (let i = 0; i < roles.length; i += 1) {
      if (roles[i].includes('enterprise_learner')) {
        return true;
      }
    }
  }

  return false;
}

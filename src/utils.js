import {
  ENTERPRISE_ADMIN,
  ENTERPRISE_CATALOG_ADMIN,
  ENTERPRISE_LEARNER,
  ENTERPRISE_OPENEDX_OPERATOR,
} from './constants';

const permissions = [
  ENTERPRISE_ADMIN,
  ENTERPRISE_CATALOG_ADMIN,
  ENTERPRISE_LEARNER,
  ENTERPRISE_OPENEDX_OPERATOR,
];

const isEnterpriseRole = role => permissions.some(permission => role.includes(permission));

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

export function isEnterpriseUser(user) {
  if (user !== null && user.roles) {
    const { roles } = user;
    return roles.filter(role => isEnterpriseRole(role)).length > 0;
  }
  return false;
}

export function getSelectedEnterpriseUUID(user) {
  /**
   * Selected Enterprise UUID is the UUID of the User's chosen Enterprise that
   * they are affiliated with if belonging to multiple. The user.roles array is
   * sorted where the earlier occuring element is the selected one where active=true.
   */
  if (user !== null && user.roles) {
    const { roles } = user;
    const filteredRole = roles.find(role => isEnterpriseRole(role));
    if (filteredRole) {
      const splitRole = roles[0].split(':');
      // A size of 2 indicates a successful split [0] being the role, [1] being the UUID
      if (splitRole.length === 2) {
        return splitRole[1];
      }
    }
  }
  return null;
}

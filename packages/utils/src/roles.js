import {
  ENTERPRISE_ADMIN,
  ENTERPRISE_CATALOG_ADMIN,
  ENTERPRISE_LEARNER,
  ENTERPRISE_OPENEDX_OPERATOR,
} from './constants';

const ENTERPRISE_PERMISSIONS = [
  ENTERPRISE_ADMIN,
  ENTERPRISE_CATALOG_ADMIN,
  ENTERPRISE_LEARNER,
  ENTERPRISE_OPENEDX_OPERATOR,
];

/**
 * Determines whether a role is an enterprise role.
 *
 * @param {string} role The name of a JWT role
 * @returns {boolean} True if the specified role is an enterprise role, otherwise false
 */
export const isEnterpriseRole = role => ENTERPRISE_PERMISSIONS.some(permission => role.includes(permission));

/**
 * Determines whether an authenticated user has a valid enterprise role, or the specified role.
 *
 * @param {object} user An authenticated user
 * @param {string} [role] Checks specified role against the role's for the user
 * @returns {boolean} true if the user has an enterprise role and/or the specified role, otherwise false
 */
export const isEnterpriseUser = (user, role) => {
  if (user?.roles) {
    const { roles } = user;
    if (role) {
      return !!roles.find(userRole => userRole === role);
    }
    return roles.some(userRole => isEnterpriseRole(userRole));
  }
  return false;
};

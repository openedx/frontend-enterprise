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
 * @param {string} [role] Checks specified role against the roles for the user
 * @param {string} [enterpriseUUID] Checks specified role against the roles for the user for the specific enterprise
 * @returns {boolean} true if the user has an enterprise role and/or the specified role and/or the specified role
 * for the specific enterprise, otherwise false
 */
export const isEnterpriseUser = (user, role, enterpriseUUID) => {
  const extractRoleNameFromJwtRole = jwtRole => jwtRole.split(':').shift();
  const extractEnterpriseFromJwtRole = jwtRole => jwtRole.split(':')[1];

  if (user?.roles) {
    const { roles } = user;
    if (enterpriseUUID && role) {
      return !!roles.find(userRole => extractRoleNameFromJwtRole(userRole) === role
        && extractEnterpriseFromJwtRole(userRole) === enterpriseUUID);
    }
    if (role) {
      return !!roles.find(userRole => extractRoleNameFromJwtRole(userRole) === role);
    }
    return roles.some(userRole => isEnterpriseRole(extractRoleNameFromJwtRole(userRole)));
  }

  return false;
};

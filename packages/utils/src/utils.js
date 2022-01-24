import { isEnterpriseRole } from './roles';

export const getSelectedEnterpriseUUID = (user) => {
  /**
   * Selected Enterprise UUID is the UUID of the User's chosen Enterprise that
   * they are affiliated with if belonging to multiple. The user.roles array is
   * sorted where the earlier occuring element is the selected one where active=true.
   */
  if (user?.roles) {
    const { roles } = user;
    const filteredRole = roles.find(role => isEnterpriseRole(role));
    if (filteredRole) {
      const splitRole = roles[0].split(':');
      // A size of 2 indicates a successful split; [0] being the role, [1] being the UUID
      if (splitRole.length === 2) {
        return splitRole[1];
      }
    }
  }
  return null;
};

export const isNull = (inputValue) => {
  const createArrayFromValue = (value) => {
    const values = [];

    if (Array.isArray(value)) {
      return value;
    }

    values.push(value);
    return values;
  };
  const values = createArrayFromValue(inputValue);
  return values.every(item => item === null);
};

/**
 * Determines whether a specified feature flag is enabled.
 *
 * @param {string} featureFlag
 * @returns true if feature flag is in `?feature` query parameter
 */
export function hasFeatureFlagEnabled(featureFlag) {
  const searchParams = new URLSearchParams(global.location.search);
  const features = searchParams.getAll('feature');
  return features.includes(featureFlag);
}

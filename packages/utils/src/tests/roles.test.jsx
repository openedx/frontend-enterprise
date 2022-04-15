import {
  ENTERPRISE_ADMIN,
  ENTERPRISE_CATALOG_ADMIN,
  ENTERPRISE_LEARNER,
  ENTERPRISE_OPENEDX_OPERATOR,
} from '../constants';

import { isEnterpriseRole, isEnterpriseUser } from '../roles';

describe('roles', () => {
  describe('isEnterpriseRole', () => {
    const VALID_ENTERPRISE_ROLES = [
      ENTERPRISE_ADMIN,
      ENTERPRISE_CATALOG_ADMIN,
      ENTERPRISE_LEARNER,
      ENTERPRISE_OPENEDX_OPERATOR,
    ];

    VALID_ENTERPRISE_ROLES.forEach((role) => {
      it(`returns true for valid enterprise role "${role}"`, () => {
        const isValidEnterpriseRole = isEnterpriseRole(role);
        expect(isValidEnterpriseRole).toEqual(true);
      });
    });

    it('returns false for invalid enterprise role', () => {
      const isValidEnterpriseRole = isEnterpriseRole('non_enterprise_role');
      expect(isValidEnterpriseRole).toEqual(false);
    });
  });

  describe('isEnterpriseUser', () => {
    it('returns false when authenticated user is missing', () => {
      const isValidEnterpriseUser = isEnterpriseUser(null);
      expect(isValidEnterpriseUser).toEqual(false);
    });

    it('returns false when authenticated user is missing roles', () => {
      const user = {};
      const isValidEnterpriseUser = isEnterpriseUser(user);
      expect(isValidEnterpriseUser).toEqual(false);
    });

    it('returns false when authenticated user has invalid enterprise role', () => {
      const user = {
        roles: ['non_enterprise_role:*'],
      };
      const isValidEnterpriseUser = isEnterpriseUser(user);
      expect(isValidEnterpriseUser).toEqual(false);
    });

    it('returns false when authenticated user does not have specified role', () => {
      const user = {
        roles: ['enterprise_learner:*'],
      };
      const isValidEnterpriseUser = isEnterpriseUser(user, ENTERPRISE_ADMIN);
      expect(isValidEnterpriseUser).toEqual(false);
    });

    it('returns true when authenticated user has specified role', () => {
      const user = {
        roles: ['enterprise_learner:*'],
      };
      const isValidEnterpriseUser = isEnterpriseUser(user, ENTERPRISE_LEARNER);
      expect(isValidEnterpriseUser).toEqual(true);
    });

    it('returns true when authenticated user has specified role for an enterprise', () => {
      const user = {
        roles: ['enterprise_admin:11', 'enterprise_admin:22', 'enterprise_learner:33'],
      };
      const isValidEnterpriseUser = isEnterpriseUser(user, ENTERPRISE_ADMIN, '22');
      expect(isValidEnterpriseUser).toEqual(true);
    });

    it('returns false when authenticated user does not have the specified role for an enterprise', () => {
      const user = {
        roles: ['enterprise_admin:11', 'enterprise_admin:22', 'enterprise_learner:33'],
      };
      const isValidEnterpriseUser = isEnterpriseUser(user, ENTERPRISE_ADMIN, '99');
      expect(isValidEnterpriseUser).toEqual(false);
    });
  });
});

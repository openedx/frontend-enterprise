import { hasFeatureFlagEnabled } from '../data/utils';

export const FEATURE_ENROLL_WITH_CODES = 'ENROLL_WITH_CODES';
export const FEATURE_LANGUAGE_FACET = 'LANGUAGE_FACET';
export const LEARNING_TYPE_FACET = 'LEARNING_TYPE_FACET';

// eslint-disable-next-line import/prefer-default-export
export const features = {
  ENROLL_WITH_CODES: process.env.FEATURE_ENROLL_WITH_CODES || hasFeatureFlagEnabled(FEATURE_ENROLL_WITH_CODES),
  LANGUAGE_FACET: process.env.FEATURE_LANGUAGE_FACET || hasFeatureFlagEnabled(FEATURE_LANGUAGE_FACET),
  LEARNING_TYPE_FACET: (
    process.env.LEARNING_TYPE_FACET || hasFeatureFlagEnabled(LEARNING_TYPE_FACET)
  ),
};

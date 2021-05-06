import { hasFeatureFlagEnabled } from '../data/utils';

export const FEATURE_ENROLL_WITH_CODES = 'ENROLL_WITH_CODES';
export const FEATURE_LANGUAGE_FACET = 'LANGUAGE_FACET';
export const FEATURE_PROGRAM_TITLES_FACET = 'PROGRAM_TITLES_FACET';

// eslint-disable-next-line import/prefer-default-export
export const features = {
  ENROLL_WITH_CODES: process.env.FEATURE_ENROLL_WITH_CODES || hasFeatureFlagEnabled(FEATURE_ENROLL_WITH_CODES),
  LANGUAGE_FACET: process.env.FEATURE_LANGUAGE_FACET || hasFeatureFlagEnabled(FEATURE_LANGUAGE_FACET),
  PROGRAM_TITLES_FACET: (
    process.env.FEATURE_PROGRAM_TITLES_FACET || hasFeatureFlagEnabled(FEATURE_PROGRAM_TITLES_FACET)
  ),
};

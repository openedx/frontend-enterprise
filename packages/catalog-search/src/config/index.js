import { hasFeatureFlagEnabled } from '@edx/frontend-enterprise-utils';

export const FEATURE_ENROLL_WITH_CODES = 'ENROLL_WITH_CODES';
export const FEATURE_LANGUAGE_FACET = 'LANGUAGE_FACET';
export const FEATURE_PROGRAM_TITLES_FACET = 'PROGRAM_TITLES_FACET';
export const LEARNING_TYPE_FACET = 'LEARNING_TYPE_FACET';
export const FEATURE_ENABLE_PATHWAYS = 'ENABLE_PATHWAYS';
export const FEATURE_SUBTITLE_FACET = 'SUBTITLE_FACET';

// eslint-disable-next-line import/prefer-default-export
export const features = {
  ENROLL_WITH_CODES: process.env.FEATURE_ENROLL_WITH_CODES || hasFeatureFlagEnabled(FEATURE_ENROLL_WITH_CODES),
  LANGUAGE_FACET: process.env.FEATURE_LANGUAGE_FACET || hasFeatureFlagEnabled(FEATURE_LANGUAGE_FACET),
  PROGRAM_TITLES_FACET: (
    process.env.FEATURE_PROGRAM_TITLES_FACET || hasFeatureFlagEnabled(FEATURE_PROGRAM_TITLES_FACET)
  ),
  LEARNING_TYPE_FACET: (
    process.env.LEARNING_TYPE_FACET || hasFeatureFlagEnabled(LEARNING_TYPE_FACET)
  ),
  ENABlE_PATHWAYS: (
    process.env.FEATURE_ENABLE_PATHWAYS || hasFeatureFlagEnabled(FEATURE_ENABLE_PATHWAYS)
  ),
  SUBTITLE_FACET: (
    process.env.FEATURE_SUBTITLE_FACET || hasFeatureFlagEnabled(FEATURE_SUBTITLE_FACET)
  ),
};

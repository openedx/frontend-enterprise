/* eslint-disable import/prefer-default-export */
import { COURSE_MODES_MAP } from './constants';

export const getBestCourseMode = (courseModes) => {
  const {
    VERIFIED, PROFESSIONAL, NO_ID_PROFESSIONAL, AUDIT, HONOR,
  } = COURSE_MODES_MAP;
  /** Returns the 'highest' course mode available.
    *  Modes are ranked ['verified', 'professional', 'no-id-professional', 'audit', 'honor'] */
  if (courseModes.includes(VERIFIED)) {
    return VERIFIED;
  }
  if (courseModes.includes(PROFESSIONAL)) {
    return PROFESSIONAL;
  }
  if (courseModes.includes(NO_ID_PROFESSIONAL)) {
    return NO_ID_PROFESSIONAL;
  }
  if (courseModes.includes(AUDIT)) {
    return AUDIT;
  }
  if (courseModes.includes(HONOR)) {
    return HONOR;
  }
  return null;
};

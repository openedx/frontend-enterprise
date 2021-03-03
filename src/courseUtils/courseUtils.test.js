import { getBestCourseMode } from '.';
import { COURSE_MODES_MAP } from './constants';

const {
  VERIFIED, PROFESSIONAL, NO_ID_PROFESSIONAL, AUDIT, HONOR,
} = COURSE_MODES_MAP;

describe('getBestCourseMode', () => {
  test.each([
    [[AUDIT, HONOR, VERIFIED, PROFESSIONAL, NO_ID_PROFESSIONAL], VERIFIED],
    [[NO_ID_PROFESSIONAL, AUDIT, PROFESSIONAL, NO_ID_PROFESSIONAL], PROFESSIONAL],
    [[AUDIT, NO_ID_PROFESSIONAL, HONOR], NO_ID_PROFESSIONAL],
    [[HONOR, AUDIT], AUDIT],
    [[HONOR], HONOR],
    [[], null],
  ])('returns the correct course mode %i', (courseModes, expectedResult) => {
    const result = getBestCourseMode(courseModes);
    expect(result).toEqual(expectedResult);
  });
});

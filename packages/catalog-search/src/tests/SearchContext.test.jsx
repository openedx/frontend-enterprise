import { SHOW_ALL_NAME } from '../data/constants';
import { getRefinementsToSet } from '../SearchContext';

const activeFacetAttributes = ['subject', 'language'];

describe('getRefinementsToSet', () => {
  it('converts query params that are arrays into arrays', () => {
    const queryParams = {
      subject: ['science', 'math'],
      language: 'english',
    };
    const expectedRefinements = {
      subject: ['science', 'math'],
      language: ['english'],
    };
    expect(getRefinementsToSet(queryParams, activeFacetAttributes)).toEqual(expectedRefinements);
  });
  it('converts boolean query params to a number', () => {
    expect(getRefinementsToSet({ [SHOW_ALL_NAME]: '0' }, [])).toEqual({ [SHOW_ALL_NAME]: 0 });
  });
  it('sets non-array, non-boolean query params to their value', () => {
    const queryParams = { subject: 'foo', language: '1235' };
    const expected = { subject: ['foo'], language: ['1235'] };
    expect(getRefinementsToSet(queryParams, activeFacetAttributes)).toEqual(expected);
  });
  it('does not modify non-active facets', () => {
    const queryParams = {
      features: 'ENROLL_WITH_CODES, ANOTHER_FEATURE',
      anotherkey: '0',
      subject: ['bears', 'tigers'],
    };
    const expected = { ...queryParams, subject: ['bears', 'tigers'] };
    expect(getRefinementsToSet(queryParams, activeFacetAttributes)).toEqual(expected);
  });
});

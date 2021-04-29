import { SUBJECTS } from './constants';
import {
  sortItemsByLabelAsc,
  updateRefinementsFromQueryParams,
  paramsToObject,
  hasFeatureFlagEnabled,
} from '../utils';

describe('sortItemsByLabelAsc', () => {
  const APPLE = 'apple';
  const BANANA = 'banana';
  const CHERRY = 'cherry';

  test('correctly sorts items by label alphabetically', () => {
    const items = [{
      label: CHERRY,
    }, {
      label: APPLE,
    }, {
      label: BANANA,
    }];

    const expectedSortedItems = [{
      label: APPLE,
    }, {
      label: BANANA,
    }, {
      label: CHERRY,
    }];

    const sortedItems = sortItemsByLabelAsc(items);
    expect(sortedItems).toEqual(expectedSortedItems);
  });
});

describe('updateRefinementsFromQueryParams', () => {
  test('returns the correctly updated refinements', () => {
    const refinements = {
      subjects: [SUBJECTS.COMPUTER_SCIENCE, SUBJECTS.COMMUNICATION],
    };
    const expectedUpdatedRefinements = {
      subjects: `${SUBJECTS.COMPUTER_SCIENCE},${SUBJECTS.COMMUNICATION}`,
    };

    const updatedRefinements = updateRefinementsFromQueryParams(refinements);
    expect(updatedRefinements).toEqual(expectedUpdatedRefinements);
  });
});

describe('paramsToObject', () => {
  test('it converts string to object', () => {
    const url = new URL('http://ayylmao.com?foo=bar');
    const searchParams = new URLSearchParams(url.search);
    const endingObject = paramsToObject(searchParams);
    expect(endingObject).toEqual({ foo: 'bar' });
  });
});

describe('hasFeatureFlagEnabled', () => {
  const { location } = window;

  beforeAll(() => {
    delete window.location;
    window.location = { search: '?features=ayy,lmao' };
  });

  afterAll(() => {
    window.location = location;
  });

  test('properly determines feature flags from query params', () => {
    expect(hasFeatureFlagEnabled('ayy')).toEqual(true);
    expect(hasFeatureFlagEnabled('lmao')).toEqual(true);
    expect(hasFeatureFlagEnabled('foobar')).toEqual(false);
  });
});

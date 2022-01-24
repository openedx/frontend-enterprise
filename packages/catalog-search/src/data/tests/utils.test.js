import {
  sortItemsByLabelAsc,
  searchParamsToObject,
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

describe('searchParamsToObject', () => {
  test('it converts string to object', () => {
    const url = new URL('http://ayylmao.com?foo=bar&foo=bar2');
    const searchParams = new URLSearchParams(url.search);
    const endingObject = searchParamsToObject(searchParams);
    expect(endingObject).toEqual({ foo: ['bar', 'bar2'] });
  });
});

import { renderHook } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { SUBJECTS, AVAILABLILITY, FACET_ATTRIBUTES } from './constants';
import {
  useActiveRefinementsByAttribute,
  useActiveRefinementsAsFlatArray,
  useNbHitsFromSearchResults,
  getCatalogString,
} from '../hooks';

jest.mock('react-router-dom', () => ({
  useLocation: () => ({
    search: '?q=test%20query&subjects=Computer%20Science,Communication&availability=Upcoming&ignore=true',
  }),
  useHistory: () => ({ push: jest.fn }),
}));
jest.mock('../../config', () => ({
  features: { ENROLL_WITH_CODES: true },
}));

describe('useActiveRefinementsByAttribute and useActiveRefinementsAsFlatArray hooks', () => {
  const items = [{
    attribute: FACET_ATTRIBUTES.SUBJECTS,
    items: [{ label: SUBJECTS.COMPUTER_SCIENCE }, { label: SUBJECTS.COMMUNICATION }],
  }, {
    attribute: FACET_ATTRIBUTES.AVAILABLILITY,
    items: [{ label: AVAILABLILITY.AVAILABLE_NOW }],
  }];

  describe('useActiveRefinementsByAttribute', () => {
    test('returns expected data given specific items', () => {
      const { result } = renderHook(() => useActiveRefinementsByAttribute(items));

      const refinements = result.current;

      expect(refinements).toEqual({
        subjects: [{ label: SUBJECTS.COMPUTER_SCIENCE }, { label: SUBJECTS.COMMUNICATION }],
        availability: [{ label: AVAILABLILITY.AVAILABLE_NOW }],
      });
    });
  });

  describe('useActiveRefinementsAsFlatArray', () => {
    test('returns expected data given specific items', () => {
      const { result } = renderHook(() => useActiveRefinementsAsFlatArray(items));

      const refinementsAsFlatArray = result.current;

      expect(refinementsAsFlatArray).toEqual([
        { label: SUBJECTS.COMPUTER_SCIENCE, attribute: FACET_ATTRIBUTES.SUBJECTS },
        { label: SUBJECTS.COMMUNICATION, attribute: FACET_ATTRIBUTES.SUBJECTS },
        { label: AVAILABLILITY.AVAILABLE_NOW, attribute: FACET_ATTRIBUTES.AVAILABLILITY },
      ]);
    });
  });
});

describe('getCatalogString helper', () => {
  test('returns correct string for one catalog', () => {
    expect(getCatalogString(['catalog'])).toEqual('enterprise_catalog_uuids:catalog');
  });
  test('return correct catalog string for multiple catalogs', () => {
    const catalogs = ['catalog1', 'catalog2'];
    expect(getCatalogString(catalogs))
      .toEqual('enterprise_catalog_uuids:catalog1 OR enterprise_catalog_uuids:catalog2');
  });
});

describe('useNbHitsFromSearchResults hook', () => {
  test('returns non-null number of hits', () => {
    const searchResults = { nbHits: 10 };

    const { result } = renderHook(() => useNbHitsFromSearchResults(searchResults));
    const nbHits = result.current;

    expect(nbHits).toEqual(10);
  });

  test('returns null if searchResults is not given', () => {
    const searchResults = undefined;

    const { result } = renderHook(() => useNbHitsFromSearchResults(searchResults));
    const nbHits = result.current;

    expect(nbHits).toEqual(null);
  });

  test('returns null if nbHits is null', () => {
    const searchResults = { nbHits: null };

    const { result } = renderHook(() => useNbHitsFromSearchResults(searchResults));
    const nbHits = result.current;

    expect(nbHits).toEqual(null);
  });
});

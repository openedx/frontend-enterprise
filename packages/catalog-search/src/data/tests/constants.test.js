import {
  SEARCH_FACET_FILTERS,
  ADDITIONAL_FACET_FILTERS,
} from '../constants';

jest.mock('../../config', () => ({
  __esModule: true,
  features: {
    ENROLL_WITH_CODES: true,
    LANGUAGE_FACET: true,
    PROGRAM_TITLES_FACET: true,
    LEARNING_TYPE_FACET: true,
    ENABLE_PATHWAYS: true,
    SUBTITLE_FACET: true,
  },
}));

describe('Constants', () => {
  test('Search facet filters are defined correctly', () => {
    expect(SEARCH_FACET_FILTERS).toHaveLength(9);
  });

  test('Additional facet filters are defined correctly', () => {
    expect(Array.isArray(ADDITIONAL_FACET_FILTERS)).toBe(true);
  });

  test('Language facet filter is added when feature is enabled', () => {
    const languageFacet = SEARCH_FACET_FILTERS.find(
      (facet) => facet.attribute === 'language',
    );
    expect(languageFacet).toBeDefined();
    expect(languageFacet.title).toBe('Language');
    expect(languageFacet.isSortedAlphabetical).toBe(true);
  });

  test('Learning type facet filter is added when feature is enabled', () => {
    const learningTypeFacet = SEARCH_FACET_FILTERS.find(
      (facet) => facet.attribute === 'content_type',
    );
    expect(learningTypeFacet).toBeDefined();
    expect(learningTypeFacet.title).toBe('Learning type');
    expect(learningTypeFacet.noDisplay).toBe(true);
  });

  test('Subtitle facet filter is added when feature is enabled', () => {
    const subtitleFacet = SEARCH_FACET_FILTERS.find(
      (facet) => facet.attribute === 'transcript_languages',
    );
    expect(subtitleFacet).toBeDefined();
    expect(subtitleFacet.title).toBe('Subtitle');
    expect(subtitleFacet.isSortedAlphabetical).toBe(true);
  });
});

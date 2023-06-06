import { features } from '../config';

export const SHOW_ALL_NAME = 'showAll';

export const SEARCH_FACET_FILTERS = [
  {
    attribute: 'skill_names',
    title: 'Skills',
    typeaheadOptions: {
      placeholder: 'Find a skill...',
      ariaLabel: 'Type to find a skill',
      minLength: 3,
    },
  },
  {
    attribute: 'subjects',
    title: 'Subject',
    typeaheadOptions: {
      placeholder: 'Find a subject...',
      ariaLabel: 'Type to find a subject',
      minLength: 3,
    },
  },
  {
    attribute: 'partners.name',
    title: 'Partner',
    isSortedAlphabetical: true,
    typeaheadOptions: {
      placeholder: 'Find a partner...',
      ariaLabel: 'Type to find a partner',
      minLength: 3,
    },
  },
  {
    attribute: (features.PROGRAM_TITLES_FACET ? 'program_titles' : 'programs'),
    title: 'Program',
    isSortedAlphabetical: true,
    typeaheadOptions: {
      placeholder: 'Find a program...',
      ariaLabel: 'Type to find a program',
      minLength: 3,
    },
  },
  {
    attribute: 'level_type',
    title: 'Level',
  },
  {
    attribute: 'availability',
    title: 'Availability',
  },
];

export const ADDITIONAL_FACET_FILTERS = ['skills.name', 'name', 'current_job'];

export const URL_FILTERS = ['hide_cards'];

if (features.LANGUAGE_FACET) {
  SEARCH_FACET_FILTERS.push({
    attribute: 'language',
    title: 'Language',
    isSortedAlphabetical: true,
  });
}

if (features.LEARNING_TYPE_FACET) {
  SEARCH_FACET_FILTERS.push({
    attribute: 'content_type',
    title: 'Learning type',
    // algolia wont filter if not passed through connectRefinementsList, if we add without hiding, there will be a new
    // facet created with courses and programs dropdown items only.
    noDisplay: true,
  });
}

export const BOOLEAN_FILTERS = [SHOW_ALL_NAME];
export const QUERY_PARAM_FOR_SEARCH_QUERY = 'q';
export const QUERY_PARAM_FOR_PAGE = 'page';
export const QUERY_PARAM_FOR_FEATURE_FLAGS = 'features';
export const QUERY_PARAMS_TO_IGNORE = [
  QUERY_PARAM_FOR_SEARCH_QUERY,
  QUERY_PARAM_FOR_PAGE,
  QUERY_PARAM_FOR_FEATURE_FLAGS,
  SHOW_ALL_NAME,
];
export const NUM_CURRENT_REFINEMENTS_TO_DISPLAY = 3;
export const NUM_RESULTS_PER_PAGE = 24;

export const MAX_NUM_SUGGESTIONS = 3;

export const NO_OPTIONS_FOUND = 'No options found.';

export const STYLE_VARIANTS = {
  default: 'default',
  inverse: 'inverse',
};

export const LEARNING_TYPE_COURSE = 'course';
export const LEARNING_TYPE_PROGRAM = 'program';
export const LEARNING_TYPE_PATHWAY = 'learnerpathway';
export const LEARNING_TYPE_EXECUTIVE_EDUCATION = 'Executive Education';

export const COURSE_TYPE_EXECUTIVE_EDUCATION = 'executive-education-2u';

export const ALGOLIA_ATTRIBUTES_TO_RETRIEVE = ['*'];

export const SEARCH_BOX_CLASS_NAME = 'search-box-input';
export const DEBOUNCE_TIME_MS = 500;

import { defineMessages } from '@edx/frontend-platform/i18n';
import { features } from './config';

const messages = defineMessages({
  skillsTitle: {
    id: 'search.facetFilters.skills.title',
    defaultMessage: 'Skills',
    description: 'Title for the skills facet filter',
  },
  skillsTypeaheadPlaceholder: {
    id: 'search.facetFilters.skills.typeahead.placeholder',
    defaultMessage: 'Find a skill...',
    description: 'Placeholder for the skills typeahead input',
  },
  skillsTypeaheadAriaLabel: {
    id: 'search.facetFilters.skills.typeahead.aria.label',
    defaultMessage: 'Type to find a skill',
    description: 'Aria label for the skills typeahead input',
  },
  subjectsTitle: {
    id: 'search.facetFilters.subjects.title',
    defaultMessage: 'Subject',
    description: 'Title for the subjects facet filter',
  },
  subjectsTypeaheadPlaceholder: {
    id: 'search.facetFilters.subjects.typeahead.placeholder',
    defaultMessage: 'Find a subject...',
    description: 'Placeholder for the subjects typeahead input',
  },
  subjectsTypeaheadAriaLabel: {
    id: 'search.facetFilters.subjects.typeahead.aria.label',
    defaultMessage: 'Type to find a subject',
    description: 'Aria label for the subjects typeahead input',
  },
  partnersTitle: {
    id: 'search.facetFilters.partners.title',
    defaultMessage: 'Partner',
    description: 'Title for the partners facet filter',
  },
  partnersTypeaheadPlaceholder: {
    id: 'search.facetFilters.partners.typeahead.placeholder',
    defaultMessage: 'Find a partner...',
    description: 'Placeholder for the partners typeahead input',
  },
  partnersTypeaheadAriaLabel: {
    id: 'search.facetFilters.partners.typeahead.aria.label',
    defaultMessage: 'Type to find a partner',
    description: 'Aria label for the partners typeahead input',
  },
  programsTitle: {
    id: 'search.facetFilters.programs.title',
    defaultMessage: 'Program',
    description: 'Title for the programs facet filter',
  },
  programsTypeaheadPlaceholder: {
    id: 'search.facetFilters.programs.typeahead.placeholder',
    defaultMessage: 'Find a program...',
    description: 'Placeholder for the programs typeahead input',
  },
  programsTypeaheadAriaLabel: {
    id: 'search.facetFilters.programs.typeahead.aria.label',
    defaultMessage: 'Type to find a program',
    description: 'Aria label for the programs typeahead input',
  },
  levelTitle: {
    id: 'search.facetFilters.level.title',
    defaultMessage: 'Level',
    description: 'Title for the level facet filter',
  },
  availabilityTitle: {
    id: 'search.facetFilters.availability.title',
    defaultMessage: 'Availability',
    description: 'Title for the availability facet filter',
  },
  languageTitle: {
    id: 'search.facetFilters.language.title',
    defaultMessage: 'Language',
    description: 'Title for the language facet filter',
  },
  learningTypeTitle: {
    id: 'search.facetFilters.learningType.title',
    defaultMessage: 'Learning Type',
    description: 'Title for the learning type facet filter',
  },
  subtitleTitle: {
    id: 'search.facetFilters.subtitle.title',
    defaultMessage: 'Subtitle',
    description: 'Title for the subtitle facet filter',
  },
});

// eslint-disable-next-line import/prefer-default-export
export function getSearchFacetFilters(intl) {
  const searchFacetFilters = [
    {
      attribute: 'skill_names',
      title: intl.formatMessage(messages.skillsTitle),
      typeaheadOptions: {
        placeholder: intl.formatMessage(messages.skillsTypeaheadPlaceholder),
        ariaLabel: intl.formatMessage(messages.skillsTypeaheadAriaLabel),
        minLength: 3,
      },
    },
    {
      attribute: 'subjects',
      title: intl.formatMessage(messages.subjectsTitle),
      typeaheadOptions: {
        placeholder: intl.formatMessage(messages.subjectsTypeaheadPlaceholder),
        ariaLabel: intl.formatMessage(messages.subjectsTypeaheadAriaLabel),
        minLength: 3,
      },
    },
    {
      attribute: 'partners.name',
      title: intl.formatMessage(messages.partnersTitle),
      isSortedAlphabetical: true,
      typeaheadOptions: {
        placeholder: intl.formatMessage(messages.partnersTypeaheadPlaceholder),
        ariaLabel: intl.formatMessage(messages.partnersTypeaheadAriaLabel),
        minLength: 3,
      },
    },
    {
      attribute: (features.PROGRAM_TITLES_FACET ? 'program_titles' : 'programs'),
      title: intl.formatMessage(messages.programsTitle),
      isSortedAlphabetical: true,
      typeaheadOptions: {
        placeholder: intl.formatMessage(messages.programsTypeaheadPlaceholder),
        ariaLabel: intl.formatMessage(messages.programsTypeaheadAriaLabel),
        minLength: 3,
      },
    },
    {
      attribute: 'level_type',
      title: intl.formatMessage(messages.levelTitle),
    },
    {
      attribute: 'availability',
      title: intl.formatMessage(messages.availabilityTitle),
    },
  ];

  if (features.LANGUAGE_FACET) {
    searchFacetFilters.push({
      attribute: 'language',
      title: intl.formatMessage(messages.languageTitle),
      isSortedAlphabetical: true,
    });
  }

  if (features.LEARNING_TYPE_FACET) {
    searchFacetFilters.push({
      attribute: 'content_type',
      title: intl.formatMessage(messages.learningTypeTitle),
      // algolia won't filter if not passed through connectRefinementsList,
      // if we add without hiding, there will be a new facet created with courses and programs dropdown items only.
      noDisplay: true,
    });
  }

  if (features.SUBTITLE_FACET) {
    searchFacetFilters.push({
      attribute: 'transcript_languages',
      title: intl.formatMessage(messages.subtitleTitle),
      isSortedAlphabetical: true,
    });
  }
  return searchFacetFilters;
}

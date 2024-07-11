import { defineMessages } from '@edx/frontend-platform/i18n';
import {
  LEARNING_TYPE_PATHWAY,
  LEARNING_TYPE_COURSE,
  LEARNING_TYPE_PROGRAM,
  LEARNING_TYPE_VIDEO,
} from './data/constants';

const AVAILABILITY_AVAILABLE_NOW = 'Available Now';
const AVAILABILITY_UPCOMING = 'Upcoming';
const AVAILABILITY_STARTING_SOON = 'Starting Soon';
const AVAILABILITY_ARCHIVED = 'Archived';

const LEVEL_INTRODUCTORY = 'Introductory';
const LEVEL_INTERMEDIATE = 'Intermediate';
const LEVEL_ADVANCED = 'Advanced';

const LANGUAGE_ENGLISH = 'English';
const LANGUAGE_SPANISH = 'Spanish';
const LANGUAGE_FRENCH = 'French';
const LANGUAGE_ITALIAN = 'Italian';
const LANGUAGE_ARABIC = 'Arabic';
const LANGUAGE_CHINESE_MANDARIN = 'Chinese - Mandarin';
const LANGUAGE_GERMAN = 'German';
const LANGUAGE_CHINESE_CHINA = 'Chinese - China';
const LANGUAGE_PORTUGUESE = 'Portuguese';
const LANGUAGE_CHINESE_SIMPLIFIED = 'Chinese - Simplified';
const LANGUAGE_JAPANESE = 'Japanese';
const LANGUAGE_RUSSIAN = 'Russian';
const LANGUAGE_URDU = 'Urdu';
const LANGUAGE_BENGALI = 'Bengali';
const LANGUAGE_DUTCH = 'Dutch';
const LANGUAGE_FARSI = 'Farsi';
const LANGUAGE_HINDI = 'Hindi';
const LANGUAGE_HUNGARIAN = 'Hungarian';
const LANGUAGE_MALDIVIAN = 'Maldivian';
const LANGUAGE_SINHALESE = 'Sinhalese';
const LANGUAGE_TIBETAN = 'Tibetan';

const messages = defineMessages({
  [LEARNING_TYPE_COURSE]: {
    id: 'search.facetFilters.filterTitle.course',
    defaultMessage: 'Course',
    description: 'Title for the course filter.',
  },
  [LEARNING_TYPE_PROGRAM]: {
    id: 'search.facetFilters.filterTitle.program',
    defaultMessage: 'Program',
    description: 'Title for the program filter.',
  },
  [LEARNING_TYPE_PATHWAY]: {
    id: 'search.facetFilters.filterTitle.pathway',
    defaultMessage: 'Pathway',
    description: 'Title for the pathway filter.',
  },
  [LEARNING_TYPE_VIDEO]: {
    id: 'search.facetFilters.filterTitle.video',
    defaultMessage: 'Video',
    description: 'Title for the video filter.',
  },
  [AVAILABILITY_AVAILABLE_NOW]: {
    id: 'search.facetFilters.availability.availableNow',
    defaultMessage: 'Available Now',
    description: 'Option label for the available now filter.',
  },
  [AVAILABILITY_UPCOMING]: {
    id: 'search.facetFilters.availability.upcoming',
    defaultMessage: 'Upcoming',
    description: 'Option label for the upcoming filter.',
  },
  [AVAILABILITY_STARTING_SOON]: {
    id: 'search.facetFilters.availability.startingSoon',
    defaultMessage: 'Starting Soon',
    description: 'Option label for the starting soon filter.',
  },
  [AVAILABILITY_ARCHIVED]: {
    id: 'search.facetFilters.availability.archived',
    defaultMessage: 'Archived',
    description: 'Option label for the archived filter.',
  },
  [LEVEL_INTRODUCTORY]: {
    id: 'search.facetFilters.level.introductory',
    defaultMessage: 'Introductory',
    description: 'Option label for the introductory filter.',
  },
  [LEVEL_INTERMEDIATE]: {
    id: 'search.facetFilters.level.intermediate',
    defaultMessage: 'Intermediate',
    description: 'Option label for the intermediate filter.',
  },
  [LEVEL_ADVANCED]: {
    id: 'search.facetFilters.level.advanced',
    defaultMessage: 'Advanced',
    description: 'Option label for the advanced filter.',
  },
  [LANGUAGE_ENGLISH]: {
    id: 'search.facetFilters.language.english',
    defaultMessage: 'English',
    description: 'Option label for the english language filter.',
  },
  [LANGUAGE_SPANISH]: {
    id: 'search.facetFilters.language.spanish',
    defaultMessage: 'Spanish',
    description: 'Option label for the spanish language filter.',
  },
  [LANGUAGE_FRENCH]: {
    id: 'search.facetFilters.language.french',
    defaultMessage: 'French',
    description: 'Option label for the french language filter.',
  },
  [LANGUAGE_ITALIAN]: {
    id: 'search.facetFilters.language.italian',
    defaultMessage: 'Italian',
    description: 'Option label for the italian language filter.',
  },
  [LANGUAGE_ARABIC]: {
    id: 'search.facetFilters.language.arabic',
    defaultMessage: 'Arabic',
    description: 'Option label for the arabic language filter.',
  },
  [LANGUAGE_CHINESE_MANDARIN]: {
    id: 'search.facetFilters.language.chineseMandarin',
    defaultMessage: 'Chinese - Mandarin',
    description: 'Option label for the chinese mandarin language filter.',
  },
  [LANGUAGE_GERMAN]: {
    id: 'search.facetFilters.language.german',
    defaultMessage: 'German',
    description: 'Option label for the german language filter.',
  },
  [LANGUAGE_CHINESE_CHINA]: {
    id: 'search.facetFilters.language.chineseChina',
    defaultMessage: 'Chinese - China',
    description: 'Option label for the chinese language filter.',
  },
  [LANGUAGE_PORTUGUESE]: {
    id: 'search.facetFilters.language.portuguese',
    defaultMessage: 'Portuguese',
    description: 'Option label for the portuguese language filter.',
  },
  [LANGUAGE_CHINESE_SIMPLIFIED]: {
    id: 'search.facetFilters.language.chineseSimplified',
    defaultMessage: 'Chinese - Simplified',
    description: 'Option label for the chinese simplified language filter.',
  },
  [LANGUAGE_JAPANESE]: {
    id: 'search.facetFilters.language.japanese',
    defaultMessage: 'Japanese',
    description: 'Option label for the japanese language filter.',
  },
  [LANGUAGE_RUSSIAN]: {
    id: 'search.facetFilters.language.russian',
    defaultMessage: 'Russian',
    description: 'Option label for the russian language filter.',
  },
  [LANGUAGE_URDU]: {
    id: 'search.facetFilters.language.urdu',
    defaultMessage: 'Urdu',
    description: 'Option label for the urdu language filter.',
  },
  [LANGUAGE_BENGALI]: {
    id: 'search.facetFilters.language.bengali',
    defaultMessage: 'Bengali',
    description: 'Option label for the bengali language filter.',
  },
  [LANGUAGE_DUTCH]: {
    id: 'search.facetFilters.language.dutch',
    defaultMessage: 'Dutch',
    description: 'Option label for the dutch language filter.',
  },
  [LANGUAGE_FARSI]: {
    id: 'search.facetFilters.language.farsi',
    defaultMessage: 'Farsi',
    description: 'Option label for the farsi language filter.',
  },
  [LANGUAGE_HINDI]: {
    id: 'search.facetFilters.language.hindi',
    defaultMessage: 'Hindi',
    description: 'Option label for the hindi language filter.',
  },
  [LANGUAGE_HUNGARIAN]: {
    id: 'search.facetFilters.language.hungarian',
    defaultMessage: 'Hungarian',
    description: 'Option label for the hungarian language filter.',
  },
  [LANGUAGE_MALDIVIAN]: {
    id: 'search.facetFilters.language.maldivian',
    defaultMessage: 'Maldivian',
    description: 'Option label for the maldivian language filter.',
  },
  [LANGUAGE_SINHALESE]: {
    id: 'search.facetFilters.language.sinhalese',
    defaultMessage: 'Sinhalese',
    description: 'Option label for the sinhalese language filter.',
  },
  [LANGUAGE_TIBETAN]: {
    id: 'search.facetFilters.language.tibetan',
    defaultMessage: 'Tibetan',
    description: 'Option label for the tibetan language filter.',
  },
});

export default messages;

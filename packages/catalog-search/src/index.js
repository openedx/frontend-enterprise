export { default as SearchData, SearchContext } from './SearchContext';
export { default as SearchHeader } from './SearchHeader';
export { default as SearchPagination } from './SearchPagination';

export {
  SEARCH_FACET_FILTERS,
  SHOW_ALL_NAME,
} from './data/constants';

export {
  useNbHitsFromSearchResults,
  getCatalogString,
} from './data/hooks';

export {
  addToRefinementArray,
  deleteRefinementAction,
  removeFromRefinementArray,
  setMultipleRefinementsAction,
  setRefinementAction,
  clearRefinementsAction,
} from './data/actions';

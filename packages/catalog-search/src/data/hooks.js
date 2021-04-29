import { useMemo } from 'react';
import { isNull } from '@edx/frontend-enterprise-utils';

/**
   * Transforms items into an object with a key for each facet attribute
   * with a list of that facet attribute's active selection(s).
   */
export const useActiveRefinementsByAttribute = (items) => {
  const refinementsFromQueryParamsByAttribute = useMemo(
    () => {
      const refinements = {};
      items.forEach((facet) => {
        const { attribute } = facet;
        refinements[attribute] = facet.items;
      });
      return refinements;
    },
    [items],
  );

  return refinementsFromQueryParamsByAttribute;
};

/**
   * Transforms refinementsFromQueryParamsByAttribute into a flat array of objects,
   * each with an attribute key so we can still associate which attribute
   * a refinement is for.
   */
export const useActiveRefinementsAsFlatArray = (items) => {
  const refinementsFromQueryParamsByAttribute = useActiveRefinementsByAttribute(items);

  const refinementsFromQueryParamsAsFlatArray = useMemo(
    () => {
      const refinements = [];
      Object.entries(refinementsFromQueryParamsByAttribute).forEach(([key, value]) => {
        const updatedValue = value.map((item) => ({
          ...item,
          attribute: key,
        }));
        refinements.push(...updatedValue);
      });
      return refinements;
    },
    [refinementsFromQueryParamsByAttribute],
  );

  return refinementsFromQueryParamsAsFlatArray;
};

export const useNbHitsFromSearchResults = (searchResults) => {
  const nbHits = useMemo(
    () => {
      if (searchResults && !isNull(searchResults.nbHits)) {
        return searchResults && searchResults.nbHits;
      }
      return null;
    },
    [searchResults],
  );

  return nbHits;
};

export const getCatalogString = (catalogs) => {
  function catalogFilterReducer(result, catalog, index) {
    const isLastCatalog = index === catalogs.length - 1;
    let query = `${result}enterprise_catalog_uuids:${catalog}`;
    if (!isLastCatalog) {
      query += ' OR ';
    }
    return query;
  }

  return catalogs.reduce(catalogFilterReducer, '');
};

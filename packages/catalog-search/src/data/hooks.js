import { useMemo, useState, useEffect } from 'react';
import { isNull } from '@edx/frontend-enterprise-utils';

/**
   * Transforms items into an object with a key for each facet attribute
   * with a list of that facet attribute's active selection(s).
   */
export const useActiveRefinementsByAttribute = (items) => {
  const refinementsByAttribute = useMemo(
    () => {
      const refinementsMap = {};
      items.forEach((facet) => {
        const { attribute } = facet;
        refinementsMap[attribute] = facet.items;
      });
      return refinementsMap;
    },
    [items],
  );

  return refinementsByAttribute;
};

/**
   * Transforms refinementsByAttribute into a flat array of objects,
   * each with an attribute key so we can still associate which attribute
   * a refinement is for.
   */
export const useActiveRefinementsAsFlatArray = (items) => {
  const refinementsByAttribute = useActiveRefinementsByAttribute(items);

  const refinementsAsFlatArray = useMemo(
    () => {
      const refinements = [];
      Object.entries(refinementsByAttribute).forEach(([key, value]) => {
        const updatedValue = value.map((item) => ({
          ...item,
          attribute: key,
        }));
        refinements.push(...updatedValue);
      });
      return refinements;
    },
    [JSON.stringify(refinementsByAttribute)],
  );

  return refinementsAsFlatArray;
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

export const useActiveElement = () => {
  const [active, setActive] = useState(document.activeElement);
  const handleFocusIn = () => setActive(document.activeElement);

  useEffect(() => {
    document.addEventListener('focusin', handleFocusIn);
    return () => {
      document.removeEventListener('focusin', handleFocusIn);
    };
  }, []);

  return active;
};

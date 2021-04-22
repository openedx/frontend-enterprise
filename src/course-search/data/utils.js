export const sortItemsByLabelAsc = items => items.sort((a, b) => a.label.localeCompare(b.label));

export const updateRefinementsFromQueryParams = (refinements) => {
  const refinementsWithJoinedLists = {};
  Object.entries(refinements).forEach(([key, value]) => {
    let newValue = value;
    if (Array.isArray(value)) {
      newValue = value.join(',');
    }
    refinementsWithJoinedLists[key] = newValue;
  });

  return refinementsWithJoinedLists;
};

export function paramsToObject(entries) {
  const result = {};
  entries.forEach((value, key) => {
    result[key] = value;
  });
  return result;
}

export function hasFeatureFlagEnabled(featureFlag) {
  const searchParams = new URLSearchParams(window.location.search);
  const { features } = paramsToObject(searchParams);
  return features && features.split(',').includes(featureFlag);
}

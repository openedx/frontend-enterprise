export const sortItemsByLabelAsc = items => items.sort((a, b) => a.label.localeCompare(b.label));

/**
 * Takes an object containing the current refinements state and converts it
 * to query parameter string that can be used to push onto the history stack.
 *
 * Refinements that contain more than 1 value will be handled accordingly, e.g.:
 *   `{ foo: ['bar', 'bar2' ]}` will be parsed as `foo=bar&foo=bar2`
 *
 * @param {object} refinements
 * @returns Query parameter string
 */
export function stringifyRefinements(refinements) {
  const params = new URLSearchParams();
  Object.entries(refinements).forEach((tuple) => {
    const [key, value] = tuple;
    if (Array.isArray(value)) {
      value.forEach((item) => {
        params.append(key, item);
      });
    } else {
      params.append(key, value);
    }
  });
  let refinementString = params.toString();
  // URLSearchParams won't encode spaces contained within individual refinements- ie `Computer Science`
  if (refinementString) {
    refinementString = refinementString.replace(/[+]/g, '%20');
  }
  return refinementString;
}

/**
 * Given a URLSearchParams instance, parses an object that accounts for the
 * possibility of more than one value per parameter, e.g. "?foo=bar&foo=bar2".
 *
 * @param {*} entries URLSearchParams instance
 * @returns Object containing query parameters with an array of values for each parameter.
 */
export function searchParamsToObject(entries) {
  return [...entries].reduce((acc, tuple) => {
    const [key, value] = tuple;
    if (Object.prototype.hasOwnProperty.call(acc, key)) {
      acc[key] = [...acc[key], value];
    } else {
      acc[key] = [value];
    }
    return acc;
  }, {});
}

export function hasFeatureFlagEnabled(featureFlag) {
  const searchParams = new URLSearchParams(global.location.search);
  const { features } = searchParamsToObject(searchParams);
  return features?.includes(featureFlag);
}

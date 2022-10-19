import { sendEnterpriseTrackEvent } from '@edx/frontend-enterprise-utils';

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
 * @param {URLSearchParams} entries URLSearchParams instance
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

/**
 * @param {Array} arrayOfItems Array of HTML elements of the <Dropdown.Item> Component within <FacetItem>
 * @param {Boolean} showBadge Boolean flag of whether the dropdown has badges
 * @returns {object} parsed data of dropdown lables, dropdown item labels and badge count if applicable,
 * returns empty attribute values for n/a attributes to maintain consistency
 */
function extractData(arrayOfItems, showBadge) {
  const output = [];
  if (arrayOfItems[0].firstChild.textContent === 'No options found.') {
    return output.emptyItems
      ? [...output.emptyItems, { item_name: arrayOfItems[0].firstChild.textContent }]
      : [{ item_name: arrayOfItems[0].firstChild.textContent }];
  }
  arrayOfItems.forEach((item) => {
    const itemName = item.children[1].textContent;
    const itemCount = item.lastChild.textContent;

    if (item.firstChild.checked) {
      if (!showBadge) {
        output.itemChecked = output.itemChecked
          ? [...output.itemChecked, { item_name: itemName }]
          : [{ item_name: itemName }];
      }
      if (showBadge) {
        output.itemChecked = output.itemChecked
          ? [...output.itemChecked, { item_name: itemName, item_count: itemCount }]
          : [{ item_name: itemName, item_count: itemCount }];
      }
    }
    if (!item.firstChild.checked) {
      if (!showBadge) {
        output.itemUnchecked = output.itemUnchecked
          ? [...output.itemUnchecked, { item_name: itemName }]
          : [{ item_name: itemName }];
      }
      if (showBadge) {
        output.itemUnchecked = output.itemUnchecked
          ? [...output.itemUnchecked, { item_name: itemName, item_count: itemCount }]
          : [{ item_name: itemName, item_count: itemCount }];
      }
    }
  });
  if (!output.itemUnchecked) { output.itemUnchecked = []; }
  if (!output.itemChecked) { output.itemChecked = []; }

  return output;
}

/**
 * Extracts label data from the dropdown, and individual dropdown items and badge count
 * for both typeahead dropdowns with/without badges dropdowns with/without badges
 * Used on onChange/onClick events on the <Dropdown> component container
 * @param {Array} dropdownState state array of the interaction journey of dropdown components
 * @param {Boolean} typeahead whether dropdown is a typeahead dropdown
 * @param {Boolean} showBadge whether dropdown has badges
 * @returns {Object} object containing label data or dropdown and label data of dropdown items,
 * state of dropdown, typeahead value if applicable and badge count if applicable
 */
export function dropdownContainerDataCapture(dropdownState = [], typeAhead = false, showBadge = false, refinements = '', enterpriseUUID) {
  const allDropdowns = Array.from(document.querySelectorAll('[class=facet-list]'));

  allDropdowns.forEach((element) => {
    const isDropdownOpen = element.firstChild.className.includes('show');
    if (isDropdownOpen) {
      const dropdownName = element.firstChild.firstChild.textContent;
      if (typeAhead) {
        const dropdownSearch = element.firstChild.lastChild.firstChild.firstChild.value;
        const dropdownItems = extractData(
          Array.from(element.firstChild.lastChild.lastChild.children),
          showBadge,
        );

        dropdownState.push({
          dropdown_name: dropdownName,
          dropdown_state: isDropdownOpen,
          dropdown_typeahead: typeAhead,
          dropdown_search: dropdownSearch,
          dropdown_items: dropdownItems,
          refinements,
        });
      }
      if (!typeAhead) {
        const dropdownItems = extractData(
          Array.from(element.firstChild.lastChild.children),
        );
        dropdownState.push({
          dropdown_name: dropdownName,
          dropdown_state: isDropdownOpen,
          dropdown_typeahead: typeAhead,
          dropdown_search: null,
          dropdown_items: dropdownItems,
          refinements,
        });
      }
    }
  });

  return sendEnterpriseTrackEvent(enterpriseUUID, 'edx.ui.enterprise.learner_portal.dropdown.event', { dropdownState });
}

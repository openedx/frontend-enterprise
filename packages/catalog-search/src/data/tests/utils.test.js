import { sendEnterpriseTrackEvent } from '@edx/frontend-enterprise-utils';
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Dropdown, Input, Badge } from '@edx/paragon';
import {
  sortItemsByLabelAsc,
  searchParamsToObject,
  dropdownContainerDataCapture,
} from '../utils';
import '@testing-library/jest-dom/extend-expect';

// jest.mock('@edx/frontend-enterprise-utils');
jest.mock('@edx/frontend-enterprise-utils', () => ({
  ...jest.requireActual('@edx/frontend-enterprise-utils'),
  sendEnterpriseTrackEvent: jest.fn(),
}));

describe('sortItemsByLabelAsc', () => {
  const APPLE = 'apple';
  const BANANA = 'banana';
  const CHERRY = 'cherry';

  test('correctly sorts items by label alphabetically', () => {
    const items = [{
      label: CHERRY,
    }, {
      label: APPLE,
    }, {
      label: BANANA,
    }];

    const expectedSortedItems = [{
      label: APPLE,
    }, {
      label: BANANA,
    }, {
      label: CHERRY,
    }];

    const sortedItems = sortItemsByLabelAsc(items);
    expect(sortedItems).toEqual(expectedSortedItems);
  });
});

describe('searchParamsToObject', () => {
  test('it converts string to object', () => {
    const url = new URL('http://ayylmao.com?foo=bar&foo=bar2');
    const searchParams = new URLSearchParams(url.search);
    const endingObject = searchParamsToObject(searchParams);
    expect(endingObject).toEqual({ foo: ['bar', 'bar2'] });
  });
});

describe('dropdownContainerDataCapture', () => {
  test('it calls sendEnterpriseTrackEvent with correct parameters', () => {
    /* eslint-disable */
    render(
      <div className="facet-list">
      <Dropdown onChange={() => dropdownContainerDataCapture([],true, true,'',1)} autoClose="outside">
        <Dropdown.Toggle id='test' variant="outline-primary" className="btn-sm">Test Dropdown Search 1</Dropdown.Toggle>
        <Dropdown.Menu>
          <div>
            <Input autoFocus type="search" />
          </div>
          <div>
            <Dropdown.Item as="label">
              <Input defaultChecked={false} type="checkbox" />
              <span>Test Inner A</span>
              <Badge pill>
                1
              </Badge>
            </Dropdown.Item>
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </div>
    );
    /* eslint-enable */
    expect(screen.getByText('Test Dropdown Search 1')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Test Dropdown Search 1'));
    expect(screen.getByText('Test Inner A')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Test Inner A'));
    expect(sendEnterpriseTrackEvent).toHaveBeenCalledTimes(1);
  });
});

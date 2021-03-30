import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import SearchData from '../SearchContext';
import SearchHeader, { filtersColTestId, searchBoxColTestId } from '../SearchHeader';
import { STYLE_VARIANTS } from '../../constants';

// Mocking this connected component so as not to have to mock the algolia Api
jest.mock('../SearchBox', () => ({
  __esModule: true,
  default: () => <div>SEARCH</div>,
}));

jest.mock('../SearchFilters', () => ({
  __esModule: true,
  default: () => <div>Filter</div>,
}));

describe('SearchHeader', () => {
  it('displays a SearchBox', () => {
    render(<MemoryRouter><SearchData><SearchHeader /></SearchData></MemoryRouter>);
    expect(screen.getByText('SEARCH')).toBeInTheDocument();
  });
  it('has the inverse variant by default -- search box', () => {
    render(<MemoryRouter><SearchData><SearchHeader /></SearchData></MemoryRouter>);
    expect(screen.getByTestId(searchBoxColTestId).className).not.toContain('fe__searchbox-col--default');
  });
  it('adds class names for default variant -- search box', () => {
    render(<MemoryRouter><SearchData><SearchHeader variant={STYLE_VARIANTS.default} /></SearchData></MemoryRouter>);
    expect(screen.getByTestId(searchBoxColTestId).className).toContain('fe__searchbox-col--default');
  });
  it('has the inverse variant by default -- filters', () => {
    render(<MemoryRouter><SearchData><SearchHeader /></SearchData></MemoryRouter>);
    expect(screen.getByTestId(filtersColTestId).className).not.toContain('fe__searchbox-col--default');
  });
  it('adds class names for default variant -- filters', () => {
    render(<MemoryRouter><SearchData><SearchHeader variant={STYLE_VARIANTS.default} /></SearchData></MemoryRouter>);
    expect(screen.getByTestId(filtersColTestId).className).toContain('fe__searchbox-col--default');
  });
});

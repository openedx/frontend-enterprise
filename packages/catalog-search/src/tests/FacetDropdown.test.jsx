import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FacetDropdown from '../FacetDropdown';

const props = {
  title: 'Facets!',
  items: [<div key="item1">item1</div>],
  isBold: false,
};

describe('FacetDropdown', () => {
  it('renders a title', () => {
    render(<FacetDropdown {...props} />);
    expect(screen.getByText(props.title)).toBeInTheDocument();
  });
  it('adds a classname', async () => {
    const className = 'foo';
    const { container } = render(<FacetDropdown {...props} className={className} />);
    expect(container.firstChild.firstChild.className).toContain(className);
  });
  it('does not bold title by default', () => {
    render(<FacetDropdown {...props} />);
    expect(screen.getByText(props.title)).not.toHaveClass('font-weight-bold');
  });
  it('renders a bold title', () => {
    render(<FacetDropdown {...props} isBold />);
    expect(screen.getByText(props.title)).toHaveClass('font-weight-bold');
  });
});

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Dropdown } from '@edx/paragon';

import { STYLE_VARIANTS } from './data/constants';

const FacetDropdown = ({
  title,
  items,
  isBold,
  className,
  variant,
}) => (
  <div className="facet-list">
    <Dropdown autoClose="outside" className={classNames('mb-0 mr-md-3', className)}>
      <Dropdown.Toggle
        variant={classNames({
          'inverse-primary': variant === STYLE_VARIANTS.inverse,
          'outline-primary': variant === STYLE_VARIANTS.default,
        })}
        className={classNames({ 'font-weight-bold': isBold })}
      >
        {title}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {items}
      </Dropdown.Menu>
    </Dropdown>
  </div>
);

FacetDropdown.defaultProps = {
  className: '',
  variant: STYLE_VARIANTS.inverse,
};

FacetDropdown.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  isBold: PropTypes.bool.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf([STYLE_VARIANTS.default, STYLE_VARIANTS.inverse]),
};

export default FacetDropdown;

import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from '@edx/paragon';
import classNames from 'classnames';
import { STYLE_VARIANTS } from '../constants';

const FacetDropdown = ({
  title,
  items,
  isBold,
  type,
  variant,
}) => (
  <div className="facet-list">
    <Dropdown className={classNames('mb-0 mr-md-3', type)}>
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
  type: undefined,
  variant: STYLE_VARIANTS.inverse,
};

FacetDropdown.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  isBold: PropTypes.bool.isRequired,
  type: PropTypes.string,
  variant: PropTypes.oneOf([STYLE_VARIANTS.default, STYLE_VARIANTS.inverse]),
};

export default FacetDropdown;

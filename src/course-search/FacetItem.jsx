import React from 'react';
import PropTypes from 'prop-types';
import { Badge, Input, Dropdown } from '@edx/paragon';
import classNames from 'classnames';
import { STYLE_VARIANTS } from '../constants';

const FacetItem = ({
  handleInputOnChange, item, isChecked, variant,
}) => (
  <Dropdown.Item as="label" className="mb-0 py-3">
    <Input
      type="checkbox"
      checked={isChecked}
      onChange={() => handleInputOnChange(item)}
      className="facet-item position-relative mr-2 mb-2"
    />
    <span className={classNames('facet-item-label', { 'is-refined': isChecked })}>
      {item.label}
    </span>
    {item.count && (
      <Badge
        pill
        className={classNames(
          'ml-2 bg-brand-primary text-brand-primary',
          { 'bg-brand-primary--default': variant === STYLE_VARIANTS.default },
        )}
      >
        {item.count}
      </Badge>
    )}
  </Dropdown.Item>
);

FacetItem.defaultProps = {
  variant: STYLE_VARIANTS.inverse,
};

FacetItem.propTypes = {
  handleInputOnChange: PropTypes.func.isRequired,
  isChecked: PropTypes.bool.isRequired,
  item: PropTypes.shape({
    count: PropTypes.number,
    label: PropTypes.string.isRequired,
  }).isRequired,
  variant: PropTypes.oneOf(Object.values(STYLE_VARIANTS)),
};

export default FacetItem;

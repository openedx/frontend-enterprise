import React from 'react'
import { PageBanner, Icon } from '@edx/paragon';
import { WarningFilled } from '@edx/paragon/icons';
import PropTypes from 'prop-types';
import { isIE11 } from './utils'

/**
 * An alert to inform users that edX will no longer support IE11.
 */
const IE11DeprecationAlert = ({
  children,
}) => {
  return isIE11() ? <PageBanner variant="warning">{children}</PageBanner> : null
};

IE11DeprecationAlert.propTypes = {
  children: PropTypes.node,
};

IE11DeprecationAlert.defaultProps = {
  children: (
    <PageBanner variant="warning">
      <Icon src={WarningFilled} className="mr-2" />
      Following Microsoft’s guidance, we will no longer support the use of Internet Explorer 11.
      Please use a recommended browser (Chrome, Firefox) to continue learning with edX.
    </PageBanner>
  ),
};

export default IE11DeprecationAlert;

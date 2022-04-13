import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { getAuthenticatedUser } from '@edx/frontend-platform/auth';

import { getProxyLoginUrl } from './utils';

/**
 * This wrapper component redirects the user to the enterprise proxy login view with additional query
 * parameters if they are not already authenticated. If the user is already authenticated, simply return
 * the children to render the rest of the application.
 *
 * @param {node} children The child nodes to render if there is an authenticated user.
 * @param {element} loadingDisplay A React element to display while authenticated user is loading
 */
export default function LoginRedirect({ children, loadingDisplay: LoadingDisplay }) {
  const {
    enterpriseSlug,
    enterpriseCustomerInviteKey,
  } = useParams();

  const user = getAuthenticatedUser();

  if (user) {
    return children;
  }

  global.location.href = getProxyLoginUrl(enterpriseSlug, enterpriseCustomerInviteKey);

  return LoadingDisplay;
}

LoginRedirect.propTypes = {
  children: PropTypes.node,
  loadingDisplay: PropTypes.element,
};

LoginRedirect.defaultProps = {
  children: null,
  loadingDisplay: null,
};

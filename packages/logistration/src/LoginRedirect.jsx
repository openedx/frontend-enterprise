import PropTypes from 'prop-types';
import qs from 'query-string';
import { useParams } from 'react-router-dom';
import { getAuthenticatedUser } from '@edx/frontend-platform/auth';
import { getConfig } from '@edx/frontend-platform/config';

/**
 * This wrapper component redirects the user to the enterprise proxy login view with additional query
 * parameters if they are not already authenticated. If the user is already authenticated, simply return
 * the children to render the rest of the application.
 *
 * @param {node} children The child nodes to render if there is an authenticated user.
 */
export default function LoginRedirect({ children }) {
  const config = getConfig();
  const user = getAuthenticatedUser();

  if (user) {
    return children;
  }

  const { enterpriseSlug } = useParams();
  const options = {
    enterprise_slug: enterpriseSlug,
    next: global.location,
  };
  const proxyLoginUrl = `${config.LMS_BASE_URL}/enterprise/proxy-login/?${qs.stringify(options)}`;
  global.location.href = proxyLoginUrl;

  return null;
}

LoginRedirect.propTypes = {
  children: PropTypes.node.isRequired,
};

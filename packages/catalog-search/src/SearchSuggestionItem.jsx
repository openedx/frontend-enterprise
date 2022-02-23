import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SearchSuggestionItem = ({
  url, highlightedTitle, authoringOrganization, programType,
}) => (
  <Link to={url} className="suggestion-item">
    <div>
      {/* eslint-disable-next-line react/no-danger */}
      <div dangerouslySetInnerHTML={{ __html: highlightedTitle }} />
      {
          authoringOrganization && (
            <div className="badge badge-light ml-3 font-weight-light authoring-org-badge">
                {authoringOrganization}
            </div>
          )
      }
    </div>
    {
      programType && (
        <p className="font-weight-light text-gray-400 program-type">
          {programType}
        </p>
      )
    }

  </Link>
);

SearchSuggestionItem.propTypes = {
  url: PropTypes.string.isRequired,
  highlightedTitle: PropTypes.string.isRequired,
  authoringOrganization: PropTypes.string,
  programType: PropTypes.string,
};

SearchSuggestionItem.defaultProps = {
  authoringOrganization: undefined,
  programType: undefined,

};

export default SearchSuggestionItem;

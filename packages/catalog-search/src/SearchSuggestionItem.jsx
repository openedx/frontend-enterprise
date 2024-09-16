import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SearchSuggestionItem = ({
  url, suggestionItemHandler, hit, disableSuggestionRedirect,
}) => {
  const authoringOrganization = hit.key && hit.key.split('+')[0];
  // If the disable redirect bool is provided, prevent the redirect from happening and instead call the provided submit
  // handler
  const handleLinkDisable = (e) => {
    if (disableSuggestionRedirect) {
      e.preventDefault();
      suggestionItemHandler(hit);
    }
  };
  return (
    <Link to={url} key={hit.title} className="suggestion-item" onClick={handleLinkDisable}>
      <div>
        { /* eslint-disable-next-line react/no-danger, no-underscore-dangle */}
        <div dangerouslySetInnerHTML={{ __html: hit._highlightResult.title.value }} />
        {
          authoringOrganization && (
            <div className="badge badge-light ml-3 font-weight-light authoring-org-badge">
              {authoringOrganization}
            </div>
          )
        }
      </div>
      {
        hit.program_type && (
          <p className="font-weight-light text-gray-400 program-type">
            {hit.program_type}
          </p>
        )
      }
    </Link>
  );
};

SearchSuggestionItem.propTypes = {
  url: PropTypes.string.isRequired,
  suggestionItemHandler: PropTypes.func,
  hit: PropTypes.shape({
    key: PropTypes.string,
    course_keys: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string,
    program_type: PropTypes.string,
    _highlightResult: PropTypes.shape({ title: PropTypes.shape({ value: PropTypes.string }) }),
    card_image_url: PropTypes.string,
    partners: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      }),
    ),
    learning_type: PropTypes.string,
  }).isRequired,
  disableSuggestionRedirect: PropTypes.bool.isRequired,
};

SearchSuggestionItem.defaultProps = {
  suggestionItemHandler: undefined,
};

export default SearchSuggestionItem;

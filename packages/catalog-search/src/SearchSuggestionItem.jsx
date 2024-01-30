import React from 'react';
import { Image } from '@edx/paragon';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SearchSuggestionItem = ({
  url, suggestionItemHandler, hit, disableSuggestionRedirect, isPreQuery,
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
    <div>
      {isPreQuery ? (
        <Link to={url} key={hit.title} className="prequery-item pr-4 d-flex flex-column" onClick={handleLinkDisable}>
          <div className="d-flex align-items-center justify-content-start">
            <Image className="prequery-image mr-2" src={hit.card_image_url} />
            <div className="d-flex flex-column">
              {/* eslint-disable-next-line react/no-danger, no-underscore-dangle */}
              <div dangerouslySetInnerHTML={{ __html: hit._highlightResult.title.value }} />
              <div className="x-small d-flex flex-column">
                {hit.partners[0]?.name} | {hit.learning_type}
              </div>
            </div>
          </div>
        </Link>
      ) : (
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
      )}
    </div>
  );
};

SearchSuggestionItem.propTypes = {
  url: PropTypes.string.isRequired,
  suggestionItemHandler: PropTypes.func,
  hit: PropTypes.shape({
    key: PropTypes.string,
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
  isPreQuery: PropTypes.bool.isRequired,
};

SearchSuggestionItem.defaultProps = {
  suggestionItemHandler: undefined,
};

export default SearchSuggestionItem;

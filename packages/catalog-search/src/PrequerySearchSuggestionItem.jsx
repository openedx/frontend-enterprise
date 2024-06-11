import React from 'react';
import { Image } from '@openedx/paragon';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrequerySearchSuggestionItem = ({
  url, hit, optimizelySuggestionClickHandler,
}) => (
  <Link
    to={url}
    key={hit.title}
    className="prequery-item pr-4 d-flex flex-column"
    onClick={() => optimizelySuggestionClickHandler(hit.key)}
  >
    <div className="d-flex align-items-center justify-content-start">
      <Image className="prequery-image mr-2" src={hit.card_image_url} />
      <div className="d-flex flex-column">
        {/* eslint-disable-next-line react/no-danger, no-underscore-dangle */}
        <div dangerouslySetInnerHTML={{ __html: hit._highlightResult.title.value }} />
        <div className="x-small d-flex">
          <span>
            {hit.partners[0]?.name}
          </span>
          <span> | </span>
          <span className="text-capitalize">{hit.learning_type}</span>
        </div>
      </div>
    </div>
  </Link>
);

PrequerySearchSuggestionItem.propTypes = {
  url: PropTypes.string.isRequired,
  hit: PropTypes.shape({
    key: PropTypes.string,
    title: PropTypes.string,
    _highlightResult: PropTypes.shape({ title: PropTypes.shape({ value: PropTypes.string }) }),
    card_image_url: PropTypes.string,
    partners: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      }),
    ),
    learning_type: PropTypes.string,
  }).isRequired,
  optimizelySuggestionClickHandler: PropTypes.func.isRequired,
};

export default PrequerySearchSuggestionItem;

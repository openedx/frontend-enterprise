import { Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';

import { MAX_NUM_SUGGESTIONS } from './data/constants';

const SearchSuggestions = ({ autoCompleteHits, enterpriseSlug, handleViewAllClick }) => {
  const getLinkToCourse = (course) => `/${enterpriseSlug}/course/${course.key}`;
  const getLinkToProgram = (program) => `/${enterpriseSlug}/program/${program.aggregation_key.split(':').pop()}`;

  return (
    <div className="suggestions" data-testid="suggestions">
      <div>
        <div className="mb-2 ml-2 mt-1 font-weight-bold suggestions-section">
          Courses
        </div>
        {
                    autoCompleteHits.filter(hit => hit.content_type === 'course')
                      .slice(0, MAX_NUM_SUGGESTIONS)
                      .map((hit) => (
                        <Link to={getLinkToCourse(hit)} key={hit.title} className="suggestion-item" style={{ whiteSpace: 'pre-wrap' }}>
                          <div style={{ display: 'flex' }}>
                            {/* eslint-disable-next-line no-underscore-dangle, react/no-danger */}
                            <div dangerouslySetInnerHTML={{ __html: hit._highlightResult.title.value }} />
                            <div className="badge badge-light ml-3 font-weight-light" style={{ lineHeight: '1.5' }}>
                              {hit.key && hit.key.split('+')[0]}
                            </div>
                          </div>
                        </Link>
                      ))
                  }
      </div>
      <div>
        <div className="mb-2 mt-5 ml-2 font-weight-bold suggestions-section">
          Programs
        </div>
        {
                    autoCompleteHits.filter(hit => hit.content_type !== 'course')
                      .slice(0, MAX_NUM_SUGGESTIONS)
                      .map((hit) => (
                        <Link to={getLinkToProgram(hit)} key={hit.title} className="suggestion-item" style={{ whiteSpace: 'pre-wrap' }}>
                          <div style={{ display: 'flex' }}>
                            {/* eslint-disable-next-line no-underscore-dangle, react/no-danger */}
                            <div dangerouslySetInnerHTML={{ __html: hit._highlightResult.title.value }} />
                            <div className="badge badge-light ml-3 font-weight-light" style={{ lineHeight: '1.5' }}>
                              {hit.authoring_organizations && hit.authoring_organizations[0].key}
                            </div>
                          </div>
                          <p className="font-weight-light text-gray-400 " style={{ fontSize: '.9rem', marginBottom: '0px' }}>
                            {hit.program_type}
                          </p>
                        </Link>
                      ))
                  }
      </div>
      <button type="button" className="btn btn-light w-100 view-all-btn" onClick={handleViewAllClick}>
        View all results
      </button>
    </div>
  );
};

SearchSuggestions.propTypes = {
  autoCompleteHits: PropTypes.arrayOf(PropTypes.object).isRequired,
  enterpriseSlug: PropTypes.string.isRequired,
  handleViewAllClick: PropTypes.func.isRequired,
};

export default SearchSuggestions;

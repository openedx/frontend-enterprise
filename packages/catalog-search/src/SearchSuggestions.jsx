import React from 'react';
import PropTypes from 'prop-types';

import { MAX_NUM_SUGGESTIONS } from './data/constants';
import SearchSuggestionItem from './SearchSuggestionItem';

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
              <SearchSuggestionItem
                key={hit.title}
                url={getLinkToCourse(hit)}
                /* eslint-disable-next-line no-underscore-dangle */
                highlightedTitle={hit._highlightResult.title.value}
                authoringOrganization={hit.key && hit.key.split('+')[0]}
                title={hit.title}
              />
            ))
        }
      </div>
      <div>
        <div className="mb-2 mt-5 ml-2 font-weight-bold suggestions-section">
          Programs
        </div>
        {
          autoCompleteHits.filter(hit => hit.content_type === 'program')
            .slice(0, MAX_NUM_SUGGESTIONS)
            .map((hit) => (
              <SearchSuggestionItem
                key={hit.title}
                url={getLinkToProgram(hit)}
                /* eslint-disable-next-line no-underscore-dangle */
                highlightedTitle={hit._highlightResult.title.value}
                authoringOrganization={hit.authoring_organizations.shift()?.key}
                title={hit.title}
                programType={hit.program_type}
              />
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

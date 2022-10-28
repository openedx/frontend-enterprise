import React from 'react';
import PropTypes from 'prop-types';

import { MAX_NUM_SUGGESTIONS } from './data/constants';
import SearchSuggestionItem from './SearchSuggestionItem';

const SearchSuggestions = ({
  autoCompleteHits,
  enterpriseSlug,
  handleSubmit,
  handleSuggestionClickSubmit,
  disableSuggestionRedirect,
}) => {
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
                hit={hit}
                disableSuggestionRedirect={disableSuggestionRedirect}
                suggestionItemHandler={handleSuggestionClickSubmit}
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
                hit={hit}
                disableSuggestionRedirect={disableSuggestionRedirect}
                suggestionItemHandler={handleSuggestionClickSubmit}
              />
            ))
        }
      </div>
      <button type="button" className="btn btn-light w-100 view-all-btn" onClick={handleSubmit}>
        View all results
      </button>
    </div>
  );
};

SearchSuggestions.propTypes = {
  autoCompleteHits: PropTypes.arrayOf(PropTypes.shape({
    content_type: PropTypes.string,
  })).isRequired,
  enterpriseSlug: PropTypes.string,
  handleSubmit: PropTypes.func,
  handleSuggestionClickSubmit: PropTypes.func,
  disableSuggestionRedirect: PropTypes.bool,
};

SearchSuggestions.defaultProps = {
  handleSubmit: undefined,
  enterpriseSlug: '',
  handleSuggestionClickSubmit: undefined,
  disableSuggestionRedirect: false,
};

export default SearchSuggestions;

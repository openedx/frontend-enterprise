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

  const courses = [];
  const programs = [];
  const execEdCourses = [];
  autoCompleteHits.forEach((hit) => {
    const { learning_type: learningType } = hit;
    if (learningType === 'course') { courses.push(hit); }
    if (learningType === 'program') { programs.push(hit); }
    if (learningType === 'Executive Education') { execEdCourses.push(hit); }
  });
  return (
    <div className="suggestions" data-testid="suggestions">
      {courses.length > 0 && (
        <div>
          <div className="mb-2 ml-2 mt-1 font-weight-bold suggestions-section">
            Courses
          </div>
          {
            courses.slice(0, MAX_NUM_SUGGESTIONS)
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
      )}
      {programs.length > 0 && (
        <div>
          <div className="mb-2 mt-5 ml-2 font-weight-bold suggestions-section">
            Programs
          </div>
          {
            programs.slice(0, MAX_NUM_SUGGESTIONS)
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
      )}
      {/* Currently (Feb 2023) it is not possible to redirect to the learner portal for exec ed content so only display
       if the redirect is disabled */}
      {execEdCourses.length > 0 && disableSuggestionRedirect && (
        <div>
          <div className="mb-2 mt-5 ml-2 font-weight-bold suggestions-section">
            Executive Education
          </div>
          {
            execEdCourses.slice(0, MAX_NUM_SUGGESTIONS)
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
      )}
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

import React from 'react';
import PropTypes from 'prop-types';

import {
  MAX_NUM_SUGGESTIONS, LEARNING_TYPE_COURSE, LEARNING_TYPE_PROGRAM,
  LEARNING_TYPE_EXECUTIVE_EDUCATION, COURSE_TYPE_EXECUTIVE_EDUCATION,
  MAX_NUM_PRE_QUERY_SUGGESTIONS,
} from './data/constants';
import SearchSuggestionItem from './SearchSuggestionItem';

const SearchSuggestions = ({
  preQueryHits,
  autoCompleteHits,
  enterpriseSlug,
  handleSubmit,
  handleSuggestionClickSubmit,
  disableSuggestionRedirect,
}) => {
  const getLinkToCourse = (course) => {
    const { learning_type: learningType } = course;
    if (learningType === LEARNING_TYPE_EXECUTIVE_EDUCATION) {
      return `/${enterpriseSlug}/${COURSE_TYPE_EXECUTIVE_EDUCATION}/course/${course.key}`;
    }

    return `/${enterpriseSlug}/course/${course.key}`;
  };
  const getLinkToProgram = (program) => `/${enterpriseSlug}/program/${program.aggregation_key.split(':').pop()}`;

  const preQuerySuggestions = [];
  const courses = [];
  const programs = [];
  const execEdCourses = [];

  if (preQueryHits) {
    preQueryHits.forEach((hit) => {
      preQuerySuggestions.push(hit);
    });
  }
  autoCompleteHits.forEach((hit) => {
    const { learning_type: learningType } = hit;
    if (learningType === LEARNING_TYPE_COURSE) { courses.push(hit); }
    if (learningType === LEARNING_TYPE_PROGRAM) { programs.push(hit); }
    if (learningType === LEARNING_TYPE_EXECUTIVE_EDUCATION) { execEdCourses.push(hit); }
  });
  return (
    <div className="suggestions" data-testid="suggestions">
      {preQuerySuggestions.length > 0 && (
        <div>
          <div className="mb-2 ml-2 mt-1 font-weight-bold suggestions-section">
            Top-rated courses
          </div>
          {
            preQuerySuggestions.slice(0, MAX_NUM_PRE_QUERY_SUGGESTIONS)
              .map((hit) => {
                const getUrl = (course) => {
                  const { learning_type: learningType } = course;
                  if (learningType === LEARNING_TYPE_COURSE || learningType === LEARNING_TYPE_EXECUTIVE_EDUCATION) {
                    return getLinkToCourse(course);
                  }
                  return getLinkToProgram(course);
                };

                return (
                  <SearchSuggestionItem
                    key={hit.title}
                    url={getUrl(hit)}
                    hit={hit}
                    isPreQuery={preQuerySuggestions.length > 0}
                    disableSuggestionRedirect={disableSuggestionRedirect}
                    suggestionItemHandler={handleSuggestionClickSubmit}
                  />
                );
              })
          }
        </div>
      )}
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
                  isPreQuery={preQuerySuggestions.length > 0}
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
      {execEdCourses.length > 0 && (
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
      {!preQuerySuggestions.length && (
        <button type="button" className="btn btn-light w-100 view-all-btn" onClick={handleSubmit}>
          View all results
        </button>
      )}
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
  preQueryHits: PropTypes.arrayOf(PropTypes.shape()),
};

SearchSuggestions.defaultProps = {
  handleSubmit: undefined,
  enterpriseSlug: '',
  handleSuggestionClickSubmit: undefined,
  disableSuggestionRedirect: false,
  preQueryHits: undefined,
};

export default SearchSuggestions;

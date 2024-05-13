import React from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from '@edx/frontend-platform/i18n';
import {
  MAX_NUM_SUGGESTIONS, LEARNING_TYPE_COURSE, LEARNING_TYPE_PROGRAM,
  LEARNING_TYPE_EXECUTIVE_EDUCATION, COURSE_TYPE_EXECUTIVE_EDUCATION,
  MAX_NUM_PRE_QUERY_SUGGESTIONS,
} from './data/constants';
import PrequerySearchSuggestionItem from './PrequerySearchSuggestionItem';
import SearchSuggestionItem from './SearchSuggestionItem';

const SearchSuggestions = ({
  preQueryHits,
  autoCompleteHits,
  enterpriseSlug,
  handleSubmit,
  handleSuggestionClickSubmit,
  disableSuggestionRedirect,
  optimizelySuggestionClickHandler,
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
            <FormattedMessage
              id="search.suggestions.topRatedCourses"
              defaultMessage="Top-rated courses"
              description="Top-rated courses suggestion section title"
            />
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
                  <PrequerySearchSuggestionItem
                    key={hit.title}
                    url={getUrl(hit)}
                    hit={hit}
                    optimizelySuggestionClickHandler={optimizelySuggestionClickHandler}
                  />
                );
              })
          }
        </div>
      )}
      {courses.length > 0 && (
        <div>
          <div className="mb-2 ml-2 mt-1 font-weight-bold suggestions-section">
            <FormattedMessage
              id="search.suggestions.courses"
              defaultMessage="Courses"
              description="Courses suggestion section title"
            />
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
                  optimizelySuggestionClickHandler={optimizelySuggestionClickHandler}
                />
              ))
          }
        </div>
      )}
      {programs.length > 0 && (
        <div>
          <div className="mb-2 mt-5 ml-2 font-weight-bold suggestions-section">
            <FormattedMessage
              id="search.suggestions.programs"
              defaultMessage="Programs"
              description="Programs suggestion section title"
            />
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
                  optimizelySuggestionClickHandler={optimizelySuggestionClickHandler}
                />
              ))
          }
        </div>
      )}
      {execEdCourses.length > 0 && (
        <div>
          <div className="mb-2 mt-5 ml-2 font-weight-bold suggestions-section">
            <FormattedMessage
              id="search.suggestions.execEd"
              defaultMessage="Executive Education"
              description="Executive Education suggestion section title"
            />
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
                  optimizelySuggestionClickHandler={optimizelySuggestionClickHandler}
                />
              ))
          }
        </div>
      )}
      {!preQuerySuggestions.length && (
        <button type="button" className="btn btn-light w-100 view-all-btn" onClick={handleSubmit}>
          <FormattedMessage
            id="search.suggestions.viewAllResults"
            defaultMessage="View all results"
            description="View all results button text"
          />
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
  optimizelySuggestionClickHandler: PropTypes.func,
};

SearchSuggestions.defaultProps = {
  handleSubmit: undefined,
  enterpriseSlug: '',
  handleSuggestionClickSubmit: undefined,
  disableSuggestionRedirect: false,
  preQueryHits: undefined,
  optimizelySuggestionClickHandler: undefined,
};

export default SearchSuggestions;

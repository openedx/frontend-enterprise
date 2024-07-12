import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Dropdown, Input } from '@openedx/paragon';
import { FormattedMessage } from '@edx/frontend-platform/i18n';
import { SearchContext } from './SearchContext';
import {
  setRefinementAction,
} from './data/actions';
import { features } from './config';
import {
  LEARNING_TYPE_COURSE, LEARNING_TYPE_PROGRAM, LEARNING_TYPE_PATHWAY, LEARNING_TYPE_VIDEO,
} from './data/constants';

const LearningTypeRadioFacet = ({ enablePathways }) => {
  const { refinements, dispatch } = useContext(SearchContext);

  // only bold the dropdown title if the learning type is Course or Program
  const typeCourseSelected = refinements.content_type && refinements.content_type.includes(LEARNING_TYPE_COURSE);
  const typeProgramSelected = refinements.content_type && refinements.content_type.includes(LEARNING_TYPE_PROGRAM);
  const typePathwaySelected = refinements.content_type && refinements.content_type.includes(LEARNING_TYPE_PATHWAY);
  const typeVideoSelected = refinements.content_type && refinements.content_type.includes(LEARNING_TYPE_VIDEO);
  const boldTitle = typeCourseSelected || typeProgramSelected || typePathwaySelected || typeVideoSelected;

  const handleInputOnChange = (type) => {
    if (type === '') {
      dispatch(setRefinementAction('content_type', []));
    } else {
      dispatch(setRefinementAction('content_type', [type]));
    }
  };

  return (
    <div className="facet-list">
      <Dropdown className={classNames('mb-0 mr-md-3')}>
        <Dropdown.Toggle
          id="learning-type-toggle"
          variant="inverse-primary"
          className={classNames({ 'font-weight-bold': boldTitle })}
        >
          <FormattedMessage
            id="search.facetFilters.learningType.title"
            defaultMessage="Learning Type"
            description="Title for the learning type facet filter"
          />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item as="label" className="mb-0 py-3 d-flex align-items-center">
            <Input
              type="radio"
              checked={!boldTitle}
              className="facet-item position-relative mr-2 mb-2"
              onChange={() => handleInputOnChange('')}
              data-testid="learning-type-any"
            />
            <span className={classNames('facet-item-label', {})}>
              <FormattedMessage
                id="search.facetFilters.learningType.any"
                defaultMessage="Any"
                description="Title for the learning type facet filter to return all types of learning content"
              />
            </span>
          </Dropdown.Item>
          <Dropdown.Item as="label" className="mb-0 py-3 d-flex align-items-center">
            <Input
              type="radio"
              checked={typeCourseSelected}
              className="facet-item position-relative mr-2 mb-2"
              onChange={() => handleInputOnChange(LEARNING_TYPE_COURSE)}
              data-testid="learning-type-courses"
            />
            <span className={classNames('facet-item-label', { 'is-refined': typeCourseSelected })}>
              <FormattedMessage
                id="search.facetFilters.learningType.courses"
                defaultMessage="Courses"
                description="Title for the learning type facet filter to return courses only"
              />
            </span>
          </Dropdown.Item>
          <Dropdown.Item as="label" className="mb-0 py-3 d-flex align-items-center">
            <Input
              type="radio"
              checked={typeProgramSelected}
              className="facet-item position-relative mr-2 mb-2"
              onChange={() => handleInputOnChange(LEARNING_TYPE_PROGRAM)}
              data-testid="learning-type-programs"
            />
            <span className={classNames('facet-item-label', { 'is-refined': typeProgramSelected })}>
              <FormattedMessage
                id="search.facetFilters.learningType.programs"
                defaultMessage="Programs"
                description="Title for the learning type facet filter to return programs only"
              />
            </span>
          </Dropdown.Item>
          {
            // the first check is a global feature flag and the second is a check to see if
            // the individual customer itself has enabled pathways
            features.ENABlE_PATHWAYS && enablePathways && (
              <Dropdown.Item as="label" className="mb-0 py-3 d-flex align-items-center">
                <Input
                  type="radio"
                  checked={typePathwaySelected}
                  className="facet-item position-relative mr-2 mb-2"
                  onChange={() => handleInputOnChange(LEARNING_TYPE_PATHWAY)}
                  data-testid="learning-type-pathways"
                />
                <span className={classNames('facet-item-label', { 'is-refined': typePathwaySelected })}>
                  <FormattedMessage
                    id="search.facetFilters.learningType.pathways"
                    defaultMessage="Pathways"
                    description="Title for the learning type facet filter to return pathways only"
                  />
                </span>
              </Dropdown.Item>
            )
          }
          {features.ENABLE_VIDEO_CATALOG
            && (
              <Dropdown.Item as="label" className="mb-0 py-3 d-flex align-items-center">
                <Input
                  type="radio"
                  checked={typeVideoSelected}
                  className="facet-item position-relative mr-2 mb-2"
                  onChange={() => handleInputOnChange(LEARNING_TYPE_VIDEO)}
                  data-testid="learning-type-videos"
                />
                <span className={classNames('facet-item-label', { 'is-refined': typeVideoSelected })}>
                  <FormattedMessage
                    id="search.facetFilters.learningType.videos"
                    defaultMessage="Videos"
                    description="Title for the learning type facet filter to return videos only"
                  />
                </span>
              </Dropdown.Item>
            )}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

LearningTypeRadioFacet.defaultProps = {
  enablePathways: null,
};

LearningTypeRadioFacet.propTypes = {
  enablePathways: PropTypes.bool,
};

export default LearningTypeRadioFacet;

import React, { useContext } from 'react';
import classNames from 'classnames';
import { Dropdown, Input } from '@edx/paragon';
import { SearchContext } from './SearchContext';
import {
  setRefinementAction,
} from './data/actions';
import { features } from './config';
import { LEARNING_TYPE_COURSE, LEARNING_TYPE_PROGRAM, LEARNING_TYPE_PATHWAY } from './data/constants';

const LearningTypeRadioFacet = () => {
  const { refinements, dispatch } = useContext(SearchContext);
  // only bold the dropdown title if the learning type is Course or Program
  const typeCourseSelected = refinements.content_type && refinements.content_type.includes(LEARNING_TYPE_COURSE);
  const typeProgramSelected = refinements.content_type && refinements.content_type.includes(LEARNING_TYPE_PROGRAM);
  const typePathwaySelected = refinements.content_type && refinements.content_type.includes(LEARNING_TYPE_PATHWAY);
  const boldTitle = typeCourseSelected || typeProgramSelected || typePathwaySelected;

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
          variant="inverse-primary"
          className={classNames({ 'font-weight-bold': boldTitle })}
        >
          Learning Type
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item as="label" className="mb-0 py-3 d-flex align-items-center">
            <Input
              type="radio"
              checked={!boldTitle}
              className="facet-item position-relative mr-2 mb-2"
              onChange={() => handleInputOnChange('')}
            />
            <span className={classNames('facet-item-label', {})}>
              Any
            </span>
          </Dropdown.Item>
          <Dropdown.Item as="label" className="mb-0 py-3 d-flex align-items-center">
            <Input
              type="radio"
              checked={typeCourseSelected}
              className="facet-item position-relative mr-2 mb-2"
              onChange={() => handleInputOnChange(LEARNING_TYPE_COURSE)}
            />
            <span className={classNames('facet-item-label', { 'is-refined': typeCourseSelected })}>
              Courses
            </span>
          </Dropdown.Item>
          <Dropdown.Item as="label" className="mb-0 py-3 d-flex align-items-center">
            <Input
              type="radio"
              checked={typeProgramSelected}
              className="facet-item position-relative mr-2 mb-2"
              onChange={() => handleInputOnChange(LEARNING_TYPE_PROGRAM)}
            />
            <span className={classNames('facet-item-label', { 'is-refined': typeProgramSelected })}>
              Programs
            </span>
          </Dropdown.Item>
          {
            features.ENABlE_PATHWAYS && (
              <Dropdown.Item as="label" className="mb-0 py-3 d-flex align-items-center">
                <Input
                  type="radio"
                  checked={typePathwaySelected}
                  className="facet-item position-relative mr-2 mb-2"
                  onChange={() => handleInputOnChange(LEARNING_TYPE_PATHWAY)}
                />
                <span className={classNames('facet-item-label', { 'is-refined': typePathwaySelected })}>
                  Pathways
                </span>
              </Dropdown.Item>
            )
          }
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default LearningTypeRadioFacet;

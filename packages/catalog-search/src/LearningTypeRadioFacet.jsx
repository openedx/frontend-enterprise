import React, {useCallback, useContext, useState} from 'react';
import classNames from 'classnames';
import {Badge, Collapsible, Dropdown, Input} from '@edx/paragon';
import {connectRefinementList} from "react-instantsearch-dom";
import {SearchContext} from "./SearchContext";
import {
    setRefinementAction
} from "./data/actions";

const LEARNING_TYPE_ANY="any"
const LEARNING_TYPE_COURSE="course"
const LEARNING_TYPE_PROGRAM="program"
const LearningTypeRadioFacet = () => {


      const { refinements, dispatch } = useContext(SearchContext);
  // only bold the dropdown title if the learning type is Course or Program
  const boldTitle = refinements['content_type'] && (refinements['content_type'].includes(LEARNING_TYPE_COURSE) || refinements['content_type'].includes(LEARNING_TYPE_PROGRAM));

  const handleInputOnChange = (item) =>{
      item===""?dispatch(setRefinementAction('content_type', [])):dispatch(setRefinementAction('content_type', [item]));
  };

  return (
    <div className="facet-list">
        <Dropdown className={classNames('mb-0 mr-md-3')}>
          <Dropdown.Toggle
            variant='inverse-primary'
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
                  onChange={()=>handleInputOnChange("")}
                />
                <span className={classNames('facet-item-label',  'is-refined')}>
                  {LEARNING_TYPE_ANY}
                </span>
         </Dropdown.Item>
          <Dropdown.Item as="label" className="mb-0 py-3 d-flex align-items-center">
                <Input
                  type="radio"
                  checked={refinements['content_type'] && refinements['content_type'].includes(LEARNING_TYPE_COURSE)}
                  className="facet-item position-relative mr-2 mb-2"
                  onChange={()=>handleInputOnChange(LEARNING_TYPE_COURSE)}
                />
                <span className={classNames('facet-item-label',  'is-refined')}>
                  {LEARNING_TYPE_COURSE}
                </span>
         </Dropdown.Item>
          <Dropdown.Item as="label" className="mb-0 py-3 d-flex align-items-center">
                <Input
                  type="radio"
                  checked={refinements['content_type'] && refinements['content_type'].includes(LEARNING_TYPE_PROGRAM)}
                  className="facet-item position-relative mr-2 mb-2"
                  onChange={()=>handleInputOnChange(LEARNING_TYPE_PROGRAM)}
                />
                <span className={classNames('facet-item-label',  'is-refined')}>
                  {LEARNING_TYPE_PROGRAM}
                </span>
         </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
    )
};



export default connectRefinementList(LearningTypeRadioFacet);
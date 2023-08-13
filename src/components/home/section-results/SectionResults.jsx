import React from 'react'
import './SectionResults.css'
import Section from './Section'

import Accordion from 'react-bootstrap/Accordion';

const SectionResults = ({ course }) => {

  if (!Array.isArray(course.sections)) {
    // Handle the case where 'course.sections' is not an array
    return <></>;
  }

  const mappedSections = () => {
    const activities = {};
    for (const section of course.sections) {
      if (activities[section.activity] === undefined) {
        activities[section.activity] = [];
      }
      activities[section.activity].push(section);
    }

    return activities;
  }

  const activities = mappedSections();

  const previous = () => {
    course.sections.map((section, index) => (

      <Section key={index} section={section} />
    ))
  }

  return (
    <div className='section-result'>
      <h1 className='course-title'>{course.name}</h1>
      <div className='sections-display'>
        <Accordion defaultActiveKey={['0']} alwaysOpen className='accordian'>
          {Object.keys(activities).map((activity, index) => (
            <Accordion.Item eventKey={index} key={index} >
              <Accordion.Header>{activity}</Accordion.Header>
              <Accordion.Body className='accordian-item'>
                {activities[activity].map((section, index2) => (
                  <Section key={index2} section={section} />
                ))}
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>

      </div>
    </div>
  )
}

export default SectionResults
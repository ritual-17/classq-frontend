import React from 'react'
import './SectionResults.css'

const SectionResults = ({course}) => {
  
  if (!Array.isArray(course.sections)) {
    // Handle the case where 'course.sections' is not an array
    return <></>;
  }
  
  return (
    <div>
        <h1>{course.name}</h1>
        <div>
          {course.sections.map((section) => (
            <div>
              <h3>{section.section}</h3>
            </div>
          ))}
        </div>
    </div>
  )
}

export default SectionResults
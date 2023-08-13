import React from 'react'
import './SearchResults.css'

import ListGroup from 'react-bootstrap/ListGroup';


const SearchResults = ({ results, clearSearchResults, setCourse }) => {

  return (
    <div className='results-list'>
      <ListGroup className='results-group' >
        {results.map((course, index) => (
          <ListGroup.Item
            className='results-item'
            key={index}
            onClick={() => {
              setCourse(course);
              clearSearchResults(course.name);
            }
            }>
            {course.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  )
}

export default SearchResults

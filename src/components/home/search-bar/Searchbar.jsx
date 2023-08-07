import React, { useState } from 'react'
import './SearchBar.css'

import Form from 'react-bootstrap/Form'

const SearchBar = ({setResults, query, setQuery}) => {
    //const [input, setInput] = useState('');

    const fetchCourses = (value) => {

        if (!value) {
            setResults([]);
            return;
        }

        fetch("http://localhost:7071/api/searchSuggest", {
            method: 'POST',
            body: value,
            headers: {
              'Content-Type': 'text/plain'
            },
          })
            .then((response) => response.json())
            .then((courses) => {
                setResults(courses);
                console.log(courses);
            }).catch(error => {
                console.error('Error:', error);
              });
    }

    const handleChange = (value) => {
        setQuery(value);
        fetchCourses(value);
    }

    return (

        <Form.Control
            type="text"
            id="courseSearch"
            placeholder="ex. MATH 308, ELEC 221"
            className="input-field"
            value={query}
            onChange={(e) => handleChange(e.target.value)}
        />

    )
}

export default SearchBar
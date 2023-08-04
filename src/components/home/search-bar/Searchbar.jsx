import React, { useState } from 'react'
import './searchbar.css'

import Form from 'react-bootstrap/Form'

const Searchbar = () => {
    const [input, setInput] = useState('');

    const fetchCourses = (value) => {
        fetch("http://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((json) => {
                const courses = json.filter((course) => {
                    return course.name.toLowerCase().includes(value.toLowerCase());
                });
                console.log(courses);
            });
    }

    const handleChange = (value) => {
        setInput(value);
        fetchCourses(value);
    }

    return (

        <Form.Control
            type="text"
            id="courseSearch"
            placeholder="ex. MATH 308, ELEC 221"
            className="input-field"
            defaultValue={input}
            onChange={(e) => handleChange(e.target.value)}
        />

    )
}

export default Searchbar
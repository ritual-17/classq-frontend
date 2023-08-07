import React, { useState } from 'react'
import './Home.css'
import SearchResults from './search-results/SearchResults'
import SearchBar from './search-bar/SearchBar'
import SectionResults from './section-results/SectionResults'

const Home = () => {

    const [results, setResults] = useState([]);
    const [course, setCourse] = useState({});
    const [query, setQuery] = useState('');

    const clearSearchResults = (courseName) => {
        setResults([]);
        setQuery(courseName);
    }

    return (
        <div className="home-container">
            <div className="search-container">
                <SearchBar setResults={setResults} query={query} setQuery={setQuery} />
                <SearchResults results={results} clearSearchResults={clearSearchResults} setCourse={setCourse}  />
                <SectionResults course={course} />
            </div>
        </div>
    )
}

export default Home


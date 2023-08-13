import React, { useState } from 'react'
import './Home.css'
import SearchResults from './search-results/SearchResults'
import SearchBar from './search-bar/SearchBar'
import SectionResults from './section-results/SectionResults'
import Cart from './cart/Cart'
import { CartContext } from '../../contexts/CartContext'

const Home = () => {

    const [results, setResults] = useState([]);
    const [course, setCourse] = useState({});
    const [query, setQuery] = useState('');
    const [cart, setCart] = useState([]);

    const clearSearchResults = (courseName) => {
        setResults([]);
        setQuery(courseName);
    }

    return (
        <CartContext.Provider value={[cart, setCart]}>
            <div className="home-container">
                <div className="search-container">
                    <SearchBar setResults={setResults} query={query} setQuery={setQuery} />
                    <SearchResults results={results} clearSearchResults={clearSearchResults} setCourse={setCourse} />
                </div>
                <div className="sections-container">
                    <SectionResults course={course} />
                </div>
                <div className="cart-container">
                    <Cart />
                </div>
            </div>
        </CartContext.Provider>
    )
}

export default Home


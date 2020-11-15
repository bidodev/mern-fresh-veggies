import React from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

const SearchBar = ({ onSearch }) => {

  const handleChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className="stock-search-wrapper">
      <div className="search">
        <input type="search" className="searchTerm" placeholder="What are you looking for?" onChange={handleChange} />
        <button type="submit" className="searchButton">
          <Icon icon={['fas', 'search']} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;

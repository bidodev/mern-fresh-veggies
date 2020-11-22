import React from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

const SearchBar = ({ onSearch, className }) => {

  const handleChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    // className is add by the parent!
    <div className={className}>
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

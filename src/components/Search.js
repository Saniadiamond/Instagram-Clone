import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import './Search.css';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [recentSearches, setRecentSearches] = useState([
    {
      id: 1,
      name: 'john_doe',
      username: 'John Doe',
      image: './img/profile.jpg',
      verified: true
    },
    {
      id: 2,
      name: 'jane_smith',
      username: 'Jane Smith',
      image: './img/profile.jpg',
      verified: false
    }
  ]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  const removeFromRecent = (id) => {
    setRecentSearches(recentSearches.filter(item => item.id !== id));
  };

  const clearAllRecent = () => {
    setRecentSearches([]);
  };

  return (
    <div className="search-page">
      <div className="search-container">
        <div className="search-header">
          <h4>Search</h4>
        </div>

        <div className="search-input-container">
          <div className="search-input-wrapper">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearch}
            />
            {searchQuery && (
              <button className="clear-button" onClick={clearSearch}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            )}
          </div>
        </div>

        <div className="search-content">
          {!searchQuery && recentSearches.length > 0 && (
            <>
              <div className="recent-header">
                <span>Recent</span>
                <button className="clear-all" onClick={clearAllRecent}>
                  Clear all
                </button>
              </div>
              {recentSearches.map(item => (
                <div key={item.id} className="search-item">
                  <div className="search-item-left">
                    <img src={item.image} alt={item.name} className="search-item-image" />
                    <div className="search-item-info">
                      <div className="search-item-name">
                        {item.name}
                        {item.verified && (
                          <FontAwesomeIcon icon={faCircleCheck} className="verified-badge" />
                        )}
                      </div>
                      <div className="search-item-description">{item.username}</div>
                    </div>
                  </div>
                  <button
                    className="remove-item"
                    onClick={() => removeFromRecent(item.id)}
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;

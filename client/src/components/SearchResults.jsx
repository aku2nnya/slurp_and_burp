import React from 'react';

const SearchResults = (props) => {
  const { searchResults, handleRestaurantClick } = props;
  return (
    <div className="searchResults">
      {searchResults.map(restaurant => (
        <span>
          <div>
            <button type="button" value={restaurant.name} onClick={handleRestaurantClick}>{restaurant.name}</button>
          </div>
          <img src={restaurant.image_url} alt="Restaurant" height="100px" width="100px" />
          <div>
            <a href={restaurant.url} target="_blank" rel="noopener noreferrer">
              <span>yelp</span>
            </a>
          </div>
        </span>
      ))}
    </div>
  );
};

export default SearchResults;

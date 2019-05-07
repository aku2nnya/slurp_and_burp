import React from 'react';


const AllReviews = (props) => {
  const { allReviews, handleRestaurantClick } = props;
  return (
    <div>
      {allReviews.map(review => <button type="button" value={review.restaurant} onClick={handleRestaurantClick} key={review._id}>{review.restaurant}</button>)}
    </div>
  );
};

export default AllReviews;

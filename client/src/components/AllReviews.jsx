import React from 'react';

const AllReviews = (props) => {
  const { allReviews } = props;
  console.log(allReviews);
  return (
    <div>
      {allReviews.map(review => <button type="button" key={review._id}>{review.restaurant}</button>)}
    </div>
  );
};

export default AllReviews;

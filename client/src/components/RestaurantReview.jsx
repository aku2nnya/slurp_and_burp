import React from 'react';


const RestaurantReview = (props) => {
  const { restaurantReview } = props;
  return (
    <>
      <h2>{restaurantReview.restaurant}</h2>
      <h4>Review by: {restaurantReview.username}</h4>
      <h4>Formality: {restaurantReview.formality}</h4>
      <h4>Ratings:</h4>
      <span>Atmosphere: {restaurantReview.ratingAtmosphere} | </span>
      <span> Price: {restaurantReview.ratingPrice} | </span>
      <span> Service: {restaurantReview.ratingService} | </span>
      <span> Food: {restaurantReview.ratingFood} </span>
      <h4>Comments:</h4>
      <div>
        {restaurantReview.comment}
      </div>
    </>
  );
};

export default RestaurantReview;

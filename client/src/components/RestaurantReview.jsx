import React from 'react';


const RestaurantReview = (props) => {
  const { restaurantReview, reviewScoreDisplay } = props;
  const toggleDisplay = reviewScoreDisplay ? 'show' : 'hide';
  const atmosphereScore = Number(restaurantReview.ratingAtmosphere);
  const priceScore = Number(restaurantReview.ratingPrice);
  const serviceScore = Number(restaurantReview.ratingService);
  const foodScore = Number(restaurantReview.ratingFood);
  const totalScore = atmosphereScore + priceScore + serviceScore + foodScore;
  const averageScore = totalScore / 25;
  return (
    <div className={toggleDisplay}>
      <h1>{averageScore * 100}%</h1>
      <h2>{restaurantReview.restaurant}</h2>
      <h4>Review by: {restaurantReview.username}</h4>
      <h4>Formality: {restaurantReview.formality}</h4>
      <h4>Ratings:</h4>
      <div>Atmosphere: {atmosphereScore} out of 5</div>
      <div> Price: {priceScore} out of 5</div>
      <div> Service: {serviceScore} out of 5</div>
      <div> Food: {foodScore} out of 10</div>
      <h4>Comments:</h4>
      <div>
        {restaurantReview.comment}
      </div>
    </div>
  );
};

export default RestaurantReview;

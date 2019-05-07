import React from 'react';
import axios from 'axios';
import Form from './Form';
import RestaurantReview from './RestaurantReview';
import AllReviews from './AllReviews';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allReviews: [],
      restaurantReview: {},
    };
    this.getAllReviews = this.getAllReviews.bind(this);
    this.handleRestaurantClick = this.handleRestaurantClick.bind(this);
  }

  componentDidMount() {
    this.getAllReviews();
  }

  getAllReviews() {
    axios.get('/allreviews')
      .then((response) => {
        this.setState({
          allReviews: response.data,
        });
      })
      .catch(err => console.log('GET all ERROR: ', err));
  }

  handleRestaurantClick(e) {
    const { allReviews } = this.state;
    for (let i = 0; i < allReviews.length; i += 1) {
      if (e.target.value === allReviews[i].restaurant) {
        this.setState({
          restaurantReview: allReviews[i],
        });
      }
    }
  }

  render() {
    const { allReviews, restaurantReview } = this.state;
    return (
      <>
        <h1>Slurp & Burp</h1>
        <AllReviews allReviews={allReviews} handleRestaurantClick={this.handleRestaurantClick} />
        <RestaurantReview restaurantReview={restaurantReview} />
        <Form getAllReviews={this.getAllReviews} />
      </>
    );
  }
}

export default App;

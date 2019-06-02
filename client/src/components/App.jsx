import React from 'react';
import { connect } from 'react-redux';
import Form from './Form';
import RestaurantReview from './RestaurantReview';
import AllReviews from './AllReviews';
import getAllReviews from '../redux/allReviewsAction';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantReview: {},
      reviewScoreDisplay: false,
    };
    this.handleRestaurantClick = this.handleRestaurantClick.bind(this);
  }

  componentDidMount() {
    this.props.getAllReviews();
  }

  handleRestaurantClick(e) {
    const { allReviews } = this.props;
    const { restaurantReview, reviewScoreDisplay } = this.state;
    for (let i = 0; i < allReviews.length; i += 1) {
      if (e.target.value === restaurantReview.restaurant) {
        this.setState({
          reviewScoreDisplay: !reviewScoreDisplay,
        });
      } else if (e.target.value === allReviews[i].restaurant) {
        this.setState({
          restaurantReview: allReviews[i],
          reviewScoreDisplay: true,
        });
      }
    }
  }

  render() {
    const { allReviews } = this.props;
    const { restaurantReview, reviewScoreDisplay } = this.state;
    return (
      <>
        <h1>Slurp & Burp</h1>
        <AllReviews allReviews={allReviews} handleRestaurantClick={this.handleRestaurantClick} />
        <RestaurantReview
          restaurantReview={restaurantReview}
          reviewScoreDisplay={reviewScoreDisplay}
        />
        <Form getAllReviews={this.getAllReviews} />
      </>
    );
  }
}

const mapStateToProps = state => ({
  allReviews: state.allReviews,
});

const mapDispatchToProps = dispatch => ({
  getAllReviews: () => { dispatch(getAllReviews()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React from 'react';
import axios from 'axios';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Toshi',
      restaurant: '',
      formality: '',
      ratingAtmosphere: 0,
      ratingPrice: 0,
      ratingService: 0,
      ratingFood: 0,
    };
  }

  postReview() {
    const { username } = this.state;
    axios.post(`/${username}`, this.state)
      .then(res => console.log(res))
      .catch(err => console.log('POST ERROR: ', err));
  }

  render() {
    return (
      <form>
        
      </form>
    )
  }
}

export default Form;

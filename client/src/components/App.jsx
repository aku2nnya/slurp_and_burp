import React from 'react';
import axios from 'axios';
import Form from './Form';
import AllReviews from './AllReviews';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allReviews: [],
    };
    this.getAllReviews = this.getAllReviews.bind(this);
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

  render() {
    const { allReviews } = this.state;
    return (
      <>
        <div>Slurp & Burp</div>
        <AllReviews allReviews={allReviews} />
        <Form getAllReviews={this.getAllReviews} />
      </>
    );
  }
}

export default App;

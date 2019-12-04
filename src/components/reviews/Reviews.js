import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const filteredReviews = this.props.reviews.filter(r => r.restaurantId == this.props.restaurant.id)
    return (
      <ul>
        {this.props.reviews.map(r => <Review review={r} deleteReview={this.props.deleteReview} />)}
      </ul>
    );
  }
};

export default Reviews;
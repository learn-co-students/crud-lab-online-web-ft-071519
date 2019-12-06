import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  renderReviews = () => {
    const restaurantRiviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId);
       return restaurantRiviews.map(review => <Review deleteReview={this.props.deleteReview} key={review.id} review={review}/>)
}


  render() {
    console.log(this.props)
    return (
      <ul>
        Reviews
        {this.renderReviews()}
      </ul>
    );
  }
};

export default Reviews;
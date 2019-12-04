import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux';

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput restaurant={this.props.restaurant} addReview={this.props.addReview} />
        <Reviews restaurant={this.props.restaurant} reviews={this.props.reviews} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { reviews: state.reviews }
}

const mapDispatchToProps = dispatch => {
  return {
    addReview: review => dispatch({type: 'ADD_REVIEW', text: review.text, restaurantId: review.restaurantId})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);

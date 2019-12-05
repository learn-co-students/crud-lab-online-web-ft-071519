import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux';

class ReviewsContainer extends Component {

  filterReviews = () => {
    return this.props.reviews.filter(review => review.restaurantId === this.props.restaurant.id);
  }

  render() {
    return (
      <div>
        <ReviewInput restaurant={this.props.restaurant} restaurantId={this.props.restaurant.id} addReview={this.props.addReview} />
        <Reviews restaurant={this.props.restaurant} restaurantId={this.props.restaurant.id} addReview={this.props.addReview} deleteReview={this.props.deleteReview} reviews={this.props.reviews}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { reviews: state.reviews }
}

const mapDispatchToProps = dispatch => {
  return {
    addReview: review => dispatch({type: 'ADD_REVIEW', text: review.text, restaurantId: review.restaurantId}),
    deleteReview: id => dispatch({type: 'DELETE_REVIEW', id })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);

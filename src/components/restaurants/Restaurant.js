import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {

  handleDeleteClick = () => {
    console.log('in handleDeleteClick');
    //send id to dispatch action to delete restaurant
    this.props.deleteRestaurant(this.props.restaurant.id);
  }

  render() {
    console.log('props', this.props)
    const { restaurant } = this.props;

    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick={this.handleDeleteClick}> X </button>
          <ReviewsContainer restaurant={restaurant}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;

import React, { Component } from 'react';
import Restaurant from "./Restaurant"

class Restaurants extends Component {

  renderRestaurants = () => this.props.restaurants.map(restaurant => <Restaurant  deleteRestaurant={this.props.deleteRestaurant} key={restaurant.id} restaurant={restaurant}/>)
  render() {
    return(
      <ul>
        Restaurants Component
        {this.renderRestaurants()}
      </ul>
    );
  }
};

export default Restaurants;
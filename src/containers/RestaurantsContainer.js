import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from 'react-redux'

class RestaurantsContainer extends Component {

  renderRestaurant = () => {

    return this.props.restaurants.map(restaurant => <Restaurants delete={this.props.delete} restaurant={restaurant} key={restaurant.id} />)
  }

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant} />

        {this.renderRestaurant()}
      </div>
    )
  }
}

//export default RestaurantsContainer
const mapStateToProps = ({ restaurants }) => ({ restaurants })


const mapDispatchToProps = dispatch => {

  return {
    addRestaurant: name => dispatch({ type: "ADD_RESTAURANT", name })
    , delete: id => dispatch({ type: 'DELETE_RESTAURANT', id })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);
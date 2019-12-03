import React, { Component } from 'react';
import { timingSafeEqual } from 'crypto';

class RestaurantInput extends Component {
  constructor() {
    super();
    this.state = {
      text: ''
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addRestaurant(e.target.querySelector('input').value);
  }

  handleChange = e => {
    this.setState({ text: e.target.value })
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input type="text" value={this.state.text} name="restaurant-name" onChange={e => this.handleChange(e)}/>
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;

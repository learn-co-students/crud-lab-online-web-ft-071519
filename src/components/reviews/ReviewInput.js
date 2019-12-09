import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor() {
    super();
    this.state = {text: ''}
  }

  handleOnChange = e => {
    this.setState({text: e.target.value})
  }

  handleOnSubmit = e => {
    e.preventDefault();
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurant.id});
    this.setState({ text: '' });
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleOnSubmit(e)}>
          <input type="text" name="review" value={this.state.text} onChange={e => this.handleOnChange(e)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;

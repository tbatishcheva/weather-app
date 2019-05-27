import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

class Form extends Component {
  static propTypes = {
    getWeather: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div>
        <form onSubmit={this.props.getWeather}>
          <input type="text" name="city" placeholder="City..." />
          <input type="text" name="country" placeholder="Country..." />
          <Button type="submit" variant="outline-primary">Get weather</Button>
        </form>
      </div>
    );
  }
}

export default Form;

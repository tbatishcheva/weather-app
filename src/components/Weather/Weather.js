import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Weather extends Component {
  static propTypes = {
    city: PropTypes.string,
    country: PropTypes.string,
    description: PropTypes.string,
    error: PropTypes.string,
    humidity: PropTypes.number,
    temperature: PropTypes.number,
  };

  static defaultProps = {
    city: '',
    country: '',
    description: '',
    error: '',
    humidity: 0,
    temperature: 0,
  }

  render() {
    return (
      <div>
        {this.props.country && this.props.city
        && (
        <p>
          Location:
          <span>
            {this.props.city}
            ,
            {this.props.country}
          </span>
        </p>
        )
        }
        {this.props.temperature
        && (
        <p>
          Temperature:
          <span>{this.props.temperature}</span>
        </p>
        )}
        {this.props.humidity
        && (
        <p>
          Humidity:
          <span>{this.props.humidity}</span>
        </p>
        )}
        {this.props.description
        && (
        <p>
          Conditions:
          <span>{this.props.description}</span>
        </p>
        )}
        {this.props.error
        && <p>{this.props.error}</p>}
      </div>
    );
  }
}

export default Weather;

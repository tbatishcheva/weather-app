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
        <p className="weather__key">
          Location:
          <span className="weather__value">
            {this.props.city}
            ,
            {this.props.country}
          </span>
        </p>
        )
        }
        {this.props.temperature
        && (
        <p className="weather__key">
          Temperature:
          <span className="weather__value">{this.props.temperature}</span>
        </p>
        )}
        {this.props.humidity
        && (
        <p className="weather__key">
          Humidity:
          <span className="weather__value">{this.props.humidity}</span>
        </p>
        )}
        {this.props.description
        && (
        <p className="weather__key">
          Conditions:
          <span className="weather__value">{this.props.description}</span>
        </p>
        )}
        {this.props.error
        && <p className="weather__key">{this.props.error}</p>}
      </div>
    );
  }
}

export default Weather;

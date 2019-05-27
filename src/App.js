import React, { Component } from 'react';
import Titles from './components/Titles/Titles';
import Form from './components/Form/Form';
import Weather from './components/Weather/Weather';

const API_KEY = '5745e1832e9dd99c2aee4b36aa4baf12\n';

class App extends Component {
  state = {
    temperature: null,
    city: null,
    country: null,
    humidity: null,
    description: null,
    error: 'Please enter the values.',
  };

  getWeather = (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`;
    fetch(url).then((response) => {
      if (response.status !== 200) { throw new Error('!'); }
      return response.json();
    }).then((data) => {
      if (city && country) {
        this.setState({
          temperature: data.main.temp,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          error: null,
        });
      } else {
        this.setState({
          temperature: null,
          city: null,
          country: null,
          humidity: null,
          description: null,
          error: 'Please enter the values.',
        });
      }
    }).catch(() => {});
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">

                  <Form getWeather={this.getWeather} />
                  <Weather
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

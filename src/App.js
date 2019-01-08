import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux'
import { updateWeather} from "./actions/weather-actions";

class App extends Component {
    constructor(props) {
        super(props);

        this.onUpdateWeather = this.onUpdateWeather.bind(this)
    }

    onUpdateWeather(event) {
        this.props.onUpdateWeather(event.target.value);
    }


  render() {
    return (
      <div className="App">
        <header className="App-header">
            <input onChange={this.onUpdateWeather}/>
            {this.props.weather}
            <div className="weather">Weather</div>
        </header>
      </div>
    );
  }
}
const mapStateToProps = state => ({
    city: state.City,
    weather: state.Weather
});

const mapActionToProps = {
    onUpdateWeather: updateWeather,
};

export default connect(mapStateToProps,mapActionToProps)(App);

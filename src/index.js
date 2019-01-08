import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {combineReducers, createStore} from "redux";
import { Provider } from 'react-redux';
import cityReducer from './reducers/city-reducers'
import weatherReducer from './reducers/weather-reducers'

const allReducers = combineReducers({
    City: cityReducer,
    Weather: weatherReducer
})

const store = createStore(
    allReducers,
    {
        City: [{ city: 'Vilnius'}],
        Weather: 'Cold'
    },  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__());






/*console.log(store.getState());

const updateWeatherAction = {
    type: 'changeWeather',
    payload: {
        Weather: 'Sunny'
    }
};

store.dispatch(updateWeatherAction);*/

/*console.log(store.getState())*/

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

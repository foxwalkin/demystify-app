import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import './App.css';
import MystifyCanvas from './MystifyCanvas'

const initialState = {
	width: 320,
	height: 240,
	fps: 60,
	speed: 5,
	fadeSpeed: 3,
	numPoints: 5
}

const store = createStore(rootReducer, initialState);

class App extends Component {
  render() {
    return (
			<Provider store={store}>
        <MystifyCanvas state={store.getState()} />
			</Provider>
    );
  }
}

export default App;
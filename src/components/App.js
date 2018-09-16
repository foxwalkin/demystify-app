import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import './App.css';
import FrameRateSlider from './FrameRateSlider';
import MystifyCanvas from './MystifyCanvas';

const initialState = {
	width: 320,
	height: 240,
	color: {
		r: 15,
		g: 237,
		b: 183
	},
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
				<div className="App">
					<FrameRateSlider state={store.getState()} />
	        <MystifyCanvas state={store.getState()} />
	      </div>
			</Provider>
    );
  }
}

export default App;

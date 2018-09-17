import React, { Component } from 'react';
import './App.css';
import Color from './Color';
import FrameRateSlider from './FrameRateSlider';
import SpeedSlider from './SpeedSlider';
import TrailLengthSlider from './TrailLengthSlider';
import PointsSlider from './PointsSlider';
import MystifyCanvas from './MystifyCanvas';

class App extends Component {
  render() {
    return (
		<div className="App">
			<Color/>
			<FrameRateSlider/>
			<SpeedSlider/>
			<TrailLengthSlider/>
			<PointsSlider/>
	        <MystifyCanvas/>
	    </div>
    );
  }
}

export default App;

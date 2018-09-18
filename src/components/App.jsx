import React, { Component } from 'react';
import './App.css';
import LoadPreset from './LoadPreset';
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
			<LoadPreset/>
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

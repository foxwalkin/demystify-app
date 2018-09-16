import React, { Component } from 'react';
import './App.css';
import FrameRateSlider from './FrameRateSlider';
import MystifyCanvas from './MystifyCanvas';

class App extends Component {
  render() {
    return (
			<div className="App">
				<FrameRateSlider/>
        <MystifyCanvas/>
      </div>
    );
  }
}

export default App;

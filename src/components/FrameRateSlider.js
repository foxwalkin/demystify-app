import React, { Component } from 'react';

class FrameRateSlider extends Component {
  render() {
    return (
    	<div className="slider">
    		Frame Rate:
	    	<input
	    		type="range"
	    		min="1"
	    		max="60"
	    		value={this.props.state.fps}
	    		onChange={setFps}
	    	/>
	    	<span>{this.props.state.fps}</span>
	    </div>
    );
  }
}

export default FrameRateSlider;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setFps } from '../actions'
import { bindActionCreators } from 'redux'

class FrameRateSlider extends Component {
	handleChange(event) {
		this.props.setFps(event.target.value);
	}

	render() {
	    return (
	    	<div className="slider">
	    		Frame Rate:
		    	<input
		    		type="range"
		    		min="1"
		    		max="60"
		    		value={this.props.fps}
		    		onChange={this.handleChange.bind(this)}
		    	/>
		    	<span>{this.props.fps}</span>
		    </div>
	    );
	}
}

const mapStateToProps = (state) => {
	return {
		fps: state.mystify.fps,
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ setFps }, dispatch);
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
	)(FrameRateSlider);

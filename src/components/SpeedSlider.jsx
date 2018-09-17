import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSpeed } from '../actions'
import { bindActionCreators } from 'redux'

class FrameRateSlider extends Component {
	handleChange(event) {
		this.props.setSpeed(event.target.value);
	}

	render() {
	    return (
	    	<div className="slider">
	    		Speed:
		    	<input
		    		type="range"
		    		min="10"
		    		max="100"
		    		value={this.props.speed*10}
		    		onChange={this.handleChange.bind(this)}
		    	/>
		    	<span>{this.props.speed*10}</span>
		    </div>
	    );
	}
}

const mapStateToProps = (state) => {
	return {
		speed: state.mystify.speed,
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ setSpeed }, dispatch);
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
	)(FrameRateSlider);

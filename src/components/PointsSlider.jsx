import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setNumberOfPoints } from '../actions'
import { bindActionCreators } from 'redux'

class PointsSlider extends Component {
	handleChange(event) {
		this.props.setNumberOfPoints(event.target.value);
	}

	render() {
	    return (
	    	<div className="slider">
	    		Points:
		    	<input
		    		type="range"
		    		min="2"
		    		max="10"
		    		value={this.props.numPoints}
		    		onChange={this.handleChange.bind(this)}
		    	/>
		    	<span>{this.props.numPoints}</span>
		    </div>
	    );
	}
}

const mapStateToProps = (state) => {
	return {
		numPoints: state.mystify.numPoints,
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ setNumberOfPoints }, dispatch);
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
	)(PointsSlider);

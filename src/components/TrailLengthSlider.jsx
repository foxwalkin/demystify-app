import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setTrailLength } from '../actions'
import { bindActionCreators } from 'redux'

class TrailLengthSlider extends Component {
	handleChange(event) {
		this.props.setTrailLength(event.target.value);
	}

	render() {
	    return (
	    	<div className="slider">
	    		Trail Length:
		    	<input
		    		type="range"
		    		min="0"
		    		max="500"
		    		value={this.props.trailLength}
		    		onChange={this.handleChange.bind(this)}
		    	/>
		    	<span>{this.props.trailLength}</span>
		    </div>
	    );
	}
}

const mapStateToProps = (state) => {
	return {
		trailLength: state.mystify.trailLength,
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ setTrailLength }, dispatch);
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
	)(TrailLengthSlider);

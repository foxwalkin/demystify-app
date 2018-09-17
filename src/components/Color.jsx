import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setColor } from '../actions';
import { bindActionCreators } from 'redux';
import { rgbToHex, hexToRgb } from '../utils/Color';

class Color extends Component {

	handleChange(event) {
		let newColor = hexToRgb(event.target.value)
		this.props.setColor(newColor);
	}

	render() {
	    return (
	    	<div className="slider">
	    		Color:
		    	<input
		    		type="color"
		    		value={this.props.color}
		    		onChange={this.handleChange.bind(this)}
		    	/>
		    </div>
	    );
	}
}

const mapStateToProps = (state) => {
	return {
		color: rgbToHex(state.mystify.color.r, state.mystify.color.g, state.mystify.color.b)
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ setColor }, dispatch);
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
	)(Color);

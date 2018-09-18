import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadPreset } from '../actions';
import { bindActionCreators } from 'redux';
import { isNumeric } from '../utils/Number';
import presets from './presets';

class LoadPreset extends Component {

	handleChange(event) {
		if (isNumeric(event.target.value) && event.target.value >= 0 && event.target.value < presets.length) {
			this.props.loadPreset(presets[event.target.value]);
		}
	}

	render() {
	    return (
	    	<div className="slider">
	    		Load Preset:
	    		<select onChange={this.handleChange.bind(this)}>
	    			<option>Select Preset</option>
	    			{presets.map((preset, i) => {
	    				return (<option key={i} value={i}>{preset.name}</option>)
	    			})}
	    		</select>
		    </div>
	    );
	}
}

// const mapStateToProps = (state) => {
// 	return {
// 		state: state.mystify
// 	}
// }

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ loadPreset }, dispatch);
}

export default connect(
	// mapStateToProps,
	null,
	mapDispatchToProps
	)(LoadPreset);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ResizableBox } from 'react-resizable';
import { setSize } from '../actions';
import { bindActionCreators } from 'redux'
import { MAX_FPS } from '../constants';
import './MystifyCanvas.css';

class MystifyCanvas extends Component {
	/* I put these here instead of in the state because I imagine
	 * since updates are happening at a high rate and Redux keeps
	 * the full history of all state changes that we could run into
	 * serious memory problems.
	 *
	 * It isn't necessary to keep track of individual changes to the
	 * canvases trail and point data for our specific purposes here.
	 *
	 * Another thing I know in React you're not supposed to reach into
	 * the DOM but I don't know of any faster way to actually draw onto
	 * the canvas, or for all I know this may not even be a problem,
	 * but for our purposes of just drawing on a single canvas this
	 * works fine.
	 */

	speedx;
	speedy;
	trail = [];
	points = [];

	componentDidMount() {
		this.initialize();
		// Using setTimeout instead of original setInterval
		// so that we can change the fps in real time
		setTimeout(this.drawFrame.bind(this), 1000 / this.props.fps)
	}

	newPoint() {
		const canvas = this.refs.canvas;
		return {
			x: Math.random() * canvas.width,
			y: Math.random() * canvas.height,
			angle: Math.random() * (Math.PI*2)			
		}
	}

	addPoint(point) {
		if (!point) point = this.newPoint();
		this.points.push(point);
	}

	initialize() {
		for (let i=0; i < this.props.numPoints; i++) {
			this.addPoint();
		}
	}

	drawFrame() {
		const canvas = this.refs.canvas;
		const context = this.refs.canvas.getContext('2d');

		let speed = this.props.speed * (MAX_FPS / this.props.fps);
		// let fadeSpeed = this.props.fadeSpeed * (MAX_FPS / this.props.fps);
		let fadeSpeed = 100 / this.props.trailLength;

		// Number of Points upadtes
		if (this.points.length < this.props.numPoints) {
			let diff = this.props.numPoints - this.points.length;
			for (let i=0; i < diff; i++) {
				this.addPoint();
			}
			// for (let i=0; i < this.trail.length; i++) {
			// 	this.trail[i] = [
			// 		this.trail[i].slice(0, ((this.props.numPoints) * 2) - 1),
			// 		this.trail[i].slice(-1)
			// 	];
			// }
		} else if (this.points.length > this.props.numPoints) {
			this.points = this.points.slice(0, this.props.numPoints);
			// for (let i=0; i < this.trail.length; i++) {
			// 	this.trail[i] = [
			// 		this.trail[i].slice(0, ((this.props.numPoints) * 2) - 1),
			// 		this.trail[i].slice(-1)
			// 	];
			// }
		}

		context.beginPath();
		context.strokeStyle = `rgba(${this.props.color.r},${this.props.color.g},${this.props.color.b},100)`;
		context.clearRect(0, 0, canvas.width, canvas.height);

		let dat = [];
		let mod = null;
		let hitWall = false;

		for (let i=0; i < this.points.length; i++) {
			if (i===0) context.moveTo(this.points[i].x, this.points[i].y);
			else context.lineTo(this.points[i].x, this.points[i].y);

			this.speedx = Math.cos(this.points[i].angle) * speed; 
			this.speedy = Math.sin(this.points[i].angle) * speed;

			if (this.points[i].x + this.speedx >= canvas.width || this.points[i].x + this.speedx <= 0) {
				mod = 0;
				hitWall = true;
			}

			if (this.points[i].y + this.speedy >= canvas.height || this.points[i].y + this.speedy <= 0) {
				mod = Math.PI;
				hitWall = true;
			}

			if (hitWall) {
				this.points[i].angle = ((this.points[i].angle + Math.PI) - (this.points[i].angle * 2)) + mod;
				if (this.points[i].angle > Math.PI*2 ) this.points[i].angle -= Math.PI*2;
				else if (this.points[i].angle < 0) this.points[i].angle += Math.PI*2;
				this.speedx = Math.cos(this.points[i].angle) * speed; 
				this.speedy = Math.sin(this.points[i].angle) * speed;
				hitWall = false;
			}

			this.points[i].x += this.speedx;
			this.points[i].y += this.speedy;

			dat.push(this.points[i].x, this.points[i].y);
		}

		dat.push(100);
		this.trail.push(dat);

		context.closePath();
		context.stroke();

		for (let i=0; i < this.trail.length; i++) {
			let alpha = this.trail[i][this.props.numPoints * 2];
			if (alpha <= 0) this.trail.splice(i, 1);
			context.beginPath();
			context.strokeStyle = `rgba(${this.props.color.r},${this.props.color.g},${this.props.color.b},${alpha / 100})`;
			for (let j=0; j < this.props.numPoints * 2 ; j += 2) {
				if (j === 0) context.moveTo(this.trail[i][j],this.trail[i][j+1]);
				else context.lineTo(this.trail[i][j],this.trail[i][j+1]);
			}
			context.closePath();
			context.stroke();
			this.trail[i][this.props.numPoints * 2] -= fadeSpeed;
		}

		// Again, using setTimeout instead of original setInterval so that we can change
		// the fps in real time
		setTimeout(this.drawFrame.bind(this), 1000 / this.props.fps);
	}

	onResize(event, {element, size}) {
		this.props.setSize(size);
	}

	render() {
	    return (
	    	<div>
	    	<ResizableBox width={this.props.width} height={this.props.height} onResize={this.onResize.bind(this)}>
		    	<canvas ref="canvas" width={this.props.width} height={this.props.height}/>
		    	<div style={{position: 'absolute', right: -96, bottom: -20, fontFamily: 'Arial, sans-serif', fontSize: 14}}>^ Drag to Resize</div>
		    </ResizableBox>
		    </div>
	    );
	}
}

const mapStateToProps = (state) => {
	return {
		color: state.mystify.color,
		speed: state.mystify.speed,
		numPoints: state.mystify.numPoints,
		trailLength: state.mystify.trailLength,
		fps: state.mystify.fps,
		width: state.mystify.width,
		height: state.mystify.height
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ setSize }, dispatch);
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
	)(MystifyCanvas);

export function setFps(fps) {
	return {
		type: 'SET_FPS',
		fps		
	}
}

export function setSpeed(speed) {
	return {
		type: 'SET_SPEED',
		speed
	}
}

export function setTrailLength(trailLength) {
	return {
		type: 'SET_TRAIL_LENGTH',
		trailLength
	}
}

export function setNumberOfPoints(numPoints) {
	return {
		type: 'SET_NUMBER_OF_POINTS',
		numPoints
	}
}

export function setSize(size) {
	return {
		type: 'SET_SIZE',
		size
	}
}

export function setColor(color) {
	return {
		type: 'SET_COLOR',
		color
	}
}

export function loadPreset(preset) {
	return {
		type: 'LOAD_PRESET',
		preset
	}
}

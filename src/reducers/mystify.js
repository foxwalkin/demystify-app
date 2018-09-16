const initialState = {
	width: 320,
	height: 240,
	color: {
		r: 15,
		g: 237,
		b: 183
	},
	fps: 60,
	speed: 5,
	fadeSpeed: 3,
	numPoints: 5
}

function mystify(state = initialState, action) {
	switch(action.type) {
		case 'SET_FPS':
			return Object.assign({}, state, {
				fps: action.fps
			});
		default:
			return state;
	}
}

import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { render } from 'react-dom';
import App from './components/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer);

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();

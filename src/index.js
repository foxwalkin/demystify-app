import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import rootReducer from './reducers';

// CSS
import './index.css';

// Service Worker
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer);

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();

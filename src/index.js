import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

// CSS
import './index.css';

// Service Worker
import registerServiceWorker from './registerServiceWorker';

render(
	<App />,
	document.getElementById('root')
);

registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { unregister } from './registerServiceWorker';

import './index.css';

ReactDOM.hydrate(<App />, document.getElementById('root'));
unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import Site from './main/Site';
import './assets/css/style.css';
import * as serviceWorker from './serviceWorker';

const content = document.querySelector('#root');

ReactDOM.render(<Site />, content );
serviceWorker.unregister();

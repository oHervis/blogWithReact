import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'

import './assets/css/main.css';
ReactDOM.render(
    <BrowserRouter>      
        <App id="top"/>
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();

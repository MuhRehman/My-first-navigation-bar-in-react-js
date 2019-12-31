import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
// import Slider from './components/slider';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<slider />, document.getElementById('root'));


serviceWorker.unregister();

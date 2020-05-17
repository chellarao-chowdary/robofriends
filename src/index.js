import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Card from './Card'; // Importing the component
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';   // Predefined CSS



ReactDOM.render(<App/>,document.getElementById('root'));











// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

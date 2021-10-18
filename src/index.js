import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import {BrowserRouter as Router} from 'react-router-dom'

const [mostImportantItem, second] = [
  'boots', 
  'tent', 
  'headlamp'
];
console.log(mostImportantItem, second)

ReactDOM.render(
  <Router>
    <App login="subzero783" />
  </Router>,
  document.getElementById('root')
);
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'

const [mostImportantItem, second] = [
  'boots', 
  'tent', 
  'headlamp'
];
console.log(mostImportantItem, second)

ReactDOM.render(
  <App login="subzero783" />,
  document.getElementById('root')
);
'use strict';

console.log('App.js is running!');

// JSX - Javascript XML
var template = React.createElement(
  'p',
  null,
  'This is JSX from app.js..hey'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);

console.log('App.js is running!');

// JSX - Javascript XML
var template = <p>This is JSX from app.js..hey</p>;
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
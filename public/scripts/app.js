'use strict';

console.log('App.js is running!');

// JSX - Javascript XML

var content = {
    title: 'It was a dark rainy night',
    subtitle: 'Not a creature in sight',
    options: []
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        content.title
    ),
    content.subtitle && React.createElement(
        'p',
        null,
        content.subtitle
    ),
    React.createElement(
        'p',
        null,
        content.options.length > 0 ? 'here are your options' : 'No options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        ),
        React.createElement(
            'li',
            null,
            'Item three'
        )
    )
);
var user = {
    name: 'Matt',
    age: 43,
    location: 'Minneapolis'
};
function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'location: ',
            location
        );
    }
}

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);

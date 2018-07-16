console.log('App.js is running!');

// JSX - Javascript XML

var content = {
    title: 'It was a dark rainy night',
    subtitle: 'Not a creature in sight',
    options: []
}

var template = (
    <div>
        <h1>{content.title}</h1>
        {content.subtitle && <p>{content.subtitle}</p>}
        <p>{content.options.length > 0 ? 'here are your options' : 'No options'}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
            <li>Item three</li>
        </ol>
    </div>
);
var user = {
    name: 'Matt',
    age: 43,
    location: 'Minneapolis'
};
function getLocation(location){
    if (location){
        return <p>location: {location}</p>;
    }
}

var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {user.age >= 18 && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);
    
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
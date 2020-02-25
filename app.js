// Example 1: Render string with .render:
// const appRoot = document.querySelector('#application-root');
// ReactDOM.render('hello world!', appRoot);

// Example 2: Render element with .createElement:

const appRoot = document.querySelector('#application-root');
const myGreeting = React.createElement('h1', null, 'Hello world!');

ReactDOM.render(myGreeting, appRoot);
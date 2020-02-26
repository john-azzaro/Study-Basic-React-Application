# Basic React Application
See it Live: https://john-azzaro.github.io/Study-Basic-React-Application/

<br>

## What is the Basic React Application Study?
The Basic React Application study is a intermediate examination of React functionality of a single stateless component using CDN React Libraries. The study includes the 
selection of the "application root", creating elements via ```React.createElement```, and rendering elements to the DOM using ```ReactDOM.render(). 

Here are a few questions from the study to consider:

* [What are the key takeaways from the Basic React Study?](#What-are-the-key-takeaways-from-the-Basic-React-Study)
* [Does the React Basic Application study feature commentary?](#Does-the-React-Basic-Application-study-feature-commentary)
* [Screenshots](#Screenshots)

<br>

## What are the key takeaways from the Basic React Study?

<dl>
<dd>

### React and ReactDOM are available via CDN.
----------------
React library CDN is for the global variable and the ReactDOM contains the methods that live on the global variable ReactDOM and is used to connect
React to the DOM. **Use .development CDN for development which will give detailed error messages.**


| **Library:**                            | **CDN:**                           |
| --------------------------------------- | ----------------------------------------------|
| React (Development)                     |   <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>          |
| ReactDOM (Development)                  |   <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>        |
| React (Production)                      |   <script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>  |  
| ReactDOM (Production)                   |   <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>  |  

<br>

### React needs an anchor-point to render the application to.
-----------------
You need to create an anchor point in order for your JavaScript to select and render the React application to. In the case of this study, its a empty div
with an id of "application-root". 
```HTML
  <body>
    <div id="application-root"></div>

  </body>
```
In your JavaScript file, you simply need to select it and store as a const.
```JavaScript
  const appRoot = document.querySelector('#application-root');
```

<br>

### Use the ReactDOM.render() method to render elements to a container.
------------
ReactDOM.render() takes two arguments, the first is the contents of the container and the second is the DOM element you insert the application into.

```JavaScript   
   ReactDOM.render(element, container);
```  

<br>

### Use React.createElement() to write HTML elements to React applications.
---------
Although you *can* pass a string to the element parameter of ReactDOM.render(), you cant make complicated applications that way. You need to 
use React.createElement(). You pass 3 parameters, the type, the props, and the children. The type is the element type (i.e. h1, h2, p, etc.), the "props"
is a special keyword which stands for "properties" and is used for passing data between one component and another. In the case of this study, the properties is
set to null since we are not passing any information here. The children is the content for the element (which in this case is the string "Hello world!").

```JavaScript
    const myVariable = React.createElement('type', props, 'children');
 //                                          |     |          |
 // const myGreeting = React.createElement('h1', null, 'Hello world!');
```


</dd>
</dl>

<br>

## Does the React Basic Application study feature commentary?
Yes! I use extensive Commentary (mostly in the form of my thought process) so that the new and curious can follow the logic in the program and get an idea of my reasoning behind each and every line of the code.  In addition to my line-by-line commantary, I also provide a processNotes file that gives a good outline of my design and implementation process. 

<br>

## Screenshots
![reactbasicApppic](https://user-images.githubusercontent.com/37447586/75314856-d3d91c00-5815-11ea-98af-1e50e05a0737.png)

# Basic React Application
See it Live: https://john-azzaro.github.io/Study-Basic-React-Application/

<br>

## What is the Basic React Application Study?
The Basic React Application study is a intermediate examination of React functionality of a single stateless component using CDN React Libraries. The study includes the 
selection of the "application root", creating elements via ```React.createElement```, and rendering elements to the DOM using ```ReactDOM.render(). 

Here are a few questions from the study to consider:

* [What are the key takeaways from the Basic React Study?](#What-are-the-key-takeaways-from-the-Basic-React-Study)
* [Screenshots](#Screenshots)

<br>

# What are the key takeaways from the Basic React Study?

<dl>
<dd>

## React and ReactDOM are available via CDN.
React library CDN is for the global variable and the ReactDOM contains the methods that live on the global variable ReactDOM and is used to connect
React to the DOM. **Use .development CDN for development which will give detailed error messages.**


| **Library:**                            | **CDN:**                           |
| --------------------------------------- | ----------------------------------------------|
| React (Development)                     |   <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>          |
| ReactDOM (Development)                  |   <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>        |
| React (Production)                      |   <script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>  |  
| ReactDOM (Production)                   |   <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>  |  

<br>

## React needs an anchor-point to render the application to.
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

## Use the ReactDOM.render() method to render elements to a container.
ReactDOM is the glue between React and the DOM and is mostly used to mount with the .render method. In effect, it is the function that does the creating and updating. ReactDOM.render() takes two arguments, the first is the **element** which is the contents of the container and the second is the **container** which is the location you want to *render* you element to. 

```JavaScript   
   ReactDOM.render(element, container);               // Model
```  

In the practical applicatione example below, we are using ```ReactDOM.render()``` to *render* the element 'Hello world' (a basic string) to the anchor point appRoot, which is the anchor-point we specified at the beginning of the application. Note that although you can pass strings as an element in this case, for more complex application you will need to pass in stored variables with more elaborate HTML.
```JavaScript   
   ReactDOM.render('Hello world', appRoot);           // Practical Example rendering a string to a container.
```  

<br>

## Use React.createElement() to write HTML elements to React applications.
React.createElement() creates a JavaScript object with enough information inside it to descibe a single node in the DOM.You pass 3 parameters, the type, the props, and the children. The **type** specified what the *type* of element you are creating will be (i.e. h1, h2, p, etc.), the "props" parameter stands for "properties" and is used specify the attributes on the elemnt as well as passing data between one component and another. In the case of this study, the properties is set to null since we are not passing any information here. The **children** parameter is the element content. It can contain a string (which in this case is the string "Hello world!"), another React element, or an array (containng strings or React elements).

```JavaScript
    const myVariable = React.createElement('type', props, 'children');
 //                                          |     |          |
 // const myGreeting = React.createElement('h1', null, 'Hello world!');
```


</dd>
</dl>

<br>

# Screenshots
![reactbasicApppic](https://user-images.githubusercontent.com/37447586/75314856-d3d91c00-5815-11ea-98af-1e50e05a0737.png)

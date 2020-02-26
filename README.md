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

### Add an anchor-point for your React application.
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



</dd>
</dl>
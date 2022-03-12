import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*
public/index.html: When the application starts this is the first page that is loaded.
This will be the only html file in the entire application since React is generally Written using JSX
which I will cover later. Also, this file has a line of code <div id=”root”></div>.
This line is very significant since all the application components are loaded into this div.
*/



/*
StrictMode est un outil pour détecter les problèmes potentiels d’une application.
Tout comme Fragment, StrictMode n’affiche rien. Il active des vérifications et avertissements supplémentaires pour ses descendants.
*/
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

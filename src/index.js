import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import GithubContextProvider from './context/GithubContextProvider';
//bootstrap ibrary
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <GithubContextProvider>
    <App />
  </GithubContextProvider>,
  document.getElementById('root')
);

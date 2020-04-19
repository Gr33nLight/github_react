import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import GithubStateProvider from './context/GithubStateProvider';
//bootstrap ibrary
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <GithubStateProvider>
    <App />
  </GithubStateProvider>,
  document.getElementById('root')
);

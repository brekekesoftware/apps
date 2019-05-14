import { configure } from 'mobx';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';

import App from './App';
import history from './router/history';
import './styles/main.scss';

configure({ enforceActions: 'always' });

const app = (
  <Router history={history}>
    <App />
  </Router>
);
ReactDOM.render(app, document.getElementById('root'));

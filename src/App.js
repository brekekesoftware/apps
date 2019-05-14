import React from 'react';
import Page404 from './components/Page404';
import PageDev from './components/PageDev';
import PageMain from './components/PageMain';
import { Switch, Route } from 'react-router-dom';

const App = () => (
  <Switch>
    <Route path="/" exact component={PageMain} />
    <Route path="/dev" component={PageDev} />
    <Route component={Page404} />
  </Switch>
);

export default App;

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Page404 from './components/Page404';
import PageDev from './components/PageDev';
import PageMain from './components/PageMain';

const App = () => (
  <Switch>
    <Route path="/" exact component={PageMain} />
    <Route path="/dev" component={PageDev} />
    <Route component={Page404} />
  </Switch>
);

export default App;

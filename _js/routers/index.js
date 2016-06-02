import React from 'react';
import {Router, Route, IndexRedirect, useRouterHistory} from 'react-router';
import {createHistory} from 'history';

import {App, Home, Social} from '../pages';
import {basename} from '../globals';

export default () => (

  <Router history={useRouterHistory(createHistory)({basename})}>

    <Route path='/' component={App}>
      <IndexRedirect to='home' />
      <Route path='home' component={Home} />

      <Route path='social' component={Social} />

    </Route>

  </Router>

);

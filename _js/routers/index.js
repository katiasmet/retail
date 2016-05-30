import React from 'react';
import {Router, Route, Redirect, IndexRoute, useRouterHistory} from 'react-router';
import {createHistory} from 'history';

import {App} from '../pages';
import {basename} from '../globals';

export default () => (

  <Router history={useRouterHistory(createHistory)({basename})}>

    <Route path='/' component={App}>
    </Route>

  </Router>

);

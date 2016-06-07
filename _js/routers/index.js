import React from 'react';
import {Router, Route, IndexRedirect, useRouterHistory} from 'react-router';
import {createHistory} from 'history';

import {App, LeftScreen, RightScreen, AboutMe, MadeForMe, MadeByMe} from '../pages';
import {basename} from '../globals';

export default () => (

  <Router history={useRouterHistory(createHistory)({basename})}>

    <Route path='/' component={App}>

      <IndexRedirect to='leftscreen' />

      <Route path='leftscreen' component={LeftScreen} >
        <IndexRedirect to='aboutme' />
        <Route path='aboutme' component={AboutMe} />
        <Route path='madeforme' component={MadeForMe} />
        <Route path='madebyme' component={MadeByMe} />
      </Route>

      <Route path='rightscreen' component={RightScreen}  />

    </Route>


  </Router>

);

import ReactDOM from 'react-dom';
import React from 'react';

import Router from './routers/';

const init = () => {

  ReactDOM.render(
    <Router/>,
    document.querySelector('.react-app')
  );

};

init();

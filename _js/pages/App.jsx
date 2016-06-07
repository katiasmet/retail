import React, {PropTypes} from 'react';

//import {LeftScreen, RightScreen} from './';

const App = ({children}) => {

  return (
    <main className='window'>
      {children}
    </main>
  );

};

App.propTypes = {
  children: PropTypes.node
};

export default App;

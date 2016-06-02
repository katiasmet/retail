import React, {PropTypes} from 'react';

const App = ({children}) => {

  return (
    <div className='container'>
      <main>
        {children}
      </main>
    </div>
  );

};

App.propTypes = {
  children: PropTypes.node
};

export default App;

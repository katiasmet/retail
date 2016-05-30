import React, {PropTypes} from 'react';

const App = ({children}) => {
  return (
    <section className='container'>
      <header>
        <h1>Offline.</h1>
      </header>
      <main>
        {children}
      </main>
    </section>
  );
};

App.propTypes = {
  children: PropTypes.node // of element
};

export default App;

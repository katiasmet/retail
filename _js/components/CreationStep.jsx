import React, {PropTypes} from 'react';

const setStep = i => {
  if( i === 1) {
    return 'eerste';
  } else if( i === 2) {
    return 'tweede';
  } else if( i === 3) {
    return 'derde';
  } else if( i === 4) {
    return 'vierde';
  } else if( i === 5) {
    return 'vijfde';
  } else if( i === 6) {
    return 'zesde';
  }
};

const CreationStep = ({id, info}) =>  {

  return (
    <section className='creation-step active'>
      <h3>{setStep(id)} <span className='step-count'>stap</span></h3>
      <p className='creation-info'>{info}</p>
    </section>
  );

};

CreationStep.propTypes = {
  id: PropTypes.number,
  info: PropTypes.string
};

export default CreationStep;

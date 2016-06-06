import React, {PropTypes} from 'react';

const CreationStep = ({id, info}) =>  {

  return (
    <section className='creation-step'>
      <h3>Stap {id}</h3>
      <p>{info}</p>
    </section>
  );

};

CreationStep.propTypes = {
  id: PropTypes.number,
  info: PropTypes.string
};

export default CreationStep;

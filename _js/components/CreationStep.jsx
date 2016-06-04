import React, {PropTypes} from 'react';

const CreationStep = ({id, info}) =>  {

  return (
    <div className='creation-step'>
      <h3>Stap {id +1}</h3>
      <p>{info}</p>
    </div>
  );

};

CreationStep.propTypes = {
  id: PropTypes.number,
  info: PropTypes.string
};

export default CreationStep;

import React, {PropTypes} from 'react';
import {MorphingBg, StepButtons} from './';

const CreationSteps = ({creationSteps, active, clickHandler}) =>  {

  return (
    <section className='step-container'>

      <MorphingBg id='canvas-left'radius={0.18} fillColors={['#668198', '#531339', '#377b62']} amount={3} />

      <section className='step-circle'>
        <StepButtons creationSteps={creationSteps} clickHandler={clickHandler} active={active}/>
      </section>

    </section>
  );

};

CreationSteps.propTypes = {
  creationSteps: PropTypes.array,
  active: PropTypes.number,
  clickHandler: PropTypes.func
};

export default CreationSteps;

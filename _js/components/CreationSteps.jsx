import React, {PropTypes} from 'react';
import {MorphingBg, StepButtons, StepImages} from './';

const CreationSteps = ({steps, images, active, clickHandler}) =>  {

  return (
    <section className='step-container'>

      <MorphingBg id='canvas-left'radius={0.18} fillColors={['#668198', '#531339', '#377b62']} amount={3} />

      <section className='step-circle'>
        <StepImages images={images} />
        <StepButtons steps={steps} clickHandler={clickHandler} active={active}/>
      </section>

    </section>
  );

};

CreationSteps.propTypes = {
  steps: PropTypes.array,
  images: PropTypes.array,
  active: PropTypes.number,
  clickHandler: PropTypes.func
};

export default CreationSteps;

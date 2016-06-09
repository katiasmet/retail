import React, {PropTypes} from 'react';
import {basename} from '../globals';

const StepImages = ({creationStepImages}) =>  {

  return (
    <section className='step-images'>

      {
        creationStepImages.map((step, i) => {
          return <img key={i} className={`step-image ${step.class}`} src={`${basename}/assets/img/steps/${step.img}`} alt={step.class}/>;
        })
      }

    </section>
  );

};

StepImages.propTypes = {
  creationStepImages: PropTypes.array
};

export default StepImages;

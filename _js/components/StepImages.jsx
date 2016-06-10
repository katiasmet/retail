import React, {PropTypes} from 'react';
import {basename} from '../globals';

const StepImages = ({images}) =>  {

  return (
    <section className='step-images'>

      {
        images.map((image, i) => {
          return <img key={i} className={`step-image ${image.class}`} src={`${basename}/assets/img/steps/${image.img}`} alt={image.class}/>;
        })
      }

    </section>
  );

};

StepImages.propTypes = {
  images: PropTypes.array
};

export default StepImages;

import React, {PropTypes} from 'react';

import {basename} from '../globals';

const AboutMe = ({portrait, quote}) => {

  //alternatief voor GIF: PNG sequence laten loopen. Lukte niet meer met react dus moet in canvas (?)

  return (
    <section className='about-me'>
      <picture className='portrait'>
        <img src={`${basename}/assets/img/${portrait}`} alt={portrait}/>
      </picture>

      <p className='quote'>{`"${quote}"`}</p>
    </section>
  );

};

AboutMe.propTypes = {
  portrait: PropTypes.string,
  quote: PropTypes.string
};

export default AboutMe;

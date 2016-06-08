import React, {PropTypes} from 'react';

import {basename} from '../globals';
const AboutMe = ({portrait, quote}) => {

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

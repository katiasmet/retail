import React, {PropTypes} from 'react';

const AboutMe = ({portrait, quote}) => {

  return (
    <section className='about-me'>
      <picture className='portrait'>
        <img src={`/assets/img/${portrait}`} alt={portrait}/>
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

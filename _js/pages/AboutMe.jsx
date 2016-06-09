import React, {PropTypes} from 'react';

import {Portrait} from '../components';

const AboutMe = ({portrait, quote}) => {

  return (
      <Portrait portrait={portrait} quote={quote}/>
  );

};

AboutMe.propTypes = {
  portrait: PropTypes.string,
  quote: PropTypes.string
};

export default AboutMe;

import React, {PropTypes} from 'react';

import {StoreHeader, Navigation, RelatedStores, Portrait} from '../components';

const AboutMe = ({name, craft, tags, icon, pathname, portrait, quote, stores}) => {

  return (
    <section className='left-screen about-me-container'>

      <StoreHeader name={name} craft={craft} tags={tags} icon={icon} />
      <Navigation pathname={pathname} />

      <Portrait portrait={portrait} quote={quote}/>

      <RelatedStores stores={stores} />

    </section>
  );

};

AboutMe.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  craft: PropTypes.string,
  tags: PropTypes.array,
  icon: PropTypes.string,
  pathname: PropTypes.string,
  portrait: PropTypes.string,
  quote: PropTypes.string,
  stores: PropTypes.array
};

export default AboutMe;
